package services

import (
	"context"
	"fmt"

	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
	"github.com/wufe/core/models"
	"github.com/wufe/core/proto/services"
)

type EnqueueServerImpl struct {
	db        *gorm.DB
	hookChans [](chan *services.DownloadHookEvent)
	logChans  [](chan *services.LogInputValueObject)
}

func (server *EnqueueServerImpl) EnqueueDownload(ctx context.Context, inputModel *services.DownloadInputValueObject) (*services.DownloadOutputEntityModel, error) {
	download := &models.Download{
		UUID:    uuid.New().String(),
		URL:     inputModel.Url,
		Retries: inputModel.Retries,
		Status:  services.DownloadStatus_IDLE,
	}
	server.db.Create(download)
	downloadOutputEntityModel := &services.DownloadOutputEntityModel{
		Id:      int64(download.ID),
		Uuid:    download.UUID,
		Url:     download.URL,
		Retries: download.Retries,
		Status:  download.Status,
	}
	server.BroadcastDownloadEvent(downloadOutputEntityModel, services.HookEventType_ADDED)
	return downloadOutputEntityModel, nil
}

func (server *EnqueueServerImpl) ListenDownloadHooks(input *services.ListenHooksInputValueObject, stream services.Enqueue_ListenDownloadHooksServer) error {
	hooksListeningChan := make(chan *services.DownloadHookEvent)
	server.hookChans = append(server.hookChans, hooksListeningChan)
	for {
		downloadHookEvent := <-hooksListeningChan
		stream.Send(downloadHookEvent)
	}
}

func (server *EnqueueServerImpl) Log(ctx context.Context, log *services.LogInputValueObject) (*services.LogOutputValueObject, error) {
	fmt.Println(fmt.Sprintf("[%s][%s] %s", log.Sender.Name, log.Type, log.Message))
	server.BroadcastLogEvent(log.Sender, log.Message, log.Type)
	return &services.LogOutputValueObject{}, nil
}

func (server *EnqueueServerImpl) ListenLog(_ *services.ListenLogInputValueObject, stream services.Enqueue_ListenLogServer) error {
	logListeningChan := make(chan *services.LogInputValueObject)
	server.logChans = append(server.logChans, logListeningChan)
	for {
		log := <-logListeningChan
		stream.Send(log)
	}
}

func (server *EnqueueServerImpl) BroadcastDownloadEvent(download *services.DownloadOutputEntityModel, eventType services.HookEventType) {
	downloadHookEvent := &services.DownloadHookEvent{
		Download: download,
		Type:     eventType,
	}

	for _, c := range server.hookChans {
		ch := c
		go func() {
			ch <- downloadHookEvent
		}()
	}
}

func (server *EnqueueServerImpl) BroadcastLogEvent(sender *services.Sender, message string, level services.LogType) {
	log := &services.LogInputValueObject{
		Message: message,
		Sender:  sender,
		Type:    level,
	}

	for _, c := range server.logChans {
		ch := c
		go func() {
			ch <- log
		}()
	}
}

func NewEnqueueServer(db *gorm.DB) *EnqueueServerImpl {
	return &EnqueueServerImpl{
		db:        db,
		hookChans: [](chan *services.DownloadHookEvent){},
		logChans:  [](chan *services.LogInputValueObject){},
	}
}

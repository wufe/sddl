package models

import "github.com/jinzhu/gorm"

import "github.com/wufe/core/proto/services"

type Download struct {
	gorm.Model
	UUID    string
	URL     string
	Retries int32
	Status  services.DownloadStatus
}

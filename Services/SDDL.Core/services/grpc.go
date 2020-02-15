package services

import (
	"flag"
	"fmt"
	"github.com/wufe/core/proto/services"
	"google.golang.org/grpc"
	"net"
	"os"
)

func StartGRPCServer(enqueueServer *EnqueueServerImpl) *net.Listener {
	port := os.Getenv("GRPC_PORT")
	flag.Parse()
	listener, err := net.Listen("tcp", fmt.Sprintf(":%s", port))
	if err != nil {
		panic(err)
	}
	grpcServer := grpc.NewServer()
	services.RegisterEnqueueServer(grpcServer, enqueueServer)

	go func() {
		grpcServer.Serve(listener)
	}()

	fmt.Println(fmt.Sprintf("GRPC Server listening on port %s", port))
	return &listener
}

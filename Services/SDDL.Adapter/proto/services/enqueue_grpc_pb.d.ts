// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: enqueue.proto

import * as enqueue_pb from "./enqueue_pb";
import * as grpc from "grpc";

interface IEnqueueService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  enqueueDownload: grpc.MethodDefinition<enqueue_pb.DownloadInputValueObject, enqueue_pb.DownloadOutputEntityModel>;
}

export const EnqueueService: IEnqueueService;

export class EnqueueClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  enqueueDownload(argument: enqueue_pb.DownloadInputValueObject, callback: grpc.requestCallback<enqueue_pb.DownloadOutputEntityModel>): grpc.ClientUnaryCall;
  enqueueDownload(argument: enqueue_pb.DownloadInputValueObject, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<enqueue_pb.DownloadOutputEntityModel>): grpc.ClientUnaryCall;
  enqueueDownload(argument: enqueue_pb.DownloadInputValueObject, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<enqueue_pb.DownloadOutputEntityModel>): grpc.ClientUnaryCall;
}

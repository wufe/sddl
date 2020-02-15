// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var enqueue_pb = require('./enqueue_pb.js');

function serialize_services_DownloadInputValueObject(arg) {
  if (!(arg instanceof enqueue_pb.DownloadInputValueObject)) {
    throw new Error('Expected argument of type services.DownloadInputValueObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DownloadInputValueObject(buffer_arg) {
  return enqueue_pb.DownloadInputValueObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_DownloadOutputEntityModel(arg) {
  if (!(arg instanceof enqueue_pb.DownloadOutputEntityModel)) {
    throw new Error('Expected argument of type services.DownloadOutputEntityModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DownloadOutputEntityModel(buffer_arg) {
  return enqueue_pb.DownloadOutputEntityModel.deserializeBinary(new Uint8Array(buffer_arg));
}


var EnqueueService = exports.EnqueueService = {
  enqueueDownload: {
    path: '/services.Enqueue/EnqueueDownload',
    requestStream: false,
    responseStream: false,
    requestType: enqueue_pb.DownloadInputValueObject,
    responseType: enqueue_pb.DownloadOutputEntityModel,
    requestSerialize: serialize_services_DownloadInputValueObject,
    requestDeserialize: deserialize_services_DownloadInputValueObject,
    responseSerialize: serialize_services_DownloadOutputEntityModel,
    responseDeserialize: deserialize_services_DownloadOutputEntityModel,
  },
};

exports.EnqueueClient = grpc.makeGenericClientConstructor(EnqueueService);

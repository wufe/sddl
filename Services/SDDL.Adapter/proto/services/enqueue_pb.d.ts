// package: services
// file: enqueue.proto

import * as jspb from "google-protobuf";

export class DownloadInputValueObject extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getRetries(): number;
  setRetries(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadInputValueObject.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadInputValueObject): DownloadInputValueObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadInputValueObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadInputValueObject;
  static deserializeBinaryFromReader(message: DownloadInputValueObject, reader: jspb.BinaryReader): DownloadInputValueObject;
}

export namespace DownloadInputValueObject {
  export type AsObject = {
    url: string,
    retries: number,
  }
}

export class DownloadOutputEntityModel extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getRetries(): number;
  setRetries(value: number): void;

  getStatus(): DownloadStatusMap[keyof DownloadStatusMap];
  setStatus(value: DownloadStatusMap[keyof DownloadStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadOutputEntityModel.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadOutputEntityModel): DownloadOutputEntityModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadOutputEntityModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadOutputEntityModel;
  static deserializeBinaryFromReader(message: DownloadOutputEntityModel, reader: jspb.BinaryReader): DownloadOutputEntityModel;
}

export namespace DownloadOutputEntityModel {
  export type AsObject = {
    id: number,
    uuid: string,
    url: string,
    retries: number,
    status: DownloadStatusMap[keyof DownloadStatusMap],
  }
}

export interface DownloadStatusMap {
  IDLE: 0;
  ACKNOWLEDGED: 1;
}

export const DownloadStatus: DownloadStatusMap;


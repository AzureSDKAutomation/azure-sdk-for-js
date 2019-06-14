// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/// <reference lib="esnext.asynciterable" />

export { EventData, ReceivedEventData } from "./eventData";
export { WebSocketImpl } from "rhea-promise";
export { OnMessage, OnError } from "./eventHubReceiver";
export { ReceiveHandler } from "./streamingReceiver";
export {
  EventHubClient,
  EventHubClientOptions,
  EventReceiverOptions,
  EventSenderOptions,
  RetryOptions,
  SendOptions
} from "./eventHubClient";
export { EventPosition, EventPositionOptions } from "./eventPosition";
export { PartitionProperties, EventHubProperties } from "./managementClient";
export { EventSender } from "./sender";
export { EventReceiver, EventIteratorOptions } from "./receiver";
export {
  MessagingError,
  DataTransformer,
  DefaultDataTransformer,
  TokenType,
  TokenProvider,
  TokenInfo,
  AadTokenProvider,
  SasTokenProvider,
  delay
} from "@azure/core-amqp";

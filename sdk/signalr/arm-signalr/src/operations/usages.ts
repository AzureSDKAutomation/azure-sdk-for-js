/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/usagesMappers";
import * as Parameters from "../models/parameters";
import { SignalRManagementClientContext } from "../signalRManagementClientContext";

/** Class representing a Usages. */
export class Usages {
  private readonly client: SignalRManagementClientContext;

  /**
   * Create a Usages.
   * @param {SignalRManagementClientContext} client Reference to the service client.
   */
  constructor(client: SignalRManagementClientContext) {
    this.client = client;
  }

  /**
   * List usage quotas for Azure SignalR service by location.
   * @param location the location like "eastus"
   * @param [options] The optional parameters
   * @returns Promise<Models.UsagesListResponse>
   */
  list(location: string, options?: coreHttp.RequestOptionsBase): Promise<Models.UsagesListResponse>;
  /**
   * @param location the location like "eastus"
   * @param callback The callback
   */
  list(location: string, callback: coreHttp.ServiceCallback<Models.SignalRUsageList>): void;
  /**
   * @param location the location like "eastus"
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SignalRUsageList>): void;
  list(location: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SignalRUsageList>, callback?: coreHttp.ServiceCallback<Models.SignalRUsageList>): Promise<Models.UsagesListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsagesListResponse>;
  }

  /**
   * List usage quotas for Azure SignalR service by location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsagesListNextResponse>
   */
  listNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.UsagesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.SignalRUsageList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.SignalRUsageList>): void;
  listNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.SignalRUsageList>, callback?: coreHttp.ServiceCallback<Models.SignalRUsageList>): Promise<Models.UsagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsagesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/usages",
  urlParameters: [
    Parameters.location,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SignalRUsageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SignalRUsageList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/usagesMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a Usages. */
export class Usages {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a Usages.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the current usage count and the limit for the resources of the location under the
   * subscription.
   * @param location The location of the Azure Storage resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsagesListByLocationResponse>
   */
  listByLocation(location: string, options?: msRest.RequestOptionsBase): Promise<Models.UsagesListByLocationResponse>;
  /**
   * @param location The location of the Azure Storage resource.
   * @param callback The callback
   */
  listByLocation(location: string, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
  /**
   * @param location The location of the Azure Storage resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocation(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
  listByLocation(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsageListResult>, callback?: msRest.ServiceCallback<Models.UsageListResult>): Promise<Models.UsagesListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listByLocationOperationSpec,
      callback) as Promise<Models.UsagesListByLocationResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/privateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Create a PrivateLinkResources.
   * @param {ServiceBusManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets lists of resources that supports Privatelinks.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourcesListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourcesListResult>): void;
  get(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourcesListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourcesListResult>): Promise<Models.PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/privateLinkResources",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourcesListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

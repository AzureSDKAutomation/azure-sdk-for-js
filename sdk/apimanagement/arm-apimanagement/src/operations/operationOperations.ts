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
import * as Mappers from "../models/operationOperationsMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a OperationOperations. */
export class OperationOperations {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a OperationOperations.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of operations associated with tags.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationListByTagsResponse>
   */
  listByTags(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.OperationListByTagsOptionalParams): Promise<Models.OperationListByTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param callback The callback
   */
  listByTags(resourceGroupName: string, serviceName: string, apiId: string, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTags(resourceGroupName: string, serviceName: string, apiId: string, options: Models.OperationListByTagsOptionalParams, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  listByTags(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.OperationListByTagsOptionalParams | msRest.ServiceCallback<Models.TagResourceCollection>, callback?: msRest.ServiceCallback<Models.TagResourceCollection>): Promise<Models.OperationListByTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      listByTagsOperationSpec,
      callback) as Promise<Models.OperationListByTagsResponse>;
  }

  /**
   * Lists a collection of operations associated with tags.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationListByTagsNextResponse>
   */
  listByTagsNext(nextPageLink: string, options?: Models.OperationListByTagsNextOptionalParams): Promise<Models.OperationListByTagsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByTagsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTagsNext(nextPageLink: string, options: Models.OperationListByTagsNextOptionalParams, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  listByTagsNext(nextPageLink: string, options?: Models.OperationListByTagsNextOptionalParams | msRest.ServiceCallback<Models.TagResourceCollection>, callback?: msRest.ServiceCallback<Models.TagResourceCollection>): Promise<Models.OperationListByTagsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByTagsNextOperationSpec,
      callback) as Promise<Models.OperationListByTagsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operationsByTags",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.includeNotTaggedOperations,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByTagsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.includeNotTaggedOperations,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

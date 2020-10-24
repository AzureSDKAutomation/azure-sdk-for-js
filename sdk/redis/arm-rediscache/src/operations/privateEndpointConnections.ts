/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndpointConnectionsMappers";
import * as Parameters from "../models/parameters";
import { RedisManagementClientContext } from "../redisManagementClientContext";

/** Class representing a PrivateEndpointConnections. */
export class PrivateEndpointConnections {
  private readonly client: RedisManagementClientContext;

  /**
   * Create a PrivateEndpointConnections.
   * @param {RedisManagementClientContext} client Reference to the service client.
   */
  constructor(client: RedisManagementClientContext) {
    this.client = client;
  }

  /**
   * List all the private endpoint connections associated with the redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListResponse>
   */
  list(resourceGroupName: string, cacheName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param callback The callback
   */
  list(resourceGroupName: string, cacheName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, cacheName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  list(resourceGroupName: string, cacheName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): Promise<Models.PrivateEndpointConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListResponse>;
  }

  /**
   * Gets the specified private endpoint connection associated with the redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsGetResponse>
   */
  get(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param callback The callback
   */
  get(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  get(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Update the state of specified private endpoint connection associated with the redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param properties The private endpoint connection properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsPutResponse>
   */
  put(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, properties: Models.PrivateEndpointConnection, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsPutResponse> {
    return this.beginPut(resourceGroupName,cacheName,privateEndpointConnectionName,properties,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateEndpointConnectionsPutResponse>;
  }

  /**
   * Deletes the specified private endpoint connection associated with the redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        privateEndpointConnectionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Update the state of specified private endpoint connection associated with the redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with
   * the Azure resource
   * @param properties The private endpoint connection properties.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPut(resourceGroupName: string, cacheName: string, privateEndpointConnectionName: string, properties: Models.PrivateEndpointConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cacheName,
        privateEndpointConnectionName,
        properties,
        options
      },
      beginPutOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
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
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.privateEndpointConnectionName,
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
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.subscriptionId,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginPutOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.subscriptionId,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "properties",
    mapper: {
      ...Mappers.PrivateEndpointConnection,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

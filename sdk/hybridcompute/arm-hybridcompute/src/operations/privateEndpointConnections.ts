/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
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
import { HybridComputeManagementClientContext } from "../hybridComputeManagementClientContext";

/** Class representing a PrivateEndpointConnections. */
export class PrivateEndpointConnections {
  private readonly client: HybridComputeManagementClientContext;

  /**
   * Create a PrivateEndpointConnections.
   * @param {HybridComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: HybridComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsGetResponse>
   */
  get(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  get(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        scopeName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, parameters: Models.PrivateEndpointConnection, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,scopeName,privateEndpointConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,scopeName,privateEndpointConnectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets all private endpoint connections on a private link scope.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeResponse>
   */
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param callback The callback
   */
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        scopeName,
        options
      },
      listByPrivateLinkScopeOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeResponse>;
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, parameters: Models.PrivateEndpointConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        scopeName,
        privateEndpointConnectionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, scopeName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        scopeName,
        privateEndpointConnectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets all private endpoint connections on a private link scope.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeNextResponse>
   */
  listByPrivateLinkScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByPrivateLinkScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPrivateLinkScopeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  listByPrivateLinkScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByPrivateLinkScopeNextOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListByPrivateLinkScopeNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
    Parameters.privateEndpointConnectionName
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
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

const listByPrivateLinkScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName
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
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PrivateEndpointConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
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
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

const listByPrivateLinkScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
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
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

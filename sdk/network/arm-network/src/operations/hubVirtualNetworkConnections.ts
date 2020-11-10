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
import * as Mappers from "../models/hubVirtualNetworkConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a HubVirtualNetworkConnections. */
export class HubVirtualNetworkConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a HubVirtualNetworkConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a hub virtual network connection if it doesn't exist else updates the existing one.
   * @param resourceGroupName The resource group name of the HubVirtualNetworkConnection.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the HubVirtualNetworkConnection.
   * @param hubVirtualNetworkConnectionParameters Parameters supplied to create or update a hub
   * virtual network connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualHubName: string, connectionName: string, hubVirtualNetworkConnectionParameters: Models.HubVirtualNetworkConnection, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualHubName,connectionName,hubVirtualNetworkConnectionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.HubVirtualNetworkConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a HubVirtualNetworkConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the HubVirtualNetworkConnection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualHubName,connectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Retrieves the details of a HubVirtualNetworkConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsGetResponse>
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, callback: msRest.ServiceCallback<Models.HubVirtualNetworkConnection>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the vpn connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubVirtualNetworkConnection>): void;
  get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HubVirtualNetworkConnection>, callback?: msRest.ServiceCallback<Models.HubVirtualNetworkConnection>): Promise<Models.HubVirtualNetworkConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HubVirtualNetworkConnectionsGetResponse>;
  }

  /**
   * Retrieves the details of all HubVirtualNetworkConnections.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsListResponse>
   */
  list(resourceGroupName: string, virtualHubName: string, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsListResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualHubName: string, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualHubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  list(resourceGroupName: string, virtualHubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>, callback?: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): Promise<Models.HubVirtualNetworkConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.HubVirtualNetworkConnectionsListResponse>;
  }

  /**
   * Creates a hub virtual network connection if it doesn't exist else updates the existing one.
   * @param resourceGroupName The resource group name of the HubVirtualNetworkConnection.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the HubVirtualNetworkConnection.
   * @param hubVirtualNetworkConnectionParameters Parameters supplied to create or update a hub
   * virtual network connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, connectionName: string, hubVirtualNetworkConnectionParameters: Models.HubVirtualNetworkConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        hubVirtualNetworkConnectionParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a HubVirtualNetworkConnection.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param connectionName The name of the HubVirtualNetworkConnection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualHubName,
        connectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Retrieves the details of all HubVirtualNetworkConnections.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubVirtualNetworkConnectionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HubVirtualNetworkConnectionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>, callback?: msRest.ServiceCallback<Models.ListHubVirtualNetworkConnectionsResult>): Promise<Models.HubVirtualNetworkConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.HubVirtualNetworkConnectionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubVirtualNetworkConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListHubVirtualNetworkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "hubVirtualNetworkConnectionParameters",
    mapper: {
      ...Mappers.HubVirtualNetworkConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.HubVirtualNetworkConnection
    },
    201: {
      bodyMapper: Mappers.HubVirtualNetworkConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/hubVirtualNetworkConnections/{connectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.connectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListHubVirtualNetworkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

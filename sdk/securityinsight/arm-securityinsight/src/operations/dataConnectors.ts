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
import * as Mappers from "../models/dataConnectorsMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a DataConnectors. */
export class DataConnectors {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a DataConnectors.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets all data connectors.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectorsListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataConnectorsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.DataConnectorList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataConnectorList>): void;
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataConnectorList>, callback?: msRest.ServiceCallback<Models.DataConnectorList>): Promise<Models.DataConnectorsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DataConnectorsListResponse>;
  }

  /**
   * Gets a data connector.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectorsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, dataConnectorId: string, options?: msRest.RequestOptionsBase): Promise<Models.DataConnectorsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, dataConnectorId: string, callback: msRest.ServiceCallback<Models.DataConnectorUnion>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, dataConnectorId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataConnectorUnion>): void;
  get(resourceGroupName: string, workspaceName: string, dataConnectorId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataConnectorUnion>, callback?: msRest.ServiceCallback<Models.DataConnectorUnion>): Promise<Models.DataConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataConnectorId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataConnectorsGetResponse>;
  }

  /**
   * Creates or updates the data connector.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param dataConnector The data connector
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectorsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataConnectorId: string, dataConnector: Models.DataConnectorUnion, options?: msRest.RequestOptionsBase): Promise<Models.DataConnectorsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param dataConnector The data connector
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataConnectorId: string, dataConnector: Models.DataConnectorUnion, callback: msRest.ServiceCallback<Models.DataConnectorUnion>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param dataConnector The data connector
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataConnectorId: string, dataConnector: Models.DataConnectorUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataConnectorUnion>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataConnectorId: string, dataConnector: Models.DataConnectorUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataConnectorUnion>, callback?: msRest.ServiceCallback<Models.DataConnectorUnion>): Promise<Models.DataConnectorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataConnectorId,
        dataConnector,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataConnectorsCreateOrUpdateResponse>;
  }

  /**
   * Delete the data connector.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, dataConnectorId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, dataConnectorId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataConnectorId Connector ID
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, dataConnectorId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, dataConnectorId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataConnectorId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all data connectors.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectorsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DataConnectorsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataConnectorList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataConnectorList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataConnectorList>, callback?: msRest.ServiceCallback<Models.DataConnectorList>): Promise<Models.DataConnectorsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DataConnectorsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectorList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataConnector
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "dataConnector",
    mapper: {
      ...Mappers.DataConnector,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataConnector
    },
    201: {
      bodyMapper: Mappers.DataConnector
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataConnectorId
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectorList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

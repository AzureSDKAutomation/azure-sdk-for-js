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
import * as Mappers from "../models/dataSourcesMappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";

/** Class representing a DataSources. */
export class DataSources {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Create a DataSources.
   * @param {OperationalInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a data source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName The name of the datasource resource.
   * @param parameters The parameters required to create or update a datasource.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataSourceName: string, parameters: Models.DataSource, options?: msRest.RequestOptionsBase): Promise<Models.DataSourcesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName The name of the datasource resource.
   * @param parameters The parameters required to create or update a datasource.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataSourceName: string, parameters: Models.DataSource, callback: msRest.ServiceCallback<Models.DataSource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName The name of the datasource resource.
   * @param parameters The parameters required to create or update a datasource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataSourceName: string, parameters: Models.DataSource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSource>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, dataSourceName: string, parameters: Models.DataSource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSource>, callback?: msRest.ServiceCallback<Models.DataSource>): Promise<Models.DataSourcesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataSourceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataSourcesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a data source instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName Name of the datasource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, dataSourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName Name of the datasource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, dataSourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName Name of the datasource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, dataSourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, dataSourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataSourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a datasource instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName Name of the datasource
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, dataSourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataSourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName Name of the datasource
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, dataSourceName: string, callback: msRest.ServiceCallback<Models.DataSource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceName Name of the datasource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, dataSourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSource>): void;
  get(resourceGroupName: string, workspaceName: string, dataSourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSource>, callback?: msRest.ServiceCallback<Models.DataSource>): Promise<Models.DataSourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dataSourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataSourcesGetResponse>;
  }

  /**
   * Gets the first page of data source instances in a workspace with the link to the next page.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param filter The filter to apply on the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, filter: string, options?: Models.DataSourcesListByWorkspaceOptionalParams): Promise<Models.DataSourcesListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param filter The filter to apply on the operation.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, filter: string, callback: msRest.ServiceCallback<Models.DataSourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param filter The filter to apply on the operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, filter: string, options: Models.DataSourcesListByWorkspaceOptionalParams, callback: msRest.ServiceCallback<Models.DataSourceListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, filter: string, options?: Models.DataSourcesListByWorkspaceOptionalParams | msRest.ServiceCallback<Models.DataSourceListResult>, callback?: msRest.ServiceCallback<Models.DataSourceListResult>): Promise<Models.DataSourcesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        filter,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.DataSourcesListByWorkspaceResponse>;
  }

  /**
   * Gets the first page of data source instances in a workspace with the link to the next page.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param filter The filter to apply on the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, filter: string, options?: Models.DataSourcesListByWorkspaceNextOptionalParams): Promise<Models.DataSourcesListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param filter The filter to apply on the operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, filter: string, callback: msRest.ServiceCallback<Models.DataSourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param filter The filter to apply on the operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, filter: string, options: Models.DataSourcesListByWorkspaceNextOptionalParams, callback: msRest.ServiceCallback<Models.DataSourceListResult>): void;
  listByWorkspaceNext(nextPageLink: string, filter: string, options?: Models.DataSourcesListByWorkspaceNextOptionalParams | msRest.ServiceCallback<Models.DataSourceListResult>, callback?: msRest.ServiceCallback<Models.DataSourceListResult>): Promise<Models.DataSourcesListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        filter,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.DataSourcesListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataSourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DataSource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataSource
    },
    201: {
      bodyMapper: Mappers.DataSource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataSourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dataSourceName,
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
      bodyMapper: Mappers.DataSource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.skiptoken,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.skiptoken,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

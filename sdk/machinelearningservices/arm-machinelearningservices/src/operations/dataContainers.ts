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
import * as Mappers from "../models/dataContainersMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a DataContainers. */
export class DataContainers {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a DataContainers.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * @summary Create or update container.
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param body Container entity to create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataContainersCreateOrUpdateResponse>
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.DataContainerResource, options?: msRest.RequestOptionsBase): Promise<Models.DataContainersCreateOrUpdateResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param body Container entity to create or update.
   * @param callback The callback
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.DataContainerResource, callback: msRest.ServiceCallback<Models.DataContainerResource>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param body Container entity to create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.DataContainerResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataContainerResource>): void;
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.DataContainerResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataContainerResource>, callback?: msRest.ServiceCallback<Models.DataContainerResource>): Promise<Models.DataContainersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        body,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataContainersCreateOrUpdateResponse>;
  }

  /**
   * @summary Get container.
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataContainersGetResponse>
   */
  get(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataContainersGetResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  get(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.DataContainerResource>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(name: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataContainerResource>): void;
  get(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataContainerResource>, callback?: msRest.ServiceCallback<Models.DataContainerResource>): Promise<Models.DataContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataContainersGetResponse>;
  }

  /**
   * @summary Delete container.
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary List containers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataContainersListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: Models.DataContainersListOptionalParams): Promise<Models.DataContainersListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: Models.DataContainersListOptionalParams, callback: msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: Models.DataContainersListOptionalParams | msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>): Promise<Models.DataContainersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DataContainersListResponse>;
  }

  /**
   * @summary List containers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataContainersListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.DataContainersListNextOptionalParams): Promise<Models.DataContainersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.DataContainersListNextOptionalParams, callback: msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>): void;
  listNext(nextPageLink: string, options?: Models.DataContainersListNextOptionalParams | msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.DataContainerResourceArmPaginatedResult>): Promise<Models.DataContainersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DataContainersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}",
  urlParameters: [
    Parameters.name0,
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
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.DataContainerResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataContainerResource
    },
    201: {
      bodyMapper: Mappers.DataContainerResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}",
  urlParameters: [
    Parameters.name1,
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
      bodyMapper: Mappers.DataContainerResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}",
  urlParameters: [
    Parameters.name1,
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
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataContainerResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
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
    Parameters.apiVersion,
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataContainerResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

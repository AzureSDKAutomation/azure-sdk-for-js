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
import * as Mappers from "../models/modelContainersMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a ModelContainers. */
export class ModelContainers {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a ModelContainers.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * @summary List model containers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModelContainersListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: Models.ModelContainersListOptionalParams): Promise<Models.ModelContainersListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: Models.ModelContainersListOptionalParams, callback: msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: Models.ModelContainersListOptionalParams | msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>): Promise<Models.ModelContainersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ModelContainersListResponse>;
  }

  /**
   * @summary Create or update container.
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param body Container entity to create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModelContainersCreateOrUpdateResponse>
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.ModelContainerResource, options?: msRest.RequestOptionsBase): Promise<Models.ModelContainersCreateOrUpdateResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param body Container entity to create or update.
   * @param callback The callback
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.ModelContainerResource, callback: msRest.ServiceCallback<Models.ModelContainerResource>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param body Container entity to create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.ModelContainerResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ModelContainerResource>): void;
  createOrUpdate(name: string, resourceGroupName: string, workspaceName: string, body: Models.ModelContainerResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ModelContainerResource>, callback?: msRest.ServiceCallback<Models.ModelContainerResource>): Promise<Models.ModelContainersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        body,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ModelContainersCreateOrUpdateResponse>;
  }

  /**
   * @summary Get container.
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModelContainersGetResponse>
   */
  get(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ModelContainersGetResponse>;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param callback The callback
   */
  get(name: string, resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ModelContainerResource>): void;
  /**
   * @param name Container name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(name: string, resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ModelContainerResource>): void;
  get(name: string, resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ModelContainerResource>, callback?: msRest.ServiceCallback<Models.ModelContainerResource>): Promise<Models.ModelContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ModelContainersGetResponse>;
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
   * @summary List model containers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ModelContainersListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ModelContainersListNextOptionalParams): Promise<Models.ModelContainersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ModelContainersListNextOptionalParams, callback: msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>): void;
  listNext(nextPageLink: string, options?: Models.ModelContainersListNextOptionalParams | msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>, callback?: msRest.ServiceCallback<Models.ModelContainerResourceArmPaginatedResult>): Promise<Models.ModelContainersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ModelContainersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.count1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ModelContainerResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}",
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
      ...Mappers.ModelContainerResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ModelContainerResource
    },
    201: {
      bodyMapper: Mappers.ModelContainerResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}",
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
      bodyMapper: Mappers.ModelContainerResource
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}",
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

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.count1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ModelContainerResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

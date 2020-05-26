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
import * as Mappers from "../models/agentPoolsMappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClientContext } from "../containerRegistryManagementClientContext";

/** Class representing a AgentPools. */
export class AgentPools {
  private readonly client: ContainerRegistryManagementClientContext;

  /**
   * Create a AgentPools.
   * @param {ContainerRegistryManagementClientContext} client Reference to the service client.
   */
  constructor(client: ContainerRegistryManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the detailed information for a given agent pool.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsGetResponse>
   */
  get(resourceGroupName: string, registryName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param callback The callback
   */
  get(resourceGroupName: string, registryName: string, agentPoolName: string, callback: msRest.ServiceCallback<Models.AgentPool>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, registryName: string, agentPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPool>): void;
  get(resourceGroupName: string, registryName: string, agentPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPool>, callback?: msRest.ServiceCallback<Models.AgentPool>): Promise<Models.AgentPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        registryName,
        agentPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AgentPoolsGetResponse>;
  }

  /**
   * Creates an agent pool for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param agentPool The parameters of an agent pool that needs to scheduled.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsCreateResponse>
   */
  create(resourceGroupName: string, registryName: string, agentPoolName: string, agentPool: Models.AgentPool, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsCreateResponse> {
    return this.beginCreate(resourceGroupName,registryName,agentPoolName,agentPool,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AgentPoolsCreateResponse>;
  }

  /**
   * Deletes a specified agent pool resource.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, registryName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,registryName,agentPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates an agent pool with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param updateParameters The parameters for updating an agent pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsUpdateResponse>
   */
  update(resourceGroupName: string, registryName: string, agentPoolName: string, updateParameters: Models.AgentPoolUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,registryName,agentPoolName,updateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AgentPoolsUpdateResponse>;
  }

  /**
   * Lists all the agent pools for a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsListResponse>
   */
  list(resourceGroupName: string, registryName: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param callback The callback
   */
  list(resourceGroupName: string, registryName: string, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, registryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  list(resourceGroupName: string, registryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPoolListResult>, callback?: msRest.ServiceCallback<Models.AgentPoolListResult>): Promise<Models.AgentPoolsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        registryName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AgentPoolsListResponse>;
  }

  /**
   * Gets the count of queued runs for a given agent pool.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsGetQueueStatusResponse>
   */
  getQueueStatus(resourceGroupName: string, registryName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsGetQueueStatusResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param callback The callback
   */
  getQueueStatus(resourceGroupName: string, registryName: string, agentPoolName: string, callback: msRest.ServiceCallback<Models.AgentPoolQueueStatus>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  getQueueStatus(resourceGroupName: string, registryName: string, agentPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPoolQueueStatus>): void;
  getQueueStatus(resourceGroupName: string, registryName: string, agentPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPoolQueueStatus>, callback?: msRest.ServiceCallback<Models.AgentPoolQueueStatus>): Promise<Models.AgentPoolsGetQueueStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        registryName,
        agentPoolName,
        options
      },
      getQueueStatusOperationSpec,
      callback) as Promise<Models.AgentPoolsGetQueueStatusResponse>;
  }

  /**
   * Creates an agent pool for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param agentPool The parameters of an agent pool that needs to scheduled.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, registryName: string, agentPoolName: string, agentPool: Models.AgentPool, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        registryName,
        agentPoolName,
        agentPool,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes a specified agent pool resource.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, registryName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        registryName,
        agentPoolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates an agent pool with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param updateParameters The parameters for updating an agent pool.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, registryName: string, agentPoolName: string, updateParameters: Models.AgentPoolUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        registryName,
        agentPoolName,
        updateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists all the agent pools for a specified container registry.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPoolListResult>, callback?: msRest.ServiceCallback<Models.AgentPoolListResult>): Promise<Models.AgentPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AgentPoolsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getQueueStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}/listQueueStatus",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolQueueStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "agentPool",
    mapper: {
      ...Mappers.AgentPool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateParameters",
    mapper: {
      ...Mappers.AgentPoolUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

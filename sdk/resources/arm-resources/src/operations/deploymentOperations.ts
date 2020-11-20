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
import * as Mappers from "../models/deploymentOperationsMappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";

/** Class representing a DeploymentOperations. */
export class DeploymentOperations {
  private readonly client: ResourceManagementClientContext;

  /**
   * Create a DeploymentOperations.
   * @param {ResourceManagementClientContext} client Reference to the service client.
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a deployments operation.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsGetAtScopeResponse>
   */
  getAtScope(scope: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetAtScopeResponse>;
  /**
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param callback The callback
   */
  getAtScope(scope: string, deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  /**
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtScope(scope: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  getAtScope(scope: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentOperation>, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetAtScopeResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        deploymentName,
        operationId,
        options
      },
      getAtScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetAtScopeResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtScopeResponse>
   */
  listAtScope(scope: string, deploymentName: string, options?: Models.DeploymentOperationsListAtScopeOptionalParams): Promise<Models.DeploymentOperationsListAtScopeResponse>;
  /**
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param callback The callback
   */
  listAtScope(scope: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtScope(scope: string, deploymentName: string, options: Models.DeploymentOperationsListAtScopeOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtScope(scope: string, deploymentName: string, options?: Models.DeploymentOperationsListAtScopeOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtScopeResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        deploymentName,
        options
      },
      listAtScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtScopeResponse>;
  }

  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsGetAtTenantScopeResponse>
   */
  getAtTenantScope(deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetAtTenantScopeResponse>;
  /**
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param callback The callback
   */
  getAtTenantScope(deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  /**
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtTenantScope(deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  getAtTenantScope(deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentOperation>, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      {
        deploymentName,
        operationId,
        options
      },
      getAtTenantScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetAtTenantScopeResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtTenantScopeResponse>
   */
  listAtTenantScope(deploymentName: string, options?: Models.DeploymentOperationsListAtTenantScopeOptionalParams): Promise<Models.DeploymentOperationsListAtTenantScopeResponse>;
  /**
   * @param deploymentName The name of the deployment.
   * @param callback The callback
   */
  listAtTenantScope(deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param deploymentName The name of the deployment.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtTenantScope(deploymentName: string, options: Models.DeploymentOperationsListAtTenantScopeOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtTenantScope(deploymentName: string, options?: Models.DeploymentOperationsListAtTenantScopeOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      {
        deploymentName,
        options
      },
      listAtTenantScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtTenantScopeResponse>;
  }

  /**
   * Gets a deployments operation.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsGetAtManagementGroupScopeResponse>
   */
  getAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetAtManagementGroupScopeResponse>;
  /**
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param callback The callback
   */
  getAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  /**
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  getAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentOperation>, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        deploymentName,
        operationId,
        options
      },
      getAtManagementGroupScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetAtManagementGroupScopeResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtManagementGroupScopeResponse>
   */
  listAtManagementGroupScope(groupId: string, deploymentName: string, options?: Models.DeploymentOperationsListAtManagementGroupScopeOptionalParams): Promise<Models.DeploymentOperationsListAtManagementGroupScopeResponse>;
  /**
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param callback The callback
   */
  listAtManagementGroupScope(groupId: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtManagementGroupScope(groupId: string, deploymentName: string, options: Models.DeploymentOperationsListAtManagementGroupScopeOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtManagementGroupScope(groupId: string, deploymentName: string, options?: Models.DeploymentOperationsListAtManagementGroupScopeOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      {
        groupId,
        deploymentName,
        options
      },
      listAtManagementGroupScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtManagementGroupScopeResponse>;
  }

  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse>
   */
  getAtSubscriptionScope(deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse>;
  /**
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param callback The callback
   */
  getAtSubscriptionScope(deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  /**
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtSubscriptionScope(deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  getAtSubscriptionScope(deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentOperation>, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      {
        deploymentName,
        operationId,
        options
      },
      getAtSubscriptionScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse>
   */
  listAtSubscriptionScope(deploymentName: string, options?: Models.DeploymentOperationsListAtSubscriptionScopeOptionalParams): Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse>;
  /**
   * @param deploymentName The name of the deployment.
   * @param callback The callback
   */
  listAtSubscriptionScope(deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param deploymentName The name of the deployment.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtSubscriptionScope(deploymentName: string, options: Models.DeploymentOperationsListAtSubscriptionScopeOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtSubscriptionScope(deploymentName: string, options?: Models.DeploymentOperationsListAtSubscriptionScopeOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      {
        deploymentName,
        options
      },
      listAtSubscriptionScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse>;
  }

  /**
   * Gets a deployments operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsGetResponse>
   */
  get(resourceGroupName: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param callback The callback
   */
  get(resourceGroupName: string, deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  get(resourceGroupName: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DeploymentOperation>, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        deploymentName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListResponse>
   */
  list(resourceGroupName: string, deploymentName: string, options?: Models.DeploymentOperationsListOptionalParams): Promise<Models.DeploymentOperationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param callback The callback
   */
  list(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, deploymentName: string, options: Models.DeploymentOperationsListOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  list(resourceGroupName: string, deploymentName: string, options?: Models.DeploymentOperationsListOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        deploymentName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtScopeNextResponse>
   */
  listAtScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtScopeNextOptionalParams): Promise<Models.DeploymentOperationsListAtScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAtScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtScopeNext(nextPageLink: string, options: Models.DeploymentOperationsListAtScopeNextOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtScopeNextOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAtScopeNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtScopeNextResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtTenantScopeNextResponse>
   */
  listAtTenantScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtTenantScopeNextOptionalParams): Promise<Models.DeploymentOperationsListAtTenantScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAtTenantScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtTenantScopeNext(nextPageLink: string, options: Models.DeploymentOperationsListAtTenantScopeNextOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtTenantScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtTenantScopeNextOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtTenantScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAtTenantScopeNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtTenantScopeNextResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtManagementGroupScopeNextResponse>
   */
  listAtManagementGroupScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtManagementGroupScopeNextOptionalParams): Promise<Models.DeploymentOperationsListAtManagementGroupScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAtManagementGroupScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtManagementGroupScopeNext(nextPageLink: string, options: Models.DeploymentOperationsListAtManagementGroupScopeNextOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtManagementGroupScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtManagementGroupScopeNextOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtManagementGroupScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAtManagementGroupScopeNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtManagementGroupScopeNextResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse>
   */
  listAtSubscriptionScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtSubscriptionScopeNextOptionalParams): Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAtSubscriptionScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtSubscriptionScopeNext(nextPageLink: string, options: Models.DeploymentOperationsListAtSubscriptionScopeNextOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtSubscriptionScopeNext(nextPageLink: string, options?: Models.DeploymentOperationsListAtSubscriptionScopeNextOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAtSubscriptionScopeNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeploymentOperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.DeploymentOperationsListNextOptionalParams): Promise<Models.DeploymentOperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.DeploymentOperationsListNextOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listNext(nextPageLink: string, options?: Models.DeploymentOperationsListNextOptionalParams | msRest.ServiceCallback<Models.DeploymentOperationsListResult>, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAtScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.scope,
    Parameters.deploymentName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.scope,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getAtTenantScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.deploymentName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtTenantScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getAtManagementGroupScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.groupId,
    Parameters.deploymentName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtManagementGroupScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.groupId,
    Parameters.deploymentName
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getAtSubscriptionScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.deploymentName,
    Parameters.operationId,
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
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtSubscriptionScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.operationId,
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
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtTenantScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtManagementGroupScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtSubscriptionScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
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
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

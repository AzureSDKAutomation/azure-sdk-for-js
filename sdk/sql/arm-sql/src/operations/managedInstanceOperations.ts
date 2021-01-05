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
import * as Mappers from "../models/managedInstanceOperationsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedInstanceOperations. */
export class ManagedInstanceOperations {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedInstanceOperations.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Cancels the asynchronous operation on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  cancel(resourceGroupName: string, managedInstanceName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param callback The callback
   */
  cancel(resourceGroupName: string, managedInstanceName: string, operationId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(resourceGroupName: string, managedInstanceName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  cancel(resourceGroupName: string, managedInstanceName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        operationId,
        options
      },
      cancelOperationSpec,
      callback);
  }

  /**
   * Gets a list of operations performed on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceOperationsListByManagedInstanceResponse>
   */
  listByManagedInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceOperationsListByManagedInstanceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  listByManagedInstance(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagedInstance(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>): void;
  listByManagedInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>): Promise<Models.ManagedInstanceOperationsListByManagedInstanceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      listByManagedInstanceOperationSpec,
      callback) as Promise<Models.ManagedInstanceOperationsListByManagedInstanceResponse>;
  }

  /**
   * Gets a management operation on a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceOperationsGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceOperationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, operationId: string, callback: msRest.ServiceCallback<Models.ManagedInstanceOperation>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceOperation>): void;
  get(resourceGroupName: string, managedInstanceName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceOperation>, callback?: msRest.ServiceCallback<Models.ManagedInstanceOperation>): Promise<Models.ManagedInstanceOperationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedInstanceOperationsGetResponse>;
  }

  /**
   * Gets a list of operations performed on the managed instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceOperationsListByManagedInstanceNextResponse>
   */
  listByManagedInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceOperationsListByManagedInstanceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByManagedInstanceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagedInstanceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>): void;
  listByManagedInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceOperationListResult>): Promise<Models.ManagedInstanceOperationsListByManagedInstanceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByManagedInstanceNextOperationSpec,
      callback) as Promise<Models.ManagedInstanceOperationsListByManagedInstanceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations/{operationId}/cancel",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByManagedInstanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceOperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByManagedInstanceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceOperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/managedInstanceEncryptionProtectorsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedInstanceEncryptionProtectors. */
export class ManagedInstanceEncryptionProtectors {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedInstanceEncryptionProtectors.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  revalidate(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRevalidate(resourceGroupName,managedInstanceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of managed instance encryption protectors
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceResponse>
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>): void;
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>): Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      listByInstanceOperationSpec,
      callback) as Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceResponse>;
  }

  /**
   * Gets a managed instance encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceEncryptionProtectorsGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceEncryptionProtectorsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtector>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtector>): void;
  get(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtector>, callback?: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtector>): Promise<Models.ManagedInstanceEncryptionProtectorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedInstanceEncryptionProtectorsGetResponse>;
  }

  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested encryption protector resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, parameters: Models.ManagedInstanceEncryptionProtector, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedInstanceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse>;
  }

  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRevalidate(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      beginRevalidateOperationSpec,
      options);
  }

  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested encryption protector resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, parameters: Models.ManagedInstanceEncryptionProtector, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets a list of managed instance encryption protectors
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceNextResponse>
   */
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>): void;
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceEncryptionProtectorListResult>): Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInstanceNextOperationSpec,
      callback) as Promise<Models.ManagedInstanceEncryptionProtectorsListByInstanceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByInstanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtectorListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.encryptionProtectorName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRevalidateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}/revalidate",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.encryptionProtectorName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.encryptionProtectorName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedInstanceEncryptionProtector,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByInstanceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtectorListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

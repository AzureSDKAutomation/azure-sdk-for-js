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
import * as Mappers from "../models/managedDatabaseSecurityAlertPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedDatabaseSecurityAlertPolicies. */
export class ManagedDatabaseSecurityAlertPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedDatabaseSecurityAlertPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a managed database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is
   * defined.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSecurityAlertPoliciesGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseSecurityAlertPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is
   * defined.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is
   * defined.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>): void;
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>): Promise<Models.ManagedDatabaseSecurityAlertPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSecurityAlertPoliciesGetResponse>;
  }

  /**
   * Creates or updates a database's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is
   * defined.
   * @param parameters The database security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedDatabaseSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is
   * defined.
   * @param parameters The database security alert policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedDatabaseSecurityAlertPolicy, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policy is
   * defined.
   * @param parameters The database security alert policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedDatabaseSecurityAlertPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>): void;
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedDatabaseSecurityAlertPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicy>): Promise<Models.ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSecurityAlertPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets a list of managed database's security alert policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   * defined.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   * defined.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security alert policies are
   * defined.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>): void;
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>): Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseResponse>;
  }

  /**
   * Gets a list of managed database's security alert policies.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse>
   */
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>): void;
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedDatabaseSecurityAlertPolicyListResult>): Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDatabaseNextOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSecurityAlertPoliciesListByDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName0,
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
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName0,
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
      ...Mappers.ManagedDatabaseSecurityAlertPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
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
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ManagedDatabaseSecurityAlertPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

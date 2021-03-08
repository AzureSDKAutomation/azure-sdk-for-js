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
import * as Mappers from "../models/backupShortTermRetentionPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a BackupShortTermRetentionPolicies. */
export class BackupShortTermRetentionPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a BackupShortTermRetentionPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupShortTermRetentionPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupShortTermRetentionPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicy>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupShortTermRetentionPolicy>, callback?: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicy>): Promise<Models.BackupShortTermRetentionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupShortTermRetentionPoliciesGetResponse>;
  }

  /**
   * Updates a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupShortTermRetentionPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.BackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.BackupShortTermRetentionPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BackupShortTermRetentionPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Updates a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupShortTermRetentionPoliciesUpdateResponse>
   */
  update(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.BackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.BackupShortTermRetentionPoliciesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serverName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BackupShortTermRetentionPoliciesUpdateResponse>;
  }

  /**
   * Gets a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>): void;
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>): Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseResponse>;
  }

  /**
   * Updates a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.BackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.BackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Gets a database's short term retention policy.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseNextResponse>
   */
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>): void;
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.BackupShortTermRetentionPolicyListResult>): Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDatabaseNextOperationSpec,
      callback) as Promise<Models.BackupShortTermRetentionPoliciesListByDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.policyName,
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
      bodyMapper: Mappers.BackupShortTermRetentionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
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
      bodyMapper: Mappers.BackupShortTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupShortTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupShortTermRetentionPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupShortTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupShortTermRetentionPolicy
    },
    202: {},
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
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupShortTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

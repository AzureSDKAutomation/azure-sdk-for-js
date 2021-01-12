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
import * as Mappers from "../models/serverSecurityAlertPoliciesMappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClientContext } from "../mariaDBManagementClientContext";

/** Class representing a ServerSecurityAlertPolicies. */
export class ServerSecurityAlertPolicies {
  private readonly client: MariaDBManagementClientContext;

  /**
   * Create a ServerSecurityAlertPolicies.
   * @param {MariaDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: MariaDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a server's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerSecurityAlertPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerSecurityAlertPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): void;
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): Promise<Models.ServerSecurityAlertPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerSecurityAlertPoliciesGetResponse>;
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The server security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerSecurityAlertPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ServerSecurityAlertPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerSecurityAlertPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerSecurityAlertPoliciesListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerSecurityAlertPoliciesListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): Promise<Models.ServerSecurityAlertPoliciesListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.ServerSecurityAlertPoliciesListByServerResponse>;
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The server security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Get the server's threat detection policies.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerSecurityAlertPoliciesListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerSecurityAlertPoliciesListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): Promise<Models.ServerSecurityAlertPoliciesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.ServerSecurityAlertPoliciesListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName,
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
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/securityAlertPolicies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      bodyMapper: Mappers.ServerSecurityAlertPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName,
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
      ...Mappers.ServerSecurityAlertPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

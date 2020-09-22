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
import * as Models from "../models";
import * as Mappers from "../models/serviceTierAdvisorsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ServiceTierAdvisors. */
export class ServiceTierAdvisors {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ServiceTierAdvisors.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a service tier advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of database.
   * @param serviceTierAdvisorName The name of service tier advisor.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceTierAdvisorsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, serviceTierAdvisorName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceTierAdvisorsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of database.
   * @param serviceTierAdvisorName The name of service tier advisor.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, serviceTierAdvisorName: string, callback: msRest.ServiceCallback<Models.ServiceTierAdvisor>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of database.
   * @param serviceTierAdvisorName The name of service tier advisor.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, serviceTierAdvisorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceTierAdvisor>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, serviceTierAdvisorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceTierAdvisor>, callback?: msRest.ServiceCallback<Models.ServiceTierAdvisor>): Promise<Models.ServiceTierAdvisorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        serviceTierAdvisorName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServiceTierAdvisorsGetResponse>;
  }

  /**
   * Returns service tier advisors for specified database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceTierAdvisorsListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceTierAdvisorsListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ServiceTierAdvisorListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceTierAdvisorListResult>): void;
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceTierAdvisorListResult>, callback?: msRest.ServiceCallback<Models.ServiceTierAdvisorListResult>): Promise<Models.ServiceTierAdvisorsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.ServiceTierAdvisorsListByDatabaseResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/serviceTierAdvisors/{serviceTierAdvisorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.serviceTierAdvisorName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceTierAdvisor
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/serviceTierAdvisors",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceTierAdvisorListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

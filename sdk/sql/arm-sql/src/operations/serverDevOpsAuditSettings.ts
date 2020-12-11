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
import * as Mappers from "../models/serverDevOpsAuditSettingsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ServerDevOpsAuditSettings. */
export class ServerDevOpsAuditSettings {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ServerDevOpsAuditSettings.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a server's DevOps audit settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName The name of the devops audit settings. This should always be
   * 'default'.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerDevOpsAuditSettingsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, devOpsAuditingSettingsName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerDevOpsAuditSettingsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName The name of the devops audit settings. This should always be
   * 'default'.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, devOpsAuditingSettingsName: string, callback: msRest.ServiceCallback<Models.ServerDevOpsAuditingSettings>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName The name of the devops audit settings. This should always be
   * 'default'.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, devOpsAuditingSettingsName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerDevOpsAuditingSettings>): void;
  get(resourceGroupName: string, serverName: string, devOpsAuditingSettingsName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerDevOpsAuditingSettings>, callback?: msRest.ServiceCallback<Models.ServerDevOpsAuditingSettings>): Promise<Models.ServerDevOpsAuditSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        devOpsAuditingSettingsName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerDevOpsAuditSettingsGetResponse>;
  }

  /**
   * Creates or updates a server's DevOps audit settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName The name of the devops audit settings. This should always be
   * 'default'.
   * @param parameters Properties of DevOps audit settings
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerDevOpsAuditSettingsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, devOpsAuditingSettingsName: string, parameters: Models.ServerDevOpsAuditingSettings, options?: msRest.RequestOptionsBase): Promise<Models.ServerDevOpsAuditSettingsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,devOpsAuditingSettingsName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerDevOpsAuditSettingsCreateOrUpdateResponse>;
  }

  /**
   * Lists DevOps audit settings of a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerDevOpsAuditSettingsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerDevOpsAuditSettingsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>, callback?: msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>): Promise<Models.ServerDevOpsAuditSettingsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.ServerDevOpsAuditSettingsListByServerResponse>;
  }

  /**
   * Creates or updates a server's DevOps audit settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName The name of the devops audit settings. This should always be
   * 'default'.
   * @param parameters Properties of DevOps audit settings
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, devOpsAuditingSettingsName: string, parameters: Models.ServerDevOpsAuditingSettings, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        devOpsAuditingSettingsName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists DevOps audit settings of a server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerDevOpsAuditSettingsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerDevOpsAuditSettingsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>, callback?: msRest.ServiceCallback<Models.ServerDevOpsAuditSettingsListResult>): Promise<Models.ServerDevOpsAuditSettingsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.ServerDevOpsAuditSettingsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/devOpsAuditingSettings/{devOpsAuditingSettingsName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.devOpsAuditingSettingsName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerDevOpsAuditingSettings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/devOpsAuditingSettings",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerDevOpsAuditSettingsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/devOpsAuditingSettings/{devOpsAuditingSettingsName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.devOpsAuditingSettingsName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ServerDevOpsAuditingSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerDevOpsAuditingSettings
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
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerDevOpsAuditSettingsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

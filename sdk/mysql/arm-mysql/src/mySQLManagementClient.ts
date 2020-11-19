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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { MySQLManagementClientContext } from "./mySQLManagementClientContext";


class MySQLManagementClient extends MySQLManagementClientContext {
  // Operation groups
  servers: operations.Servers;
  replicas: operations.Replicas;
  firewallRules: operations.FirewallRules;
  virtualNetworkRules: operations.VirtualNetworkRules;
  databases: operations.Databases;
  configurations: operations.Configurations;
  serverParameters: operations.ServerParameters;
  logFiles: operations.LogFiles;
  serverAdministrators: operations.ServerAdministrators;
  recoverableServers: operations.RecoverableServers;
  serverBasedPerformanceTier: operations.ServerBasedPerformanceTier;
  locationBasedPerformanceTier: operations.LocationBasedPerformanceTier;
  checkNameAvailability: operations.CheckNameAvailability;
  operations: operations.Operations;
  serverSecurityAlertPolicies: operations.ServerSecurityAlertPolicies;
  queryTexts: operations.QueryTexts;
  topQueryStatistics: operations.TopQueryStatistics;
  waitStatistics: operations.WaitStatistics;
  advisors: operations.Advisors;
  recommendedActions: operations.RecommendedActions;
  locationBasedRecommendedActionSessionsOperationStatus: operations.LocationBasedRecommendedActionSessionsOperationStatus;
  locationBasedRecommendedActionSessionsResult: operations.LocationBasedRecommendedActionSessionsResult;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  serverKeys: operations.ServerKeys;

  /**
   * Initializes a new instance of the MySQLManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MySQLManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.servers = new operations.Servers(this);
    this.replicas = new operations.Replicas(this);
    this.firewallRules = new operations.FirewallRules(this);
    this.virtualNetworkRules = new operations.VirtualNetworkRules(this);
    this.databases = new operations.Databases(this);
    this.configurations = new operations.Configurations(this);
    this.serverParameters = new operations.ServerParameters(this);
    this.logFiles = new operations.LogFiles(this);
    this.serverAdministrators = new operations.ServerAdministrators(this);
    this.recoverableServers = new operations.RecoverableServers(this);
    this.serverBasedPerformanceTier = new operations.ServerBasedPerformanceTier(this);
    this.locationBasedPerformanceTier = new operations.LocationBasedPerformanceTier(this);
    this.checkNameAvailability = new operations.CheckNameAvailability(this);
    this.operations = new operations.Operations(this);
    this.serverSecurityAlertPolicies = new operations.ServerSecurityAlertPolicies(this);
    this.queryTexts = new operations.QueryTexts(this);
    this.topQueryStatistics = new operations.TopQueryStatistics(this);
    this.waitStatistics = new operations.WaitStatistics(this);
    this.advisors = new operations.Advisors(this);
    this.recommendedActions = new operations.RecommendedActions(this);
    this.locationBasedRecommendedActionSessionsOperationStatus = new operations.LocationBasedRecommendedActionSessionsOperationStatus(this);
    this.locationBasedRecommendedActionSessionsResult = new operations.LocationBasedRecommendedActionSessionsResult(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.serverKeys = new operations.ServerKeys(this);
  }

  /**
   * Create recommendation action session for the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createRecommendedActionSession(resourceGroupName: string, serverName: string, advisorName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginCreateRecommendedActionSession(resourceGroupName,serverName,advisorName,databaseName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create recommendation action session for the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateRecommendedActionSession(resourceGroupName: string, serverName: string, advisorName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        advisorName,
        databaseName,
        options
      },
      beginCreateRecommendedActionSessionOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginCreateRecommendedActionSessionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/advisors/{advisorName}/createRecommendedActionSession",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName
  ],
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.databaseName
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

export {
  MySQLManagementClient,
  MySQLManagementClientContext,
  Models as MySQLManagementModels,
  Mappers as MySQLManagementMappers
};
export * from "./operations";

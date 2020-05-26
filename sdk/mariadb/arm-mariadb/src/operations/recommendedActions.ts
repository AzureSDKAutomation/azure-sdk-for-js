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
import * as Mappers from "../models/recommendedActionsMappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClientContext } from "../mariaDBManagementClientContext";

/** Class representing a RecommendedActions. */
export class RecommendedActions {
  private readonly client: MariaDBManagementClientContext;

  /**
   * Create a RecommendedActions.
   * @param {MariaDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: MariaDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieve recommended actions from the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param recommendedActionName The recommended action name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendedActionsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, advisorName: string, recommendedActionName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendedActionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param recommendedActionName The recommended action name.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, advisorName: string, recommendedActionName: string, callback: msRest.ServiceCallback<Models.RecommendationAction>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param recommendedActionName The recommended action name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, advisorName: string, recommendedActionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationAction>): void;
  get(resourceGroupName: string, serverName: string, advisorName: string, recommendedActionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationAction>, callback?: msRest.ServiceCallback<Models.RecommendationAction>): Promise<Models.RecommendedActionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        advisorName,
        recommendedActionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecommendedActionsGetResponse>;
  }

  /**
   * Retrieve recommended actions from the advisor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendedActionsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, advisorName: string, options?: Models.RecommendedActionsListByServerOptionalParams): Promise<Models.RecommendedActionsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, advisorName: string, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param advisorName The advisor name for recommendation action.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, advisorName: string, options: Models.RecommendedActionsListByServerOptionalParams, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  listByServer(resourceGroupName: string, serverName: string, advisorName: string, options?: Models.RecommendedActionsListByServerOptionalParams | msRest.ServiceCallback<Models.RecommendationActionsResultList>, callback?: msRest.ServiceCallback<Models.RecommendationActionsResultList>): Promise<Models.RecommendedActionsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        advisorName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.RecommendedActionsListByServerResponse>;
  }

  /**
   * Retrieve recommended actions from the advisor.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecommendedActionsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecommendedActionsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationActionsResultList>, callback?: msRest.ServiceCallback<Models.RecommendationActionsResultList>): Promise<Models.RecommendedActionsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.RecommendedActionsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/advisors/{advisorName}/recommendedActions/{recommendedActionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName,
    Parameters.recommendedActionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationAction
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/advisors/{advisorName}/recommendedActions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.sessionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationActionsResultList
    },
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationActionsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/topQueryStatisticsMappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClientContext } from "../mariaDBManagementClientContext";

/** Class representing a TopQueryStatistics. */
export class TopQueryStatistics {
  private readonly client: MariaDBManagementClientContext;

  /**
   * Create a TopQueryStatistics.
   * @param {MariaDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: MariaDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the query statistic for specified identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryStatisticId The Query Statistic identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopQueryStatisticsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, queryStatisticId: string, options?: msRest.RequestOptionsBase): Promise<Models.TopQueryStatisticsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryStatisticId The Query Statistic identifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, queryStatisticId: string, callback: msRest.ServiceCallback<Models.QueryStatistic>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param queryStatisticId The Query Statistic identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, queryStatisticId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QueryStatistic>): void;
  get(resourceGroupName: string, serverName: string, queryStatisticId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QueryStatistic>, callback?: msRest.ServiceCallback<Models.QueryStatistic>): Promise<Models.TopQueryStatisticsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        queryStatisticId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TopQueryStatisticsGetResponse>;
  }

  /**
   * Retrieve the Query-Store top queries for specified metric and aggregation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for retrieving top query statistics.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopQueryStatisticsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, parameters: Models.TopQueryStatisticsInput, options?: msRest.RequestOptionsBase): Promise<Models.TopQueryStatisticsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for retrieving top query statistics.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, parameters: Models.TopQueryStatisticsInput, callback: msRest.ServiceCallback<Models.TopQueryStatisticsResultList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The required parameters for retrieving top query statistics.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, parameters: Models.TopQueryStatisticsInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopQueryStatisticsResultList>): void;
  listByServer(resourceGroupName: string, serverName: string, parameters: Models.TopQueryStatisticsInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopQueryStatisticsResultList>, callback?: msRest.ServiceCallback<Models.TopQueryStatisticsResultList>): Promise<Models.TopQueryStatisticsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.TopQueryStatisticsListByServerResponse>;
  }

  /**
   * Retrieve the Query-Store top queries for specified metric and aggregation.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopQueryStatisticsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TopQueryStatisticsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TopQueryStatisticsResultList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopQueryStatisticsResultList>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopQueryStatisticsResultList>, callback?: msRest.ServiceCallback<Models.TopQueryStatisticsResultList>): Promise<Models.TopQueryStatisticsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.TopQueryStatisticsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/topQueryStatistics/{queryStatisticId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.queryStatisticId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QueryStatistic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/topQueryStatistics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
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
      ...Mappers.TopQueryStatisticsInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TopQueryStatisticsResultList
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
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopQueryStatisticsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

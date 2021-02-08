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
import * as Mappers from "../models/privateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { RedisEnterpriseManagementClientContext } from "../redisEnterpriseManagementClientContext";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: RedisEnterpriseManagementClientContext;

  /**
   * Create a PrivateLinkResources.
   * @param {RedisEnterpriseManagementClientContext} client Reference to the service client.
   */
  constructor(client: RedisEnterpriseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListByClusterResponse>
   */
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListByClusterResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListByClusterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listByClusterOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListByClusterResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByClusterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/privateLinkResources",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

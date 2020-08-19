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
import * as Mappers from "../models/privateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClientContext } from "../hybridComputeManagementClientContext";

/** Class representing a PrivateLinkResources. */
export class PrivateLinkResources {
  private readonly client: HybridComputeManagementClientContext;

  /**
   * Create a PrivateLinkResources.
   * @param {HybridComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: HybridComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeResponse>
   */
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param callback The callback
   */
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listByPrivateLinkScope(resourceGroupName: string, scopeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        scopeName,
        options
      },
      listByPrivateLinkScopeOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeResponse>;
  }

  /**
   * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param groupName The name of the private link resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesGetResponse>
   */
  get(resourceGroupName: string, scopeName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param groupName The name of the private link resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, scopeName: string, groupName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param groupName The name of the private link resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, scopeName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  get(resourceGroupName: string, scopeName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResource>, callback?: msRest.ServiceCallback<Models.PrivateLinkResource>): Promise<Models.PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        scopeName,
        groupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesGetResponse>;
  }

  /**
   * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeNextResponse>
   */
  listByPrivateLinkScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByPrivateLinkScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPrivateLinkScopeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listByPrivateLinkScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByPrivateLinkScopeNextOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesListByPrivateLinkScopeNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByPrivateLinkScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName
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
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateLinkResources/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

const listByPrivateLinkScopeNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseV2
    }
  },
  serializer
};

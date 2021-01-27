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
import * as Mappers from "../models/privateLinkHubPrivateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a PrivateLinkHubPrivateLinkResources. */
export class PrivateLinkHubPrivateLinkResources {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a PrivateLinkHubPrivateLinkResources.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all private link resources for a private link hub
   * @summary Private Link Resources
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the private link hub
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubPrivateLinkResourcesListResponse>
   */
  list(resourceGroupName: string, privateLinkHubName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubPrivateLinkResourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the private link hub
   * @param callback The callback
   */
  list(resourceGroupName: string, privateLinkHubName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the private link hub
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, privateLinkHubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  list(resourceGroupName: string, privateLinkHubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkHubPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateLinkHubPrivateLinkResourcesListResponse>;
  }

  /**
   * Get private link resource in private link hub
   * @summary Get Private Link Hub Private Link Resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the private link hub
   * @param privateLinkResourceName The name of the private link resource
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubPrivateLinkResourcesGetResponse>
   */
  get(resourceGroupName: string, privateLinkHubName: string, privateLinkResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubPrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the private link hub
   * @param privateLinkResourceName The name of the private link resource
   * @param callback The callback
   */
  get(resourceGroupName: string, privateLinkHubName: string, privateLinkResourceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the private link hub
   * @param privateLinkResourceName The name of the private link resource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateLinkHubName: string, privateLinkResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  get(resourceGroupName: string, privateLinkHubName: string, privateLinkResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResource>, callback?: msRest.ServiceCallback<Models.PrivateLinkResource>): Promise<Models.PrivateLinkHubPrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        privateLinkResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkHubPrivateLinkResourcesGetResponse>;
  }

  /**
   * Get all private link resources for a private link hub
   * @summary Private Link Resources
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubPrivateLinkResourcesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubPrivateLinkResourcesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkHubPrivateLinkResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PrivateLinkHubPrivateLinkResourcesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateLinkHubName
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}/privateLinkResources/{privateLinkResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateLinkHubName,
    Parameters.privateLinkResourceName
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
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

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
import * as Mappers from "../models/privateLinkHubsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a PrivateLinkHubs. */
export class PrivateLinkHubs {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a PrivateLinkHubs.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns a list of privateLinkHubs in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): Promise<Models.PrivateLinkHubsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsListByResourceGroupResponse>;
  }

  /**
   * Gets a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsGetResponse>
   */
  get(resourceGroupName: string, privateLinkHubName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param callback The callback
   */
  get(resourceGroupName: string, privateLinkHubName: string, callback: msRest.ServiceCallback<Models.PrivateLinkHub>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateLinkHubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHub>): void;
  get(resourceGroupName: string, privateLinkHubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHub>, callback?: msRest.ServiceCallback<Models.PrivateLinkHub>): Promise<Models.PrivateLinkHubsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsGetResponse>;
  }

  /**
   * Updates a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param privateLinkHubPatchInfo PrivateLinkHub patch request properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsUpdateResponse>
   */
  update(resourceGroupName: string, privateLinkHubName: string, privateLinkHubPatchInfo: Models.PrivateLinkHubPatchInfo, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param privateLinkHubPatchInfo PrivateLinkHub patch request properties
   * @param callback The callback
   */
  update(resourceGroupName: string, privateLinkHubName: string, privateLinkHubPatchInfo: Models.PrivateLinkHubPatchInfo, callback: msRest.ServiceCallback<Models.PrivateLinkHub>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param privateLinkHubPatchInfo PrivateLinkHub patch request properties
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, privateLinkHubName: string, privateLinkHubPatchInfo: Models.PrivateLinkHubPatchInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHub>): void;
  update(resourceGroupName: string, privateLinkHubName: string, privateLinkHubPatchInfo: Models.PrivateLinkHubPatchInfo, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHub>, callback?: msRest.ServiceCallback<Models.PrivateLinkHub>): Promise<Models.PrivateLinkHubsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        privateLinkHubPatchInfo,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsUpdateResponse>;
  }

  /**
   * Creates or updates a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param privateLinkHubInfo PrivateLinkHub create or update request properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateLinkHubName: string, privateLinkHubInfo: Models.PrivateLinkHub, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param privateLinkHubInfo PrivateLinkHub create or update request properties
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, privateLinkHubName: string, privateLinkHubInfo: Models.PrivateLinkHub, callback: msRest.ServiceCallback<Models.PrivateLinkHub>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param privateLinkHubInfo PrivateLinkHub create or update request properties
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, privateLinkHubName: string, privateLinkHubInfo: Models.PrivateLinkHub, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHub>): void;
  createOrUpdate(resourceGroupName: string, privateLinkHubName: string, privateLinkHubInfo: Models.PrivateLinkHub, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHub>, callback?: msRest.ServiceCallback<Models.PrivateLinkHub>): Promise<Models.PrivateLinkHubsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        privateLinkHubInfo,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateLinkHubName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, privateLinkHubName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName The name of the privateLinkHub
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, privateLinkHubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, privateLinkHubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns a list of privateLinkHubs in a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): Promise<Models.PrivateLinkHubsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsListResponse>;
  }

  /**
   * Returns a list of privateLinkHubs in a resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): Promise<Models.PrivateLinkHubsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsListByResourceGroupNextResponse>;
  }

  /**
   * Returns a list of privateLinkHubs in a subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkHubsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkHubsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkHubInfoListResult>): Promise<Models.PrivateLinkHubsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PrivateLinkHubsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHub",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHubInfoListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
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
      bodyMapper: Mappers.PrivateLinkHub
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
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
  requestBody: {
    parameterPath: "privateLinkHubPatchInfo",
    mapper: {
      ...Mappers.PrivateLinkHubPatchInfo,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHub
    },
    201: {
      bodyMapper: Mappers.PrivateLinkHub
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
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
  requestBody: {
    parameterPath: "privateLinkHubInfo",
    mapper: {
      ...Mappers.PrivateLinkHub,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHub
    },
    201: {
      bodyMapper: Mappers.PrivateLinkHub
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
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
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Synapse/privateLinkHubs",
  urlParameters: [
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
      bodyMapper: Mappers.PrivateLinkHubInfoListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PrivateLinkHubInfoListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHubInfoListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/aFDOriginGroupsMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";

/** Class representing a AFDOriginGroups. */
export class AFDOriginGroups {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a AFDOriginGroups.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the existing origin groups within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsListByProfileResponse>
   */
  listByProfile(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsListByProfileResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param callback The callback
   */
  listByProfile(resourceGroupName: string, profileName: string, callback: msRest.ServiceCallback<Models.AFDOriginGroupListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProfile(resourceGroupName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AFDOriginGroupListResult>): void;
  listByProfile(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AFDOriginGroupListResult>, callback?: msRest.ServiceCallback<Models.AFDOriginGroupListResult>): Promise<Models.AFDOriginGroupsListByProfileResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      listByProfileOperationSpec,
      callback) as Promise<Models.AFDOriginGroupsListByProfileResponse>;
  }

  /**
   * Gets an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsGetResponse>
   */
  get(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, originGroupName: string, callback: msRest.ServiceCallback<Models.AFDOriginGroup>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, originGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AFDOriginGroup>): void;
  get(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AFDOriginGroup>, callback?: msRest.ServiceCallback<Models.AFDOriginGroup>): Promise<Models.AFDOriginGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AFDOriginGroupsGetResponse>;
  }

  /**
   * Creates a new origin group within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroup Origin group properties
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsCreateResponse>
   */
  create(resourceGroupName: string, profileName: string, originGroupName: string, originGroup: Models.AFDOriginGroup, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsCreateResponse> {
    return this.beginCreate(resourceGroupName,profileName,originGroupName,originGroup,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AFDOriginGroupsCreateResponse>;
  }

  /**
   * Updates an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originGroupUpdateProperties Origin group properties
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsUpdateResponse>
   */
  update(resourceGroupName: string, profileName: string, originGroupName: string, originGroupUpdateProperties: Models.AFDOriginGroupUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,profileName,originGroupName,originGroupUpdateProperties,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AFDOriginGroupsUpdateResponse>;
  }

  /**
   * Deletes an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,profileName,originGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsListResourceUsageResponse>
   */
  listResourceUsage(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsListResourceUsageResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param callback The callback
   */
  listResourceUsage(resourceGroupName: string, profileName: string, originGroupName: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceUsage(resourceGroupName: string, profileName: string, originGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  listResourceUsage(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsagesListResult>, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.AFDOriginGroupsListResourceUsageResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        options
      },
      listResourceUsageOperationSpec,
      callback) as Promise<Models.AFDOriginGroupsListResourceUsageResponse>;
  }

  /**
   * Creates a new origin group within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroup Origin group properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, profileName: string, originGroupName: string, originGroup: Models.AFDOriginGroup, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originGroup,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originGroupUpdateProperties Origin group properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, profileName: string, originGroupName: string, originGroupUpdateProperties: Models.AFDOriginGroupUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originGroupUpdateProperties,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing origin group within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the existing origin groups within a profile.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsListByProfileNextResponse>
   */
  listByProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsListByProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AFDOriginGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AFDOriginGroupListResult>): void;
  listByProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AFDOriginGroupListResult>, callback?: msRest.ServiceCallback<Models.AFDOriginGroupListResult>): Promise<Models.AFDOriginGroupsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByProfileNextOperationSpec,
      callback) as Promise<Models.AFDOriginGroupsListByProfileNextResponse>;
  }

  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginGroupsListResourceUsageNextResponse>
   */
  listResourceUsageNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginGroupsListResourceUsageNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listResourceUsageNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceUsageNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  listResourceUsageNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UsagesListResult>, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.AFDOriginGroupsListResourceUsageNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listResourceUsageNextOperationSpec,
      callback) as Promise<Models.AFDOriginGroupsListResourceUsageNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
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
      bodyMapper: Mappers.AFDOriginGroupListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
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
      bodyMapper: Mappers.AFDOriginGroup
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const listResourceUsageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/usages",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
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
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "originGroup",
    mapper: {
      ...Mappers.AFDOriginGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    201: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    202: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "originGroupUpdateProperties",
    mapper: {
      ...Mappers.AFDOriginGroupUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    202: {
      bodyMapper: Mappers.AFDOriginGroup
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const listByProfileNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AFDOriginGroupListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const listResourceUsageNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
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
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};
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
import * as Mappers from "../models/aFDOriginsMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";

/** Class representing a AFDOrigins. */
export class AFDOrigins {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a AFDOrigins.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the existing origins within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginsListByOriginGroupResponse>
   */
  listByOriginGroup(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginsListByOriginGroupResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param callback The callback
   */
  listByOriginGroup(resourceGroupName: string, profileName: string, originGroupName: string, callback: msRest.ServiceCallback<Models.AFDOriginListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByOriginGroup(resourceGroupName: string, profileName: string, originGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AFDOriginListResult>): void;
  listByOriginGroup(resourceGroupName: string, profileName: string, originGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AFDOriginListResult>, callback?: msRest.ServiceCallback<Models.AFDOriginListResult>): Promise<Models.AFDOriginsListByOriginGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        options
      },
      listByOriginGroupOperationSpec,
      callback) as Promise<Models.AFDOriginsListByOriginGroupResponse>;
  }

  /**
   * Gets an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginsGetResponse>
   */
  get(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, callback: msRest.ServiceCallback<Models.AFDOrigin>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AFDOrigin>): void;
  get(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AFDOrigin>, callback?: msRest.ServiceCallback<Models.AFDOrigin>): Promise<Models.AFDOriginsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AFDOriginsGetResponse>;
  }

  /**
   * Creates a new origin within the specified origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin that is unique within the profile.
   * @param origin Origin properties
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginsCreateResponse>
   */
  create(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, origin: Models.AFDOrigin, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginsCreateResponse> {
    return this.beginCreate(resourceGroupName,profileName,originGroupName,originName,origin,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AFDOriginsCreateResponse>;
  }

  /**
   * Updates an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param originUpdateProperties Origin properties
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginsUpdateResponse>
   */
  update(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, originUpdateProperties: Models.AFDOriginUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,profileName,originGroupName,originName,originUpdateProperties,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AFDOriginsUpdateResponse>;
  }

  /**
   * Deletes an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,profileName,originGroupName,originName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new origin within the specified origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin that is unique within the profile.
   * @param origin Origin properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, origin: Models.AFDOrigin, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        origin,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param originUpdateProperties Origin properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, originUpdateProperties: Models.AFDOriginUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        originUpdateProperties,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, profileName: string, originGroupName: string, originName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the existing origins within an origin group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AFDOriginsListByOriginGroupNextResponse>
   */
  listByOriginGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AFDOriginsListByOriginGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByOriginGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AFDOriginListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByOriginGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AFDOriginListResult>): void;
  listByOriginGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AFDOriginListResult>, callback?: msRest.ServiceCallback<Models.AFDOriginListResult>): Promise<Models.AFDOriginsListByOriginGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByOriginGroupNextOperationSpec,
      callback) as Promise<Models.AFDOriginsListByOriginGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByOriginGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins",
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
      bodyMapper: Mappers.AFDOriginListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.originName,
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
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.originName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "origin",
    mapper: {
      ...Mappers.AFDOrigin,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    201: {
      bodyMapper: Mappers.AFDOrigin
    },
    202: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.originName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "originUpdateProperties",
    mapper: {
      ...Mappers.AFDOriginUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    202: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.originGroupName,
    Parameters.originName,
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

const listByOriginGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AFDOriginListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};
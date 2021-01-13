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
import * as Mappers from "../models/addonsMappers";
import * as Parameters from "../models/parameters";
import { AvsClientContext } from "../avsClientContext";

/** Class representing a Addons. */
export class Addons {
  private readonly client: AvsClientContext;

  /**
   * Create a Addons.
   * @param {AvsClientContext} client Reference to the service client.
   */
  constructor(client: AvsClientContext) {
    this.client = client;
  }

  /**
   * @summary List addons in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.AddonsListResponse>
   */
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<Models.AddonsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, callback: msRest.ServiceCallback<Models.AddonList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AddonList>): void;
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AddonList>, callback?: msRest.ServiceCallback<Models.AddonList>): Promise<Models.AddonsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AddonsListResponse>;
  }

  /**
   * @summary Get an addon by name in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param addonName Name of the addon for the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.AddonsGetResponse>
   */
  get(resourceGroupName: string, privateCloudName: string, addonName: string, options?: msRest.RequestOptionsBase): Promise<Models.AddonsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param addonName Name of the addon for the private cloud
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, addonName: string, callback: msRest.ServiceCallback<Models.Addon>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param addonName Name of the addon for the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, addonName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Addon>): void;
  get(resourceGroupName: string, privateCloudName: string, addonName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Addon>, callback?: msRest.ServiceCallback<Models.Addon>): Promise<Models.AddonsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        addonName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AddonsGetResponse>;
  }

  /**
   * @summary Create or update a addon in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param addonName Name of the addon for the private cloud
   * @param addon A addon in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.AddonsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, addonName: string, addon: Models.Addon, options?: msRest.RequestOptionsBase): Promise<Models.AddonsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,privateCloudName,addonName,addon,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AddonsCreateOrUpdateResponse>;
  }

  /**
   * @summary Delete a addon in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param addonName Name of the addon for the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, addonName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,privateCloudName,addonName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Create or update a addon in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param addonName Name of the addon for the private cloud
   * @param addon A addon in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, privateCloudName: string, addonName: string, addon: Models.Addon, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        addonName,
        addon,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * @summary Delete a addon in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param addonName Name of the addon for the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, privateCloudName: string, addonName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        addonName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary List addons in a private cloud
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AddonsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AddonsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AddonList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AddonList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AddonList>, callback?: msRest.ServiceCallback<Models.AddonList>): Promise<Models.AddonsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AddonsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AddonList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.addonName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Addon
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.addonName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "addon",
    mapper: {
      ...Mappers.Addon,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Addon
    },
    201: {
      bodyMapper: Mappers.Addon
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.addonName
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
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AddonList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

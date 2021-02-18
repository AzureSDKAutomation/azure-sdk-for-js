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
import * as Mappers from "../models/privateLinkServicesForEDMUploadMappers";
import * as Parameters from "../models/parameters";
import { SecurityAndComplianceAPIsContext } from "../securityAndComplianceAPIsContext";

/** Class representing a PrivateLinkServicesForEDMUpload. */
export class PrivateLinkServicesForEDMUpload {
  private readonly client: SecurityAndComplianceAPIsContext;

  /**
   * Create a PrivateLinkServicesForEDMUpload.
   * @param {SecurityAndComplianceAPIsContext} client Reference to the service client.
   */
  constructor(client: SecurityAndComplianceAPIsContext) {
    this.client = client;
  }

  /**
   * Get the metadata of a privateLinkServicesForEDMUpload resource.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescription>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescription>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescription>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescription>): Promise<Models.PrivateLinkServicesForEDMUploadGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForEDMUploadGetResponse>;
  }

  /**
   * Create or update the metadata of a privateLinkServicesForEDMUpload instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateLinkServicesForEDMUploadDescription The service instance metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, privateLinkServicesForEDMUploadDescription: Models.PrivateLinkServicesForEDMUploadDescription, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,resourceName,privateLinkServicesForEDMUploadDescription,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateLinkServicesForEDMUploadCreateOrUpdateResponse>;
  }

  /**
   * Update the metadata of a privateLinkServicesForEDMUpload instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param servicePatchDescription The service instance metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, servicePatchDescription: Models.ServicesPatchDescription, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadUpdateResponse> {
    return this.beginUpdate(resourceGroupName,resourceName,servicePatchDescription,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateLinkServicesForEDMUploadUpdateResponse>;
  }

  /**
   * Get all the privateLinkServicesForEDMUpload instances in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): Promise<Models.PrivateLinkServicesForEDMUploadListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForEDMUploadListResponse>;
  }

  /**
   * Get all the service instances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupResponse>;
  }

  /**
   * Create or update the metadata of a privateLinkServicesForEDMUpload instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateLinkServicesForEDMUploadDescription The service instance metadata.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, resourceName: string, privateLinkServicesForEDMUploadDescription: Models.PrivateLinkServicesForEDMUploadDescription, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        privateLinkServicesForEDMUploadDescription,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update the metadata of a privateLinkServicesForEDMUpload instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param servicePatchDescription The service instance metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, resourceName: string, servicePatchDescription: Models.ServicesPatchDescription, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        servicePatchDescription,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Get all the privateLinkServicesForEDMUpload instances in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): Promise<Models.PrivateLinkServicesForEDMUploadListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForEDMUploadListNextResponse>;
  }

  /**
   * Get all the service instances in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForEDMUploadDescriptionListResult>): Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForEDMUploadListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload",
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
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload",
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
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "privateLinkServicesForEDMUploadDescription",
    mapper: {
      ...Mappers.PrivateLinkServicesForEDMUploadDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescription
    },
    201: {
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "servicePatchDescription",
    mapper: {
      ...Mappers.ServicesPatchDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescription
    },
    202: {
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
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
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
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
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServicesForEDMUploadDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

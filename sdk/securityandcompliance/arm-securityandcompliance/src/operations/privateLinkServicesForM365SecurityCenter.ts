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
import * as Mappers from "../models/privateLinkServicesForM365SecurityCenterMappers";
import * as Parameters from "../models/parameters";
import { SecurityAndComplianceAPIsContext } from "../securityAndComplianceAPIsContext";

/** Class representing a PrivateLinkServicesForM365SecurityCenter. */
export class PrivateLinkServicesForM365SecurityCenter {
  private readonly client: SecurityAndComplianceAPIsContext;

  /**
   * Create a PrivateLinkServicesForM365SecurityCenter.
   * @param {SecurityAndComplianceAPIsContext} client Reference to the service client.
   */
  constructor(client: SecurityAndComplianceAPIsContext) {
    this.client = client;
  }

  /**
   * Get the metadata of a privateLinkServicesForM365SecurityCenter resource.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescription>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescription>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescription>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescription>): Promise<Models.PrivateLinkServicesForM365SecurityCenterGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForM365SecurityCenterGetResponse>;
  }

  /**
   * Create or update the metadata of a privateLinkServicesForM365SecurityCenter instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateLinkServicesForM365SecurityCenterDescription The service instance metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, privateLinkServicesForM365SecurityCenterDescription: Models.PrivateLinkServicesForM365SecurityCenterDescription, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,resourceName,privateLinkServicesForM365SecurityCenterDescription,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateLinkServicesForM365SecurityCenterCreateOrUpdateResponse>;
  }

  /**
   * Update the metadata of a privateLinkServicesForM365SecurityCenter instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param servicePatchDescription The service instance metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, servicePatchDescription: Models.ServicesPatchDescription, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterUpdateResponse> {
    return this.beginUpdate(resourceGroupName,resourceName,servicePatchDescription,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateLinkServicesForM365SecurityCenterUpdateResponse>;
  }

  /**
   * Delete a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get all the privateLinkServicesForM365SecurityCenter instances in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): Promise<Models.PrivateLinkServicesForM365SecurityCenterListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForM365SecurityCenterListResponse>;
  }

  /**
   * Get all the service instances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupResponse>;
  }

  /**
   * Create or update the metadata of a privateLinkServicesForM365SecurityCenter instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param privateLinkServicesForM365SecurityCenterDescription The service instance metadata.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, resourceName: string, privateLinkServicesForM365SecurityCenterDescription: Models.PrivateLinkServicesForM365SecurityCenterDescription, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        privateLinkServicesForM365SecurityCenterDescription,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update the metadata of a privateLinkServicesForM365SecurityCenter instance.
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
   * Delete a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Get all the privateLinkServicesForM365SecurityCenter instances in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): Promise<Models.PrivateLinkServicesForM365SecurityCenterListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForM365SecurityCenterListNextResponse>;
  }

  /**
   * Get all the service instances in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkServicesForM365SecurityCenterDescriptionListResult>): Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.PrivateLinkServicesForM365SecurityCenterListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
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
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter",
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
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter",
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
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
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
    parameterPath: "privateLinkServicesForM365SecurityCenterDescription",
    mapper: {
      ...Mappers.PrivateLinkServicesForM365SecurityCenterDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescription
    },
    201: {
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
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
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescription
    },
    202: {
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
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
    200: {},
    202: {},
    204: {},
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
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescriptionListResult
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
      bodyMapper: Mappers.PrivateLinkServicesForM365SecurityCenterDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/servicesMappers";
import * as Parameters from "../models/parameters";
import { HealthcareApisManagementClientContext } from "../healthcareApisManagementClientContext";

/** Class representing a Services. */
export class Services {
  private readonly client: HealthcareApisManagementClientContext;

  /**
   * Create a Services.
   * @param {HealthcareApisManagementClientContext} client Reference to the service client.
   */
  constructor(client: HealthcareApisManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ServicesDescription>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesDescription>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesDescription>, callback?: msRest.ServiceCallback<Models.ServicesDescription>): Promise<Models.ServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServicesGetResponse>;
  }

  /**
   * Create or update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param serviceDescription The service instance metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, serviceDescription: Models.ServicesDescription, options?: msRest.RequestOptionsBase): Promise<Models.ServicesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,resourceName,serviceDescription,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServicesCreateOrUpdateResponse>;
  }

  /**
   * Update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param servicePatchDescription The service instance metadata and security metadata.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, servicePatchDescription: Models.ServicesPatchDescription, options?: msRest.RequestOptionsBase): Promise<Models.ServicesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,resourceName,servicePatchDescription,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServicesUpdateResponse>;
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
   * Get all the service instances in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ServicesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesDescriptionListResult>, callback?: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): Promise<Models.ServicesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServicesListResponse>;
  }

  /**
   * Get all the service instances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesDescriptionListResult>, callback?: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): Promise<Models.ServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ServicesListByResourceGroupResponse>;
  }

  /**
   * Check if a service instance name is available.
   * @param checkNameAvailabilityInputs Set the name parameter in the CheckNameAvailabilityParameters
   * structure to the name of the service instance to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesCheckNameAvailabilityResponse>
   */
  checkNameAvailability(checkNameAvailabilityInputs: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<Models.ServicesCheckNameAvailabilityResponse>;
  /**
   * @param checkNameAvailabilityInputs Set the name parameter in the CheckNameAvailabilityParameters
   * structure to the name of the service instance to check.
   * @param callback The callback
   */
  checkNameAvailability(checkNameAvailabilityInputs: Models.CheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.ServicesNameAvailabilityInfo>): void;
  /**
   * @param checkNameAvailabilityInputs Set the name parameter in the CheckNameAvailabilityParameters
   * structure to the name of the service instance to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(checkNameAvailabilityInputs: Models.CheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesNameAvailabilityInfo>): void;
  checkNameAvailability(checkNameAvailabilityInputs: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesNameAvailabilityInfo>, callback?: msRest.ServiceCallback<Models.ServicesNameAvailabilityInfo>): Promise<Models.ServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        checkNameAvailabilityInputs,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.ServicesCheckNameAvailabilityResponse>;
  }

  /**
   * Create or update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param serviceDescription The service instance metadata.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, resourceName: string, serviceDescription: Models.ServicesDescription, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        serviceDescription,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update the metadata of a service instance.
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
   * Get all the service instances in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesDescriptionListResult>, callback?: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): Promise<Models.ServicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ServicesListNextResponse>;
  }

  /**
   * Get all the service instances in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesDescriptionListResult>, callback?: msRest.ServiceCallback<Models.ServicesDescriptionListResult>): Promise<Models.ServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ServicesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
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
      bodyMapper: Mappers.ServicesDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/services",
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
      bodyMapper: Mappers.ServicesDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services",
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
      bodyMapper: Mappers.ServicesDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "checkNameAvailabilityInputs",
    mapper: {
      ...Mappers.CheckNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServicesNameAvailabilityInfo
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
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
    parameterPath: "serviceDescription",
    mapper: {
      ...Mappers.ServicesDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServicesDescription
    },
    201: {
      bodyMapper: Mappers.ServicesDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
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
      bodyMapper: Mappers.ServicesDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}",
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicesDescriptionListResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicesDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};
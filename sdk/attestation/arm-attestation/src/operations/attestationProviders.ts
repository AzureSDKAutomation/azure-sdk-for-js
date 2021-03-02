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
import * as Mappers from "../models/attestationProvidersMappers";
import * as Parameters from "../models/parameters";
import { AttestationManagementClientContext } from "../attestationManagementClientContext";

/** Class representing a AttestationProviders. */
export class AttestationProviders {
  private readonly client: AttestationManagementClientContext;

  /**
   * Create a AttestationProviders.
   * @param {AttestationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AttestationManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the status of Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersGetResponse>
   */
  get(resourceGroupName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param callback The callback
   */
  get(resourceGroupName: string, providerName: string, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, providerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  get(resourceGroupName: string, providerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProvider>, callback?: msRest.ServiceCallback<Models.AttestationProvider>): Promise<Models.AttestationProvidersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AttestationProvidersGetResponse>;
  }

  /**
   * Creates a new Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param creationParams Client supplied parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersCreateResponse>
   */
  create(resourceGroupName: string, providerName: string, creationParams: Models.AttestationServiceCreationParams, options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param creationParams Client supplied parameters.
   * @param callback The callback
   */
  create(resourceGroupName: string, providerName: string, creationParams: Models.AttestationServiceCreationParams, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param creationParams Client supplied parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, providerName: string, creationParams: Models.AttestationServiceCreationParams, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  create(resourceGroupName: string, providerName: string, creationParams: Models.AttestationServiceCreationParams, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProvider>, callback?: msRest.ServiceCallback<Models.AttestationProvider>): Promise<Models.AttestationProvidersCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        creationParams,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AttestationProvidersCreateResponse>;
  }

  /**
   * Updates the Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param updateParams Client supplied parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersUpdateResponse>
   */
  update(resourceGroupName: string, providerName: string, updateParams: Models.AttestationServicePatchParams, options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param updateParams Client supplied parameters.
   * @param callback The callback
   */
  update(resourceGroupName: string, providerName: string, updateParams: Models.AttestationServicePatchParams, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param updateParams Client supplied parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, providerName: string, updateParams: Models.AttestationServicePatchParams, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  update(resourceGroupName: string, providerName: string, updateParams: Models.AttestationServicePatchParams, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProvider>, callback?: msRest.ServiceCallback<Models.AttestationProvider>): Promise<Models.AttestationProvidersUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        updateParams,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AttestationProvidersUpdateResponse>;
  }

  /**
   * Delete Attestation Service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation service
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation service
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, providerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation service
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, providerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, providerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns a list of attestation providers in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AttestationProviderListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProviderListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProviderListResult>, callback?: msRest.ServiceCallback<Models.AttestationProviderListResult>): Promise<Models.AttestationProvidersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AttestationProvidersListResponse>;
  }

  /**
   * Returns attestation providers list in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AttestationProviderListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProviderListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProviderListResult>, callback?: msRest.ServiceCallback<Models.AttestationProviderListResult>): Promise<Models.AttestationProvidersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AttestationProvidersListByResourceGroupResponse>;
  }

  /**
   * Get the default provider
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersListDefaultResponse>
   */
  listDefault(options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersListDefaultResponse>;
  /**
   * @param callback The callback
   */
  listDefault(callback: msRest.ServiceCallback<Models.AttestationProviderListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listDefault(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProviderListResult>): void;
  listDefault(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProviderListResult>, callback?: msRest.ServiceCallback<Models.AttestationProviderListResult>): Promise<Models.AttestationProvidersListDefaultResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listDefaultOperationSpec,
      callback) as Promise<Models.AttestationProvidersListDefaultResponse>;
  }

  /**
   * Get the default provider by location.
   * @param location The location of the default provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttestationProvidersGetDefaultByLocationResponse>
   */
  getDefaultByLocation(location: string, options?: msRest.RequestOptionsBase): Promise<Models.AttestationProvidersGetDefaultByLocationResponse>;
  /**
   * @param location The location of the default provider.
   * @param callback The callback
   */
  getDefaultByLocation(location: string, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  /**
   * @param location The location of the default provider.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDefaultByLocation(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttestationProvider>): void;
  getDefaultByLocation(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttestationProvider>, callback?: msRest.ServiceCallback<Models.AttestationProvider>): Promise<Models.AttestationProvidersGetDefaultByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      getDefaultByLocationOperationSpec,
      callback) as Promise<Models.AttestationProvidersGetDefaultByLocationResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Attestation/attestationProviders/{providerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName0
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AttestationProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Attestation/attestationProviders/{providerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName0
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "creationParams",
    mapper: {
      ...Mappers.AttestationServiceCreationParams,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AttestationProvider
    },
    201: {
      bodyMapper: Mappers.AttestationProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Attestation/attestationProviders/{providerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName0
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateParams",
    mapper: {
      ...Mappers.AttestationServicePatchParams,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AttestationProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Attestation/attestationProviders/{providerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName0
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

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Attestation/attestationProviders",
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
      bodyMapper: Mappers.AttestationProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Attestation/attestationProviders",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.AttestationProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listDefaultOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Attestation/defaultProviders",
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
      bodyMapper: Mappers.AttestationProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getDefaultByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Attestation/locations/{location}/defaultProvider",
  urlParameters: [
    Parameters.location,
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
      bodyMapper: Mappers.AttestationProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

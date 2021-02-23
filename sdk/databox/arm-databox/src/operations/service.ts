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
import * as Mappers from "../models/serviceMappers";
import * as Parameters from "../models/parameters";
import { DataBoxManagementClientContext } from "../dataBoxManagementClientContext";

/** Class representing a Service. */
export class Service {
  private readonly client: DataBoxManagementClientContext;

  /**
   * Create a Service.
   * @param {DataBoxManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxManagementClientContext) {
    this.client = client;
  }

  /**
   * This method provides the list of available skus for the given subscription, resource group and
   * location.
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param availableSkuRequest Filters for showing the available skus.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListAvailableSkusByResourceGroupResponse>
   */
  listAvailableSkusByResourceGroup(resourceGroupName: string, location: string, availableSkuRequest: Models.AvailableSkuRequest, options?: msRest.RequestOptionsBase): Promise<Models.ServiceListAvailableSkusByResourceGroupResponse>;
  /**
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param availableSkuRequest Filters for showing the available skus.
   * @param callback The callback
   */
  listAvailableSkusByResourceGroup(resourceGroupName: string, location: string, availableSkuRequest: Models.AvailableSkuRequest, callback: msRest.ServiceCallback<Models.AvailableSkusResult>): void;
  /**
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param availableSkuRequest Filters for showing the available skus.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAvailableSkusByResourceGroup(resourceGroupName: string, location: string, availableSkuRequest: Models.AvailableSkuRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableSkusResult>): void;
  listAvailableSkusByResourceGroup(resourceGroupName: string, location: string, availableSkuRequest: Models.AvailableSkuRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailableSkusResult>, callback?: msRest.ServiceCallback<Models.AvailableSkusResult>): Promise<Models.ServiceListAvailableSkusByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        location,
        availableSkuRequest,
        options
      },
      listAvailableSkusByResourceGroupOperationSpec,
      callback) as Promise<Models.ServiceListAvailableSkusByResourceGroupResponse>;
  }

  /**
   * [DEPRECATED NOTICE: This operation will soon be removed]. This method validates the customer
   * shipping address and provide alternate addresses if any.
   * @param location The location of the resource
   * @param validateAddress Shipping address of the customer.
   * @param [options] The optional parameters
   * @deprecated This operation is deprecated. Please do not use it any longer.
   * @returns Promise<Models.ServiceValidateAddressMethodResponse>
   */
  validateAddressMethod(location: string, validateAddress: Models.ValidateAddress, options?: msRest.RequestOptionsBase): Promise<Models.ServiceValidateAddressMethodResponse>;
  /**
   * @param location The location of the resource
   * @param validateAddress Shipping address of the customer.
   * @param callback The callback
   * @deprecated This operation is deprecated. Please do not use it any longer.
   */
  validateAddressMethod(location: string, validateAddress: Models.ValidateAddress, callback: msRest.ServiceCallback<Models.AddressValidationOutput>): void;
  /**
   * @param location The location of the resource
   * @param validateAddress Shipping address of the customer.
   * @param options The optional parameters
   * @param callback The callback
   * @deprecated This operation is deprecated. Please do not use it any longer.
   */
  validateAddressMethod(location: string, validateAddress: Models.ValidateAddress, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AddressValidationOutput>): void;
  validateAddressMethod(location: string, validateAddress: Models.ValidateAddress, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AddressValidationOutput>, callback?: msRest.ServiceCallback<Models.AddressValidationOutput>): Promise<Models.ServiceValidateAddressMethodResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        validateAddress,
        options
      },
      validateAddressMethodOperationSpec,
      callback) as Promise<Models.ServiceValidateAddressMethodResponse>;
  }

  /**
   * This method does all necessary pre-job creation validation under resource group.
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param validationRequest Inputs of the customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceValidateInputsByResourceGroupResponse>
   */
  validateInputsByResourceGroup(resourceGroupName: string, location: string, validationRequest: Models.ValidationRequestUnion, options?: msRest.RequestOptionsBase): Promise<Models.ServiceValidateInputsByResourceGroupResponse>;
  /**
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param validationRequest Inputs of the customer.
   * @param callback The callback
   */
  validateInputsByResourceGroup(resourceGroupName: string, location: string, validationRequest: Models.ValidationRequestUnion, callback: msRest.ServiceCallback<Models.ValidationResponse>): void;
  /**
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param validationRequest Inputs of the customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateInputsByResourceGroup(resourceGroupName: string, location: string, validationRequest: Models.ValidationRequestUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidationResponse>): void;
  validateInputsByResourceGroup(resourceGroupName: string, location: string, validationRequest: Models.ValidationRequestUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidationResponse>, callback?: msRest.ServiceCallback<Models.ValidationResponse>): Promise<Models.ServiceValidateInputsByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        location,
        validationRequest,
        options
      },
      validateInputsByResourceGroupOperationSpec,
      callback) as Promise<Models.ServiceValidateInputsByResourceGroupResponse>;
  }

  /**
   * This method does all necessary pre-job creation validation under subscription.
   * @param location The location of the resource
   * @param validationRequest Inputs of the customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceValidateInputsResponse>
   */
  validateInputs(location: string, validationRequest: Models.ValidationRequestUnion, options?: msRest.RequestOptionsBase): Promise<Models.ServiceValidateInputsResponse>;
  /**
   * @param location The location of the resource
   * @param validationRequest Inputs of the customer.
   * @param callback The callback
   */
  validateInputs(location: string, validationRequest: Models.ValidationRequestUnion, callback: msRest.ServiceCallback<Models.ValidationResponse>): void;
  /**
   * @param location The location of the resource
   * @param validationRequest Inputs of the customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateInputs(location: string, validationRequest: Models.ValidationRequestUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidationResponse>): void;
  validateInputs(location: string, validationRequest: Models.ValidationRequestUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidationResponse>, callback?: msRest.ServiceCallback<Models.ValidationResponse>): Promise<Models.ServiceValidateInputsResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        validationRequest,
        options
      },
      validateInputsOperationSpec,
      callback) as Promise<Models.ServiceValidateInputsResponse>;
  }

  /**
   * This API provides configuration details specific to given region/location at Subscription level.
   * @param location The location of the resource
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceRegionConfigurationResponse>
   */
  regionConfiguration(location: string, options?: Models.ServiceRegionConfigurationOptionalParams): Promise<Models.ServiceRegionConfigurationResponse>;
  /**
   * @param location The location of the resource
   * @param callback The callback
   */
  regionConfiguration(location: string, callback: msRest.ServiceCallback<Models.RegionConfigurationResponse>): void;
  /**
   * @param location The location of the resource
   * @param options The optional parameters
   * @param callback The callback
   */
  regionConfiguration(location: string, options: Models.ServiceRegionConfigurationOptionalParams, callback: msRest.ServiceCallback<Models.RegionConfigurationResponse>): void;
  regionConfiguration(location: string, options?: Models.ServiceRegionConfigurationOptionalParams | msRest.ServiceCallback<Models.RegionConfigurationResponse>, callback?: msRest.ServiceCallback<Models.RegionConfigurationResponse>): Promise<Models.ServiceRegionConfigurationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      regionConfigurationOperationSpec,
      callback) as Promise<Models.ServiceRegionConfigurationResponse>;
  }

  /**
   * This API provides configuration details specific to given region/location at Resource group
   * level.
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceRegionConfigurationByResourceGroupResponse>
   */
  regionConfigurationByResourceGroup(resourceGroupName: string, location: string, options?: Models.ServiceRegionConfigurationByResourceGroupOptionalParams): Promise<Models.ServiceRegionConfigurationByResourceGroupResponse>;
  /**
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param callback The callback
   */
  regionConfigurationByResourceGroup(resourceGroupName: string, location: string, callback: msRest.ServiceCallback<Models.RegionConfigurationResponse>): void;
  /**
   * @param resourceGroupName The Resource Group Name
   * @param location The location of the resource
   * @param options The optional parameters
   * @param callback The callback
   */
  regionConfigurationByResourceGroup(resourceGroupName: string, location: string, options: Models.ServiceRegionConfigurationByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.RegionConfigurationResponse>): void;
  regionConfigurationByResourceGroup(resourceGroupName: string, location: string, options?: Models.ServiceRegionConfigurationByResourceGroupOptionalParams | msRest.ServiceCallback<Models.RegionConfigurationResponse>, callback?: msRest.ServiceCallback<Models.RegionConfigurationResponse>): Promise<Models.ServiceRegionConfigurationByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        location,
        options
      },
      regionConfigurationByResourceGroupOperationSpec,
      callback) as Promise<Models.ServiceRegionConfigurationByResourceGroupResponse>;
  }

  /**
   * This method provides the list of available skus for the given subscription, resource group and
   * location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListAvailableSkusByResourceGroupNextResponse>
   */
  listAvailableSkusByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceListAvailableSkusByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAvailableSkusByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailableSkusResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAvailableSkusByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableSkusResult>): void;
  listAvailableSkusByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailableSkusResult>, callback?: msRest.ServiceCallback<Models.AvailableSkusResult>): Promise<Models.ServiceListAvailableSkusByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAvailableSkusByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ServiceListAvailableSkusByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAvailableSkusByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/availableSkus",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "availableSkuRequest",
    mapper: {
      ...Mappers.AvailableSkuRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AvailableSkusResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const validateAddressMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateAddress",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "validateAddress",
    mapper: {
      ...Mappers.ValidateAddress,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AddressValidationOutput
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const validateInputsByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/validateInputs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "validationRequest",
    mapper: {
      ...Mappers.ValidationRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidationResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const validateInputsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateInputs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "validationRequest",
    mapper: {
      ...Mappers.ValidationRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidationResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const regionConfigurationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      scheduleAvailabilityRequest: [
        "options",
        "scheduleAvailabilityRequest"
      ],
      transportAvailabilityRequest: [
        "options",
        "transportAvailabilityRequest"
      ]
    },
    mapper: {
      ...Mappers.RegionConfigurationRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RegionConfigurationResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const regionConfigurationByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      scheduleAvailabilityRequest: [
        "options",
        "scheduleAvailabilityRequest"
      ],
      transportAvailabilityRequest: [
        "options",
        "transportAvailabilityRequest"
      ]
    },
    mapper: {
      ...Mappers.RegionConfigurationRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RegionConfigurationResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listAvailableSkusByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AvailableSkusResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

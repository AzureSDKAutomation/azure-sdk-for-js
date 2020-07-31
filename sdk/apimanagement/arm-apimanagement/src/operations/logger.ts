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
import * as Mappers from "../models/loggerMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a Logger. */
export class Logger {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a Logger.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of loggers in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoggerListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.LoggerListByServiceOptionalParams): Promise<Models.LoggerListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.LoggerCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.LoggerListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.LoggerCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.LoggerListByServiceOptionalParams | msRest.ServiceCallback<Models.LoggerCollection>, callback?: msRest.ServiceCallback<Models.LoggerCollection>): Promise<Models.LoggerListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.LoggerListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the logger specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoggerGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, loggerId: string, options?: msRest.RequestOptionsBase): Promise<Models.LoggerGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, loggerId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, loggerId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, loggerId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.LoggerGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        loggerId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.LoggerGetEntityTagResponse>;
  }

  /**
   * Gets the details of the logger specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoggerGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, loggerId: string, options?: msRest.RequestOptionsBase): Promise<Models.LoggerGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, loggerId: string, callback: msRest.ServiceCallback<Models.LoggerContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, loggerId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoggerContract>): void;
  get(resourceGroupName: string, serviceName: string, loggerId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoggerContract>, callback?: msRest.ServiceCallback<Models.LoggerContract>): Promise<Models.LoggerGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        loggerId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoggerGetResponse>;
  }

  /**
   * Creates or Updates a logger.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Create parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoggerCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerContract, options?: Models.LoggerCreateOrUpdateOptionalParams): Promise<Models.LoggerCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Create parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerContract, callback: msRest.ServiceCallback<Models.LoggerContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Create parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerContract, options: Models.LoggerCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.LoggerContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerContract, options?: Models.LoggerCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.LoggerContract>, callback?: msRest.ServiceCallback<Models.LoggerContract>): Promise<Models.LoggerCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        loggerId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.LoggerCreateOrUpdateResponse>;
  }

  /**
   * Updates an existing logger.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerUpdateContract, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerUpdateContract, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerUpdateContract, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, loggerId: string, parameters: Models.LoggerUpdateContract, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        loggerId,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Deletes the specified logger.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, loggerId: string, ifMatch: string, options?: Models.LoggerDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, loggerId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, loggerId: string, ifMatch: string, options: Models.LoggerDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, loggerId: string, ifMatch: string, options?: Models.LoggerDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        loggerId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of loggers in the specified service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoggerListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LoggerListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoggerCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoggerCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoggerCollection>, callback?: msRest.ServiceCallback<Models.LoggerCollection>): Promise<Models.LoggerListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.LoggerListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LoggerCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.loggerId,
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
      headersMapper: Mappers.LoggerGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.LoggerGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.loggerId,
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
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.LoggerGetHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.loggerId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.LoggerContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.LoggerCreateOrUpdateHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.loggerId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.LoggerUpdateContract,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.loggerId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.force,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.LoggerCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

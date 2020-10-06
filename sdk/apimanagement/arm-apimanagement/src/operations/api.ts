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
import * as Mappers from "../models/apiMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a Api. */
export class Api {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a Api.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all APIs of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.ApiListByServiceOptionalParams): Promise<Models.ApiListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.ApiListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.ApiListByServiceOptionalParams | msRest.ServiceCallback<Models.ApiCollection>, callback?: msRest.ServiceCallback<Models.ApiCollection>): Promise<Models.ApiListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.ApiListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the API specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ApiGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ApiGetEntityTagResponse>;
  }

  /**
   * Gets the details of the API specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, callback: msRest.ServiceCallback<Models.ApiContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiContract>): void;
  get(resourceGroupName: string, serviceName: string, apiId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiContract>, callback?: msRest.ServiceCallback<Models.ApiContract>): Promise<Models.ApiGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiGetResponse>;
  }

  /**
   * Creates new or updates existing specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters Create or update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, parameters: Models.ApiCreateOrUpdateParameter, options?: Models.ApiCreateOrUpdateOptionalParams): Promise<Models.ApiCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serviceName,apiId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApiCreateOrUpdateResponse>;
  }

  /**
   * Updates the specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters API Update Contract parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, parameters: Models.ApiUpdateContract, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters API Update Contract parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, parameters: Models.ApiUpdateContract, ifMatch: string, callback: msRest.ServiceCallback<Models.ApiContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters API Update Contract parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, parameters: Models.ApiUpdateContract, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiContract>): void;
  update(resourceGroupName: string, serviceName: string, apiId: string, parameters: Models.ApiUpdateContract, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiContract>, callback?: msRest.ServiceCallback<Models.ApiContract>): Promise<Models.ApiUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ApiUpdateResponse>;
  }

  /**
   * Deletes the specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, ifMatch: string, options?: Models.ApiDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, ifMatch: string, options: Models.ApiDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, ifMatch: string, options?: Models.ApiDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of apis associated with tags.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiListByTagsResponse>
   */
  listByTags(resourceGroupName: string, serviceName: string, options?: Models.ApiListByTagsOptionalParams): Promise<Models.ApiListByTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByTags(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTags(resourceGroupName: string, serviceName: string, options: Models.ApiListByTagsOptionalParams, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  listByTags(resourceGroupName: string, serviceName: string, options?: Models.ApiListByTagsOptionalParams | msRest.ServiceCallback<Models.TagResourceCollection>, callback?: msRest.ServiceCallback<Models.TagResourceCollection>): Promise<Models.ApiListByTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByTagsOperationSpec,
      callback) as Promise<Models.ApiListByTagsResponse>;
  }

  /**
   * Creates new or updates existing specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters Create or update parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, parameters: Models.ApiCreateOrUpdateParameter, options?: Models.ApiBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all APIs of the API Management service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiCollection>, callback?: msRest.ServiceCallback<Models.ApiCollection>): Promise<Models.ApiListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.ApiListByServiceNextResponse>;
  }

  /**
   * Lists a collection of apis associated with tags.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiListByTagsNextResponse>
   */
  listByTagsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiListByTagsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByTagsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTagsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagResourceCollection>): void;
  listByTagsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TagResourceCollection>, callback?: msRest.ServiceCallback<Models.TagResourceCollection>): Promise<Models.ApiListByTagsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByTagsNextOperationSpec,
      callback) as Promise<Models.ApiListByTagsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.tags,
    Parameters.expandApiVersionSet,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
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
      headersMapper: Mappers.ApiGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
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
      bodyMapper: Mappers.ApiContract,
      headersMapper: Mappers.ApiGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiGetHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
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
      ...Mappers.ApiUpdateContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiContract,
      headersMapper: Mappers.ApiUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.deleteRevisions,
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

const listByTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apisByTags",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.includeNotTaggedApis,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TagResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
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
      ...Mappers.ApiCreateOrUpdateParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiContract,
      headersMapper: Mappers.ApiCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ApiContract,
      headersMapper: Mappers.ApiCreateOrUpdateHeaders
    },
    202: {
      headersMapper: Mappers.ApiCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ApiCreateOrUpdateHeaders
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
      bodyMapper: Mappers.ApiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByTagsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.TagResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

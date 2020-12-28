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
import * as Mappers from "../models/contentTypeContentItemMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ContentTypeContentItem. */
export class ContentTypeContentItem {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ContentTypeContentItem.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns list of content items
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentTypeContentItemListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentTypeContentItemListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, contentTypeId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContentItemCollection>, callback?: msRest.ServiceCallback<Models.ContentItemCollection>): Promise<Models.ContentTypeContentItemListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.ContentTypeContentItemListByServiceResponse>;
  }

  /**
   * Returns content item metadata
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentTypeContentItemGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentTypeContentItemGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ContentTypeContentItemGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ContentTypeContentItemGetEntityTagResponse>;
  }

  /**
   * Returns content item details
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentTypeContentItemGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentTypeContentItemGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  get(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContentItemContract>, callback?: msRest.ServiceCallback<Models.ContentItemContract>): Promise<Models.ContentTypeContentItemGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ContentTypeContentItemGetResponse>;
  }

  /**
   * Creates new content item
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentTypeContentItemCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: Models.ContentTypeContentItemCreateOrUpdateOptionalParams): Promise<Models.ContentTypeContentItemCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options: Models.ContentTypeContentItemCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ContentItemContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, options?: Models.ContentTypeContentItemCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.ContentItemContract>, callback?: msRest.ServiceCallback<Models.ContentItemContract>): Promise<Models.ContentTypeContentItemCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ContentTypeContentItemCreateOrUpdateResponse>;
  }

  /**
   * Removes specified content item.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param contentTypeId Content type identifier.
   * @param contentItemId Content item identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, contentTypeId: string, contentItemId: string, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        contentTypeId,
        contentItemId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns list of content items
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentTypeContentItemListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentTypeContentItemListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContentItemCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContentItemCollection>, callback?: msRest.ServiceCallback<Models.ContentItemCollection>): Promise<Models.ContentTypeContentItemListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.ContentTypeContentItemListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
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
      bodyMapper: Mappers.ContentItemCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
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
      headersMapper: Mappers.ContentTypeContentItemGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ContentTypeContentItemGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
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
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentTypeContentItemGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ContentTypeContentItemGetHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentTypeContentItemCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ContentItemContract,
      headersMapper: Mappers.ContentTypeContentItemCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ContentTypeContentItemCreateOrUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}/contentItems/{contentItemId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.contentTypeId,
    Parameters.contentItemId,
    Parameters.subscriptionId
  ],
  queryParameters: [
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
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContentItemCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

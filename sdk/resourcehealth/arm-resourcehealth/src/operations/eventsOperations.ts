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
import * as Mappers from "../models/eventsOperationsMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealthContext } from "../microsoftResourceHealthContext";

/** Class representing a EventsOperations. */
export class EventsOperations {
  private readonly client: MicrosoftResourceHealthContext;

  /**
   * Create a EventsOperations.
   * @param {MicrosoftResourceHealthContext} client Reference to the service client.
   */
  constructor(client: MicrosoftResourceHealthContext) {
    this.client = client;
  }

  /**
   * Lists current service health events in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventsListBySubscriptionIdResponse>
   */
  listBySubscriptionId(options?: Models.EventsListBySubscriptionIdOptionalParams): Promise<Models.EventsListBySubscriptionIdResponse>;
  /**
   * @param callback The callback
   */
  listBySubscriptionId(callback: msRest.ServiceCallback<Models.Events>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionId(options: Models.EventsListBySubscriptionIdOptionalParams, callback: msRest.ServiceCallback<Models.Events>): void;
  listBySubscriptionId(options?: Models.EventsListBySubscriptionIdOptionalParams | msRest.ServiceCallback<Models.Events>, callback?: msRest.ServiceCallback<Models.Events>): Promise<Models.EventsListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionIdOperationSpec,
      callback) as Promise<Models.EventsListBySubscriptionIdResponse>;
  }

  /**
   * Lists current service health events for given resource.
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param [options] The optional parameters
   * @returns Promise<Models.EventsListBySingleResourceResponse>
   */
  listBySingleResource(resourceUri: string, options?: Models.EventsListBySingleResourceOptionalParams): Promise<Models.EventsListBySingleResourceResponse>;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param callback The callback
   */
  listBySingleResource(resourceUri: string, callback: msRest.ServiceCallback<Models.Events>): void;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API support not nested and one nesting level resource types :
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * and
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySingleResource(resourceUri: string, options: Models.EventsListBySingleResourceOptionalParams, callback: msRest.ServiceCallback<Models.Events>): void;
  listBySingleResource(resourceUri: string, options?: Models.EventsListBySingleResourceOptionalParams | msRest.ServiceCallback<Models.Events>, callback?: msRest.ServiceCallback<Models.Events>): Promise<Models.EventsListBySingleResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listBySingleResourceOperationSpec,
      callback) as Promise<Models.EventsListBySingleResourceResponse>;
  }

  /**
   * Lists current service health events in the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventsListBySubscriptionIdNextResponse>
   */
  listBySubscriptionIdNext(nextPageLink: string, options?: Models.EventsListBySubscriptionIdNextOptionalParams): Promise<Models.EventsListBySubscriptionIdNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionIdNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.Events>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionIdNext(nextPageLink: string, options: Models.EventsListBySubscriptionIdNextOptionalParams, callback: msRest.ServiceCallback<Models.Events>): void;
  listBySubscriptionIdNext(nextPageLink: string, options?: Models.EventsListBySubscriptionIdNextOptionalParams | msRest.ServiceCallback<Models.Events>, callback?: msRest.ServiceCallback<Models.Events>): Promise<Models.EventsListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionIdNextOperationSpec,
      callback) as Promise<Models.EventsListBySubscriptionIdNextResponse>;
  }

  /**
   * Lists current service health events for given resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventsListBySingleResourceNextResponse>
   */
  listBySingleResourceNext(nextPageLink: string, options?: Models.EventsListBySingleResourceNextOptionalParams): Promise<Models.EventsListBySingleResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySingleResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.Events>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySingleResourceNext(nextPageLink: string, options: Models.EventsListBySingleResourceNextOptionalParams, callback: msRest.ServiceCallback<Models.Events>): void;
  listBySingleResourceNext(nextPageLink: string, options?: Models.EventsListBySingleResourceNextOptionalParams | msRest.ServiceCallback<Models.Events>, callback?: msRest.ServiceCallback<Models.Events>): Promise<Models.EventsListBySingleResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySingleResourceNextOperationSpec,
      callback) as Promise<Models.EventsListBySingleResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.view
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};

const listBySingleResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.ResourceHealth/events",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.view
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};

const listBySubscriptionIdNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.view
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};

const listBySingleResourceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.view
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.WrappedErrorResponse
    }
  },
  serializer
};

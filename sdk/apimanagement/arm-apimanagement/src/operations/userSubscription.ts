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
import * as Mappers from "../models/userSubscriptionMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a UserSubscription. */
export class UserSubscription {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a UserSubscription.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the collection of subscriptions of the specified user.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserSubscriptionListResponse>
   */
  list(resourceGroupName: string, serviceName: string, userId: string, options?: Models.UserSubscriptionListOptionalParams): Promise<Models.UserSubscriptionListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, userId: string, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, userId: string, options: Models.UserSubscriptionListOptionalParams, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  list(resourceGroupName: string, serviceName: string, userId: string, options?: Models.UserSubscriptionListOptionalParams | msRest.ServiceCallback<Models.SubscriptionCollection>, callback?: msRest.ServiceCallback<Models.SubscriptionCollection>): Promise<Models.UserSubscriptionListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        userId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UserSubscriptionListResponse>;
  }

  /**
   * Lists the collection of subscriptions of the specified user.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UserSubscriptionListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.UserSubscriptionListNextOptionalParams): Promise<Models.UserSubscriptionListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.UserSubscriptionListNextOptionalParams, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  listNext(nextPageLink: string, options?: Models.UserSubscriptionListNextOptionalParams | msRest.ServiceCallback<Models.SubscriptionCollection>, callback?: msRest.ServiceCallback<Models.SubscriptionCollection>): Promise<Models.UserSubscriptionListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UserSubscriptionListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/users/{userId}/subscriptions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.userId,
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
      bodyMapper: Mappers.SubscriptionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.SubscriptionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

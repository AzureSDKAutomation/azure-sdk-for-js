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
import * as Mappers from "../models/productSubscriptionsMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ProductSubscriptions. */
export class ProductSubscriptions {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ProductSubscriptions.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the collection of subscriptions to the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductSubscriptionsListResponse>
   */
  list(resourceGroupName: string, serviceName: string, productId: string, options?: Models.ProductSubscriptionsListOptionalParams): Promise<Models.ProductSubscriptionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, productId: string, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, productId: string, options: Models.ProductSubscriptionsListOptionalParams, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  list(resourceGroupName: string, serviceName: string, productId: string, options?: Models.ProductSubscriptionsListOptionalParams | msRest.ServiceCallback<Models.SubscriptionCollection>, callback?: msRest.ServiceCallback<Models.SubscriptionCollection>): Promise<Models.ProductSubscriptionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        productId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProductSubscriptionsListResponse>;
  }

  /**
   * Lists the collection of subscriptions to the specified product.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductSubscriptionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ProductSubscriptionsListNextOptionalParams): Promise<Models.ProductSubscriptionsListNextResponse>;
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
  listNext(nextPageLink: string, options: Models.ProductSubscriptionsListNextOptionalParams, callback: msRest.ServiceCallback<Models.SubscriptionCollection>): void;
  listNext(nextPageLink: string, options?: Models.ProductSubscriptionsListNextOptionalParams | msRest.ServiceCallback<Models.SubscriptionCollection>, callback?: msRest.ServiceCallback<Models.SubscriptionCollection>): Promise<Models.ProductSubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ProductSubscriptionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/subscriptions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.productId,
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

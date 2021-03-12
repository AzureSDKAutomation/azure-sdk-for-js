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
import * as Mappers from "../models/regionsMappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";

/** Class representing a Regions. */
export class Regions {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Create a Regions.
   * @param {ServiceBusManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the available Regions for a given sku
   * @param sku The sku type.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegionsListBySkuResponse>
   */
  listBySku(sku: string, options?: msRest.RequestOptionsBase): Promise<Models.RegionsListBySkuResponse>;
  /**
   * @param sku The sku type.
   * @param callback The callback
   */
  listBySku(sku: string, callback: msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>): void;
  /**
   * @param sku The sku type.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySku(sku: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>): void;
  listBySku(sku: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>, callback?: msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>): Promise<Models.RegionsListBySkuResponse> {
    return this.client.sendOperationRequest(
      {
        sku,
        options
      },
      listBySkuOperationSpec,
      callback) as Promise<Models.RegionsListBySkuResponse>;
  }

  /**
   * Gets the available Regions for a given sku
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegionsListBySkuNextResponse>
   */
  listBySkuNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RegionsListBySkuNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySkuNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySkuNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>): void;
  listBySkuNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>, callback?: msRest.ServiceCallback<Models.PremiumMessagingRegionsListResult>): Promise<Models.RegionsListBySkuNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySkuNextOperationSpec,
      callback) as Promise<Models.RegionsListBySkuNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySkuOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/sku/{sku}/regions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.sku
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PremiumMessagingRegionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySkuNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PremiumMessagingRegionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

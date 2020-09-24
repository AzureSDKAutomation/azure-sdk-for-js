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
import * as Mappers from "../models/azureWebCategoriesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a AzureWebCategories. */
export class AzureWebCategories {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a AzureWebCategories.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the Azure Web Categorys in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureWebCategoriesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.AzureWebCategoriesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.AzureWebCategoryListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureWebCategoryListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureWebCategoryListResult>, callback?: msRest.ServiceCallback<Models.AzureWebCategoryListResult>): Promise<Models.AzureWebCategoriesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.AzureWebCategoriesListAllResponse>;
  }

  /**
   * Gets all the Azure Web Categorys in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AzureWebCategoriesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AzureWebCategoriesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureWebCategoryListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureWebCategoryListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureWebCategoryListResult>, callback?: msRest.ServiceCallback<Models.AzureWebCategoryListResult>): Promise<Models.AzureWebCategoriesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.AzureWebCategoriesListAllNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/AzureWebCategories",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureWebCategoryListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AzureWebCategoryListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

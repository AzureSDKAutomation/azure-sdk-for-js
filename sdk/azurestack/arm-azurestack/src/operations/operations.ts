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
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { AzureStackManagementClientContext } from "../azureStackManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: AzureStackManagementClientContext;

  /**
   * Create a Operations.
   * @param {AzureStackManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureStackManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the list of supported REST operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsXXXResponse>
   */
  xXX(options?: msRest.RequestOptionsBase): Promise<Models.OperationsXXXResponse>;
  /**
   * @param callback The callback
   */
  xXX(callback: msRest.ServiceCallback<Models.OperationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  xXX(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationList>): void;
  xXX(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationList>, callback?: msRest.ServiceCallback<Models.OperationList>): Promise<Models.OperationsXXXResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      xXXOperationSpec,
      callback) as Promise<Models.OperationsXXXResponse>;
  }

  /**
   * Returns the list of supported REST operations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsXXXNextResponse>
   */
  xXXNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationsXXXNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  xXXNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  xXXNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationList>): void;
  xXXNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationList>, callback?: msRest.ServiceCallback<Models.OperationList>): Promise<Models.OperationsXXXNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      xXXNextOperationSpec,
      callback) as Promise<Models.OperationsXXXNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const xXXOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.AzureStack/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const xXXNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

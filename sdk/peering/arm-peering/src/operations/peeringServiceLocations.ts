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
import * as Mappers from "../models/peeringServiceLocationsMappers";
import * as Parameters from "../models/parameters";
import { PeeringManagementClientContext } from "../peeringManagementClientContext";

/** Class representing a PeeringServiceLocations. */
export class PeeringServiceLocations {
  private readonly client: PeeringManagementClientContext;

  /**
   * Create a PeeringServiceLocations.
   * @param {PeeringManagementClientContext} client Reference to the service client.
   */
  constructor(client: PeeringManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the available locations for peering service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServiceLocationsListResponse>
   */
  list(options?: Models.PeeringServiceLocationsListOptionalParams): Promise<Models.PeeringServiceLocationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PeeringServiceLocationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.PeeringServiceLocationsListOptionalParams, callback: msRest.ServiceCallback<Models.PeeringServiceLocationListResult>): void;
  list(options?: Models.PeeringServiceLocationsListOptionalParams | msRest.ServiceCallback<Models.PeeringServiceLocationListResult>, callback?: msRest.ServiceCallback<Models.PeeringServiceLocationListResult>): Promise<Models.PeeringServiceLocationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PeeringServiceLocationsListResponse>;
  }

  /**
   * Lists all of the available locations for peering service.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServiceLocationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.PeeringServiceLocationsListNextOptionalParams): Promise<Models.PeeringServiceLocationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PeeringServiceLocationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.PeeringServiceLocationsListNextOptionalParams, callback: msRest.ServiceCallback<Models.PeeringServiceLocationListResult>): void;
  listNext(nextPageLink: string, options?: Models.PeeringServiceLocationsListNextOptionalParams | msRest.ServiceCallback<Models.PeeringServiceLocationListResult>, callback?: msRest.ServiceCallback<Models.PeeringServiceLocationListResult>): Promise<Models.PeeringServiceLocationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PeeringServiceLocationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceLocations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.country,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServiceLocationListResult
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
    Parameters.country,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServiceLocationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

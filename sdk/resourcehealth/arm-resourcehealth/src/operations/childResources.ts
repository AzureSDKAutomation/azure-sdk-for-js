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
import * as Mappers from "../models/childResourcesMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealthContext } from "../microsoftResourceHealthContext";

/** Class representing a ChildResources. */
export class ChildResources {
  private readonly client: MicrosoftResourceHealthContext;

  /**
   * Create a ChildResources.
   * @param {MicrosoftResourceHealthContext} client Reference to the service client.
   */
  constructor(client: MicrosoftResourceHealthContext) {
    this.client = client;
  }

  /**
   * Lists the all the children and its current health status for a parent resource. Use the nextLink
   * property in the response to get the next page of children current health
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API only support not nested parent resource type:
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param [options] The optional parameters
   * @returns Promise<Models.ChildResourcesListResponse>
   */
  list(resourceUri: string, options?: Models.ChildResourcesListOptionalParams): Promise<Models.ChildResourcesListResponse>;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API only support not nested parent resource type:
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param callback The callback
   */
  list(resourceUri: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param resourceUri The fully qualified ID of the resource, including the resource name and
   * resource type. Currently the API only support not nested parent resource type:
   * /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceUri: string, options: Models.ChildResourcesListOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  list(resourceUri: string, options?: Models.ChildResourcesListOptionalParams | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.ChildResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ChildResourcesListResponse>;
  }

  /**
   * Lists the all the children and its current health status for a parent resource. Use the nextLink
   * property in the response to get the next page of children current health
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ChildResourcesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ChildResourcesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilityStatusListResult>, callback?: msRest.ServiceCallback<Models.AvailabilityStatusListResult>): Promise<Models.ChildResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ChildResourcesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.ResourceHealth/childResources",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

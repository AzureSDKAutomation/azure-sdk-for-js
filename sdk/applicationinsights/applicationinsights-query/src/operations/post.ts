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
import * as Mappers from "../models/postMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsDataClientContext } from "../applicationInsightsDataClientContext";

/** Class representing a Post. */
export class Post {
  private readonly client: ApplicationInsightsDataClientContext;

  /**
   * Create a Post.
   * @param {ApplicationInsightsDataClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsDataClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the metadata information for the app, including its schema, etc.
   * @summary Gets metadata information
   * @param appId ID of the application. This is Application ID from the API Access settings blade in
   * the Azure portal.
   * @param [options] The optional parameters
   * @returns Promise<Models.PostMetadataResponse>
   */
  metadata(appId: string, options?: msRest.RequestOptionsBase): Promise<Models.PostMetadataResponse>;
  /**
   * @param appId ID of the application. This is Application ID from the API Access settings blade in
   * the Azure portal.
   * @param callback The callback
   */
  metadata(appId: string, callback: msRest.ServiceCallback<Models.MetadataResults>): void;
  /**
   * @param appId ID of the application. This is Application ID from the API Access settings blade in
   * the Azure portal.
   * @param options The optional parameters
   * @param callback The callback
   */
  metadata(appId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetadataResults>): void;
  metadata(appId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetadataResults>, callback?: msRest.ServiceCallback<Models.MetadataResults>): Promise<Models.PostMetadataResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        options
      },
      metadataOperationSpec,
      callback) as Promise<Models.PostMetadataResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const metadataOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/apps/{appId}/metadata",
  urlParameters: [
    Parameters.appId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetadataResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

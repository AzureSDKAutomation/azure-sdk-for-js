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
import * as Mappers from "../models/logMappers";
import * as Parameters from "../models/parameters";
import { PersonalizerClientContext } from "../personalizerClientContext";

/** Class representing a Log. */
export class Log {
  private readonly client: PersonalizerClientContext;

  /**
   * Create a Log.
   * @param {PersonalizerClientContext} client Reference to the service client.
   */
  constructor(client: PersonalizerClientContext) {
    this.client = client;
  }

  /**
   * Delete all generated logs.
   * @summary Deletes Logs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get properties of generated logs.
   * @summary Get Log Properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.LogGetPropertiesResponse>
   */
  getProperties(options?: msRest.RequestOptionsBase): Promise<Models.LogGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: msRest.ServiceCallback<Models.LogsProperties>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LogsProperties>): void;
  getProperties(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LogsProperties>, callback?: msRest.ServiceCallback<Models.LogsProperties>): Promise<Models.LogGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.LogGetPropertiesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "logs",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    204: {},
    default: {}
  },
  serializer
};

const getPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "logs/properties",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LogsProperties
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

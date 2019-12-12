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
import * as Mappers from "../models/softwarePlanMappers";
import * as Parameters from "../models/parameters";
import { SoftwareplanClientContext } from "../softwareplanClientContext";

/** Class representing a SoftwarePlan. */
export class SoftwarePlan {
  private readonly client: SoftwareplanClientContext;

  /**
   * Create a SoftwarePlan.
   * @param {SoftwareplanClientContext} client Reference to the service client.
   */
  constructor(client: SoftwareplanClientContext) {
    this.client = client;
  }

  /**
   * Register to Microsoft.SoftwarePlan resource provider.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  register(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  register(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  register(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  register(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      registerOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const registerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.SoftwarePlan/register",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

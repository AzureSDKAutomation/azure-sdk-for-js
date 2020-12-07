/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/globalAdministratorMappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClientContext } from "../authorizationManagementClientContext";

/** Class representing a GlobalAdministrator. */
export class GlobalAdministrator {
  private readonly client: AuthorizationManagementClientContext;

  /**
   * Create a GlobalAdministrator.
   * @param {AuthorizationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AuthorizationManagementClientContext) {
    this.client = client;
  }

  /**
   * Elevates access for a Global Administrator.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  elevateAccess(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  elevateAccess(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  elevateAccess(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  elevateAccess(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      elevateAccessOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const elevateAccessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Authorization/elevateAccess",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

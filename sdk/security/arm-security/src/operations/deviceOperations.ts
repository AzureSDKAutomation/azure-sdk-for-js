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
import * as Mappers from "../models/deviceOperationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a DeviceOperations. */
export class DeviceOperations {
  private readonly client: SecurityCenterContext;

  /**
   * Create a DeviceOperations.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get device.
   * @param resourceId The identifier of the resource.
   * @param deviceId Identifier of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.DeviceGetResponse>
   */
  get(resourceId: string, deviceId: string, options?: msRest.RequestOptionsBase): Promise<Models.DeviceGetResponse>;
  /**
   * @param resourceId The identifier of the resource.
   * @param deviceId Identifier of the device.
   * @param callback The callback
   */
  get(resourceId: string, deviceId: string, callback: msRest.ServiceCallback<Models.Device>): void;
  /**
   * @param resourceId The identifier of the resource.
   * @param deviceId Identifier of the device.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceId: string, deviceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Device>): void;
  get(resourceId: string, deviceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Device>, callback?: msRest.ServiceCallback<Models.Device>): Promise<Models.DeviceGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceId,
        deviceId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DeviceGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceId}/providers/Microsoft.Security/devices/{deviceId}",
  urlParameters: [
    Parameters.resourceId,
    Parameters.deviceId1
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

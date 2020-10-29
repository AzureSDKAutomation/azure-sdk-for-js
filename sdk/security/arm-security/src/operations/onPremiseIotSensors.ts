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
import * as Mappers from "../models/onPremiseIotSensorsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a OnPremiseIotSensors. */
export class OnPremiseIotSensors {
  private readonly client: SecurityCenterContext;

  /**
   * Create a OnPremiseIotSensors.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List on-premise IoT sensors
   * @param [options] The optional parameters
   * @returns Promise<Models.OnPremiseIotSensorsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OnPremiseIotSensorsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OnPremiseIotSensorsList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OnPremiseIotSensorsList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OnPremiseIotSensorsList>, callback?: msRest.ServiceCallback<Models.OnPremiseIotSensorsList>): Promise<Models.OnPremiseIotSensorsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OnPremiseIotSensorsListResponse>;
  }

  /**
   * Get on-premise IoT sensor
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param [options] The optional parameters
   * @returns Promise<Models.OnPremiseIotSensorsGetResponse>
   */
  get(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase): Promise<Models.OnPremiseIotSensorsGetResponse>;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param callback The callback
   */
  get(onPremiseIotSensorName: string, callback: msRest.ServiceCallback<Models.OnPremiseIotSensor>): void;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param options The optional parameters
   * @param callback The callback
   */
  get(onPremiseIotSensorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OnPremiseIotSensor>): void;
  get(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OnPremiseIotSensor>, callback?: msRest.ServiceCallback<Models.OnPremiseIotSensor>): Promise<Models.OnPremiseIotSensorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        onPremiseIotSensorName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OnPremiseIotSensorsGetResponse>;
  }

  /**
   * Create or update on-premise IoT sensor
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param [options] The optional parameters
   * @returns Promise<Models.OnPremiseIotSensorsCreateOrUpdateResponse>
   */
  createOrUpdate(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase): Promise<Models.OnPremiseIotSensorsCreateOrUpdateResponse>;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param callback The callback
   */
  createOrUpdate(onPremiseIotSensorName: string, callback: msRest.ServiceCallback<Models.OnPremiseIotSensor>): void;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(onPremiseIotSensorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OnPremiseIotSensor>): void;
  createOrUpdate(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OnPremiseIotSensor>, callback?: msRest.ServiceCallback<Models.OnPremiseIotSensor>): Promise<Models.OnPremiseIotSensorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        onPremiseIotSensorName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.OnPremiseIotSensorsCreateOrUpdateResponse>;
  }

  /**
   * Delete on-premise IoT sensor
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param callback The callback
   */
  deleteMethod(onPremiseIotSensorName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(onPremiseIotSensorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        onPremiseIotSensorName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Download sensor activation file
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param [options] The optional parameters
   * @returns Promise<Models.OnPremiseIotSensorsDownloadActivationResponse>
   */
  downloadActivation(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase): Promise<Models.OnPremiseIotSensorsDownloadActivationResponse>;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param callback The callback
   */
  downloadActivation(onPremiseIotSensorName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param onPremiseIotSensorName Name of the on-premise IoT sensor
   * @param options The optional parameters
   * @param callback The callback
   */
  downloadActivation(onPremiseIotSensorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  downloadActivation(onPremiseIotSensorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.OnPremiseIotSensorsDownloadActivationResponse> {
    return this.client.sendOperationRequest(
      {
        onPremiseIotSensorName,
        options
      },
      downloadActivationOperationSpec,
      callback) as Promise<Models.OnPremiseIotSensorsDownloadActivationResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/onPremiseIotSensors",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnPremiseIotSensorsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/onPremiseIotSensors/{onPremiseIotSensorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.onPremiseIotSensorName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnPremiseIotSensor
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/onPremiseIotSensors/{onPremiseIotSensorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.onPremiseIotSensorName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OnPremiseIotSensor
    },
    201: {
      bodyMapper: Mappers.OnPremiseIotSensor
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/onPremiseIotSensors/{onPremiseIotSensorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.onPremiseIotSensorName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const downloadActivationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/onPremiseIotSensors/{onPremiseIotSensorName}/downloadActivation",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.onPremiseIotSensorName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

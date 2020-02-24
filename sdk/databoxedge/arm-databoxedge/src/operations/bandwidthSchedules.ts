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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/bandwidthSchedulesMappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClientContext } from "../dataBoxEdgeManagementClientContext";

/** Class representing a BandwidthSchedules. */
export class BandwidthSchedules {
  private readonly client: DataBoxEdgeManagementClientContext;

  /**
   * Create a BandwidthSchedules.
   * @param {DataBoxEdgeManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxEdgeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the bandwidth schedules for a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceResponse>
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.BandwidthSchedulesList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BandwidthSchedulesList>): void;
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BandwidthSchedulesList>, callback?: msRest.ServiceCallback<Models.BandwidthSchedulesList>): Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      listByDataBoxEdgeDeviceOperationSpec,
      callback) as Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceResponse>;
  }

  /**
   * Gets the properties of the specified bandwidth schedule.
   * @param deviceName The device name.
   * @param name The bandwidth schedule name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.BandwidthSchedulesGetResponse>
   */
  get(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BandwidthSchedulesGetResponse>;
  /**
   * @param deviceName The device name.
   * @param name The bandwidth schedule name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  get(deviceName: string, name: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.BandwidthSchedule>): void;
  /**
   * @param deviceName The device name.
   * @param name The bandwidth schedule name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, name: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BandwidthSchedule>): void;
  get(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BandwidthSchedule>, callback?: msRest.ServiceCallback<Models.BandwidthSchedule>): Promise<Models.BandwidthSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        name,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BandwidthSchedulesGetResponse>;
  }

  /**
   * Creates or updates a bandwidth schedule.
   * @param deviceName The device name.
   * @param name The bandwidth schedule name which needs to be added/updated.
   * @param parameters The bandwidth schedule to be added or updated.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.BandwidthSchedulesCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, name: string, parameters: Models.BandwidthSchedule, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BandwidthSchedulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,name,parameters,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BandwidthSchedulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified bandwidth schedule.
   * @param deviceName The device name.
   * @param name The bandwidth schedule name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,name,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a bandwidth schedule.
   * @param deviceName The device name.
   * @param name The bandwidth schedule name which needs to be added/updated.
   * @param parameters The bandwidth schedule to be added or updated.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, name: string, parameters: Models.BandwidthSchedule, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        name,
        parameters,
        resourceGroupName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified bandwidth schedule.
   * @param deviceName The device name.
   * @param name The bandwidth schedule name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        name,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets all the bandwidth schedules for a Data Box Edge/Data Box Gateway device.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceNextResponse>
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BandwidthSchedulesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BandwidthSchedulesList>): void;
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BandwidthSchedulesList>, callback?: msRest.ServiceCallback<Models.BandwidthSchedulesList>): Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDataBoxEdgeDeviceNextOperationSpec,
      callback) as Promise<Models.BandwidthSchedulesListByDataBoxEdgeDeviceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDataBoxEdgeDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BandwidthSchedulesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BandwidthSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BandwidthSchedule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BandwidthSchedule
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDataBoxEdgeDeviceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.BandwidthSchedulesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

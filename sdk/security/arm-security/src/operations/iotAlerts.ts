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
import * as Mappers from "../models/iotAlertsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotAlerts. */
export class IotAlerts {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotAlerts.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List IoT alerts
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsListResponse>
   */
  list(resourceGroupName: string, solutionName: string, options?: Models.IotAlertsListOptionalParams): Promise<Models.IotAlertsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, options: Models.IotAlertsListOptionalParams, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  list(resourceGroupName: string, solutionName: string, options?: Models.IotAlertsListOptionalParams | msRest.ServiceCallback<Models.IotAlertList>, callback?: msRest.ServiceCallback<Models.IotAlertList>): Promise<Models.IotAlertsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IotAlertsListResponse>;
  }

  /**
   * Get IoT alert
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertId Id of the alert
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, options?: msRest.RequestOptionsBase): Promise<Models.IotAlertsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertId Id of the alert
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, callback: msRest.ServiceCallback<Models.IotAlert>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotAlertId Id of the alert
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotAlert>): void;
  get(resourceGroupName: string, solutionName: string, iotAlertId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotAlert>, callback?: msRest.ServiceCallback<Models.IotAlert>): Promise<Models.IotAlertsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        iotAlertId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotAlertsGetResponse>;
  }

  /**
   * List IoT alerts
   * @param scope Scope of the query: Subscription (i.e. /subscriptions/{subscriptionId}) or IoT Hub
   * (i.e.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Devices/iotHubs/{iotHubName})
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsList1Response>
   */
  list1(scope: string, options?: Models.IotAlertsList1OptionalParams): Promise<Models.IotAlertsList1Response>;
  /**
   * @param scope Scope of the query: Subscription (i.e. /subscriptions/{subscriptionId}) or IoT Hub
   * (i.e.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Devices/iotHubs/{iotHubName})
   * @param callback The callback
   */
  list1(scope: string, callback: msRest.ServiceCallback<Models.IotAlertListModel>): void;
  /**
   * @param scope Scope of the query: Subscription (i.e. /subscriptions/{subscriptionId}) or IoT Hub
   * (i.e.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Devices/iotHubs/{iotHubName})
   * @param options The optional parameters
   * @param callback The callback
   */
  list1(scope: string, options: Models.IotAlertsList1OptionalParams, callback: msRest.ServiceCallback<Models.IotAlertListModel>): void;
  list1(scope: string, options?: Models.IotAlertsList1OptionalParams | msRest.ServiceCallback<Models.IotAlertListModel>, callback?: msRest.ServiceCallback<Models.IotAlertListModel>): Promise<Models.IotAlertsList1Response> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      list1OperationSpec,
      callback) as Promise<Models.IotAlertsList1Response>;
  }

  /**
   * Get IoT alert
   * @param scope Scope of the query: Subscription (i.e. /subscriptions/{subscriptionId}) or IoT Hub
   * (i.e.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Devices/iotHubs/{iotHubName})
   * @param iotAlertId Id of the alert
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsGet1Response>
   */
  get1(scope: string, iotAlertId: string, options?: msRest.RequestOptionsBase): Promise<Models.IotAlertsGet1Response>;
  /**
   * @param scope Scope of the query: Subscription (i.e. /subscriptions/{subscriptionId}) or IoT Hub
   * (i.e.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Devices/iotHubs/{iotHubName})
   * @param iotAlertId Id of the alert
   * @param callback The callback
   */
  get1(scope: string, iotAlertId: string, callback: msRest.ServiceCallback<Models.IotAlertModel>): void;
  /**
   * @param scope Scope of the query: Subscription (i.e. /subscriptions/{subscriptionId}) or IoT Hub
   * (i.e.
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Devices/iotHubs/{iotHubName})
   * @param iotAlertId Id of the alert
   * @param options The optional parameters
   * @param callback The callback
   */
  get1(scope: string, iotAlertId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotAlertModel>): void;
  get1(scope: string, iotAlertId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotAlertModel>, callback?: msRest.ServiceCallback<Models.IotAlertModel>): Promise<Models.IotAlertsGet1Response> {
    return this.client.sendOperationRequest(
      {
        scope,
        iotAlertId,
        options
      },
      get1OperationSpec,
      callback) as Promise<Models.IotAlertsGet1Response>;
  }

  /**
   * List IoT alerts
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.IotAlertsListNextOptionalParams): Promise<Models.IotAlertsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.IotAlertsListNextOptionalParams, callback: msRest.ServiceCallback<Models.IotAlertList>): void;
  listNext(nextPageLink: string, options?: Models.IotAlertsListNextOptionalParams | msRest.ServiceCallback<Models.IotAlertList>, callback?: msRest.ServiceCallback<Models.IotAlertList>): Promise<Models.IotAlertsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.IotAlertsListNextResponse>;
  }

  /**
   * List IoT alerts
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotAlertsList1NextResponse>
   */
  list1Next(nextPageLink: string, options?: Models.IotAlertsList1NextOptionalParams): Promise<Models.IotAlertsList1NextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  list1Next(nextPageLink: string, callback: msRest.ServiceCallback<Models.IotAlertListModel>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  list1Next(nextPageLink: string, options: Models.IotAlertsList1NextOptionalParams, callback: msRest.ServiceCallback<Models.IotAlertListModel>): void;
  list1Next(nextPageLink: string, options?: Models.IotAlertsList1NextOptionalParams | msRest.ServiceCallback<Models.IotAlertListModel>, callback?: msRest.ServiceCallback<Models.IotAlertListModel>): Promise<Models.IotAlertsList1NextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      list1NextOperationSpec,
      callback) as Promise<Models.IotAlertsList1NextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotAlerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.minStartTimeUtc,
    Parameters.maxStartTimeUtc,
    Parameters.alertType0,
    Parameters.compromisedEntity,
    Parameters.limit,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotAlerts/{iotAlertId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.iotAlertId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const list1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/iotAlerts",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.apiVersion4,
    Parameters.minStartTimeUtc,
    Parameters.maxStartTimeUtc,
    Parameters.alertType0,
    Parameters.deviceManagementType,
    Parameters.compromisedEntity,
    Parameters.limit,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertListModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const get1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/iotAlerts/{iotAlertId}",
  urlParameters: [
    Parameters.scope,
    Parameters.iotAlertId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertModel
    },
    default: {
      bodyMapper: Mappers.CloudError
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
    Parameters.apiVersion3,
    Parameters.minStartTimeUtc,
    Parameters.maxStartTimeUtc,
    Parameters.alertType0,
    Parameters.compromisedEntity,
    Parameters.limit,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const list1NextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion4,
    Parameters.minStartTimeUtc,
    Parameters.maxStartTimeUtc,
    Parameters.alertType0,
    Parameters.deviceManagementType,
    Parameters.compromisedEntity,
    Parameters.limit,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotAlertListModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/alertsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Alerts. */
export class Alerts {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Alerts.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List all the alerts that are associated with the subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AlertsListResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AlertsListByResourceGroupResponse>;
  }

  /**
   * List all the alerts that are associated with the subscription that are stored in a specific
   * location
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListSubscriptionLevelAlertsByRegionResponse>
   */
  listSubscriptionLevelAlertsByRegion(options?: msRest.RequestOptionsBase): Promise<Models.AlertsListSubscriptionLevelAlertsByRegionResponse>;
  /**
   * @param callback The callback
   */
  listSubscriptionLevelAlertsByRegion(callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listSubscriptionLevelAlertsByRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listSubscriptionLevelAlertsByRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListSubscriptionLevelAlertsByRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listSubscriptionLevelAlertsByRegionOperationSpec,
      callback) as Promise<Models.AlertsListSubscriptionLevelAlertsByRegionResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResourceGroupLevelAlertsByRegionResponse>
   */
  listResourceGroupLevelAlertsByRegion(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResourceGroupLevelAlertsByRegionResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listResourceGroupLevelAlertsByRegion(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceGroupLevelAlertsByRegion(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listResourceGroupLevelAlertsByRegion(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListResourceGroupLevelAlertsByRegionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listResourceGroupLevelAlertsByRegionOperationSpec,
      callback) as Promise<Models.AlertsListResourceGroupLevelAlertsByRegionResponse>;
  }

  /**
   * Get an alert that is associated with a subscription
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsGetSubscriptionLevelAlertResponse>
   */
  getSubscriptionLevelAlert(alertName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsGetSubscriptionLevelAlertResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  getSubscriptionLevelAlert(alertName: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  getSubscriptionLevelAlert(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  getSubscriptionLevelAlert(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsGetSubscriptionLevelAlertResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      getSubscriptionLevelAlertOperationSpec,
      callback) as Promise<Models.AlertsGetSubscriptionLevelAlertResponse>;
  }

  /**
   * Get an alert that is associated a resource group or a resource in a resource group
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsGetResourceGroupLevelAlertsResponse>
   */
  getResourceGroupLevelAlerts(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsGetResourceGroupLevelAlertsResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  getResourceGroupLevelAlerts(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  getResourceGroupLevelAlerts(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  getResourceGroupLevelAlerts(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsGetResourceGroupLevelAlertsResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      getResourceGroupLevelAlertsOperationSpec,
      callback) as Promise<Models.AlertsGetResourceGroupLevelAlertsResponse>;
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateSubscriptionLevelAlertStateToDismiss(alertName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  updateSubscriptionLevelAlertStateToDismiss(alertName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionLevelAlertStateToDismiss(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateSubscriptionLevelAlertStateToDismiss(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      updateSubscriptionLevelAlertStateToDismissOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateSubscriptionLevelStateToResolve(alertName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  updateSubscriptionLevelStateToResolve(alertName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionLevelStateToResolve(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateSubscriptionLevelStateToResolve(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      updateSubscriptionLevelStateToResolveOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateSubscriptionLevelAlertStateToReactivate(alertName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  updateSubscriptionLevelAlertStateToReactivate(alertName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionLevelAlertStateToReactivate(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateSubscriptionLevelAlertStateToReactivate(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      updateSubscriptionLevelAlertStateToReactivateOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      updateResourceGroupLevelStateToResolveOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateResourceGroupLevelAlertStateToDismiss(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  updateResourceGroupLevelAlertStateToDismiss(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateResourceGroupLevelAlertStateToDismiss(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateResourceGroupLevelAlertStateToDismiss(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      updateResourceGroupLevelAlertStateToDismissOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateResourceGroupLevelAlertStateToReactivate(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  updateResourceGroupLevelAlertStateToReactivate(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateResourceGroupLevelAlertStateToReactivate(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateResourceGroupLevelAlertStateToReactivate(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      updateResourceGroupLevelAlertStateToReactivateOperationSpec,
      callback);
  }

  /**
   * List all the alerts that are associated with the subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AlertsListNextResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AlertsListByResourceGroupNextResponse>;
  }

  /**
   * List all the alerts that are associated with the subscription that are stored in a specific
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListSubscriptionLevelAlertsByRegionNextResponse>
   */
  listSubscriptionLevelAlertsByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListSubscriptionLevelAlertsByRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listSubscriptionLevelAlertsByRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSubscriptionLevelAlertsByRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listSubscriptionLevelAlertsByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListSubscriptionLevelAlertsByRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listSubscriptionLevelAlertsByRegionNextOperationSpec,
      callback) as Promise<Models.AlertsListSubscriptionLevelAlertsByRegionNextResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResourceGroupLevelAlertsByRegionNextResponse>
   */
  listResourceGroupLevelAlertsByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResourceGroupLevelAlertsByRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listResourceGroupLevelAlertsByRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceGroupLevelAlertsByRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listResourceGroupLevelAlertsByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListResourceGroupLevelAlertsByRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listResourceGroupLevelAlertsByRegionNextOperationSpec,
      callback) as Promise<Models.AlertsListResourceGroupLevelAlertsByRegionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/alerts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSubscriptionLevelAlertsByRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listResourceGroupLevelAlertsByRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSubscriptionLevelAlertOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getResourceGroupLevelAlertsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionLevelAlertStateToDismissOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionLevelStateToResolveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/resolve",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionLevelAlertStateToReactivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/activate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateResourceGroupLevelStateToResolveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/resolve",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateResourceGroupLevelAlertStateToDismissOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateResourceGroupLevelAlertStateToReactivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/activate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
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
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSubscriptionLevelAlertsByRegionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listResourceGroupLevelAlertsByRegionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

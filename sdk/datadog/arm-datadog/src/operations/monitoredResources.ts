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
import * as Mappers from "../models/monitoredResourcesMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftDatadogClientContext } from "../microsoftDatadogClientContext";

/** Class representing a MonitoredResources. */
export class MonitoredResources {
  private readonly client: MicrosoftDatadogClientContext;

  /**
   * Create a MonitoredResources.
   * @param {MicrosoftDatadogClientContext} client Reference to the service client.
   */
  constructor(client: MicrosoftDatadogClientContext) {
    this.client = client;
  }

  /**
   * @summary List the resources currently being monitored by the Datadog monitor resource.
   * @param resourceGroupName The name of the resource group to which the Datadog resource belongs.
   * @param monitorName Monitor resource name
   * @param [options] The optional parameters
   * @returns Promise<Models.MonitoredResourcesListResponse>
   */
  list(resourceGroupName: string, monitorName: string, options?: msRest.RequestOptionsBase): Promise<Models.MonitoredResourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the Datadog resource belongs.
   * @param monitorName Monitor resource name
   * @param callback The callback
   */
  list(resourceGroupName: string, monitorName: string, callback: msRest.ServiceCallback<Models.MonitoredResourceListResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the Datadog resource belongs.
   * @param monitorName Monitor resource name
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, monitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MonitoredResourceListResponse>): void;
  list(resourceGroupName: string, monitorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MonitoredResourceListResponse>, callback?: msRest.ServiceCallback<Models.MonitoredResourceListResponse>): Promise<Models.MonitoredResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        monitorName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MonitoredResourcesListResponse>;
  }

  /**
   * @summary List the resources currently being monitored by the Datadog monitor resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MonitoredResourcesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MonitoredResourcesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MonitoredResourceListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MonitoredResourceListResponse>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MonitoredResourceListResponse>, callback?: msRest.ServiceCallback<Models.MonitoredResourceListResponse>): Promise<Models.MonitoredResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.MonitoredResourcesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listMonitoredResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MonitoredResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MonitoredResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

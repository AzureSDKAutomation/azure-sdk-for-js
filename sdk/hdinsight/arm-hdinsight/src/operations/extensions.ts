/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/extensionsMappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClientContext } from "../hDInsightManagementClientContext";

/** Class representing a Extensions. */
export class Extensions {
  private readonly client: HDInsightManagementClientContext;

  /**
   * Create a Extensions.
   * @param {HDInsightManagementClientContext} client Reference to the service client.
   */
  constructor(client: HDInsightManagementClientContext) {
    this.client = client;
  }

  /**
   * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The Operations Management Suite (OMS) workspace parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enableMonitoring(resourceGroupName: string, clusterName: string, parameters: Models.ClusterMonitoringRequest, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginEnableMonitoring(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsGetMonitoringStatusResponse>
   */
  getMonitoringStatus(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsGetMonitoringStatusResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  getMonitoringStatus(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.ClusterMonitoringResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  getMonitoringStatus(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterMonitoringResponse>): void;
  getMonitoringStatus(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterMonitoringResponse>, callback?: msRest.ServiceCallback<Models.ClusterMonitoringResponse>): Promise<Models.ExtensionsGetMonitoringStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getMonitoringStatusOperationSpec,
      callback) as Promise<Models.ExtensionsGetMonitoringStatusResponse>;
  }

  /**
   * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableMonitoring(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDisableMonitoring(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates an HDInsight cluster extension.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param parameters The cluster extensions create request.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  create(resourceGroupName: string, clusterName: string, extensionName: string, parameters: Models.Extension, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginCreate(resourceGroupName,clusterName,extensionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the extension properties for the specified HDInsight cluster extension.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, extensionName: string, callback: msRest.ServiceCallback<Models.ClusterMonitoringResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, extensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterMonitoringResponse>): void;
  get(resourceGroupName: string, clusterName: string, extensionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterMonitoringResponse>, callback?: msRest.ServiceCallback<Models.ClusterMonitoringResponse>): Promise<Models.ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        extensionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExtensionsGetResponse>;
  }

  /**
   * Deletes the specified extension for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,extensionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The Operations Management Suite (OMS) workspace parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginEnableMonitoring(resourceGroupName: string, clusterName: string, parameters: Models.ClusterMonitoringRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginEnableMonitoringOperationSpec,
      options);
  }

  /**
   * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDisableMonitoring(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDisableMonitoringOperationSpec,
      options);
  }

  /**
   * Creates an HDInsight cluster extension.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param parameters The cluster extensions create request.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, clusterName: string, extensionName: string, parameters: Models.Extension, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        extensionName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified extension for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        extensionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getMonitoringStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterMonitoringResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterMonitoringResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginEnableMonitoringOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
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
      ...Mappers.ClusterMonitoringRequest,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDisableMonitoringOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.extensionName
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
      ...Mappers.Extension,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.extensionName
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

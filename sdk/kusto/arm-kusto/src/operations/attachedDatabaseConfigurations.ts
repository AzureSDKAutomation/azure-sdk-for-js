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
import * as Mappers from "../models/attachedDatabaseConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClientContext } from "../kustoManagementClientContext";

/** Class representing a AttachedDatabaseConfigurations. */
export class AttachedDatabaseConfigurations {
  private readonly client: KustoManagementClientContext;

  /**
   * Create a AttachedDatabaseConfigurations.
   * @param {KustoManagementClientContext} client Reference to the service client.
   */
  constructor(client: KustoManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the list of attached database configurations of the given Kusto cluster.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttachedDatabaseConfigurationsListByClusterResponse>
   */
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.AttachedDatabaseConfigurationsListByClusterResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>): void;
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>, callback?: msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>): Promise<Models.AttachedDatabaseConfigurationsListByClusterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listByClusterOperationSpec,
      callback) as Promise<Models.AttachedDatabaseConfigurationsListByClusterResponse>;
  }

  /**
   * Returns an attached database configuration.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttachedDatabaseConfigurationsGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.AttachedDatabaseConfigurationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>): void;
  get(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>, callback?: msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>): Promise<Models.AttachedDatabaseConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        attachedDatabaseConfigurationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AttachedDatabaseConfigurationsGetResponse>;
  }

  /**
   * Creates or updates an attached database configuration.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AttachedDatabaseConfigurationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, parameters: Models.AttachedDatabaseConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.AttachedDatabaseConfigurationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,clusterName,attachedDatabaseConfigurationName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AttachedDatabaseConfigurationsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the attached database configuration with the given name.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,attachedDatabaseConfigurationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates an attached database configuration.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, parameters: Models.AttachedDatabaseConfiguration, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        attachedDatabaseConfigurationName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the attached database configuration with the given name.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, attachedDatabaseConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        attachedDatabaseConfigurationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByClusterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AttachedDatabaseConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.attachedDatabaseConfigurationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.attachedDatabaseConfigurationName,
    Parameters.subscriptionId
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
      ...Mappers.AttachedDatabaseConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    201: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    202: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.attachedDatabaseConfigurationName,
    Parameters.subscriptionId
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

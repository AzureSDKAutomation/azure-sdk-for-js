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
import * as Mappers from "../models/elasticPoolsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ElasticPools. */
export class ElasticPools {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ElasticPools.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsListMetricsResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, callback: msRest.ServiceCallback<Models.MetricListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricListResult>): void;
  listMetrics(resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricListResult>, callback?: msRest.ServiceCallback<Models.MetricListResult>): Promise<Models.ElasticPoolsListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.ElasticPoolsListMetricsResponse>;
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsListMetricDefinitionsResponse>
   */
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsListMetricDefinitionsResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param callback The callback
   */
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, callback: msRest.ServiceCallback<Models.MetricDefinitionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionListResult>): void;
  listMetricDefinitions(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricDefinitionListResult>, callback?: msRest.ServiceCallback<Models.MetricDefinitionListResult>): Promise<Models.ElasticPoolsListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      listMetricDefinitionsOperationSpec,
      callback) as Promise<Models.ElasticPoolsListMetricDefinitionsResponse>;
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: Models.ElasticPoolsListByServerOptionalParams): Promise<Models.ElasticPoolsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ElasticPoolListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: Models.ElasticPoolsListByServerOptionalParams, callback: msRest.ServiceCallback<Models.ElasticPoolListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: Models.ElasticPoolsListByServerOptionalParams | msRest.ServiceCallback<Models.ElasticPoolListResult>, callback?: msRest.ServiceCallback<Models.ElasticPoolListResult>): Promise<Models.ElasticPoolsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.ElasticPoolsListByServerResponse>;
  }

  /**
   * Gets an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, elasticPoolName: string, callback: msRest.ServiceCallback<Models.ElasticPool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, elasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ElasticPool>): void;
  get(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ElasticPool>, callback?: msRest.ServiceCallback<Models.ElasticPool>): Promise<Models.ElasticPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ElasticPoolsGetResponse>;
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: Models.ElasticPool, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,elasticPoolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ElasticPoolsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,elasticPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsUpdateResponse>
   */
  update(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: Models.ElasticPoolUpdate, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serverName,elasticPoolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ElasticPoolsUpdateResponse>;
  }

  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  failover(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginFailover(resourceGroupName,serverName,elasticPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: Models.ElasticPool, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serverName: string, elasticPoolName: string, parameters: Models.ElasticPoolUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginFailover(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      beginFailoverOperationSpec,
      options);
  }

  /**
   * Gets all elastic pools in a server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: Models.ElasticPoolsListByServerNextOptionalParams): Promise<Models.ElasticPoolsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ElasticPoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: Models.ElasticPoolsListByServerNextOptionalParams, callback: msRest.ServiceCallback<Models.ElasticPoolListResult>): void;
  listByServerNext(nextPageLink: string, options?: Models.ElasticPoolsListByServerNextOptionalParams | msRest.ServiceCallback<Models.ElasticPoolListResult>, callback?: msRest.ServiceCallback<Models.ElasticPoolListResult>): Promise<Models.ElasticPoolsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.ElasticPoolsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listMetricDefinitionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ElasticPool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
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

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ElasticPoolUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/failover",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.elasticPoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

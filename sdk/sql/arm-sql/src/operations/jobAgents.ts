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
import * as Mappers from "../models/jobAgentsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a JobAgents. */
export class JobAgents {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a JobAgents.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of job agents in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobAgentsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobAgentsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.JobAgentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobAgentListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobAgentListResult>, callback?: msRest.ServiceCallback<Models.JobAgentListResult>): Promise<Models.JobAgentsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.JobAgentsListByServerResponse>;
  }

  /**
   * Gets a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobAgentsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobAgentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, callback: msRest.ServiceCallback<Models.JobAgent>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobAgent>): void;
  get(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobAgent>, callback?: msRest.ServiceCallback<Models.JobAgent>): Promise<Models.JobAgentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobAgentsGetResponse>;
  }

  /**
   * Creates or updates a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be created or updated.
   * @param parameters The requested job agent resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobAgentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: Models.JobAgent, options?: msRest.RequestOptionsBase): Promise<Models.JobAgentsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,jobAgentName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.JobAgentsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,jobAgentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be updated.
   * @param parameters The update to the job agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobAgentsUpdateResponse>
   */
  update(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: Models.JobAgentUpdate, options?: msRest.RequestOptionsBase): Promise<Models.JobAgentsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,serverName,jobAgentName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.JobAgentsUpdateResponse>;
  }

  /**
   * Creates or updates a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be created or updated.
   * @param parameters The requested job agent resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: Models.JobAgent, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates a job agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent to be updated.
   * @param parameters The update to the job agent.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, parameters: Models.JobAgentUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Gets a list of job agents in a server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobAgentsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobAgentsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobAgentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobAgentListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobAgentListResult>, callback?: msRest.ServiceCallback<Models.JobAgentListResult>): Promise<Models.JobAgentsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.JobAgentsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobAgentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobAgent
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.JobAgent,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.JobAgent
    },
    201: {
      bodyMapper: Mappers.JobAgent
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.JobAgentUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.JobAgent
    },
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobAgentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

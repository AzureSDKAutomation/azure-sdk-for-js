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
import * as Mappers from "../models/jobTargetExecutionsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a JobTargetExecutions. */
export class JobTargetExecutions {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a JobTargetExecutions.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists target executions for all steps of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetExecutionsListByJobExecutionResponse>
   */
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: Models.JobTargetExecutionsListByJobExecutionOptionalParams): Promise<Models.JobTargetExecutionsListByJobExecutionResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param callback The callback
   */
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The optional parameters
   * @param callback The callback
   */
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options: Models.JobTargetExecutionsListByJobExecutionOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: Models.JobTargetExecutionsListByJobExecutionOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobTargetExecutionsListByJobExecutionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options
      },
      listByJobExecutionOperationSpec,
      callback) as Promise<Models.JobTargetExecutionsListByJobExecutionResponse>;
  }

  /**
   * Lists the target executions of a job step execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetExecutionsListByStepResponse>
   */
  listByStep(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options?: Models.JobTargetExecutionsListByStepOptionalParams): Promise<Models.JobTargetExecutionsListByStepResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param callback The callback
   */
  listByStep(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStep(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options: Models.JobTargetExecutionsListByStepOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByStep(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options?: Models.JobTargetExecutionsListByStepOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobTargetExecutionsListByStepResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        options
      },
      listByStepOperationSpec,
      callback) as Promise<Models.JobTargetExecutionsListByStepResponse>;
  }

  /**
   * Gets a target execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param targetId The target id.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetExecutionsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, targetId: string, options?: msRest.RequestOptionsBase): Promise<Models.JobTargetExecutionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param targetId The target id.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, targetId: string, callback: msRest.ServiceCallback<Models.JobExecution>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param targetId The target id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, targetId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobExecution>): void;
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, targetId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobExecution>, callback?: msRest.ServiceCallback<Models.JobExecution>): Promise<Models.JobTargetExecutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        targetId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobTargetExecutionsGetResponse>;
  }

  /**
   * Lists target executions for all steps of a job execution.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetExecutionsListByJobExecutionNextResponse>
   */
  listByJobExecutionNext(nextPageLink: string, options?: Models.JobTargetExecutionsListByJobExecutionNextOptionalParams): Promise<Models.JobTargetExecutionsListByJobExecutionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByJobExecutionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByJobExecutionNext(nextPageLink: string, options: Models.JobTargetExecutionsListByJobExecutionNextOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByJobExecutionNext(nextPageLink: string, options?: Models.JobTargetExecutionsListByJobExecutionNextOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobTargetExecutionsListByJobExecutionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByJobExecutionNextOperationSpec,
      callback) as Promise<Models.JobTargetExecutionsListByJobExecutionNextResponse>;
  }

  /**
   * Lists the target executions of a job step execution.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetExecutionsListByStepNextResponse>
   */
  listByStepNext(nextPageLink: string, options?: Models.JobTargetExecutionsListByStepNextOptionalParams): Promise<Models.JobTargetExecutionsListByStepNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByStepNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStepNext(nextPageLink: string, options: Models.JobTargetExecutionsListByStepNextOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByStepNext(nextPageLink: string, options?: Models.JobTargetExecutionsListByStepNextOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobTargetExecutionsListByStepNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByStepNextOperationSpec,
      callback) as Promise<Models.JobTargetExecutionsListByStepNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByJobExecutionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/targets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.skip,
    Parameters.top,
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByStepOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.skip,
    Parameters.top,
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets/{targetId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
    Parameters.targetId,
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
      bodyMapper: Mappers.JobExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByJobExecutionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.skip,
    Parameters.top,
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByStepNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.skip,
    Parameters.top,
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

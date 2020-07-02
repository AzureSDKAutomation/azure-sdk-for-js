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
import * as Models from "../models";
import * as Mappers from "../models/jobStepExecutionsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a JobStepExecutions. */
export class JobStepExecutions {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a JobStepExecutions.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the step executions of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param [options] The optional parameters
   * @returns Promise<Models.JobStepExecutionsListByJobExecutionResponse>
   */
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: Models.JobStepExecutionsListByJobExecutionOptionalParams): Promise<Models.JobStepExecutionsListByJobExecutionResponse>;
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
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options: Models.JobStepExecutionsListByJobExecutionOptionalParams, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByJobExecution(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, options?: Models.JobStepExecutionsListByJobExecutionOptionalParams | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobStepExecutionsListByJobExecutionResponse> {
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
      callback) as Promise<Models.JobStepExecutionsListByJobExecutionResponse>;
  }

  /**
   * Gets a step execution of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobStepExecutionsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobStepExecutionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, callback: msRest.ServiceCallback<Models.JobExecution>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobExecution>): void;
  get(resourceGroupName: string, serverName: string, jobAgentName: string, jobName: string, jobExecutionId: string, stepName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobExecution>, callback?: msRest.ServiceCallback<Models.JobExecution>): Promise<Models.JobStepExecutionsGetResponse> {
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
      getOperationSpec,
      callback) as Promise<Models.JobStepExecutionsGetResponse>;
  }

  /**
   * Lists the step executions of a job execution.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobStepExecutionsListByJobExecutionNextResponse>
   */
  listByJobExecutionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobStepExecutionsListByJobExecutionNextResponse>;
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
  listByJobExecutionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobExecutionListResult>): void;
  listByJobExecutionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobExecutionListResult>, callback?: msRest.ServiceCallback<Models.JobExecutionListResult>): Promise<Models.JobStepExecutionsListByJobExecutionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByJobExecutionNextOperationSpec,
      callback) as Promise<Models.JobStepExecutionsListByJobExecutionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByJobExecutionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps",
  urlParameters: [
    Parameters.resourceGroupName0,
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
    Parameters.apiVersion5
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
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

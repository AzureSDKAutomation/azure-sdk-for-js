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
import * as Mappers from "../models/workflowRunActionScopeRepetitionsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a WorkflowRunActionScopeRepetitions. */
export class WorkflowRunActionScopeRepetitions {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a WorkflowRunActionScopeRepetitions.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * List the workflow run action scoped repetitions.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowRunActionScopeRepetitionsListResponse>
   */
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowRunActionScopeRepetitionsListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>): void;
  list(resourceGroupName: string, workflowName: string, runName: string, actionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>, callback?: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinitionCollection>): Promise<Models.WorkflowRunActionScopeRepetitionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        runName,
        actionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkflowRunActionScopeRepetitionsListResponse>;
  }

  /**
   * Get a workflow run action scoped repetition.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowRunActionScopeRepetitionsGetResponse>
   */
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowRunActionScopeRepetitionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>): void;
  get(resourceGroupName: string, workflowName: string, runName: string, actionName: string, repetitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>, callback?: msRest.ServiceCallback<Models.WorkflowRunActionRepetitionDefinition>): Promise<Models.WorkflowRunActionScopeRepetitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        runName,
        actionName,
        repetitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkflowRunActionScopeRepetitionsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinitionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/runs/{runName}/actions/{actionName}/scopeRepetitions/{repetitionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.runName,
    Parameters.actionName,
    Parameters.repetitionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

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
import * as Mappers from "../models/hybridRunbookWorkerGroupOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a HybridRunbookWorkerGroupOperations. */
export class HybridRunbookWorkerGroupOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a HybridRunbookWorkerGroupOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Delete a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param [options] The optional parameters
   * @returns Promise<Models.HybridRunbookWorkerGroupGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.HybridRunbookWorkerGroupGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>): void;
  get(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>, callback?: msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>): Promise<Models.HybridRunbookWorkerGroupGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HybridRunbookWorkerGroupGetResponse>;
  }

  /**
   * Update a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param parameters The hybrid runbook worker group
   * @param [options] The optional parameters
   * @returns Promise<Models.HybridRunbookWorkerGroupUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, parameters: Models.HybridRunbookWorkerGroupUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.HybridRunbookWorkerGroupUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param parameters The hybrid runbook worker group
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, parameters: Models.HybridRunbookWorkerGroupUpdateParameters, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param parameters The hybrid runbook worker group
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, parameters: Models.HybridRunbookWorkerGroupUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>): void;
  update(resourceGroupName: string, automationAccountName: string, hybridRunbookWorkerGroupName: string, parameters: Models.HybridRunbookWorkerGroupUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>, callback?: msRest.ServiceCallback<Models.HybridRunbookWorkerGroup>): Promise<Models.HybridRunbookWorkerGroupUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        hybridRunbookWorkerGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.HybridRunbookWorkerGroupUpdateResponse>;
  }

  /**
   * Retrieve a list of hybrid runbook worker groups.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.HybridRunbookWorkerGroupListByAutomationAccountOptionalParams): Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: Models.HybridRunbookWorkerGroupListByAutomationAccountOptionalParams, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.HybridRunbookWorkerGroupListByAutomationAccountOptionalParams | msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>, callback?: msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>): Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of hybrid runbook worker groups.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: Models.HybridRunbookWorkerGroupListByAutomationAccountNextOptionalParams): Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: Models.HybridRunbookWorkerGroupListByAutomationAccountNextOptionalParams, callback: msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: Models.HybridRunbookWorkerGroupListByAutomationAccountNextOptionalParams | msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>, callback?: msRest.ServiceCallback<Models.HybridRunbookWorkerGroupsListResult>): Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.HybridRunbookWorkerGroupListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.hybridRunbookWorkerGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.HybridRunbookWorkerGroupUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroupsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HybridRunbookWorkerGroupsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

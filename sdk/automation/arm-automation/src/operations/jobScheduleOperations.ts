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
import * as Mappers from "../models/jobScheduleOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a JobScheduleOperations. */
export class JobScheduleOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a JobScheduleOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Delete the job schedule identified by job schedule name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobScheduleId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the job schedule identified by job schedule name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, options?: msRest.RequestOptionsBase): Promise<Models.JobScheduleGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, callback: msRest.ServiceCallback<Models.JobSchedule>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobSchedule>): void;
  get(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobSchedule>, callback?: msRest.ServiceCallback<Models.JobSchedule>): Promise<Models.JobScheduleGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobScheduleId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobScheduleGetResponse>;
  }

  /**
   * Create a job schedule.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param parameters The parameters supplied to the create job schedule operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleCreateResponse>
   */
  create(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, parameters: Models.JobScheduleCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.JobScheduleCreateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param parameters The parameters supplied to the create job schedule operation.
   * @param callback The callback
   */
  create(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, parameters: Models.JobScheduleCreateParameters, callback: msRest.ServiceCallback<Models.JobSchedule>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobScheduleId The job schedule name.
   * @param parameters The parameters supplied to the create job schedule operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, parameters: Models.JobScheduleCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobSchedule>): void;
  create(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, parameters: Models.JobScheduleCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobSchedule>, callback?: msRest.ServiceCallback<Models.JobSchedule>): Promise<Models.JobScheduleCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobScheduleId,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.JobScheduleCreateResponse>;
  }

  /**
   * Retrieve a list of job schedules.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.JobScheduleListByAutomationAccountOptionalParams): Promise<Models.JobScheduleListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.JobScheduleListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: Models.JobScheduleListByAutomationAccountOptionalParams, callback: msRest.ServiceCallback<Models.JobScheduleListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.JobScheduleListByAutomationAccountOptionalParams | msRest.ServiceCallback<Models.JobScheduleListResult>, callback?: msRest.ServiceCallback<Models.JobScheduleListResult>): Promise<Models.JobScheduleListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.JobScheduleListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of job schedules.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: Models.JobScheduleListByAutomationAccountNextOptionalParams): Promise<Models.JobScheduleListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobScheduleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: Models.JobScheduleListByAutomationAccountNextOptionalParams, callback: msRest.ServiceCallback<Models.JobScheduleListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: Models.JobScheduleListByAutomationAccountNextOptionalParams | msRest.ServiceCallback<Models.JobScheduleListResult>, callback?: msRest.ServiceCallback<Models.JobScheduleListResult>): Promise<Models.JobScheduleListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.JobScheduleListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobScheduleId,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobScheduleId,
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
      bodyMapper: Mappers.JobSchedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobScheduleId,
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
      ...Mappers.JobScheduleCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.JobSchedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules",
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
      bodyMapper: Mappers.JobScheduleListResult
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
      bodyMapper: Mappers.JobScheduleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

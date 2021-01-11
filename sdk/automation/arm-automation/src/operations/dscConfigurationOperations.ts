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
import * as Mappers from "../models/dscConfigurationOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a DscConfigurationOperations. */
export class DscConfigurationOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a DscConfigurationOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Delete the dsc configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, configurationName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, configurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        configurationName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscConfigurationGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.DscConfigurationGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, configurationName: string, callback: msRest.ServiceCallback<Models.DscConfiguration>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, configurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DscConfiguration>): void;
  get(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DscConfiguration>, callback?: msRest.ServiceCallback<Models.DscConfiguration>): Promise<Models.DscConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        configurationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DscConfigurationGetResponse>;
  }

  /**
   * Create the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param parameters The create or update parameters for configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscConfigurationCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, configurationName: string, parameters: Models.DscConfigurationCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.DscConfigurationCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param parameters The create or update parameters for configuration.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, configurationName: string, parameters: Models.DscConfigurationCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.DscConfiguration>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param parameters The create or update parameters for configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, configurationName: string, parameters: Models.DscConfigurationCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DscConfiguration>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, configurationName: string, parameters: Models.DscConfigurationCreateOrUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DscConfiguration>, callback?: msRest.ServiceCallback<Models.DscConfiguration>): Promise<Models.DscConfigurationCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        configurationName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DscConfigurationCreateOrUpdateResponse>;
  }

  /**
   * Create the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscConfigurationUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: Models.DscConfigurationUpdateOptionalParams): Promise<Models.DscConfigurationUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, configurationName: string, callback: msRest.ServiceCallback<Models.DscConfiguration>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, configurationName: string, options: Models.DscConfigurationUpdateOptionalParams, callback: msRest.ServiceCallback<Models.DscConfiguration>): void;
  update(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: Models.DscConfigurationUpdateOptionalParams | msRest.ServiceCallback<Models.DscConfiguration>, callback?: msRest.ServiceCallback<Models.DscConfiguration>): Promise<Models.DscConfigurationUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        configurationName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.DscConfigurationUpdateResponse>;
  }

  /**
   * Retrieve the configuration script identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscConfigurationGetContentResponse>
   */
  getContent(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.DscConfigurationGetContentResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, configurationName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, configurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getContent(resourceGroupName: string, automationAccountName: string, configurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.DscConfigurationGetContentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        configurationName,
        options
      },
      getContentOperationSpec,
      callback) as Promise<Models.DscConfigurationGetContentResponse>;
  }

  /**
   * Retrieve a list of configurations.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscConfigurationListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.DscConfigurationListByAutomationAccountOptionalParams): Promise<Models.DscConfigurationListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.DscConfigurationListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: Models.DscConfigurationListByAutomationAccountOptionalParams, callback: msRest.ServiceCallback<Models.DscConfigurationListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.DscConfigurationListByAutomationAccountOptionalParams | msRest.ServiceCallback<Models.DscConfigurationListResult>, callback?: msRest.ServiceCallback<Models.DscConfigurationListResult>): Promise<Models.DscConfigurationListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.DscConfigurationListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of configurations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DscConfigurationListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: Models.DscConfigurationListByAutomationAccountNextOptionalParams): Promise<Models.DscConfigurationListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DscConfigurationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: Models.DscConfigurationListByAutomationAccountNextOptionalParams, callback: msRest.ServiceCallback<Models.DscConfigurationListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: Models.DscConfigurationListByAutomationAccountNextOptionalParams | msRest.ServiceCallback<Models.DscConfigurationListResult>, callback?: msRest.ServiceCallback<Models.DscConfigurationListResult>): Promise<Models.DscConfigurationListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.DscConfigurationListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.configurationName,
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
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.configurationName,
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
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.configurationName,
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
      ...Mappers.DscConfigurationCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
    },
    201: {
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.configurationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.DscConfigurationUpdateParameters
  },
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}/content",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.configurationName,
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
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.skip0,
    Parameters.top0,
    Parameters.inlinecount
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DscConfigurationListResult
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
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.skip0,
    Parameters.top0,
    Parameters.inlinecount
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DscConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

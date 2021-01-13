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
import * as Mappers from "../models/applicationPackageOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";

/** Class representing a ApplicationPackageOperations. */
export class ApplicationPackageOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Create a ApplicationPackageOperations.
   * @param {BatchManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Activates the specified application package. This should be done after the `ApplicationPackage`
   * was created and uploaded. This needs to be done before an `ApplicationPackage` can be used on
   * Pools or Tasks.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param format The format of the application package binary file.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageActivateResponse>
   */
  activate(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, format: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationPackageActivateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param format The format of the application package binary file.
   * @param callback The callback
   */
  activate(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, format: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param format The format of the application package binary file.
   * @param options The optional parameters
   * @param callback The callback
   */
  activate(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, format: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  activate(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, format: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationPackage>, callback?: msRest.ServiceCallback<Models.ApplicationPackage>): Promise<Models.ApplicationPackageActivateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationName,
        versionName,
        format,
        options
      },
      activateOperationSpec,
      callback) as Promise<Models.ApplicationPackageActivateResponse>;
  }

  /**
   * Creates an application package record. The record contains the SAS where the package should be
   * uploaded to.  Once it is uploaded the `ApplicationPackage` needs to be activated using
   * `ApplicationPackageActive` before it can be used.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationPackageCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  create(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationPackage>, callback?: msRest.ServiceCallback<Models.ApplicationPackage>): Promise<Models.ApplicationPackageCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationName,
        versionName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ApplicationPackageCreateResponse>;
  }

  /**
   * Deletes an application package record and its associated binary file.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationName,
        versionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets information about the specified application package.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageGetResponse>
   */
  get(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationPackageGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  get(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationPackage>, callback?: msRest.ServiceCallback<Models.ApplicationPackage>): Promise<Models.ApplicationPackageGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationName,
        versionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationPackageGetResponse>;
  }

  /**
   * Lists all of the application packages in the specified application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageListResponse>
   */
  list(resourceGroupName: string, accountName: string, applicationName: string, options?: Models.ApplicationPackageListOptionalParams): Promise<Models.ApplicationPackageListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, applicationName: string, callback: msRest.ServiceCallback<Models.ListApplicationPackagesResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, applicationName: string, options: Models.ApplicationPackageListOptionalParams, callback: msRest.ServiceCallback<Models.ListApplicationPackagesResult>): void;
  list(resourceGroupName: string, accountName: string, applicationName: string, options?: Models.ApplicationPackageListOptionalParams | msRest.ServiceCallback<Models.ListApplicationPackagesResult>, callback?: msRest.ServiceCallback<Models.ListApplicationPackagesResult>): Promise<Models.ApplicationPackageListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApplicationPackageListResponse>;
  }

  /**
   * Lists all of the application packages in the specified application.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ApplicationPackageListNextOptionalParams): Promise<Models.ApplicationPackageListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListApplicationPackagesResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ApplicationPackageListNextOptionalParams, callback: msRest.ServiceCallback<Models.ListApplicationPackagesResult>): void;
  listNext(nextPageLink: string, options?: Models.ApplicationPackageListNextOptionalParams | msRest.ServiceCallback<Models.ListApplicationPackagesResult>, callback?: msRest.ServiceCallback<Models.ListApplicationPackagesResult>): Promise<Models.ApplicationPackageListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApplicationPackageListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const activateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}/activate",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      format: "format"
    },
    mapper: {
      ...Mappers.ActivateApplicationPackageParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationPackage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.ApplicationPackage
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationPackage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
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
      bodyMapper: Mappers.ApplicationPackage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.maxresults,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListApplicationPackagesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.maxresults,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListApplicationPackagesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

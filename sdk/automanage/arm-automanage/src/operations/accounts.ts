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
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { AutomanageClientContext } from "../automanageClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: AutomanageClientContext;

  /**
   * Create a Accounts.
   * @param {AutomanageClientContext} client Reference to the service client.
   */
  constructor(client: AutomanageClientContext) {
    this.client = client;
  }

  /**
   * Creates an Automanage Account
   * @param accountName Name of the Automanage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update Automanage account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateOrUpdateResponse>
   */
  createOrUpdate(accountName: string, resourceGroupName: string, parameters: Models.Account, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCreateOrUpdateResponse>;
  /**
   * @param accountName Name of the Automanage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update Automanage account.
   * @param callback The callback
   */
  createOrUpdate(accountName: string, resourceGroupName: string, parameters: Models.Account, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param accountName Name of the Automanage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to create or update Automanage account.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(accountName: string, resourceGroupName: string, parameters: Models.Account, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  createOrUpdate(accountName: string, resourceGroupName: string, parameters: Models.Account, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        resourceGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AccountsCreateOrUpdateResponse>;
  }

  /**
   * Get information about a Automanage account
   * @param accountName The Automanage account name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(accountName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param accountName The Automanage account name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  get(accountName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param accountName The Automanage account name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(accountName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  get(accountName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccountsGetResponse>;
  }

  /**
   * Delete a Automanage account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Name of the Automanage account
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Name of the Automanage account
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Name of the Automanage account
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates an Automanage Account
   * @param accountName Name of the Automanage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to update Automanage account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(accountName: string, resourceGroupName: string, parameters: Models.AccountUpdate, options?: msRest.RequestOptionsBase): Promise<Models.AccountsUpdateResponse>;
  /**
   * @param accountName Name of the Automanage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to update Automanage account.
   * @param callback The callback
   */
  update(accountName: string, resourceGroupName: string, parameters: Models.AccountUpdate, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param accountName Name of the Automanage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters supplied to update Automanage account.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(accountName: string, resourceGroupName: string, parameters: Models.AccountUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  update(accountName: string, resourceGroupName: string, parameters: Models.AccountUpdate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccountsUpdateResponse>;
  }

  /**
   * Retrieve a list of Automanage accounts within a given resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AccountList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountList>, callback?: msRest.ServiceCallback<Models.AccountList>): Promise<Models.AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupResponse>;
  }

  /**
   * Retrieve a list of Automanage accounts within a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.AccountsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.AccountList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountList>, callback?: msRest.ServiceCallback<Models.AccountList>): Promise<Models.AccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.AccountsListBySubscriptionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/accounts/{accountName}",
  urlParameters: [
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
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
      ...Mappers.Account,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    201: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/accounts/{accountName}",
  urlParameters: [
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/accounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/accounts/{accountName}",
  urlParameters: [
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
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
      ...Mappers.AccountUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/accounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Automanage/accounts",
  urlParameters: [
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
      bodyMapper: Mappers.AccountList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

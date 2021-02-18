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
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { MLTeamAccountManagementClientContext } from "../mLTeamAccountManagementClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: MLTeamAccountManagementClientContext;

  /**
   * Create a Accounts.
   * @param {MLTeamAccountManagementClientContext} client Reference to the service client.
   */
  constructor(client: MLTeamAccountManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the properties of the specified machine learning team account.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccountsGetResponse>;
  }

  /**
   * Creates or updates a team account with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param parameters The parameters for creating or updating a machine learning team account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.Account, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param parameters The parameters for creating or updating a machine learning team account.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.Account, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param parameters The parameters for creating or updating a machine learning team account.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.Account, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.Account, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AccountsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a machine learning team account.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
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
   * Updates a machine learning team account with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param parameters The parameters for updating a machine learning team account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.AccountUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AccountsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param parameters The parameters for updating a machine learning team account.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.AccountUpdateParameters, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param accountName The name of the machine learning team account.
   * @param parameters The parameters for updating a machine learning team account.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.AccountUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  update(resourceGroupName: string, accountName: string, parameters: Models.AccountUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccountsUpdateResponse>;
  }

  /**
   * Lists all the available machine learning team accounts under the specified resource group.
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group to which the machine learning team
   * account belongs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupResponse>;
  }

  /**
   * Lists all the available machine learning team accounts under the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AccountsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AccountsListResponse>;
  }

  /**
   * Lists all the available machine learning team accounts under the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the available machine learning team accounts under the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AccountsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
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

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
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

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
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
      ...Mappers.AccountUpdateParameters,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts",
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
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningExperimentation/accounts",
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
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

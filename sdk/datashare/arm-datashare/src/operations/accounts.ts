/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a Accounts.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * List Accounts in Subscription
   * @summary List Accounts in a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.AccountsListBySubscriptionOptionalParams): Promise<Models.AccountsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.AccountList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.AccountsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.AccountList>): void;
  listBySubscription(options?: Models.AccountsListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.AccountList>, callback?: msRest.ServiceCallback<Models.AccountList>): Promise<Models.AccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.AccountsListBySubscriptionResponse>;
  }

  /**
   * Get an account
   * @summary Get an account under a resource group
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
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
   * Create an account
   * @summary Create an account in the given resource group
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param account The account payload.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, account: Models.Account, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,account,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AccountsCreateResponse>;
  }

  /**
   * DeleteAccount
   * @summary Delete an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AccountsDeleteMethodResponse>;
  }

  /**
   * Patch an account
   * @summary Patch a given account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param accountUpdateParameters The account update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, accountUpdateParameters: Models.AccountUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AccountsUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param accountUpdateParameters The account update parameters.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, accountUpdateParameters: Models.AccountUpdateParameters, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param accountUpdateParameters The account update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, accountUpdateParameters: Models.AccountUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  update(resourceGroupName: string, accountName: string, accountUpdateParameters: Models.AccountUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        accountUpdateParameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccountsUpdateResponse>;
  }

  /**
   * List Accounts in ResourceGroup
   * @summary List Accounts in a resource group
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.AccountsListByResourceGroupOptionalParams): Promise<Models.AccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AccountList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.AccountsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.AccountList>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.AccountsListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.AccountList>, callback?: msRest.ServiceCallback<Models.AccountList>): Promise<Models.AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupResponse>;
  }

  /**
   * Create an account
   * @summary Create an account in the given resource group
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param account The account payload.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, account: Models.Account, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        account,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * DeleteAccount
   * @summary Delete an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List Accounts in Subscription
   * @summary List Accounts in a subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: Models.AccountsListBySubscriptionNextOptionalParams): Promise<Models.AccountsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: Models.AccountsListBySubscriptionNextOptionalParams, callback: msRest.ServiceCallback<Models.AccountList>): void;
  listBySubscriptionNext(nextPageLink: string, options?: Models.AccountsListBySubscriptionNextOptionalParams | msRest.ServiceCallback<Models.AccountList>, callback?: msRest.ServiceCallback<Models.AccountList>): Promise<Models.AccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.AccountsListBySubscriptionNextResponse>;
  }

  /**
   * List Accounts in ResourceGroup
   * @summary List Accounts in a resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: Models.AccountsListByResourceGroupNextOptionalParams): Promise<Models.AccountsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: Models.AccountsListByResourceGroupNextOptionalParams, callback: msRest.ServiceCallback<Models.AccountList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: Models.AccountsListByResourceGroupNextOptionalParams | msRest.ServiceCallback<Models.AccountList>, callback?: msRest.ServiceCallback<Models.AccountList>): Promise<Models.AccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataShare/accounts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
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
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
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
    parameterPath: "accountUpdateParameters",
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
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
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
    parameterPath: "account",
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
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
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
      bodyMapper: Mappers.OperationResponse
    },
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountList
    },
    default: {
      bodyMapper: Mappers.DataShareError
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
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

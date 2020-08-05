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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/providerShareSubscriptionsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a ProviderShareSubscriptions. */
export class ProviderShareSubscriptions {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a ProviderShareSubscriptions.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * Reinstate share subscription in a provider share
   * @summary Reinstate share subscription in a provider share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderShareSubscriptionsReinstateResponse>
   */
  reinstate(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderShareSubscriptionsReinstateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param callback The callback
   */
  reinstate(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, callback: msRest.ServiceCallback<Models.ProviderShareSubscription>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param options The optional parameters
   * @param callback The callback
   */
  reinstate(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderShareSubscription>): void;
  reinstate(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProviderShareSubscription>, callback?: msRest.ServiceCallback<Models.ProviderShareSubscription>): Promise<Models.ProviderShareSubscriptionsReinstateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        providerShareSubscriptionId,
        options
      },
      reinstateOperationSpec,
      callback) as Promise<Models.ProviderShareSubscriptionsReinstateResponse>;
  }

  /**
   * Revoke share subscription in a provider share
   * @summary Revoke share subscription in a provider share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderShareSubscriptionsRevokeResponse>
   */
  revoke(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderShareSubscriptionsRevokeResponse> {
    return this.beginRevoke(resourceGroupName,accountName,shareName,providerShareSubscriptionId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ProviderShareSubscriptionsRevokeResponse>;
  }

  /**
   * Get share subscription in a provider share
   * @summary Get share subscription in a provider share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderShareSubscriptionsGetByShareResponse>
   */
  getByShare(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderShareSubscriptionsGetByShareResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param callback The callback
   */
  getByShare(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, callback: msRest.ServiceCallback<Models.ProviderShareSubscription>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param options The optional parameters
   * @param callback The callback
   */
  getByShare(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderShareSubscription>): void;
  getByShare(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProviderShareSubscription>, callback?: msRest.ServiceCallback<Models.ProviderShareSubscription>): Promise<Models.ProviderShareSubscriptionsGetByShareResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        providerShareSubscriptionId,
        options
      },
      getByShareOperationSpec,
      callback) as Promise<Models.ProviderShareSubscriptionsGetByShareResponse>;
  }

  /**
   * List share subscriptions in a provider share
   * @summary List of available share subscriptions to a provider share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderShareSubscriptionsListByShareResponse>
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.ProviderShareSubscriptionsListByShareOptionalParams): Promise<Models.ProviderShareSubscriptionsListByShareResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.ProviderShareSubscriptionList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options: Models.ProviderShareSubscriptionsListByShareOptionalParams, callback: msRest.ServiceCallback<Models.ProviderShareSubscriptionList>): void;
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.ProviderShareSubscriptionsListByShareOptionalParams | msRest.ServiceCallback<Models.ProviderShareSubscriptionList>, callback?: msRest.ServiceCallback<Models.ProviderShareSubscriptionList>): Promise<Models.ProviderShareSubscriptionsListByShareResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      listByShareOperationSpec,
      callback) as Promise<Models.ProviderShareSubscriptionsListByShareResponse>;
  }

  /**
   * Revoke share subscription in a provider share
   * @summary Revoke share subscription in a provider share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param providerShareSubscriptionId To locate shareSubscription
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRevoke(resourceGroupName: string, accountName: string, shareName: string, providerShareSubscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        providerShareSubscriptionId,
        options
      },
      beginRevokeOperationSpec,
      options);
  }

  /**
   * List share subscriptions in a provider share
   * @summary List of available share subscriptions to a provider share.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderShareSubscriptionsListByShareNextResponse>
   */
  listByShareNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderShareSubscriptionsListByShareNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProviderShareSubscriptionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderShareSubscriptionList>): void;
  listByShareNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProviderShareSubscriptionList>, callback?: msRest.ServiceCallback<Models.ProviderShareSubscriptionList>): Promise<Models.ProviderShareSubscriptionsListByShareNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByShareNextOperationSpec,
      callback) as Promise<Models.ProviderShareSubscriptionsListByShareNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const reinstateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/reinstate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.providerShareSubscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderShareSubscription
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const getByShareOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.providerShareSubscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderShareSubscription
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName
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
      bodyMapper: Mappers.ProviderShareSubscriptionList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const beginRevokeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/revoke",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.providerShareSubscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProviderShareSubscription
    },
    202: {
      bodyMapper: Mappers.ProviderShareSubscription
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ProviderShareSubscriptionList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

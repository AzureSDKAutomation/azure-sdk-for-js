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
import * as Mappers from "../models/synchronizationSettingsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a SynchronizationSettings. */
export class SynchronizationSettings {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a SynchronizationSettings.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a synchronizationSetting in a share
   * @summary Get synchronizationSetting in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param synchronizationSettingName The name of the synchronizationSetting.
   * @param [options] The optional parameters
   * @returns Promise<Models.SynchronizationSettingsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, options?: msRest.RequestOptionsBase): Promise<Models.SynchronizationSettingsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param synchronizationSettingName The name of the synchronizationSetting.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, callback: msRest.ServiceCallback<Models.SynchronizationSettingUnion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param synchronizationSettingName The name of the synchronizationSetting.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SynchronizationSettingUnion>): void;
  get(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SynchronizationSettingUnion>, callback?: msRest.ServiceCallback<Models.SynchronizationSettingUnion>): Promise<Models.SynchronizationSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        synchronizationSettingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SynchronizationSettingsGetResponse>;
  }

  /**
   * Create or update a synchronizationSetting
   * @summary Adds a new synchronization setting to an existing share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to add the synchronization setting to.
   * @param synchronizationSettingName The name of the synchronizationSetting.
   * @param synchronizationSetting The new synchronization setting information.
   * @param [options] The optional parameters
   * @returns Promise<Models.SynchronizationSettingsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, synchronizationSetting: Models.SynchronizationSettingUnion, options?: msRest.RequestOptionsBase): Promise<Models.SynchronizationSettingsCreateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to add the synchronization setting to.
   * @param synchronizationSettingName The name of the synchronizationSetting.
   * @param synchronizationSetting The new synchronization setting information.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, synchronizationSetting: Models.SynchronizationSettingUnion, callback: msRest.ServiceCallback<Models.SynchronizationSettingUnion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to add the synchronization setting to.
   * @param synchronizationSettingName The name of the synchronizationSetting.
   * @param synchronizationSetting The new synchronization setting information.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, synchronizationSetting: Models.SynchronizationSettingUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SynchronizationSettingUnion>): void;
  create(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, synchronizationSetting: Models.SynchronizationSettingUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SynchronizationSettingUnion>, callback?: msRest.ServiceCallback<Models.SynchronizationSettingUnion>): Promise<Models.SynchronizationSettingsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        synchronizationSettingName,
        synchronizationSetting,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SynchronizationSettingsCreateResponse>;
  }

  /**
   * Delete a synchronizationSetting in a share
   * @summary Delete synchronizationSetting in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param synchronizationSettingName The name of the synchronizationSetting .
   * @param [options] The optional parameters
   * @returns Promise<Models.SynchronizationSettingsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, options?: msRest.RequestOptionsBase): Promise<Models.SynchronizationSettingsDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,shareName,synchronizationSettingName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SynchronizationSettingsDeleteMethodResponse>;
  }

  /**
   * List synchronizationSettings in a share
   * @summary List synchronizationSettings in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param [options] The optional parameters
   * @returns Promise<Models.SynchronizationSettingsListByShareResponse>
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.SynchronizationSettingsListByShareOptionalParams): Promise<Models.SynchronizationSettingsListByShareResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.SynchronizationSettingList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options: Models.SynchronizationSettingsListByShareOptionalParams, callback: msRest.ServiceCallback<Models.SynchronizationSettingList>): void;
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.SynchronizationSettingsListByShareOptionalParams | msRest.ServiceCallback<Models.SynchronizationSettingList>, callback?: msRest.ServiceCallback<Models.SynchronizationSettingList>): Promise<Models.SynchronizationSettingsListByShareResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      listByShareOperationSpec,
      callback) as Promise<Models.SynchronizationSettingsListByShareResponse>;
  }

  /**
   * Delete a synchronizationSetting in a share
   * @summary Delete synchronizationSetting in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param synchronizationSettingName The name of the synchronizationSetting .
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, shareName: string, synchronizationSettingName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        synchronizationSettingName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List synchronizationSettings in a share
   * @summary List synchronizationSettings in a share.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SynchronizationSettingsListByShareNextResponse>
   */
  listByShareNext(nextPageLink: string, options?: Models.SynchronizationSettingsListByShareNextOptionalParams): Promise<Models.SynchronizationSettingsListByShareNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SynchronizationSettingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, options: Models.SynchronizationSettingsListByShareNextOptionalParams, callback: msRest.ServiceCallback<Models.SynchronizationSettingList>): void;
  listByShareNext(nextPageLink: string, options?: Models.SynchronizationSettingsListByShareNextOptionalParams | msRest.ServiceCallback<Models.SynchronizationSettingList>, callback?: msRest.ServiceCallback<Models.SynchronizationSettingList>): Promise<Models.SynchronizationSettingsListByShareNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByShareNextOperationSpec,
      callback) as Promise<Models.SynchronizationSettingsListByShareNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.synchronizationSettingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SynchronizationSetting
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.synchronizationSettingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "synchronizationSetting",
    mapper: {
      ...Mappers.SynchronizationSetting,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SynchronizationSetting
    },
    201: {
      bodyMapper: Mappers.SynchronizationSetting
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings",
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
      bodyMapper: Mappers.SynchronizationSettingList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.synchronizationSettingName
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

const listByShareNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SynchronizationSettingList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

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
import * as Mappers from "../models/dataSetMappingsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a DataSetMappings. */
export class DataSetMappings {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a DataSetMappings.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a DataSetMapping in a shareSubscription
   * @summary Get DataSetMapping in a shareSubscription.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the shareSubscription.
   * @param dataSetMappingName The name of the dataSetMapping.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetMappingsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataSetMappingsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the shareSubscription.
   * @param dataSetMappingName The name of the dataSetMapping.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, callback: msRest.ServiceCallback<Models.DataSetMappingUnion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the shareSubscription.
   * @param dataSetMappingName The name of the dataSetMapping.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSetMappingUnion>): void;
  get(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSetMappingUnion>, callback?: msRest.ServiceCallback<Models.DataSetMappingUnion>): Promise<Models.DataSetMappingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareSubscriptionName,
        dataSetMappingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataSetMappingsGetResponse>;
  }

  /**
   * Create a DataSetMapping
   * @summary Maps a source data set in the source share to a sink data set in the share
   * subscription.
   * Enables copying the data set from source to destination.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the share subscription which will hold the data set
   * sink.
   * @param dataSetMappingName The name of the data set mapping to be created.
   * @param dataSetMapping Destination data set configuration details.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetMappingsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, dataSetMapping: Models.DataSetMappingUnion, options?: msRest.RequestOptionsBase): Promise<Models.DataSetMappingsCreateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the share subscription which will hold the data set
   * sink.
   * @param dataSetMappingName The name of the data set mapping to be created.
   * @param dataSetMapping Destination data set configuration details.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, dataSetMapping: Models.DataSetMappingUnion, callback: msRest.ServiceCallback<Models.DataSetMappingUnion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the share subscription which will hold the data set
   * sink.
   * @param dataSetMappingName The name of the data set mapping to be created.
   * @param dataSetMapping Destination data set configuration details.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, dataSetMapping: Models.DataSetMappingUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSetMappingUnion>): void;
  create(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, dataSetMapping: Models.DataSetMappingUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSetMappingUnion>, callback?: msRest.ServiceCallback<Models.DataSetMappingUnion>): Promise<Models.DataSetMappingsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareSubscriptionName,
        dataSetMappingName,
        dataSetMapping,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.DataSetMappingsCreateResponse>;
  }

  /**
   * Delete a DataSetMapping in a shareSubscription
   * @summary Delete DataSetMapping in a shareSubscription.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the shareSubscription.
   * @param dataSetMappingName The name of the dataSetMapping.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the shareSubscription.
   * @param dataSetMappingName The name of the dataSetMapping.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the shareSubscription.
   * @param dataSetMappingName The name of the dataSetMapping.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, shareSubscriptionName: string, dataSetMappingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareSubscriptionName,
        dataSetMappingName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List DataSetMappings in a share subscription
   * @summary List DataSetMappings in a share subscription.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the share subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetMappingsListByShareSubscriptionResponse>
   */
  listByShareSubscription(resourceGroupName: string, accountName: string, shareSubscriptionName: string, options?: Models.DataSetMappingsListByShareSubscriptionOptionalParams): Promise<Models.DataSetMappingsListByShareSubscriptionResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the share subscription.
   * @param callback The callback
   */
  listByShareSubscription(resourceGroupName: string, accountName: string, shareSubscriptionName: string, callback: msRest.ServiceCallback<Models.DataSetMappingList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareSubscriptionName The name of the share subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShareSubscription(resourceGroupName: string, accountName: string, shareSubscriptionName: string, options: Models.DataSetMappingsListByShareSubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.DataSetMappingList>): void;
  listByShareSubscription(resourceGroupName: string, accountName: string, shareSubscriptionName: string, options?: Models.DataSetMappingsListByShareSubscriptionOptionalParams | msRest.ServiceCallback<Models.DataSetMappingList>, callback?: msRest.ServiceCallback<Models.DataSetMappingList>): Promise<Models.DataSetMappingsListByShareSubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareSubscriptionName,
        options
      },
      listByShareSubscriptionOperationSpec,
      callback) as Promise<Models.DataSetMappingsListByShareSubscriptionResponse>;
  }

  /**
   * List DataSetMappings in a share subscription
   * @summary List DataSetMappings in a share subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetMappingsListByShareSubscriptionNextResponse>
   */
  listByShareSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DataSetMappingsListByShareSubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByShareSubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataSetMappingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShareSubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSetMappingList>): void;
  listByShareSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSetMappingList>, callback?: msRest.ServiceCallback<Models.DataSetMappingList>): Promise<Models.DataSetMappingsListByShareSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByShareSubscriptionNextOperationSpec,
      callback) as Promise<Models.DataSetMappingsListByShareSubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareSubscriptionName,
    Parameters.dataSetMappingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSetMapping
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareSubscriptionName,
    Parameters.dataSetMappingName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "dataSetMapping",
    mapper: {
      ...Mappers.DataSetMapping,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataSetMapping
    },
    201: {
      bodyMapper: Mappers.DataSetMapping
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareSubscriptionName,
    Parameters.dataSetMappingName
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
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareSubscriptionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.filter,
    Parameters.orderby
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSetMappingList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareSubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.DataSetMappingList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

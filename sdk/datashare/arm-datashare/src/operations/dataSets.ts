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
import * as Mappers from "../models/dataSetsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a DataSets. */
export class DataSets {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a DataSets.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a DataSet in a share
   * @summary Get DataSet in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param dataSetName The name of the dataSet.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataSetsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param dataSetName The name of the dataSet.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, callback: msRest.ServiceCallback<Models.DataSetUnion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param dataSetName The name of the dataSet.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSetUnion>): void;
  get(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSetUnion>, callback?: msRest.ServiceCallback<Models.DataSetUnion>): Promise<Models.DataSetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        dataSetName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataSetsGetResponse>;
  }

  /**
   * Create a DataSet
   * @summary Adds a new data set to an existing share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to add the data set to.
   * @param dataSetName The name of the dataSet.
   * @param dataSet The new data set information.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, dataSet: Models.DataSetUnion, options?: msRest.RequestOptionsBase): Promise<Models.DataSetsCreateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to add the data set to.
   * @param dataSetName The name of the dataSet.
   * @param dataSet The new data set information.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, dataSet: Models.DataSetUnion, callback: msRest.ServiceCallback<Models.DataSetUnion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to add the data set to.
   * @param dataSetName The name of the dataSet.
   * @param dataSet The new data set information.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, dataSet: Models.DataSetUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSetUnion>): void;
  create(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, dataSet: Models.DataSetUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSetUnion>, callback?: msRest.ServiceCallback<Models.DataSetUnion>): Promise<Models.DataSetsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        dataSetName,
        dataSet,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.DataSetsCreateResponse>;
  }

  /**
   * Delete a DataSet in a share
   * @summary Delete DataSet in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param dataSetName The name of the dataSet.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,shareName,dataSetName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List DataSets in a share
   * @summary List DataSets in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetsListByShareResponse>
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.DataSetsListByShareOptionalParams): Promise<Models.DataSetsListByShareResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.DataSetList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options: Models.DataSetsListByShareOptionalParams, callback: msRest.ServiceCallback<Models.DataSetList>): void;
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.DataSetsListByShareOptionalParams | msRest.ServiceCallback<Models.DataSetList>, callback?: msRest.ServiceCallback<Models.DataSetList>): Promise<Models.DataSetsListByShareResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      listByShareOperationSpec,
      callback) as Promise<Models.DataSetsListByShareResponse>;
  }

  /**
   * Delete a DataSet in a share
   * @summary Delete DataSet in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param dataSetName The name of the dataSet.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, shareName: string, dataSetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        dataSetName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List DataSets in a share
   * @summary List DataSets in a share.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSetsListByShareNextResponse>
   */
  listByShareNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DataSetsListByShareNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataSetList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataSetList>): void;
  listByShareNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataSetList>, callback?: msRest.ServiceCallback<Models.DataSetList>): Promise<Models.DataSetsListByShareNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByShareNextOperationSpec,
      callback) as Promise<Models.DataSetsListByShareNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.dataSetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSet
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.dataSetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "dataSet",
    mapper: {
      ...Mappers.DataSet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataSet
    },
    201: {
      bodyMapper: Mappers.DataSet
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets",
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
      bodyMapper: Mappers.DataSetList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.dataSetName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSetList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

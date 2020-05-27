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
import * as Mappers from "../models/spatialAnchorsAccountsMappers";
import * as Parameters from "../models/parameters";
import { MixedRealityClientContext } from "../mixedRealityClientContext";

/** Class representing a SpatialAnchorsAccounts. */
export class SpatialAnchorsAccounts {
  private readonly client: MixedRealityClientContext;

  /**
   * Create a SpatialAnchorsAccounts.
   * @param {MixedRealityClientContext} client Reference to the service client.
   */
  constructor(client: MixedRealityClientContext) {
    this.client = client;
  }

  /**
   * List Spatial Anchors Accounts by Subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): Promise<Models.SpatialAnchorsAccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsListBySubscriptionResponse>;
  }

  /**
   * List Resources by Resource Group
   * @param resourceGroupName Name of an Azure resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): Promise<Models.SpatialAnchorsAccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsListByResourceGroupResponse>;
  }

  /**
   * Delete a Spatial Anchors Account.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
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
   * Retrieve a Spatial Anchors Account.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccount>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): Promise<Models.SpatialAnchorsAccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsGetResponse>;
  }

  /**
   * Updating a Spatial Anchors Account
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param spatialAnchorsAccount Spatial Anchors Account parameter.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param spatialAnchorsAccount Spatial Anchors Account parameter.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param spatialAnchorsAccount Spatial Anchors Account parameter.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): void;
  update(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccount>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): Promise<Models.SpatialAnchorsAccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        spatialAnchorsAccount,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsUpdateResponse>;
  }

  /**
   * Creating or Updating a Spatial Anchors Account.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param spatialAnchorsAccount Spatial Anchors Account parameter.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsCreateResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param spatialAnchorsAccount Spatial Anchors Account parameter.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param spatialAnchorsAccount Spatial Anchors Account parameter.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): void;
  create(resourceGroupName: string, accountName: string, spatialAnchorsAccount: Models.SpatialAnchorsAccount, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccount>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccount>): Promise<Models.SpatialAnchorsAccountsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        spatialAnchorsAccount,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsCreateResponse>;
  }

  /**
   * List Both of the 2 Keys of a Spatial Anchors Account
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsListKeysResponse>
   */
  listKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsListKeysResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.AccountKeys>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountKeys>): void;
  listKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountKeys>, callback?: msRest.ServiceCallback<Models.AccountKeys>): Promise<Models.SpatialAnchorsAccountsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsListKeysResponse>;
  }

  /**
   * Regenerate specified Key of a Spatial Anchors Account
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param regenerate Required information for key regeneration.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsRegenerateKeysResponse>
   */
  regenerateKeys(resourceGroupName: string, accountName: string, regenerate: Models.AccountKeyRegenerateRequest, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsRegenerateKeysResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param regenerate Required information for key regeneration.
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, accountName: string, regenerate: Models.AccountKeyRegenerateRequest, callback: msRest.ServiceCallback<Models.AccountKeys>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param regenerate Required information for key regeneration.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, accountName: string, regenerate: Models.AccountKeyRegenerateRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountKeys>): void;
  regenerateKeys(resourceGroupName: string, accountName: string, regenerate: Models.AccountKeyRegenerateRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountKeys>, callback?: msRest.ServiceCallback<Models.AccountKeys>): Promise<Models.SpatialAnchorsAccountsRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        regenerate,
        options
      },
      regenerateKeysOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsRegenerateKeysResponse>;
  }

  /**
   * List Spatial Anchors Accounts by Subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): Promise<Models.SpatialAnchorsAccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsListBySubscriptionNextResponse>;
  }

  /**
   * List Resources by Resource Group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpatialAnchorsAccountsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SpatialAnchorsAccountsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>, callback?: msRest.ServiceCallback<Models.SpatialAnchorsAccountPage>): Promise<Models.SpatialAnchorsAccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.SpatialAnchorsAccountsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MixedReality/spatialAnchorsAccounts",
  urlParameters: [
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
      bodyMapper: Mappers.SpatialAnchorsAccountPage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SpatialAnchorsAccountPage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SpatialAnchorsAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "spatialAnchorsAccount",
    mapper: {
      ...Mappers.SpatialAnchorsAccount,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SpatialAnchorsAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "spatialAnchorsAccount",
    mapper: {
      ...Mappers.SpatialAnchorsAccount,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SpatialAnchorsAccount
    },
    201: {
      bodyMapper: Mappers.SpatialAnchorsAccount
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{accountName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/spatialAnchorsAccounts/{accountName}/regenerateKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "regenerate",
    mapper: {
      ...Mappers.AccountKeyRegenerateRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccountKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SpatialAnchorsAccountPage
    },
    default: {
      bodyMapper: Mappers.CloudError
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SpatialAnchorsAccountPage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

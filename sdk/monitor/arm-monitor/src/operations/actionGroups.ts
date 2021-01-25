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
import * as Mappers from "../models/actionGroupsMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a ActionGroups. */
export class ActionGroups {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a ActionGroups.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Create a new action group or update an existing one.
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param actionGroup The action group to create or use for the update.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActionGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, actionGroupName: string, actionGroup: Models.ActionGroupResource, options?: msRest.RequestOptionsBase): Promise<Models.ActionGroupsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param actionGroup The action group to create or use for the update.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, actionGroupName: string, actionGroup: Models.ActionGroupResource, callback: msRest.ServiceCallback<Models.ActionGroupResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param actionGroup The action group to create or use for the update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, actionGroupName: string, actionGroup: Models.ActionGroupResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActionGroupResource>): void;
  createOrUpdate(resourceGroupName: string, actionGroupName: string, actionGroup: Models.ActionGroupResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActionGroupResource>, callback?: msRest.ServiceCallback<Models.ActionGroupResource>): Promise<Models.ActionGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        actionGroupName,
        actionGroup,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ActionGroupsCreateOrUpdateResponse>;
  }

  /**
   * Get an action group.
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActionGroupsGetResponse>
   */
  get(resourceGroupName: string, actionGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ActionGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param callback The callback
   */
  get(resourceGroupName: string, actionGroupName: string, callback: msRest.ServiceCallback<Models.ActionGroupResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, actionGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActionGroupResource>): void;
  get(resourceGroupName: string, actionGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActionGroupResource>, callback?: msRest.ServiceCallback<Models.ActionGroupResource>): Promise<Models.ActionGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        actionGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ActionGroupsGetResponse>;
  }

  /**
   * Delete an action group.
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, actionGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, actionGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, actionGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, actionGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        actionGroupName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param actionGroupPatch Parameters supplied to the operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActionGroupsUpdateResponse>
   */
  update(resourceGroupName: string, actionGroupName: string, actionGroupPatch: Models.ActionGroupPatchBody, options?: msRest.RequestOptionsBase): Promise<Models.ActionGroupsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param actionGroupPatch Parameters supplied to the operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, actionGroupName: string, actionGroupPatch: Models.ActionGroupPatchBody, callback: msRest.ServiceCallback<Models.ActionGroupResource>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param actionGroupPatch Parameters supplied to the operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, actionGroupName: string, actionGroupPatch: Models.ActionGroupPatchBody, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActionGroupResource>): void;
  update(resourceGroupName: string, actionGroupName: string, actionGroupPatch: Models.ActionGroupPatchBody, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActionGroupResource>, callback?: msRest.ServiceCallback<Models.ActionGroupResource>): Promise<Models.ActionGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        actionGroupName,
        actionGroupPatch,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ActionGroupsUpdateResponse>;
  }

  /**
   * Get a list of all action groups in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActionGroupsListBySubscriptionIdResponse>
   */
  listBySubscriptionId(options?: msRest.RequestOptionsBase): Promise<Models.ActionGroupsListBySubscriptionIdResponse>;
  /**
   * @param callback The callback
   */
  listBySubscriptionId(callback: msRest.ServiceCallback<Models.ActionGroupList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionId(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActionGroupList>): void;
  listBySubscriptionId(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActionGroupList>, callback?: msRest.ServiceCallback<Models.ActionGroupList>): Promise<Models.ActionGroupsListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionIdOperationSpec,
      callback) as Promise<Models.ActionGroupsListBySubscriptionIdResponse>;
  }

  /**
   * Get a list of all action groups in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActionGroupsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ActionGroupsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ActionGroupList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActionGroupList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActionGroupList>, callback?: msRest.ServiceCallback<Models.ActionGroupList>): Promise<Models.ActionGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ActionGroupsListByResourceGroupResponse>;
  }

  /**
   * Enable a receiver in an action group. This changes the receiver's status from Disabled to
   * Enabled.
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param receiverName The name of the receiver to resubscribe.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enableReceiver(resourceGroupName: string, actionGroupName: string, receiverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param receiverName The name of the receiver to resubscribe.
   * @param callback The callback
   */
  enableReceiver(resourceGroupName: string, actionGroupName: string, receiverName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param actionGroupName The name of the action group.
   * @param receiverName The name of the receiver to resubscribe.
   * @param options The optional parameters
   * @param callback The callback
   */
  enableReceiver(resourceGroupName: string, actionGroupName: string, receiverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  enableReceiver(resourceGroupName: string, actionGroupName: string, receiverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        actionGroupName,
        receiverName,
        options
      },
      enableReceiverOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "actionGroup",
    mapper: {
      ...Mappers.ActionGroupResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource
    },
    201: {
      bodyMapper: Mappers.ActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
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
      bodyMapper: Mappers.ActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.actionGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "actionGroupPatch",
    mapper: {
      ...Mappers.ActionGroupPatchBody,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/microsoft.insights/actionGroups",
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
      bodyMapper: Mappers.ActionGroupList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.ActionGroupList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const enableReceiverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}/subscribe",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
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
      receiverName: "receiverName"
    },
    mapper: {
      ...Mappers.EnableRequest,
      required: true
    }
  },
  responses: {
    200: {},
    409: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

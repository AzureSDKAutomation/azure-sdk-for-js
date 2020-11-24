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
import * as Mappers from "../models/rolloutsMappers";
import * as Parameters from "../models/parameters";
import { AzureDeploymentManagerContext } from "../azureDeploymentManagerContext";

/** Class representing a Rollouts. */
export class Rollouts {
  private readonly client: AzureDeploymentManagerContext;

  /**
   * Create a Rollouts.
   * @param {AzureDeploymentManagerContext} client Reference to the service client.
   */
  constructor(client: AzureDeploymentManagerContext) {
    this.client = client;
  }

  /**
   * This is an asynchronous operation and can be polled to completion using the location header
   * returned by this operation.
   * @summary Creates or updates a rollout.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RolloutsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, rolloutName: string, options?: Models.RolloutsCreateOrUpdateOptionalParams): Promise<Models.RolloutsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,rolloutName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RolloutsCreateOrUpdateResponse>;
  }

  /**
   * @summary Gets detailed information of a rollout.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RolloutsGetResponse>
   */
  get(resourceGroupName: string, rolloutName: string, options?: Models.RolloutsGetOptionalParams): Promise<Models.RolloutsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param callback The callback
   */
  get(resourceGroupName: string, rolloutName: string, callback: msRest.ServiceCallback<Models.Rollout>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, rolloutName: string, options: Models.RolloutsGetOptionalParams, callback: msRest.ServiceCallback<Models.Rollout>): void;
  get(resourceGroupName: string, rolloutName: string, options?: Models.RolloutsGetOptionalParams | msRest.ServiceCallback<Models.Rollout>, callback?: msRest.ServiceCallback<Models.Rollout>): Promise<Models.RolloutsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        rolloutName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RolloutsGetResponse>;
  }

  /**
   * Only rollouts in terminal state can be deleted.
   * @summary Deletes a rollout resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, rolloutName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, rolloutName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, rolloutName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, rolloutName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        rolloutName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Only running rollouts can be canceled.
   * @summary Stops a running rollout.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RolloutsCancelResponse>
   */
  cancel(resourceGroupName: string, rolloutName: string, options?: msRest.RequestOptionsBase): Promise<Models.RolloutsCancelResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param callback The callback
   */
  cancel(resourceGroupName: string, rolloutName: string, callback: msRest.ServiceCallback<Models.Rollout>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(resourceGroupName: string, rolloutName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Rollout>): void;
  cancel(resourceGroupName: string, rolloutName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Rollout>, callback?: msRest.ServiceCallback<Models.Rollout>): Promise<Models.RolloutsCancelResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        rolloutName,
        options
      },
      cancelOperationSpec,
      callback) as Promise<Models.RolloutsCancelResponse>;
  }

  /**
   * Only failed rollouts can be restarted.
   * @summary Restarts a failed rollout and optionally skips all succeeded steps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RolloutsRestartResponse>
   */
  restart(resourceGroupName: string, rolloutName: string, options?: Models.RolloutsRestartOptionalParams): Promise<Models.RolloutsRestartResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param callback The callback
   */
  restart(resourceGroupName: string, rolloutName: string, callback: msRest.ServiceCallback<Models.Rollout>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param options The optional parameters
   * @param callback The callback
   */
  restart(resourceGroupName: string, rolloutName: string, options: Models.RolloutsRestartOptionalParams, callback: msRest.ServiceCallback<Models.Rollout>): void;
  restart(resourceGroupName: string, rolloutName: string, options?: Models.RolloutsRestartOptionalParams | msRest.ServiceCallback<Models.Rollout>, callback?: msRest.ServiceCallback<Models.Rollout>): Promise<Models.RolloutsRestartResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        rolloutName,
        options
      },
      restartOperationSpec,
      callback) as Promise<Models.RolloutsRestartResponse>;
  }

  /**
   * @summary Lists the rollouts in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.RolloutsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.RolloutsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.Rollout[]>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Rollout[]>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Rollout[]>, callback?: msRest.ServiceCallback<Models.Rollout[]>): Promise<Models.RolloutsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RolloutsListResponse>;
  }

  /**
   * This is an asynchronous operation and can be polled to completion using the location header
   * returned by this operation.
   * @summary Creates or updates a rollout.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param rolloutName The rollout name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, rolloutName: string, options?: Models.RolloutsBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        rolloutName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.rolloutName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.retryAttempt
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Rollout
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.rolloutName
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

const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}/cancel",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.rolloutName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Rollout
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const restartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}/restart",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.rolloutName
  ],
  queryParameters: [
    Parameters.skipSucceeded,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Rollout
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts",
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
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rollout"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeploymentManager/rollouts/{rolloutName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.rolloutName
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
      "rolloutRequest"
    ],
    mapper: Mappers.RolloutRequest
  },
  responses: {
    201: {
      bodyMapper: Mappers.RolloutRequest,
      headersMapper: Mappers.RolloutsCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.RolloutsCreateOrUpdateHeaders
    }
  },
  serializer
};

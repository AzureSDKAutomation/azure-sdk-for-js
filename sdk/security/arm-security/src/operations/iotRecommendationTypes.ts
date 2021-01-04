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
import * as Mappers from "../models/iotRecommendationTypesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a IotRecommendationTypes. */
export class IotRecommendationTypes {
  private readonly client: SecurityCenterContext;

  /**
   * Create a IotRecommendationTypes.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List IoT recommendation types
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param [options] The optional parameters
   * @returns Promise<Models.IotRecommendationTypesListResponse>
   */
  list(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotRecommendationTypesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, callback: msRest.ServiceCallback<Models.IotRecommendationTypeList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, solutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotRecommendationTypeList>): void;
  list(resourceGroupName: string, solutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotRecommendationTypeList>, callback?: msRest.ServiceCallback<Models.IotRecommendationTypeList>): Promise<Models.IotRecommendationTypesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IotRecommendationTypesListResponse>;
  }

  /**
   * Get IoT recommendation type
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotRecommendationTypeName Name of the recommendation type
   * @param [options] The optional parameters
   * @returns Promise<Models.IotRecommendationTypesGetResponse>
   */
  get(resourceGroupName: string, solutionName: string, iotRecommendationTypeName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotRecommendationTypesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotRecommendationTypeName Name of the recommendation type
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotRecommendationTypeName: string, callback: msRest.ServiceCallback<Models.IotRecommendationType>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotRecommendationTypeName Name of the recommendation type
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, solutionName: string, iotRecommendationTypeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotRecommendationType>): void;
  get(resourceGroupName: string, solutionName: string, iotRecommendationTypeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotRecommendationType>, callback?: msRest.ServiceCallback<Models.IotRecommendationType>): Promise<Models.IotRecommendationTypesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        iotRecommendationTypeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IotRecommendationTypesGetResponse>;
  }

  /**
   * List IoT recommendation types
   * @param [options] The optional parameters
   * @returns Promise<Models.IotRecommendationTypesListAtSubscriptionScopeResponse>
   */
  listAtSubscriptionScope(options?: msRest.RequestOptionsBase): Promise<Models.IotRecommendationTypesListAtSubscriptionScopeResponse>;
  /**
   * @param callback The callback
   */
  listAtSubscriptionScope(callback: msRest.ServiceCallback<Models.IotRecommendationTypeList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAtSubscriptionScope(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotRecommendationTypeList>): void;
  listAtSubscriptionScope(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotRecommendationTypeList>, callback?: msRest.ServiceCallback<Models.IotRecommendationTypeList>): Promise<Models.IotRecommendationTypesListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAtSubscriptionScopeOperationSpec,
      callback) as Promise<Models.IotRecommendationTypesListAtSubscriptionScopeResponse>;
  }

  /**
   * Get IoT recommendation type
   * @param iotRecommendationTypeName Name of the recommendation type
   * @param [options] The optional parameters
   * @returns Promise<Models.IotRecommendationTypesGetAtSubscriptionScopeResponse>
   */
  getAtSubscriptionScope(iotRecommendationTypeName: string, options?: msRest.RequestOptionsBase): Promise<Models.IotRecommendationTypesGetAtSubscriptionScopeResponse>;
  /**
   * @param iotRecommendationTypeName Name of the recommendation type
   * @param callback The callback
   */
  getAtSubscriptionScope(iotRecommendationTypeName: string, callback: msRest.ServiceCallback<Models.IotRecommendationType>): void;
  /**
   * @param iotRecommendationTypeName Name of the recommendation type
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtSubscriptionScope(iotRecommendationTypeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotRecommendationType>): void;
  getAtSubscriptionScope(iotRecommendationTypeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotRecommendationType>, callback?: msRest.ServiceCallback<Models.IotRecommendationType>): Promise<Models.IotRecommendationTypesGetAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      {
        iotRecommendationTypeName,
        options
      },
      getAtSubscriptionScopeOperationSpec,
      callback) as Promise<Models.IotRecommendationTypesGetAtSubscriptionScopeResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotRecommendationTypes",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotRecommendationTypeList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/iotRecommendationTypes/{iotRecommendationTypeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
    Parameters.iotRecommendationTypeName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotRecommendationType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtSubscriptionScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotRecommendationTypes",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotRecommendationTypeList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getAtSubscriptionScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/iotRecommendationTypes/{iotRecommendationTypeName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.iotRecommendationTypeName
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IotRecommendationType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/suppressionsMappers";
import * as Parameters from "../models/parameters";
import { AdvisorManagementClientContext } from "../advisorManagementClientContext";

/** Class representing a Suppressions. */
export class Suppressions {
  private readonly client: AdvisorManagementClientContext;

  /**
   * Create a Suppressions.
   * @param {AdvisorManagementClientContext} client Reference to the service client.
   */
  constructor(client: AdvisorManagementClientContext) {
    this.client = client;
  }

  /**
   * Obtains the details of a suppression.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param [options] The optional parameters
   * @returns Promise<Models.SuppressionsGetResponse>
   */
  get(resourceUri: string, recommendationId: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.SuppressionsGetResponse>;
  /**
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param callback The callback
   */
  get(resourceUri: string, recommendationId: string, name: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceUri: string, recommendationId: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  get(resourceUri: string, recommendationId: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SuppressionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        recommendationId,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SuppressionsGetResponse>;
  }

  /**
   * Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed
   * attribute is referred to as a suppression. Use this API to create or update the snoozed or
   * dismissed status of a recommendation.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param suppressionContract The snoozed or dismissed attribute; for example, the snooze duration.
   * @param [options] The optional parameters
   * @returns Promise<Models.SuppressionsCreateResponse>
   */
  create(resourceUri: string, recommendationId: string, name: string, suppressionContract: Models.SuppressionContract, options?: msRest.RequestOptionsBase): Promise<Models.SuppressionsCreateResponse>;
  /**
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param suppressionContract The snoozed or dismissed attribute; for example, the snooze duration.
   * @param callback The callback
   */
  create(resourceUri: string, recommendationId: string, name: string, suppressionContract: Models.SuppressionContract, callback: msRest.ServiceCallback<Models.SuppressionContract>): void;
  /**
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param suppressionContract The snoozed or dismissed attribute; for example, the snooze duration.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceUri: string, recommendationId: string, name: string, suppressionContract: Models.SuppressionContract, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SuppressionContract>): void;
  create(resourceUri: string, recommendationId: string, name: string, suppressionContract: Models.SuppressionContract, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SuppressionContract>, callback?: msRest.ServiceCallback<Models.SuppressionContract>): Promise<Models.SuppressionsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        recommendationId,
        name,
        suppressionContract,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SuppressionsCreateResponse>;
  }

  /**
   * Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed
   * attribute of a recommendation is referred to as a suppression.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceUri: string, recommendationId: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param callback The callback
   */
  deleteMethod(resourceUri: string, recommendationId: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to
   * which the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceUri: string, recommendationId: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceUri: string, recommendationId: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        recommendationId,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or
   * dismissed attribute of a recommendation is referred to as a suppression.
   * @param [options] The optional parameters
   * @returns Promise<Models.SuppressionsListResponse>
   */
  list(options?: Models.SuppressionsListOptionalParams): Promise<Models.SuppressionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SuppressionContractListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.SuppressionsListOptionalParams, callback: msRest.ServiceCallback<Models.SuppressionContractListResult>): void;
  list(options?: Models.SuppressionsListOptionalParams | msRest.ServiceCallback<Models.SuppressionContractListResult>, callback?: msRest.ServiceCallback<Models.SuppressionContractListResult>): Promise<Models.SuppressionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SuppressionsListResponse>;
  }

  /**
   * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or
   * dismissed attribute of a recommendation is referred to as a suppression.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SuppressionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.SuppressionsListNextOptionalParams): Promise<Models.SuppressionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SuppressionContractListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.SuppressionsListNextOptionalParams, callback: msRest.ServiceCallback<Models.SuppressionContractListResult>): void;
  listNext(nextPageLink: string, options?: Models.SuppressionsListNextOptionalParams | msRest.ServiceCallback<Models.SuppressionContractListResult>, callback?: msRest.ServiceCallback<Models.SuppressionContractListResult>): Promise<Models.SuppressionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SuppressionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  urlParameters: [
    Parameters.resourceUri,
    Parameters.recommendationId,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContract
    },
    404: {
      bodyMapper: Mappers.ARMErrorResponseBody
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  urlParameters: [
    Parameters.resourceUri,
    Parameters.recommendationId,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "suppressionContract",
    mapper: {
      ...Mappers.SuppressionContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContract
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  urlParameters: [
    Parameters.resourceUri,
    Parameters.recommendationId,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Advisor/suppressions",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContractListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContractListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

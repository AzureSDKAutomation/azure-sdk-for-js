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
import * as Mappers from "../models/quotaByPeriodKeysMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a QuotaByPeriodKeys. */
export class QuotaByPeriodKeys {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a QuotaByPeriodKeys.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the value of the quota counter associated with the counter-key in the policy for the
   * specific period in service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
   * counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo"
   * in the policy, then it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   * @param quotaPeriodKey Quota period key identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaByPeriodKeysGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaByPeriodKeysGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
   * counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo"
   * in the policy, then it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   * @param quotaPeriodKey Quota period key identifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, callback: msRest.ServiceCallback<Models.QuotaCounterContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
   * counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo"
   * in the policy, then it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   * @param quotaPeriodKey Quota period key identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QuotaCounterContract>): void;
  get(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QuotaCounterContract>, callback?: msRest.ServiceCallback<Models.QuotaCounterContract>): Promise<Models.QuotaByPeriodKeysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        quotaCounterKey,
        quotaPeriodKey,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.QuotaByPeriodKeysGetResponse>;
  }

  /**
   * Updates an existing quota counter value in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
   * counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo"
   * in the policy, then it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   * @param quotaPeriodKey Quota period key identifier.
   * @param parameters The value of the Quota counter to be applied on the specified period.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaByPeriodKeysUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, parameters: Models.QuotaCounterValueUpdateContract, options?: msRest.RequestOptionsBase): Promise<Models.QuotaByPeriodKeysUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
   * counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo"
   * in the policy, then it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   * @param quotaPeriodKey Quota period key identifier.
   * @param parameters The value of the Quota counter to be applied on the specified period.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, parameters: Models.QuotaCounterValueUpdateContract, callback: msRest.ServiceCallback<Models.QuotaCounterContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
   * counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo"
   * in the policy, then it’s accessible by "boo" counter key. But if it’s defined as
   * counter-key="@("b"+"a")" then it will be accessible by "ba" key
   * @param quotaPeriodKey Quota period key identifier.
   * @param parameters The value of the Quota counter to be applied on the specified period.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, parameters: Models.QuotaCounterValueUpdateContract, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QuotaCounterContract>): void;
  update(resourceGroupName: string, serviceName: string, quotaCounterKey: string, quotaPeriodKey: string, parameters: Models.QuotaCounterValueUpdateContract, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QuotaCounterContract>, callback?: msRest.ServiceCallback<Models.QuotaCounterContract>): Promise<Models.QuotaByPeriodKeysUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        quotaCounterKey,
        quotaPeriodKey,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.QuotaByPeriodKeysUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/quotas/{quotaCounterKey}/periods/{quotaPeriodKey}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.quotaCounterKey,
    Parameters.quotaPeriodKey,
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
      bodyMapper: Mappers.QuotaCounterContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/quotas/{quotaCounterKey}/periods/{quotaPeriodKey}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.quotaCounterKey,
    Parameters.quotaPeriodKey,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.QuotaCounterValueUpdateContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QuotaCounterContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

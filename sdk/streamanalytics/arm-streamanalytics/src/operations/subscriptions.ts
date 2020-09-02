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
import * as Mappers from "../models/subscriptionsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a Subscriptions. */
export class Subscriptions {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a Subscriptions.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the subscription's current quota information in a particular region.
   * @param location The region in which to retrieve the subscription's quota information. You can
   * find out which regions Azure Stream Analytics is supported in here:
   * https://azure.microsoft.com/en-us/regions/
   * @param [options] The optional parameters
   * @returns Promise<Models.SubscriptionsListQuotasResponse>
   */
  listQuotas(location: string, options?: msRest.RequestOptionsBase): Promise<Models.SubscriptionsListQuotasResponse>;
  /**
   * @param location The region in which to retrieve the subscription's quota information. You can
   * find out which regions Azure Stream Analytics is supported in here:
   * https://azure.microsoft.com/en-us/regions/
   * @param callback The callback
   */
  listQuotas(location: string, callback: msRest.ServiceCallback<Models.SubscriptionQuotasListResult>): void;
  /**
   * @param location The region in which to retrieve the subscription's quota information. You can
   * find out which regions Azure Stream Analytics is supported in here:
   * https://azure.microsoft.com/en-us/regions/
   * @param options The optional parameters
   * @param callback The callback
   */
  listQuotas(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionQuotasListResult>): void;
  listQuotas(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SubscriptionQuotasListResult>, callback?: msRest.ServiceCallback<Models.SubscriptionQuotasListResult>): Promise<Models.SubscriptionsListQuotasResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listQuotasOperationSpec,
      callback) as Promise<Models.SubscriptionsListQuotasResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listQuotasOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/quotas",
  urlParameters: [
    Parameters.location,
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
      bodyMapper: Mappers.SubscriptionQuotasListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

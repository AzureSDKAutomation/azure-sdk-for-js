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
import * as Mappers from "../models/locationBasedRecommendedActionSessionsOperationStatusMappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementClientContext } from "../mySQLManagementClientContext";

/** Class representing a LocationBasedRecommendedActionSessionsOperationStatus. */
export class LocationBasedRecommendedActionSessionsOperationStatus {
  private readonly client: MySQLManagementClientContext;

  /**
   * Create a LocationBasedRecommendedActionSessionsOperationStatus.
   * @param {MySQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: MySQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Recommendation action session operation status.
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationBasedRecommendedActionSessionsOperationStatusGetResponse>
   */
  get(locationName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationBasedRecommendedActionSessionsOperationStatusGetResponse>;
  /**
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param callback The callback
   */
  get(locationName: string, operationId: string, callback: msRest.ServiceCallback<Models.RecommendedActionSessionsOperationStatus>): void;
  /**
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(locationName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendedActionSessionsOperationStatus>): void;
  get(locationName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendedActionSessionsOperationStatus>, callback?: msRest.ServiceCallback<Models.RecommendedActionSessionsOperationStatus>): Promise<Models.LocationBasedRecommendedActionSessionsOperationStatusGetResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LocationBasedRecommendedActionSessionsOperationStatusGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/recommendedActionSessionsAzureAsyncOperation/{operationId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendedActionSessionsOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

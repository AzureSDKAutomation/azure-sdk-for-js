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
import * as Mappers from "../models/operationResultsMappers";
import * as Parameters from "../models/parameters";
import { HealthcareApisManagementClientContext } from "../healthcareApisManagementClientContext";

/** Class representing a OperationResults. */
export class OperationResults {
  private readonly client: HealthcareApisManagementClientContext;

  /**
   * Create a OperationResults.
   * @param {HealthcareApisManagementClientContext} client Reference to the service client.
   */
  constructor(client: HealthcareApisManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the operation result for a long running operation.
   * @param locationName The location of the operation.
   * @param operationResultId The ID of the operation result to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationResultsGetResponse>
   */
  get(locationName: string, operationResultId: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationResultsGetResponse>;
  /**
   * @param locationName The location of the operation.
   * @param operationResultId The ID of the operation result to get.
   * @param callback The callback
   */
  get(locationName: string, operationResultId: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param locationName The location of the operation.
   * @param operationResultId The ID of the operation result to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(locationName: string, operationResultId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  get(locationName: string, operationResultId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.OperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        operationResultId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OperationResultsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/locations/{locationName}/operationresults/{operationResultId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.operationResultId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationResultsDescription
    },
    404: {
      bodyMapper: Mappers.ErrorDetails
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

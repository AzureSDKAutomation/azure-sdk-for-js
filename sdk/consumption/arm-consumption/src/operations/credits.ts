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
import * as Mappers from "../models/creditsMappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";

/** Class representing a Credits. */
export class Credits {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Create a Credits.
   * @param {ConsumptionManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * The credit summary by billingAccountId and billingProfileId.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.CreditsGetResponse>
   */
  get(billingAccountId: string, billingProfileId: string, options?: msRest.RequestOptionsBase): Promise<Models.CreditsGetResponse>;
  /**
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param callback The callback
   */
  get(billingAccountId: string, billingProfileId: string, callback: msRest.ServiceCallback<Models.CreditSummary>): void;
  /**
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountId: string, billingProfileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CreditSummary>): void;
  get(billingAccountId: string, billingProfileId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CreditSummary>, callback?: msRest.ServiceCallback<Models.CreditSummary>): Promise<Models.CreditsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountId,
        billingProfileId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CreditsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/credits/balanceSummary",
  urlParameters: [
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CreditSummary
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

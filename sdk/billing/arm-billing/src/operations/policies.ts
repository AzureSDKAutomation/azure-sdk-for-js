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
import * as Mappers from "../models/policiesMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Policies. */
export class Policies {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Policies.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the policies for a billing profile. This operation is supported only for billing accounts
   * with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesGetByBillingProfileResponse>
   */
  getByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesGetByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param callback The callback
   */
  getByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.Policy>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByBillingProfile(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Policy>): void;
  getByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Policy>, callback?: msRest.ServiceCallback<Models.Policy>): Promise<Models.PoliciesGetByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      getByBillingProfileOperationSpec,
      callback) as Promise<Models.PoliciesGetByBillingProfileResponse>;
  }

  /**
   * Updates the policies for a billing profile. This operation is supported only for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param parameters Request parameters that are provided to the update policies operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesUpdateResponse>
   */
  update(billingAccountName: string, billingProfileName: string, parameters: Models.Policy, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesUpdateResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param parameters Request parameters that are provided to the update policies operation.
   * @param callback The callback
   */
  update(billingAccountName: string, billingProfileName: string, parameters: Models.Policy, callback: msRest.ServiceCallback<Models.Policy>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param parameters Request parameters that are provided to the update policies operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(billingAccountName: string, billingProfileName: string, parameters: Models.Policy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Policy>): void;
  update(billingAccountName: string, billingProfileName: string, parameters: Models.Policy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Policy>, callback?: msRest.ServiceCallback<Models.Policy>): Promise<Models.PoliciesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PoliciesUpdateResponse>;
  }

  /**
   * Lists the policies for a customer. This operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesGetByCustomerResponse>
   */
  getByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesGetByCustomerResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param callback The callback
   */
  getByCustomer(billingAccountName: string, customerName: string, callback: msRest.ServiceCallback<Models.CustomerPolicy>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByCustomer(billingAccountName: string, customerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomerPolicy>): void;
  getByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomerPolicy>, callback?: msRest.ServiceCallback<Models.CustomerPolicy>): Promise<Models.PoliciesGetByCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        options
      },
      getByCustomerOperationSpec,
      callback) as Promise<Models.PoliciesGetByCustomerResponse>;
  }

  /**
   * Updates the policies for a customer. This operation is supported only for billing accounts with
   * agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesUpdateCustomerResponse>
   */
  updateCustomer(billingAccountName: string, customerName: string, options?: Models.PoliciesUpdateCustomerOptionalParams): Promise<Models.PoliciesUpdateCustomerResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param callback The callback
   */
  updateCustomer(billingAccountName: string, customerName: string, callback: msRest.ServiceCallback<Models.CustomerPolicy>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateCustomer(billingAccountName: string, customerName: string, options: Models.PoliciesUpdateCustomerOptionalParams, callback: msRest.ServiceCallback<Models.CustomerPolicy>): void;
  updateCustomer(billingAccountName: string, customerName: string, options?: Models.PoliciesUpdateCustomerOptionalParams | msRest.ServiceCallback<Models.CustomerPolicy>, callback?: msRest.ServiceCallback<Models.CustomerPolicy>): Promise<Models.PoliciesUpdateCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        options
      },
      updateCustomerOperationSpec,
      callback) as Promise<Models.PoliciesUpdateCustomerResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Policy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Policy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Policy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomerPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      viewCharges: [
        "options",
        "viewCharges"
      ]
    },
    mapper: {
      ...Mappers.CustomerPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CustomerPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

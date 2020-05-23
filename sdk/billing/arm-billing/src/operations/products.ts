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
import * as Mappers from "../models/productsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Products. */
export class Products {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Products.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the products for a customer. These don't include products billed based on usage.The
   * operation is supported only for billing accounts with agreement type Microsoft Partner
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByCustomerResponse>
   */
  listByCustomer(billingAccountName: string, customerName: string, options?: Models.ProductsListByCustomerOptionalParams): Promise<Models.ProductsListByCustomerResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, options: Models.ProductsListByCustomerOptionalParams, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByCustomer(billingAccountName: string, customerName: string, options?: Models.ProductsListByCustomerOptionalParams | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        options
      },
      listByCustomerOperationSpec,
      callback) as Promise<Models.ProductsListByCustomerResponse>;
  }

  /**
   * Gets a product by ID. The operation is supported only for billing accounts with agreement type
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param productName The ID that uniquely identifies a product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsGetByCustomerResponse>
   */
  getByCustomer(billingAccountName: string, customerName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsGetByCustomerResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param productName The ID that uniquely identifies a product.
   * @param callback The callback
   */
  getByCustomer(billingAccountName: string, customerName: string, productName: string, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param productName The ID that uniquely identifies a product.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByCustomer(billingAccountName: string, customerName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  getByCustomer(billingAccountName: string, customerName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsGetByCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        productName,
        options
      },
      getByCustomerOperationSpec,
      callback) as Promise<Models.ProductsGetByCustomerResponse>;
  }

  /**
   * Lists the products for a billing account. These don't include products billed based on usage.
   * The operation is supported for billing accounts with agreement type Microsoft Customer Agreement
   * or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: Models.ProductsListByBillingAccountOptionalParams): Promise<Models.ProductsListByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: Models.ProductsListByBillingAccountOptionalParams, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: Models.ProductsListByBillingAccountOptionalParams | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.ProductsListByBillingAccountResponse>;
  }

  /**
   * Lists the products for an invoice section. These don't include products billed based on usage.
   * The operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByInvoiceSectionResponse>
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: Models.ProductsListByInvoiceSectionOptionalParams): Promise<Models.ProductsListByInvoiceSectionResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options: Models.ProductsListByInvoiceSectionOptionalParams, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: Models.ProductsListByInvoiceSectionOptionalParams | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      },
      listByInvoiceSectionOperationSpec,
      callback) as Promise<Models.ProductsListByInvoiceSectionResponse>;
  }

  /**
   * Gets a product by ID. The operation is supported only for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsGetResponse>
   */
  get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsGetResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param callback The callback
   */
  get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  get(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        productName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProductsGetResponse>;
  }

  /**
   * Moves a product's charges to a new invoice section. The new invoice section must belong to the
   * same billing profile as the existing invoice section. This operation is supported only for
   * products that are purchased with a recurring charge and for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the transfer product operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsTransferResponse>
   */
  transfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, options?: msRest.RequestOptionsBase): Promise<Models.ProductsTransferResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the transfer product operation.
   * @param callback The callback
   */
  transfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the transfer product operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  transfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  transfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsTransferResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        productName,
        parameters,
        options
      },
      transferOperationSpec,
      callback) as Promise<Models.ProductsTransferResponse>;
  }

  /**
   * Validates if a product's charges can be moved to a new invoice section. This operation is
   * supported only for products that are purchased with a recurring charge and for billing accounts
   * with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the validate transfer eligibility
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsValidateTransferResponse>
   */
  validateTransfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, options?: msRest.RequestOptionsBase): Promise<Models.ProductsValidateTransferResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the validate transfer eligibility
   * operation.
   * @param callback The callback
   */
  validateTransfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, callback: msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the validate transfer eligibility
   * operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateTransfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>): void;
  validateTransfer(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, parameters: Models.TransferProductRequestProperties, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>, callback?: msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>): Promise<Models.ProductsValidateTransferResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        productName,
        parameters,
        options
      },
      validateTransferOperationSpec,
      callback) as Promise<Models.ProductsValidateTransferResponse>;
  }

  /**
   * Cancel auto renew for product by product id and invoice section name
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsUpdateAutoRenewByInvoiceSectionResponse>
   */
  updateAutoRenewByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, options?: Models.ProductsUpdateAutoRenewByInvoiceSectionOptionalParams): Promise<Models.ProductsUpdateAutoRenewByInvoiceSectionResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param callback The callback
   */
  updateAutoRenewByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, callback: msRest.ServiceCallback<Models.UpdateAutoRenewOperation>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param productName The ID that uniquely identifies a product.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateAutoRenewByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, options: Models.ProductsUpdateAutoRenewByInvoiceSectionOptionalParams, callback: msRest.ServiceCallback<Models.UpdateAutoRenewOperation>): void;
  updateAutoRenewByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, productName: string, options?: Models.ProductsUpdateAutoRenewByInvoiceSectionOptionalParams | msRest.ServiceCallback<Models.UpdateAutoRenewOperation>, callback?: msRest.ServiceCallback<Models.UpdateAutoRenewOperation>): Promise<Models.ProductsUpdateAutoRenewByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        productName,
        options
      },
      updateAutoRenewByInvoiceSectionOperationSpec,
      callback) as Promise<Models.ProductsUpdateAutoRenewByInvoiceSectionResponse>;
  }

  /**
   * Lists the products for a billing account. These don't include products billed based on usage.
   * The operation is supported for billing accounts with agreement type Microsoft Customer Agreement
   * or Microsoft Partner Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.ProductsListByBillingAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/products",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/products/{productName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const transferOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}/transfer",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.productName
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
      ...Mappers.TransferProductRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.ProductsTransferHeaders
    },
    202: {
      headersMapper: Mappers.ProductsTransferHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const validateTransferOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}/validateTransferEligibility",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.productName
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TransferProductRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidateProductTransferEligibilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateAutoRenewByInvoiceSectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products/{productName}/updateAutoRenew",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      autoRenew: [
        "options",
        "autoRenew"
      ]
    },
    mapper: {
      ...Mappers.UpdateAutoRenewRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.UpdateAutoRenewOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

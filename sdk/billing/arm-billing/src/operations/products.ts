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
  listByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListByCustomerResponse>;
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
  listByCustomer(billingAccountName: string, customerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByCustomerResponse> {
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
   * Lists the products for a billing profile. These don't include products billed based on usage.
   * The operation is supported for billing accounts with agreement type Microsoft Customer Agreement
   * or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: Models.ProductsListByBillingProfileOptionalParams): Promise<Models.ProductsListByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options: Models.ProductsListByBillingProfileOptionalParams, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: Models.ProductsListByBillingProfileOptionalParams | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.ProductsListByBillingProfileResponse>;
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
   * @param productName The ID that uniquely identifies a product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsGetResponse>
   */
  get(billingAccountName: string, productName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsGetResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param callback The callback
   */
  get(billingAccountName: string, productName: string, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, productName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  get(billingAccountName: string, productName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        productName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProductsGetResponse>;
  }

  /**
   * Updates the properties of a Product. Currently, auto renew can be updated. The operation is
   * supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the update product operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsUpdateResponse>
   */
  update(billingAccountName: string, productName: string, parameters: Models.Product, options?: msRest.RequestOptionsBase): Promise<Models.ProductsUpdateResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the update product operation.
   * @param callback The callback
   */
  update(billingAccountName: string, productName: string, parameters: Models.Product, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the update product operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(billingAccountName: string, productName: string, parameters: Models.Product, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Product>): void;
  update(billingAccountName: string, productName: string, parameters: Models.Product, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        productName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ProductsUpdateResponse>;
  }

  /**
   * Moves a product's charges to a new invoice section. The new invoice section must belong to the
   * same billing profile as the existing invoice section. This operation is supported only for
   * products that are purchased with a recurring charge and for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsMoveResponse>
   */
  move(billingAccountName: string, productName: string, options?: Models.ProductsMoveOptionalParams): Promise<Models.ProductsMoveResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param callback The callback
   */
  move(billingAccountName: string, productName: string, callback: msRest.ServiceCallback<Models.Product>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param options The optional parameters
   * @param callback The callback
   */
  move(billingAccountName: string, productName: string, options: Models.ProductsMoveOptionalParams, callback: msRest.ServiceCallback<Models.Product>): void;
  move(billingAccountName: string, productName: string, options?: Models.ProductsMoveOptionalParams | msRest.ServiceCallback<Models.Product>, callback?: msRest.ServiceCallback<Models.Product>): Promise<Models.ProductsMoveResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        productName,
        options
      },
      moveOperationSpec,
      callback) as Promise<Models.ProductsMoveResponse>;
  }

  /**
   * Validates if a product's charges can be moved to a new invoice section. This operation is
   * supported only for products that are purchased with a recurring charge and for billing accounts
   * with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsValidateMoveResponse>
   */
  validateMove(billingAccountName: string, productName: string, options?: Models.ProductsValidateMoveOptionalParams): Promise<Models.ProductsValidateMoveResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param callback The callback
   */
  validateMove(billingAccountName: string, productName: string, callback: msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateMove(billingAccountName: string, productName: string, options: Models.ProductsValidateMoveOptionalParams, callback: msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>): void;
  validateMove(billingAccountName: string, productName: string, options?: Models.ProductsValidateMoveOptionalParams | msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>, callback?: msRest.ServiceCallback<Models.ValidateProductTransferEligibilityResult>): Promise<Models.ProductsValidateMoveResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        productName,
        options
      },
      validateMoveOperationSpec,
      callback) as Promise<Models.ProductsValidateMoveResponse>;
  }

  /**
   * Lists the products for a customer. These don't include products billed based on usage.The
   * operation is supported only for billing accounts with agreement type Microsoft Partner
   * Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByCustomerNextResponse>
   */
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListByCustomerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByCustomerNextOperationSpec,
      callback) as Promise<Models.ProductsListByCustomerNextResponse>;
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

  /**
   * Lists the products for a billing profile. These don't include products billed based on usage.
   * The operation is supported for billing accounts with agreement type Microsoft Customer Agreement
   * or Microsoft Partner Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByBillingProfileNextResponse>
   */
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListByBillingProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingProfileNextOperationSpec,
      callback) as Promise<Models.ProductsListByBillingProfileNextResponse>;
  }

  /**
   * Lists the products for an invoice section. These don't include products billed based on usage.
   * The operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductsListByInvoiceSectionNextResponse>
   */
  listByInvoiceSectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductsListByInvoiceSectionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInvoiceSectionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSectionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductsListResult>): void;
  listByInvoiceSectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductsListResult>, callback?: msRest.ServiceCallback<Models.ProductsListResult>): Promise<Models.ProductsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInvoiceSectionNextOperationSpec,
      callback) as Promise<Models.ProductsListByInvoiceSectionNextResponse>;
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
    Parameters.apiVersion0
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

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion0,
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

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/products",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion0,
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
    Parameters.apiVersion0,
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
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion0
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

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.productName
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
      ...Mappers.Product,
      required: true
    }
  },
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

const moveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/move",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      destinationInvoiceSectionId: [
        "options",
        "destinationInvoiceSectionId"
      ]
    },
    mapper: {
      ...Mappers.TransferProductRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.ProductsMoveHeaders
    },
    202: {
      headersMapper: Mappers.ProductsMoveHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.ProductsMoveHeaders
    }
  },
  serializer
};

const validateMoveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/validateMoveEligibility",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.productName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      destinationInvoiceSectionId: [
        "options",
        "destinationInvoiceSectionId"
      ]
    },
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

const listByCustomerNextOperationSpec: msRest.OperationSpec = {
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

const listByBillingProfileNextOperationSpec: msRest.OperationSpec = {
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

const listByInvoiceSectionNextOperationSpec: msRest.OperationSpec = {
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
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
import * as Mappers from "../models/providerMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a Provider. */
export class Provider {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a Provider.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksResponse>
   */
  getAvailableStacks(options?: Models.ProviderGetAvailableStacksOptionalParams): Promise<Models.ProviderGetAvailableStacksResponse>;
  /**
   * @param callback The callback
   */
  getAvailableStacks(callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacks(options: Models.ProviderGetAvailableStacksOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacks(options?: Models.ProviderGetAvailableStacksOptionalParams | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAvailableStacksOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksResponse>;
  }

  /**
   * Description for Get available Function app frameworks and their versions
   * @summary Get available Function app frameworks and their versions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetFunctionAppStacksResponse>
   */
  getFunctionAppStacks(options?: Models.ProviderGetFunctionAppStacksOptionalParams): Promise<Models.ProviderGetFunctionAppStacksResponse>;
  /**
   * @param callback The callback
   */
  getFunctionAppStacks(callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getFunctionAppStacks(options: Models.ProviderGetFunctionAppStacksOptionalParams, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  getFunctionAppStacks(options?: Models.ProviderGetFunctionAppStacksOptionalParams | msRest.ServiceCallback<Models.FunctionAppStackCollection>, callback?: msRest.ServiceCallback<Models.FunctionAppStackCollection>): Promise<Models.ProviderGetFunctionAppStacksResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getFunctionAppStacksOperationSpec,
      callback) as Promise<Models.ProviderGetFunctionAppStacksResponse>;
  }

  /**
   * Description for Get available Function app frameworks and their versions for location
   * @summary Get available Function app frameworks and their versions for location
   * @param location
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetFunctionAppStacksForLocationResponse>
   */
  getFunctionAppStacksForLocation(location: string, options?: Models.ProviderGetFunctionAppStacksForLocationOptionalParams): Promise<Models.ProviderGetFunctionAppStacksForLocationResponse>;
  /**
   * @param location
   * @param callback The callback
   */
  getFunctionAppStacksForLocation(location: string, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  /**
   * @param location
   * @param options The optional parameters
   * @param callback The callback
   */
  getFunctionAppStacksForLocation(location: string, options: Models.ProviderGetFunctionAppStacksForLocationOptionalParams, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  getFunctionAppStacksForLocation(location: string, options?: Models.ProviderGetFunctionAppStacksForLocationOptionalParams | msRest.ServiceCallback<Models.FunctionAppStackCollection>, callback?: msRest.ServiceCallback<Models.FunctionAppStackCollection>): Promise<Models.ProviderGetFunctionAppStacksForLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      getFunctionAppStacksForLocationOperationSpec,
      callback) as Promise<Models.ProviderGetFunctionAppStacksForLocationResponse>;
  }

  /**
   * Description for Get available Web app frameworks and their versions for location
   * @summary Get available Web app frameworks and their versions for location
   * @param location
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetWebAppStacksForLocationResponse>
   */
  getWebAppStacksForLocation(location: string, options?: Models.ProviderGetWebAppStacksForLocationOptionalParams): Promise<Models.ProviderGetWebAppStacksForLocationResponse>;
  /**
   * @param location
   * @param callback The callback
   */
  getWebAppStacksForLocation(location: string, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  /**
   * @param location
   * @param options The optional parameters
   * @param callback The callback
   */
  getWebAppStacksForLocation(location: string, options: Models.ProviderGetWebAppStacksForLocationOptionalParams, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  getWebAppStacksForLocation(location: string, options?: Models.ProviderGetWebAppStacksForLocationOptionalParams | msRest.ServiceCallback<Models.WebAppStackCollection>, callback?: msRest.ServiceCallback<Models.WebAppStackCollection>): Promise<Models.ProviderGetWebAppStacksForLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      getWebAppStacksForLocationOperationSpec,
      callback) as Promise<Models.ProviderGetWebAppStacksForLocationResponse>;
  }

  /**
   * Description for Gets all available operations for the Microsoft.Web resource provider. Also
   * exposes resource metric definitions
   * @summary Gets all available operations for the Microsoft.Web resource provider. Also exposes
   * resource metric definitions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderListOperationsResponse>
   */
  listOperations(options?: msRest.RequestOptionsBase): Promise<Models.ProviderListOperationsResponse>;
  /**
   * @param callback The callback
   */
  listOperations(callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  listOperations(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CsmOperationCollection>, callback?: msRest.ServiceCallback<Models.CsmOperationCollection>): Promise<Models.ProviderListOperationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationsOperationSpec,
      callback) as Promise<Models.ProviderListOperationsResponse>;
  }

  /**
   * Description for Get available Web app frameworks and their versions
   * @summary Get available Web app frameworks and their versions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetWebAppStacksResponse>
   */
  getWebAppStacks(options?: Models.ProviderGetWebAppStacksOptionalParams): Promise<Models.ProviderGetWebAppStacksResponse>;
  /**
   * @param callback The callback
   */
  getWebAppStacks(callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getWebAppStacks(options: Models.ProviderGetWebAppStacksOptionalParams, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  getWebAppStacks(options?: Models.ProviderGetWebAppStacksOptionalParams | msRest.ServiceCallback<Models.WebAppStackCollection>, callback?: msRest.ServiceCallback<Models.WebAppStackCollection>): Promise<Models.ProviderGetWebAppStacksResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getWebAppStacksOperationSpec,
      callback) as Promise<Models.ProviderGetWebAppStacksResponse>;
  }

  /**
   * Description for Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksOnPremResponse>
   */
  getAvailableStacksOnPrem(options?: Models.ProviderGetAvailableStacksOnPremOptionalParams): Promise<Models.ProviderGetAvailableStacksOnPremResponse>;
  /**
   * @param callback The callback
   */
  getAvailableStacksOnPrem(callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacksOnPrem(options: Models.ProviderGetAvailableStacksOnPremOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacksOnPrem(options?: Models.ProviderGetAvailableStacksOnPremOptionalParams | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksOnPremResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAvailableStacksOnPremOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksOnPremResponse>;
  }

  /**
   * Description for Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksNextResponse>
   */
  getAvailableStacksNext(nextPageLink: string, options?: Models.ProviderGetAvailableStacksNextOptionalParams): Promise<Models.ProviderGetAvailableStacksNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getAvailableStacksNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacksNext(nextPageLink: string, options: Models.ProviderGetAvailableStacksNextOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacksNext(nextPageLink: string, options?: Models.ProviderGetAvailableStacksNextOptionalParams | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getAvailableStacksNextOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksNextResponse>;
  }

  /**
   * Description for Get available Function app frameworks and their versions
   * @summary Get available Function app frameworks and their versions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetFunctionAppStacksNextResponse>
   */
  getFunctionAppStacksNext(nextPageLink: string, options?: Models.ProviderGetFunctionAppStacksNextOptionalParams): Promise<Models.ProviderGetFunctionAppStacksNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getFunctionAppStacksNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getFunctionAppStacksNext(nextPageLink: string, options: Models.ProviderGetFunctionAppStacksNextOptionalParams, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  getFunctionAppStacksNext(nextPageLink: string, options?: Models.ProviderGetFunctionAppStacksNextOptionalParams | msRest.ServiceCallback<Models.FunctionAppStackCollection>, callback?: msRest.ServiceCallback<Models.FunctionAppStackCollection>): Promise<Models.ProviderGetFunctionAppStacksNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getFunctionAppStacksNextOperationSpec,
      callback) as Promise<Models.ProviderGetFunctionAppStacksNextResponse>;
  }

  /**
   * Description for Get available Function app frameworks and their versions for location
   * @summary Get available Function app frameworks and their versions for location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetFunctionAppStacksForLocationNextResponse>
   */
  getFunctionAppStacksForLocationNext(nextPageLink: string, options?: Models.ProviderGetFunctionAppStacksForLocationNextOptionalParams): Promise<Models.ProviderGetFunctionAppStacksForLocationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getFunctionAppStacksForLocationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getFunctionAppStacksForLocationNext(nextPageLink: string, options: Models.ProviderGetFunctionAppStacksForLocationNextOptionalParams, callback: msRest.ServiceCallback<Models.FunctionAppStackCollection>): void;
  getFunctionAppStacksForLocationNext(nextPageLink: string, options?: Models.ProviderGetFunctionAppStacksForLocationNextOptionalParams | msRest.ServiceCallback<Models.FunctionAppStackCollection>, callback?: msRest.ServiceCallback<Models.FunctionAppStackCollection>): Promise<Models.ProviderGetFunctionAppStacksForLocationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getFunctionAppStacksForLocationNextOperationSpec,
      callback) as Promise<Models.ProviderGetFunctionAppStacksForLocationNextResponse>;
  }

  /**
   * Description for Get available Web app frameworks and their versions for location
   * @summary Get available Web app frameworks and their versions for location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetWebAppStacksForLocationNextResponse>
   */
  getWebAppStacksForLocationNext(nextPageLink: string, options?: Models.ProviderGetWebAppStacksForLocationNextOptionalParams): Promise<Models.ProviderGetWebAppStacksForLocationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getWebAppStacksForLocationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getWebAppStacksForLocationNext(nextPageLink: string, options: Models.ProviderGetWebAppStacksForLocationNextOptionalParams, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  getWebAppStacksForLocationNext(nextPageLink: string, options?: Models.ProviderGetWebAppStacksForLocationNextOptionalParams | msRest.ServiceCallback<Models.WebAppStackCollection>, callback?: msRest.ServiceCallback<Models.WebAppStackCollection>): Promise<Models.ProviderGetWebAppStacksForLocationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getWebAppStacksForLocationNextOperationSpec,
      callback) as Promise<Models.ProviderGetWebAppStacksForLocationNextResponse>;
  }

  /**
   * Description for Gets all available operations for the Microsoft.Web resource provider. Also
   * exposes resource metric definitions
   * @summary Gets all available operations for the Microsoft.Web resource provider. Also exposes
   * resource metric definitions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderListOperationsNextResponse>
   */
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProviderListOperationsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CsmOperationCollection>, callback?: msRest.ServiceCallback<Models.CsmOperationCollection>): Promise<Models.ProviderListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOperationsNextOperationSpec,
      callback) as Promise<Models.ProviderListOperationsNextResponse>;
  }

  /**
   * Description for Get available Web app frameworks and their versions
   * @summary Get available Web app frameworks and their versions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetWebAppStacksNextResponse>
   */
  getWebAppStacksNext(nextPageLink: string, options?: Models.ProviderGetWebAppStacksNextOptionalParams): Promise<Models.ProviderGetWebAppStacksNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getWebAppStacksNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getWebAppStacksNext(nextPageLink: string, options: Models.ProviderGetWebAppStacksNextOptionalParams, callback: msRest.ServiceCallback<Models.WebAppStackCollection>): void;
  getWebAppStacksNext(nextPageLink: string, options?: Models.ProviderGetWebAppStacksNextOptionalParams | msRest.ServiceCallback<Models.WebAppStackCollection>, callback?: msRest.ServiceCallback<Models.WebAppStackCollection>): Promise<Models.ProviderGetWebAppStacksNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getWebAppStacksNextOperationSpec,
      callback) as Promise<Models.ProviderGetWebAppStacksNextResponse>;
  }

  /**
   * Description for Get available application frameworks and their versions
   * @summary Get available application frameworks and their versions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProviderGetAvailableStacksOnPremNextResponse>
   */
  getAvailableStacksOnPremNext(nextPageLink: string, options?: Models.ProviderGetAvailableStacksOnPremNextOptionalParams): Promise<Models.ProviderGetAvailableStacksOnPremNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  getAvailableStacksOnPremNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableStacksOnPremNext(nextPageLink: string, options: Models.ProviderGetAvailableStacksOnPremNextOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationStackCollection>): void;
  getAvailableStacksOnPremNext(nextPageLink: string, options?: Models.ProviderGetAvailableStacksOnPremNextOptionalParams | msRest.ServiceCallback<Models.ApplicationStackCollection>, callback?: msRest.ServiceCallback<Models.ApplicationStackCollection>): Promise<Models.ProviderGetAvailableStacksOnPremNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      getAvailableStacksOnPremNextOperationSpec,
      callback) as Promise<Models.ProviderGetAvailableStacksOnPremNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAvailableStacksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/availableStacks",
  queryParameters: [
    Parameters.osTypeSelected,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getFunctionAppStacksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/functionAppStacks",
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getFunctionAppStacksForLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/locations/{location}/functionAppStacks",
  urlParameters: [
    Parameters.location
  ],
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getWebAppStacksForLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/locations/{location}/webAppStacks",
  urlParameters: [
    Parameters.location
  ],
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WebAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getWebAppStacksOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Web/webAppStacks",
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WebAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getAvailableStacksOnPremOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/availableStacks",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.osTypeSelected,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getAvailableStacksNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.osTypeSelected,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getFunctionAppStacksNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getFunctionAppStacksForLocationNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getWebAppStacksForLocationNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WebAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listOperationsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getWebAppStacksNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.stackOsType,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WebAppStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getAvailableStacksOnPremNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.osTypeSelected,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationStackCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

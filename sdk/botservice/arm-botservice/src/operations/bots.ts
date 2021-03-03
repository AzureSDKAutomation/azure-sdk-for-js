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
import * as Mappers from "../models/botsMappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";

/** Class representing a Bots. */
export class Bots {
  private readonly client: AzureBotServiceContext;

  /**
   * Create a Bots.
   * @param {AzureBotServiceContext} client Reference to the service client.
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Creates a Bot Service. Bot Service is a resource group wide resource type.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param parameters The parameters to provide for the created bot.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsCreateResponse>
   */
  create(resourceGroupName: string, resourceName: string, parameters: Models.Bot, options?: msRest.RequestOptionsBase): Promise<Models.BotsCreateResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param parameters The parameters to provide for the created bot.
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, parameters: Models.Bot, callback: msRest.ServiceCallback<Models.Bot>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param parameters The parameters to provide for the created bot.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, parameters: Models.Bot, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Bot>): void;
  create(resourceGroupName: string, resourceName: string, parameters: Models.Bot, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Bot>, callback?: msRest.ServiceCallback<Models.Bot>): Promise<Models.BotsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.BotsCreateResponse>;
  }

  /**
   * Updates a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, options?: Models.BotsUpdateOptionalParams): Promise<Models.BotsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.Bot>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, options: Models.BotsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Bot>): void;
  update(resourceGroupName: string, resourceName: string, options?: Models.BotsUpdateOptionalParams | msRest.ServiceCallback<Models.Bot>, callback?: msRest.ServiceCallback<Models.Bot>): Promise<Models.BotsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BotsUpdateResponse>;
  }

  /**
   * Deletes a Bot Service from the resource group.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns a BotService specified by the parameters.
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.BotsGetResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.Bot>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Bot>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Bot>, callback?: msRest.ServiceCallback<Models.Bot>): Promise<Models.BotsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BotsGetResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BotsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  /**
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BotResponseList>, callback?: msRest.ServiceCallback<Models.BotResponseList>): Promise<Models.BotsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.BotsListByResourceGroupResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.BotsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BotResponseList>, callback?: msRest.ServiceCallback<Models.BotResponseList>): Promise<Models.BotsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BotsListResponse>;
  }

  /**
   * Check whether a bot name is available.
   * @param parameters The request body parameters to provide for the check name availability request
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsGetCheckNameAvailabilityResponse>
   */
  getCheckNameAvailability(parameters: Models.CheckNameAvailabilityRequest, options?: msRest.RequestOptionsBase): Promise<Models.BotsGetCheckNameAvailabilityResponse>;
  /**
   * @param parameters The request body parameters to provide for the check name availability request
   * @param callback The callback
   */
  getCheckNameAvailability(parameters: Models.CheckNameAvailabilityRequest, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResponse>): void;
  /**
   * @param parameters The request body parameters to provide for the check name availability request
   * @param options The optional parameters
   * @param callback The callback
   */
  getCheckNameAvailability(parameters: Models.CheckNameAvailabilityRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResponse>): void;
  getCheckNameAvailability(parameters: Models.CheckNameAvailabilityRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityResponse>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityResponse>): Promise<Models.BotsGetCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      getCheckNameAvailabilityOperationSpec,
      callback) as Promise<Models.BotsGetCheckNameAvailabilityResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BotsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BotResponseList>, callback?: msRest.ServiceCallback<Models.BotResponseList>): Promise<Models.BotsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.BotsListByResourceGroupNextResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BotsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BotsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BotResponseList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BotResponseList>, callback?: msRest.ServiceCallback<Models.BotResponseList>): Promise<Models.BotsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BotsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
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
      ...Mappers.Bot,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Bot
    },
    201: {
      bodyMapper: Mappers.Bot
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      location: [
        "options",
        "location"
      ],
      tags: [
        "options",
        "tags"
      ],
      sku: [
        "options",
        "sku"
      ],
      kind: [
        "options",
        "kind"
      ],
      etag: [
        "options",
        "etag"
      ],
      properties: [
        "options",
        "properties"
      ]
    },
    mapper: {
      ...Mappers.Bot,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Bot
    },
    201: {
      bodyMapper: Mappers.Bot
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceName,
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
      bodyMapper: Mappers.Bot
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.BotResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.BotService/botServices",
  urlParameters: [
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
      bodyMapper: Mappers.BotResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getCheckNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.BotService/checkNameAvailability",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CheckNameAvailabilityRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.BotResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BotResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

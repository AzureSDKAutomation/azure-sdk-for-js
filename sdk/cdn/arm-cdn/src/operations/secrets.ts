/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/secretsMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";

/** Class representing a Secrets. */
export class Secrets {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a Secrets.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists existing AzureFrontDoor secrets.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsListByProfileResponse>
   */
  listByProfile(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretsListByProfileResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param callback The callback
   */
  listByProfile(resourceGroupName: string, profileName: string, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProfile(resourceGroupName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  listByProfile(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretListResult>, callback?: msRest.ServiceCallback<Models.SecretListResult>): Promise<Models.SecretsListByProfileResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      listByProfileOperationSpec,
      callback) as Promise<Models.SecretsListByProfileResponse>;
  }

  /**
   * Gets an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsGetResponse>
   */
  get(resourceGroupName: string, profileName: string, secretName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, secretName: string, callback: msRest.ServiceCallback<Models.Secret>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, secretName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Secret>): void;
  get(resourceGroupName: string, profileName: string, secretName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Secret>, callback?: msRest.ServiceCallback<Models.Secret>): Promise<Models.SecretsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        secretName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SecretsGetResponse>;
  }

  /**
   * Creates a new Secret within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsCreateResponse>
   */
  create(resourceGroupName: string, profileName: string, secretName: string, options?: Models.SecretsCreateOptionalParams): Promise<Models.SecretsCreateResponse> {
    return this.beginCreate(resourceGroupName,profileName,secretName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SecretsCreateResponse>;
  }

  /**
   * Updates an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsUpdateResponse>
   */
  update(resourceGroupName: string, profileName: string, secretName: string, options?: Models.SecretsUpdateOptionalParams): Promise<Models.SecretsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,profileName,secretName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SecretsUpdateResponse>;
  }

  /**
   * Deletes an existing Secret within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, profileName: string, secretName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,profileName,secretName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new Secret within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, profileName: string, secretName: string, options?: Models.SecretsBeginCreateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        secretName,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, profileName: string, secretName: string, options?: Models.SecretsBeginUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        secretName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing Secret within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, profileName: string, secretName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        secretName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists existing AzureFrontDoor secrets.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretsListByProfileNextResponse>
   */
  listByProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretsListByProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretListResult>): void;
  listByProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretListResult>, callback?: msRest.ServiceCallback<Models.SecretListResult>): Promise<Models.SecretsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByProfileNextOperationSpec,
      callback) as Promise<Models.SecretsListByProfileNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
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
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.secretName,
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
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.secretName,
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
      parameters: [
        "options",
        "parameters"
      ]
    },
    mapper: {
      ...Mappers.Secret,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    202: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.secretName,
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
      parameters: [
        "options",
        "parameters"
      ]
    },
    mapper: {
      ...Mappers.SecretProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    202: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.profileName,
    Parameters.secretName,
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
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const listByProfileNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};
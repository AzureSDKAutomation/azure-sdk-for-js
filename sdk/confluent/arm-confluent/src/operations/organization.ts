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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/organizationMappers";
import * as Parameters from "../models/parameters";
import { ConfluentManagementClientContext } from "../confluentManagementClientContext";

/** Class representing a Organization. */
export class Organization {
  private readonly client: ConfluentManagementClientContext;

  /**
   * Create a Organization.
   * @param {ConfluentManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConfluentManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary List all organizations under the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.OrganizationListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrganizationResourceListResult>, callback?: msRest.ServiceCallback<Models.OrganizationResourceListResult>): Promise<Models.OrganizationListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.OrganizationListBySubscriptionResponse>;
  }

  /**
   * @summary List all Organizations under the specified resource group.
   * @param resourceGroupName Resource group name
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.OrganizationListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Resource group name
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  /**
   * @param resourceGroupName Resource group name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrganizationResourceListResult>, callback?: msRest.ServiceCallback<Models.OrganizationResourceListResult>): Promise<Models.OrganizationListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.OrganizationListByResourceGroupResponse>;
  }

  /**
   * @summary Get the properties of a specific Organization resource.
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationGetResponse>
   */
  get(resourceGroupName: string, organizationName: string, options?: msRest.RequestOptionsBase): Promise<Models.OrganizationGetResponse>;
  /**
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param callback The callback
   */
  get(resourceGroupName: string, organizationName: string, callback: msRest.ServiceCallback<Models.OrganizationResource>): void;
  /**
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, organizationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrganizationResource>): void;
  get(resourceGroupName: string, organizationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrganizationResource>, callback?: msRest.ServiceCallback<Models.OrganizationResource>): Promise<Models.OrganizationGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        organizationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OrganizationGetResponse>;
  }

  /**
   * @summary Create Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationCreateResponse>
   */
  create(resourceGroupName: string, organizationName: string, options?: Models.OrganizationCreateOptionalParams): Promise<Models.OrganizationCreateResponse> {
    return this.beginCreate(resourceGroupName,organizationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OrganizationCreateResponse>;
  }

  /**
   * @summary Update Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationUpdateResponse>
   */
  update(resourceGroupName: string, organizationName: string, options?: Models.OrganizationUpdateOptionalParams): Promise<Models.OrganizationUpdateResponse>;
  /**
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param callback The callback
   */
  update(resourceGroupName: string, organizationName: string, callback: msRest.ServiceCallback<Models.OrganizationResource>): void;
  /**
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, organizationName: string, options: Models.OrganizationUpdateOptionalParams, callback: msRest.ServiceCallback<Models.OrganizationResource>): void;
  update(resourceGroupName: string, organizationName: string, options?: Models.OrganizationUpdateOptionalParams | msRest.ServiceCallback<Models.OrganizationResource>, callback?: msRest.ServiceCallback<Models.OrganizationResource>): Promise<Models.OrganizationUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        organizationName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.OrganizationUpdateResponse>;
  }

  /**
   * @summary Delete Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, organizationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,organizationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Create Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, organizationName: string, options?: Models.OrganizationBeginCreateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        organizationName,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * @summary Delete Organization resource
   * @param resourceGroupName Resource group name
   * @param organizationName Organization resource name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, organizationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        organizationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary List all organizations under the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OrganizationListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrganizationResourceListResult>, callback?: msRest.ServiceCallback<Models.OrganizationResourceListResult>): Promise<Models.OrganizationListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.OrganizationListBySubscriptionNextResponse>;
  }

  /**
   * @summary List all Organizations under the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OrganizationListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OrganizationListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OrganizationResourceListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OrganizationResourceListResult>, callback?: msRest.ServiceCallback<Models.OrganizationResourceListResult>): Promise<Models.OrganizationListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.OrganizationListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Confluent/organizations",
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
      bodyMapper: Mappers.OrganizationResourceListResult
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationResourceListResult
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.organizationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationResource
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.organizationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.OrganizationResourceUpdate
  },
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationResource
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.organizationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.OrganizationResource
  },
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationResource
    },
    201: {
      bodyMapper: Mappers.OrganizationResource
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Confluent/organizations/{organizationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.organizationName
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
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.OrganizationResourceListResult
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OrganizationResourceListResult
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

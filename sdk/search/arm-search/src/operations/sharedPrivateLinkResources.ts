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
import * as Mappers from "../models/sharedPrivateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { SearchManagementClientContext } from "../searchManagementClientContext";

/** Class representing a SharedPrivateLinkResources. */
export class SharedPrivateLinkResources {
  private readonly client: SearchManagementClientContext;

  /**
   * Create a SharedPrivateLinkResources.
   * @param {SearchManagementClientContext} client Reference to the service client.
   */
  constructor(client: SearchManagementClientContext) {
    this.client = client;
  }

  /**
   * Initiates the creation or update of a shared private link resource managed by the search service
   * in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param sharedPrivateLinkResource The definition of the shared private link resource to create or
   * update.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedPrivateLinkResourcesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, sharedPrivateLinkResource: Models.SharedPrivateLinkResource, options?: Models.SharedPrivateLinkResourcesCreateOrUpdateOptionalParams): Promise<Models.SharedPrivateLinkResourcesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,searchServiceName,sharedPrivateLinkResourceName,sharedPrivateLinkResource,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SharedPrivateLinkResourcesCreateOrUpdateResponse>;
  }

  /**
   * Gets the details of the shared private link resource managed by the search service in the given
   * resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedPrivateLinkResourcesGetResponse>
   */
  get(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, options?: Models.SharedPrivateLinkResourcesGetOptionalParams): Promise<Models.SharedPrivateLinkResourcesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param callback The callback
   */
  get(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, callback: msRest.ServiceCallback<Models.SharedPrivateLinkResource>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, options: Models.SharedPrivateLinkResourcesGetOptionalParams, callback: msRest.ServiceCallback<Models.SharedPrivateLinkResource>): void;
  get(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, options?: Models.SharedPrivateLinkResourcesGetOptionalParams | msRest.ServiceCallback<Models.SharedPrivateLinkResource>, callback?: msRest.ServiceCallback<Models.SharedPrivateLinkResource>): Promise<Models.SharedPrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        sharedPrivateLinkResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SharedPrivateLinkResourcesGetResponse>;
  }

  /**
   * Initiates the deletion of the shared private link resource from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, options?: Models.SharedPrivateLinkResourcesDeleteMethodOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,searchServiceName,sharedPrivateLinkResourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of all shared private link resources managed by the given service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedPrivateLinkResourcesListByServiceResponse>
   */
  listByService(resourceGroupName: string, searchServiceName: string, options?: Models.SharedPrivateLinkResourcesListByServiceOptionalParams): Promise<Models.SharedPrivateLinkResourcesListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, searchServiceName: string, callback: msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, searchServiceName: string, options: Models.SharedPrivateLinkResourcesListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>): void;
  listByService(resourceGroupName: string, searchServiceName: string, options?: Models.SharedPrivateLinkResourcesListByServiceOptionalParams | msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>): Promise<Models.SharedPrivateLinkResourcesListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.SharedPrivateLinkResourcesListByServiceResponse>;
  }

  /**
   * Initiates the creation or update of a shared private link resource managed by the search service
   * in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param sharedPrivateLinkResource The definition of the shared private link resource to create or
   * update.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, sharedPrivateLinkResource: Models.SharedPrivateLinkResource, options?: Models.SharedPrivateLinkResourcesBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        searchServiceName,
        sharedPrivateLinkResourceName,
        sharedPrivateLinkResource,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Initiates the deletion of the shared private link resource from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Cognitive Search service associated with the
   * specified resource group.
   * @param sharedPrivateLinkResourceName The name of the shared private link resource managed by the
   * Azure Cognitive Search service within the specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, searchServiceName: string, sharedPrivateLinkResourceName: string, options?: Models.SharedPrivateLinkResourcesBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        searchServiceName,
        sharedPrivateLinkResourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of all shared private link resources managed by the given service.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedPrivateLinkResourcesListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: Models.SharedPrivateLinkResourcesListByServiceNextOptionalParams): Promise<Models.SharedPrivateLinkResourcesListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: Models.SharedPrivateLinkResourcesListByServiceNextOptionalParams, callback: msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>): void;
  listByServiceNext(nextPageLink: string, options?: Models.SharedPrivateLinkResourcesListByServiceNextOptionalParams | msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.SharedPrivateLinkResourceListResult>): Promise<Models.SharedPrivateLinkResourcesListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.SharedPrivateLinkResourcesListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.sharedPrivateLinkResourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.searchServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.sharedPrivateLinkResourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  requestBody: {
    parameterPath: "sharedPrivateLinkResource",
    mapper: {
      ...Mappers.SharedPrivateLinkResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.sharedPrivateLinkResourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    202: {},
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
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
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/cloudServicesUpdateDomainMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a CloudServicesUpdateDomain. */
export class CloudServicesUpdateDomain {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a CloudServicesUpdateDomain.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Updates the role instances in the specified update domain.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains
   * are identified with a zero-based index: the first update domain has an ID of 0, the second has
   * an ID of 1, and so on.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  walkUpdateDomain(resourceGroupName: string, cloudServiceName: string, updateDomain: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginWalkUpdateDomain(resourceGroupName,cloudServiceName,updateDomain,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified update domain of a cloud service. Use nextLink property in the response to
   * get the next page of update domains. Do this till nextLink is null to fetch all the update
   * domains.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains
   * are identified with a zero-based index: the first update domain has an ID of 0, the second has
   * an ID of 1, and so on.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesUpdateDomainGetUpdateDomainResponse>
   */
  getUpdateDomain(resourceGroupName: string, cloudServiceName: string, updateDomain: number, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesUpdateDomainGetUpdateDomainResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains
   * are identified with a zero-based index: the first update domain has an ID of 0, the second has
   * an ID of 1, and so on.
   * @param callback The callback
   */
  getUpdateDomain(resourceGroupName: string, cloudServiceName: string, updateDomain: number, callback: msRest.ServiceCallback<Models.UpdateDomain>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains
   * are identified with a zero-based index: the first update domain has an ID of 0, the second has
   * an ID of 1, and so on.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUpdateDomain(resourceGroupName: string, cloudServiceName: string, updateDomain: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UpdateDomain>): void;
  getUpdateDomain(resourceGroupName: string, cloudServiceName: string, updateDomain: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UpdateDomain>, callback?: msRest.ServiceCallback<Models.UpdateDomain>): Promise<Models.CloudServicesUpdateDomainGetUpdateDomainResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cloudServiceName,
        updateDomain,
        options
      },
      getUpdateDomainOperationSpec,
      callback) as Promise<Models.CloudServicesUpdateDomainGetUpdateDomainResponse>;
  }

  /**
   * Gets a list of all update domains in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesUpdateDomainListUpdateDomainsResponse>
   */
  listUpdateDomains(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesUpdateDomainListUpdateDomainsResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param callback The callback
   */
  listUpdateDomains(resourceGroupName: string, cloudServiceName: string, callback: msRest.ServiceCallback<Models.UpdateDomainListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUpdateDomains(resourceGroupName: string, cloudServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UpdateDomainListResult>): void;
  listUpdateDomains(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UpdateDomainListResult>, callback?: msRest.ServiceCallback<Models.UpdateDomainListResult>): Promise<Models.CloudServicesUpdateDomainListUpdateDomainsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      listUpdateDomainsOperationSpec,
      callback) as Promise<Models.CloudServicesUpdateDomainListUpdateDomainsResponse>;
  }

  /**
   * Updates the role instances in the specified update domain.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains
   * are identified with a zero-based index: the first update domain has an ID of 0, the second has
   * an ID of 1, and so on.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginWalkUpdateDomain(resourceGroupName: string, cloudServiceName: string, updateDomain: number, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        updateDomain,
        options
      },
      beginWalkUpdateDomainOperationSpec,
      options);
  }

  /**
   * Gets a list of all update domains in a cloud service.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesUpdateDomainListUpdateDomainsNextResponse>
   */
  listUpdateDomainsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesUpdateDomainListUpdateDomainsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listUpdateDomainsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UpdateDomainListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUpdateDomainsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UpdateDomainListResult>): void;
  listUpdateDomainsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UpdateDomainListResult>, callback?: msRest.ServiceCallback<Models.UpdateDomainListResult>): Promise<Models.CloudServicesUpdateDomainListUpdateDomainsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listUpdateDomainsNextOperationSpec,
      callback) as Promise<Models.CloudServicesUpdateDomainListUpdateDomainsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getUpdateDomainOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/updateDomains/{updateDomain}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.updateDomain,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UpdateDomain
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUpdateDomainsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/updateDomains",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UpdateDomainListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginWalkUpdateDomainOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/updateDomains/{updateDomain}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.updateDomain,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.UpdateDomain
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUpdateDomainsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UpdateDomainListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

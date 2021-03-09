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
import * as Mappers from "../models/privateLinkResourcesCompMappers";
import * as Parameters from "../models/parameters";
import { SecurityAndComplianceClientContext } from "../securityAndComplianceClientContext";

/** Class representing a PrivateLinkResourcesComp. */
export class PrivateLinkResourcesComp {
  private readonly client: SecurityAndComplianceClientContext;

  /**
   * Create a PrivateLinkResourcesComp.
   * @param {SecurityAndComplianceClientContext} client Reference to the service client.
   */
  constructor(client: SecurityAndComplianceClientContext) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesCompListByServiceResponse>
   */
  listByService(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesCompListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): void;
  listByService(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.PrivateLinkResourceListResult>): Promise<Models.PrivateLinkResourcesCompListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesCompListByServiceResponse>;
  }

  /**
   * Gets a private link resource that need to be created for a service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param groupName The name of the private link resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateLinkResourcesCompGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateLinkResourcesCompGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param groupName The name of the private link resource group.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, groupName: string, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param groupName The name of the private link resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateLinkResource>): void;
  get(resourceGroupName: string, resourceName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateLinkResource>, callback?: msRest.ServiceCallback<Models.PrivateLinkResource>): Promise<Models.PrivateLinkResourcesCompGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        groupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateLinkResourcesCompGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateLinkResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateLinkResources/{groupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

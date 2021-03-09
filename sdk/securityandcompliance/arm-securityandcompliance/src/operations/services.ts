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
import * as Mappers from "../models/servicesMappers";
import * as Parameters from "../models/parameters";
import { SecurityAndComplianceClientContext } from "../securityAndComplianceClientContext";

/** Class representing a Services. */
export class Services {
  private readonly client: SecurityAndComplianceClientContext;

  /**
   * Create a Services.
   * @param {SecurityAndComplianceClientContext} client Reference to the service client.
   */
  constructor(client: SecurityAndComplianceClientContext) {
    this.client = client;
  }

  /**
   * Delete a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Delete a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
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
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

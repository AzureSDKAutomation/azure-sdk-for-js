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
import * as Mappers from "../models/apiExportMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiExport. */
export class ApiExport {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiExport.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the details of the API specified by its identifier in the format specified to the Storage
   * Blob with SAS Key valid for 5 minutes.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param format Format in which to export the Api Details to the Storage Blob with Sas Key valid
   * for 5 minutes. Possible values include: 'Swagger', 'Wsdl', 'Wadl', 'Openapi', 'OpenapiJson'
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiExportGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, format: Models.ExportFormat, options?: msRest.RequestOptionsBase): Promise<Models.ApiExportGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param format Format in which to export the Api Details to the Storage Blob with Sas Key valid
   * for 5 minutes. Possible values include: 'Swagger', 'Wsdl', 'Wadl', 'Openapi', 'OpenapiJson'
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, format: Models.ExportFormat, callback: msRest.ServiceCallback<Models.ApiExportResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param format Format in which to export the Api Details to the Storage Blob with Sas Key valid
   * for 5 minutes. Possible values include: 'Swagger', 'Wsdl', 'Wadl', 'Openapi', 'OpenapiJson'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, format: Models.ExportFormat, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiExportResult>): void;
  get(resourceGroupName: string, serviceName: string, apiId: string, format: Models.ExportFormat, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiExportResult>, callback?: msRest.ServiceCallback<Models.ApiExportResult>): Promise<Models.ApiExportGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        format,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiExportGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.format1,
    Parameters.exportParameter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiExportResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

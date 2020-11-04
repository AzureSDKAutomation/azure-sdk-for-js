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
import * as Mappers from "../models/machineExtensionsMappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClientContext } from "../hybridComputeManagementClientContext";

/** Class representing a MachineExtensions. */
export class MachineExtensions {
  private readonly client: HybridComputeManagementClientContext;

  /**
   * Create a MachineExtensions.
   * @param {HybridComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: HybridComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineExtensionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, name: string, extensionName: string, extensionParameters: Models.MachineExtension, options?: msRest.RequestOptionsBase): Promise<Models.MachineExtensionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,name,extensionName,extensionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MachineExtensionsCreateOrUpdateResponse>;
  }

  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineExtensionsUpdateResponse>
   */
  update(resourceGroupName: string, name: string, extensionName: string, extensionParameters: Models.MachineExtensionUpdate, options?: msRest.RequestOptionsBase): Promise<Models.MachineExtensionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,name,extensionName,extensionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MachineExtensionsUpdateResponse>;
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine where the extension should be deleted.
   * @param extensionName The name of the machine extension.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, name: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,name,extensionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine containing the extension.
   * @param extensionName The name of the machine extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineExtensionsGetResponse>
   */
  get(resourceGroupName: string, name: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<Models.MachineExtensionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine containing the extension.
   * @param extensionName The name of the machine extension.
   * @param callback The callback
   */
  get(resourceGroupName: string, name: string, extensionName: string, callback: msRest.ServiceCallback<Models.MachineExtension>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine containing the extension.
   * @param extensionName The name of the machine extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, name: string, extensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MachineExtension>): void;
  get(resourceGroupName: string, name: string, extensionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MachineExtension>, callback?: msRest.ServiceCallback<Models.MachineExtension>): Promise<Models.MachineExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        extensionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MachineExtensionsGetResponse>;
  }

  /**
   * The operation to get all extensions of a non-Azure machine
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine containing the extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineExtensionsListResponse>
   */
  list(resourceGroupName: string, name: string, options?: Models.MachineExtensionsListOptionalParams): Promise<Models.MachineExtensionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine containing the extension.
   * @param callback The callback
   */
  list(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.MachineExtensionsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine containing the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, name: string, options: Models.MachineExtensionsListOptionalParams, callback: msRest.ServiceCallback<Models.MachineExtensionsListResult>): void;
  list(resourceGroupName: string, name: string, options?: Models.MachineExtensionsListOptionalParams | msRest.ServiceCallback<Models.MachineExtensionsListResult>, callback?: msRest.ServiceCallback<Models.MachineExtensionsListResult>): Promise<Models.MachineExtensionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MachineExtensionsListResponse>;
  }

  /**
   * The operation to create or update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, name: string, extensionName: string, extensionParameters: Models.MachineExtension, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        extensionName,
        extensionParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * The operation to update the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine where the extension should be created or updated.
   * @param extensionName The name of the machine extension.
   * @param extensionParameters Parameters supplied to the Create Machine Extension operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, name: string, extensionName: string, extensionParameters: Models.MachineExtensionUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        extensionName,
        extensionParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the machine where the extension should be deleted.
   * @param extensionName The name of the machine extension.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, name: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        extensionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The operation to get all extensions of a non-Azure machine
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachineExtensionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.MachineExtensionsListNextOptionalParams): Promise<Models.MachineExtensionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MachineExtensionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.MachineExtensionsListNextOptionalParams, callback: msRest.ServiceCallback<Models.MachineExtensionsListResult>): void;
  listNext(nextPageLink: string, options?: Models.MachineExtensionsListNextOptionalParams | msRest.ServiceCallback<Models.MachineExtensionsListResult>, callback?: msRest.ServiceCallback<Models.MachineExtensionsListResult>): Promise<Models.MachineExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.MachineExtensionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.extensionName,
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
      bodyMapper: Mappers.MachineExtension
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtensionsListResult
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.extensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extensionParameters",
    mapper: {
      ...Mappers.MachineExtension,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtension
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.extensionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extensionParameters",
    mapper: {
      ...Mappers.MachineExtensionUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtension
    },
    202: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/extensions/{extensionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.extensionName,
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
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
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
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MachineExtensionsListResult
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

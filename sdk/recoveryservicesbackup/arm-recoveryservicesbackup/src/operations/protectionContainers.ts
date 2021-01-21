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
import * as Mappers from "../models/protectionContainersMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ProtectionContainers. */
export class ProtectionContainers {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ProtectionContainers.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Gets details of the specific container registered to your Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container whose details need to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectionContainersGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProtectionContainersGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container whose details need to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, callback: msRest.ServiceCallback<Models.ProtectionContainerResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container whose details need to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProtectionContainerResource>): void;
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProtectionContainerResource>, callback?: msRest.ServiceCallback<Models.ProtectionContainerResource>): Promise<Models.ProtectionContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProtectionContainersGetResponse>;
  }

  /**
   * Registers the container with Recovery Services vault.
   * This is an asynchronous operation. To track the operation status, use location header to call
   * get latest status of
   * the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectionContainersRegisterResponse>
   */
  register(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, parameters: Models.ProtectionContainerResource, options?: msRest.RequestOptionsBase): Promise<Models.ProtectionContainersRegisterResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param callback The callback
   */
  register(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, parameters: Models.ProtectionContainerResource, callback: msRest.ServiceCallback<Models.ProtectionContainerResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param options The optional parameters
   * @param callback The callback
   */
  register(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, parameters: Models.ProtectionContainerResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProtectionContainerResource>): void;
  register(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, parameters: Models.ProtectionContainerResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProtectionContainerResource>, callback?: msRest.ServiceCallback<Models.ProtectionContainerResource>): Promise<Models.ProtectionContainersRegisterResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        parameters,
        options
      },
      registerOperationSpec,
      callback) as Promise<Models.ProtectionContainersRegisterResponse>;
  }

  /**
   * Unregisters the given container from your Recovery Services Vault. This is an asynchronous
   * operation. To determine
   * whether the backend service has finished processing the request, call Get Container Operation
   * Result API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container which needs to be unregistered from the Recovery
   * Services Vault.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  unregister(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container which needs to be unregistered from the Recovery
   * Services Vault.
   * @param callback The callback
   */
  unregister(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container which needs to be unregistered from the Recovery
   * Services Vault.
   * @param options The optional parameters
   * @param callback The callback
   */
  unregister(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  unregister(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        options
      },
      unregisterOperationSpec,
      callback);
  }

  /**
   * This is an async operation and the results should be tracked using location header or
   * Azure-async-url.
   * @summary Inquires all the protectable items under the given container.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric Name associated with the container.
   * @param containerName Name of the container in which inquiry needs to be triggered.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  inquire(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: Models.ProtectionContainersInquireOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric Name associated with the container.
   * @param containerName Name of the container in which inquiry needs to be triggered.
   * @param callback The callback
   */
  inquire(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric Name associated with the container.
   * @param containerName Name of the container in which inquiry needs to be triggered.
   * @param options The optional parameters
   * @param callback The callback
   */
  inquire(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options: Models.ProtectionContainersInquireOptionalParams, callback: msRest.ServiceCallback<void>): void;
  inquire(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: Models.ProtectionContainersInquireOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        options
      },
      inquireOperationSpec,
      callback);
  }

  /**
   * Discovers all the containers in the subscription that can be backed up to Recovery Services
   * Vault. This is an
   * asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated the container.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  refresh(vaultName: string, resourceGroupName: string, fabricName: string, options?: Models.ProtectionContainersRefreshOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated the container.
   * @param callback The callback
   */
  refresh(vaultName: string, resourceGroupName: string, fabricName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated the container.
   * @param options The optional parameters
   * @param callback The callback
   */
  refresh(vaultName: string, resourceGroupName: string, fabricName: string, options: Models.ProtectionContainersRefreshOptionalParams, callback: msRest.ServiceCallback<void>): void;
  refresh(vaultName: string, resourceGroupName: string, fabricName: string, options?: Models.ProtectionContainersRefreshOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        options
      },
      refreshOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const registerOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProtectionContainerResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const unregisterOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const inquireOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/inquire",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const refreshOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/refreshContainers",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

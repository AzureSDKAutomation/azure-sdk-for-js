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
import * as Mappers from "../models/backupResourceStorageConfigsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupResourceStorageConfigs. */
export class BackupResourceStorageConfigs {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupResourceStorageConfigs.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches resource storage config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupResourceStorageConfigsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupResourceStorageConfigsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.BackupResourceConfigResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupResourceConfigResource>): void;
  get(vaultName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupResourceConfigResource>, callback?: msRest.ServiceCallback<Models.BackupResourceConfigResource>): Promise<Models.BackupResourceStorageConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupResourceStorageConfigsGetResponse>;
  }

  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupResourceStorageConfigsUpdateResponse>
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options?: msRest.RequestOptionsBase): Promise<Models.BackupResourceStorageConfigsUpdateResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param callback The callback
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, callback: msRest.ServiceCallback<Models.BackupResourceConfigResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param options The optional parameters
   * @param callback The callback
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupResourceConfigResource>): void;
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupResourceConfigResource>, callback?: msRest.ServiceCallback<Models.BackupResourceConfigResource>): Promise<Models.BackupResourceStorageConfigsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BackupResourceStorageConfigsUpdateResponse>;
  }

  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  patch(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param callback The callback
   */
  patch(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param options The optional parameters
   * @param callback The callback
   */
  patch(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  patch(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        parameters,
        options
      },
      patchOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceConfigResource
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
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
      ...Mappers.BackupResourceConfigResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceConfigResource
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

const patchOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
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
      ...Mappers.BackupResourceConfigResource,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

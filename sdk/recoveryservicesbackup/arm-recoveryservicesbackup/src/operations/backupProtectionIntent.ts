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
import * as Mappers from "../models/backupProtectionIntentMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupProtectionIntent. */
export class BackupProtectionIntent {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupProtectionIntent.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides a pageable list of all intents that are present within a vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectionIntentListResponse>
   */
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectionIntentListOptionalParams): Promise<Models.BackupProtectionIntentListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProtectionIntentResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, options: Models.BackupProtectionIntentListOptionalParams, callback: msRest.ServiceCallback<Models.ProtectionIntentResourceList>): void;
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectionIntentListOptionalParams | msRest.ServiceCallback<Models.ProtectionIntentResourceList>, callback?: msRest.ServiceCallback<Models.ProtectionIntentResourceList>): Promise<Models.BackupProtectionIntentListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupProtectionIntentListResponse>;
  }

  /**
   * Provides a pageable list of all intents that are present within a vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectionIntentListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.BackupProtectionIntentListNextOptionalParams): Promise<Models.BackupProtectionIntentListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProtectionIntentResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.BackupProtectionIntentListNextOptionalParams, callback: msRest.ServiceCallback<Models.ProtectionIntentResourceList>): void;
  listNext(nextPageLink: string, options?: Models.BackupProtectionIntentListNextOptionalParams | msRest.ServiceCallback<Models.ProtectionIntentResourceList>, callback?: msRest.ServiceCallback<Models.ProtectionIntentResourceList>): Promise<Models.BackupProtectionIntentListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BackupProtectionIntentListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectionIntents",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionIntentResourceList
    },
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
    Parameters.apiVersion2,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionIntentResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

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
import * as Mappers from "../models/recoveryPointMappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClientContext } from "../dataProtectionClientContext";

/** Class representing a RecoveryPoint. */
export class RecoveryPoint {
  private readonly client: DataProtectionClientContext;

  /**
   * Create a RecoveryPoint.
   * @param {DataProtectionClientContext} client Reference to the service client.
   */
  constructor(client: DataProtectionClientContext) {
    this.client = client;
  }

  /**
   * Gets a Recovery Point using recoveryPointId for a Datasource.
   * @param vaultName The name of the backup vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param backupInstanceName The name of the backup instance
   * @param recoveryPointId
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoveryPointGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, backupInstanceName: string, recoveryPointId: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoveryPointGetResponse>;
  /**
   * @param vaultName The name of the backup vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param backupInstanceName The name of the backup instance
   * @param recoveryPointId
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, backupInstanceName: string, recoveryPointId: string, callback: msRest.ServiceCallback<Models.AzureBackupRecoveryPointResource>): void;
  /**
   * @param vaultName The name of the backup vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param backupInstanceName The name of the backup instance
   * @param recoveryPointId
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, backupInstanceName: string, recoveryPointId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureBackupRecoveryPointResource>): void;
  get(vaultName: string, resourceGroupName: string, backupInstanceName: string, recoveryPointId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AzureBackupRecoveryPointResource>, callback?: msRest.ServiceCallback<Models.AzureBackupRecoveryPointResource>): Promise<Models.RecoveryPointGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        backupInstanceName,
        recoveryPointId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecoveryPointGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/recoveryPoints/{recoveryPointId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.backupInstanceName,
    Parameters.recoveryPointId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AzureBackupRecoveryPointResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
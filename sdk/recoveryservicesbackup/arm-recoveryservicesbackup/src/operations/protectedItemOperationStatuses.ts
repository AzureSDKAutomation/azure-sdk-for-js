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
import * as Mappers from "../models/protectedItemOperationStatusesMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ProtectedItemOperationStatuses. */
export class ProtectedItemOperationStatuses {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ProtectedItemOperationStatuses.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches the status of an operation such as triggering a backup, restore. The status can be in
   * progress, completed
   * or failed. You can refer to the OperationStatus enum for all the possible states of the
   * operation. Some operations
   * create jobs. This method returns the list of jobs associated with the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item name whose details are to be fetched.
   * @param operationId OperationID represents the operation whose status needs to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectedItemOperationStatusesGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProtectedItemOperationStatusesGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item name whose details are to be fetched.
   * @param operationId OperationID represents the operation whose status needs to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item name whose details are to be fetched.
   * @param operationId OperationID represents the operation whose status needs to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.ProtectedItemOperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProtectedItemOperationStatusesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/operationsStatus/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

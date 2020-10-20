/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/protectionContainerOperationResultsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ProtectionContainerOperationResults. */
export class ProtectionContainerOperationResults {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ProtectionContainerOperationResults.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches the result of any operation on the container.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Container name whose information should be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProtectionContainerOperationResultsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProtectionContainerOperationResultsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Container name whose information should be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, operationId: string, callback: msRest.ServiceCallback<Models.ProtectionContainerResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Container name whose information should be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProtectionContainerResource>): void;
  get(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProtectionContainerResource>, callback?: msRest.ServiceCallback<Models.ProtectionContainerResource>): Promise<Models.ProtectionContainerOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProtectionContainerOperationResultsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/operationResults/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.operationId
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
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

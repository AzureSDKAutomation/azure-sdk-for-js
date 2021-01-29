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
import * as Mappers from "../models/backupWorkloadItemsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupWorkloadItems. */
export class BackupWorkloadItems {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupWorkloadItems.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides a pageable list of workload item of a specific container according to the query filter
   * and the pagination
   * parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupWorkloadItemsListResponse>
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: Models.BackupWorkloadItemsListOptionalParams): Promise<Models.BackupWorkloadItemsListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, callback: msRest.ServiceCallback<Models.WorkloadItemResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options: Models.BackupWorkloadItemsListOptionalParams, callback: msRest.ServiceCallback<Models.WorkloadItemResourceList>): void;
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, options?: Models.BackupWorkloadItemsListOptionalParams | msRest.ServiceCallback<Models.WorkloadItemResourceList>, callback?: msRest.ServiceCallback<Models.WorkloadItemResourceList>): Promise<Models.BackupWorkloadItemsListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupWorkloadItemsListResponse>;
  }

  /**
   * Provides a pageable list of workload item of a specific container according to the query filter
   * and the pagination
   * parameters.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupWorkloadItemsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.BackupWorkloadItemsListNextOptionalParams): Promise<Models.BackupWorkloadItemsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkloadItemResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.BackupWorkloadItemsListNextOptionalParams, callback: msRest.ServiceCallback<Models.WorkloadItemResourceList>): void;
  listNext(nextPageLink: string, options?: Models.BackupWorkloadItemsListNextOptionalParams | msRest.ServiceCallback<Models.WorkloadItemResourceList>, callback?: msRest.ServiceCallback<Models.WorkloadItemResourceList>): Promise<Models.BackupWorkloadItemsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BackupWorkloadItemsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/items",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadItemResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
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
    Parameters.apiVersion0,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadItemResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

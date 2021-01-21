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
import * as Mappers from "../models/recoveryPointsCrrMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a RecoveryPointsCrr. */
export class RecoveryPointsCrr {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a RecoveryPointsCrr.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Lists the backup copies for the backed up item.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoveryPointsCrrListResponse>
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: Models.RecoveryPointsCrrListOptionalParams): Promise<Models.RecoveryPointsCrrListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options: Models.RecoveryPointsCrrListOptionalParams, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  list(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, options?: Models.RecoveryPointsCrrListOptionalParams | msRest.ServiceCallback<Models.RecoveryPointResourceList>, callback?: msRest.ServiceCallback<Models.RecoveryPointResourceList>): Promise<Models.RecoveryPointsCrrListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RecoveryPointsCrrListResponse>;
  }

  /**
   * Lists the backup copies for the backed up item.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoveryPointsCrrListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.RecoveryPointsCrrListNextOptionalParams): Promise<Models.RecoveryPointsCrrListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.RecoveryPointsCrrListNextOptionalParams, callback: msRest.ServiceCallback<Models.RecoveryPointResourceList>): void;
  listNext(nextPageLink: string, options?: Models.RecoveryPointsCrrListNextOptionalParams | msRest.ServiceCallback<Models.RecoveryPointResourceList>, callback?: msRest.ServiceCallback<Models.RecoveryPointResourceList>): Promise<Models.RecoveryPointsCrrListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RecoveryPointsCrrListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList
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
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

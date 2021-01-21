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
import * as Mappers from "../models/backupPoliciesMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupPolicies. */
export class BackupPolicies {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupPolicies.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Lists of backup policies associated with Recovery Services Vault. API provides pagination
   * parameters to fetch
   * scoped results.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupPoliciesListResponse>
   */
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupPoliciesListOptionalParams): Promise<Models.BackupPoliciesListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProtectionPolicyResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, options: Models.BackupPoliciesListOptionalParams, callback: msRest.ServiceCallback<Models.ProtectionPolicyResourceList>): void;
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupPoliciesListOptionalParams | msRest.ServiceCallback<Models.ProtectionPolicyResourceList>, callback?: msRest.ServiceCallback<Models.ProtectionPolicyResourceList>): Promise<Models.BackupPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupPoliciesListResponse>;
  }

  /**
   * Lists of backup policies associated with Recovery Services Vault. API provides pagination
   * parameters to fetch
   * scoped results.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupPoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.BackupPoliciesListNextOptionalParams): Promise<Models.BackupPoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProtectionPolicyResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.BackupPoliciesListNextOptionalParams, callback: msRest.ServiceCallback<Models.ProtectionPolicyResourceList>): void;
  listNext(nextPageLink: string, options?: Models.BackupPoliciesListNextOptionalParams | msRest.ServiceCallback<Models.ProtectionPolicyResourceList>, callback?: msRest.ServiceCallback<Models.ProtectionPolicyResourceList>): Promise<Models.BackupPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BackupPoliciesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ProtectionPolicyResourceList
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
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionPolicyResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

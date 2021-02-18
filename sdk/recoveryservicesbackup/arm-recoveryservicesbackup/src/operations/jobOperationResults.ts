/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/jobOperationResultsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a JobOperationResults. */
export class JobOperationResults {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a JobOperationResults.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches the result of any operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param jobName Job name whose operation result has to be fetched.
   * @param operationId OperationID which represents the operation whose result has to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  get(vaultName: string, resourceGroupName: string, jobName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param jobName Job name whose operation result has to be fetched.
   * @param operationId OperationID which represents the operation whose result has to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, jobName: string, operationId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param jobName Job name whose operation result has to be fetched.
   * @param operationId OperationID which represents the operation whose result has to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, jobName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get(vaultName: string, resourceGroupName: string, jobName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        jobName,
        operationId,
        options
      },
      getOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/{jobName}/operationResults/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

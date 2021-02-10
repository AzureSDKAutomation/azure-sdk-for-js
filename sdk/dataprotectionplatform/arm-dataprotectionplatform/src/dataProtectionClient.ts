/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { DataProtectionClientContext } from "./dataProtectionClientContext";


class DataProtectionClient extends DataProtectionClientContext {
  // Operation groups
  backupVaults: operations.BackupVaults;
  operationResult: operations.OperationResult;
  operations: operations.Operations;
  backupPolicies: operations.BackupPolicies;
  backupInstances: operations.BackupInstances;
  recoveryPoints: operations.RecoveryPoints;
  recoveryPoint: operations.RecoveryPoint;
  jobs: operations.Jobs;
  job: operations.Job;
  exportJobs: operations.ExportJobs;
  exportJobsOperationResult: operations.ExportJobsOperationResult;

  /**
   * Initializes a new instance of the DataProtectionClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription Id.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DataProtectionClientOptions) {
    super(credentials, subscriptionId, options);
    this.backupVaults = new operations.BackupVaults(this);
    this.operationResult = new operations.OperationResult(this);
    this.operations = new operations.Operations(this);
    this.backupPolicies = new operations.BackupPolicies(this);
    this.backupInstances = new operations.BackupInstances(this);
    this.recoveryPoints = new operations.RecoveryPoints(this);
    this.recoveryPoint = new operations.RecoveryPoint(this);
    this.jobs = new operations.Jobs(this);
    this.job = new operations.Job(this);
    this.exportJobs = new operations.ExportJobs(this);
    this.exportJobsOperationResult = new operations.ExportJobsOperationResult(this);
  }

  /**
   * @summary Gets the operation status for a resource.
   * @param location
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<Models.GetOperationStatusResponse>
   */
  getOperationStatus(location: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.GetOperationStatusResponse>;
  /**
   * @param location
   * @param operationId
   * @param callback The callback
   */
  getOperationStatus(location: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationResource>): void;
  /**
   * @param location
   * @param operationId
   * @param options The optional parameters
   * @param callback The callback
   */
  getOperationStatus(location: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationResource>): void;
  getOperationStatus(location: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationResource>, callback?: msRest.ServiceCallback<Models.OperationResource>): Promise<Models.GetOperationStatusResponse> {
    return this.sendOperationRequest(
      {
        location,
        operationId,
        options
      },
      getOperationStatusOperationSpec,
      callback) as Promise<Models.GetOperationStatusResponse>;
  }

  /**
   * @param vaultName The name of the backup vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<Models.GetOperationResultPatchResponse>
   */
  getOperationResultPatch(vaultName: string, resourceGroupName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.GetOperationResultPatchResponse>;
  /**
   * @param vaultName The name of the backup vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param operationId
   * @param callback The callback
   */
  getOperationResultPatch(vaultName: string, resourceGroupName: string, operationId: string, callback: msRest.ServiceCallback<Models.BackupVaultResource>): void;
  /**
   * @param vaultName The name of the backup vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param operationId
   * @param options The optional parameters
   * @param callback The callback
   */
  getOperationResultPatch(vaultName: string, resourceGroupName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupVaultResource>): void;
  getOperationResultPatch(vaultName: string, resourceGroupName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupVaultResource>, callback?: msRest.ServiceCallback<Models.BackupVaultResource>): Promise<Models.GetOperationResultPatchResponse> {
    return this.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        operationId,
        options
      },
      getOperationResultPatchOperationSpec,
      callback) as Promise<Models.GetOperationResultPatchResponse>;
  }

  /**
   * @summary Validates if a feature is supported
   * @param location
   * @param parameters Feature support request object
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckFeatureSupportResponse>
   */
  checkFeatureSupport(location: string, parameters: Models.FeatureValidationRequestBaseUnion, options?: msRest.RequestOptionsBase): Promise<Models.CheckFeatureSupportResponse>;
  /**
   * @param location
   * @param parameters Feature support request object
   * @param callback The callback
   */
  checkFeatureSupport(location: string, parameters: Models.FeatureValidationRequestBaseUnion, callback: msRest.ServiceCallback<Models.FeatureValidationResponseBaseUnion>): void;
  /**
   * @param location
   * @param parameters Feature support request object
   * @param options The optional parameters
   * @param callback The callback
   */
  checkFeatureSupport(location: string, parameters: Models.FeatureValidationRequestBaseUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureValidationResponseBaseUnion>): void;
  checkFeatureSupport(location: string, parameters: Models.FeatureValidationRequestBaseUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureValidationResponseBaseUnion>, callback?: msRest.ServiceCallback<Models.FeatureValidationResponseBaseUnion>): Promise<Models.CheckFeatureSupportResponse> {
    return this.sendOperationRequest(
      {
        location,
        parameters,
        options
      },
      checkFeatureSupportOperationSpec,
      callback) as Promise<Models.CheckFeatureSupportResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/operationStatus/{operationId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationResultPatchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/operationResults/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupVaultResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkFeatureSupportOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/checkFeatureSupport",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.FeatureValidationRequestBase,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FeatureValidationResponseBase
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

export {
  DataProtectionClient,
  DataProtectionClientContext,
  Models as DataProtectionModels,
  Mappers as DataProtectionMappers
};
export * from "./operations";
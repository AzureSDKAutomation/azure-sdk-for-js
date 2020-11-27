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
import * as Mappers from "../models/operationMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a Operation. */
export class Operation {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a Operation.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Validate operation for specified backed up item. This is a synchronous operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters resource validate operation request
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationValidateResponse>
   */
  validate(vaultName: string, resourceGroupName: string, parameters: Models.ValidateOperationRequestUnion, options?: msRest.RequestOptionsBase): Promise<Models.OperationValidateResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters resource validate operation request
   * @param callback The callback
   */
  validate(vaultName: string, resourceGroupName: string, parameters: Models.ValidateOperationRequestUnion, callback: msRest.ServiceCallback<Models.ValidateOperationsResponse>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters resource validate operation request
   * @param options The optional parameters
   * @param callback The callback
   */
  validate(vaultName: string, resourceGroupName: string, parameters: Models.ValidateOperationRequestUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidateOperationsResponse>): void;
  validate(vaultName: string, resourceGroupName: string, parameters: Models.ValidateOperationRequestUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidateOperationsResponse>, callback?: msRest.ServiceCallback<Models.ValidateOperationsResponse>): Promise<Models.OperationValidateResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        parameters,
        options
      },
      validateOperationSpec,
      callback) as Promise<Models.OperationValidateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const validateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperation",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ValidateOperationRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidateOperationsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

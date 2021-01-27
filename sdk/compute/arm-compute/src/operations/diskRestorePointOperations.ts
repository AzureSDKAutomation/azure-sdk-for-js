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
import * as Mappers from "../models/diskRestorePointOperationsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a DiskRestorePointOperations. */
export class DiskRestorePointOperations {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a DiskRestorePointOperations.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Get disk restorePoint resource
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   * point belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   * length is 80 characters.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point
   * belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is
   * 80 characters.
   * @param diskRestorePointName The name of the disk restore point created. Supported characters for
   * the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskRestorePointGetResponse>
   */
  get(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, diskRestorePointName: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskRestorePointGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   * point belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   * length is 80 characters.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point
   * belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is
   * 80 characters.
   * @param diskRestorePointName The name of the disk restore point created. Supported characters for
   * the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param callback The callback
   */
  get(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, diskRestorePointName: string, callback: msRest.ServiceCallback<Models.DiskRestorePoint>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   * point belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   * length is 80 characters.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point
   * belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is
   * 80 characters.
   * @param diskRestorePointName The name of the disk restore point created. Supported characters for
   * the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, diskRestorePointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskRestorePoint>): void;
  get(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, diskRestorePointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskRestorePoint>, callback?: msRest.ServiceCallback<Models.DiskRestorePoint>): Promise<Models.DiskRestorePointGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DiskRestorePointGetResponse>;
  }

  /**
   * Lists diskRestorePoints under a vmRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   * point belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   * length is 80 characters.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point
   * belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is
   * 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskRestorePointListByRestorePointResponse>
   */
  listByRestorePoint(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskRestorePointListByRestorePointResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   * point belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   * length is 80 characters.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point
   * belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is
   * 80 characters.
   * @param callback The callback
   */
  listByRestorePoint(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, callback: msRest.ServiceCallback<Models.DiskRestorePointList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   * point belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name
   * length is 80 characters.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point
   * belongs. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is
   * 80 characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRestorePoint(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskRestorePointList>): void;
  listByRestorePoint(resourceGroupName: string, restorePointCollectionName: string, vmRestorePointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskRestorePointList>, callback?: msRest.ServiceCallback<Models.DiskRestorePointList>): Promise<Models.DiskRestorePointListByRestorePointResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        options
      },
      listByRestorePointOperationSpec,
      callback) as Promise<Models.DiskRestorePointListByRestorePointResponse>;
  }

  /**
   * Lists diskRestorePoints under a vmRestorePoint.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiskRestorePointListByRestorePointNextResponse>
   */
  listByRestorePointNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DiskRestorePointListByRestorePointNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByRestorePointNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskRestorePointList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRestorePointNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskRestorePointList>): void;
  listByRestorePointNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DiskRestorePointList>, callback?: msRest.ServiceCallback<Models.DiskRestorePointList>): Promise<Models.DiskRestorePointListByRestorePointNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByRestorePointNextOperationSpec,
      callback) as Promise<Models.DiskRestorePointListByRestorePointNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName,
    Parameters.diskRestorePointName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskRestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRestorePointOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskRestorePointList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRestorePointNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiskRestorePointList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

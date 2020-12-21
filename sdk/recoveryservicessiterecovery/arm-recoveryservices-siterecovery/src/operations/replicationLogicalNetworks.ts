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
import * as Mappers from "../models/replicationLogicalNetworksMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationLogicalNetworks. */
export class ReplicationLogicalNetworks {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationLogicalNetworks.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the logical networks of the Azure Site Recovery fabric
   * @summary Gets the list of logical networks under a fabric.
   * @param fabricName Server Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsResponse>
   */
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsResponse>;
  /**
   * @param fabricName Server Id.
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, callback: msRest.ServiceCallback<Models.LogicalNetworkCollection>): void;
  /**
   * @param fabricName Server Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LogicalNetworkCollection>): void;
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LogicalNetworkCollection>, callback?: msRest.ServiceCallback<Models.LogicalNetworkCollection>): Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        options
      },
      listByReplicationFabricsOperationSpec,
      callback) as Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsResponse>;
  }

  /**
   * Gets the details of a logical network.
   * @summary Gets a logical network with specified server id and logical network name.
   * @param fabricName Server Id.
   * @param logicalNetworkName Logical network name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationLogicalNetworksGetResponse>
   */
  get(fabricName: string, logicalNetworkName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationLogicalNetworksGetResponse>;
  /**
   * @param fabricName Server Id.
   * @param logicalNetworkName Logical network name.
   * @param callback The callback
   */
  get(fabricName: string, logicalNetworkName: string, callback: msRest.ServiceCallback<Models.LogicalNetwork>): void;
  /**
   * @param fabricName Server Id.
   * @param logicalNetworkName Logical network name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, logicalNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LogicalNetwork>): void;
  get(fabricName: string, logicalNetworkName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LogicalNetwork>, callback?: msRest.ServiceCallback<Models.LogicalNetwork>): Promise<Models.ReplicationLogicalNetworksGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        logicalNetworkName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationLogicalNetworksGetResponse>;
  }

  /**
   * Lists all the logical networks of the Azure Site Recovery fabric
   * @summary Gets the list of logical networks under a fabric.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsNextResponse>
   */
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LogicalNetworkCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LogicalNetworkCollection>): void;
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LogicalNetworkCollection>, callback?: msRest.ServiceCallback<Models.LogicalNetworkCollection>): Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationFabricsNextOperationSpec,
      callback) as Promise<Models.ReplicationLogicalNetworksListByReplicationFabricsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationFabricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworkCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks/{logicalNetworkName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.logicalNetworkName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationFabricsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworkCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

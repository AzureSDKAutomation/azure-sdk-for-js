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
import * as operations from "./operations";
import { HybridComputeManagementClientContext } from "./hybridComputeManagementClientContext";


class HybridComputeManagementClient extends HybridComputeManagementClientContext {
  // Operation groups
  machines: operations.Machines;
  machineExtensions: operations.MachineExtensions;
  operations: operations.Operations;
  privateLinkScopes: operations.PrivateLinkScopes;
  privateLinkResources: operations.PrivateLinkResources;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkScopedResources: operations.PrivateLinkScopedResources;

  /**
   * Initializes a new instance of the HybridComputeManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.HybridComputeManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.machines = new operations.Machines(this);
    this.machineExtensions = new operations.MachineExtensions(this);
    this.operations = new operations.Operations(this);
    this.privateLinkScopes = new operations.PrivateLinkScopes(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkScopedResources = new operations.PrivateLinkScopedResources(this);
  }
}

// Operation Specifications

export {
  HybridComputeManagementClient,
  HybridComputeManagementClientContext,
  Models as HybridComputeManagementModels,
  Mappers as HybridComputeManagementMappers
};
export * from "./operations";

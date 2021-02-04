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
import { ContainerInstanceManagementClientContext } from "./containerInstanceManagementClientContext";


class ContainerInstanceManagementClient extends ContainerInstanceManagementClientContext {
  // Operation groups
  containerGroups: operations.ContainerGroups;
  operations: operations.Operations;
  location: operations.Location;
  containers: operations.Containers;

  /**
   * Initializes a new instance of the ContainerInstanceManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ContainerInstanceManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.containerGroups = new operations.ContainerGroups(this);
    this.operations = new operations.Operations(this);
    this.location = new operations.Location(this);
    this.containers = new operations.Containers(this);
  }
}

// Operation Specifications

export {
  ContainerInstanceManagementClient,
  ContainerInstanceManagementClientContext,
  Models as ContainerInstanceManagementModels,
  Mappers as ContainerInstanceManagementMappers
};
export * from "./operations";

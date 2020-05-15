/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { HanaManagementClientContext } from "./hanaManagementClientContext";


class HanaManagementClient extends HanaManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  sapMonitors: operations.SapMonitors;
  providerInstances: operations.ProviderInstances;

  /**
   * Initializes a new instance of the HanaManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription ID which uniquely identify Microsoft Azure subscription. The
   * subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.HanaManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.sapMonitors = new operations.SapMonitors(this);
    this.providerInstances = new operations.ProviderInstances(this);
  }
}

// Operation Specifications

export {
  HanaManagementClient,
  HanaManagementClientContext,
  Models as HanaManagementModels,
  Mappers as HanaManagementMappers
};
export * from "./operations";

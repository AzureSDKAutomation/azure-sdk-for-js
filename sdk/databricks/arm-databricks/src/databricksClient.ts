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
import { DatabricksClientContext } from "./databricksClientContext";


class DatabricksClient extends DatabricksClientContext {
  // Operation groups
  workspaces: operations.Workspaces;
  vNetPeering: operations.VNetPeering;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the DatabricksClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DatabricksClientOptions) {
    super(credentials, subscriptionId, options);
    this.workspaces = new operations.Workspaces(this);
    this.vNetPeering = new operations.VNetPeering(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  DatabricksClient,
  DatabricksClientContext,
  Models as DatabricksModels,
  Mappers as DatabricksMappers
};
export * from "./operations";

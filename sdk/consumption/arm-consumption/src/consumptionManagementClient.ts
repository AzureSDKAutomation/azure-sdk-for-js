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
import { ConsumptionManagementClientContext } from "./consumptionManagementClientContext";


class ConsumptionManagementClient extends ConsumptionManagementClientContext {
  // Operation groups
  tags: operations.Tags;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the ConsumptionManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.ConsumptionManagementClientOptions) {
    super(credentials, options);
    this.tags = new operations.Tags(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  ConsumptionManagementClient,
  ConsumptionManagementClientContext,
  Models as ConsumptionManagementModels,
  Mappers as ConsumptionManagementMappers
};
export * from "./operations";

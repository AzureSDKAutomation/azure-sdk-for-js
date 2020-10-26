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
import { ApplicationInsightsManagementClientContext } from "./applicationInsightsManagementClientContext";


class ApplicationInsightsManagementClient extends ApplicationInsightsManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  workbooks: operations.Workbooks;

  /**
   * Initializes a new instance of the ApplicationInsightsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ApplicationInsightsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.workbooks = new operations.Workbooks(this);
  }
}

// Operation Specifications

export {
  ApplicationInsightsManagementClient,
  ApplicationInsightsManagementClientContext,
  Models as ApplicationInsightsManagementModels,
  Mappers as ApplicationInsightsManagementMappers
};
export * from "./operations";

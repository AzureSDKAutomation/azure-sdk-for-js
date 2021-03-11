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
import { StreamAnalyticsManagementClientContext } from "./streamAnalyticsManagementClientContext";


class StreamAnalyticsManagementClient extends StreamAnalyticsManagementClientContext {
  // Operation groups
  clusters: operations.Clusters;
  privateEndpoints: operations.PrivateEndpoints;

  /**
   * Initializes a new instance of the StreamAnalyticsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.StreamAnalyticsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.clusters = new operations.Clusters(this);
    this.privateEndpoints = new operations.PrivateEndpoints(this);
  }
}

// Operation Specifications

export {
  StreamAnalyticsManagementClient,
  StreamAnalyticsManagementClientContext,
  Models as StreamAnalyticsManagementModels,
  Mappers as StreamAnalyticsManagementMappers
};
export * from "./operations";

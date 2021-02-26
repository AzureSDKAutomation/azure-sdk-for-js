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
import { CommunicationServiceManagementClientContext } from "./communicationServiceManagementClientContext";


class CommunicationServiceManagementClient extends CommunicationServiceManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  communicationService: operations.CommunicationService;
  operationStatuses: operations.OperationStatuses;

  /**
   * Initializes a new instance of the CommunicationServiceManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription ID which uniquely identifies the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.CommunicationServiceManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.communicationService = new operations.CommunicationService(this);
    this.operationStatuses = new operations.OperationStatuses(this);
  }
}

// Operation Specifications

export {
  CommunicationServiceManagementClient,
  CommunicationServiceManagementClientContext,
  Models as CommunicationServiceManagementModels,
  Mappers as CommunicationServiceManagementMappers
};
export * from "./operations";

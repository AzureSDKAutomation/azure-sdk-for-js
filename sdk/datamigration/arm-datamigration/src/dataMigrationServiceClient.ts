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
import { DataMigrationServiceClientContext } from "./dataMigrationServiceClientContext";


class DataMigrationServiceClient extends DataMigrationServiceClientContext {
  // Operation groups
  resourceSkus: operations.ResourceSkus;
  services: operations.Services;
  tasks: operations.Tasks;
  serviceTasks: operations.ServiceTasks;
  projects: operations.Projects;
  usages: operations.Usages;
  operations: operations.Operations;
  files: operations.Files;

  /**
   * Initializes a new instance of the DataMigrationServiceClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Identifier of the subscription
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DataMigrationServiceClientOptions) {
    super(credentials, subscriptionId, options);
    this.resourceSkus = new operations.ResourceSkus(this);
    this.services = new operations.Services(this);
    this.tasks = new operations.Tasks(this);
    this.serviceTasks = new operations.ServiceTasks(this);
    this.projects = new operations.Projects(this);
    this.usages = new operations.Usages(this);
    this.operations = new operations.Operations(this);
    this.files = new operations.Files(this);
  }
}

// Operation Specifications

export {
  DataMigrationServiceClient,
  DataMigrationServiceClientContext,
  Models as DataMigrationServiceModels,
  Mappers as DataMigrationServiceMappers
};
export * from "./operations";

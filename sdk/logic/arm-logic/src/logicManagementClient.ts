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
import { LogicManagementClientContext } from "./logicManagementClientContext";


class LogicManagementClient extends LogicManagementClientContext {
  // Operation groups
  workflows: operations.Workflows;
  workflowVersions: operations.WorkflowVersions;
  workflowTriggers: operations.WorkflowTriggers;
  workflowVersionTriggers: operations.WorkflowVersionTriggers;
  workflowTriggerHistories: operations.WorkflowTriggerHistories;
  workflowRuns: operations.WorkflowRuns;
  workflowRunActions: operations.WorkflowRunActions;
  workflowRunActionRepetitions: operations.WorkflowRunActionRepetitions;
  workflowRunActionRepetitionsRequestHistories: operations.WorkflowRunActionRepetitionsRequestHistories;
  workflowRunActionRequestHistories: operations.WorkflowRunActionRequestHistories;
  workflowRunActionScopeRepetitions: operations.WorkflowRunActionScopeRepetitions;
  workflowRunOperations: operations.WorkflowRunOperations;
  integrationAccounts: operations.IntegrationAccounts;
  integrationAccountAssemblies: operations.IntegrationAccountAssemblies;
  integrationAccountBatchConfigurations: operations.IntegrationAccountBatchConfigurations;
  integrationAccountSchemas: operations.IntegrationAccountSchemas;
  integrationAccountMaps: operations.IntegrationAccountMaps;
  integrationAccountPartners: operations.IntegrationAccountPartners;
  integrationAccountAgreements: operations.IntegrationAccountAgreements;
  integrationAccountCertificates: operations.IntegrationAccountCertificates;
  integrationAccountSessions: operations.IntegrationAccountSessions;
  integrationServiceEnvironments: operations.IntegrationServiceEnvironments;
  integrationServiceEnvironmentSkus: operations.IntegrationServiceEnvironmentSkus;
  integrationServiceEnvironmentNetworkHealth: operations.IntegrationServiceEnvironmentNetworkHealth;
  integrationServiceEnvironmentManagedApis: operations.IntegrationServiceEnvironmentManagedApis;
  integrationServiceEnvironmentManagedApiOperations: operations.IntegrationServiceEnvironmentManagedApiOperations;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the LogicManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription id.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.LogicManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.workflows = new operations.Workflows(this);
    this.workflowVersions = new operations.WorkflowVersions(this);
    this.workflowTriggers = new operations.WorkflowTriggers(this);
    this.workflowVersionTriggers = new operations.WorkflowVersionTriggers(this);
    this.workflowTriggerHistories = new operations.WorkflowTriggerHistories(this);
    this.workflowRuns = new operations.WorkflowRuns(this);
    this.workflowRunActions = new operations.WorkflowRunActions(this);
    this.workflowRunActionRepetitions = new operations.WorkflowRunActionRepetitions(this);
    this.workflowRunActionRepetitionsRequestHistories = new operations.WorkflowRunActionRepetitionsRequestHistories(this);
    this.workflowRunActionRequestHistories = new operations.WorkflowRunActionRequestHistories(this);
    this.workflowRunActionScopeRepetitions = new operations.WorkflowRunActionScopeRepetitions(this);
    this.workflowRunOperations = new operations.WorkflowRunOperations(this);
    this.integrationAccounts = new operations.IntegrationAccounts(this);
    this.integrationAccountAssemblies = new operations.IntegrationAccountAssemblies(this);
    this.integrationAccountBatchConfigurations = new operations.IntegrationAccountBatchConfigurations(this);
    this.integrationAccountSchemas = new operations.IntegrationAccountSchemas(this);
    this.integrationAccountMaps = new operations.IntegrationAccountMaps(this);
    this.integrationAccountPartners = new operations.IntegrationAccountPartners(this);
    this.integrationAccountAgreements = new operations.IntegrationAccountAgreements(this);
    this.integrationAccountCertificates = new operations.IntegrationAccountCertificates(this);
    this.integrationAccountSessions = new operations.IntegrationAccountSessions(this);
    this.integrationServiceEnvironments = new operations.IntegrationServiceEnvironments(this);
    this.integrationServiceEnvironmentSkus = new operations.IntegrationServiceEnvironmentSkus(this);
    this.integrationServiceEnvironmentNetworkHealth = new operations.IntegrationServiceEnvironmentNetworkHealth(this);
    this.integrationServiceEnvironmentManagedApis = new operations.IntegrationServiceEnvironmentManagedApis(this);
    this.integrationServiceEnvironmentManagedApiOperations = new operations.IntegrationServiceEnvironmentManagedApiOperations(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  LogicManagementClient,
  LogicManagementClientContext,
  Models as LogicManagementModels,
  Mappers as LogicManagementMappers
};
export * from "./operations";

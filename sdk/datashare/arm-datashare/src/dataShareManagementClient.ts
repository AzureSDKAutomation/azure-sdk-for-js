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
import { DataShareManagementClientContext } from "./dataShareManagementClientContext";


class DataShareManagementClient extends DataShareManagementClientContext {
  // Operation groups
  accounts: operations.Accounts;
  consumerInvitations: operations.ConsumerInvitations;
  dataSets: operations.DataSets;
  dataSetMappings: operations.DataSetMappings;
  invitations: operations.Invitations;
  operations: operations.Operations;
  shares: operations.Shares;
  providerShareSubscriptions: operations.ProviderShareSubscriptions;
  shareSubscriptions: operations.ShareSubscriptions;
  consumerSourceDataSets: operations.ConsumerSourceDataSets;
  synchronizationSettings: operations.SynchronizationSettings;
  triggers: operations.Triggers;

  /**
   * Initializes a new instance of the DataShareManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription identifier
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DataShareManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.accounts = new operations.Accounts(this);
    this.consumerInvitations = new operations.ConsumerInvitations(this);
    this.dataSets = new operations.DataSets(this);
    this.dataSetMappings = new operations.DataSetMappings(this);
    this.invitations = new operations.Invitations(this);
    this.operations = new operations.Operations(this);
    this.shares = new operations.Shares(this);
    this.providerShareSubscriptions = new operations.ProviderShareSubscriptions(this);
    this.shareSubscriptions = new operations.ShareSubscriptions(this);
    this.consumerSourceDataSets = new operations.ConsumerSourceDataSets(this);
    this.synchronizationSettings = new operations.SynchronizationSettings(this);
    this.triggers = new operations.Triggers(this);
  }
}

// Operation Specifications

export {
  DataShareManagementClient,
  DataShareManagementClientContext,
  Models as DataShareManagementModels,
  Mappers as DataShareManagementMappers
};
export * from "./operations";

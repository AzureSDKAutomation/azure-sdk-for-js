/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/replicationMigrationItemsMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationMigrationItems. */
export class ReplicationMigrationItems {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationMigrationItems.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of ASR migration items in the protection container.
   * @summary Gets the list of migration items in the protection container.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersResponse>
   */
  listByReplicationProtectionContainers(fabricName: string, protectionContainerName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersResponse>;
  /**
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param callback The callback
   */
  listByReplicationProtectionContainers(fabricName: string, protectionContainerName: string, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  /**
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationProtectionContainers(fabricName: string, protectionContainerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  listByReplicationProtectionContainers(fabricName: string, protectionContainerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationItemCollection>, callback?: msRest.ServiceCallback<Models.MigrationItemCollection>): Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        protectionContainerName,
        options
      },
      listByReplicationProtectionContainersOperationSpec,
      callback) as Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersResponse>;
  }

  /**
   * @summary Gets the details of a migration item.
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsGetResponse>
   */
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsGetResponse>;
  /**
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param callback The callback
   */
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, callback: msRest.ServiceCallback<Models.MigrationItem>): void;
  /**
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationItem>): void;
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationItem>, callback?: msRest.ServiceCallback<Models.MigrationItem>): Promise<Models.ReplicationMigrationItemsGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationMigrationItemsGetResponse>;
  }

  /**
   * The operation to create an ASR migration item (enable migration).
   * @summary Enables migration.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param input Enable migration input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsCreateResponse>
   */
  create(fabricName: string, protectionContainerName: string, migrationItemName: string, input: Models.EnableMigrationInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsCreateResponse> {
    return this.beginCreate(fabricName,protectionContainerName,migrationItemName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationMigrationItemsCreateResponse>;
  }

  /**
   * The operation to delete an ASR migration item.
   * @summary Delete the migration item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(fabricName: string, protectionContainerName: string, migrationItemName: string, options?: Models.ReplicationMigrationItemsDeleteMethodOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(fabricName,protectionContainerName,migrationItemName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to update the recovery settings of an ASR migration item.
   * @summary Updates migration item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param input Update migration item input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsUpdateResponse>
   */
  update(fabricName: string, protectionContainerName: string, migrationItemName: string, input: Models.UpdateMigrationItemInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsUpdateResponse> {
    return this.beginUpdate(fabricName,protectionContainerName,migrationItemName,input,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationMigrationItemsUpdateResponse>;
  }

  /**
   * The operation to initiate migration of the item.
   * @summary Migrate item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param migrateInput Migrate input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsMigrateResponse>
   */
  migrate(fabricName: string, protectionContainerName: string, migrationItemName: string, migrateInput: Models.MigrateInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsMigrateResponse> {
    return this.beginMigrate(fabricName,protectionContainerName,migrationItemName,migrateInput,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationMigrationItemsMigrateResponse>;
  }

  /**
   * The operation to initiate test migration of the item.
   * @summary Test migrate item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param testMigrateInput Test migrate input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsTestMigrateResponse>
   */
  testMigrate(fabricName: string, protectionContainerName: string, migrationItemName: string, testMigrateInput: Models.TestMigrateInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsTestMigrateResponse> {
    return this.beginTestMigrate(fabricName,protectionContainerName,migrationItemName,testMigrateInput,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationMigrationItemsTestMigrateResponse>;
  }

  /**
   * The operation to initiate test migrate cleanup.
   * @summary Test migrate cleanup.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param testMigrateCleanupInput Test migrate cleanup input.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsTestMigrateCleanupResponse>
   */
  testMigrateCleanup(fabricName: string, protectionContainerName: string, migrationItemName: string, testMigrateCleanupInput: Models.TestMigrateCleanupInput, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsTestMigrateCleanupResponse> {
    return this.beginTestMigrateCleanup(fabricName,protectionContainerName,migrationItemName,testMigrateCleanupInput,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationMigrationItemsTestMigrateCleanupResponse>;
  }

  /**
   * @summary Gets the list of migration items in the vault.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsListResponse>
   */
  list(options?: Models.ReplicationMigrationItemsListOptionalParams): Promise<Models.ReplicationMigrationItemsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ReplicationMigrationItemsListOptionalParams, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  list(options?: Models.ReplicationMigrationItemsListOptionalParams | msRest.ServiceCallback<Models.MigrationItemCollection>, callback?: msRest.ServiceCallback<Models.MigrationItemCollection>): Promise<Models.ReplicationMigrationItemsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationMigrationItemsListResponse>;
  }

  /**
   * The operation to create an ASR migration item (enable migration).
   * @summary Enables migration.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param input Enable migration input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(fabricName: string, protectionContainerName: string, migrationItemName: string, input: Models.EnableMigrationInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        input,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * The operation to delete an ASR migration item.
   * @summary Delete the migration item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(fabricName: string, protectionContainerName: string, migrationItemName: string, options?: Models.ReplicationMigrationItemsBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The operation to update the recovery settings of an ASR migration item.
   * @summary Updates migration item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param input Update migration item input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(fabricName: string, protectionContainerName: string, migrationItemName: string, input: Models.UpdateMigrationItemInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        input,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The operation to initiate migration of the item.
   * @summary Migrate item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param migrateInput Migrate input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginMigrate(fabricName: string, protectionContainerName: string, migrationItemName: string, migrateInput: Models.MigrateInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        migrateInput,
        options
      },
      beginMigrateOperationSpec,
      options);
  }

  /**
   * The operation to initiate test migration of the item.
   * @summary Test migrate item.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param testMigrateInput Test migrate input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTestMigrate(fabricName: string, protectionContainerName: string, migrationItemName: string, testMigrateInput: Models.TestMigrateInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        testMigrateInput,
        options
      },
      beginTestMigrateOperationSpec,
      options);
  }

  /**
   * The operation to initiate test migrate cleanup.
   * @summary Test migrate cleanup.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param testMigrateCleanupInput Test migrate cleanup input.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTestMigrateCleanup(fabricName: string, protectionContainerName: string, migrationItemName: string, testMigrateCleanupInput: Models.TestMigrateCleanupInput, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        testMigrateCleanupInput,
        options
      },
      beginTestMigrateCleanupOperationSpec,
      options);
  }

  /**
   * Gets the list of ASR migration items in the protection container.
   * @summary Gets the list of migration items in the protection container.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersNextResponse>
   */
  listByReplicationProtectionContainersNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationProtectionContainersNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationProtectionContainersNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  listByReplicationProtectionContainersNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationItemCollection>, callback?: msRest.ServiceCallback<Models.MigrationItemCollection>): Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationProtectionContainersNextOperationSpec,
      callback) as Promise<Models.ReplicationMigrationItemsListByReplicationProtectionContainersNextResponse>;
  }

  /**
   * @summary Gets the list of migration items in the vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationMigrationItemsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.ReplicationMigrationItemsListNextOptionalParams): Promise<Models.ReplicationMigrationItemsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ReplicationMigrationItemsListNextOptionalParams, callback: msRest.ServiceCallback<Models.MigrationItemCollection>): void;
  listNext(nextPageLink: string, options?: Models.ReplicationMigrationItemsListNextOptionalParams | msRest.ServiceCallback<Models.MigrationItemCollection>, callback?: msRest.ServiceCallback<Models.MigrationItemCollection>): Promise<Models.ReplicationMigrationItemsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationMigrationItemsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationProtectionContainersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItemCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItem
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationMigrationItems",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItemCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.EnableMigrationInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItem
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.deleteOption
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.UpdateMigrationItemInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItem
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginMigrateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrate",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "migrateInput",
    mapper: {
      ...Mappers.MigrateInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItem
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTestMigrateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/testMigrate",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "testMigrateInput",
    mapper: {
      ...Mappers.TestMigrateInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItem
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTestMigrateCleanupOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/testMigrateCleanup",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "testMigrateCleanupInput",
    mapper: {
      ...Mappers.TestMigrateCleanupInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItem
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationProtectionContainersNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItemCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationItemCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

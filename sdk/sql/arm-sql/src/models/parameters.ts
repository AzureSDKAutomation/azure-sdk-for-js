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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const administratorName: msRest.OperationURLParameter = {
  parameterPath: "administratorName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "administratorName",
    defaultValue: 'ActiveDirectory',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2014-04-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-10-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-06-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion3: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2015-05-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion4: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2017-03-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion5: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-06-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion6: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-06-01-preview',
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion7: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2020-02-02-preview',
    type: {
      name: "String"
    }
  }
};
export const backupName: msRest.OperationURLParameter = {
  parameterPath: "backupName",
  mapper: {
    required: true,
    serializedName: "backupName",
    type: {
      name: "String"
    }
  }
};
export const baselineName: msRest.OperationURLParameter = {
  parameterPath: "baselineName",
  mapper: {
    required: true,
    serializedName: "baselineName",
    type: {
      name: "Enum",
      allowedValues: [
        "master",
        "default"
      ]
    }
  }
};
export const blobAuditingPolicyName: msRest.OperationURLParameter = {
  parameterPath: "blobAuditingPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "blobAuditingPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const columnName: msRest.OperationURLParameter = {
  parameterPath: "columnName",
  mapper: {
    required: true,
    serializedName: "columnName",
    type: {
      name: "String"
    }
  }
};
export const communicationLinkName: msRest.OperationURLParameter = {
  parameterPath: "communicationLinkName",
  mapper: {
    required: true,
    serializedName: "communicationLinkName",
    type: {
      name: "String"
    }
  }
};
export const connectionPolicyName: msRest.OperationURLParameter = {
  parameterPath: "connectionPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "connectionPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const continuationToken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "continuationToken"
  ],
  mapper: {
    serializedName: "continuationToken",
    type: {
      name: "String"
    }
  }
};
export const createTimeMax: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "createTimeMax"
  ],
  mapper: {
    serializedName: "createTimeMax",
    type: {
      name: "DateTime"
    }
  }
};
export const createTimeMin: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "createTimeMin"
  ],
  mapper: {
    serializedName: "createTimeMin",
    type: {
      name: "DateTime"
    }
  }
};
export const credentialName: msRest.OperationURLParameter = {
  parameterPath: "credentialName",
  mapper: {
    required: true,
    serializedName: "credentialName",
    type: {
      name: "String"
    }
  }
};
export const databaseName: msRest.OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    required: true,
    serializedName: "databaseName",
    type: {
      name: "String"
    }
  }
};
export const databaseState: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "databaseState"
  ],
  mapper: {
    serializedName: "databaseState",
    type: {
      name: "String"
    }
  }
};
export const dataMaskingPolicyName: msRest.OperationURLParameter = {
  parameterPath: "dataMaskingPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "dataMaskingPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const dataMaskingRuleName: msRest.OperationURLParameter = {
  parameterPath: "dataMaskingRuleName",
  mapper: {
    required: true,
    serializedName: "dataMaskingRuleName",
    type: {
      name: "String"
    }
  }
};
export const dnsAliasName: msRest.OperationURLParameter = {
  parameterPath: "dnsAliasName",
  mapper: {
    required: true,
    serializedName: "dnsAliasName",
    type: {
      name: "String"
    }
  }
};
export const elasticPoolName: msRest.OperationURLParameter = {
  parameterPath: "elasticPoolName",
  mapper: {
    required: true,
    serializedName: "elasticPoolName",
    type: {
      name: "String"
    }
  }
};
export const encryptionProtectorName: msRest.OperationURLParameter = {
  parameterPath: "encryptionProtectorName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "encryptionProtectorName",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const endTime: msRest.OperationQueryParameter = {
  parameterPath: "endTime",
  mapper: {
    required: true,
    serializedName: "endTime",
    type: {
      name: "String"
    }
  }
};
export const endTimeMax: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "endTimeMax"
  ],
  mapper: {
    serializedName: "endTimeMax",
    type: {
      name: "DateTime"
    }
  }
};
export const endTimeMin: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "endTimeMin"
  ],
  mapper: {
    serializedName: "endTimeMin",
    type: {
      name: "DateTime"
    }
  }
};
export const expandChildren: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expandChildren"
  ],
  mapper: {
    serializedName: "expandChildren",
    type: {
      name: "Boolean"
    }
  }
};
export const extensionName: msRest.OperationURLParameter = {
  parameterPath: "extensionName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "extensionName",
    defaultValue: 'import',
    type: {
      name: "String"
    }
  }
};
export const failoverGroupName: msRest.OperationURLParameter = {
  parameterPath: "failoverGroupName",
  mapper: {
    required: true,
    serializedName: "failoverGroupName",
    type: {
      name: "String"
    }
  }
};
export const filter0: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filter1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const firewallRuleName: msRest.OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    required: true,
    serializedName: "firewallRuleName",
    type: {
      name: "String"
    }
  }
};
export const geoBackupPolicyName: msRest.OperationURLParameter = {
  parameterPath: "geoBackupPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "geoBackupPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const groupName: msRest.OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    required: true,
    serializedName: "groupName",
    type: {
      name: "String"
    }
  }
};
export const include: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "include"
  ],
  mapper: {
    serializedName: "include",
    type: {
      name: "String"
    }
  }
};
export const includeDisabledRecommendations: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeDisabledRecommendations"
  ],
  mapper: {
    serializedName: "includeDisabledRecommendations",
    type: {
      name: "Boolean"
    }
  }
};
export const instancePoolName: msRest.OperationURLParameter = {
  parameterPath: "instancePoolName",
  mapper: {
    required: true,
    serializedName: "instancePoolName",
    type: {
      name: "String"
    }
  }
};
export const isActive: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "isActive"
  ],
  mapper: {
    serializedName: "isActive",
    type: {
      name: "Boolean"
    }
  }
};
export const jobAgentName: msRest.OperationURLParameter = {
  parameterPath: "jobAgentName",
  mapper: {
    required: true,
    serializedName: "jobAgentName",
    type: {
      name: "String"
    }
  }
};
export const jobExecutionId: msRest.OperationURLParameter = {
  parameterPath: "jobExecutionId",
  mapper: {
    required: true,
    serializedName: "jobExecutionId",
    type: {
      name: "Uuid"
    }
  }
};
export const jobName: msRest.OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    required: true,
    serializedName: "jobName",
    type: {
      name: "String"
    }
  }
};
export const jobVersion: msRest.OperationURLParameter = {
  parameterPath: "jobVersion",
  mapper: {
    required: true,
    serializedName: "jobVersion",
    type: {
      name: "Number"
    }
  }
};
export const keyName: msRest.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "keyName",
    type: {
      name: "String"
    }
  }
};
export const linkId: msRest.OperationURLParameter = {
  parameterPath: "linkId",
  mapper: {
    required: true,
    serializedName: "linkId",
    type: {
      name: "String"
    }
  }
};
export const locationName: msRest.OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    required: true,
    serializedName: "locationName",
    type: {
      name: "String"
    }
  }
};
export const longTermRetentionDatabaseName: msRest.OperationURLParameter = {
  parameterPath: "longTermRetentionDatabaseName",
  mapper: {
    required: true,
    serializedName: "longTermRetentionDatabaseName",
    type: {
      name: "String"
    }
  }
};
export const longTermRetentionServerName: msRest.OperationURLParameter = {
  parameterPath: "longTermRetentionServerName",
  mapper: {
    required: true,
    serializedName: "longTermRetentionServerName",
    type: {
      name: "String"
    }
  }
};
export const managedInstanceName: msRest.OperationURLParameter = {
  parameterPath: "managedInstanceName",
  mapper: {
    required: true,
    serializedName: "managedInstanceName",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const onlyLatestPerDatabase: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "onlyLatestPerDatabase"
  ],
  mapper: {
    serializedName: "onlyLatestPerDatabase",
    type: {
      name: "Boolean"
    }
  }
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "Uuid"
    }
  }
};
export const policyName: msRest.OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "policyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const privateEndpointConnectionName: msRest.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    required: true,
    serializedName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};
export const recommendedElasticPoolName: msRest.OperationURLParameter = {
  parameterPath: "recommendedElasticPoolName",
  mapper: {
    required: true,
    serializedName: "recommendedElasticPoolName",
    type: {
      name: "String"
    }
  }
};
export const recoverableDatabaseName: msRest.OperationURLParameter = {
  parameterPath: "recoverableDatabaseName",
  mapper: {
    required: true,
    serializedName: "recoverableDatabaseName",
    type: {
      name: "String"
    }
  }
};
export const replicaType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "replicaType"
  ],
  mapper: {
    serializedName: "replicaType",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName0: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName1: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const restorableDroppedDatabaseId: msRest.OperationURLParameter = {
  parameterPath: "restorableDroppedDatabaseId",
  mapper: {
    required: true,
    serializedName: "restorableDroppedDatabaseId",
    type: {
      name: "String"
    }
  }
};
export const restorableDroppededDatabaseId: msRest.OperationURLParameter = {
  parameterPath: "restorableDroppededDatabaseId",
  mapper: {
    required: true,
    serializedName: "restorableDroppededDatabaseId",
    type: {
      name: "String"
    }
  }
};
export const restoreDetailsName: msRest.OperationURLParameter = {
  parameterPath: "restoreDetailsName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restoreDetailsName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const restorePointName: msRest.OperationURLParameter = {
  parameterPath: "restorePointName",
  mapper: {
    required: true,
    serializedName: "restorePointName",
    type: {
      name: "String"
    }
  }
};
export const ruleId: msRest.OperationURLParameter = {
  parameterPath: "ruleId",
  mapper: {
    required: true,
    serializedName: "ruleId",
    type: {
      name: "String"
    }
  }
};
export const scanId: msRest.OperationURLParameter = {
  parameterPath: "scanId",
  mapper: {
    required: true,
    serializedName: "scanId",
    type: {
      name: "String"
    }
  }
};
export const schemaName: msRest.OperationURLParameter = {
  parameterPath: "schemaName",
  mapper: {
    required: true,
    serializedName: "schemaName",
    type: {
      name: "String"
    }
  }
};
export const securityAlertPolicyName0: msRest.OperationURLParameter = {
  parameterPath: "securityAlertPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "securityAlertPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const securityAlertPolicyName1: msRest.OperationURLParameter = {
  parameterPath: "securityAlertPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "securityAlertPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const sensitivityLabelSource0: msRest.OperationURLParameter = {
  parameterPath: "sensitivityLabelSource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "sensitivityLabelSource",
    defaultValue: 'recommended',
    type: {
      name: "String"
    }
  }
};
export const sensitivityLabelSource1: msRest.OperationURLParameter = {
  parameterPath: "sensitivityLabelSource",
  mapper: {
    required: true,
    serializedName: "sensitivityLabelSource",
    type: {
      name: "Enum",
      allowedValues: [
        "current",
        "recommended"
      ]
    }
  }
};
export const sensitivityLabelSource2: msRest.OperationURLParameter = {
  parameterPath: "sensitivityLabelSource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "sensitivityLabelSource",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const serverName: msRest.OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    required: true,
    serializedName: "serverName",
    type: {
      name: "String"
    }
  }
};
export const serviceObjectiveName: msRest.OperationURLParameter = {
  parameterPath: "serviceObjectiveName",
  mapper: {
    required: true,
    serializedName: "serviceObjectiveName",
    type: {
      name: "String"
    }
  }
};
export const serviceTierAdvisorName: msRest.OperationURLParameter = {
  parameterPath: "serviceTierAdvisorName",
  mapper: {
    required: true,
    serializedName: "serviceTierAdvisorName",
    type: {
      name: "String"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};
export const skipToken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skipToken"
  ],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String"
    }
  }
};
export const startTime: msRest.OperationQueryParameter = {
  parameterPath: "startTime",
  mapper: {
    required: true,
    serializedName: "startTime",
    type: {
      name: "String"
    }
  }
};
export const stepName: msRest.OperationURLParameter = {
  parameterPath: "stepName",
  mapper: {
    required: true,
    serializedName: "stepName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const syncAgentName: msRest.OperationURLParameter = {
  parameterPath: "syncAgentName",
  mapper: {
    required: true,
    serializedName: "syncAgentName",
    type: {
      name: "String"
    }
  }
};
export const syncGroupName: msRest.OperationURLParameter = {
  parameterPath: "syncGroupName",
  mapper: {
    required: true,
    serializedName: "syncGroupName",
    type: {
      name: "String"
    }
  }
};
export const syncMemberName: msRest.OperationURLParameter = {
  parameterPath: "syncMemberName",
  mapper: {
    required: true,
    serializedName: "syncMemberName",
    type: {
      name: "String"
    }
  }
};
export const tableName: msRest.OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    required: true,
    serializedName: "tableName",
    type: {
      name: "String"
    }
  }
};
export const targetGroupName: msRest.OperationURLParameter = {
  parameterPath: "targetGroupName",
  mapper: {
    required: true,
    serializedName: "targetGroupName",
    type: {
      name: "String"
    }
  }
};
export const targetId: msRest.OperationURLParameter = {
  parameterPath: "targetId",
  mapper: {
    required: true,
    serializedName: "targetId",
    type: {
      name: "Uuid"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const transparentDataEncryptionName: msRest.OperationURLParameter = {
  parameterPath: "transparentDataEncryptionName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "transparentDataEncryptionName",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
export const type: msRest.OperationQueryParameter = {
  parameterPath: "type",
  mapper: {
    required: true,
    serializedName: "type",
    type: {
      name: "String"
    }
  }
};
export const usageName: msRest.OperationURLParameter = {
  parameterPath: "usageName",
  mapper: {
    required: true,
    serializedName: "usageName",
    type: {
      name: "String"
    }
  }
};
export const virtualClusterName: msRest.OperationURLParameter = {
  parameterPath: "virtualClusterName",
  mapper: {
    required: true,
    serializedName: "virtualClusterName",
    type: {
      name: "String"
    }
  }
};
export const virtualNetworkRuleName: msRest.OperationURLParameter = {
  parameterPath: "virtualNetworkRuleName",
  mapper: {
    required: true,
    serializedName: "virtualNetworkRuleName",
    type: {
      name: "String"
    }
  }
};
export const vulnerabilityAssessmentName: msRest.OperationURLParameter = {
  parameterPath: "vulnerabilityAssessmentName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "vulnerabilityAssessmentName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const workloadClassifierName: msRest.OperationURLParameter = {
  parameterPath: "workloadClassifierName",
  mapper: {
    required: true,
    serializedName: "workloadClassifierName",
    type: {
      name: "String"
    }
  }
};
export const workloadGroupName: msRest.OperationURLParameter = {
  parameterPath: "workloadGroupName",
  mapper: {
    required: true,
    serializedName: "workloadGroupName",
    type: {
      name: "String"
    }
  }
};

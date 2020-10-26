/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const AvailableCluster: msRest.CompositeMapper = {
  serializedName: "AvailableCluster",
  type: {
    name: "Composite",
    className: "AvailableCluster",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailableClustersList: msRest.CompositeMapper = {
  serializedName: "AvailableClustersList",
  type: {
    name: "Composite",
    className: "AvailableClustersList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailableCluster"
            }
          }
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterSku: msRest.CompositeMapper = {
  serializedName: "ClusterSku",
  type: {
    name: "Composite",
    className: "ClusterSku",
    modelProperties: {
      name: {
        required: true,
        isConstant: true,
        serializedName: "name",
        defaultValue: 'Dedicated',
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        constraints: {
          InclusiveMaximum: 32,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Cluster: msRest.CompositeMapper = {
  serializedName: "Cluster",
  type: {
    name: "Composite",
    className: "Cluster",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ClusterSku"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "String"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "String"
        }
      },
      metricId: {
        readOnly: true,
        serializedName: "properties.metricId",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EHNamespaceIdContainer: msRest.CompositeMapper = {
  serializedName: "EHNamespaceIdContainer",
  type: {
    name: "Composite",
    className: "EHNamespaceIdContainer",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EHNamespaceIdListResult: msRest.CompositeMapper = {
  serializedName: "EHNamespaceIdListResult",
  type: {
    name: "Composite",
    className: "EHNamespaceIdListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EHNamespaceIdContainer"
            }
          }
        }
      }
    }
  }
};

export const IpFilterRule: msRest.CompositeMapper = {
  serializedName: "IpFilterRule",
  type: {
    name: "Composite",
    className: "IpFilterRule",
    modelProperties: {
      ...Resource.type.modelProperties,
      ipMask: {
        serializedName: "properties.ipMask",
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "properties.action",
        type: {
          name: "String"
        }
      },
      filterName: {
        serializedName: "properties.filterName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        constraints: {
          InclusiveMaximum: 20,
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'SystemAssigned',
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned"
          ]
        }
      }
    }
  }
};

export const KeyVaultProperties: msRest.CompositeMapper = {
  serializedName: "KeyVaultProperties",
  type: {
    name: "Composite",
    className: "KeyVaultProperties",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "String"
        }
      },
      keyVaultUri: {
        serializedName: "keyVaultUri",
        type: {
          name: "String"
        }
      },
      keyVersion: {
        serializedName: "keyVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Encryption: msRest.CompositeMapper = {
  serializedName: "Encryption",
  type: {
    name: "Composite",
    className: "Encryption",
    modelProperties: {
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyVaultProperties"
            }
          }
        }
      },
      keySource: {
        serializedName: "keySource",
        defaultValue: 'Microsoft.KeyVault',
        type: {
          name: "Enum",
          allowedValues: [
            "Microsoft.KeyVault"
          ]
        }
      }
    }
  }
};

export const EHNamespace: msRest.CompositeMapper = {
  serializedName: "EHNamespace",
  type: {
    name: "Composite",
    className: "EHNamespace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        readOnly: true,
        serializedName: "properties.serviceBusEndpoint",
        type: {
          name: "String"
        }
      },
      clusterArmId: {
        serializedName: "properties.clusterArmId",
        type: {
          name: "String"
        }
      },
      metricId: {
        readOnly: true,
        serializedName: "properties.metricId",
        type: {
          name: "String"
        }
      },
      isAutoInflateEnabled: {
        serializedName: "properties.isAutoInflateEnabled",
        type: {
          name: "Boolean"
        }
      },
      maximumThroughputUnits: {
        serializedName: "properties.maximumThroughputUnits",
        constraints: {
          InclusiveMaximum: 20,
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      kafkaEnabled: {
        serializedName: "properties.kafkaEnabled",
        type: {
          name: "Boolean"
        }
      },
      zoneRedundant: {
        serializedName: "properties.zoneRedundant",
        type: {
          name: "Boolean"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      }
    }
  }
};

export const PrivateEndpoint: msRest.CompositeMapper = {
  serializedName: "PrivateEndpoint",
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConnectionState: msRest.CompositeMapper = {
  serializedName: "ConnectionState",
  type: {
    name: "Composite",
    className: "ConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "ConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      groupId: {
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourcesListResult: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourcesListResult",
  type: {
    name: "Composite",
    className: "PrivateLinkResourcesListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterQuotaConfigurationProperties: msRest.CompositeMapper = {
  serializedName: "ClusterQuotaConfigurationProperties",
  type: {
    name: "Composite",
    className: "ClusterQuotaConfigurationProperties",
    modelProperties: {
      settings: {
        serializedName: "settings",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualNetworkRule: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRule",
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      ...Resource.type.modelProperties,
      virtualNetworkSubnetId: {
        serializedName: "properties.virtualNetworkSubnetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Subnet: msRest.CompositeMapper = {
  serializedName: "Subnet",
  type: {
    name: "Composite",
    className: "Subnet",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NWRuleSetIpRules: msRest.CompositeMapper = {
  serializedName: "NWRuleSetIpRules",
  type: {
    name: "Composite",
    className: "NWRuleSetIpRules",
    modelProperties: {
      ipMask: {
        serializedName: "ipMask",
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NWRuleSetVirtualNetworkRules: msRest.CompositeMapper = {
  serializedName: "NWRuleSetVirtualNetworkRules",
  type: {
    name: "Composite",
    className: "NWRuleSetVirtualNetworkRules",
    modelProperties: {
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "Subnet"
        }
      },
      ignoreMissingVnetServiceEndpoint: {
        serializedName: "ignoreMissingVnetServiceEndpoint",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const NetworkRuleSet: msRest.CompositeMapper = {
  serializedName: "NetworkRuleSet",
  type: {
    name: "Composite",
    className: "NetworkRuleSet",
    modelProperties: {
      ...Resource.type.modelProperties,
      trustedServiceAccessEnabled: {
        serializedName: "properties.trustedServiceAccessEnabled",
        type: {
          name: "Boolean"
        }
      },
      defaultAction: {
        serializedName: "properties.defaultAction",
        type: {
          name: "String"
        }
      },
      virtualNetworkRules: {
        serializedName: "properties.virtualNetworkRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NWRuleSetVirtualNetworkRules"
            }
          }
        }
      },
      ipRules: {
        serializedName: "properties.ipRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NWRuleSetIpRules"
            }
          }
        }
      }
    }
  }
};

export const AuthorizationRule: msRest.CompositeMapper = {
  serializedName: "AuthorizationRule",
  type: {
    name: "Composite",
    className: "AuthorizationRule",
    modelProperties: {
      ...Resource.type.modelProperties,
      rights: {
        required: true,
        serializedName: "properties.rights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const AccessKeys: msRest.CompositeMapper = {
  serializedName: "AccessKeys",
  type: {
    name: "Composite",
    className: "AccessKeys",
    modelProperties: {
      primaryConnectionString: {
        readOnly: true,
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        readOnly: true,
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      },
      aliasPrimaryConnectionString: {
        readOnly: true,
        serializedName: "aliasPrimaryConnectionString",
        type: {
          name: "String"
        }
      },
      aliasSecondaryConnectionString: {
        readOnly: true,
        serializedName: "aliasSecondaryConnectionString",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        readOnly: true,
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      keyName: {
        readOnly: true,
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateAccessKeyParameters: msRest.CompositeMapper = {
  serializedName: "RegenerateAccessKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateAccessKeyParameters",
    modelProperties: {
      keyType: {
        required: true,
        serializedName: "keyType",
        type: {
          name: "Enum",
          allowedValues: [
            "PrimaryKey",
            "SecondaryKey"
          ]
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameter: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityParameter",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameter",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "InvalidName",
            "SubscriptionIsDisabled",
            "NameInUse",
            "NameInLockdown",
            "TooManyNamespaceInCurrentSubscription"
          ]
        }
      }
    }
  }
};

export const ConsumerGroup: msRest.CompositeMapper = {
  serializedName: "ConsumerGroup",
  type: {
    name: "Composite",
    className: "ConsumerGroup",
    modelProperties: {
      ...Resource.type.modelProperties,
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      userMetadata: {
        serializedName: "properties.userMetadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ArmDisasterRecovery: msRest.CompositeMapper = {
  serializedName: "ArmDisasterRecovery",
  type: {
    name: "Composite",
    className: "ArmDisasterRecovery",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "Accepted",
            "Succeeded",
            "Failed"
          ]
        }
      },
      partnerNamespace: {
        serializedName: "properties.partnerNamespace",
        type: {
          name: "String"
        }
      },
      alternateName: {
        serializedName: "properties.alternateName",
        type: {
          name: "String"
        }
      },
      role: {
        readOnly: true,
        serializedName: "properties.role",
        type: {
          name: "Enum",
          allowedValues: [
            "Primary",
            "PrimaryNotReplicating",
            "Secondary"
          ]
        }
      },
      pendingReplicationOperationsCount: {
        readOnly: true,
        serializedName: "properties.pendingReplicationOperationsCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const Destination: msRest.CompositeMapper = {
  serializedName: "Destination",
  type: {
    name: "Composite",
    className: "Destination",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      storageAccountResourceId: {
        serializedName: "properties.storageAccountResourceId",
        type: {
          name: "String"
        }
      },
      blobContainer: {
        serializedName: "properties.blobContainer",
        type: {
          name: "String"
        }
      },
      archiveNameFormat: {
        serializedName: "properties.archiveNameFormat",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CaptureDescription: msRest.CompositeMapper = {
  serializedName: "CaptureDescription",
  type: {
    name: "Composite",
    className: "CaptureDescription",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      encoding: {
        serializedName: "encoding",
        type: {
          name: "Enum",
          allowedValues: [
            "Avro",
            "AvroDeflate"
          ]
        }
      },
      intervalInSeconds: {
        serializedName: "intervalInSeconds",
        constraints: {
          InclusiveMaximum: 900,
          InclusiveMinimum: 60
        },
        type: {
          name: "Number"
        }
      },
      sizeLimitInBytes: {
        serializedName: "sizeLimitInBytes",
        constraints: {
          InclusiveMaximum: 524288000,
          InclusiveMinimum: 10485760
        },
        type: {
          name: "Number"
        }
      },
      destination: {
        serializedName: "destination",
        type: {
          name: "Composite",
          className: "Destination"
        }
      },
      skipEmptyArchives: {
        serializedName: "skipEmptyArchives",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Eventhub: msRest.CompositeMapper = {
  serializedName: "Eventhub",
  type: {
    name: "Composite",
    className: "Eventhub",
    modelProperties: {
      ...Resource.type.modelProperties,
      partitionIds: {
        readOnly: true,
        serializedName: "properties.partitionIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      messageRetentionInDays: {
        serializedName: "properties.messageRetentionInDays",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      partitionCount: {
        serializedName: "properties.partitionCount",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown"
          ]
        }
      },
      captureDescription: {
        serializedName: "properties.captureDescription",
        type: {
          name: "Composite",
          className: "CaptureDescription"
        }
      }
    }
  }
};

export const MessagingRegionsProperties: msRest.CompositeMapper = {
  serializedName: "MessagingRegions_properties",
  type: {
    name: "Composite",
    className: "MessagingRegionsProperties",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      fullName: {
        readOnly: true,
        serializedName: "fullName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessagingRegions: msRest.CompositeMapper = {
  serializedName: "MessagingRegions",
  type: {
    name: "Composite",
    className: "MessagingRegions",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MessagingRegionsProperties"
        }
      }
    }
  }
};

export const ClusterListResult: msRest.CompositeMapper = {
  serializedName: "ClusterListResult",
  type: {
    name: "Composite",
    className: "ClusterListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cluster"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IpFilterRuleListResult: msRest.CompositeMapper = {
  serializedName: "IpFilterRuleListResult",
  type: {
    name: "Composite",
    className: "IpFilterRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IpFilterRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EHNamespaceListResult: msRest.CompositeMapper = {
  serializedName: "EHNamespaceListResult",
  type: {
    name: "Composite",
    className: "EHNamespaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EHNamespace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkRuleListResult: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRuleListResult",
  type: {
    name: "Composite",
    className: "VirtualNetworkRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizationRuleListResult: msRest.CompositeMapper = {
  serializedName: "AuthorizationRuleListResult",
  type: {
    name: "Composite",
    className: "AuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AuthorizationRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionListResult",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ArmDisasterRecoveryListResult: msRest.CompositeMapper = {
  serializedName: "ArmDisasterRecoveryListResult",
  type: {
    name: "Composite",
    className: "ArmDisasterRecoveryListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArmDisasterRecovery"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventHubListResult: msRest.CompositeMapper = {
  serializedName: "EventHubListResult",
  type: {
    name: "Composite",
    className: "EventHubListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Eventhub"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConsumerGroupListResult: msRest.CompositeMapper = {
  serializedName: "ConsumerGroupListResult",
  type: {
    name: "Composite",
    className: "ConsumerGroupListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConsumerGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessagingRegionsListResult: msRest.CompositeMapper = {
  serializedName: "MessagingRegionsListResult",
  type: {
    name: "Composite",
    className: "MessagingRegionsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MessagingRegions"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

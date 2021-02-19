/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

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
        readOnly: true,
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuCapability: msRest.CompositeMapper = {
  serializedName: "SkuCapability",
  type: {
    name: "Composite",
    className: "SkuCapability",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IpRule: msRest.CompositeMapper = {
  serializedName: "IpRule",
  type: {
    name: "Composite",
    className: "IpRule",
    modelProperties: {
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "String"
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
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
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
      defaultAction: {
        serializedName: "defaultAction",
        type: {
          name: "String"
        }
      },
      ipRules: {
        serializedName: "ipRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IpRule"
            }
          }
        }
      },
      virtualNetworkRules: {
        serializedName: "virtualNetworkRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
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
      keyVersion: {
        serializedName: "keyVersion",
        type: {
          name: "String"
        }
      },
      keyVaultUri: {
        serializedName: "keyVaultUri",
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
          name: "Composite",
          className: "KeyVaultProperties"
        }
      },
      keySource: {
        serializedName: "keySource",
        defaultValue: 'Microsoft.KeyVault',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserOwnedStorage: msRest.CompositeMapper = {
  serializedName: "UserOwnedStorage",
  type: {
    name: "Composite",
    className: "UserOwnedStorage",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
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
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: msRest.CompositeMapper = {
  serializedName: "PrivateLinkServiceConnectionState",
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
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
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionProperties: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionProperties",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionProperties",
    modelProperties: {
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        required: true,
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      groupIds: {
        serializedName: "groupIds",
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

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnectionProperties"
        }
      }
    }
  }
};

export const CognitiveServicesAccountApiProperties: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountApiProperties",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountApiProperties",
    modelProperties: {
      qnaRuntimeEndpoint: {
        serializedName: "qnaRuntimeEndpoint",
        type: {
          name: "String"
        }
      },
      statisticsEnabled: {
        serializedName: "statisticsEnabled",
        type: {
          name: "Boolean"
        }
      },
      eventHubConnectionString: {
        serializedName: "eventHubConnectionString",
        constraints: {
          MaxLength: 1000,
          Pattern: /^( *)Endpoint=sb:\/\/(.*);( *)SharedAccessKeyName=(.*);( *)SharedAccessKey=(.*)$/
        },
        type: {
          name: "String"
        }
      },
      storageAccountConnectionString: {
        serializedName: "storageAccountConnectionString",
        constraints: {
          MaxLength: 1000,
          Pattern: /^(( *)DefaultEndpointsProtocol=(http|https)( *);( *))?AccountName=(.*)AccountKey=(.*)EndpointSuffix=(.*)$/
        },
        type: {
          name: "String"
        }
      },
      aadClientId: {
        serializedName: "aadClientId",
        constraints: {
          MaxLength: 500
        },
        type: {
          name: "String"
        }
      },
      aadTenantId: {
        serializedName: "aadTenantId",
        constraints: {
          MaxLength: 500
        },
        type: {
          name: "String"
        }
      },
      superUser: {
        serializedName: "superUser",
        constraints: {
          MaxLength: 500
        },
        type: {
          name: "String"
        }
      },
      websiteName: {
        serializedName: "websiteName",
        constraints: {
          MaxLength: 500
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CognitiveServicesAccountProperties: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountProperties",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      endpoint: {
        readOnly: true,
        serializedName: "endpoint",
        type: {
          name: "String"
        }
      },
      internalId: {
        readOnly: true,
        serializedName: "internalId",
        type: {
          name: "String"
        }
      },
      capabilities: {
        readOnly: true,
        serializedName: "capabilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuCapability"
            }
          }
        }
      },
      customSubDomainName: {
        serializedName: "customSubDomainName",
        type: {
          name: "String"
        }
      },
      networkAcls: {
        serializedName: "networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      },
      encryption: {
        serializedName: "encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      },
      userOwnedStorage: {
        serializedName: "userOwnedStorage",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserOwnedStorage"
            }
          }
        }
      },
      privateEndpointConnections: {
        serializedName: "privateEndpointConnections",
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
      publicNetworkAccess: {
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      apiProperties: {
        serializedName: "apiProperties",
        type: {
          name: "Composite",
          className: "CognitiveServicesAccountApiProperties"
        }
      },
      dateCreated: {
        readOnly: true,
        serializedName: "dateCreated",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserAssignedIdentity: msRest.CompositeMapper = {
  serializedName: "UserAssignedIdentity",
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String"
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
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "SystemAssigned",
            "UserAssigned"
          ]
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "UserAssignedIdentity"
            }
          }
        }
      }
    }
  }
};

export const CognitiveServicesAccount: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccount",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccount",
    modelProperties: {
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CognitiveServicesAccountProperties"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
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
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const CognitiveServicesAccountKeys: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountKeys",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateKeyParameters: msRest.CompositeMapper = {
  serializedName: "RegenerateKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateKeyParameters",
    modelProperties: {
      keyName: {
        required: true,
        serializedName: "keyName",
        type: {
          name: "Enum",
          allowedValues: [
            "Key1",
            "Key2"
          ]
        }
      }
    }
  }
};

export const CognitiveServicesResourceAndSku: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesResourceAndSku",
  type: {
    name: "Composite",
    className: "CognitiveServicesResourceAndSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      }
    }
  }
};

export const CognitiveServicesAccountEnumerateSkusResult: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountEnumerateSkusResult",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountEnumerateSkusResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CognitiveServicesResourceAndSku"
            }
          }
        }
      }
    }
  }
};

export const MetricName: msRest.CompositeMapper = {
  serializedName: "MetricName",
  type: {
    name: "Composite",
    className: "MetricName",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        readOnly: true,
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Usage: msRest.CompositeMapper = {
  serializedName: "Usage",
  type: {
    name: "Composite",
    className: "Usage",
    modelProperties: {
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "Composite",
          className: "MetricName"
        }
      },
      quotaPeriod: {
        readOnly: true,
        serializedName: "quotaPeriod",
        type: {
          name: "String"
        }
      },
      limit: {
        readOnly: true,
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      currentValue: {
        readOnly: true,
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      nextResetTime: {
        readOnly: true,
        serializedName: "nextResetTime",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsagesResult: msRest.CompositeMapper = {
  serializedName: "UsagesResult",
  type: {
    name: "Composite",
    className: "UsagesResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Usage"
            }
          }
        }
      }
    }
  }
};

export const ErrorBody: msRest.CompositeMapper = {
  serializedName: "ErrorBody",
  type: {
    name: "Composite",
    className: "ErrorBody",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorBody"
        }
      }
    }
  }
};

export const OperationDisplayInfo: msRest.CompositeMapper = {
  serializedName: "OperationDisplayInfo",
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationEntity: msRest.CompositeMapper = {
  serializedName: "OperationEntity",
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const CheckSkuAvailabilityParameter: msRest.CompositeMapper = {
  serializedName: "CheckSkuAvailabilityParameter",
  type: {
    name: "Composite",
    className: "CheckSkuAvailabilityParameter",
    modelProperties: {
      skus: {
        required: true,
        serializedName: "skus",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckSkuAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckSkuAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckSkuAvailabilityResult",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      skuName: {
        serializedName: "skuName",
        type: {
          name: "String"
        }
      },
      skuAvailable: {
        serializedName: "skuAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
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

export const CheckSkuAvailabilityResultList: msRest.CompositeMapper = {
  serializedName: "CheckSkuAvailabilityResultList",
  type: {
    name: "Composite",
    className: "CheckSkuAvailabilityResultList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CheckSkuAvailabilityResult"
            }
          }
        }
      }
    }
  }
};

export const CheckDomainAvailabilityParameter: msRest.CompositeMapper = {
  serializedName: "CheckDomainAvailabilityParameter",
  type: {
    name: "Composite",
    className: "CheckDomainAvailabilityParameter",
    modelProperties: {
      subdomainName: {
        required: true,
        serializedName: "subdomainName",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckDomainAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckDomainAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckDomainAvailabilityResult",
    modelProperties: {
      isSubdomainAvailable: {
        serializedName: "isSubdomainAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      subdomainName: {
        serializedName: "subdomainName",
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

export const ResourceSkuRestrictionInfo: msRest.CompositeMapper = {
  serializedName: "ResourceSkuRestrictionInfo",
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictionInfo",
    modelProperties: {
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      zones: {
        readOnly: true,
        serializedName: "zones",
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

export const ResourceSkuRestrictions: msRest.CompositeMapper = {
  serializedName: "ResourceSkuRestrictions",
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictions",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "Location",
            "Zone"
          ]
        }
      },
      values: {
        readOnly: true,
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      restrictionInfo: {
        readOnly: true,
        serializedName: "restrictionInfo",
        type: {
          name: "Composite",
          className: "ResourceSkuRestrictionInfo"
        }
      },
      reasonCode: {
        readOnly: true,
        serializedName: "reasonCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: msRest.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      resourceType: {
        readOnly: true,
        serializedName: "resourceType",
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
      tier: {
        readOnly: true,
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      kind: {
        readOnly: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      restrictions: {
        readOnly: true,
        serializedName: "restrictions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuRestrictions"
            }
          }
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
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResourceProperties: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceProperties",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceProperties",
    modelProperties: {
      groupId: {
        readOnly: true,
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        readOnly: true,
        serializedName: "requiredMembers",
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
        serializedName: "requiredZoneNames",
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

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateLinkResourceProperties"
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceListResult",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
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
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
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
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CognitiveServicesAccountListResult: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountListResult",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CognitiveServicesAccount"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkusResult: msRest.CompositeMapper = {
  serializedName: "ResourceSkusResult",
  type: {
    name: "Composite",
    className: "ResourceSkusResult",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
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

export const OperationEntityListResult: msRest.CompositeMapper = {
  serializedName: "OperationEntityListResult",
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      }
    }
  }
};

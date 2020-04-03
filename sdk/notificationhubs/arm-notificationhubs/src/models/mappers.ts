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
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CheckAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckAvailabilityParameters",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
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
      },
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
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      isAvailiable: {
        serializedName: "isAvailiable",
        type: {
          name: "Boolean"
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
      },
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

export const CheckAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckAvailabilityResult",
    modelProperties: {
      ...Resource.type.modelProperties,
      isAvailiable: {
        serializedName: "isAvailiable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const NamespaceResource: msRest.CompositeMapper = {
  serializedName: "NamespaceResource",
  type: {
    name: "Composite",
    className: "NamespaceResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      namespaceResourceName: {
        serializedName: "properties.name",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      region: {
        serializedName: "properties.region",
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
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        serializedName: "properties.serviceBusEndpoint",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "properties.subscriptionId",
        type: {
          name: "String"
        }
      },
      scaleUnit: {
        serializedName: "properties.scaleUnit",
        type: {
          name: "String"
        }
      },
      enabled: {
        serializedName: "properties.enabled",
        type: {
          name: "Boolean"
        }
      },
      critical: {
        serializedName: "properties.critical",
        type: {
          name: "Boolean"
        }
      },
      dataCenter: {
        serializedName: "properties.dataCenter",
        type: {
          name: "String"
        }
      },
      namespaceType: {
        serializedName: "properties.namespaceType",
        type: {
          name: "Enum",
          allowedValues: [
            "Messaging",
            "NotificationHub"
          ]
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

export const NamespaceCreateOrUpdateParameters: msRest.CompositeMapper = {
  serializedName: "NamespaceCreateOrUpdateParameters",
  type: {
    name: "Composite",
    className: "NamespaceCreateOrUpdateParameters",
    modelProperties: {
      ...NamespaceResource.type.modelProperties
    }
  }
};

export const NamespacePatchParameters: msRest.CompositeMapper = {
  serializedName: "NamespacePatchParameters",
  type: {
    name: "Composite",
    className: "NamespacePatchParameters",
    modelProperties: {
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

export const SharedAccessAuthorizationRuleProperties: msRest.CompositeMapper = {
  serializedName: "SharedAccessAuthorizationRuleProperties",
  type: {
    name: "Composite",
    className: "SharedAccessAuthorizationRuleProperties",
    modelProperties: {
      rights: {
        serializedName: "rights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Manage",
                "Send",
                "Listen"
              ]
            }
          }
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
      },
      claimType: {
        readOnly: true,
        serializedName: "claimType",
        type: {
          name: "String"
        }
      },
      claimValue: {
        readOnly: true,
        serializedName: "claimValue",
        type: {
          name: "String"
        }
      },
      modifiedTime: {
        readOnly: true,
        serializedName: "modifiedTime",
        type: {
          name: "String"
        }
      },
      createdTime: {
        readOnly: true,
        serializedName: "createdTime",
        type: {
          name: "String"
        }
      },
      revision: {
        readOnly: true,
        serializedName: "revision",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SharedAccessAuthorizationRuleCreateOrUpdateParameters: msRest.CompositeMapper = {
  serializedName: "SharedAccessAuthorizationRuleCreateOrUpdateParameters",
  type: {
    name: "Composite",
    className: "SharedAccessAuthorizationRuleCreateOrUpdateParameters",
    modelProperties: {
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SharedAccessAuthorizationRuleProperties"
        }
      }
    }
  }
};

export const SharedAccessAuthorizationRuleResource: msRest.CompositeMapper = {
  serializedName: "SharedAccessAuthorizationRuleResource",
  type: {
    name: "Composite",
    className: "SharedAccessAuthorizationRuleResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      rights: {
        serializedName: "properties.rights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Manage",
                "Send",
                "Listen"
              ]
            }
          }
        }
      },
      primaryKey: {
        readOnly: true,
        serializedName: "properties.primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "properties.secondaryKey",
        type: {
          name: "String"
        }
      },
      keyName: {
        readOnly: true,
        serializedName: "properties.keyName",
        type: {
          name: "String"
        }
      },
      claimType: {
        readOnly: true,
        serializedName: "properties.claimType",
        type: {
          name: "String"
        }
      },
      claimValue: {
        readOnly: true,
        serializedName: "properties.claimValue",
        type: {
          name: "String"
        }
      },
      modifiedTime: {
        readOnly: true,
        serializedName: "properties.modifiedTime",
        type: {
          name: "String"
        }
      },
      createdTime: {
        readOnly: true,
        serializedName: "properties.createdTime",
        type: {
          name: "String"
        }
      },
      revision: {
        readOnly: true,
        serializedName: "properties.revision",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResourceListKeys: msRest.CompositeMapper = {
  serializedName: "ResourceListKeys",
  type: {
    name: "Composite",
    className: "ResourceListKeys",
    modelProperties: {
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicykeyResource: msRest.CompositeMapper = {
  serializedName: "PolicykeyResource",
  type: {
    name: "Composite",
    className: "PolicykeyResource",
    modelProperties: {
      policyKey: {
        serializedName: "policyKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApnsCredential: msRest.CompositeMapper = {
  serializedName: "ApnsCredential",
  type: {
    name: "Composite",
    className: "ApnsCredential",
    modelProperties: {
      apnsCertificate: {
        serializedName: "properties.apnsCertificate",
        type: {
          name: "String"
        }
      },
      certificateKey: {
        serializedName: "properties.certificateKey",
        type: {
          name: "String"
        }
      },
      endpoint: {
        serializedName: "properties.endpoint",
        type: {
          name: "String"
        }
      },
      thumbprint: {
        serializedName: "properties.thumbprint",
        type: {
          name: "String"
        }
      },
      keyId: {
        serializedName: "properties.keyId",
        type: {
          name: "String"
        }
      },
      appName: {
        serializedName: "properties.appName",
        type: {
          name: "String"
        }
      },
      appId: {
        serializedName: "properties.appId",
        type: {
          name: "String"
        }
      },
      token: {
        serializedName: "properties.token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WnsCredential: msRest.CompositeMapper = {
  serializedName: "WnsCredential",
  type: {
    name: "Composite",
    className: "WnsCredential",
    modelProperties: {
      packageSid: {
        serializedName: "properties.packageSid",
        type: {
          name: "String"
        }
      },
      secretKey: {
        serializedName: "properties.secretKey",
        type: {
          name: "String"
        }
      },
      windowsLiveEndpoint: {
        serializedName: "properties.windowsLiveEndpoint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GcmCredential: msRest.CompositeMapper = {
  serializedName: "GcmCredential",
  type: {
    name: "Composite",
    className: "GcmCredential",
    modelProperties: {
      gcmEndpoint: {
        serializedName: "properties.gcmEndpoint",
        type: {
          name: "String"
        }
      },
      googleApiKey: {
        serializedName: "properties.googleApiKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MpnsCredential: msRest.CompositeMapper = {
  serializedName: "MpnsCredential",
  type: {
    name: "Composite",
    className: "MpnsCredential",
    modelProperties: {
      mpnsCertificate: {
        serializedName: "properties.mpnsCertificate",
        type: {
          name: "String"
        }
      },
      certificateKey: {
        serializedName: "properties.certificateKey",
        type: {
          name: "String"
        }
      },
      thumbprint: {
        serializedName: "properties.thumbprint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdmCredential: msRest.CompositeMapper = {
  serializedName: "AdmCredential",
  type: {
    name: "Composite",
    className: "AdmCredential",
    modelProperties: {
      clientId: {
        serializedName: "properties.clientId",
        type: {
          name: "String"
        }
      },
      clientSecret: {
        serializedName: "properties.clientSecret",
        type: {
          name: "String"
        }
      },
      authTokenUrl: {
        serializedName: "properties.authTokenUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BaiduCredential: msRest.CompositeMapper = {
  serializedName: "BaiduCredential",
  type: {
    name: "Composite",
    className: "BaiduCredential",
    modelProperties: {
      baiduApiKey: {
        serializedName: "properties.baiduApiKey",
        type: {
          name: "String"
        }
      },
      baiduEndPoint: {
        serializedName: "properties.baiduEndPoint",
        type: {
          name: "String"
        }
      },
      baiduSecretKey: {
        serializedName: "properties.baiduSecretKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubCreateOrUpdateParameters: msRest.CompositeMapper = {
  serializedName: "NotificationHubCreateOrUpdateParameters",
  type: {
    name: "Composite",
    className: "NotificationHubCreateOrUpdateParameters",
    modelProperties: {
      ...Resource.type.modelProperties,
      notificationHubCreateOrUpdateParametersName: {
        serializedName: "properties.name",
        type: {
          name: "String"
        }
      },
      registrationTtl: {
        serializedName: "properties.registrationTtl",
        type: {
          name: "String"
        }
      },
      authorizationRules: {
        serializedName: "properties.authorizationRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedAccessAuthorizationRuleProperties"
            }
          }
        }
      },
      apnsCredential: {
        serializedName: "properties.apnsCredential",
        type: {
          name: "Composite",
          className: "ApnsCredential"
        }
      },
      wnsCredential: {
        serializedName: "properties.wnsCredential",
        type: {
          name: "Composite",
          className: "WnsCredential"
        }
      },
      gcmCredential: {
        serializedName: "properties.gcmCredential",
        type: {
          name: "Composite",
          className: "GcmCredential"
        }
      },
      mpnsCredential: {
        serializedName: "properties.mpnsCredential",
        type: {
          name: "Composite",
          className: "MpnsCredential"
        }
      },
      admCredential: {
        serializedName: "properties.admCredential",
        type: {
          name: "Composite",
          className: "AdmCredential"
        }
      },
      baiduCredential: {
        serializedName: "properties.baiduCredential",
        type: {
          name: "Composite",
          className: "BaiduCredential"
        }
      }
    }
  }
};

export const NotificationHubPatchParameters: msRest.CompositeMapper = {
  serializedName: "NotificationHubPatchParameters",
  type: {
    name: "Composite",
    className: "NotificationHubPatchParameters",
    modelProperties: {
      ...Resource.type.modelProperties,
      notificationHubPatchParametersName: {
        serializedName: "properties.name",
        type: {
          name: "String"
        }
      },
      registrationTtl: {
        serializedName: "properties.registrationTtl",
        type: {
          name: "String"
        }
      },
      authorizationRules: {
        serializedName: "properties.authorizationRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedAccessAuthorizationRuleProperties"
            }
          }
        }
      },
      apnsCredential: {
        serializedName: "properties.apnsCredential",
        type: {
          name: "Composite",
          className: "ApnsCredential"
        }
      },
      wnsCredential: {
        serializedName: "properties.wnsCredential",
        type: {
          name: "Composite",
          className: "WnsCredential"
        }
      },
      gcmCredential: {
        serializedName: "properties.gcmCredential",
        type: {
          name: "Composite",
          className: "GcmCredential"
        }
      },
      mpnsCredential: {
        serializedName: "properties.mpnsCredential",
        type: {
          name: "Composite",
          className: "MpnsCredential"
        }
      },
      admCredential: {
        serializedName: "properties.admCredential",
        type: {
          name: "Composite",
          className: "AdmCredential"
        }
      },
      baiduCredential: {
        serializedName: "properties.baiduCredential",
        type: {
          name: "Composite",
          className: "BaiduCredential"
        }
      }
    }
  }
};

export const NotificationHubResource: msRest.CompositeMapper = {
  serializedName: "NotificationHubResource",
  type: {
    name: "Composite",
    className: "NotificationHubResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      notificationHubResourceName: {
        serializedName: "properties.name",
        type: {
          name: "String"
        }
      },
      registrationTtl: {
        serializedName: "properties.registrationTtl",
        type: {
          name: "String"
        }
      },
      authorizationRules: {
        serializedName: "properties.authorizationRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedAccessAuthorizationRuleProperties"
            }
          }
        }
      },
      apnsCredential: {
        serializedName: "properties.apnsCredential",
        type: {
          name: "Composite",
          className: "ApnsCredential"
        }
      },
      wnsCredential: {
        serializedName: "properties.wnsCredential",
        type: {
          name: "Composite",
          className: "WnsCredential"
        }
      },
      gcmCredential: {
        serializedName: "properties.gcmCredential",
        type: {
          name: "Composite",
          className: "GcmCredential"
        }
      },
      mpnsCredential: {
        serializedName: "properties.mpnsCredential",
        type: {
          name: "Composite",
          className: "MpnsCredential"
        }
      },
      admCredential: {
        serializedName: "properties.admCredential",
        type: {
          name: "Composite",
          className: "AdmCredential"
        }
      },
      baiduCredential: {
        serializedName: "properties.baiduCredential",
        type: {
          name: "Composite",
          className: "BaiduCredential"
        }
      }
    }
  }
};

export const DebugSendResponse: msRest.CompositeMapper = {
  serializedName: "DebugSendResponse",
  type: {
    name: "Composite",
    className: "DebugSendResponse",
    modelProperties: {
      ...Resource.type.modelProperties,
      success: {
        serializedName: "properties.success",
        type: {
          name: "Number"
        }
      },
      failure: {
        serializedName: "properties.failure",
        type: {
          name: "Number"
        }
      },
      results: {
        serializedName: "properties.results",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const PnsCredentialsResource: msRest.CompositeMapper = {
  serializedName: "PnsCredentialsResource",
  type: {
    name: "Composite",
    className: "PnsCredentialsResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      apnsCredential: {
        serializedName: "properties.apnsCredential",
        type: {
          name: "Composite",
          className: "ApnsCredential"
        }
      },
      wnsCredential: {
        serializedName: "properties.wnsCredential",
        type: {
          name: "Composite",
          className: "WnsCredential"
        }
      },
      gcmCredential: {
        serializedName: "properties.gcmCredential",
        type: {
          name: "Composite",
          className: "GcmCredential"
        }
      },
      mpnsCredential: {
        serializedName: "properties.mpnsCredential",
        type: {
          name: "Composite",
          className: "MpnsCredential"
        }
      },
      admCredential: {
        serializedName: "properties.admCredential",
        type: {
          name: "Composite",
          className: "AdmCredential"
        }
      },
      baiduCredential: {
        serializedName: "properties.baiduCredential",
        type: {
          name: "Composite",
          className: "BaiduCredential"
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

export const NamespaceListResult: msRest.CompositeMapper = {
  serializedName: "NamespaceListResult",
  type: {
    name: "Composite",
    className: "NamespaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NamespaceResource"
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

export const SharedAccessAuthorizationRuleListResult: msRest.CompositeMapper = {
  serializedName: "SharedAccessAuthorizationRuleListResult",
  type: {
    name: "Composite",
    className: "SharedAccessAuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedAccessAuthorizationRuleResource"
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

export const NotificationHubListResult: msRest.CompositeMapper = {
  serializedName: "NotificationHubListResult",
  type: {
    name: "Composite",
    className: "NotificationHubListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NotificationHubResource"
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

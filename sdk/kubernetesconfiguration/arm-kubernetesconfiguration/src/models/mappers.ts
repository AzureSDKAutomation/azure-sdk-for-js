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

export const SystemData: msRest.CompositeMapper = {
  serializedName: "SystemData",
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        readOnly: true,
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        readOnly: true,
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        readOnly: true,
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        readOnly: true,
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        readOnly: true,
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
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
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
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

export const Result: msRest.CompositeMapper = {
  serializedName: "Result",
  type: {
    name: "Composite",
    className: "Result",
    modelProperties: {
      sampleProperty: {
        serializedName: "sampleProperty",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDefinition: msRest.CompositeMapper = {
  serializedName: "ErrorDefinition",
  type: {
    name: "Composite",
    className: "ErrorDefinition",
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

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDefinition"
        }
      }
    }
  }
};

export const ComplianceStatus: msRest.CompositeMapper = {
  serializedName: "ComplianceStatus",
  type: {
    name: "Composite",
    className: "ComplianceStatus",
    modelProperties: {
      complianceState: {
        readOnly: true,
        serializedName: "complianceState",
        type: {
          name: "String"
        }
      },
      lastConfigApplied: {
        serializedName: "lastConfigApplied",
        type: {
          name: "DateTime"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      messageLevel: {
        serializedName: "messageLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HelmOperatorProperties: msRest.CompositeMapper = {
  serializedName: "HelmOperatorProperties",
  type: {
    name: "Composite",
    className: "HelmOperatorProperties",
    modelProperties: {
      chartVersion: {
        serializedName: "chartVersion",
        type: {
          name: "String"
        }
      },
      chartValues: {
        serializedName: "chartValues",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SourceControlConfiguration: msRest.CompositeMapper = {
  serializedName: "SourceControlConfiguration",
  type: {
    name: "Composite",
    className: "SourceControlConfiguration",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      repositoryUrl: {
        serializedName: "properties.repositoryUrl",
        type: {
          name: "String"
        }
      },
      operatorNamespace: {
        serializedName: "properties.operatorNamespace",
        defaultValue: 'default',
        type: {
          name: "String"
        }
      },
      operatorInstanceName: {
        serializedName: "properties.operatorInstanceName",
        type: {
          name: "String"
        }
      },
      operatorType: {
        serializedName: "properties.operatorType",
        type: {
          name: "String"
        }
      },
      operatorParams: {
        serializedName: "properties.operatorParams",
        type: {
          name: "String"
        }
      },
      configurationProtectedSettings: {
        serializedName: "properties.configurationProtectedSettings",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      operatorScope: {
        serializedName: "properties.operatorScope",
        defaultValue: 'cluster',
        type: {
          name: "String"
        }
      },
      repositoryPublicKey: {
        readOnly: true,
        serializedName: "properties.repositoryPublicKey",
        type: {
          name: "String"
        }
      },
      sshKnownHostsContents: {
        serializedName: "properties.sshKnownHostsContents",
        type: {
          name: "String"
        }
      },
      enableHelmOperator: {
        serializedName: "properties.enableHelmOperator",
        type: {
          name: "Boolean"
        }
      },
      helmOperatorProperties: {
        serializedName: "properties.helmOperatorProperties",
        type: {
          name: "Composite",
          className: "HelmOperatorProperties"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      complianceStatus: {
        readOnly: true,
        serializedName: "properties.complianceStatus",
        type: {
          name: "Composite",
          className: "ComplianceStatus"
        }
      }
    }
  }
};

export const ResourceProviderOperationDisplay: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperation_display",
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDisplay",
    modelProperties: {
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
      },
      operation: {
        serializedName: "operation",
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

export const ResourceProviderOperation: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperation",
  type: {
    name: "Composite",
    className: "ResourceProviderOperation",
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
          className: "ResourceProviderOperationDisplay"
        }
      },
      isDataAction: {
        readOnly: true,
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ScopeCluster: msRest.CompositeMapper = {
  serializedName: "ScopeCluster",
  type: {
    name: "Composite",
    className: "ScopeCluster",
    modelProperties: {
      releaseNamespace: {
        serializedName: "releaseNamespace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScopeNamespace: msRest.CompositeMapper = {
  serializedName: "ScopeNamespace",
  type: {
    name: "Composite",
    className: "ScopeNamespace",
    modelProperties: {
      targetNamespace: {
        serializedName: "targetNamespace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Scope: msRest.CompositeMapper = {
  serializedName: "Scope",
  type: {
    name: "Composite",
    className: "Scope",
    modelProperties: {
      cluster: {
        serializedName: "cluster",
        type: {
          name: "Composite",
          className: "ScopeCluster"
        }
      },
      namespace: {
        serializedName: "namespace",
        type: {
          name: "Composite",
          className: "ScopeNamespace"
        }
      }
    }
  }
};

export const ExtensionStatus: msRest.CompositeMapper = {
  serializedName: "ExtensionStatus",
  type: {
    name: "Composite",
    className: "ExtensionStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      displayStatus: {
        serializedName: "displayStatus",
        type: {
          name: "String"
        }
      },
      level: {
        serializedName: "level",
        defaultValue: 'Information',
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      time: {
        serializedName: "time",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationIdentity: msRest.CompositeMapper = {
  serializedName: "ConfigurationIdentity",
  type: {
    name: "Composite",
    className: "ConfigurationIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "None"
          ]
        }
      }
    }
  }
};

export const ExtensionInstance: msRest.CompositeMapper = {
  serializedName: "ExtensionInstance",
  type: {
    name: "Composite",
    className: "ExtensionInstance",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      extensionType: {
        serializedName: "properties.extensionType",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      releaseTrain: {
        serializedName: "properties.releaseTrain",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "Composite",
          className: "Scope"
        }
      },
      configurationSettings: {
        serializedName: "properties.configurationSettings",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      configurationProtectedSettings: {
        serializedName: "properties.configurationProtectedSettings",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      installState: {
        serializedName: "properties.installState",
        type: {
          name: "String"
        }
      },
      statuses: {
        serializedName: "properties.statuses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExtensionStatus"
            }
          }
        }
      },
      creationTime: {
        readOnly: true,
        serializedName: "properties.creationTime",
        type: {
          name: "String"
        }
      },
      lastModifiedTime: {
        readOnly: true,
        serializedName: "properties.lastModifiedTime",
        type: {
          name: "String"
        }
      },
      lastStatusTime: {
        readOnly: true,
        serializedName: "properties.lastStatusTime",
        type: {
          name: "String"
        }
      },
      errorInfo: {
        readOnly: true,
        serializedName: "properties.errorInfo",
        type: {
          name: "Composite",
          className: "ErrorDefinition"
        }
      },
      identity: {
        serializedName: "properties.identity",
        type: {
          name: "Composite",
          className: "ConfigurationIdentity"
        }
      }
    }
  }
};

export const ExtensionInstanceUpdate: msRest.CompositeMapper = {
  serializedName: "ExtensionInstanceUpdate",
  type: {
    name: "Composite",
    className: "ExtensionInstanceUpdate",
    modelProperties: {
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      releaseTrain: {
        serializedName: "properties.releaseTrain",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SourceControlConfigurationList: msRest.CompositeMapper = {
  serializedName: "SourceControlConfigurationList",
  type: {
    name: "Composite",
    className: "SourceControlConfigurationList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SourceControlConfiguration"
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

export const ResourceProviderOperationList: msRest.CompositeMapper = {
  serializedName: "ResourceProviderOperationList",
  type: {
    name: "Composite",
    className: "ResourceProviderOperationList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceProviderOperation"
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

export const ExtensionInstancesList: msRest.CompositeMapper = {
  serializedName: "ExtensionInstancesList",
  type: {
    name: "Composite",
    className: "ExtensionInstancesList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExtensionInstance"
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

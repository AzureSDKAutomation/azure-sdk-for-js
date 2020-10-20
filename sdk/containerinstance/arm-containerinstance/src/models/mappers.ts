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

export const ContainerPort: msRest.CompositeMapper = {
  serializedName: "ContainerPort",
  type: {
    name: "Composite",
    className: "ContainerPort",
    modelProperties: {
      protocol: {
        serializedName: "protocol",
        type: {
          name: "String"
        }
      },
      port: {
        required: true,
        serializedName: "port",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EnvironmentVariable: msRest.CompositeMapper = {
  serializedName: "EnvironmentVariable",
  type: {
    name: "Composite",
    className: "EnvironmentVariable",
    modelProperties: {
      name: {
        required: true,
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
      },
      secureValue: {
        serializedName: "secureValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerState: msRest.CompositeMapper = {
  serializedName: "ContainerState",
  type: {
    name: "Composite",
    className: "ContainerState",
    modelProperties: {
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      startTime: {
        readOnly: true,
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      exitCode: {
        readOnly: true,
        serializedName: "exitCode",
        type: {
          name: "Number"
        }
      },
      finishTime: {
        readOnly: true,
        serializedName: "finishTime",
        type: {
          name: "DateTime"
        }
      },
      detailStatus: {
        readOnly: true,
        serializedName: "detailStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Event: msRest.CompositeMapper = {
  serializedName: "Event",
  type: {
    name: "Composite",
    className: "Event",
    modelProperties: {
      count: {
        readOnly: true,
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      firstTimestamp: {
        readOnly: true,
        serializedName: "firstTimestamp",
        type: {
          name: "DateTime"
        }
      },
      lastTimestamp: {
        readOnly: true,
        serializedName: "lastTimestamp",
        type: {
          name: "DateTime"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
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

export const ContainerPropertiesInstanceView: msRest.CompositeMapper = {
  serializedName: "ContainerProperties_instanceView",
  type: {
    name: "Composite",
    className: "ContainerPropertiesInstanceView",
    modelProperties: {
      restartCount: {
        readOnly: true,
        serializedName: "restartCount",
        type: {
          name: "Number"
        }
      },
      currentState: {
        readOnly: true,
        serializedName: "currentState",
        type: {
          name: "Composite",
          className: "ContainerState"
        }
      },
      previousState: {
        readOnly: true,
        serializedName: "previousState",
        type: {
          name: "Composite",
          className: "ContainerState"
        }
      },
      events: {
        readOnly: true,
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event"
            }
          }
        }
      }
    }
  }
};

export const GpuResource: msRest.CompositeMapper = {
  serializedName: "GpuResource",
  type: {
    name: "Composite",
    className: "GpuResource",
    modelProperties: {
      count: {
        required: true,
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceRequests: msRest.CompositeMapper = {
  serializedName: "ResourceRequests",
  type: {
    name: "Composite",
    className: "ResourceRequests",
    modelProperties: {
      memoryInGB: {
        required: true,
        serializedName: "memoryInGB",
        type: {
          name: "Number"
        }
      },
      cpu: {
        required: true,
        serializedName: "cpu",
        type: {
          name: "Number"
        }
      },
      gpu: {
        serializedName: "gpu",
        type: {
          name: "Composite",
          className: "GpuResource"
        }
      }
    }
  }
};

export const ResourceLimits: msRest.CompositeMapper = {
  serializedName: "ResourceLimits",
  type: {
    name: "Composite",
    className: "ResourceLimits",
    modelProperties: {
      memoryInGB: {
        serializedName: "memoryInGB",
        type: {
          name: "Number"
        }
      },
      cpu: {
        serializedName: "cpu",
        type: {
          name: "Number"
        }
      },
      gpu: {
        serializedName: "gpu",
        type: {
          name: "Composite",
          className: "GpuResource"
        }
      }
    }
  }
};

export const ResourceRequirements: msRest.CompositeMapper = {
  serializedName: "ResourceRequirements",
  type: {
    name: "Composite",
    className: "ResourceRequirements",
    modelProperties: {
      requests: {
        required: true,
        serializedName: "requests",
        type: {
          name: "Composite",
          className: "ResourceRequests"
        }
      },
      limits: {
        serializedName: "limits",
        type: {
          name: "Composite",
          className: "ResourceLimits"
        }
      }
    }
  }
};

export const VolumeMount: msRest.CompositeMapper = {
  serializedName: "VolumeMount",
  type: {
    name: "Composite",
    className: "VolumeMount",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      mountPath: {
        required: true,
        serializedName: "mountPath",
        type: {
          name: "String"
        }
      },
      readOnly: {
        serializedName: "readOnly",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ContainerExec: msRest.CompositeMapper = {
  serializedName: "ContainerExec",
  type: {
    name: "Composite",
    className: "ContainerExec",
    modelProperties: {
      command: {
        serializedName: "command",
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

export const ContainerHttpGet: msRest.CompositeMapper = {
  serializedName: "ContainerHttpGet",
  type: {
    name: "Composite",
    className: "ContainerHttpGet",
    modelProperties: {
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      port: {
        required: true,
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      scheme: {
        serializedName: "scheme",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerProbe: msRest.CompositeMapper = {
  serializedName: "ContainerProbe",
  type: {
    name: "Composite",
    className: "ContainerProbe",
    modelProperties: {
      exec: {
        serializedName: "exec",
        type: {
          name: "Composite",
          className: "ContainerExec"
        }
      },
      httpGet: {
        serializedName: "httpGet",
        type: {
          name: "Composite",
          className: "ContainerHttpGet"
        }
      },
      initialDelaySeconds: {
        serializedName: "initialDelaySeconds",
        type: {
          name: "Number"
        }
      },
      periodSeconds: {
        serializedName: "periodSeconds",
        type: {
          name: "Number"
        }
      },
      failureThreshold: {
        serializedName: "failureThreshold",
        type: {
          name: "Number"
        }
      },
      successThreshold: {
        serializedName: "successThreshold",
        type: {
          name: "Number"
        }
      },
      timeoutSeconds: {
        serializedName: "timeoutSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Container: msRest.CompositeMapper = {
  serializedName: "Container",
  type: {
    name: "Composite",
    className: "Container",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      image: {
        required: true,
        serializedName: "properties.image",
        type: {
          name: "String"
        }
      },
      command: {
        serializedName: "properties.command",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      ports: {
        serializedName: "properties.ports",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerPort"
            }
          }
        }
      },
      environmentVariables: {
        serializedName: "properties.environmentVariables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnvironmentVariable"
            }
          }
        }
      },
      instanceView: {
        readOnly: true,
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "ContainerPropertiesInstanceView"
        }
      },
      resources: {
        required: true,
        serializedName: "properties.resources",
        type: {
          name: "Composite",
          className: "ResourceRequirements"
        }
      },
      volumeMounts: {
        serializedName: "properties.volumeMounts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VolumeMount"
            }
          }
        }
      },
      livenessProbe: {
        serializedName: "properties.livenessProbe",
        type: {
          name: "Composite",
          className: "ContainerProbe"
        }
      },
      readinessProbe: {
        serializedName: "properties.readinessProbe",
        type: {
          name: "Composite",
          className: "ContainerProbe"
        }
      }
    }
  }
};

export const AzureFileVolume: msRest.CompositeMapper = {
  serializedName: "AzureFileVolume",
  type: {
    name: "Composite",
    className: "AzureFileVolume",
    modelProperties: {
      shareName: {
        required: true,
        serializedName: "shareName",
        type: {
          name: "String"
        }
      },
      readOnly: {
        serializedName: "readOnly",
        type: {
          name: "Boolean"
        }
      },
      storageAccountName: {
        required: true,
        serializedName: "storageAccountName",
        type: {
          name: "String"
        }
      },
      storageAccountKey: {
        serializedName: "storageAccountKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GitRepoVolume: msRest.CompositeMapper = {
  serializedName: "GitRepoVolume",
  type: {
    name: "Composite",
    className: "GitRepoVolume",
    modelProperties: {
      directory: {
        serializedName: "directory",
        type: {
          name: "String"
        }
      },
      repository: {
        required: true,
        serializedName: "repository",
        type: {
          name: "String"
        }
      },
      revision: {
        serializedName: "revision",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Volume: msRest.CompositeMapper = {
  serializedName: "Volume",
  type: {
    name: "Composite",
    className: "Volume",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      azureFile: {
        serializedName: "azureFile",
        type: {
          name: "Composite",
          className: "AzureFileVolume"
        }
      },
      emptyDir: {
        serializedName: "emptyDir",
        type: {
          name: "Object"
        }
      },
      secret: {
        serializedName: "secret",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      gitRepo: {
        serializedName: "gitRepo",
        type: {
          name: "Composite",
          className: "GitRepoVolume"
        }
      }
    }
  }
};

export const ContainerGroupIdentityUserAssignedIdentitiesValue: msRest.CompositeMapper = {
  serializedName: "ContainerGroupIdentity_userAssignedIdentitiesValue",
  type: {
    name: "Composite",
    className: "ContainerGroupIdentityUserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      clientId: {
        readOnly: true,
        serializedName: "clientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerGroupIdentity: msRest.CompositeMapper = {
  serializedName: "ContainerGroupIdentity",
  type: {
    name: "Composite",
    className: "ContainerGroupIdentity",
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
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ContainerGroupIdentityUserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const ImageRegistryCredential: msRest.CompositeMapper = {
  serializedName: "ImageRegistryCredential",
  type: {
    name: "Composite",
    className: "ImageRegistryCredential",
    modelProperties: {
      server: {
        required: true,
        serializedName: "server",
        type: {
          name: "String"
        }
      },
      username: {
        required: true,
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Port: msRest.CompositeMapper = {
  serializedName: "Port",
  type: {
    name: "Composite",
    className: "Port",
    modelProperties: {
      protocol: {
        serializedName: "protocol",
        type: {
          name: "String"
        }
      },
      port: {
        required: true,
        serializedName: "port",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IpAddress: msRest.CompositeMapper = {
  serializedName: "IpAddress",
  type: {
    name: "Composite",
    className: "IpAddress",
    modelProperties: {
      ports: {
        required: true,
        serializedName: "ports",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Port"
            }
          }
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      ip: {
        serializedName: "ip",
        type: {
          name: "String"
        }
      },
      dnsNameLabel: {
        serializedName: "dnsNameLabel",
        type: {
          name: "String"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "fqdn",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerGroupPropertiesInstanceView: msRest.CompositeMapper = {
  serializedName: "ContainerGroup_properties_instanceView",
  type: {
    name: "Composite",
    className: "ContainerGroupPropertiesInstanceView",
    modelProperties: {
      events: {
        readOnly: true,
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event"
            }
          }
        }
      },
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LogAnalytics: msRest.CompositeMapper = {
  serializedName: "LogAnalytics",
  type: {
    name: "Composite",
    className: "LogAnalytics",
    modelProperties: {
      workspaceId: {
        required: true,
        serializedName: "workspaceId",
        type: {
          name: "String"
        }
      },
      workspaceKey: {
        required: true,
        serializedName: "workspaceKey",
        type: {
          name: "String"
        }
      },
      logType: {
        serializedName: "logType",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      workspaceResourceId: {
        serializedName: "workspaceResourceId",
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

export const ContainerGroupDiagnostics: msRest.CompositeMapper = {
  serializedName: "ContainerGroupDiagnostics",
  type: {
    name: "Composite",
    className: "ContainerGroupDiagnostics",
    modelProperties: {
      logAnalytics: {
        serializedName: "logAnalytics",
        type: {
          name: "Composite",
          className: "LogAnalytics"
        }
      }
    }
  }
};

export const ContainerGroupNetworkProfile: msRest.CompositeMapper = {
  serializedName: "ContainerGroupNetworkProfile",
  type: {
    name: "Composite",
    className: "ContainerGroupNetworkProfile",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DnsConfiguration: msRest.CompositeMapper = {
  serializedName: "DnsConfiguration",
  type: {
    name: "Composite",
    className: "DnsConfiguration",
    modelProperties: {
      nameServers: {
        required: true,
        serializedName: "nameServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      searchDomains: {
        serializedName: "searchDomains",
        type: {
          name: "String"
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionProperties: msRest.CompositeMapper = {
  serializedName: "EncryptionProperties",
  type: {
    name: "Composite",
    className: "EncryptionProperties",
    modelProperties: {
      vaultBaseUrl: {
        required: true,
        serializedName: "vaultBaseUrl",
        type: {
          name: "String"
        }
      },
      keyName: {
        required: true,
        serializedName: "keyName",
        type: {
          name: "String"
        }
      },
      keyVersion: {
        required: true,
        serializedName: "keyVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InitContainerPropertiesDefinitionInstanceView: msRest.CompositeMapper = {
  serializedName: "InitContainerPropertiesDefinition_instanceView",
  type: {
    name: "Composite",
    className: "InitContainerPropertiesDefinitionInstanceView",
    modelProperties: {
      restartCount: {
        readOnly: true,
        serializedName: "restartCount",
        type: {
          name: "Number"
        }
      },
      currentState: {
        readOnly: true,
        serializedName: "currentState",
        type: {
          name: "Composite",
          className: "ContainerState"
        }
      },
      previousState: {
        readOnly: true,
        serializedName: "previousState",
        type: {
          name: "Composite",
          className: "ContainerState"
        }
      },
      events: {
        readOnly: true,
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event"
            }
          }
        }
      }
    }
  }
};

export const InitContainerDefinition: msRest.CompositeMapper = {
  serializedName: "InitContainerDefinition",
  type: {
    name: "Composite",
    className: "InitContainerDefinition",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      image: {
        serializedName: "properties.image",
        type: {
          name: "String"
        }
      },
      command: {
        serializedName: "properties.command",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      environmentVariables: {
        serializedName: "properties.environmentVariables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnvironmentVariable"
            }
          }
        }
      },
      instanceView: {
        readOnly: true,
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "InitContainerPropertiesDefinitionInstanceView"
        }
      },
      volumeMounts: {
        serializedName: "properties.volumeMounts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VolumeMount"
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

export const ContainerGroup: msRest.CompositeMapper = {
  serializedName: "ContainerGroup",
  type: {
    name: "Composite",
    className: "ContainerGroup",
    modelProperties: {
      ...Resource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ContainerGroupIdentity"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      containers: {
        required: true,
        serializedName: "properties.containers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Container"
            }
          }
        }
      },
      imageRegistryCredentials: {
        serializedName: "properties.imageRegistryCredentials",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageRegistryCredential"
            }
          }
        }
      },
      restartPolicy: {
        serializedName: "properties.restartPolicy",
        type: {
          name: "String"
        }
      },
      ipAddress: {
        serializedName: "properties.ipAddress",
        type: {
          name: "Composite",
          className: "IpAddress"
        }
      },
      osType: {
        required: true,
        serializedName: "properties.osType",
        type: {
          name: "String"
        }
      },
      volumes: {
        serializedName: "properties.volumes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Volume"
            }
          }
        }
      },
      instanceView: {
        readOnly: true,
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "ContainerGroupPropertiesInstanceView"
        }
      },
      diagnostics: {
        serializedName: "properties.diagnostics",
        type: {
          name: "Composite",
          className: "ContainerGroupDiagnostics"
        }
      },
      networkProfile: {
        serializedName: "properties.networkProfile",
        type: {
          name: "Composite",
          className: "ContainerGroupNetworkProfile"
        }
      },
      dnsConfig: {
        serializedName: "properties.dnsConfig",
        type: {
          name: "Composite",
          className: "DnsConfiguration"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "String"
        }
      },
      encryptionProperties: {
        serializedName: "properties.encryptionProperties",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      },
      initContainers: {
        serializedName: "properties.initContainers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InitContainerDefinition"
            }
          }
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

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        required: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageName: msRest.CompositeMapper = {
  serializedName: "Usage_name",
  type: {
    name: "Composite",
    className: "UsageName",
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
        readOnly: true,
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      currentValue: {
        readOnly: true,
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        readOnly: true,
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "Composite",
          className: "UsageName"
        }
      }
    }
  }
};

export const Logs: msRest.CompositeMapper = {
  serializedName: "Logs",
  type: {
    name: "Composite",
    className: "Logs",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerExecRequestTerminalSize: msRest.CompositeMapper = {
  serializedName: "ContainerExecRequest_terminalSize",
  type: {
    name: "Composite",
    className: "ContainerExecRequestTerminalSize",
    modelProperties: {
      rows: {
        serializedName: "rows",
        type: {
          name: "Number"
        }
      },
      cols: {
        serializedName: "cols",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ContainerExecRequest: msRest.CompositeMapper = {
  serializedName: "ContainerExecRequest",
  type: {
    name: "Composite",
    className: "ContainerExecRequest",
    modelProperties: {
      command: {
        serializedName: "command",
        type: {
          name: "String"
        }
      },
      terminalSize: {
        serializedName: "terminalSize",
        type: {
          name: "Composite",
          className: "ContainerExecRequestTerminalSize"
        }
      }
    }
  }
};

export const ContainerExecResponse: msRest.CompositeMapper = {
  serializedName: "ContainerExecResponse",
  type: {
    name: "Composite",
    className: "ContainerExecResponse",
    modelProperties: {
      webSocketUri: {
        serializedName: "webSocketUri",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CachedImages: msRest.CompositeMapper = {
  serializedName: "cachedImages",
  type: {
    name: "Composite",
    className: "CachedImages",
    modelProperties: {
      osType: {
        required: true,
        serializedName: "osType",
        type: {
          name: "String"
        }
      },
      image: {
        required: true,
        serializedName: "image",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CapabilitiesCapabilities: msRest.CompositeMapper = {
  serializedName: "Capabilities_capabilities",
  type: {
    name: "Composite",
    className: "CapabilitiesCapabilities",
    modelProperties: {
      maxMemoryInGB: {
        readOnly: true,
        serializedName: "maxMemoryInGB",
        type: {
          name: "Number"
        }
      },
      maxCpu: {
        readOnly: true,
        serializedName: "maxCpu",
        type: {
          name: "Number"
        }
      },
      maxGpuCount: {
        readOnly: true,
        serializedName: "maxGpuCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Capabilities: msRest.CompositeMapper = {
  serializedName: "Capabilities",
  type: {
    name: "Composite",
    className: "Capabilities",
    modelProperties: {
      resourceType: {
        readOnly: true,
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      osType: {
        readOnly: true,
        serializedName: "osType",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      ipAddressType: {
        readOnly: true,
        serializedName: "ipAddressType",
        type: {
          name: "String"
        }
      },
      gpu: {
        readOnly: true,
        serializedName: "gpu",
        type: {
          name: "String"
        }
      },
      capabilities: {
        readOnly: true,
        serializedName: "capabilities",
        type: {
          name: "Composite",
          className: "CapabilitiesCapabilities"
        }
      }
    }
  }
};

export const ContainerGroupListResult: msRest.CompositeMapper = {
  serializedName: "ContainerGroupListResult",
  type: {
    name: "Composite",
    className: "ContainerGroupListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerGroup"
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
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageListResult: msRest.CompositeMapper = {
  serializedName: "UsageListResult",
  type: {
    name: "Composite",
    className: "UsageListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
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

export const CachedImagesListResult: msRest.CompositeMapper = {
  serializedName: "CachedImagesListResult",
  type: {
    name: "Composite",
    className: "CachedImagesListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CachedImages"
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

export const CapabilitiesListResult: msRest.CompositeMapper = {
  serializedName: "CapabilitiesListResult",
  type: {
    name: "Composite",
    className: "CapabilitiesListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Capabilities"
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

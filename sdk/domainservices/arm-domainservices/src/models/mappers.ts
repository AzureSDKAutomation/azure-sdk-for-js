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
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LdapsSettings: msRest.CompositeMapper = {
  serializedName: "LdapsSettings",
  type: {
    name: "Composite",
    className: "LdapsSettings",
    modelProperties: {
      ldaps: {
        serializedName: "ldaps",
        type: {
          name: "String"
        }
      },
      pfxCertificate: {
        serializedName: "pfxCertificate",
        type: {
          name: "String"
        }
      },
      pfxCertificatePassword: {
        serializedName: "pfxCertificatePassword",
        type: {
          name: "String"
        }
      },
      publicCertificate: {
        readOnly: true,
        serializedName: "publicCertificate",
        type: {
          name: "String"
        }
      },
      certificateThumbprint: {
        readOnly: true,
        serializedName: "certificateThumbprint",
        type: {
          name: "String"
        }
      },
      certificateNotAfter: {
        readOnly: true,
        serializedName: "certificateNotAfter",
        type: {
          name: "DateTime"
        }
      },
      externalAccess: {
        serializedName: "externalAccess",
        type: {
          name: "String"
        }
      },
      externalAccessIpAddress: {
        readOnly: true,
        serializedName: "externalAccessIpAddress",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainSecuritySettings: msRest.CompositeMapper = {
  serializedName: "DomainSecuritySettings",
  type: {
    name: "Composite",
    className: "DomainSecuritySettings",
    modelProperties: {
      ntlmV1: {
        serializedName: "ntlmV1",
        type: {
          name: "String"
        }
      },
      tlsV1: {
        serializedName: "tlsV1",
        type: {
          name: "String"
        }
      },
      syncNtlmPasswords: {
        serializedName: "syncNtlmPasswords",
        type: {
          name: "String"
        }
      },
      syncKerberosPasswords: {
        serializedName: "syncKerberosPasswords",
        type: {
          name: "String"
        }
      },
      syncOnPremPasswords: {
        serializedName: "syncOnPremPasswords",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ForestTrust: msRest.CompositeMapper = {
  serializedName: "ForestTrust",
  type: {
    name: "Composite",
    className: "ForestTrust",
    modelProperties: {
      trustedDomainFqdn: {
        serializedName: "trustedDomainFqdn",
        type: {
          name: "String"
        }
      },
      trustDirection: {
        serializedName: "trustDirection",
        type: {
          name: "String"
        }
      },
      friendlyName: {
        serializedName: "friendlyName",
        type: {
          name: "String"
        }
      },
      remoteDnsIps: {
        serializedName: "remoteDnsIps",
        type: {
          name: "String"
        }
      },
      trustPassword: {
        serializedName: "trustPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceForestSettings: msRest.CompositeMapper = {
  serializedName: "ResourceForestSettings",
  type: {
    name: "Composite",
    className: "ResourceForestSettings",
    modelProperties: {
      settings: {
        serializedName: "settings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ForestTrust"
            }
          }
        }
      },
      resourceForest: {
        serializedName: "resourceForest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HealthMonitor: msRest.CompositeMapper = {
  serializedName: "HealthMonitor",
  type: {
    name: "Composite",
    className: "HealthMonitor",
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
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HealthAlert: msRest.CompositeMapper = {
  serializedName: "HealthAlert",
  type: {
    name: "Composite",
    className: "HealthAlert",
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
      issue: {
        readOnly: true,
        serializedName: "issue",
        type: {
          name: "String"
        }
      },
      severity: {
        readOnly: true,
        serializedName: "severity",
        type: {
          name: "String"
        }
      },
      raised: {
        readOnly: true,
        serializedName: "raised",
        type: {
          name: "DateTime"
        }
      },
      lastDetected: {
        readOnly: true,
        serializedName: "lastDetected",
        type: {
          name: "DateTime"
        }
      },
      resolutionUri: {
        readOnly: true,
        serializedName: "resolutionUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationSettings: msRest.CompositeMapper = {
  serializedName: "NotificationSettings",
  type: {
    name: "Composite",
    className: "NotificationSettings",
    modelProperties: {
      notifyGlobalAdmins: {
        serializedName: "notifyGlobalAdmins",
        type: {
          name: "String"
        }
      },
      notifyDcAdmins: {
        serializedName: "notifyDcAdmins",
        type: {
          name: "String"
        }
      },
      additionalRecipients: {
        serializedName: "additionalRecipients",
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

export const DomainService: msRest.CompositeMapper = {
  serializedName: "DomainService",
  type: {
    name: "Composite",
    className: "DomainService",
    modelProperties: {
      ...Resource.type.modelProperties,
      version: {
        readOnly: true,
        serializedName: "properties.version",
        type: {
          name: "Number"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "properties.tenantId",
        type: {
          name: "String"
        }
      },
      domainName: {
        serializedName: "properties.domainName",
        type: {
          name: "String"
        }
      },
      deploymentId: {
        readOnly: true,
        serializedName: "properties.deploymentId",
        type: {
          name: "String"
        }
      },
      vnetSiteId: {
        readOnly: true,
        serializedName: "properties.vnetSiteId",
        type: {
          name: "String"
        }
      },
      subnetId: {
        serializedName: "properties.subnetId",
        type: {
          name: "String"
        }
      },
      ldapsSettings: {
        serializedName: "properties.ldapsSettings",
        type: {
          name: "Composite",
          className: "LdapsSettings"
        }
      },
      domainSecuritySettings: {
        serializedName: "properties.domainSecuritySettings",
        type: {
          name: "Composite",
          className: "DomainSecuritySettings"
        }
      },
      resourceForestSettings: {
        serializedName: "properties.resourceForestSettings",
        type: {
          name: "Composite",
          className: "ResourceForestSettings"
        }
      },
      domainConfigurationType: {
        serializedName: "properties.domainConfigurationType",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "String"
        }
      },
      healthLastEvaluated: {
        readOnly: true,
        serializedName: "properties.healthLastEvaluated",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      healthMonitors: {
        readOnly: true,
        serializedName: "properties.healthMonitors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HealthMonitor"
            }
          }
        }
      },
      healthAlerts: {
        readOnly: true,
        serializedName: "properties.healthAlerts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HealthAlert"
            }
          }
        }
      },
      notificationSettings: {
        serializedName: "properties.notificationSettings",
        type: {
          name: "Composite",
          className: "NotificationSettings"
        }
      },
      filteredSync: {
        serializedName: "properties.filteredSync",
        type: {
          name: "String"
        }
      },
      domainControllerIpAddress: {
        readOnly: true,
        serializedName: "properties.domainControllerIpAddress",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      serviceStatus: {
        readOnly: true,
        serializedName: "properties.serviceStatus",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
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
      }
    }
  }
};

export const DefaultErrorResponseErrorDetailsItem: msRest.CompositeMapper = {
  serializedName: "DefaultErrorResponse_error_detailsItem",
  type: {
    name: "Composite",
    className: "DefaultErrorResponseErrorDetailsItem",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
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
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DefaultErrorResponseError: msRest.CompositeMapper = {
  serializedName: "DefaultErrorResponse_error",
  type: {
    name: "Composite",
    className: "DefaultErrorResponseError",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
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
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DefaultErrorResponseErrorDetailsItem"
            }
          }
        }
      },
      innererror: {
        readOnly: true,
        serializedName: "innererror",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DefaultErrorResponse: msRest.CompositeMapper = {
  serializedName: "DefaultErrorResponse",
  type: {
    name: "Composite",
    className: "DefaultErrorResponse",
    modelProperties: {
      error: {
        readOnly: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "DefaultErrorResponseError"
        }
      }
    }
  }
};

export const ContainerAccount: msRest.CompositeMapper = {
  serializedName: "ContainerAccount",
  type: {
    name: "Composite",
    className: "ContainerAccount",
    modelProperties: {
      accountName: {
        serializedName: "accountName",
        type: {
          name: "String"
        }
      },
      spn: {
        serializedName: "spn",
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

export const OuContainer: msRest.CompositeMapper = {
  serializedName: "OuContainer",
  type: {
    name: "Composite",
    className: "OuContainer",
    modelProperties: {
      ...Resource.type.modelProperties,
      tenantId: {
        readOnly: true,
        serializedName: "properties.tenantId",
        type: {
          name: "String"
        }
      },
      domainName: {
        readOnly: true,
        serializedName: "properties.domainName",
        type: {
          name: "String"
        }
      },
      deploymentId: {
        readOnly: true,
        serializedName: "properties.deploymentId",
        type: {
          name: "String"
        }
      },
      containerId: {
        readOnly: true,
        serializedName: "properties.containerId",
        type: {
          name: "String"
        }
      },
      accounts: {
        serializedName: "properties.accounts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerAccount"
            }
          }
        }
      },
      serviceStatus: {
        readOnly: true,
        serializedName: "properties.serviceStatus",
        type: {
          name: "String"
        }
      },
      distinguishedName: {
        readOnly: true,
        serializedName: "properties.distinguishedName",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
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

export const DomainServiceListResult: msRest.CompositeMapper = {
  serializedName: "DomainServiceListResult",
  type: {
    name: "Composite",
    className: "DomainServiceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DomainService"
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

export const OuContainerListResult: msRest.CompositeMapper = {
  serializedName: "OuContainerListResult",
  type: {
    name: "Composite",
    className: "OuContainerListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OuContainer"
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

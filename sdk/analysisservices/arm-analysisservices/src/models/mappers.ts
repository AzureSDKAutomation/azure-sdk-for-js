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

export const ResourceSku: msRest.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
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
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 8,
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
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
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

export const AnalysisServicesServer: msRest.CompositeMapper = {
  serializedName: "AnalysisServicesServer",
  type: {
    name: "Composite",
    className: "AnalysisServicesServer",
    modelProperties: {
      ...Resource.type.modelProperties,
      asAdministrators: {
        serializedName: "properties.asAdministrators",
        type: {
          name: "Composite",
          className: "ServerAdministrators"
        }
      },
      backupBlobContainerUri: {
        serializedName: "properties.backupBlobContainerUri",
        type: {
          name: "String"
        }
      },
      gatewayDetails: {
        serializedName: "properties.gatewayDetails",
        type: {
          name: "Composite",
          className: "GatewayDetails"
        }
      },
      ipV4FirewallSettings: {
        serializedName: "properties.ipV4FirewallSettings",
        type: {
          name: "Composite",
          className: "IPv4FirewallSettings"
        }
      },
      querypoolConnectionMode: {
        serializedName: "properties.querypoolConnectionMode",
        defaultValue: 'All',
        type: {
          name: "Enum",
          allowedValues: [
            "All",
            "ReadOnly"
          ]
        }
      },
      state: {
        readOnly: true,
        serializedName: "properties.state",
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
      },
      serverFullName: {
        readOnly: true,
        serializedName: "properties.serverFullName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerAdministrators: msRest.CompositeMapper = {
  serializedName: "ServerAdministrators",
  type: {
    name: "Composite",
    className: "ServerAdministrators",
    modelProperties: {
      members: {
        serializedName: "members",
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

export const GatewayDetails: msRest.CompositeMapper = {
  serializedName: "GatewayDetails",
  type: {
    name: "Composite",
    className: "GatewayDetails",
    modelProperties: {
      gatewayResourceId: {
        serializedName: "gatewayResourceId",
        type: {
          name: "String"
        }
      },
      gatewayObjectId: {
        readOnly: true,
        serializedName: "gatewayObjectId",
        type: {
          name: "String"
        }
      },
      dmtsClusterUri: {
        readOnly: true,
        serializedName: "dmtsClusterUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IPv4FirewallRule: msRest.CompositeMapper = {
  serializedName: "IPv4FirewallRule",
  type: {
    name: "Composite",
    className: "IPv4FirewallRule",
    modelProperties: {
      firewallRuleName: {
        serializedName: "firewallRuleName",
        type: {
          name: "String"
        }
      },
      rangeStart: {
        serializedName: "rangeStart",
        type: {
          name: "String"
        }
      },
      rangeEnd: {
        serializedName: "rangeEnd",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IPv4FirewallSettings: msRest.CompositeMapper = {
  serializedName: "IPv4FirewallSettings",
  type: {
    name: "Composite",
    className: "IPv4FirewallSettings",
    modelProperties: {
      firewallRules: {
        serializedName: "firewallRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IPv4FirewallRule"
            }
          }
        }
      },
      enablePowerBIService: {
        serializedName: "enablePowerBIService",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AnalysisServicesServerUpdateParameters: msRest.CompositeMapper = {
  serializedName: "AnalysisServicesServerUpdateParameters",
  type: {
    name: "Composite",
    className: "AnalysisServicesServerUpdateParameters",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
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
      asAdministrators: {
        serializedName: "properties.asAdministrators",
        type: {
          name: "Composite",
          className: "ServerAdministrators"
        }
      },
      backupBlobContainerUri: {
        serializedName: "properties.backupBlobContainerUri",
        type: {
          name: "String"
        }
      },
      gatewayDetails: {
        serializedName: "properties.gatewayDetails",
        type: {
          name: "Composite",
          className: "GatewayDetails"
        }
      },
      ipV4FirewallSettings: {
        serializedName: "properties.ipV4FirewallSettings",
        type: {
          name: "Composite",
          className: "IPv4FirewallSettings"
        }
      },
      querypoolConnectionMode: {
        serializedName: "properties.querypoolConnectionMode",
        defaultValue: 'All',
        type: {
          name: "Enum",
          allowedValues: [
            "All",
            "ReadOnly"
          ]
        }
      }
    }
  }
};

export const GatewayListStatusLive: msRest.CompositeMapper = {
  serializedName: "GatewayListStatusLive",
  type: {
    name: "Composite",
    className: "GatewayListStatusLive",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Enum",
          allowedValues: [
            "Live"
          ]
        }
      }
    }
  }
};

export const GatewayError: msRest.CompositeMapper = {
  serializedName: "GatewayError",
  type: {
    name: "Composite",
    className: "GatewayError",
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

export const GatewayListStatusError: msRest.CompositeMapper = {
  serializedName: "GatewayListStatusError",
  type: {
    name: "Composite",
    className: "GatewayListStatusError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "GatewayError"
        }
      }
    }
  }
};

export const CheckServerNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckServerNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckServerNameAvailabilityParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        constraints: {
          MaxLength: 63,
          MinLength: 3,
          Pattern: /^[a-z][a-z0-9]*$/
        },
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'Microsoft.AnalysisServices/servers',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckServerNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckServerNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckServerNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
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

export const OperationStatus: msRest.CompositeMapper = {
  serializedName: "OperationStatus",
  type: {
    name: "Composite",
    className: "OperationStatus",
    modelProperties: {
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
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const SkuEnumerationForNewResourceResult: msRest.CompositeMapper = {
  serializedName: "SkuEnumerationForNewResourceResult",
  type: {
    name: "Composite",
    className: "SkuEnumerationForNewResourceResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
            }
          }
        }
      }
    }
  }
};

export const SkuDetailsForExistingResource: msRest.CompositeMapper = {
  serializedName: "SkuDetailsForExistingResource",
  type: {
    name: "Composite",
    className: "SkuDetailsForExistingResource",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      }
    }
  }
};

export const SkuEnumerationForExistingResourceResult: msRest.CompositeMapper = {
  serializedName: "SkuEnumerationForExistingResourceResult",
  type: {
    name: "Composite",
    className: "SkuEnumerationForExistingResourceResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuDetailsForExistingResource"
            }
          }
        }
      }
    }
  }
};

export const AnalysisServicesServers: msRest.CompositeMapper = {
  serializedName: "AnalysisServicesServers",
  type: {
    name: "Composite",
    className: "AnalysisServicesServers",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AnalysisServicesServer"
            }
          }
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

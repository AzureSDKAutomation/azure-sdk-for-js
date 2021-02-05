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

export const SystemData: msRest.CompositeMapper = {
  serializedName: "SystemData",
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
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
      location: {
        required: true,
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

export const CapacitySku: msRest.CompositeMapper = {
  serializedName: "CapacitySku",
  type: {
    name: "Composite",
    className: "CapacitySku",
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
      }
    }
  }
};

export const DedicatedCapacity: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacity",
  type: {
    name: "Composite",
    className: "DedicatedCapacity",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CapacitySku"
        }
      },
      administration: {
        serializedName: "properties.administration",
        type: {
          name: "Composite",
          className: "DedicatedCapacityAdministrators"
        }
      },
      mode: {
        serializedName: "properties.mode",
        type: {
          name: "String"
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
      }
    }
  }
};

export const DedicatedCapacityAdministrators: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacityAdministrators",
  type: {
    name: "Composite",
    className: "DedicatedCapacityAdministrators",
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

export const DedicatedCapacityUpdateParameters: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacityUpdateParameters",
  type: {
    name: "Composite",
    className: "DedicatedCapacityUpdateParameters",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "CapacitySku"
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
      administration: {
        serializedName: "properties.administration",
        type: {
          name: "Composite",
          className: "DedicatedCapacityAdministrators"
        }
      },
      mode: {
        serializedName: "properties.mode",
        type: {
          name: "String"
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
              className: "CapacitySku"
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
          className: "CapacitySku"
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

export const ErrorResponseError: msRest.CompositeMapper = {
  serializedName: "ErrorResponse_error",
  type: {
    name: "Composite",
    className: "ErrorResponseError",
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
          className: "ErrorResponseError"
        }
      }
    }
  }
};

export const CheckCapacityNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckCapacityNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckCapacityNameAvailabilityParameters",
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
        defaultValue: 'Microsoft.PowerBIDedicated/capacities',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckCapacityNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckCapacityNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckCapacityNameAvailabilityResult",
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

export const AutoScaleVCoreSku: msRest.CompositeMapper = {
  serializedName: "AutoScaleVCoreSku",
  type: {
    name: "Composite",
    className: "AutoScaleVCoreSku",
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
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutoScaleVCore: msRest.CompositeMapper = {
  serializedName: "AutoScaleVCore",
  type: {
    name: "Composite",
    className: "AutoScaleVCore",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AutoScaleVCoreSku"
        }
      },
      capacityLimit: {
        serializedName: "properties.capacityLimit",
        type: {
          name: "Number"
        }
      },
      capacityObjectId: {
        serializedName: "properties.capacityObjectId",
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

export const AutoScaleVCoreUpdateParameters: msRest.CompositeMapper = {
  serializedName: "AutoScaleVCoreUpdateParameters",
  type: {
    name: "Composite",
    className: "AutoScaleVCoreUpdateParameters",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AutoScaleVCoreSku"
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
      capacityLimit: {
        serializedName: "properties.capacityLimit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DedicatedCapacities: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacities",
  type: {
    name: "Composite",
    className: "DedicatedCapacities",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedCapacity"
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

export const AutoScaleVCoreListResult: msRest.CompositeMapper = {
  serializedName: "AutoScaleVCoreListResult",
  type: {
    name: "Composite",
    className: "AutoScaleVCoreListResult",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AutoScaleVCore"
            }
          }
        }
      }
    }
  }
};

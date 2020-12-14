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

export const Tags: msRest.CompositeMapper = {
  serializedName: "Tags",
  type: {
    name: "Composite",
    className: "Tags",
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
      }
    }
  }
};

export const SystemData: msRest.CompositeMapper = {
  serializedName: "systemData",
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

export const Account: msRest.CompositeMapper = {
  serializedName: "Account",
  type: {
    name: "Composite",
    className: "Account",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      accountId: {
        readOnly: true,
        serializedName: "properties.accountId",
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
      systemData: {
        readOnly: true,
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const AccountPatch: msRest.CompositeMapper = {
  serializedName: "AccountPatch",
  type: {
    name: "Composite",
    className: "AccountPatch",
    modelProperties: {
      ...Tags.type.modelProperties,
      accountId: {
        readOnly: true,
        serializedName: "properties.accountId",
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

export const DataPool: msRest.CompositeMapper = {
  serializedName: "DataPool",
  type: {
    name: "Composite",
    className: "DataPool",
    modelProperties: {
      ...Resource.type.modelProperties,
      dataPoolId: {
        readOnly: true,
        serializedName: "properties.dataPoolId",
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
      locations: {
        serializedName: "properties.locations",
        constraints: {
          MinItems: 1
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoolLocation"
            }
          }
        }
      }
    }
  }
};

export const DataPoolLocation: msRest.CompositeMapper = {
  serializedName: "DataPoolLocation",
  type: {
    name: "Composite",
    className: "DataPoolLocation",
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

export const DataPoolPatch: msRest.CompositeMapper = {
  serializedName: "DataPoolPatch",
  type: {
    name: "Composite",
    className: "DataPoolPatch",
    modelProperties: {
      ...Resource.type.modelProperties,
      dataPoolId: {
        readOnly: true,
        serializedName: "properties.dataPoolId",
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
      locations: {
        serializedName: "properties.locations",
        constraints: {
          MinItems: 1
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPoolLocation"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
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

export const OperationLogSpecification: msRest.CompositeMapper = {
  serializedName: "OperationLogSpecification",
  type: {
    name: "Composite",
    className: "OperationLogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationMetricAvailability: msRest.CompositeMapper = {
  serializedName: "OperationMetricAvailability",
  type: {
    name: "Composite",
    className: "OperationMetricAvailability",
    modelProperties: {
      timeGrain: {
        serializedName: "timeGrain",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationMetricSpecification: msRest.CompositeMapper = {
  serializedName: "OperationMetricSpecification",
  type: {
    name: "Composite",
    className: "OperationMetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      enableRegionalMdmAccount: {
        serializedName: "enableRegionalMdmAccount",
        type: {
          name: "String"
        }
      },
      sourceMdmAccount: {
        serializedName: "sourceMdmAccount",
        type: {
          name: "String"
        }
      },
      sourceMdmNamespace: {
        serializedName: "sourceMdmNamespace",
        type: {
          name: "String"
        }
      },
      availabilities: {
        serializedName: "availabilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetricAvailability"
            }
          }
        }
      }
    }
  }
};

export const OperationServiceSpecification: msRest.CompositeMapper = {
  serializedName: "OperationServiceSpecification",
  type: {
    name: "Composite",
    className: "OperationServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationLogSpecification"
            }
          }
        }
      },
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetricSpecification"
            }
          }
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
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      actionType: {
        serializedName: "actionType",
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
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "OperationServiceSpecification"
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
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDefinition"
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

export const AccountList: msRest.CompositeMapper = {
  serializedName: "AccountList",
  type: {
    name: "Composite",
    className: "AccountList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Account"
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

export const DataPoolList: msRest.CompositeMapper = {
  serializedName: "DataPoolList",
  type: {
    name: "Composite",
    className: "DataPoolList",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPool"
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

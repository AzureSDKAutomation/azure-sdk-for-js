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
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "display.operation",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "display.resource",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "display.description",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "display.provider",
        type: {
          name: "String"
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

export const DFPInstance: msRest.CompositeMapper = {
  serializedName: "DFPInstance",
  type: {
    name: "Composite",
    className: "DFPInstance",
    modelProperties: {
      ...Resource.type.modelProperties,
      administration: {
        serializedName: "properties.administration",
        type: {
          name: "Composite",
          className: "DFPInstanceAdministrators"
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

export const DFPInstanceAdministrators: msRest.CompositeMapper = {
  serializedName: "DFPInstanceAdministrators",
  type: {
    name: "Composite",
    className: "DFPInstanceAdministrators",
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

export const DFPInstanceUpdateParameters: msRest.CompositeMapper = {
  serializedName: "DFPInstanceUpdateParameters",
  type: {
    name: "Composite",
    className: "DFPInstanceUpdateParameters",
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
      administration: {
        serializedName: "properties.administration",
        type: {
          name: "Composite",
          className: "DFPInstanceAdministrators"
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

export const CheckInstanceNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckInstanceNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckInstanceNameAvailabilityParameters",
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
        defaultValue: 'Microsoft.Dfp/instances',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckInstanceNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckInstanceNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckInstanceNameAvailabilityResult",
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

export const DFPInstances: msRest.CompositeMapper = {
  serializedName: "DFPInstances",
  type: {
    name: "Composite",
    className: "DFPInstances",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DFPInstance"
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
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

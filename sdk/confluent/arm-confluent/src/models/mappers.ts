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

export const ConfluentAgreementProperties: msRest.CompositeMapper = {
  serializedName: "ConfluentAgreementProperties",
  type: {
    name: "Composite",
    className: "ConfluentAgreementProperties",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "String"
        }
      },
      licenseTextLink: {
        serializedName: "licenseTextLink",
        type: {
          name: "String"
        }
      },
      privacyPolicyLink: {
        serializedName: "privacyPolicyLink",
        type: {
          name: "String"
        }
      },
      retrieveDatetime: {
        serializedName: "retrieveDatetime",
        type: {
          name: "DateTime"
        }
      },
      signature: {
        serializedName: "signature",
        type: {
          name: "String"
        }
      },
      accepted: {
        serializedName: "accepted",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ConfluentAgreementResource: msRest.CompositeMapper = {
  serializedName: "ConfluentAgreementResource",
  type: {
    name: "Composite",
    className: "ConfluentAgreementResource",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ConfluentAgreementProperties"
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

export const OperationResult: msRest.CompositeMapper = {
  serializedName: "OperationResult",
  type: {
    name: "Composite",
    className: "OperationResult",
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
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const ErrorResponseBody: msRest.CompositeMapper = {
  serializedName: "ErrorResponseBody",
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
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
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseBody"
            }
          }
        }
      }
    }
  }
};

export const ResourceProviderDefaultErrorResponse: msRest.CompositeMapper = {
  serializedName: "ResourceProviderDefaultErrorResponse",
  type: {
    name: "Composite",
    className: "ResourceProviderDefaultErrorResponse",
    modelProperties: {
      error: {
        readOnly: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponseBody"
        }
      }
    }
  }
};

export const OfferDetail: msRest.CompositeMapper = {
  serializedName: "OfferDetail",
  type: {
    name: "Composite",
    className: "OfferDetail",
    modelProperties: {
      publisherId: {
        serializedName: "publisherId",
        constraints: {
          MaxLength: 50
        },
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        constraints: {
          MaxLength: 50
        },
        type: {
          name: "String"
        }
      },
      planId: {
        serializedName: "planId",
        constraints: {
          MaxLength: 50
        },
        type: {
          name: "String"
        }
      },
      planName: {
        serializedName: "planName",
        constraints: {
          MaxLength: 50
        },
        type: {
          name: "String"
        }
      },
      termUnit: {
        serializedName: "termUnit",
        constraints: {
          MaxLength: 25
        },
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

export const UserDetail: msRest.CompositeMapper = {
  serializedName: "UserDetail",
  type: {
    name: "Composite",
    className: "UserDetail",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        constraints: {
          MaxLength: 50
        },
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "lastName",
        constraints: {
          MaxLength: 50
        },
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "emailAddress",
        constraints: {
          Pattern: /^\S+@\S+\.\S+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrganizationResourcePropertiesOfferDetail: msRest.CompositeMapper = {
  serializedName: "OrganizationResourceProperties_offerDetail",
  type: {
    name: "Composite",
    className: "OrganizationResourcePropertiesOfferDetail",
    modelProperties: {
      ...OfferDetail.type.modelProperties
    }
  }
};

export const OrganizationResourcePropertiesUserDetail: msRest.CompositeMapper = {
  serializedName: "OrganizationResourceProperties_userDetail",
  type: {
    name: "Composite",
    className: "OrganizationResourcePropertiesUserDetail",
    modelProperties: {
      ...UserDetail.type.modelProperties
    }
  }
};

export const OrganizationResourceProperties: msRest.CompositeMapper = {
  serializedName: "OrganizationResourceProperties",
  type: {
    name: "Composite",
    className: "OrganizationResourceProperties",
    modelProperties: {
      createdTime: {
        readOnly: true,
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      organizationId: {
        readOnly: true,
        serializedName: "organizationId",
        type: {
          name: "String"
        }
      },
      ssoUrl: {
        readOnly: true,
        serializedName: "ssoUrl",
        type: {
          name: "String"
        }
      },
      offerDetail: {
        serializedName: "offerDetail",
        type: {
          name: "Composite",
          className: "OrganizationResourcePropertiesOfferDetail"
        }
      },
      userDetail: {
        serializedName: "userDetail",
        type: {
          name: "Composite",
          className: "OrganizationResourcePropertiesUserDetail"
        }
      }
    }
  }
};

export const OrganizationResource: msRest.CompositeMapper = {
  serializedName: "OrganizationResource",
  type: {
    name: "Composite",
    className: "OrganizationResource",
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
      createdTime: {
        readOnly: true,
        serializedName: "properties.createdTime",
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      organizationId: {
        readOnly: true,
        serializedName: "properties.organizationId",
        type: {
          name: "String"
        }
      },
      ssoUrl: {
        readOnly: true,
        serializedName: "properties.ssoUrl",
        type: {
          name: "String"
        }
      },
      offerDetail: {
        serializedName: "properties.offerDetail",
        type: {
          name: "Composite",
          className: "OrganizationResourcePropertiesOfferDetail"
        }
      },
      userDetail: {
        serializedName: "properties.userDetail",
        type: {
          name: "Composite",
          className: "OrganizationResourcePropertiesUserDetail"
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
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrganizationResourceUpdate: msRest.CompositeMapper = {
  serializedName: "OrganizationResourceUpdate",
  type: {
    name: "Composite",
    className: "OrganizationResourceUpdate",
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

export const ConfluentAgreementResourceListResponse: msRest.CompositeMapper = {
  serializedName: "ConfluentAgreementResourceListResponse",
  type: {
    name: "Composite",
    className: "ConfluentAgreementResourceListResponse",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfluentAgreementResource"
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
              className: "OperationResult"
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

export const OrganizationResourceListResult: msRest.CompositeMapper = {
  serializedName: "OrganizationResourceListResult",
  type: {
    name: "Composite",
    className: "OrganizationResourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrganizationResource"
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

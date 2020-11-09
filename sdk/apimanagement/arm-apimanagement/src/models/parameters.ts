/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const accessName: msRest.OperationURLParameter = {
  parameterPath: "accessName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "accessName",
    defaultValue: 'access',
    type: {
      name: "String"
    }
  }
};
export const apiId0: msRest.OperationURLParameter = {
  parameterPath: "apiId",
  mapper: {
    required: true,
    serializedName: "apiId",
    constraints: {
      MaxLength: 256,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const apiId1: msRest.OperationURLParameter = {
  parameterPath: "apiId",
  mapper: {
    required: true,
    serializedName: "apiId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const appType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "appType"
  ],
  mapper: {
    serializedName: "appType",
    defaultValue: 'portal',
    type: {
      name: "String"
    }
  }
};
export const attachmentId: msRest.OperationURLParameter = {
  parameterPath: "attachmentId",
  mapper: {
    required: true,
    serializedName: "attachmentId",
    constraints: {
      MaxLength: 256,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const authsid: msRest.OperationURLParameter = {
  parameterPath: "authsid",
  mapper: {
    required: true,
    serializedName: "authsid",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const backendId: msRest.OperationURLParameter = {
  parameterPath: "backendId",
  mapper: {
    required: true,
    serializedName: "backendId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const cacheId: msRest.OperationURLParameter = {
  parameterPath: "cacheId",
  mapper: {
    required: true,
    serializedName: "cacheId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const certificateId: msRest.OperationURLParameter = {
  parameterPath: "certificateId",
  mapper: {
    required: true,
    serializedName: "certificateId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const commentId: msRest.OperationURLParameter = {
  parameterPath: "commentId",
  mapper: {
    required: true,
    serializedName: "commentId",
    constraints: {
      MaxLength: 256,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const configurationName: msRest.OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "configurationName",
    defaultValue: 'configuration',
    type: {
      name: "String"
    }
  }
};
export const contentItemId: msRest.OperationURLParameter = {
  parameterPath: "contentItemId",
  mapper: {
    required: true,
    serializedName: "contentItemId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const contentTypeId: msRest.OperationURLParameter = {
  parameterPath: "contentTypeId",
  mapper: {
    required: true,
    serializedName: "contentTypeId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const deleteRevisions: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteRevisions"
  ],
  mapper: {
    serializedName: "deleteRevisions",
    type: {
      name: "Boolean"
    }
  }
};
export const deleteSubscriptions: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteSubscriptions"
  ],
  mapper: {
    serializedName: "deleteSubscriptions",
    type: {
      name: "Boolean"
    }
  }
};
export const diagnosticId: msRest.OperationURLParameter = {
  parameterPath: "diagnosticId",
  mapper: {
    required: true,
    serializedName: "diagnosticId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const email: msRest.OperationURLParameter = {
  parameterPath: "email",
  mapper: {
    required: true,
    serializedName: "email",
    type: {
      name: "String"
    }
  }
};
export const expandApiVersionSet: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expandApiVersionSet"
  ],
  mapper: {
    serializedName: "expandApiVersionSet",
    type: {
      name: "Boolean"
    }
  }
};
export const expandCommentsAttachments: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expandCommentsAttachments"
  ],
  mapper: {
    serializedName: "expandCommentsAttachments",
    type: {
      name: "Boolean"
    }
  }
};
export const expandGroups: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expandGroups"
  ],
  mapper: {
    serializedName: "expandGroups",
    type: {
      name: "Boolean"
    }
  }
};
export const exportParameter: msRest.OperationQueryParameter = {
  parameterPath: "exportParameter",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "export",
    defaultValue: 'true',
    type: {
      name: "String"
    }
  }
};
export const filter0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filter1: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const force: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "force"
  ],
  mapper: {
    serializedName: "force",
    type: {
      name: "Boolean"
    }
  }
};
export const format0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "format"
  ],
  mapper: {
    serializedName: "format",
    defaultValue: 'xml',
    type: {
      name: "String"
    }
  }
};
export const format1: msRest.OperationQueryParameter = {
  parameterPath: "format",
  mapper: {
    required: true,
    serializedName: "format",
    type: {
      name: "String"
    }
  }
};
export const gatewayId: msRest.OperationURLParameter = {
  parameterPath: "gatewayId",
  mapper: {
    required: true,
    serializedName: "gatewayId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const groupId: msRest.OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    required: true,
    serializedName: "groupId",
    constraints: {
      MaxLength: 256,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const hcId: msRest.OperationURLParameter = {
  parameterPath: "hcId",
  mapper: {
    required: true,
    serializedName: "hcId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const identityProviderName: msRest.OperationURLParameter = {
  parameterPath: "identityProviderName",
  mapper: {
    required: true,
    serializedName: "identityProviderName",
    type: {
      name: "String"
    }
  }
};
export const ifMatch0: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const ifMatch1: msRest.OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    required: true,
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const includeNotTaggedApis: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeNotTaggedApis"
  ],
  mapper: {
    serializedName: "includeNotTaggedApis",
    type: {
      name: "Boolean"
    }
  }
};
export const includeNotTaggedOperations: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeNotTaggedOperations"
  ],
  mapper: {
    serializedName: "includeNotTaggedOperations",
    type: {
      name: "Boolean"
    }
  }
};
export const includeNotTaggedProducts: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includeNotTaggedProducts"
  ],
  mapper: {
    serializedName: "includeNotTaggedProducts",
    type: {
      name: "Boolean"
    }
  }
};
export const interval: msRest.OperationQueryParameter = {
  parameterPath: "interval",
  mapper: {
    required: true,
    serializedName: "interval",
    type: {
      name: "TimeSpan"
    }
  }
};
export const issueId: msRest.OperationURLParameter = {
  parameterPath: "issueId",
  mapper: {
    required: true,
    serializedName: "issueId",
    constraints: {
      MaxLength: 256,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const locationName: msRest.OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    required: true,
    serializedName: "locationName",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const loggerId: msRest.OperationURLParameter = {
  parameterPath: "loggerId",
  mapper: {
    required: true,
    serializedName: "loggerId",
    constraints: {
      MaxLength: 256,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const namedValueId: msRest.OperationURLParameter = {
  parameterPath: "namedValueId",
  mapper: {
    required: true,
    serializedName: "namedValueId",
    constraints: {
      MaxLength: 256,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const notificationName: msRest.OperationURLParameter = {
  parameterPath: "notificationName",
  mapper: {
    required: true,
    serializedName: "notificationName",
    type: {
      name: "String"
    }
  }
};
export const notify: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "notify"
  ],
  mapper: {
    serializedName: "notify",
    type: {
      name: "Boolean"
    }
  }
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const opid: msRest.OperationURLParameter = {
  parameterPath: "opid",
  mapper: {
    required: true,
    serializedName: "opid",
    constraints: {
      MaxLength: 256,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const orderby: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderby"
  ],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};
export const policyId: msRest.OperationURLParameter = {
  parameterPath: "policyId",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "policyId",
    defaultValue: 'policy',
    type: {
      name: "String"
    }
  }
};
export const productId: msRest.OperationURLParameter = {
  parameterPath: "productId",
  mapper: {
    required: true,
    serializedName: "productId",
    constraints: {
      MaxLength: 256,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const quotaCounterKey: msRest.OperationURLParameter = {
  parameterPath: "quotaCounterKey",
  mapper: {
    required: true,
    serializedName: "quotaCounterKey",
    type: {
      name: "String"
    }
  }
};
export const quotaPeriodKey: msRest.OperationURLParameter = {
  parameterPath: "quotaPeriodKey",
  mapper: {
    required: true,
    serializedName: "quotaPeriodKey",
    type: {
      name: "String"
    }
  }
};
export const releaseId: msRest.OperationURLParameter = {
  parameterPath: "releaseId",
  mapper: {
    required: true,
    serializedName: "releaseId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const schemaId: msRest.OperationURLParameter = {
  parameterPath: "schemaId",
  mapper: {
    required: true,
    serializedName: "schemaId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const scope0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "scope"
  ],
  mapper: {
    serializedName: "scope",
    type: {
      name: "String"
    }
  }
};
export const scope1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "scope"
  ],
  mapper: {
    serializedName: "scope",
    type: {
      name: "Enum",
      allowedValues: [
        "Tenant",
        "Product",
        "Api",
        "Operation",
        "All"
      ]
    }
  }
};
export const serviceName: msRest.OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    required: true,
    serializedName: "serviceName",
    constraints: {
      MaxLength: 50,
      MinLength: 1,
      Pattern: /^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/
    },
    type: {
      name: "String"
    }
  }
};
export const sid: msRest.OperationURLParameter = {
  parameterPath: "sid",
  mapper: {
    required: true,
    serializedName: "sid",
    constraints: {
      MaxLength: 256,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    constraints: {
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const tagDescriptionId: msRest.OperationURLParameter = {
  parameterPath: "tagDescriptionId",
  mapper: {
    required: true,
    serializedName: "tagDescriptionId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const tagId: msRest.OperationURLParameter = {
  parameterPath: "tagId",
  mapper: {
    required: true,
    serializedName: "tagId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const tags: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "tags"
  ],
  mapper: {
    serializedName: "tags",
    type: {
      name: "String"
    }
  }
};
export const templateName: msRest.OperationURLParameter = {
  parameterPath: "templateName",
  mapper: {
    required: true,
    serializedName: "templateName",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const userId: msRest.OperationURLParameter = {
  parameterPath: "userId",
  mapper: {
    required: true,
    serializedName: "userId",
    constraints: {
      MaxLength: 80,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const versionSetId: msRest.OperationURLParameter = {
  parameterPath: "versionSetId",
  mapper: {
    required: true,
    serializedName: "versionSetId",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[^*#&+:<>?]+$/
    },
    type: {
      name: "String"
    }
  }
};

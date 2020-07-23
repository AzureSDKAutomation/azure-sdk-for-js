/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
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
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const asyncOperationId: msRest.OperationURLParameter = {
  parameterPath: "asyncOperationId",
  mapper: {
    required: true,
    serializedName: "asyncOperationId",
    type: {
      name: "String"
    }
  }
};
export const clusterName0: msRest.OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    required: true,
    serializedName: "clusterName",
    constraints: {
      MaxLength: 63,
      MinLength: 4,
      Pattern: /^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$/
    },
    type: {
      name: "String"
    }
  }
};
export const clusterName1: msRest.OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    required: true,
    serializedName: "clusterName",
    type: {
      name: "String"
    }
  }
};
export const dataExportName0: msRest.OperationURLParameter = {
  parameterPath: "dataExportName",
  mapper: {
    required: true,
    serializedName: "dataExportName",
    constraints: {
      MaxLength: 63,
      MinLength: 4,
      Pattern: /^[A-Za-z][A-Za-z0-9-]+[A-Za-z0-9]$/
    },
    type: {
      name: "String"
    }
  }
};
export const dataExportName1: msRest.OperationURLParameter = {
  parameterPath: "dataExportName",
  mapper: {
    required: true,
    serializedName: "dataExportName",
    type: {
      name: "String"
    }
  }
};
export const dataSourceName: msRest.OperationURLParameter = {
  parameterPath: "dataSourceName",
  mapper: {
    required: true,
    serializedName: "dataSourceName",
    type: {
      name: "String"
    }
  }
};
export const dataSourceType: msRest.OperationURLParameter = {
  parameterPath: "dataSourceType",
  mapper: {
    required: true,
    serializedName: "dataSourceType",
    type: {
      name: "Enum",
      allowedValues: [
        "CustomLogs",
        "AzureWatson",
        "Query",
        "Ingestion",
        "Alerts"
      ]
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
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
export const gatewayId: msRest.OperationURLParameter = {
  parameterPath: "gatewayId",
  mapper: {
    required: true,
    serializedName: "gatewayId",
    type: {
      name: "String"
    }
  }
};
export const intelligencePackName: msRest.OperationURLParameter = {
  parameterPath: "intelligencePackName",
  mapper: {
    required: true,
    serializedName: "intelligencePackName",
    type: {
      name: "String"
    }
  }
};
export const linkedServiceName: msRest.OperationURLParameter = {
  parameterPath: "linkedServiceName",
  mapper: {
    required: true,
    serializedName: "linkedServiceName",
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
export const purgeId: msRest.OperationURLParameter = {
  parameterPath: "purgeId",
  mapper: {
    required: true,
    serializedName: "purgeId",
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
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const savedSearchId: msRest.OperationURLParameter = {
  parameterPath: "savedSearchId",
  mapper: {
    required: true,
    serializedName: "savedSearchId",
    type: {
      name: "String"
    }
  }
};
export const skiptoken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skiptoken"
  ],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};
export const storageInsightName: msRest.OperationURLParameter = {
  parameterPath: "storageInsightName",
  mapper: {
    required: true,
    serializedName: "storageInsightName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const tableName: msRest.OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    required: true,
    serializedName: "tableName",
    type: {
      name: "String"
    }
  }
};
export const workspaceName: msRest.OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    required: true,
    serializedName: "workspaceName",
    constraints: {
      MaxLength: 63,
      MinLength: 4,
      Pattern: /^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$/
    },
    type: {
      name: "String"
    }
  }
};

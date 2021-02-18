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
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2021-02-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-12-20',
    type: {
      name: "String"
    }
  }
};
export const azureRegion: msRest.OperationURLParameter = {
  parameterPath: "azureRegion",
  mapper: {
    required: true,
    serializedName: "azureRegion",
    type: {
      name: "String"
    }
  }
};
export const backupEngineName: msRest.OperationURLParameter = {
  parameterPath: "backupEngineName",
  mapper: {
    required: true,
    serializedName: "backupEngineName",
    type: {
      name: "String"
    }
  }
};
export const containerName: msRest.OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    required: true,
    serializedName: "containerName",
    type: {
      name: "String"
    }
  }
};
export const fabricName: msRest.OperationURLParameter = {
  parameterPath: "fabricName",
  mapper: {
    required: true,
    serializedName: "fabricName",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
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
export const intentObjectName: msRest.OperationURLParameter = {
  parameterPath: "intentObjectName",
  mapper: {
    required: true,
    serializedName: "intentObjectName",
    type: {
      name: "String"
    }
  }
};
export const jobName: msRest.OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    required: true,
    serializedName: "jobName",
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
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "String"
    }
  }
};
export const policyName: msRest.OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    required: true,
    serializedName: "policyName",
    type: {
      name: "String"
    }
  }
};
export const privateEndpointConnectionName: msRest.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    required: true,
    serializedName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};
export const protectedItemName: msRest.OperationURLParameter = {
  parameterPath: "protectedItemName",
  mapper: {
    required: true,
    serializedName: "protectedItemName",
    type: {
      name: "String"
    }
  }
};
export const recoveryPointId: msRest.OperationURLParameter = {
  parameterPath: "recoveryPointId",
  mapper: {
    required: true,
    serializedName: "recoveryPointId",
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
export const skipToken: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skipToken"
  ],
  mapper: {
    serializedName: "$skipToken",
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
    type: {
      name: "String"
    }
  }
};
export const vaultName: msRest.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    required: true,
    serializedName: "vaultName",
    type: {
      name: "String"
    }
  }
};

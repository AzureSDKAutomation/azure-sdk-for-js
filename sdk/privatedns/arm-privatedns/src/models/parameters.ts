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
export const ifMatch: msRest.OperationParameter = {
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
export const ifNoneMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifNoneMatch"
  ],
  mapper: {
    serializedName: "If-None-Match",
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
export const privateZoneName: msRest.OperationURLParameter = {
  parameterPath: "privateZoneName",
  mapper: {
    required: true,
    serializedName: "privateZoneName",
    type: {
      name: "String"
    }
  }
};
export const recordsetnamesuffix: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "recordsetnamesuffix"
  ],
  mapper: {
    serializedName: "$recordsetnamesuffix",
    type: {
      name: "String"
    }
  }
};
export const recordType: msRest.OperationURLParameter = {
  parameterPath: "recordType",
  mapper: {
    required: true,
    serializedName: "recordType",
    type: {
      name: "Enum",
      allowedValues: [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    }
  }
};
export const relativeRecordSetName: msRest.OperationURLParameter = {
  parameterPath: "relativeRecordSetName",
  mapper: {
    required: true,
    serializedName: "relativeRecordSetName",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
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
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const virtualNetworkLinkName: msRest.OperationURLParameter = {
  parameterPath: "virtualNetworkLinkName",
  mapper: {
    required: true,
    serializedName: "virtualNetworkLinkName",
    type: {
      name: "String"
    }
  }
};

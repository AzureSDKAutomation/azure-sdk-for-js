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
export const offerId: msRest.OperationURLParameter = {
  parameterPath: "offerId",
  mapper: {
    required: true,
    serializedName: "offerId",
    type: {
      name: "String"
    }
  }
};
export const offerType: msRest.OperationURLParameter = {
  parameterPath: "offerType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "offerType",
    defaultValue: 'virtualmachine',
    type: {
      name: "String"
    }
  }
};
export const planId: msRest.OperationURLParameter = {
  parameterPath: "planId",
  mapper: {
    required: true,
    serializedName: "planId",
    type: {
      name: "String"
    }
  }
};
export const publisherId: msRest.OperationURLParameter = {
  parameterPath: "publisherId",
  mapper: {
    required: true,
    serializedName: "publisherId",
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

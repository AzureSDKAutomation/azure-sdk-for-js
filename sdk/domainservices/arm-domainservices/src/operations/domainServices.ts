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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/domainServicesMappers";
import * as Parameters from "../models/parameters";
import { DomainservicesManagementClientContext } from "../domainservicesManagementClientContext";

/** Class representing a DomainServices. */
export class DomainServices {
  private readonly client: DomainservicesManagementClientContext;

  /**
   * Create a DomainServices.
   * @param {DomainservicesManagementClientContext} client Reference to the service client.
   */
  constructor(client: DomainservicesManagementClientContext) {
    this.client = client;
  }

  /**
   * The List Domain Services in Subscription operation lists all the domain services available under
   * the given subscription (and across all resource groups within that subscription).
   * @summary List Domain Services in Subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainServiceListResult>, callback?: msRest.ServiceCallback<Models.DomainServiceListResult>): Promise<Models.DomainServicesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DomainServicesListResponse>;
  }

  /**
   * The List Domain Services in Resource Group operation lists all the domain services available
   * under the given resource group.
   * @summary List Domain Services in Resource Group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainServiceListResult>, callback?: msRest.ServiceCallback<Models.DomainServiceListResult>): Promise<Models.DomainServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.DomainServicesListByResourceGroupResponse>;
  }

  /**
   * The Create Domain Service operation creates a new domain service with the specified parameters.
   * If the specific service already exists, then any patchable properties will be updated and any
   * immutable properties will remain unchanged.
   * @summary Create or Update Domain Service (PUT Resource)
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Create or Update a Domain Service operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, domainServiceName: string, domainService: Models.DomainService, options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,domainServiceName,domainService,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DomainServicesCreateOrUpdateResponse>;
  }

  /**
   * The Get Domain Service operation retrieves a json representation of the Domain Service.
   * @summary Get Domain Service
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesGetResponse>
   */
  get(resourceGroupName: string, domainServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param callback The callback
   */
  get(resourceGroupName: string, domainServiceName: string, callback: msRest.ServiceCallback<Models.DomainService>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, domainServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainService>): void;
  get(resourceGroupName: string, domainServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainService>, callback?: msRest.ServiceCallback<Models.DomainService>): Promise<Models.DomainServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DomainServicesGetResponse>;
  }

  /**
   * The Delete Domain Service operation deletes an existing Domain Service.
   * @summary Delete Domain Service (DELETE Resource)
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, domainServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,domainServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The Update Domain Service operation can be used to update the existing deployment. The update
   * call only supports the properties listed in the PATCH body.
   * @summary Update Domain Service (PATCH Resource)
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Update a Domain Service operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesUpdateResponse>
   */
  update(resourceGroupName: string, domainServiceName: string, domainService: Models.DomainService, options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,domainServiceName,domainService,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DomainServicesUpdateResponse>;
  }

  /**
   * The Create Domain Service operation creates a new domain service with the specified parameters.
   * If the specific service already exists, then any patchable properties will be updated and any
   * immutable properties will remain unchanged.
   * @summary Create or Update Domain Service (PUT Resource)
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Create or Update a Domain Service operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, domainServiceName: string, domainService: Models.DomainService, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        domainServiceName,
        domainService,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * The Delete Domain Service operation deletes an existing Domain Service.
   * @summary Delete Domain Service (DELETE Resource)
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, domainServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        domainServiceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * The Update Domain Service operation can be used to update the existing deployment. The update
   * call only supports the properties listed in the PATCH body.
   * @summary Update Domain Service (PATCH Resource)
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Update a Domain Service operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, domainServiceName: string, domainService: Models.DomainService, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        domainServiceName,
        domainService,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The List Domain Services in Subscription operation lists all the domain services available under
   * the given subscription (and across all resource groups within that subscription).
   * @summary List Domain Services in Subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainServiceListResult>, callback?: msRest.ServiceCallback<Models.DomainServiceListResult>): Promise<Models.DomainServicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DomainServicesListNextResponse>;
  }

  /**
   * The List Domain Services in Resource Group operation lists all the domain services available
   * under the given resource group.
   * @summary List Domain Services in Resource Group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DomainServicesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.DomainServicesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DomainServiceListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DomainServiceListResult>, callback?: msRest.ServiceCallback<Models.DomainServiceListResult>): Promise<Models.DomainServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.DomainServicesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AAD/domainServices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DomainService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "domainService",
    mapper: {
      ...Mappers.DomainService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DomainService
    },
    201: {
      bodyMapper: Mappers.DomainService
    },
    202: {
      bodyMapper: Mappers.DomainService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "domainService",
    mapper: {
      ...Mappers.DomainService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DomainService
    },
    202: {
      bodyMapper: Mappers.DomainService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

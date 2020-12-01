/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/managedInstanceAzureADOnlyAuthenticationsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedInstanceAzureADOnlyAuthentications. */
export class ManagedInstanceAzureADOnlyAuthentications {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedInstanceAzureADOnlyAuthentications.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a specific Azure Active Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthentication>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthentication>): void;
  get(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthentication>, callback?: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthentication>): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsGetResponse>;
  }

  /**
   * Sets Server Active Directory only authentication property or updates an existing server Active
   * Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The required parameters for creating or updating an Active Directory only
   * authentication property.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, parameters: Models.ManagedInstanceAzureADOnlyAuthentication, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedInstanceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing server Active Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,managedInstanceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of server Azure Active Directory only authentications.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceResponse>
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>): void;
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      listByInstanceOperationSpec,
      callback) as Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceResponse>;
  }

  /**
   * Sets Server Active Directory only authentication property or updates an existing server Active
   * Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The required parameters for creating or updating an Active Directory only
   * authentication property.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, parameters: Models.ManagedInstanceAzureADOnlyAuthentication, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing server Active Directory only authentication property.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of server Azure Active Directory only authentications.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceNextResponse>
   */
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>): void;
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>, callback?: msRest.ServiceCallback<Models.ManagedInstanceAzureADOnlyAuthListResult>): Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInstanceNextOperationSpec,
      callback) as Promise<Models.ManagedInstanceAzureADOnlyAuthenticationsListByInstanceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/azureADOnlyAuthentications/{authenticationName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.authenticationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAzureADOnlyAuthentication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByInstanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/azureADOnlyAuthentications",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAzureADOnlyAuthListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/azureADOnlyAuthentications/{authenticationName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.authenticationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedInstanceAzureADOnlyAuthentication,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAzureADOnlyAuthentication
    },
    201: {
      bodyMapper: Mappers.ManagedInstanceAzureADOnlyAuthentication
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/azureADOnlyAuthentications/{authenticationName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.managedInstanceName,
    Parameters.authenticationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByInstanceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion8
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceAzureADOnlyAuthListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/policySetDefinitionsMappers";
import * as Parameters from "../models/parameters";
import { PolicyClientContext } from "../policyClientContext";

/** Class representing a PolicySetDefinitions. */
export class PolicySetDefinitions {
  private readonly client: PolicyClientContext;

  /**
   * Create a PolicySetDefinitions.
   * @param {PolicyClientContext} client Reference to the service client.
   */
  constructor(client: PolicyClientContext) {
    this.client = client;
  }

  /**
   * This operation creates or updates a policy set definition in the given subscription with the
   * given name.
   * @summary Creates or updates a policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsCreateOrUpdateResponse>
   */
  createOrUpdate(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, options?: msRest.RequestOptionsBase): Promise<Models.PolicySetDefinitionsCreateOrUpdateResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param callback The callback
   */
  createOrUpdate(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  createOrUpdate(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicySetDefinition>, callback?: msRest.ServiceCallback<Models.PolicySetDefinition>): Promise<Models.PolicySetDefinitionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsCreateOrUpdateResponse>;
  }

  /**
   * This operation deletes the policy set definition in the given subscription with the given name.
   * @summary Deletes a policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(policySetDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param callback The callback
   */
  deleteMethod(policySetDefinitionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(policySetDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(policySetDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * This operation retrieves the policy set definition in the given subscription with the given
   * name.
   * @summary Retrieves a policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsGetResponse>
   */
  get(policySetDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicySetDefinitionsGetResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param callback The callback
   */
  get(policySetDefinitionName: string, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(policySetDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  get(policySetDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicySetDefinition>, callback?: msRest.ServiceCallback<Models.PolicySetDefinition>): Promise<Models.PolicySetDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsGetResponse>;
  }

  /**
   * This operation retrieves the built-in policy set definition with the given name.
   * @summary Retrieves a built in policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsGetBuiltInResponse>
   */
  getBuiltIn(policySetDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicySetDefinitionsGetBuiltInResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param callback The callback
   */
  getBuiltIn(policySetDefinitionName: string, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getBuiltIn(policySetDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  getBuiltIn(policySetDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicySetDefinition>, callback?: msRest.ServiceCallback<Models.PolicySetDefinition>): Promise<Models.PolicySetDefinitionsGetBuiltInResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        options
      },
      getBuiltInOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsGetBuiltInResponse>;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in a given subscription that
   * match the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType
   * -eq {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered list
   * includes all policy set definitions associated with the subscription, including those that apply
   * directly or from management groups that contain the given subscription. If
   * $filter=atExactScope() is provided, the returned list only includes all policy set definitions
   * that at the given subscription. If $filter='policyType -eq {value}' is provided, the returned
   * list only includes all policy set definitions whose type match the {value}. Possible policyType
   * values are NotSpecified, BuiltIn and Custom. If $filter='category -eq {value}' is provided, the
   * returned list only includes all policy set definitions whose category match the {value}.
   * @summary Retrieves the policy set definitions for a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsListResponse>
   */
  list(options?: Models.PolicySetDefinitionsListOptionalParams): Promise<Models.PolicySetDefinitionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.PolicySetDefinitionsListOptionalParams, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  list(options?: Models.PolicySetDefinitionsListOptionalParams | msRest.ServiceCallback<Models.PolicySetDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): Promise<Models.PolicySetDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsListResponse>;
  }

  /**
   * This operation retrieves a list of all the built-in policy set definitions that match the
   * optional given $filter. If $filter='category -eq {value}' is provided, the returned list only
   * includes all built-in policy set definitions whose category match the {value}.
   * @summary Retrieves built-in policy set definitions.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsListBuiltInResponse>
   */
  listBuiltIn(options?: Models.PolicySetDefinitionsListBuiltInOptionalParams): Promise<Models.PolicySetDefinitionsListBuiltInResponse>;
  /**
   * @param callback The callback
   */
  listBuiltIn(callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBuiltIn(options: Models.PolicySetDefinitionsListBuiltInOptionalParams, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  listBuiltIn(options?: Models.PolicySetDefinitionsListBuiltInOptionalParams | msRest.ServiceCallback<Models.PolicySetDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): Promise<Models.PolicySetDefinitionsListBuiltInResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBuiltInOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsListBuiltInResponse>;
  }

  /**
   * This operation creates or updates a policy set definition in the given management group with the
   * given name.
   * @summary Creates or updates a policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>
   */
  createOrUpdateAtManagementGroup(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  createOrUpdateAtManagementGroup(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, managementGroupId: string, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateAtManagementGroup(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  createOrUpdateAtManagementGroup(policySetDefinitionName: string, parameters: Models.PolicySetDefinition, managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicySetDefinition>, callback?: msRest.ServiceCallback<Models.PolicySetDefinition>): Promise<Models.PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        parameters,
        managementGroupId,
        options
      },
      createOrUpdateAtManagementGroupOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  }

  /**
   * This operation deletes the policy set definition in the given management group with the given
   * name.
   * @summary Deletes a policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  deleteAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        managementGroupId,
        options
      },
      deleteAtManagementGroupOperationSpec,
      callback);
  }

  /**
   * This operation retrieves the policy set definition in the given management group with the given
   * name.
   * @summary Retrieves a policy set definition.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsGetAtManagementGroupResponse>
   */
  getAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase): Promise<Models.PolicySetDefinitionsGetAtManagementGroupResponse>;
  /**
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  getAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  /**
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PolicySetDefinition>): void;
  getAtManagementGroup(policySetDefinitionName: string, managementGroupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicySetDefinition>, callback?: msRest.ServiceCallback<Models.PolicySetDefinition>): Promise<Models.PolicySetDefinitionsGetAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        policySetDefinitionName,
        managementGroupId,
        options
      },
      getAtManagementGroupOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsGetAtManagementGroupResponse>;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in a given management group
   * that match the optional given $filter. Valid values for $filter are: 'atExactScope()',
   * 'policyType -eq {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered
   * list includes all policy set definitions associated with the management group, including those
   * that apply directly or from management groups that contain the given management group. If
   * $filter=atExactScope() is provided, the returned list only includes all policy set definitions
   * that at the given management group. If $filter='policyType -eq {value}' is provided, the
   * returned list only includes all policy set definitions whose type match the {value}. Possible
   * policyType values are NotSpecified, BuiltIn and Custom. If $filter='category -eq {value}' is
   * provided, the returned list only includes all policy set definitions whose category match the
   * {value}.
   * @summary Retrieves all policy set definitions in management group.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsListByManagementGroupResponse>
   */
  listByManagementGroup(managementGroupId: string, options?: Models.PolicySetDefinitionsListByManagementGroupOptionalParams): Promise<Models.PolicySetDefinitionsListByManagementGroupResponse>;
  /**
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  listByManagementGroup(managementGroupId: string, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  /**
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagementGroup(managementGroupId: string, options: Models.PolicySetDefinitionsListByManagementGroupOptionalParams, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  listByManagementGroup(managementGroupId: string, options?: Models.PolicySetDefinitionsListByManagementGroupOptionalParams | msRest.ServiceCallback<Models.PolicySetDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): Promise<Models.PolicySetDefinitionsListByManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        options
      },
      listByManagementGroupOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsListByManagementGroupResponse>;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in a given subscription that
   * match the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType
   * -eq {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered list
   * includes all policy set definitions associated with the subscription, including those that apply
   * directly or from management groups that contain the given subscription. If
   * $filter=atExactScope() is provided, the returned list only includes all policy set definitions
   * that at the given subscription. If $filter='policyType -eq {value}' is provided, the returned
   * list only includes all policy set definitions whose type match the {value}. Possible policyType
   * values are NotSpecified, BuiltIn and Custom. If $filter='category -eq {value}' is provided, the
   * returned list only includes all policy set definitions whose category match the {value}.
   * @summary Retrieves the policy set definitions for a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.PolicySetDefinitionsListNextOptionalParams): Promise<Models.PolicySetDefinitionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.PolicySetDefinitionsListNextOptionalParams, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  listNext(nextPageLink: string, options?: Models.PolicySetDefinitionsListNextOptionalParams | msRest.ServiceCallback<Models.PolicySetDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): Promise<Models.PolicySetDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsListNextResponse>;
  }

  /**
   * This operation retrieves a list of all the built-in policy set definitions that match the
   * optional given $filter. If $filter='category -eq {value}' is provided, the returned list only
   * includes all built-in policy set definitions whose category match the {value}.
   * @summary Retrieves built-in policy set definitions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsListBuiltInNextResponse>
   */
  listBuiltInNext(nextPageLink: string, options?: Models.PolicySetDefinitionsListBuiltInNextOptionalParams): Promise<Models.PolicySetDefinitionsListBuiltInNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBuiltInNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBuiltInNext(nextPageLink: string, options: Models.PolicySetDefinitionsListBuiltInNextOptionalParams, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  listBuiltInNext(nextPageLink: string, options?: Models.PolicySetDefinitionsListBuiltInNextOptionalParams | msRest.ServiceCallback<Models.PolicySetDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): Promise<Models.PolicySetDefinitionsListBuiltInNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBuiltInNextOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsListBuiltInNextResponse>;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in a given management group
   * that match the optional given $filter. Valid values for $filter are: 'atExactScope()',
   * 'policyType -eq {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered
   * list includes all policy set definitions associated with the management group, including those
   * that apply directly or from management groups that contain the given management group. If
   * $filter=atExactScope() is provided, the returned list only includes all policy set definitions
   * that at the given management group. If $filter='policyType -eq {value}' is provided, the
   * returned list only includes all policy set definitions whose type match the {value}. Possible
   * policyType values are NotSpecified, BuiltIn and Custom. If $filter='category -eq {value}' is
   * provided, the returned list only includes all policy set definitions whose category match the
   * {value}.
   * @summary Retrieves all policy set definitions in management group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetDefinitionsListByManagementGroupNextResponse>
   */
  listByManagementGroupNext(nextPageLink: string, options?: Models.PolicySetDefinitionsListByManagementGroupNextOptionalParams): Promise<Models.PolicySetDefinitionsListByManagementGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByManagementGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagementGroupNext(nextPageLink: string, options: Models.PolicySetDefinitionsListByManagementGroupNextOptionalParams, callback: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): void;
  listByManagementGroupNext(nextPageLink: string, options?: Models.PolicySetDefinitionsListByManagementGroupNextOptionalParams | msRest.ServiceCallback<Models.PolicySetDefinitionListResult>, callback?: msRest.ServiceCallback<Models.PolicySetDefinitionListResult>): Promise<Models.PolicySetDefinitionsListByManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByManagementGroupNextOperationSpec,
      callback) as Promise<Models.PolicySetDefinitionsListByManagementGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PolicySetDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    201: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName,
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
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getBuiltInOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBuiltInOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/policySetDefinitions",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateAtManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName,
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PolicySetDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    201: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteAtManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName,
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getAtManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  urlParameters: [
    Parameters.policySetDefinitionName,
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions",
  urlParameters: [
    Parameters.managementGroupId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBuiltInNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByManagementGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

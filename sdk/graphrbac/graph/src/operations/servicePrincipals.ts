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
import * as Mappers from "../models/servicePrincipalsMappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";

/** Class representing a ServicePrincipals. */
export class ServicePrincipals {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Create a ServicePrincipals.
   * @param {GraphRbacManagementClientContext} client Reference to the service client.
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a service principal in the directory.
   * @param parameters Parameters to create a service principal.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsCreateResponse>
   */
  create(parameters: Models.ServicePrincipalCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsCreateResponse>;
  /**
   * @param parameters Parameters to create a service principal.
   * @param callback The callback
   */
  create(parameters: Models.ServicePrincipalCreateParameters, callback: msRest.ServiceCallback<Models.ServicePrincipal>): void;
  /**
   * @param parameters Parameters to create a service principal.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(parameters: Models.ServicePrincipalCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicePrincipal>): void;
  create(parameters: Models.ServicePrincipalCreateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicePrincipal>, callback?: msRest.ServiceCallback<Models.ServicePrincipal>): Promise<Models.ServicePrincipalsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ServicePrincipalsCreateResponse>;
  }

  /**
   * Gets a list of service principals from the current tenant.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListResponse>
   */
  list(options?: Models.ServicePrincipalsListOptionalParams): Promise<Models.ServicePrincipalsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ServicePrincipalListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ServicePrincipalsListOptionalParams, callback: msRest.ServiceCallback<Models.ServicePrincipalListResult>): void;
  list(options?: Models.ServicePrincipalsListOptionalParams | msRest.ServiceCallback<Models.ServicePrincipalListResult>, callback?: msRest.ServiceCallback<Models.ServicePrincipalListResult>): Promise<Models.ServicePrincipalsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListResponse>;
  }

  /**
   * Updates a service principal in the directory.
   * @param objectId The object ID of the service principal to delete.
   * @param parameters Parameters to update a service principal.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(objectId: string, parameters: Models.ServicePrincipalUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param objectId The object ID of the service principal to delete.
   * @param parameters Parameters to update a service principal.
   * @param callback The callback
   */
  update(objectId: string, parameters: Models.ServicePrincipalUpdateParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param objectId The object ID of the service principal to delete.
   * @param parameters Parameters to update a service principal.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(objectId: string, parameters: Models.ServicePrincipalUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(objectId: string, parameters: Models.ServicePrincipalUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        parameters,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Deletes a service principal from the directory.
   * @param objectId The object ID of the service principal to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(objectId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param objectId The object ID of the service principal to delete.
   * @param callback The callback
   */
  deleteMethod(objectId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param objectId The object ID of the service principal to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets service principal information from the directory. Query by objectId or pass a filter to
   * query by appId
   * @param objectId The object ID of the service principal to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsGetResponse>
   */
  get(objectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsGetResponse>;
  /**
   * @param objectId The object ID of the service principal to get.
   * @param callback The callback
   */
  get(objectId: string, callback: msRest.ServiceCallback<Models.ServicePrincipal>): void;
  /**
   * @param objectId The object ID of the service principal to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicePrincipal>): void;
  get(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicePrincipal>, callback?: msRest.ServiceCallback<Models.ServicePrincipal>): Promise<Models.ServicePrincipalsGetResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServicePrincipalsGetResponse>;
  }

  /**
   * @summary Principals (users, groups, and service principals) that are assigned to this service
   * principal.
   * @param objectId The object ID of the service principal for which to get owners.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListAppRoleAssignedToResponse>
   */
  listAppRoleAssignedTo(objectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListAppRoleAssignedToResponse>;
  /**
   * @param objectId The object ID of the service principal for which to get owners.
   * @param callback The callback
   */
  listAppRoleAssignedTo(objectId: string, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  /**
   * @param objectId The object ID of the service principal for which to get owners.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAppRoleAssignedTo(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  listAppRoleAssignedTo(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppRoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): Promise<Models.ServicePrincipalsListAppRoleAssignedToResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      listAppRoleAssignedToOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListAppRoleAssignedToResponse>;
  }

  /**
   * @summary Applications that the service principal is assigned to.
   * @param objectId The object ID of the service principal for which to get owners.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListAppRoleAssignmentsResponse>
   */
  listAppRoleAssignments(objectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListAppRoleAssignmentsResponse>;
  /**
   * @param objectId The object ID of the service principal for which to get owners.
   * @param callback The callback
   */
  listAppRoleAssignments(objectId: string, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  /**
   * @param objectId The object ID of the service principal for which to get owners.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAppRoleAssignments(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  listAppRoleAssignments(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppRoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): Promise<Models.ServicePrincipalsListAppRoleAssignmentsResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      listAppRoleAssignmentsOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListAppRoleAssignmentsResponse>;
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @summary Directory objects that are owners of this service principal.
   * @param objectId The object ID of the service principal for which to get owners.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListOwnersResponse>
   */
  listOwners(objectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListOwnersResponse>;
  /**
   * @param objectId The object ID of the service principal for which to get owners.
   * @param callback The callback
   */
  listOwners(objectId: string, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  /**
   * @param objectId The object ID of the service principal for which to get owners.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOwners(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  listOwners(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DirectoryObjectListResult>, callback?: msRest.ServiceCallback<Models.DirectoryObjectListResult>): Promise<Models.ServicePrincipalsListOwnersResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      listOwnersOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListOwnersResponse>;
  }

  /**
   * Add an owner to a service principal.
   * @param objectId The object ID of the service principal to which to add the owner.
   * @param parameters The URL of the owner object, such as
   * https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addOwner(objectId: string, parameters: Models.AddOwnerParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param objectId The object ID of the service principal to which to add the owner.
   * @param parameters The URL of the owner object, such as
   * https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param callback The callback
   */
  addOwner(objectId: string, parameters: Models.AddOwnerParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param objectId The object ID of the service principal to which to add the owner.
   * @param parameters The URL of the owner object, such as
   * https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd.
   * @param options The optional parameters
   * @param callback The callback
   */
  addOwner(objectId: string, parameters: Models.AddOwnerParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  addOwner(objectId: string, parameters: Models.AddOwnerParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        parameters,
        options
      },
      addOwnerOperationSpec,
      callback);
  }

  /**
   * Remove a member from owners.
   * @param objectId The object ID of the service principal from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  removeOwner(objectId: string, ownerObjectId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param objectId The object ID of the service principal from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param callback The callback
   */
  removeOwner(objectId: string, ownerObjectId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param objectId The object ID of the service principal from which to remove the owner.
   * @param ownerObjectId Owner object id
   * @param options The optional parameters
   * @param callback The callback
   */
  removeOwner(objectId: string, ownerObjectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  removeOwner(objectId: string, ownerObjectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        ownerObjectId,
        options
      },
      removeOwnerOperationSpec,
      callback);
  }

  /**
   * Get the keyCredentials associated with the specified service principal.
   * @param objectId The object ID of the service principal for which to get keyCredentials.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListKeyCredentialsResponse>
   */
  listKeyCredentials(objectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListKeyCredentialsResponse>;
  /**
   * @param objectId The object ID of the service principal for which to get keyCredentials.
   * @param callback The callback
   */
  listKeyCredentials(objectId: string, callback: msRest.ServiceCallback<Models.KeyCredentialListResult>): void;
  /**
   * @param objectId The object ID of the service principal for which to get keyCredentials.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeyCredentials(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.KeyCredentialListResult>): void;
  listKeyCredentials(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.KeyCredentialListResult>, callback?: msRest.ServiceCallback<Models.KeyCredentialListResult>): Promise<Models.ServicePrincipalsListKeyCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      listKeyCredentialsOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListKeyCredentialsResponse>;
  }

  /**
   * Update the keyCredentials associated with a service principal.
   * @param objectId The object ID for which to get service principal information.
   * @param value A collection of KeyCredentials.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateKeyCredentials(objectId: string, value: Models.KeyCredential[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param objectId The object ID for which to get service principal information.
   * @param value A collection of KeyCredentials.
   * @param callback The callback
   */
  updateKeyCredentials(objectId: string, value: Models.KeyCredential[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param objectId The object ID for which to get service principal information.
   * @param value A collection of KeyCredentials.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateKeyCredentials(objectId: string, value: Models.KeyCredential[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateKeyCredentials(objectId: string, value: Models.KeyCredential[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        value,
        options
      },
      updateKeyCredentialsOperationSpec,
      callback);
  }

  /**
   * Gets the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListPasswordCredentialsResponse>
   */
  listPasswordCredentials(objectId: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListPasswordCredentialsResponse>;
  /**
   * @param objectId The object ID of the service principal.
   * @param callback The callback
   */
  listPasswordCredentials(objectId: string, callback: msRest.ServiceCallback<Models.PasswordCredentialListResult>): void;
  /**
   * @param objectId The object ID of the service principal.
   * @param options The optional parameters
   * @param callback The callback
   */
  listPasswordCredentials(objectId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PasswordCredentialListResult>): void;
  listPasswordCredentials(objectId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PasswordCredentialListResult>, callback?: msRest.ServiceCallback<Models.PasswordCredentialListResult>): Promise<Models.ServicePrincipalsListPasswordCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        options
      },
      listPasswordCredentialsOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListPasswordCredentialsResponse>;
  }

  /**
   * Updates the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param value A collection of PasswordCredentials.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updatePasswordCredentials(objectId: string, value: Models.PasswordCredential[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param objectId The object ID of the service principal.
   * @param value A collection of PasswordCredentials.
   * @param callback The callback
   */
  updatePasswordCredentials(objectId: string, value: Models.PasswordCredential[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param objectId The object ID of the service principal.
   * @param value A collection of PasswordCredentials.
   * @param options The optional parameters
   * @param callback The callback
   */
  updatePasswordCredentials(objectId: string, value: Models.PasswordCredential[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updatePasswordCredentials(objectId: string, value: Models.PasswordCredential[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        objectId,
        value,
        options
      },
      updatePasswordCredentialsOperationSpec,
      callback);
  }

  /**
   * Gets a list of service principals from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListNextResponse>
   */
  listNext(nextLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListNextResponse>;
  /**
   * @param nextLink Next link for the list operation.
   * @param callback The callback
   */
  listNext(nextLink: string, callback: msRest.ServiceCallback<Models.ServicePrincipalListResult>): void;
  /**
   * @param nextLink Next link for the list operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicePrincipalListResult>): void;
  listNext(nextLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicePrincipalListResult>, callback?: msRest.ServiceCallback<Models.ServicePrincipalListResult>): Promise<Models.ServicePrincipalsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListNextResponse>;
  }

  /**
   * @summary Principals (users, groups, and service principals) that are assigned to this service
   * principal.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListAppRoleAssignedToNextResponse>
   */
  listAppRoleAssignedToNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListAppRoleAssignedToNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAppRoleAssignedToNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAppRoleAssignedToNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  listAppRoleAssignedToNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppRoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): Promise<Models.ServicePrincipalsListAppRoleAssignedToNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAppRoleAssignedToNextOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListAppRoleAssignedToNextResponse>;
  }

  /**
   * @summary Applications that the service principal is assigned to.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListAppRoleAssignmentsNextResponse>
   */
  listAppRoleAssignmentsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListAppRoleAssignmentsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAppRoleAssignmentsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAppRoleAssignmentsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): void;
  listAppRoleAssignmentsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppRoleAssignmentListResult>, callback?: msRest.ServiceCallback<Models.AppRoleAssignmentListResult>): Promise<Models.ServicePrincipalsListAppRoleAssignmentsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAppRoleAssignmentsNextOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListAppRoleAssignmentsNextResponse>;
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @summary Directory objects that are owners of this service principal.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicePrincipalsListOwnersNextResponse>
   */
  listOwnersNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicePrincipalsListOwnersNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOwnersNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOwnersNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  listOwnersNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DirectoryObjectListResult>, callback?: msRest.ServiceCallback<Models.DirectoryObjectListResult>): Promise<Models.ServicePrincipalsListOwnersNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOwnersNextOperationSpec,
      callback) as Promise<Models.ServicePrincipalsListOwnersNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/servicePrincipals",
  urlParameters: [
    Parameters.tenantID
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
      ...Mappers.ServicePrincipalCreateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.ServicePrincipal
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/servicePrincipals/{objectId}",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
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
      ...Mappers.ServicePrincipalUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{tenantID}/servicePrincipals/{objectId}",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals/{objectId}",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipal
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listAppRoleAssignedToOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals/{objectId}/appRoleAssignedTo",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listAppRoleAssignmentsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals/{objectId}/appRoleAssignments",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOwnersOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals/{objectId}/owners",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const addOwnerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/servicePrincipals/{objectId}/$links/owners",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
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
      ...Mappers.AddOwnerParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const removeOwnerOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{tenantID}/servicePrincipals/{objectId}/$links/owners/{ownerObjectId}",
  urlParameters: [
    Parameters.objectId,
    Parameters.ownerObjectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listKeyCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals/{objectId}/keyCredentials",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.KeyCredentialListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const updateKeyCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/servicePrincipals/{objectId}/keyCredentials",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.KeyCredentialsUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listPasswordCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/servicePrincipals/{objectId}/passwordCredentials",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PasswordCredentialListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const updatePasswordCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{tenantID}/servicePrincipals/{objectId}/passwordCredentials",
  urlParameters: [
    Parameters.objectId,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.PasswordCredentialsUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/{nextLink}",
  urlParameters: [
    Parameters.nextLink,
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listAppRoleAssignedToNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://graph.windows.net",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listAppRoleAssignmentsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://graph.windows.net",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOwnersNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://graph.windows.net",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

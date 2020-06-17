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
import * as Models from "../models";
import * as Mappers from "../models/invitationsMappers";
import * as Parameters from "../models/parameters";
import { DataShareManagementClientContext } from "../dataShareManagementClientContext";

/** Class representing a Invitations. */
export class Invitations {
  private readonly client: DataShareManagementClientContext;

  /**
   * Create a Invitations.
   * @param {DataShareManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataShareManagementClientContext) {
    this.client = client;
  }

  /**
   * Get an invitation in a share
   * @summary Get Invitation in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param invitationName The name of the invitation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvitationsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvitationsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param invitationName The name of the invitation.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, callback: msRest.ServiceCallback<Models.Invitation>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param invitationName The name of the invitation.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invitation>): void;
  get(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invitation>, callback?: msRest.ServiceCallback<Models.Invitation>): Promise<Models.InvitationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        invitationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InvitationsGetResponse>;
  }

  /**
   * Create an invitation
   * @summary Sends a new invitation to a recipient to access a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to send the invitation for.
   * @param invitationName The name of the invitation.
   * @param invitation Invitation details.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvitationsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, invitation: Models.Invitation, options?: msRest.RequestOptionsBase): Promise<Models.InvitationsCreateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to send the invitation for.
   * @param invitationName The name of the invitation.
   * @param invitation Invitation details.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, invitation: Models.Invitation, callback: msRest.ServiceCallback<Models.Invitation>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share to send the invitation for.
   * @param invitationName The name of the invitation.
   * @param invitation Invitation details.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, invitation: Models.Invitation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Invitation>): void;
  create(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, invitation: Models.Invitation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Invitation>, callback?: msRest.ServiceCallback<Models.Invitation>): Promise<Models.InvitationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        invitationName,
        invitation,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.InvitationsCreateResponse>;
  }

  /**
   * Delete an invitation in a share
   * @summary Delete Invitation in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param invitationName The name of the invitation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param invitationName The name of the invitation.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param invitationName The name of the invitation.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, shareName: string, invitationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        invitationName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List invitations in a share
   * @summary List all Invitations in a share.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvitationsListByShareResponse>
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.InvitationsListByShareOptionalParams): Promise<Models.InvitationsListByShareResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, callback: msRest.ServiceCallback<Models.InvitationList>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the share account.
   * @param shareName The name of the share.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options: Models.InvitationsListByShareOptionalParams, callback: msRest.ServiceCallback<Models.InvitationList>): void;
  listByShare(resourceGroupName: string, accountName: string, shareName: string, options?: Models.InvitationsListByShareOptionalParams | msRest.ServiceCallback<Models.InvitationList>, callback?: msRest.ServiceCallback<Models.InvitationList>): Promise<Models.InvitationsListByShareResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        shareName,
        options
      },
      listByShareOperationSpec,
      callback) as Promise<Models.InvitationsListByShareResponse>;
  }

  /**
   * List invitations in a share
   * @summary List all Invitations in a share.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvitationsListByShareNextResponse>
   */
  listByShareNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InvitationsListByShareNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InvitationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByShareNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InvitationList>): void;
  listByShareNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InvitationList>, callback?: msRest.ServiceCallback<Models.InvitationList>): Promise<Models.InvitationsListByShareNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByShareNextOperationSpec,
      callback) as Promise<Models.InvitationsListByShareNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.invitationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Invitation
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.invitationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "invitation",
    mapper: {
      ...Mappers.Invitation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Invitation
    },
    201: {
      bodyMapper: Mappers.Invitation
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName,
    Parameters.invitationName
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
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.shareName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvitationList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

const listByShareNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.InvitationList
    },
    default: {
      bodyMapper: Mappers.DataShareError
    }
  },
  serializer
};

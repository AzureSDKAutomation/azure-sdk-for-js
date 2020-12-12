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
import * as Mappers from "../models/signedInUserMappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";

/** Class representing a SignedInUser. */
export class SignedInUser {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Create a SignedInUser.
   * @param {GraphRbacManagementClientContext} client Reference to the service client.
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the details for the currently logged-in user.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignedInUserGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.SignedInUserGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.User>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.User>, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.SignedInUserGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SignedInUserGetResponse>;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignedInUserListOwnedObjectsResponse>
   */
  listOwnedObjects(options?: msRest.RequestOptionsBase): Promise<Models.SignedInUserListOwnedObjectsResponse>;
  /**
   * @param callback The callback
   */
  listOwnedObjects(callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOwnedObjects(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  listOwnedObjects(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DirectoryObjectListResult>, callback?: msRest.ServiceCallback<Models.DirectoryObjectListResult>): Promise<Models.SignedInUserListOwnedObjectsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOwnedObjectsOperationSpec,
      callback) as Promise<Models.SignedInUserListOwnedObjectsResponse>;
  }

  /**
   * Get the list of directory objects that are owned by the user.
   * @param nextLink Next link for the list operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignedInUserListOwnedObjectsNextResponse>
   */
  listOwnedObjectsNext(nextLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SignedInUserListOwnedObjectsNextResponse>;
  /**
   * @param nextLink Next link for the list operation.
   * @param callback The callback
   */
  listOwnedObjectsNext(nextLink: string, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  /**
   * @param nextLink Next link for the list operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOwnedObjectsNext(nextLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DirectoryObjectListResult>): void;
  listOwnedObjectsNext(nextLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DirectoryObjectListResult>, callback?: msRest.ServiceCallback<Models.DirectoryObjectListResult>): Promise<Models.SignedInUserListOwnedObjectsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextLink,
        options
      },
      listOwnedObjectsNextOperationSpec,
      callback) as Promise<Models.SignedInUserListOwnedObjectsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/me",
  urlParameters: [
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
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

const listOwnedObjectsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/me/ownedObjects",
  urlParameters: [
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

const listOwnedObjectsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.DirectoryObjectListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  serializer
};

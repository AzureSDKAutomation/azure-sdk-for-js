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
import * as Mappers from "../models/meshNetworkMappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricClientContext } from "../serviceFabricClientContext";

/** Class representing a MeshNetwork. */
export class MeshNetwork {
  private readonly client: ServiceFabricClientContext;

  /**
   * Create a MeshNetwork.
   * @param {ServiceFabricClientContext} client Reference to the service client.
   */
  constructor(client: ServiceFabricClientContext) {
    this.client = client;
  }

  /**
   * Creates a Network resource with the specified name, description and properties. If Network
   * resource with the same name exists, then it is updated with the specified description and
   * properties. Network resource provides connectivity between application services.
   * @summary Creates or updates a Network resource.
   * @param networkResourceName The identity of the network.
   * @param networkResourceDescription Description for creating a Network resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.MeshNetworkCreateOrUpdateResponse>
   */
  createOrUpdate(networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, options?: msRest.RequestOptionsBase): Promise<Models.MeshNetworkCreateOrUpdateResponse>;
  /**
   * @param networkResourceName The identity of the network.
   * @param networkResourceDescription Description for creating a Network resource.
   * @param callback The callback
   */
  createOrUpdate(networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  /**
   * @param networkResourceName The identity of the network.
   * @param networkResourceDescription Description for creating a Network resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  createOrUpdate(networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescription>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescription>): Promise<Models.MeshNetworkCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        networkResourceName,
        networkResourceDescription,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.MeshNetworkCreateOrUpdateResponse>;
  }

  /**
   * Gets the information about the Network resource with the given name. The information include the
   * description and other properties of the Network.
   * @summary Gets the Network resource with the given name.
   * @param networkResourceName The identity of the network.
   * @param [options] The optional parameters
   * @returns Promise<Models.MeshNetworkGetResponse>
   */
  get(networkResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.MeshNetworkGetResponse>;
  /**
   * @param networkResourceName The identity of the network.
   * @param callback The callback
   */
  get(networkResourceName: string, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  /**
   * @param networkResourceName The identity of the network.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(networkResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  get(networkResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescription>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescription>): Promise<Models.MeshNetworkGetResponse> {
    return this.client.sendOperationRequest(
      {
        networkResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MeshNetworkGetResponse>;
  }

  /**
   * Deletes the Network resource identified by the name.
   * @summary Deletes the Network resource.
   * @param networkResourceName The identity of the network.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(networkResourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param networkResourceName The identity of the network.
   * @param callback The callback
   */
  deleteMethod(networkResourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param networkResourceName The identity of the network.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(networkResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(networkResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        networkResourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the information about all network resources in a given resource group. The information
   * include the description and other properties of the Network.
   * @summary Lists all the network resources.
   * @param [options] The optional parameters
   * @returns Promise<Models.MeshNetworkListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.MeshNetworkListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PagedNetworkResourceDescriptionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PagedNetworkResourceDescriptionList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PagedNetworkResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.PagedNetworkResourceDescriptionList>): Promise<Models.MeshNetworkListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MeshNetworkListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Resources/Networks/{networkResourceName}",
  urlParameters: [
    Parameters.networkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  requestBody: {
    parameterPath: "networkResourceDescription",
    mapper: {
      ...Mappers.NetworkResourceDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescription
    },
    201: {
      bodyMapper: Mappers.NetworkResourceDescription
    },
    202: {},
    default: {
      bodyMapper: Mappers.FabricError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Resources/Networks/{networkResourceName}",
  urlParameters: [
    Parameters.networkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescription
    },
    default: {
      bodyMapper: Mappers.FabricError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Resources/Networks/{networkResourceName}",
  urlParameters: [
    Parameters.networkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.FabricError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Resources/Networks",
  queryParameters: [
    Parameters.apiVersion9
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedNetworkResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.FabricError
    }
  },
  serializer
};

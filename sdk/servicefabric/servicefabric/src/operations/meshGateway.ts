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
import * as Mappers from "../models/meshGatewayMappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricClientContext } from "../serviceFabricClientContext";

/** Class representing a MeshGateway. */
export class MeshGateway {
  private readonly client: ServiceFabricClientContext;

  /**
   * Create a MeshGateway.
   * @param {ServiceFabricClientContext} client Reference to the service client.
   */
  constructor(client: ServiceFabricClientContext) {
    this.client = client;
  }

  /**
   * Creates a Gateway resource with the specified name, description and properties. If Gateway
   * resource with the same name exists, then it is updated with the specified description and
   * properties. Use Gateway resource to provide public connectivity to application services.
   * @summary Creates or updates a Gateway resource.
   * @param gatewayResourceName The identity of the gateway.
   * @param gatewayResourceDescription Description for creating a Gateway resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.MeshGatewayCreateOrUpdateResponse>
   */
  createOrUpdate(gatewayResourceName: string, gatewayResourceDescription: Models.GatewayResourceDescription, options?: msRest.RequestOptionsBase): Promise<Models.MeshGatewayCreateOrUpdateResponse>;
  /**
   * @param gatewayResourceName The identity of the gateway.
   * @param gatewayResourceDescription Description for creating a Gateway resource.
   * @param callback The callback
   */
  createOrUpdate(gatewayResourceName: string, gatewayResourceDescription: Models.GatewayResourceDescription, callback: msRest.ServiceCallback<Models.GatewayResourceDescription>): void;
  /**
   * @param gatewayResourceName The identity of the gateway.
   * @param gatewayResourceDescription Description for creating a Gateway resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(gatewayResourceName: string, gatewayResourceDescription: Models.GatewayResourceDescription, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayResourceDescription>): void;
  createOrUpdate(gatewayResourceName: string, gatewayResourceDescription: Models.GatewayResourceDescription, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GatewayResourceDescription>, callback?: msRest.ServiceCallback<Models.GatewayResourceDescription>): Promise<Models.MeshGatewayCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        gatewayResourceName,
        gatewayResourceDescription,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.MeshGatewayCreateOrUpdateResponse>;
  }

  /**
   * Gets the information about the Gateway resource with the given name. The information include the
   * description and other properties of the Gateway.
   * @summary Gets the Gateway resource with the given name.
   * @param gatewayResourceName The identity of the gateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.MeshGatewayGetResponse>
   */
  get(gatewayResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.MeshGatewayGetResponse>;
  /**
   * @param gatewayResourceName The identity of the gateway.
   * @param callback The callback
   */
  get(gatewayResourceName: string, callback: msRest.ServiceCallback<Models.GatewayResourceDescription>): void;
  /**
   * @param gatewayResourceName The identity of the gateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(gatewayResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayResourceDescription>): void;
  get(gatewayResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GatewayResourceDescription>, callback?: msRest.ServiceCallback<Models.GatewayResourceDescription>): Promise<Models.MeshGatewayGetResponse> {
    return this.client.sendOperationRequest(
      {
        gatewayResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MeshGatewayGetResponse>;
  }

  /**
   * Deletes the Gateway resource identified by the name.
   * @summary Deletes the Gateway resource.
   * @param gatewayResourceName The identity of the gateway.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(gatewayResourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param gatewayResourceName The identity of the gateway.
   * @param callback The callback
   */
  deleteMethod(gatewayResourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param gatewayResourceName The identity of the gateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(gatewayResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(gatewayResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        gatewayResourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the information about all gateway resources in a given resource group. The information
   * include the description and other properties of the Gateway.
   * @summary Lists all the gateway resources.
   * @param [options] The optional parameters
   * @returns Promise<Models.MeshGatewayListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.MeshGatewayListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PagedGatewayResourceDescriptionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PagedGatewayResourceDescriptionList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PagedGatewayResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.PagedGatewayResourceDescriptionList>): Promise<Models.MeshGatewayListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MeshGatewayListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Resources/Gateways/{gatewayResourceName}",
  urlParameters: [
    Parameters.gatewayResourceName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  requestBody: {
    parameterPath: "gatewayResourceDescription",
    mapper: {
      ...Mappers.GatewayResourceDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GatewayResourceDescription
    },
    201: {
      bodyMapper: Mappers.GatewayResourceDescription
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
  path: "Resources/Gateways/{gatewayResourceName}",
  urlParameters: [
    Parameters.gatewayResourceName
  ],
  queryParameters: [
    Parameters.apiVersion9
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GatewayResourceDescription
    },
    default: {
      bodyMapper: Mappers.FabricError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Resources/Gateways/{gatewayResourceName}",
  urlParameters: [
    Parameters.gatewayResourceName
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
  path: "Resources/Gateways",
  queryParameters: [
    Parameters.apiVersion9
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedGatewayResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.FabricError
    }
  },
  serializer
};

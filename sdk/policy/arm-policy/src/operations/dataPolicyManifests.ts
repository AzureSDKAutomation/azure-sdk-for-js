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
import * as Mappers from "../models/dataPolicyManifestsMappers";
import * as Parameters from "../models/parameters";
import { PolicyClientContext } from "../policyClientContext";

/** Class representing a DataPolicyManifests. */
export class DataPolicyManifests {
  private readonly client: PolicyClientContext;

  /**
   * Create a DataPolicyManifests.
   * @param {PolicyClientContext} client Reference to the service client.
   */
  constructor(client: PolicyClientContext) {
    this.client = client;
  }

  /**
   * This operation retrieves the data policy manifest with the given policy mode.
   * @summary Retrieves a data policy manifest.
   * @param policyMode The policy mode of the data policy manifest to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataPolicyManifestsGetByPolicyModeResponse>
   */
  getByPolicyMode(policyMode: string, options?: msRest.RequestOptionsBase): Promise<Models.DataPolicyManifestsGetByPolicyModeResponse>;
  /**
   * @param policyMode The policy mode of the data policy manifest to get.
   * @param callback The callback
   */
  getByPolicyMode(policyMode: string, callback: msRest.ServiceCallback<Models.DataPolicyManifest>): void;
  /**
   * @param policyMode The policy mode of the data policy manifest to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByPolicyMode(policyMode: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataPolicyManifest>): void;
  getByPolicyMode(policyMode: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataPolicyManifest>, callback?: msRest.ServiceCallback<Models.DataPolicyManifest>): Promise<Models.DataPolicyManifestsGetByPolicyModeResponse> {
    return this.client.sendOperationRequest(
      {
        policyMode,
        options
      },
      getByPolicyModeOperationSpec,
      callback) as Promise<Models.DataPolicyManifestsGetByPolicyModeResponse>;
  }

  /**
   * This operation retrieves a list of all the data policy manifests that match the optional given
   * $filter. Valid values for $filter are: "$filter=namespace eq '{0}'". If $filter is not provided,
   * the unfiltered list includes all data policy manifests for data resource types. If
   * $filter=namespace is provided, the returned list only includes all data policy manifests that
   * have a namespace matching the provided value.
   * @summary Retrieves data policy manifests
   * @param [options] The optional parameters
   * @returns Promise<Models.DataPolicyManifestsListResponse>
   */
  list(options?: Models.DataPolicyManifestsListOptionalParams): Promise<Models.DataPolicyManifestsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.DataPolicyManifestListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.DataPolicyManifestsListOptionalParams, callback: msRest.ServiceCallback<Models.DataPolicyManifestListResult>): void;
  list(options?: Models.DataPolicyManifestsListOptionalParams | msRest.ServiceCallback<Models.DataPolicyManifestListResult>, callback?: msRest.ServiceCallback<Models.DataPolicyManifestListResult>): Promise<Models.DataPolicyManifestsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DataPolicyManifestsListResponse>;
  }

  /**
   * This operation retrieves a list of all the data policy manifests that match the optional given
   * $filter. Valid values for $filter are: "$filter=namespace eq '{0}'". If $filter is not provided,
   * the unfiltered list includes all data policy manifests for data resource types. If
   * $filter=namespace is provided, the returned list only includes all data policy manifests that
   * have a namespace matching the provided value.
   * @summary Retrieves data policy manifests
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataPolicyManifestsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.DataPolicyManifestsListNextOptionalParams): Promise<Models.DataPolicyManifestsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DataPolicyManifestListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.DataPolicyManifestsListNextOptionalParams, callback: msRest.ServiceCallback<Models.DataPolicyManifestListResult>): void;
  listNext(nextPageLink: string, options?: Models.DataPolicyManifestsListNextOptionalParams | msRest.ServiceCallback<Models.DataPolicyManifestListResult>, callback?: msRest.ServiceCallback<Models.DataPolicyManifestListResult>): Promise<Models.DataPolicyManifestsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DataPolicyManifestsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByPolicyModeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/dataPolicyManifests/{policyMode}",
  urlParameters: [
    Parameters.policyMode
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataPolicyManifest
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Authorization/dataPolicyManifests",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataPolicyManifestListResult
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
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataPolicyManifestListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

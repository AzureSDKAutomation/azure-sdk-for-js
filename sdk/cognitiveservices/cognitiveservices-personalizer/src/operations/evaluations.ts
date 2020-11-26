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
import * as Mappers from "../models/evaluationsMappers";
import * as Parameters from "../models/parameters";
import { PersonalizerClientContext } from "../personalizerClientContext";

/** Class representing a Evaluations. */
export class Evaluations {
  private readonly client: PersonalizerClientContext;

  /**
   * Create a Evaluations.
   * @param {PersonalizerClientContext} client Reference to the service client.
   */
  constructor(client: PersonalizerClientContext) {
    this.client = client;
  }

  /**
   * Get the evaluation associated with the Id.
   * @summary Get Evaluation.
   * @param evaluationId Id of the evaluation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EvaluationsGetResponse>
   */
  get(evaluationId: string, options?: msRest.RequestOptionsBase): Promise<Models.EvaluationsGetResponse>;
  /**
   * @param evaluationId Id of the evaluation.
   * @param callback The callback
   */
  get(evaluationId: string, callback: msRest.ServiceCallback<Models.Evaluation>): void;
  /**
   * @param evaluationId Id of the evaluation.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(evaluationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Evaluation>): void;
  get(evaluationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Evaluation>, callback?: msRest.ServiceCallback<Models.Evaluation>): Promise<Models.EvaluationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        evaluationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EvaluationsGetResponse>;
  }

  /**
   * Delete the evaluation associated with the Id.
   * @summary Delete Evaluation.
   * @param evaluationId Id of the evaluation to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(evaluationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param evaluationId Id of the evaluation to delete.
   * @param callback The callback
   */
  deleteMethod(evaluationId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param evaluationId Id of the evaluation to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(evaluationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(evaluationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        evaluationId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List all the submitted evaluations.
   * @summary List Evaluations.
   * @param [options] The optional parameters
   * @returns Promise<Models.EvaluationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.EvaluationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.Evaluation[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Evaluation[]>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Evaluation[]>, callback?: msRest.ServiceCallback<Models.Evaluation[]>): Promise<Models.EvaluationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EvaluationsListResponse>;
  }

  /**
   * Submit a new evaluation job.
   * @summary Create Evaluation.
   * @param evaluation The evaluation job definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.EvaluationsCreateResponse>
   */
  create(evaluation: Models.EvaluationContract, options?: msRest.RequestOptionsBase): Promise<Models.EvaluationsCreateResponse>;
  /**
   * @param evaluation The evaluation job definition.
   * @param callback The callback
   */
  create(evaluation: Models.EvaluationContract, callback: msRest.ServiceCallback<Models.Evaluation>): void;
  /**
   * @param evaluation The evaluation job definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(evaluation: Models.EvaluationContract, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Evaluation>): void;
  create(evaluation: Models.EvaluationContract, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Evaluation>, callback?: msRest.ServiceCallback<Models.Evaluation>): Promise<Models.EvaluationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        evaluation,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.EvaluationsCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "evaluations/{evaluationId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.evaluationId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Evaluation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "evaluations/{evaluationId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.evaluationId
  ],
  responses: {
    204: {},
    default: {}
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "evaluations",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Evaluation"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "evaluations",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "evaluation",
    mapper: {
      ...Mappers.EvaluationContract,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Evaluation,
      headersMapper: Mappers.EvaluationsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.EvaluationsCreateHeaders
    }
  },
  serializer
};

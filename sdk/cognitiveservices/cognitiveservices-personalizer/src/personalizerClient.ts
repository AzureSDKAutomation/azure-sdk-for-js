/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { PersonalizerClientContext } from "./personalizerClientContext";

class PersonalizerClient extends PersonalizerClientContext {
  // Operation groups
  serviceConfiguration: operations.ServiceConfigurationOperations;
  policy: operations.Policy;
  evaluations: operations.Evaluations;
  events: operations.Events;
  log: operations.Log;
  model: operations.Model;

  /**
   * Initializes a new instance of the PersonalizerClient class.
   * @param endpoint Supported Cognitive Services endpoint.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions) {
    super(credentials, endpoint, options);
    this.serviceConfiguration = new operations.ServiceConfigurationOperations(this);
    this.policy = new operations.Policy(this);
    this.evaluations = new operations.Evaluations(this);
    this.events = new operations.Events(this);
    this.log = new operations.Log(this);
    this.model = new operations.Model(this);
  }

  /**
   * Submit a Personalizer rank request, to get which of the provided actions should be used in the
   * provided context.
   * @summary Post Rank.
   * @param rankRequest A Personalizer request.
   * @param [options] The optional parameters
   * @returns Promise<Models.RankResponse2>
   */
  rank(rankRequest: Models.RankRequest, options?: msRest.RequestOptionsBase): Promise<Models.RankResponse2>;
  /**
   * @param rankRequest A Personalizer request.
   * @param callback The callback
   */
  rank(rankRequest: Models.RankRequest, callback: msRest.ServiceCallback<Models.RankResponse>): void;
  /**
   * @param rankRequest A Personalizer request.
   * @param options The optional parameters
   * @param callback The callback
   */
  rank(rankRequest: Models.RankRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RankResponse>): void;
  rank(rankRequest: Models.RankRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RankResponse>, callback?: msRest.ServiceCallback<Models.RankResponse>): Promise<Models.RankResponse2> {
    return this.sendOperationRequest(
      {
        rankRequest,
        options
      },
      rankOperationSpec,
      callback) as Promise<Models.RankResponse2>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const rankOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "rank",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "rankRequest",
    mapper: {
      ...Mappers.RankRequest,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.RankResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

export {
  PersonalizerClient,
  PersonalizerClientContext,
  Models as PersonalizerModels,
  Mappers as PersonalizerMappers
};
export * from "./operations";

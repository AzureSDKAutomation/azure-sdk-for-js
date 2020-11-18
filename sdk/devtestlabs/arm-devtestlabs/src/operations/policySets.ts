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
import * as Mappers from "../models/policySetsMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a PolicySets. */
export class PolicySets {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a PolicySets.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * Evaluates lab policy.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the policy set.
   * @param evaluatePoliciesRequest Request body for evaluating a policy set.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicySetsEvaluatePoliciesResponse>
   */
  evaluatePolicies(resourceGroupName: string, labName: string, name: string, evaluatePoliciesRequest: Models.EvaluatePoliciesRequest, options?: msRest.RequestOptionsBase): Promise<Models.PolicySetsEvaluatePoliciesResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the policy set.
   * @param evaluatePoliciesRequest Request body for evaluating a policy set.
   * @param callback The callback
   */
  evaluatePolicies(resourceGroupName: string, labName: string, name: string, evaluatePoliciesRequest: Models.EvaluatePoliciesRequest, callback: msRest.ServiceCallback<Models.EvaluatePoliciesResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the policy set.
   * @param evaluatePoliciesRequest Request body for evaluating a policy set.
   * @param options The optional parameters
   * @param callback The callback
   */
  evaluatePolicies(resourceGroupName: string, labName: string, name: string, evaluatePoliciesRequest: Models.EvaluatePoliciesRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EvaluatePoliciesResponse>): void;
  evaluatePolicies(resourceGroupName: string, labName: string, name: string, evaluatePoliciesRequest: Models.EvaluatePoliciesRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EvaluatePoliciesResponse>, callback?: msRest.ServiceCallback<Models.EvaluatePoliciesResponse>): Promise<Models.PolicySetsEvaluatePoliciesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        name,
        evaluatePoliciesRequest,
        options
      },
      evaluatePoliciesOperationSpec,
      callback) as Promise<Models.PolicySetsEvaluatePoliciesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const evaluatePoliciesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{name}/evaluatePolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "evaluatePoliciesRequest",
    mapper: {
      ...Mappers.EvaluatePoliciesRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EvaluatePoliciesResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

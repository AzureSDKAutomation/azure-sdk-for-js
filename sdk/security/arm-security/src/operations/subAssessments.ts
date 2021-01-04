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
import * as Mappers from "../models/subAssessmentsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a SubAssessments. */
export class SubAssessments {
  private readonly client: SecurityCenterContext;

  /**
   * Create a SubAssessments.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get security sub-assessments on all your scanned resources inside a subscription scope
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param [options] The optional parameters
   * @returns Promise<Models.SubAssessmentsListAllResponse>
   */
  listAll(scope: string, options?: msRest.RequestOptionsBase): Promise<Models.SubAssessmentsListAllResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param callback The callback
   */
  listAll(scope: string, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(scope: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  listAll(scope: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySubAssessmentList>, callback?: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): Promise<Models.SubAssessmentsListAllResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.SubAssessmentsListAllResponse>;
  }

  /**
   * Get security sub-assessments on all your scanned resources inside a scope
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param [options] The optional parameters
   * @returns Promise<Models.SubAssessmentsListResponse>
   */
  list(scope: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.SubAssessmentsListResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param callback The callback
   */
  list(scope: string, assessmentName: string, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param options The optional parameters
   * @param callback The callback
   */
  list(scope: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  list(scope: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySubAssessmentList>, callback?: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): Promise<Models.SubAssessmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        assessmentName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SubAssessmentsListResponse>;
  }

  /**
   * Get a security sub-assessment on your scanned resource
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param subAssessmentName The Sub-Assessment Key - Unique key for the sub-assessment type
   * @param [options] The optional parameters
   * @returns Promise<Models.SubAssessmentsGetResponse>
   */
  get(scope: string, assessmentName: string, subAssessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.SubAssessmentsGetResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param subAssessmentName The Sub-Assessment Key - Unique key for the sub-assessment type
   * @param callback The callback
   */
  get(scope: string, assessmentName: string, subAssessmentName: string, callback: msRest.ServiceCallback<Models.SecuritySubAssessment>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param subAssessmentName The Sub-Assessment Key - Unique key for the sub-assessment type
   * @param options The optional parameters
   * @param callback The callback
   */
  get(scope: string, assessmentName: string, subAssessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySubAssessment>): void;
  get(scope: string, assessmentName: string, subAssessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySubAssessment>, callback?: msRest.ServiceCallback<Models.SecuritySubAssessment>): Promise<Models.SubAssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        assessmentName,
        subAssessmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SubAssessmentsGetResponse>;
  }

  /**
   * Get security sub-assessments on all your scanned resources inside a subscription scope
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubAssessmentsListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SubAssessmentsListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySubAssessmentList>, callback?: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): Promise<Models.SubAssessmentsListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.SubAssessmentsListAllNextResponse>;
  }

  /**
   * Get security sub-assessments on all your scanned resources inside a scope
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SubAssessmentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SubAssessmentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecuritySubAssessmentList>, callback?: msRest.ServiceCallback<Models.SecuritySubAssessmentList>): Promise<Models.SubAssessmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SubAssessmentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/subAssessments",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySubAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/assessments/{assessmentName}/subAssessments",
  urlParameters: [
    Parameters.scope,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySubAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/assessments/{assessmentName}/subAssessments/{subAssessmentName}",
  urlParameters: [
    Parameters.scope,
    Parameters.assessmentName,
    Parameters.subAssessmentName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySubAssessment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySubAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
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
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySubAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

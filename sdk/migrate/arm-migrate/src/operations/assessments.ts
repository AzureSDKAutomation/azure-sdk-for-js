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
import * as Mappers from "../models/assessmentsMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2Context } from "../azureMigrateV2Context";

/** Class representing a Assessments. */
export class Assessments {
  private readonly client: AzureMigrateV2Context;

  /**
   * Create a Assessments.
   * @param {AzureMigrateV2Context} client Reference to the service client.
   */
  constructor(client: AzureMigrateV2Context) {
    this.client = client;
  }

  /**
   * Get all assessments created for the specified group.
   *
   * Returns a json array of objects of type 'assessment' as specified in Models section.
   * @summary Get all assessments created for the specified group.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsListByGroupResponse>
   */
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsListByGroupResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param callback The callback
   */
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssessmentResultList>, callback?: msRest.ServiceCallback<Models.AssessmentResultList>): Promise<Models.AssessmentsListByGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        options
      },
      listByGroupOperationSpec,
      callback) as Promise<Models.AssessmentsListByGroupResponse>;
  }

  /**
   * Get all assessments created in the project.
   *
   * Returns a json array of objects of type 'assessment' as specified in Models section.
   * @summary Get all assessments created in the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsListByProjectResponse>
   */
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsListByProjectResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssessmentResultList>, callback?: msRest.ServiceCallback<Models.AssessmentResultList>): Promise<Models.AssessmentsListByProjectResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      listByProjectOperationSpec,
      callback) as Promise<Models.AssessmentsListByProjectResponse>;
  }

  /**
   * Get an existing assessment with the specified name. Returns a json object of type 'assessment'
   * as specified in Models section.
   * @summary Get an assessment.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsGetResponse>
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsGetResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<Models.Assessment>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Assessment>): void;
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Assessment>, callback?: msRest.ServiceCallback<Models.Assessment>): Promise<Models.AssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AssessmentsGetResponse>;
  }

  /**
   * Create a new assessment with the given name and the specified settings. Since name of an
   * assessment in a project is a unique identifier, if an assessment with the name provided already
   * exists, then the existing assessment is updated.
   *
   * Any PUT operation, resulting in either create or update on an assessment, will cause the
   * assessment to go in a "InProgress" state. This will be indicated by the field 'computationState'
   * on the Assessment object. During this time no other PUT operation will be allowed on that
   * assessment object, nor will a Delete operation. Once the computation for the assessment is
   * complete, the field 'computationState' will be updated to 'Ready', and then other PUT or DELETE
   * operations can happen on the assessment.
   *
   * When assessment is under computation, any PUT will lead to a 400 - Bad Request error.
   * @summary Create or Update assessment.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsCreateResponse>
   */
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: Models.AssessmentsCreateOptionalParams): Promise<Models.AssessmentsCreateResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<Models.Assessment>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: Models.AssessmentsCreateOptionalParams, callback: msRest.ServiceCallback<Models.Assessment>): void;
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: Models.AssessmentsCreateOptionalParams | msRest.ServiceCallback<Models.Assessment>, callback?: msRest.ServiceCallback<Models.Assessment>): Promise<Models.AssessmentsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AssessmentsCreateResponse>;
  }

  /**
   * Delete an assessment from the project. The machines remain in the assessment. Deleting a
   * non-existent assessment results in a no-operation.
   *
   * When an assessment is under computation, as indicated by the 'computationState' field, it cannot
   * be deleted. Any such attempt will return a 400 - Bad Request.
   * @summary Deletes an assessment from the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsDeleteResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.AssessmentsDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.AssessmentsDeleteResponse>;
  }

  /**
   * Get the URL for downloading the assessment in a report format.
   * @summary Get download URL for the assessment report.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsGetReportDownloadUrlResponse>
   */
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsGetReportDownloadUrlResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<Models.DownloadUrl>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DownloadUrl>): void;
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DownloadUrl>, callback?: msRest.ServiceCallback<Models.DownloadUrl>): Promise<Models.AssessmentsGetReportDownloadUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      getReportDownloadUrlOperationSpec,
      callback) as Promise<Models.AssessmentsGetReportDownloadUrlResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentResultList,
      headersMapper: Mappers.AssessmentsListByGroupHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.AssessmentsListByGroupHeaders
    }
  },
  serializer
};

const listByProjectOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentResultList,
      headersMapper: Mappers.AssessmentsListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.AssessmentsListByProjectHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Assessment,
      headersMapper: Mappers.AssessmentsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.AssessmentsGetHeaders
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "assessment"
    ],
    mapper: Mappers.Assessment
  },
  responses: {
    200: {
      bodyMapper: Mappers.Assessment,
      headersMapper: Mappers.AssessmentsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.Assessment,
      headersMapper: Mappers.AssessmentsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.AssessmentsCreateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.AssessmentsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.AssessmentsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.AssessmentsDeleteHeaders
    }
  },
  serializer
};

const getReportDownloadUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/downloadUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DownloadUrl,
      headersMapper: Mappers.AssessmentsGetReportDownloadUrlHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.AssessmentsGetReportDownloadUrlHeaders
    }
  },
  serializer
};

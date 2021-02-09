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
import * as Mappers from "../models/projectsMappers";
import * as Parameters from "../models/parameters";
import { DataMigrationServiceClientContext } from "../dataMigrationServiceClientContext";

/** Class representing a Projects. */
export class Projects {
  private readonly client: DataMigrationServiceClientContext;

  /**
   * Create a Projects.
   * @param {DataMigrationServiceClientContext} client Reference to the service client.
   */
  constructor(client: DataMigrationServiceClientContext) {
    this.client = client;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of projects owned by a service resource.
   * @summary Get projects in a service
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsListResponse>
   */
  list(groupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsListResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param callback The callback
   */
  list(groupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.ProjectList>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The optional parameters
   * @param callback The callback
   */
  list(groupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectList>): void;
  list(groupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectList>, callback?: msRest.ServiceCallback<Models.ProjectList>): Promise<Models.ProjectsListResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProjectsListResponse>;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The PUT
   * method creates a new project or updates an existing one.
   * @summary Create or update project
   * @param parameters Information about the project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsCreateOrUpdateResponse>
   */
  createOrUpdate(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsCreateOrUpdateResponse>;
  /**
   * @param parameters Information about the project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param callback The callback
   */
  createOrUpdate(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param parameters Information about the project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  createOrUpdate(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        groupName,
        serviceName,
        projectName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ProjectsCreateOrUpdateResponse>;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The GET
   * method retrieves information about a project.
   * @summary Get project information
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsGetResponse>
   */
  get(groupName: string, serviceName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsGetResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param callback The callback
   */
  get(groupName: string, serviceName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The optional parameters
   * @param callback The callback
   */
  get(groupName: string, serviceName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  get(groupName: string, serviceName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsGetResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProjectsGetResponse>;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The DELETE
   * method deletes a project.
   * @summary Delete project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, options?: Models.ProjectsDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param callback The callback
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, options: Models.ProjectsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(groupName: string, serviceName: string, projectName: string, options?: Models.ProjectsDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The PATCH
   * method updates an existing project.
   * @summary Update project
   * @param parameters Information about the project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsUpdateResponse>
   */
  update(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsUpdateResponse>;
  /**
   * @param parameters Information about the project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param callback The callback
   */
  update(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param parameters Information about the project
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The optional parameters
   * @param callback The callback
   */
  update(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  update(parameters: Models.Project, groupName: string, serviceName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        groupName,
        serviceName,
        projectName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ProjectsUpdateResponse>;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of projects owned by a service resource.
   * @summary Get projects in a service
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProjectList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectList>, callback?: msRest.ServiceCallback<Models.ProjectList>): Promise<Models.ProjectsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ProjectsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Project,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    201: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
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
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.deleteRunningTasks,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Project,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ApiError
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

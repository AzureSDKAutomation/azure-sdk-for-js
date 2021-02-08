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
import * as Mappers from "../models/emailTemplateMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a EmailTemplate. */
export class EmailTemplate {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a EmailTemplate.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all email templates
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.EmailTemplateListByServiceOptionalParams): Promise<Models.EmailTemplateListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.EmailTemplateCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.EmailTemplateListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.EmailTemplateCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.EmailTemplateListByServiceOptionalParams | msRest.ServiceCallback<Models.EmailTemplateCollection>, callback?: msRest.ServiceCallback<Models.EmailTemplateCollection>): Promise<Models.EmailTemplateListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.EmailTemplateListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the email template specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: msRest.RequestOptionsBase): Promise<Models.EmailTemplateGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.EmailTemplateGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.EmailTemplateGetEntityTagResponse>;
  }

  /**
   * Gets the details of the email template specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: msRest.RequestOptionsBase): Promise<Models.EmailTemplateGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, callback: msRest.ServiceCallback<Models.EmailTemplateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EmailTemplateContract>): void;
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EmailTemplateContract>, callback?: msRest.ServiceCallback<Models.EmailTemplateContract>): Promise<Models.EmailTemplateGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EmailTemplateGetResponse>;
  }

  /**
   * Updates an Email Template.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Email Template update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, options?: Models.EmailTemplateCreateOrUpdateOptionalParams): Promise<Models.EmailTemplateCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Email Template update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, callback: msRest.ServiceCallback<Models.EmailTemplateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Email Template update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, options: Models.EmailTemplateCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.EmailTemplateContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, options?: Models.EmailTemplateCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.EmailTemplateContract>, callback?: msRest.ServiceCallback<Models.EmailTemplateContract>): Promise<Models.EmailTemplateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.EmailTemplateCreateOrUpdateResponse>;
  }

  /**
   * Updates API Management email template
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateUpdateResponse>
   */
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, parameters: Models.EmailTemplateUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.EmailTemplateUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, parameters: Models.EmailTemplateUpdateParameters, callback: msRest.ServiceCallback<Models.EmailTemplateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, parameters: Models.EmailTemplateUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EmailTemplateContract>): void;
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, parameters: Models.EmailTemplateUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EmailTemplateContract>, callback?: msRest.ServiceCallback<Models.EmailTemplateContract>): Promise<Models.EmailTemplateUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        ifMatch,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.EmailTemplateUpdateResponse>;
  }

  /**
   * Reset the Email Template to default template provided by the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all email templates
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: Models.EmailTemplateListByServiceNextOptionalParams): Promise<Models.EmailTemplateListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EmailTemplateCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: Models.EmailTemplateListByServiceNextOptionalParams, callback: msRest.ServiceCallback<Models.EmailTemplateCollection>): void;
  listByServiceNext(nextPageLink: string, options?: Models.EmailTemplateListByServiceNextOptionalParams | msRest.ServiceCallback<Models.EmailTemplateCollection>, callback?: msRest.ServiceCallback<Models.EmailTemplateCollection>): Promise<Models.EmailTemplateListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.EmailTemplateListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.EmailTemplateGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.EmailTemplateGetEntityTagHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract,
      headersMapper: Mappers.EmailTemplateGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.EmailTemplateGetHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.EmailTemplateUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract
    },
    201: {
      bodyMapper: Mappers.EmailTemplateContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.EmailTemplateUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract,
      headersMapper: Mappers.EmailTemplateUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.EmailTemplateUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

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
import * as operations from "./operations";
import { ApiManagementClientContext } from "./apiManagementClientContext";


class ApiManagementClient extends ApiManagementClientContext {
  // Operation groups
  api: operations.Api;
  apiRevision: operations.ApiRevision;
  apiRelease: operations.ApiRelease;
  apiOperation: operations.ApiOperation;
  apiOperationPolicy: operations.ApiOperationPolicy;
  tag: operations.Tag;
  apiProduct: operations.ApiProduct;
  apiPolicy: operations.ApiPolicy;
  apiSchema: operations.ApiSchema;
  apiDiagnostic: operations.ApiDiagnostic;
  apiIssue: operations.ApiIssue;
  apiIssueComment: operations.ApiIssueComment;
  apiIssueAttachment: operations.ApiIssueAttachment;
  apiTagDescription: operations.ApiTagDescription;
  operation: operations.OperationOperations;
  apiVersionSet: operations.ApiVersionSet;
  authorizationServer: operations.AuthorizationServer;
  backend: operations.Backend;
  cache: operations.Cache;
  certificate: operations.Certificate;
  contentType: operations.ContentType;
  contentItem: operations.ContentItem;
  deletedServices: operations.DeletedServices;
  apiManagementOperations: operations.ApiManagementOperations;
  apiManagementServiceSkus: operations.ApiManagementServiceSkus;
  apiManagementService: operations.ApiManagementService;
  diagnostic: operations.Diagnostic;
  emailTemplate: operations.EmailTemplate;
  gateway: operations.Gateway;
  gatewayHostnameConfiguration: operations.GatewayHostnameConfiguration;
  gatewayApi: operations.GatewayApi;
  group: operations.Group;
  groupUser: operations.GroupUser;
  identityProvider: operations.IdentityProvider;
  issue: operations.Issue;
  logger: operations.Logger;
  namedValue: operations.NamedValue;
  networkStatus: operations.NetworkStatus;
  notification: operations.Notification;
  notificationRecipientUser: operations.NotificationRecipientUser;
  notificationRecipientEmail: operations.NotificationRecipientEmail;
  openIdConnectProvider: operations.OpenIdConnectProvider;
  policy: operations.Policy;
  policyDescription: operations.PolicyDescription;
  portalRevision: operations.PortalRevision;
  portalSettings: operations.PortalSettings;
  signInSettings: operations.SignInSettings;
  signUpSettings: operations.SignUpSettings;
  delegationSettings: operations.DelegationSettings;
  product: operations.Product;
  productApi: operations.ProductApi;
  productGroup: operations.ProductGroup;
  productSubscriptions: operations.ProductSubscriptions;
  productPolicy: operations.ProductPolicy;
  quotaByCounterKeys: operations.QuotaByCounterKeys;
  quotaByPeriodKeys: operations.QuotaByPeriodKeys;
  region: operations.Region;
  reports: operations.Reports;
  tenantSettings: operations.TenantSettings;
  subscription: operations.Subscription;
  tagResource: operations.TagResource;
  tenantAccess: operations.TenantAccess;
  tenantAccessGit: operations.TenantAccessGit;
  tenantConfiguration: operations.TenantConfiguration;
  user: operations.User;
  userGroup: operations.UserGroup;
  userSubscription: operations.UserSubscription;
  userIdentities: operations.UserIdentities;
  userConfirmationPassword: operations.UserConfirmationPassword;
  apiExport: operations.ApiExport;

  /**
   * Initializes a new instance of the ApiManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ApiManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.api = new operations.Api(this);
    this.apiRevision = new operations.ApiRevision(this);
    this.apiRelease = new operations.ApiRelease(this);
    this.apiOperation = new operations.ApiOperation(this);
    this.apiOperationPolicy = new operations.ApiOperationPolicy(this);
    this.tag = new operations.Tag(this);
    this.apiProduct = new operations.ApiProduct(this);
    this.apiPolicy = new operations.ApiPolicy(this);
    this.apiSchema = new operations.ApiSchema(this);
    this.apiDiagnostic = new operations.ApiDiagnostic(this);
    this.apiIssue = new operations.ApiIssue(this);
    this.apiIssueComment = new operations.ApiIssueComment(this);
    this.apiIssueAttachment = new operations.ApiIssueAttachment(this);
    this.apiTagDescription = new operations.ApiTagDescription(this);
    this.operation = new operations.OperationOperations(this);
    this.apiVersionSet = new operations.ApiVersionSet(this);
    this.authorizationServer = new operations.AuthorizationServer(this);
    this.backend = new operations.Backend(this);
    this.cache = new operations.Cache(this);
    this.certificate = new operations.Certificate(this);
    this.contentType = new operations.ContentType(this);
    this.contentItem = new operations.ContentItem(this);
    this.deletedServices = new operations.DeletedServices(this);
    this.apiManagementOperations = new operations.ApiManagementOperations(this);
    this.apiManagementServiceSkus = new operations.ApiManagementServiceSkus(this);
    this.apiManagementService = new operations.ApiManagementService(this);
    this.diagnostic = new operations.Diagnostic(this);
    this.emailTemplate = new operations.EmailTemplate(this);
    this.gateway = new operations.Gateway(this);
    this.gatewayHostnameConfiguration = new operations.GatewayHostnameConfiguration(this);
    this.gatewayApi = new operations.GatewayApi(this);
    this.group = new operations.Group(this);
    this.groupUser = new operations.GroupUser(this);
    this.identityProvider = new operations.IdentityProvider(this);
    this.issue = new operations.Issue(this);
    this.logger = new operations.Logger(this);
    this.namedValue = new operations.NamedValue(this);
    this.networkStatus = new operations.NetworkStatus(this);
    this.notification = new operations.Notification(this);
    this.notificationRecipientUser = new operations.NotificationRecipientUser(this);
    this.notificationRecipientEmail = new operations.NotificationRecipientEmail(this);
    this.openIdConnectProvider = new operations.OpenIdConnectProvider(this);
    this.policy = new operations.Policy(this);
    this.policyDescription = new operations.PolicyDescription(this);
    this.portalRevision = new operations.PortalRevision(this);
    this.portalSettings = new operations.PortalSettings(this);
    this.signInSettings = new operations.SignInSettings(this);
    this.signUpSettings = new operations.SignUpSettings(this);
    this.delegationSettings = new operations.DelegationSettings(this);
    this.product = new operations.Product(this);
    this.productApi = new operations.ProductApi(this);
    this.productGroup = new operations.ProductGroup(this);
    this.productSubscriptions = new operations.ProductSubscriptions(this);
    this.productPolicy = new operations.ProductPolicy(this);
    this.quotaByCounterKeys = new operations.QuotaByCounterKeys(this);
    this.quotaByPeriodKeys = new operations.QuotaByPeriodKeys(this);
    this.region = new operations.Region(this);
    this.reports = new operations.Reports(this);
    this.tenantSettings = new operations.TenantSettings(this);
    this.subscription = new operations.Subscription(this);
    this.tagResource = new operations.TagResource(this);
    this.tenantAccess = new operations.TenantAccess(this);
    this.tenantAccessGit = new operations.TenantAccessGit(this);
    this.tenantConfiguration = new operations.TenantConfiguration(this);
    this.user = new operations.User(this);
    this.userGroup = new operations.UserGroup(this);
    this.userSubscription = new operations.UserSubscription(this);
    this.userIdentities = new operations.UserIdentities(this);
    this.userConfirmationPassword = new operations.UserConfirmationPassword(this);
    this.apiExport = new operations.ApiExport(this);
  }
}

// Operation Specifications

export {
  ApiManagementClient,
  ApiManagementClientContext,
  Models as ApiManagementModels,
  Mappers as ApiManagementMappers
};
export * from "./operations";

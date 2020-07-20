/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Location information.
 */
export interface Location {
  /**
   * The fully qualified ID of the location. For example,
   * /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The subscription ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly subscriptionId?: string;
  /**
   * The location name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The display name of the location.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly displayName?: string;
  /**
   * The latitude of the location.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly latitude?: string;
  /**
   * The longitude of the location.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly longitude?: string;
}

/**
 * Subscription policies.
 */
export interface SubscriptionPolicies {
  /**
   * The subscription location placement ID. The ID indicates which regions are visible for a
   * subscription. For example, a subscription with a location placement Id of Public_2014-09-01
   * has access to Azure public regions.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly locationPlacementId?: string;
  /**
   * The subscription quota ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly quotaId?: string;
  /**
   * The subscription spending limit. Possible values include: 'On', 'Off', 'CurrentPeriodOff'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly spendingLimit?: SpendingLimit;
}

/**
 * Subscription information.
 */
export interface Subscription {
  /**
   * The fully qualified ID for the subscription. For example,
   * /subscriptions/00000000-0000-0000-0000-000000000000.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The subscription ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly subscriptionId?: string;
  /**
   * The subscription display name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly displayName?: string;
  /**
   * The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted.
   * Possible values include: 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly state?: SubscriptionState;
  /**
   * The subscription policies.
   */
  subscriptionPolicies?: SubscriptionPolicies;
  /**
   * The authorization source of the request. Valid values are one or more combinations of Legacy,
   * RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
   */
  authorizationSource?: string;
}

/**
 * Tenant Id information.
 */
export interface TenantIdDescription {
  /**
   * The fully qualified ID of the tenant. For example,
   * /tenants/00000000-0000-0000-0000-000000000000.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The tenant ID. For example, 00000000-0000-0000-0000-000000000000.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
}

/**
 * Describes the format of Error response.
 */
export interface ErrorResponse {
  /**
   * Error code
   */
  code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  message?: string;
}

/**
 * The ID of the canceled subscription
 */
export interface CanceledSubscriptionId {
  /**
   * The ID of the canceled subscription
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
}

/**
 * The ID of the subscriptions that is being renamed
 */
export interface RenamedSubscriptionId {
  /**
   * The ID of the subscriptions that is being renamed
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
}

/**
 * The ID of the subscriptions that is being enabled
 */
export interface EnabledSubscriptionId {
  /**
   * The ID of the subscriptions that is being enabled
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
}

/**
 * The new name of the subscription.
 */
export interface SubscriptionName {
  /**
   * New subscription name
   */
  subscriptionName?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Subscription
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * REST API operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Result of the request to list operations. It contains a list of operations and a URL link to get
 * the next set of results.
 */
export interface OperationListResult {
  /**
   * List of operations.
   */
  value?: Operation[];
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * Active Directory Principal who’ll get owner access on the new subscription.
 */
export interface AdPrincipal {
  /**
   * Object id of the Principal
   */
  objectId: string;
}

/**
 * The created subscription object.
 */
export interface SubscriptionCreationResult {
  /**
   * The link to the new subscription. Use this link to check the status of subscription creation
   * operation.
   */
  subscriptionLink?: string;
}

/**
 * Subscription Creation Parameters required to create a new Azure subscription.
 */
export interface SubscriptionCreationParameters {
  /**
   * The display name of the subscription.
   */
  displayName?: string;
  /**
   * The Management Group Id.
   */
  managementGroupId?: string;
  /**
   * The list of principals that should be granted Owner access on the subscription. Principals
   * should be of type User, Service Principal or Security Group.
   */
  owners?: AdPrincipal[];
  /**
   * The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and
   * MS-AZR-0148P (EnterpriseAgreement devTest) are available. Only valid when creating a
   * subscription in a enrollment account scope. Possible values include: 'MS-AZR-0017P',
   * 'MS-AZR-0148P'
   */
  offerType?: OfferType;
  /**
   * Additional, untyped parameters to support custom subscription creation scenarios.
   */
  additionalParameters?: { [propertyName: string]: any };
}

/**
 * The parameters required to create a new subscription.
 */
export interface ModernSubscriptionCreationParameters {
  /**
   * The friendly name of the subscription.
   */
  displayName: string;
  /**
   * The SKU ID of the Azure plan. Azure plan determines the pricing and service-level agreement of
   * the subscription. Use 0001 for Microsoft Azure Plan and 0002 for Microsoft Azure Plan for
   * DevTest.
   */
  skuId: string;
  /**
   * If set, the cost center will show up on the Azure usage and charges file.
   */
  costCenter?: string;
  /**
   * If specified, the AD principal will get owner access to the subscription, along with the user
   * who is performing the create subscription operation
   */
  owner?: AdPrincipal;
  /**
   * The identifier of the management group to which this subscription will be associated.
   */
  managementGroupId?: string;
  /**
   * Additional, untyped parameters to support custom subscription creation scenarios.
   */
  additionalParameters?: { [propertyName: string]: any };
}

/**
 * The parameters required to create a new CSP subscription.
 */
export interface ModernCspSubscriptionCreationParameters {
  /**
   * The friendly name of the subscription.
   */
  displayName: string;
  /**
   * The SKU ID of the Azure plan. Azure plan determines the pricing and service-level agreement of
   * the subscription. Use 0001 for Microsoft Azure Plan and 0002 for Microsoft Azure Plan for
   * DevTest.
   */
  skuId: string;
  /**
   * Reseller ID, basically MPN Id.
   */
  resellerId?: string;
}

/**
 * Put subscription properties.
 */
export interface PutSubscriptionRequestProperties {
  /**
   * The friendly name of the subscription.
   */
  displayName: string;
  /**
   * The SKU ID of the Azure plan. Azure plan determines the pricing and service-level agreement of
   * the subscription. Use 0001 for Microsoft Azure Plan and 0002 for Microsoft Azure Plan for
   * DevTest.
   */
  skuId: string;
  /**
   * Determines customerLed / fieldLed
   * (/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}),
   * partnerLed (/billingAccounts/{billingAccountId}/customers/{customerId}).
   */
  billingScope: string;
  /**
   * Initial owner principal Id.
   */
  initialOwnerPrincipalId?: string;
  /**
   * Initial owner tenant Id.
   */
  initialOwnerTenantId?: string;
}

/**
 * The parameters required to create a new subscription.
 */
export interface PutSubscriptionRequest {
  /**
   * Put subscription request properties.
   */
  properties?: PutSubscriptionRequestProperties;
}

/**
 * Put subscription creation result properties.
 */
export interface PutSubscriptionResponseProperties {
  /**
   * The friendly name of the subscription.
   */
  displayName?: string;
  /**
   * The SKU ID of the Azure plan.
   */
  skuId?: string;
  /**
   * Corresponding billing scope.
   */
  billingScope?: string;
  /**
   * Initial owner principal Id.
   */
  initialOwnerPrincipalId?: string;
  /**
   * Initial owner tenant Id.
   */
  initialOwnerTenantId?: string;
}

/**
 * Subscription information (same as Microsoft.Resources/subscription).
 */
export interface PutSubscriptionResponse {
  /**
   * Fully qualified ID for the subscription resource.
   */
  id?: string;
  /**
   * Subscription ID.
   */
  name?: string;
  /**
   * Resource type, Microsoft.Subscriptions.
   */
  type?: string;
  /**
   * Put subscription response properties.
   */
  properties?: PutSubscriptionResponseProperties;
}

/**
 * An interface representing SubscriptionClientOptions.
 */
export interface SubscriptionClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines headers for CreateSubscriptionInEnrollmentAccount operation.
 */
export interface SubscriptionCreateSubscriptionInEnrollmentAccountHeaders {
  /**
   * GET this URL to retrieve the status of the asynchronous operation.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: string;
}

/**
 * Defines headers for Get operation.
 */
export interface SubscriptionOperationGetHeaders {
  /**
   * The URL where the status of the asynchronous operation can be checked.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: number;
}

/**
 * Defines headers for CreateSubscription operation.
 */
export interface SubscriptionCreateSubscriptionHeaders {
  /**
   * GET this URL to retrieve the status of the asynchronous operation.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: number;
}

/**
 * Defines headers for CreateCspSubscription operation.
 */
export interface SubscriptionCreateCspSubscriptionHeaders {
  /**
   * GET this URL to retrieve the status of the asynchronous operation.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: number;
}

/**
 * Defines headers for PutSubscription operation.
 */
export interface SubscriptionPutSubscriptionHeaders {
  /**
   * GET this URL to retrieve the status of the asynchronous operation.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: number;
}

/**
 * Defines headers for GetSubscription operation.
 */
export interface SubscriptionGetSubscriptionHeaders {
  /**
   * GET this URL to retrieve the status of the asynchronous operation.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: number;
}

/**
 * @interface
 * Location list operation response.
 * @extends Array<Location>
 */
export interface LocationListResult extends Array<Location> {
}

/**
 * @interface
 * Subscription list operation response.
 * @extends Array<Subscription>
 */
export interface SubscriptionListResult extends Array<Subscription> {
  /**
   * The URL to get the next set of results.
   */
  nextLink: string;
}

/**
 * @interface
 * Tenant Ids information.
 * @extends Array<TenantIdDescription>
 */
export interface TenantListResult extends Array<TenantIdDescription> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink: string;
}

/**
 * Defines values for SubscriptionState.
 * Possible values include: 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
 * @readonly
 * @enum {string}
 */
export type SubscriptionState = 'Enabled' | 'Warned' | 'PastDue' | 'Disabled' | 'Deleted';

/**
 * Defines values for SpendingLimit.
 * Possible values include: 'On', 'Off', 'CurrentPeriodOff'
 * @readonly
 * @enum {string}
 */
export type SpendingLimit = 'On' | 'Off' | 'CurrentPeriodOff';

/**
 * Defines values for OfferType.
 * Possible values include: 'MS-AZR-0017P', 'MS-AZR-0148P'
 * @readonly
 * @enum {string}
 */
export type OfferType = 'MS-AZR-0017P' | 'MS-AZR-0148P';

/**
 * Contains response data for the listLocations operation.
 */
export type SubscriptionsListLocationsResponse = LocationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LocationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SubscriptionsGetResponse = Subscription & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Subscription;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SubscriptionsListResponse = SubscriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SubscriptionsListNextResponse = SubscriptionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type TenantsListResponse = TenantListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TenantListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type TenantsListNextResponse = TenantListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TenantListResult;
    };
};

/**
 * Contains response data for the createSubscriptionInEnrollmentAccount operation.
 */
export type SubscriptionCreateSubscriptionInEnrollmentAccountResponse = SubscriptionCreationResult & SubscriptionCreateSubscriptionInEnrollmentAccountHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionCreateSubscriptionInEnrollmentAccountHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionCreationResult;
    };
};

/**
 * Contains response data for the cancel operation.
 */
export type SubscriptionCancelResponse = CanceledSubscriptionId & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CanceledSubscriptionId;
    };
};

/**
 * Contains response data for the rename operation.
 */
export type SubscriptionRenameResponse = RenamedSubscriptionId & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RenamedSubscriptionId;
    };
};

/**
 * Contains response data for the enable operation.
 */
export type SubscriptionEnableResponse = EnabledSubscriptionId & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EnabledSubscriptionId;
    };
};

/**
 * Contains response data for the createSubscription operation.
 */
export type SubscriptionCreateSubscriptionResponse = SubscriptionCreationResult & SubscriptionCreateSubscriptionHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionCreateSubscriptionHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionCreationResult;
    };
};

/**
 * Contains response data for the createCspSubscription operation.
 */
export type SubscriptionCreateCspSubscriptionResponse = SubscriptionCreationResult & SubscriptionCreateCspSubscriptionHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionCreateCspSubscriptionHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionCreationResult;
    };
};

/**
 * Contains response data for the putSubscription operation.
 */
export type SubscriptionPutSubscriptionResponse = PutSubscriptionResponse & SubscriptionPutSubscriptionHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionPutSubscriptionHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PutSubscriptionResponse;
    };
};

/**
 * Contains response data for the getSubscription operation.
 */
export type SubscriptionGetSubscriptionResponse = PutSubscriptionResponse & SubscriptionGetSubscriptionHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionGetSubscriptionHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PutSubscriptionResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SubscriptionOperationGetResponse = SubscriptionCreationResult & SubscriptionOperationGetHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: SubscriptionOperationGetHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SubscriptionCreationResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

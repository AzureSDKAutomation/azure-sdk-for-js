/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The SKU of the cognitive services account.
 */
export interface Sku {
  /**
   * Gets or sets the sku name. Required for account creation, optional for update.
   */
  name: string;
  /**
   * Gets the sku tier. This is based on the SKU name. Possible values include: 'Free', 'Standard',
   * 'Premium', 'Enterprise'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tier?: SkuTier;
}

/**
 * SkuCapability indicates the capability of a certain feature.
 */
export interface SkuCapability {
  /**
   * The name of the SkuCapability.
   */
  name?: string;
  /**
   * The value of the SkuCapability.
   */
  value?: string;
}

/**
 * A rule governing the accessibility from a specific ip address or ip range.
 */
export interface IpRule {
  /**
   * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or
   * '124.56.78.0/24' (all addresses that start with 124.56.78).
   */
  value: string;
}

/**
 * A rule governing the accessibility from a specific virtual network.
 */
export interface VirtualNetworkRule {
  /**
   * Full resource id of a vnet subnet, such as
   * '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
   */
  id: string;
  /**
   * Gets the state of virtual network rule.
   */
  state?: string;
  /**
   * Ignore missing vnet service endpoint or not.
   */
  ignoreMissingVnetServiceEndpoint?: boolean;
}

/**
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSet {
  /**
   * The default action when no rule from ipRules and from virtualNetworkRules match. This is only
   * used after the bypass property has been evaluated. Possible values include: 'Allow', 'Deny'
   */
  defaultAction?: NetworkRuleAction;
  /**
   * The list of IP address rules.
   */
  ipRules?: IpRule[];
  /**
   * The list of virtual network rules.
   */
  virtualNetworkRules?: VirtualNetworkRule[];
}

/**
 * Properties to configure keyVault Properties
 */
export interface KeyVaultProperties {
  /**
   * Name of the Key from KeyVault
   */
  keyName?: string;
  /**
   * Version of the Key from KeyVault
   */
  keyVersion?: string;
  /**
   * Uri of KeyVault
   */
  keyVaultUri?: string;
}

/**
 * Properties to configure Encryption
 */
export interface Encryption {
  /**
   * Properties of KeyVault
   */
  keyVaultProperties?: KeyVaultProperties;
  /**
   * Enumerates the possible value of keySource for Encryption. Possible values include:
   * 'Microsoft.CognitiveServices', 'Microsoft.KeyVault'. Default value: 'Microsoft.KeyVault'.
   */
  keySource?: KeySource;
}

/**
 * The user owned storage for Cognitive Services account.
 */
export interface UserOwnedStorage {
  /**
   * Full resource id of a Microsoft.Storage resource.
   */
  resourceId?: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
}

/**
 * A collection of information about the state of the connection between service consumer and
 * provider.
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the
   * service. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
   */
  status?: PrivateEndpointServiceConnectionStatus;
  /**
   * The reason for approval/rejection of the connection.
   */
  description?: string;
  /**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
  actionsRequired?: string;
}

/**
 * Properties of the PrivateEndpointConnectProperties.
 */
export interface PrivateEndpointConnectionProperties {
  /**
   * The resource of private end point.
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * A collection of information about the state of the connection between service consumer and
   * provider.
   */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /**
   * The private link resource group ids.
   */
  groupIds?: string[];
}

/**
 * Common fields that are returned in the response for all Azure Resource Manager resources
 * @summary Resource
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource ID for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or
   * "Microsoft.Storage/storageAccounts"
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnection extends Resource {
  /**
   * Resource properties.
   */
  properties?: PrivateEndpointConnectionProperties;
}

/**
 * The api properties for special APIs.
 */
export interface CognitiveServicesAccountApiProperties {
  /**
   * (QnAMaker Only) The runtime endpoint of QnAMaker.
   */
  qnaRuntimeEndpoint?: string;
  /**
   * (Bing Search Only) The flag to enable statistics of Bing Search.
   */
  statisticsEnabled?: boolean;
  /**
   * (Personalization Only) The flag to enable statistics of Bing Search.
   */
  eventHubConnectionString?: string;
  /**
   * (Personalization Only) The storage account connection string.
   */
  storageAccountConnectionString?: string;
  /**
   * (Metrics Advisor Only) The Azure AD Client Id (Application Id).
   */
  aadClientId?: string;
  /**
   * (Metrics Advisor Only) The Azure AD Tenant Id.
   */
  aadTenantId?: string;
  /**
   * (Metrics Advisor Only) The super user of Metrics Advisor.
   */
  superUser?: string;
  /**
   * (Metrics Advisor Only) The website name of Metrics Advisor.
   */
  websiteName?: string;
}

/**
 * Properties of Cognitive Services account.
 */
export interface CognitiveServicesAccountProperties {
  /**
   * Gets the status of the cognitive services account at the time the operation was called.
   * Possible values include: 'Creating', 'ResolvingDNS', 'Moving', 'Deleting', 'Succeeded',
   * 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Endpoint of the created account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endpoint?: string;
  /**
   * The internal identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly internalId?: string;
  /**
   * Gets the capabilities of the cognitive services account. Each item indicates the capability of
   * a specific feature. The values are read-only and for reference only.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly capabilities?: SkuCapability[];
  /**
   * Optional subdomain name used for token-based authentication.
   */
  customSubDomainName?: string;
  /**
   * A collection of rules governing the accessibility from specific network locations.
   */
  networkAcls?: NetworkRuleSet;
  /**
   * The encryption properties for this resource.
   */
  encryption?: Encryption;
  /**
   * The storage accounts for this resource.
   */
  userOwnedStorage?: UserOwnedStorage[];
  /**
   * The private endpoint connection associated with the Cognitive Services account.
   */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * Whether or not public endpoint access is allowed for this account. Value is optional but if
   * passed in, must be 'Enabled' or 'Disabled'. Possible values include: 'Enabled', 'Disabled'
   */
  publicNetworkAccess?: PublicNetworkAccess;
  /**
   * The api properties for special APIs.
   */
  apiProperties?: CognitiveServicesAccountApiProperties;
  /**
   * Gets the date of cognitive services account creation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly dateCreated?: string;
}

/**
 * User-assigned managed identity.
 */
export interface UserAssignedIdentity {
  /**
   * Azure Active Directory principal ID associated with this Identity.
   */
  principalId?: string;
  /**
   * Client App Id associated with this identity.
   */
  clientId?: string;
}

/**
 * Managed service identity.
 */
export interface Identity {
  /**
   * Type of managed service identity. Possible values include: 'None', 'SystemAssigned',
   * 'UserAssigned'
   */
  type?: IdentityType;
  /**
   * Tenant of managed service identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * Principal Id of managed service identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The list of user assigned identities associated with the resource. The user identity
   * dictionary key references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
   */
  userAssignedIdentities?: { [propertyName: string]: UserAssignedIdentity };
}

/**
 * Cognitive Services Account is an Azure resource representing the provisioned account, its type,
 * location and SKU.
 */
export interface CognitiveServicesAccount extends BaseResource {
  /**
   * Entity Tag
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
  /**
   * The id of the created account
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The Kind of the resource.
   */
  kind?: string;
  /**
   * The location of the resource
   */
  location?: string;
  /**
   * The name of the created account
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Properties of Cognitive Services account.
   */
  properties?: CognitiveServicesAccountProperties;
  /**
   * The SKU of Cognitive Services account.
   */
  sku?: Sku;
  /**
   * Gets or sets a list of key value pairs that describe the resource. These tags can be used in
   * viewing and grouping this resource (across resource groups). A maximum of 15 tags can be
   * provided for a resource. Each tag must have a key no greater than 128 characters and value no
   * greater than 256 characters.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The identity of Cognitive Services account.
   */
  identity?: Identity;
}

/**
 * The access keys for the cognitive services account.
 */
export interface CognitiveServicesAccountKeys {
  /**
   * Gets the value of key 1.
   */
  key1?: string;
  /**
   * Gets the value of key 2.
   */
  key2?: string;
}

/**
 * Regenerate key parameters.
 */
export interface RegenerateKeyParameters {
  /**
   * key name to generate (Key1|Key2). Possible values include: 'Key1', 'Key2'
   */
  keyName: KeyName;
}

/**
 * Cognitive Services resource type and SKU.
 */
export interface CognitiveServicesResourceAndSku {
  /**
   * Resource Namespace and Type
   */
  resourceType?: string;
  /**
   * The SKU of Cognitive Services account.
   */
  sku?: Sku;
}

/**
 * The list of cognitive services accounts operation response.
 */
export interface CognitiveServicesAccountEnumerateSkusResult {
  /**
   * Gets the list of Cognitive Services accounts and their properties.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: CognitiveServicesResourceAndSku[];
}

/**
 * A metric name.
 */
export interface MetricName {
  /**
   * The name of the metric.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
  /**
   * The friendly name of the metric.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly localizedValue?: string;
}

/**
 * The usage data for a usage request.
 */
export interface Usage {
  /**
   * The unit of the metric. Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent',
   * 'CountPerSecond', 'BytesPerSecond', 'Milliseconds'
   */
  unit?: UnitType;
  /**
   * The name information for the metric.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: MetricName;
  /**
   * The quota period used to summarize the usage values.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly quotaPeriod?: string;
  /**
   * Maximum value for this metric.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly limit?: number;
  /**
   * Current value for this metric.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly currentValue?: number;
  /**
   * Next reset time for current quota.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextResetTime?: string;
  /**
   * Cognitive Services account quota usage status. Possible values include: 'Included', 'Blocked',
   * 'InOverage', 'Unknown'
   */
  status?: QuotaUsageStatus;
}

/**
 * The response to a list usage request.
 */
export interface UsagesResult {
  /**
   * The list of usages for Cognitive Service account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: Usage[];
}

/**
 * Cognitive Services error body.
 */
export interface ErrorBody {
  /**
   * error code
   */
  code: string;
  /**
   * error message
   */
  message: string;
}

/**
 * Cognitive Services error object.
 */
export interface ErrorModel {
  /**
   * The error body.
   */
  error?: ErrorBody;
}

/**
 * The operation supported by Cognitive Services.
 */
export interface OperationDisplayInfo {
  /**
   * The description of the operation.
   */
  description?: string;
  /**
   * The action that users can perform, based on their permission level.
   */
  operation?: string;
  /**
   * Service provider: Microsoft Cognitive Services.
   */
  provider?: string;
  /**
   * Resource on which the operation is performed.
   */
  resource?: string;
}

/**
 * The operation supported by Cognitive Services.
 */
export interface OperationEntity {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   */
  name?: string;
  /**
   * The operation supported by Cognitive Services.
   */
  display?: OperationDisplayInfo;
  /**
   * The origin of the operation.
   */
  origin?: string;
  /**
   * Additional properties.
   */
  properties?: any;
}

/**
 * Check SKU availability parameter.
 */
export interface CheckSkuAvailabilityParameter {
  /**
   * The SKU of the resource.
   */
  skus: string[];
  /**
   * The Kind of the resource.
   */
  kind: string;
  /**
   * The Type of the resource.
   */
  type: string;
}

/**
 * Check SKU availability result.
 */
export interface CheckSkuAvailabilityResult {
  /**
   * The Kind of the resource.
   */
  kind?: string;
  /**
   * The Type of the resource.
   */
  type?: string;
  /**
   * The SKU of Cognitive Services account.
   */
  skuName?: string;
  /**
   * Indicates the given SKU is available or not.
   */
  skuAvailable?: boolean;
  /**
   * Reason why the SKU is not available.
   */
  reason?: string;
  /**
   * Additional error message.
   */
  message?: string;
}

/**
 * Check SKU availability result list.
 */
export interface CheckSkuAvailabilityResultList {
  /**
   * Check SKU availability result list.
   */
  value?: CheckSkuAvailabilityResult[];
}

/**
 * Check Domain availability parameter.
 */
export interface CheckDomainAvailabilityParameter {
  /**
   * The subdomain name to use.
   */
  subdomainName: string;
  /**
   * The Type of the resource.
   */
  type: string;
}

/**
 * Check Domain availability result.
 */
export interface CheckDomainAvailabilityResult {
  /**
   * Indicates the given SKU is available or not.
   */
  isSubdomainAvailable?: boolean;
  /**
   * Reason why the SKU is not available.
   */
  reason?: string;
  /**
   * The subdomain name to use.
   */
  subdomainName?: string;
  /**
   * The Type of the resource.
   */
  type?: string;
}

/**
 * An interface representing ResourceSkuRestrictionInfo.
 */
export interface ResourceSkuRestrictionInfo {
  /**
   * Locations where the SKU is restricted
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly locations?: string[];
  /**
   * List of availability zones where the SKU is restricted.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly zones?: string[];
}

/**
 * Describes restrictions of a SKU.
 */
export interface ResourceSkuRestrictions {
  /**
   * The type of restrictions. Possible values include: 'Location', 'Zone'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: ResourceSkuRestrictionsType;
  /**
   * The value of restrictions. If the restriction type is set to location. This would be different
   * locations where the SKU is restricted.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly values?: string[];
  /**
   * The information about the restriction where the SKU cannot be used.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly restrictionInfo?: ResourceSkuRestrictionInfo;
  /**
   * The reason for restriction. Possible values include: 'QuotaId', 'NotAvailableForSubscription'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly reasonCode?: ResourceSkuRestrictionsReasonCode;
}

/**
 * Describes an available Cognitive Services SKU.
 */
export interface ResourceSku {
  /**
   * The type of resource the SKU applies to.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resourceType?: string;
  /**
   * The name of SKU.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Specifies the tier of Cognitive Services account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tier?: string;
  /**
   * The Kind of resources that are supported in this SKU.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly kind?: string;
  /**
   * The set of locations that the SKU is available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly locations?: string[];
  /**
   * The restrictions because of which SKU cannot be used. This is empty if there are no
   * restrictions.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly restrictions?: ResourceSkuRestrictions[];
}

/**
 * A list of private endpoint connections
 */
export interface PrivateEndpointConnectionListResult {
  /**
   * Array of private endpoint connections
   */
  value?: PrivateEndpointConnection[];
}

/**
 * Properties of a private link resource.
 */
export interface PrivateLinkResourceProperties {
  /**
   * The private link resource group id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly groupId?: string;
  /**
   * The private link resource display name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly displayName?: string;
  /**
   * The private link resource required member names.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly requiredMembers?: string[];
  /**
   * The private link resource Private link DNS zone name.
   */
  requiredZoneNames?: string[];
}

/**
 * A private link resource
 */
export interface PrivateLinkResource extends Resource {
  /**
   * Resource properties.
   */
  properties?: PrivateLinkResourceProperties;
}

/**
 * A list of private link resources
 */
export interface PrivateLinkResourceListResult {
  /**
   * Array of private link resources
   */
  value?: PrivateLinkResource[];
}

/**
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * The resource model definition for an Azure Resource Manager tracked top level resource which has
 * 'tags' and a 'location'
 * @summary Tracked Resource
 */
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
   */
  location: string;
}

/**
 * The resource model definition for an Azure Resource Manager resource with an etag.
 * @summary Entity Resource
 */
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
}

/**
 * Optional Parameters.
 */
export interface AccountsGetUsagesOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An OData filter expression that describes a subset of usages to return. The supported
   * parameter is name.value (name of the metric, can have an or of multiple names).
   */
  filter?: string;
}

/**
 * An interface representing CognitiveServicesManagementClientOptions.
 */
export interface CognitiveServicesManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The list of cognitive services accounts operation response.
 * @extends Array<CognitiveServicesAccount>
 */
export interface CognitiveServicesAccountListResult extends Array<CognitiveServicesAccount> {
  /**
   * The link used to get the next page of accounts.
   */
  nextLink?: string;
}

/**
 * @interface
 * The Get Skus operation response.
 * @extends Array<ResourceSku>
 */
export interface ResourceSkusResult extends Array<ResourceSku> {
  /**
   * The uri to fetch the next page of Skus.
   */
  nextLink?: string;
}

/**
 * @interface
 * The list of cognitive services accounts operation response.
 * @extends Array<OperationEntity>
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
  /**
   * The link used to get the next page of operations.
   */
  nextLink?: string;
}

/**
 * Defines values for SkuTier.
 * Possible values include: 'Free', 'Standard', 'Premium', 'Enterprise'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Free' | 'Standard' | 'Premium' | 'Enterprise';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'ResolvingDNS', 'Moving', 'Deleting', 'Succeeded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Creating' | 'ResolvingDNS' | 'Moving' | 'Deleting' | 'Succeeded' | 'Failed';

/**
 * Defines values for NetworkRuleAction.
 * Possible values include: 'Allow', 'Deny'
 * @readonly
 * @enum {string}
 */
export type NetworkRuleAction = 'Allow' | 'Deny';

/**
 * Defines values for KeySource.
 * Possible values include: 'Microsoft.CognitiveServices', 'Microsoft.KeyVault'
 * @readonly
 * @enum {string}
 */
export type KeySource = 'Microsoft.CognitiveServices' | 'Microsoft.KeyVault';

/**
 * Defines values for PrivateEndpointServiceConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointServiceConnectionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Disconnected';

/**
 * Defines values for PublicNetworkAccess.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type PublicNetworkAccess = 'Enabled' | 'Disabled';

/**
 * Defines values for IdentityType.
 * Possible values include: 'None', 'SystemAssigned', 'UserAssigned'
 * @readonly
 * @enum {string}
 */
export type IdentityType = 'None' | 'SystemAssigned' | 'UserAssigned';

/**
 * Defines values for KeyName.
 * Possible values include: 'Key1', 'Key2'
 * @readonly
 * @enum {string}
 */
export type KeyName = 'Key1' | 'Key2';

/**
 * Defines values for UnitType.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountPerSecond',
 * 'BytesPerSecond', 'Milliseconds'
 * @readonly
 * @enum {string}
 */
export type UnitType = 'Count' | 'Bytes' | 'Seconds' | 'Percent' | 'CountPerSecond' | 'BytesPerSecond' | 'Milliseconds';

/**
 * Defines values for QuotaUsageStatus.
 * Possible values include: 'Included', 'Blocked', 'InOverage', 'Unknown'
 * @readonly
 * @enum {string}
 */
export type QuotaUsageStatus = 'Included' | 'Blocked' | 'InOverage' | 'Unknown';

/**
 * Defines values for ResourceSkuRestrictionsType.
 * Possible values include: 'Location', 'Zone'
 * @readonly
 * @enum {string}
 */
export type ResourceSkuRestrictionsType = 'Location' | 'Zone';

/**
 * Defines values for ResourceSkuRestrictionsReasonCode.
 * Possible values include: 'QuotaId', 'NotAvailableForSubscription'
 * @readonly
 * @enum {string}
 */
export type ResourceSkuRestrictionsReasonCode = 'QuotaId' | 'NotAvailableForSubscription';

/**
 * Contains response data for the create operation.
 */
export type AccountsCreateResponse = CognitiveServicesAccount & {
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
      parsedBody: CognitiveServicesAccount;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AccountsUpdateResponse = CognitiveServicesAccount & {
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
      parsedBody: CognitiveServicesAccount;
    };
};

/**
 * Contains response data for the getProperties operation.
 */
export type AccountsGetPropertiesResponse = CognitiveServicesAccount & {
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
      parsedBody: CognitiveServicesAccount;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AccountsListByResourceGroupResponse = CognitiveServicesAccountListResult & {
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
      parsedBody: CognitiveServicesAccountListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type AccountsListResponse = CognitiveServicesAccountListResult & {
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
      parsedBody: CognitiveServicesAccountListResult;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type AccountsListKeysResponse = CognitiveServicesAccountKeys & {
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
      parsedBody: CognitiveServicesAccountKeys;
    };
};

/**
 * Contains response data for the regenerateKey operation.
 */
export type AccountsRegenerateKeyResponse = CognitiveServicesAccountKeys & {
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
      parsedBody: CognitiveServicesAccountKeys;
    };
};

/**
 * Contains response data for the listSkus operation.
 */
export type AccountsListSkusResponse = CognitiveServicesAccountEnumerateSkusResult & {
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
      parsedBody: CognitiveServicesAccountEnumerateSkusResult;
    };
};

/**
 * Contains response data for the getUsages operation.
 */
export type AccountsGetUsagesResponse = UsagesResult & {
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
      parsedBody: UsagesResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type AccountsListByResourceGroupNextResponse = CognitiveServicesAccountListResult & {
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
      parsedBody: CognitiveServicesAccountListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type AccountsListNextResponse = CognitiveServicesAccountListResult & {
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
      parsedBody: CognitiveServicesAccountListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ResourceSkusListResponse = ResourceSkusResult & {
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
      parsedBody: ResourceSkusResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ResourceSkusListNextResponse = ResourceSkusResult & {
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
      parsedBody: ResourceSkusResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationEntityListResult & {
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
      parsedBody: OperationEntityListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationEntityListResult & {
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
      parsedBody: OperationEntityListResult;
    };
};

/**
 * Contains response data for the checkSkuAvailability operation.
 */
export type CheckSkuAvailabilityResponse = CheckSkuAvailabilityResultList & {
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
      parsedBody: CheckSkuAvailabilityResultList;
    };
};

/**
 * Contains response data for the checkDomainAvailability operation.
 */
export type CheckDomainAvailabilityResponse = CheckDomainAvailabilityResult & {
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
      parsedBody: CheckDomainAvailabilityResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult & {
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
      parsedBody: PrivateEndpointConnectionListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection & {
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
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection & {
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
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PrivateLinkResourcesListResponse = PrivateLinkResourceListResult & {
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
      parsedBody: PrivateLinkResourceListResult;
    };
};

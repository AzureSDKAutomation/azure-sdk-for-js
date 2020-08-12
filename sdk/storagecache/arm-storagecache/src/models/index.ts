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
 * The object that represents the operation.
 */
export interface ApiOperationDisplay {
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
  /**
   * Service provider: Microsoft.StorageCache
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Cache, etc.
   */
  resource?: string;
}

/**
 * REST API operation description: see
 * https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r3023-operationsapiimplementation
 */
export interface ApiOperation {
  /**
   * The object that represents the operation.
   */
  display?: ApiOperationDisplay;
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
}

/**
 * An error response.
 */
export interface CloudErrorBody {
  /**
   * An identifier for the error. Codes are invariant and are intended to be consumed
   * programmatically.
   */
  code?: string;
  /**
   * A list of additional details about the error.
   */
  details?: CloudErrorBody[];
  /**
   * A message describing the error, intended to be suitable for display in a user interface.
   */
  message?: string;
  /**
   * The target of the particular error. For example, the name of the property in error.
   */
  target?: string;
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
 * The status of operation.
 */
export interface AscOperation {
  /**
   * The operation Id.
   */
  id?: string;
  /**
   * The operation name.
   */
  name?: string;
  /**
   * The start time of the operation.
   */
  startTime?: string;
  /**
   * The end time of the operation.
   */
  endTime?: string;
  /**
   * The status of the operation.
   */
  status?: string;
  /**
   * The error detail of the operation if any.
   */
  error?: ErrorResponse;
}

/**
 * Cache identity properties.
 */
export interface CacheIdentity {
  /**
   * The principal id of the cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant id associated with the cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The type of identity used for the cache. Possible values include: 'SystemAssigned', 'None'
   */
  type?: CacheIdentityType;
}

/**
 * An indication of Cache health. Gives more information about health than just that related to
 * provisioning.
 */
export interface CacheHealth {
  /**
   * List of Cache health states. Possible values include: 'Unknown', 'Healthy', 'Degraded',
   * 'Down', 'Transitioning', 'Stopping', 'Stopped', 'Upgrading', 'Flushing'
   */
  state?: HealthStateType;
  /**
   * Describes explanation of state.
   */
  statusDescription?: string;
}

/**
 * Properties describing the software upgrade state of the Cache.
 */
export interface CacheUpgradeStatus {
  /**
   * Version string of the firmware currently installed on this Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly currentFirmwareVersion?: string;
  /**
   * True if there is a firmware update ready to install on this Cache. The firmware will
   * automatically be installed after firmwareUpdateDeadline if not triggered earlier via the
   * upgrade operation. Possible values include: 'available', 'unavailable'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firmwareUpdateStatus?: FirmwareStatusType;
  /**
   * Time at which the pending firmware update will automatically be installed on the Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firmwareUpdateDeadline?: Date;
  /**
   * Time of the last successful firmware update.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastFirmwareUpdate?: Date;
  /**
   * When firmwareUpdateAvailable is true, this field holds the version string for the update.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly pendingFirmwareVersion?: string;
}

/**
 * Cache network settings.
 */
export interface CacheNetworkSettings {
  /**
   * The IPv4 maximum transmission unit configured for the subnet. Default value: 1500.
   */
  mtu?: number;
  /**
   * Array of additional IP addresses used by this Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly utilityAddresses?: string[];
}

/**
 * Describes a resource Id to source Key Vault.
 */
export interface KeyVaultKeyReferenceSourceVault {
  /**
   * Resource Id.
   */
  id?: string;
}

/**
 * Describes a reference to Key Vault Key.
 */
export interface KeyVaultKeyReference {
  /**
   * The URL referencing a key encryption key in Key Vault.
   */
  keyUrl: string;
  /**
   * Describes a resource Id to source Key Vault.
   */
  sourceVault: KeyVaultKeyReferenceSourceVault;
}

/**
 * Cache encryption settings.
 */
export interface CacheEncryptionSettings {
  /**
   * Specifies the location of the key encryption key in Key Vault.
   */
  keyEncryptionKey?: KeyVaultKeyReference;
}

/**
 * Cache security settings.
 */
export interface CacheSecuritySettings {
  /**
   * root squash of cache property.
   */
  rootSquash?: boolean;
}

/**
 * SKU for the Cache.
 */
export interface CacheSku {
  /**
   * SKU name for this Cache.
   */
  name?: string;
}

/**
 * A Cache instance. Follows Azure Resource Manager standards:
 * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export interface Cache extends BaseResource {
  /**
   * ARM tags as name/value pairs.
   */
  tags?: any;
  /**
   * Resource ID of the Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Region name string.
   */
  location?: string;
  /**
   * Name of Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of the Cache; Microsoft.StorageCache/Cache
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The identity of the cache, if configured.
   */
  identity?: CacheIdentity;
  /**
   * The size of this Cache, in GB.
   */
  cacheSizeGB?: number;
  /**
   * Health of the Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly health?: CacheHealth;
  /**
   * Array of IP addresses that can be used by clients mounting this Cache.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly mountAddresses?: string[];
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Subnet used for the Cache.
   */
  subnet?: string;
  /**
   * Upgrade status of the Cache.
   */
  upgradeStatus?: CacheUpgradeStatus;
  /**
   * Specifies network settings of the cache.
   */
  networkSettings?: CacheNetworkSettings;
  /**
   * Specifies encryption settings of the cache.
   */
  encryptionSettings?: CacheEncryptionSettings;
  /**
   * Specifies security settings of the cache.
   */
  securitySettings?: CacheSecuritySettings;
  /**
   * SKU for the Cache.
   */
  sku?: CacheSku;
}

/**
 * A namespace junction.
 */
export interface NamespaceJunction {
  /**
   * Namespace path on a Cache for a Storage Target.
   */
  namespacePath?: string;
  /**
   * Path in Storage Target to which namespacePath points.
   */
  targetPath?: string;
  /**
   * NFS export where targetPath exists.
   */
  nfsExport?: string;
}

/**
 * Properties pertained to Nfs3Target
 */
export interface Nfs3Target {
  /**
   * IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
   */
  target?: string;
  /**
   * Identifies the primary usage model to be used for this Storage Target. Get choices from
   * .../usageModels
   */
  usageModel?: string;
}

/**
 * Properties pertained to ClfsTarget
 */
export interface ClfsTarget {
  /**
   * Resource ID of storage container.
   */
  target?: string;
}

/**
 * Properties pertained to UnknownTarget
 */
export interface UnknownTarget {
  /**
   * Dictionary of string->string pairs containing information about the Storage Target.
   */
  unknownMap?: { [propertyName: string]: string };
}

/**
 * Contains the possible cases for StorageTargetProperties.
 */
export type StorageTargetPropertiesUnion = StorageTargetProperties | Nfs3TargetProperties | ClfsTargetProperties | UnknownTargetProperties;

/**
 * Properties of the Storage Target.
 */
export interface StorageTargetProperties {
  /**
   * Polymorphic Discriminator
   */
  targetBaseType: "StorageTargetProperties";
  /**
   * List of Cache namespace junctions to target for namespace associations.
   */
  junctions?: NamespaceJunction[];
  /**
   * Type of the Storage Target.
   */
  targetType?: string;
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Properties when targetType is nfs3.
   */
  nfs3?: Nfs3Target;
  /**
   * Properties when targetType is clfs.
   */
  clfs?: ClfsTarget;
  /**
   * Properties when targetType is unknown.
   */
  unknown?: UnknownTarget;
}

/**
 * Resource used by a Cache.
 */
export interface StorageTargetResource extends BaseResource {
  /**
   * Name of the Storage Target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource ID of the Storage Target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * Type of the Storage Target.
 */
export interface StorageTarget extends StorageTargetResource {
  /**
   * List of Cache namespace junctions to target for namespace associations.
   */
  junctions?: NamespaceJunction[];
  /**
   * Type of the Storage Target.
   */
  targetType?: string;
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Properties when targetType is nfs3.
   */
  nfs3?: Nfs3Target;
  /**
   * Properties when targetType is clfs.
   */
  clfs?: ClfsTarget;
  /**
   * Properties when targetType is unknown.
   */
  unknown?: UnknownTarget;
  /**
   * Polymorphic Discriminator
   */
  targetBaseType: string;
}

/**
 * An NFSv3 mount point for use as a Storage Target.
 */
export interface Nfs3TargetProperties {
  /**
   * Polymorphic Discriminator
   */
  targetBaseType: "nfs3";
  /**
   * List of Cache namespace junctions to target for namespace associations.
   */
  junctions?: NamespaceJunction[];
  /**
   * Type of the Storage Target.
   */
  targetType?: string;
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Properties when targetType is nfs3.
   */
  nfs3?: Nfs3Target;
  /**
   * Properties when targetType is clfs.
   */
  clfs?: ClfsTarget;
  /**
   * Properties when targetType is unknown.
   */
  unknown?: UnknownTarget;
}

/**
 * Storage container for use as a CLFS Storage Target.
 */
export interface ClfsTargetProperties {
  /**
   * Polymorphic Discriminator
   */
  targetBaseType: "clfs";
  /**
   * List of Cache namespace junctions to target for namespace associations.
   */
  junctions?: NamespaceJunction[];
  /**
   * Type of the Storage Target.
   */
  targetType?: string;
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Properties when targetType is nfs3.
   */
  nfs3?: Nfs3Target;
  /**
   * Properties when targetType is clfs.
   */
  clfs?: ClfsTarget;
  /**
   * Properties when targetType is unknown.
   */
  unknown?: UnknownTarget;
}

/**
 * Storage container for use as an Unknown Storage Target.
 */
export interface UnknownTargetProperties {
  /**
   * Polymorphic Discriminator
   */
  targetBaseType: "unknown";
  /**
   * List of Cache namespace junctions to target for namespace associations.
   */
  junctions?: NamespaceJunction[];
  /**
   * Type of the Storage Target.
   */
  targetType?: string;
  /**
   * ARM provisioning state, see
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
   * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting',
   * 'Updating'
   */
  provisioningState?: ProvisioningStateType;
  /**
   * Properties when targetType is nfs3.
   */
  nfs3?: Nfs3Target;
  /**
   * Properties when targetType is clfs.
   */
  clfs?: ClfsTarget;
  /**
   * Properties when targetType is unknown.
   */
  unknown?: UnknownTarget;
}

/**
 * A resource SKU capability.
 */
export interface ResourceSkuCapabilities {
  /**
   * Name of a capability, such as ops/sec.
   */
  name?: string;
  /**
   * Quantity, if the capability is measured by quantity.
   */
  value?: string;
}

/**
 * Resource SKU location information.
 */
export interface ResourceSkuLocationInfo {
  /**
   * Location where this SKU is available.
   */
  location?: string;
  /**
   * Zones if any.
   */
  zones?: string[];
}

/**
 * The restrictions preventing this SKU from being used.
 */
export interface Restriction {
  /**
   * The type of restrictions. In this version, the only possible value for this is location.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The value of restrictions. If the restriction type is set to location, then this would be the
   * different locations where the SKU is restricted.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly values?: string[];
  /**
   * The reason for the restriction. As of now this can be "QuotaId" or
   * "NotAvailableForSubscription". "QuotaId" is set when the SKU has requiredQuotas parameter as
   * the subscription does not belong to that quota. "NotAvailableForSubscription" is related to
   * capacity at the datacenter. Possible values include: 'QuotaId', 'NotAvailableForSubscription'
   */
  reasonCode?: ReasonCode;
}

/**
 * A resource SKU.
 */
export interface ResourceSku {
  /**
   * The type of resource the SKU applies to.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resourceType?: string;
  /**
   * A list of capabilities of this SKU, such as throughput or ops/sec.
   */
  capabilities?: ResourceSkuCapabilities[];
  /**
   * The set of locations that the SKU is available. This will be supported and registered Azure
   * Geo Regions (e.g., West US, East US, Southeast Asia, etc.).
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly locations?: string[];
  /**
   * The set of locations that the SKU is available.
   */
  locationInfo?: ResourceSkuLocationInfo[];
  /**
   * The name of this SKU.
   */
  name?: string;
  /**
   * The restrictions preventing this SKU from being used. This is empty if there are no
   * restrictions.
   */
  restrictions?: Restriction[];
}

/**
 * Localized information describing this usage model.
 */
export interface UsageModelDisplay {
  /**
   * String to display for this usage model.
   */
  description?: string;
}

/**
 * A usage model.
 */
export interface UsageModel {
  /**
   * Localized information describing this usage model.
   */
  display?: UsageModelDisplay;
  /**
   * Non-localized keyword name for this usage model.
   */
  modelName?: string;
  /**
   * The type of Storage Target to which this model is applicable (only nfs3 as of this version).
   */
  targetType?: string;
}

/**
 * Optional Parameters.
 */
export interface CachesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the user-selectable properties of the new Cache. If read-only properties are
   * included, they must match the existing values of those properties.
   */
  cache?: Cache;
}

/**
 * Optional Parameters.
 */
export interface CachesUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the user-selectable properties of the Cache. If read-only properties are
   * included, they must match the existing values of those properties.
   */
  cache?: Cache;
}

/**
 * Optional Parameters.
 */
export interface CachesBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the user-selectable properties of the new Cache. If read-only properties are
   * included, they must match the existing values of those properties.
   */
  cache?: Cache;
}

/**
 * Optional Parameters.
 */
export interface StorageTargetsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the definition of a Storage Target.
   */
  storagetarget?: StorageTarget;
}

/**
 * Optional Parameters.
 */
export interface StorageTargetsBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Object containing the definition of a Storage Target.
   */
  storagetarget?: StorageTarget;
}

/**
 * An interface representing StorageCacheManagementClientOptions.
 */
export interface StorageCacheManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Resource Provider operations. It contains a list of operations and
 * a URL link to get the next set of results.
 * @extends Array<ApiOperation>
 */
export interface ApiOperationListResult extends Array<ApiOperation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * The response from the List Cache SKUs operation.
 * @extends Array<ResourceSku>
 */
export interface ResourceSkusResult extends Array<ResourceSku> {
  /**
   * The URI to fetch the next page of Cache SKUs.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of Cache usage models.
 * @extends Array<UsageModel>
 */
export interface UsageModelsResult extends Array<UsageModel> {
  /**
   * The URI to fetch the next page of Cache usage models.
   */
  nextLink?: string;
}

/**
 * @interface
 * Result of the request to list Caches. It contains a list of Caches and a URL link to get the
 * next set of results.
 * @extends Array<Cache>
 */
export interface CachesListResult extends Array<Cache> {
  /**
   * URL to get the next set of Cache list results, if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of Storage Targets.
 * @extends Array<StorageTarget>
 */
export interface StorageTargetsResult extends Array<StorageTarget> {
  /**
   * The URI to fetch the next page of Storage Targets.
   */
  nextLink?: string;
}

/**
 * Defines values for CacheIdentityType.
 * Possible values include: 'SystemAssigned', 'None'
 * @readonly
 * @enum {string}
 */
export type CacheIdentityType = 'SystemAssigned' | 'None';

/**
 * Defines values for HealthStateType.
 * Possible values include: 'Unknown', 'Healthy', 'Degraded', 'Down', 'Transitioning', 'Stopping',
 * 'Stopped', 'Upgrading', 'Flushing'
 * @readonly
 * @enum {string}
 */
export type HealthStateType = 'Unknown' | 'Healthy' | 'Degraded' | 'Down' | 'Transitioning' | 'Stopping' | 'Stopped' | 'Upgrading' | 'Flushing';

/**
 * Defines values for ProvisioningStateType.
 * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Creating', 'Deleting', 'Updating'
 * @readonly
 * @enum {string}
 */
export type ProvisioningStateType = 'Succeeded' | 'Failed' | 'Cancelled' | 'Creating' | 'Deleting' | 'Updating';

/**
 * Defines values for FirmwareStatusType.
 * Possible values include: 'available', 'unavailable'
 * @readonly
 * @enum {string}
 */
export type FirmwareStatusType = 'available' | 'unavailable';

/**
 * Defines values for StorageTargetType.
 * Possible values include: 'nfs3', 'clfs', 'unknown'
 * @readonly
 * @enum {string}
 */
export type StorageTargetType = 'nfs3' | 'clfs' | 'unknown';

/**
 * Defines values for ReasonCode.
 * Possible values include: 'QuotaId', 'NotAvailableForSubscription'
 * @readonly
 * @enum {string}
 */
export type ReasonCode = 'QuotaId' | 'NotAvailableForSubscription';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ApiOperationListResult & {
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
      parsedBody: ApiOperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ApiOperationListResult & {
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
      parsedBody: ApiOperationListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SkusListResponse = ResourceSkusResult & {
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
export type SkusListNextResponse = ResourceSkusResult & {
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
export type UsageModelsListResponse = UsageModelsResult & {
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
      parsedBody: UsageModelsResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type UsageModelsListNextResponse = UsageModelsResult & {
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
      parsedBody: UsageModelsResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AscOperationsGetResponse = AscOperation & {
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
      parsedBody: AscOperation;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CachesListResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type CachesListByResourceGroupResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type CachesDeleteMethodResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CachesGetResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type CachesCreateOrUpdateResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the update operation.
 */
export type CachesUpdateResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the flush operation.
 */
export type CachesFlushResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the start operation.
 */
export type CachesStartResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the stop operation.
 */
export type CachesStopResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the upgradeFirmware operation.
 */
export type CachesUpgradeFirmwareResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the beginDeleteMethod operation.
 */
export type CachesBeginDeleteMethodResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type CachesBeginCreateOrUpdateResponse = Cache & {
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
      parsedBody: Cache;
    };
};

/**
 * Contains response data for the beginFlush operation.
 */
export type CachesBeginFlushResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the beginStart operation.
 */
export type CachesBeginStartResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the beginStop operation.
 */
export type CachesBeginStopResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the beginUpgradeFirmware operation.
 */
export type CachesBeginUpgradeFirmwareResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CachesListNextResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type CachesListByResourceGroupNextResponse = CachesListResult & {
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
      parsedBody: CachesListResult;
    };
};

/**
 * Contains response data for the listByCache operation.
 */
export type StorageTargetsListByCacheResponse = StorageTargetsResult & {
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
      parsedBody: StorageTargetsResult;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type StorageTargetsDeleteMethodResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the get operation.
 */
export type StorageTargetsGetResponse = StorageTarget & {
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
      parsedBody: StorageTarget;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type StorageTargetsCreateOrUpdateResponse = StorageTarget & {
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
      parsedBody: StorageTarget;
    };
};

/**
 * Contains response data for the beginDeleteMethod operation.
 */
export type StorageTargetsBeginDeleteMethodResponse = {
  /**
   * The parsed response body.
   */
  body: any;

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
      parsedBody: any;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type StorageTargetsBeginCreateOrUpdateResponse = StorageTarget & {
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
      parsedBody: StorageTarget;
    };
};

/**
 * Contains response data for the listByCacheNext operation.
 */
export type StorageTargetsListByCacheNextResponse = StorageTargetsResult & {
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
      parsedBody: StorageTargetsResult;
    };
};

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
 * Check Name Availability Request
 */
export interface CheckNameAvailabilityRequest {
  /**
   * Resource Name To Verify
   */
  name: string;
  /**
   * Fully qualified resource type which includes provider namespace
   */
  type: string;
}

/**
 * Check Name Availability Response
 */
export interface CheckNameAvailabilityResponse {
  /**
   * if name Available
   */
  nameAvailable: boolean;
  /**
   * Resource Name To Verify. Possible values include: 'Invalid', 'AlreadyExists'
   */
  reason?: NameUnavailableReason;
  /**
   * detail message
   */
  message?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.ResourceProvider
   */
  provider: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation: string;
  /**
   * Description of operation
   */
  description: string;
}

/**
 * Specifications of the Log for Azure Monitoring
 */
export interface LogSpecification {
  /**
   * Name of the log
   */
  name?: string;
  /**
   * Localized friendly display name of the log
   */
  displayName?: string;
  /**
   * Blob duration of the log
   */
  blobDuration?: string;
}

/**
 * Specifications of the Dimension of metrics
 */
export interface MetricDimension {
  /**
   * Name of the dimension
   */
  name?: string;
  /**
   * Localized friendly display name of the dimension
   */
  displayName?: string;
  /**
   * Internal name of the dimension.
   */
  internalName?: string;
}

/**
 * Specifications of the Metrics for Azure Monitoring
 */
export interface MetricSpecification {
  /**
   * Name of the metric
   */
  name?: string;
  /**
   * Localized friendly display name of the metric
   */
  displayName?: string;
  /**
   * Localized friendly description of the metric
   */
  displayDescription?: string;
  /**
   * Unit that makes sense for the metric
   */
  unit?: string;
  /**
   * Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count.
   */
  aggregationType?: string;
  /**
   * Internal metric name.
   */
  internalMetricName?: string;
  /**
   * Dimensions of the metric
   */
  dimensions?: MetricDimension[];
}

/**
 * Service specification payload
 */
export interface ServiceSpecification {
  /**
   * Specifications of the Log for Azure Monitoring
   */
  logSpecifications?: LogSpecification[];
  /**
   * Specifications of the Metrics for Azure Monitoring
   */
  metricSpecifications?: MetricSpecification[];
}

/**
 * Operation properties.
 */
export interface OperationProperties {
  /**
   * Service specification.
   */
  serviceSpecification?: ServiceSpecification;
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
  /**
   * Whether or not this is a data plane operation
   */
  isDataAction?: boolean;
  /**
   * The origin
   */
  origin?: string;
  /**
   * Properties of the operation
   */
  properties?: OperationProperties;
}

/**
 * Identity for the resource.
 */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The identity type. Possible values include: 'SystemAssigned'
   */
  type?: ResourceIdentityType;
}

/**
 * The resource model definition representing SKU
 */
export interface Sku {
  /**
   * The name of the SKU. Ex - P3. It is typically a letter+number code
   */
  name: string;
  /**
   * This field is required to be implemented by the Resource Provider if the service has more than
   * one tier, but is not required on a PUT. Possible values include: 'Free', 'Basic', 'Standard',
   * 'Premium'
   */
  tier?: SkuTier;
  /**
   * The SKU size. When the name field is the combination of tier and some other value, this would
   * be the standalone code.
   */
  size?: string;
  /**
   * If the service has different generations of hardware, for the same SKU, then that can be
   * captured here.
   */
  family?: string;
  /**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in
   * is not possible for the resource this may be omitted.
   */
  capacity?: number;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemData {
  /**
   * The identity that created the resource.
   */
  createdBy?: string;
  /**
   * The type of identity that created the resource. Possible values include: 'User',
   * 'Application', 'ManagedIdentity', 'Key'
   */
  createdByType?: CreatedByType;
  /**
   * The timestamp of resource creation (UTC).
   */
  createdAt?: Date;
  /**
   * The identity that last modified the resource.
   */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource. Possible values include: 'User',
   * 'Application', 'ManagedIdentity', 'Key'
   */
  lastModifiedByType?: CreatedByType;
  /**
   * The timestamp of resource last modification (UTC)
   */
  lastModifiedAt?: Date;
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
 * SpatialAnchorsAccount Response.
 */
export interface SpatialAnchorsAccount extends TrackedResource {
  /**
   * The name of the storage account associated with this accountId
   */
  storageAccountName?: string;
  /**
   * unique id of certain account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly accountId?: string;
  /**
   * Correspond domain name of certain Spatial Anchors Account
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly accountDomain?: string;
  /**
   * The identity associated with this account
   */
  identity?: Identity;
  /**
   * The plan associated with this account
   */
  plan?: Identity;
  /**
   * The sku associated with this account
   */
  sku?: Sku;
  /**
   * The kind of account, if supported
   */
  kind?: Sku;
  /**
   * System metadata for this account
   */
  systemData?: SystemData;
}

/**
 * An interface representing ResourceModelWithAllowedPropertySetIdentity.
 */
export interface ResourceModelWithAllowedPropertySetIdentity extends Identity {
}

/**
 * An interface representing ResourceModelWithAllowedPropertySetSku.
 */
export interface ResourceModelWithAllowedPropertySetSku extends Sku {
}

/**
 * Plan for the resource.
 */
export interface Plan {
  /**
   * A user defined name of the 3rd Party Artifact that is being procured.
   */
  name: string;
  /**
   * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
   */
  publisher: string;
  /**
   * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID
   * specified for the artifact at the time of Data Market onboarding.
   */
  product: string;
  /**
   * A publisher provided promotion code as provisioned in Data Market for the said
   * product/artifact.
   */
  promotionCode?: string;
  /**
   * The version of the desired product/artifact.
   */
  version?: string;
}

/**
 * An interface representing ResourceModelWithAllowedPropertySetPlan.
 */
export interface ResourceModelWithAllowedPropertySetPlan extends Plan {
}

/**
 * The resource model definition containing the full set of allowed properties for a resource.
 * Except properties bag, there cannot be a top level property outside of this set.
 */
export interface ResourceModelWithAllowedPropertySet extends BaseResource {
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
  /**
   * The geo-location where the resource lives
   */
  location?: string;
  /**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this
   * resource is managed by another Azure resource. If this is present, complete mode deployment
   * will not delete the resource if it is removed from the template since it is managed by another
   * resource.
   */
  managedBy?: string;
  /**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the
   * same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource
   * provider must validate and persist this value.
   */
  kind?: string;
  /**
   * The etag field is *not* required. If it is provided in the response body, it must also be
   * provided as a header per the normal etag convention.  Entity tags are used for comparing two
   * or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag
   * (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range
   * (section 14.27) header fields.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  identity?: ResourceModelWithAllowedPropertySetIdentity;
  sku?: ResourceModelWithAllowedPropertySetSku;
  plan?: ResourceModelWithAllowedPropertySetPlan;
}

/**
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
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
 * Developer Keys of account
 */
export interface AccountKeys {
  /**
   * value of primary key.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly primaryKey?: string;
  /**
   * value of secondary key.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly secondaryKey?: string;
}

/**
 * Request for account key regeneration
 */
export interface AccountKeyRegenerateRequest {
  /**
   * Serial of key to be regenerated. Default value: 1.
   */
  serial?: number;
}

/**
 * RemoteRenderingAccount Response.
 */
export interface RemoteRenderingAccount extends TrackedResource {
  /**
   * The name of the storage account associated with this accountId
   */
  storageAccountName?: string;
  /**
   * unique id of certain account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly accountId?: string;
  /**
   * Correspond domain name of certain Spatial Anchors Account
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly accountDomain?: string;
  /**
   * The identity associated with this account
   */
  identity?: Identity;
  /**
   * The plan associated with this account
   */
  plan?: Identity;
  /**
   * The sku associated with this account
   */
  sku?: Sku;
  /**
   * The kind of account, if supported
   */
  kind?: Sku;
  /**
   * System metadata for this account
   */
  systemData?: SystemData;
}

/**
 * An interface representing ObjectAnchorsAccountIdentity.
 */
export interface ObjectAnchorsAccountIdentity extends Identity {
}

/**
 * ObjectAnchorsAccount Response.
 */
export interface ObjectAnchorsAccount extends TrackedResource {
  identity?: ObjectAnchorsAccountIdentity;
  /**
   * The name of the storage account associated with this accountId
   */
  storageAccountName?: string;
  /**
   * unique id of certain account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly accountId?: string;
  /**
   * Correspond domain name of certain Spatial Anchors Account
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly accountDomain?: string;
  /**
   * The system metadata related to an object anchors account.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
}

/**
 * An interface representing MixedRealityClientOptions.
 */
export interface MixedRealityClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Resource Provider operations. It contains a list of operations and
 * a URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationPage extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * Result of the request to get resource collection. It contains a list of resources and a URL link
 * to get the next set of results.
 * @extends Array<SpatialAnchorsAccount>
 */
export interface SpatialAnchorsAccountPage extends Array<SpatialAnchorsAccount> {
  /**
   * URL to get the next set of resource list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * Result of the request to get resource collection. It contains a list of resources and a URL link
 * to get the next set of results.
 * @extends Array<RemoteRenderingAccount>
 */
export interface RemoteRenderingAccountPage extends Array<RemoteRenderingAccount> {
  /**
   * URL to get the next set of resource list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * Result of the request to get resource collection. It contains a list of resources and a URL link
 * to get the next set of results.
 * @extends Array<ObjectAnchorsAccount>
 */
export interface ObjectAnchorsAccountPage extends Array<ObjectAnchorsAccount> {
  /**
   * URL to get the next set of resource list results if there are any.
   */
  nextLink?: string;
}

/**
 * Defines values for NameUnavailableReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type NameUnavailableReason = 'Invalid' | 'AlreadyExists';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'SystemAssigned';

/**
 * Defines values for SkuTier.
 * Possible values include: 'Free', 'Basic', 'Standard', 'Premium'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Free' | 'Basic' | 'Standard' | 'Premium';

/**
 * Defines values for CreatedByType.
 * Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
 * @readonly
 * @enum {string}
 */
export type CreatedByType = 'User' | 'Application' | 'ManagedIdentity' | 'Key';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationPage & {
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
      parsedBody: OperationPage;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationPage & {
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
      parsedBody: OperationPage;
    };
};

/**
 * Contains response data for the checkNameAvailabilityLocal operation.
 */
export type CheckNameAvailabilityLocalResponse = CheckNameAvailabilityResponse & {
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
      parsedBody: CheckNameAvailabilityResponse;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type SpatialAnchorsAccountsListBySubscriptionResponse = SpatialAnchorsAccountPage & {
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
      parsedBody: SpatialAnchorsAccountPage;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SpatialAnchorsAccountsListByResourceGroupResponse = SpatialAnchorsAccountPage & {
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
      parsedBody: SpatialAnchorsAccountPage;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SpatialAnchorsAccountsGetResponse = SpatialAnchorsAccount & {
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
      parsedBody: SpatialAnchorsAccount;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SpatialAnchorsAccountsUpdateResponse = SpatialAnchorsAccount & {
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
      parsedBody: SpatialAnchorsAccount;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SpatialAnchorsAccountsCreateResponse = SpatialAnchorsAccount & {
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
      parsedBody: SpatialAnchorsAccount;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type SpatialAnchorsAccountsListKeysResponse = AccountKeys & {
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
      parsedBody: AccountKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type SpatialAnchorsAccountsRegenerateKeysResponse = AccountKeys & {
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
      parsedBody: AccountKeys;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type SpatialAnchorsAccountsListBySubscriptionNextResponse = SpatialAnchorsAccountPage & {
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
      parsedBody: SpatialAnchorsAccountPage;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SpatialAnchorsAccountsListByResourceGroupNextResponse = SpatialAnchorsAccountPage & {
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
      parsedBody: SpatialAnchorsAccountPage;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type RemoteRenderingAccountsListBySubscriptionResponse = RemoteRenderingAccountPage & {
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
      parsedBody: RemoteRenderingAccountPage;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type RemoteRenderingAccountsListByResourceGroupResponse = RemoteRenderingAccountPage & {
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
      parsedBody: RemoteRenderingAccountPage;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RemoteRenderingAccountsGetResponse = RemoteRenderingAccount & {
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
      parsedBody: RemoteRenderingAccount;
    };
};

/**
 * Contains response data for the update operation.
 */
export type RemoteRenderingAccountsUpdateResponse = RemoteRenderingAccount & {
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
      parsedBody: RemoteRenderingAccount;
    };
};

/**
 * Contains response data for the create operation.
 */
export type RemoteRenderingAccountsCreateResponse = RemoteRenderingAccount & {
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
      parsedBody: RemoteRenderingAccount;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type RemoteRenderingAccountsListKeysResponse = AccountKeys & {
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
      parsedBody: AccountKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type RemoteRenderingAccountsRegenerateKeysResponse = AccountKeys & {
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
      parsedBody: AccountKeys;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type RemoteRenderingAccountsListBySubscriptionNextResponse = RemoteRenderingAccountPage & {
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
      parsedBody: RemoteRenderingAccountPage;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type RemoteRenderingAccountsListByResourceGroupNextResponse = RemoteRenderingAccountPage & {
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
      parsedBody: RemoteRenderingAccountPage;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ObjectAnchorsAccountsListBySubscriptionResponse = ObjectAnchorsAccountPage & {
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
      parsedBody: ObjectAnchorsAccountPage;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ObjectAnchorsAccountsListByResourceGroupResponse = ObjectAnchorsAccountPage & {
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
      parsedBody: ObjectAnchorsAccountPage;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ObjectAnchorsAccountsGetResponse = ObjectAnchorsAccount & {
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
      parsedBody: ObjectAnchorsAccount;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ObjectAnchorsAccountsUpdateResponse = ObjectAnchorsAccount & {
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
      parsedBody: ObjectAnchorsAccount;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ObjectAnchorsAccountsCreateResponse = ObjectAnchorsAccount & {
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
      parsedBody: ObjectAnchorsAccount;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type ObjectAnchorsAccountsListKeysResponse = AccountKeys & {
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
      parsedBody: AccountKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type ObjectAnchorsAccountsRegenerateKeysResponse = AccountKeys & {
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
      parsedBody: AccountKeys;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type ObjectAnchorsAccountsListBySubscriptionNextResponse = ObjectAnchorsAccountPage & {
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
      parsedBody: ObjectAnchorsAccountPage;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ObjectAnchorsAccountsListByResourceGroupNextResponse = ObjectAnchorsAccountPage & {
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
      parsedBody: ObjectAnchorsAccountPage;
    };
};

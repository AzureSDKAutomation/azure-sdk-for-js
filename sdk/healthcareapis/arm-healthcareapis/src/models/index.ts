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
 * An access policy entry.
 */
export interface ServiceAccessPolicyEntry {
  /**
   * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
   */
  objectId: string;
}

/**
 * The settings for the Cosmos DB database backing the service.
 */
export interface ServiceCosmosDbConfigurationInfo {
  /**
   * The provisioned throughput for the backing database.
   */
  offerThroughput?: number;
  /**
   * The URI of the customer-managed key for the backing database.
   */
  keyVaultKeyUri?: string;
}

/**
 * Authentication configuration information
 */
export interface ServiceAuthenticationConfigurationInfo {
  /**
   * The authority url for the service
   */
  authority?: string;
  /**
   * The audience url for the service
   */
  audience?: string;
  /**
   * If the SMART on FHIR proxy is enabled
   */
  smartProxyEnabled?: boolean;
}

/**
 * The settings for the CORS configuration of the service instance.
 */
export interface ServiceCorsConfigurationInfo {
  /**
   * The origins to be allowed via CORS.
   */
  origins?: string[];
  /**
   * The headers to be allowed via CORS.
   */
  headers?: string[];
  /**
   * The methods to be allowed via CORS.
   */
  methods?: string[];
  /**
   * The max age to be allowed via CORS.
   */
  maxAge?: number;
  /**
   * If credentials are allowed via CORS.
   */
  allowCredentials?: boolean;
}

/**
 * Export operation configuration information
 */
export interface ServiceExportConfigurationInfo {
  /**
   * The name of the default export storage account.
   */
  storageAccountName?: string;
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
   * service. Possible values include: 'Pending', 'Approved', 'Rejected'
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
 * An interface representing Resource.
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource. Ex -
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
   * The type of the resource. Ex- Microsoft.Compute/virtualMachines or
   * Microsoft.Storage/storageAccounts.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnection extends Resource {
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
   * The provisioning state of the private endpoint connection resource. Possible values include:
   * 'Succeeded', 'Creating', 'Deleting', 'Failed'
   */
  provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/**
 * The properties of a service instance.
 */
export interface ServicesProperties {
  /**
   * The provisioning state. Possible values include: 'Deleting', 'Succeeded', 'Creating',
   * 'Accepted', 'Verifying', 'Updating', 'Failed', 'Canceled', 'Deprovisioned'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The access policies of the service instance.
   */
  accessPolicies?: ServiceAccessPolicyEntry[];
  /**
   * The settings for the Cosmos DB database backing the service.
   */
  cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;
  /**
   * The authentication configuration for the service instance.
   */
  authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;
  /**
   * The settings for the CORS configuration of the service instance.
   */
  corsConfiguration?: ServiceCorsConfigurationInfo;
  /**
   * The settings for the export operation of the service instance.
   */
  exportConfiguration?: ServiceExportConfigurationInfo;
  /**
   * The list of private endpoint connections that are set up for this resource.
   */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * Control permission for data plane traffic coming from public networks while private endpoint
   * is enabled. Possible values include: 'Enabled', 'Disabled'
   */
  publicNetworkAccess?: PublicNetworkAccess;
}

/**
 * The common properties of a service.
 */
export interface ServicesResource extends BaseResource {
  /**
   * The resource identifier.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The kind of the service. Possible values include: 'fhir', 'fhir-Stu3', 'fhir-R4'
   */
  kind: Kind;
  /**
   * The resource location.
   */
  location: string;
  /**
   * The resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * An etag associated with the resource, used for optimistic concurrency when editing it.
   */
  etag?: string;
  /**
   * Setting indicating whether the service has a managed identity associated with it.
   */
  identity?: ServicesResourceIdentity;
}

/**
 * The description of the service.
 */
export interface ServicesDescription extends ServicesResource {
  /**
   * The common properties of a service.
   */
  properties?: ServicesProperties;
}

/**
 * The description of the service.
 */
export interface ServicesPatchDescription {
  /**
   * Instance tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * Control permission for data plane traffic coming from public networks while private endpoint
   * is enabled. Possible values include: 'Enabled', 'Disabled'
   */
  publicNetworkAccess?: PublicNetworkAccess;
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 */
export interface ServicesResourceIdentity {
  /**
   * The principal ID of the resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * Type of identity being specified, currently SystemAssigned and None are allowed. Possible
   * values include: 'SystemAssigned', 'None'
   */
  type?: ManagedServiceIdentityType;
}

/**
 * Error details.
 */
export interface ErrorDetailsInternal {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
}

/**
 * Error details.
 */
export interface ErrorDetails {
  /**
   * Object containing error details.
   */
  error?: ErrorDetailsInternal;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.HealthcareApis
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Resource Type: Services
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * Name of the operation
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * Friendly description for the operation,
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
}

/**
 * Service REST API operation.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Default value is 'user,system'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly origin?: string;
  /**
   * The information displayed about the operation.
   */
  display?: OperationDisplay;
}

/**
 * Input values.
 */
export interface CheckNameAvailabilityParameters {
  /**
   * The name of the service instance to check.
   */
  name: string;
  /**
   * The fully qualified resource type which includes provider namespace.
   */
  type: string;
}

/**
 * The properties indicating whether a given service name is available.
 */
export interface ServicesNameAvailabilityInfo {
  /**
   * The value which indicates whether the provided name is available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason for unavailability. Possible values include: 'Invalid', 'AlreadyExists'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly reason?: ServiceNameUnavailabilityReason;
  /**
   * The detailed reason message.
   */
  message?: string;
}

/**
 * The properties indicating the operation result of an operation on a service.
 */
export interface OperationResultsDescription {
  /**
   * The ID of the operation returned.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the operation result.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The status of the operation being performed. Possible values include: 'Canceled', 'Succeeded',
   * 'Failed', 'Requested', 'Running'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: OperationResultStatus;
  /**
   * The time that the operation was started.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startTime?: string;
  /**
   * Additional properties of the operation result.
   */
  properties?: any;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
 */
export interface ProxyResource extends Resource {
}

/**
 * The resource model definition for a ARM tracked top level resource
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
 * The resource model definition for a Azure Resource Manager resource with an etag.
 */
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
}

/**
 * A private link resource
 */
export interface PrivateLinkResource extends Resource {
  /**
   * The private link resource group id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly groupId?: string;
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
 * A list of private link resources
 */
export interface PrivateLinkResourceListResult {
  /**
   * Array of private link resources
   */
  value?: PrivateLinkResource[];
}

/**
 * An interface representing HealthcareApisManagementClientOptions.
 */
export interface HealthcareApisManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * A list of service description objects with a next link.
 * @extends Array<ServicesDescription>
 */
export interface ServicesDescriptionListResult extends Array<ServicesDescription> {
  /**
   * The link used to get the next page of service description objects.
   */
  nextLink?: string;
}

/**
 * @interface
 * A list of service operations. It contains a list of operations and a URL link to get the next
 * set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * The link used to get the next page of service description objects.
   */
  nextLink?: string;
}

/**
 * @interface
 * List of private endpoint connection associated with the specified storage account
 * @extends Array<PrivateEndpointConnection>
 */
export interface PrivateEndpointConnectionListResult extends Array<PrivateEndpointConnection> {
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Deleting', 'Succeeded', 'Creating', 'Accepted', 'Verifying',
 * 'Updating', 'Failed', 'Canceled', 'Deprovisioned'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Deleting' | 'Succeeded' | 'Creating' | 'Accepted' | 'Verifying' | 'Updating' | 'Failed' | 'Canceled' | 'Deprovisioned';

/**
 * Defines values for PrivateEndpointServiceConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointServiceConnectionStatus = 'Pending' | 'Approved' | 'Rejected';

/**
 * Defines values for PrivateEndpointConnectionProvisioningState.
 * Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Failed'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointConnectionProvisioningState = 'Succeeded' | 'Creating' | 'Deleting' | 'Failed';

/**
 * Defines values for PublicNetworkAccess.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type PublicNetworkAccess = 'Enabled' | 'Disabled';

/**
 * Defines values for Kind.
 * Possible values include: 'fhir', 'fhir-Stu3', 'fhir-R4'
 * @readonly
 * @enum {string}
 */
export type Kind = 'fhir' | 'fhir-Stu3' | 'fhir-R4';

/**
 * Defines values for ManagedServiceIdentityType.
 * Possible values include: 'SystemAssigned', 'None'
 * @readonly
 * @enum {string}
 */
export type ManagedServiceIdentityType = 'SystemAssigned' | 'None';

/**
 * Defines values for ServiceNameUnavailabilityReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type ServiceNameUnavailabilityReason = 'Invalid' | 'AlreadyExists';

/**
 * Defines values for OperationResultStatus.
 * Possible values include: 'Canceled', 'Succeeded', 'Failed', 'Requested', 'Running'
 * @readonly
 * @enum {string}
 */
export type OperationResultStatus = 'Canceled' | 'Succeeded' | 'Failed' | 'Requested' | 'Running';

/**
 * Contains response data for the get operation.
 */
export type ServicesGetResponse = ServicesDescription & {
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
      parsedBody: ServicesDescription;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ServicesCreateOrUpdateResponse = ServicesDescription & {
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
      parsedBody: ServicesDescription;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ServicesUpdateResponse = ServicesDescription & {
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
      parsedBody: ServicesDescription;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServicesListResponse = ServicesDescriptionListResult & {
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
      parsedBody: ServicesDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ServicesListByResourceGroupResponse = ServicesDescriptionListResult & {
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
      parsedBody: ServicesDescriptionListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type ServicesCheckNameAvailabilityResponse = ServicesNameAvailabilityInfo & {
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
      parsedBody: ServicesNameAvailabilityInfo;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ServicesBeginCreateOrUpdateResponse = ServicesDescription & {
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
      parsedBody: ServicesDescription;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ServicesBeginUpdateResponse = ServicesDescription & {
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
      parsedBody: ServicesDescription;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ServicesListNextResponse = ServicesDescriptionListResult & {
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
      parsedBody: ServicesDescriptionListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ServicesListByResourceGroupNextResponse = ServicesDescriptionListResult & {
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
      parsedBody: ServicesDescriptionListResult;
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

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
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

/**
 * Contains response data for the get operation.
 */
export type OperationResultsGetResponse = {
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
 * Contains response data for the listByService operation.
 */
export type PrivateEndpointConnectionsListByServiceResponse = PrivateEndpointConnectionListResult & {
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
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type PrivateEndpointConnectionsBeginCreateOrUpdateResponse = PrivateEndpointConnection & {
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
 * Contains response data for the listByService operation.
 */
export type PrivateLinkResourcesListByServiceResponse = PrivateLinkResourceListResult & {
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

/**
 * Contains response data for the get operation.
 */
export type PrivateLinkResourcesGetResponse = PrivateLinkResource & {
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
      parsedBody: PrivateLinkResource;
    };
};

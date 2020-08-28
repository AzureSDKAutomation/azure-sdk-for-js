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
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Consumption.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed: UsageDetail, etc.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
}

/**
 * A Consumption REST API operation.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Represents the SKU name and Azure pricing tier for Analysis Services resource.
 */
export interface ResourceSku {
  /**
   * Name of the SKU level.
   */
  name: string;
  /**
   * The name of the Azure pricing tier to which the SKU applies. Possible values include:
   * 'Development', 'Basic', 'Standard'
   */
  tier?: SkuTier;
  /**
   * The number of instances in the read only query pool. Default value: 1.
   */
  capacity?: number;
}

/**
 * Represents an instance of an Analysis Services resource.
 */
export interface Resource extends BaseResource {
  /**
   * An identifier that represents the Analysis Services resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the Analysis Services resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the Analysis Services resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Location of the Analysis Services resource.
   */
  location: string;
  /**
   * The SKU of the Analysis Services resource.
   */
  sku: ResourceSku;
  /**
   * Key-value pairs of additional resource provisioning properties.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Represents an instance of an Analysis Services resource.
 */
export interface AnalysisServicesServer extends Resource {
  /**
   * A collection of AS server administrators
   */
  asAdministrators?: ServerAdministrators;
  /**
   * The SAS container URI to the backup container.
   */
  backupBlobContainerUri?: string;
  /**
   * The gateway details configured for the AS server.
   */
  gatewayDetails?: GatewayDetails;
  /**
   * The firewall settings for the AS server.
   */
  ipV4FirewallSettings?: IPv4FirewallSettings;
  /**
   * How the read-write server's participation in the query pool is controlled.<br/>It can have the
   * following values: <ul><li>readOnly - indicates that the read-write server is intended not to
   * participate in query operations</li><li>all - indicates that the read-write server can
   * participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in
   * error. Possible values include: 'All', 'ReadOnly'. Default value: 'All'.
   */
  querypoolConnectionMode?: ConnectionMode;
  /**
   * The current state of Analysis Services resource. The state is to indicate more states outside
   * of resource provisioning. Possible values include: 'Deleting', 'Succeeded', 'Failed',
   * 'Paused', 'Suspended', 'Provisioning', 'Updating', 'Suspending', 'Pausing', 'Resuming',
   * 'Preparing', 'Scaling'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly state?: State;
  /**
   * The current deployment state of Analysis Services resource. The provisioningState is to
   * indicate states for resource provisioning. Possible values include: 'Deleting', 'Succeeded',
   * 'Failed', 'Paused', 'Suspended', 'Provisioning', 'Updating', 'Suspending', 'Pausing',
   * 'Resuming', 'Preparing', 'Scaling'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The full name of the Analysis Services resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serverFullName?: string;
}

/**
 * An array of administrator user identities.
 */
export interface ServerAdministrators {
  /**
   * An array of administrator user identities.
   */
  members?: string[];
}

/**
 * The gateway details.
 */
export interface GatewayDetails {
  /**
   * Gateway resource to be associated with the server.
   */
  gatewayResourceId?: string;
  /**
   * Gateway object id from in the DMTS cluster for the gateway resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly gatewayObjectId?: string;
  /**
   * Uri of the DMTS cluster.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly dmtsClusterUri?: string;
}

/**
 * The detail of firewall rule.
 */
export interface IPv4FirewallRule {
  /**
   * The rule name.
   */
  firewallRuleName?: string;
  /**
   * The start range of IPv4.
   */
  rangeStart?: string;
  /**
   * The end range of IPv4.
   */
  rangeEnd?: string;
}

/**
 * An array of firewall rules.
 */
export interface IPv4FirewallSettings {
  /**
   * An array of firewall rules.
   */
  firewallRules?: IPv4FirewallRule[];
  /**
   * The indicator of enabling PBI service.
   */
  enablePowerBIService?: boolean;
}

/**
 * Provision request specification
 */
export interface AnalysisServicesServerUpdateParameters {
  /**
   * The SKU of the Analysis Services resource.
   */
  sku?: ResourceSku;
  /**
   * Key-value pairs of additional provisioning properties.
   */
  tags?: { [propertyName: string]: string };
  /**
   * A collection of AS server administrators
   */
  asAdministrators?: ServerAdministrators;
  /**
   * The SAS container URI to the backup container.
   */
  backupBlobContainerUri?: string;
  /**
   * The gateway details configured for the AS server.
   */
  gatewayDetails?: GatewayDetails;
  /**
   * The firewall settings for the AS server.
   */
  ipV4FirewallSettings?: IPv4FirewallSettings;
  /**
   * How the read-write server's participation in the query pool is controlled.<br/>It can have the
   * following values: <ul><li>readOnly - indicates that the read-write server is intended not to
   * participate in query operations</li><li>all - indicates that the read-write server can
   * participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in
   * error. Possible values include: 'All', 'ReadOnly'. Default value: 'All'.
   */
  querypoolConnectionMode?: ConnectionMode;
}

/**
 * Status of gateway is live.
 */
export interface GatewayListStatusLive {
  /**
   * Live message of list gateway. Possible values include: 'Live'
   */
  status?: Status;
}

/**
 * Detail of gateway errors.
 */
export interface GatewayError {
  /**
   * Error code of list gateway.
   */
  code?: string;
  /**
   * Error message of list gateway.
   */
  message?: string;
}

/**
 * Status of gateway is error.
 */
export interface GatewayListStatusError {
  /**
   * Error of the list gateway status.
   */
  error?: GatewayError;
}

/**
 * Details of server name request body.
 */
export interface CheckServerNameAvailabilityParameters {
  /**
   * Name for checking availability.
   */
  name?: string;
  /**
   * The resource type of azure analysis services. Default value:
   * 'Microsoft.AnalysisServices/servers'.
   */
  type?: string;
}

/**
 * The checking result of server name availability.
 */
export interface CheckServerNameAvailabilityResult {
  /**
   * Indicator of available of the server name.
   */
  nameAvailable?: boolean;
  /**
   * The reason of unavailability.
   */
  reason?: string;
  /**
   * The detailed message of the request unavailability.
   */
  message?: string;
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
export interface OperationStatus {
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
 * An object that represents enumerating SKUs for new resources.
 */
export interface SkuEnumerationForNewResourceResult {
  /**
   * The collection of available SKUs for new resources.
   */
  value?: ResourceSku[];
}

/**
 * An object that represents SKU details for existing resources.
 */
export interface SkuDetailsForExistingResource {
  /**
   * The SKU in SKU details for existing resources.
   */
  sku?: ResourceSku;
}

/**
 * An object that represents enumerating SKUs for existing resources.
 */
export interface SkuEnumerationForExistingResourceResult {
  /**
   * The collection of available SKUs for existing resources.
   */
  value?: SkuDetailsForExistingResource[];
}

/**
 * An interface representing AnalysisServicesManagementClientOptions.
 */
export interface AnalysisServicesManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * An array of Analysis Services resources.
 * @extends Array<AnalysisServicesServer>
 */
export interface AnalysisServicesServers extends Array<AnalysisServicesServer> {
}

/**
 * @interface
 * Result of listing consumption operations. It contains a list of operations and a URL link to get
 * the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for SkuTier.
 * Possible values include: 'Development', 'Basic', 'Standard'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Development' | 'Basic' | 'Standard';

/**
 * Defines values for State.
 * Possible values include: 'Deleting', 'Succeeded', 'Failed', 'Paused', 'Suspended',
 * 'Provisioning', 'Updating', 'Suspending', 'Pausing', 'Resuming', 'Preparing', 'Scaling'
 * @readonly
 * @enum {string}
 */
export type State = 'Deleting' | 'Succeeded' | 'Failed' | 'Paused' | 'Suspended' | 'Provisioning' | 'Updating' | 'Suspending' | 'Pausing' | 'Resuming' | 'Preparing' | 'Scaling';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Deleting', 'Succeeded', 'Failed', 'Paused', 'Suspended',
 * 'Provisioning', 'Updating', 'Suspending', 'Pausing', 'Resuming', 'Preparing', 'Scaling'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Deleting' | 'Succeeded' | 'Failed' | 'Paused' | 'Suspended' | 'Provisioning' | 'Updating' | 'Suspending' | 'Pausing' | 'Resuming' | 'Preparing' | 'Scaling';

/**
 * Defines values for ConnectionMode.
 * Possible values include: 'All', 'ReadOnly'
 * @readonly
 * @enum {string}
 */
export type ConnectionMode = 'All' | 'ReadOnly';

/**
 * Defines values for Status.
 * Possible values include: 'Live'
 * @readonly
 * @enum {string}
 */
export type Status = 'Live';

/**
 * Contains response data for the getDetails operation.
 */
export type ServersGetDetailsResponse = AnalysisServicesServer & {
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
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ServersCreateResponse = AnalysisServicesServer & {
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
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ServersUpdateResponse = AnalysisServicesServer & {
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
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ServersListByResourceGroupResponse = AnalysisServicesServers & {
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
      parsedBody: AnalysisServicesServers;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServersListResponse = AnalysisServicesServers & {
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
      parsedBody: AnalysisServicesServers;
    };
};

/**
 * Contains response data for the listSkusForNew operation.
 */
export type ServersListSkusForNewResponse = SkuEnumerationForNewResourceResult & {
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
      parsedBody: SkuEnumerationForNewResourceResult;
    };
};

/**
 * Contains response data for the listSkusForExisting operation.
 */
export type ServersListSkusForExistingResponse = SkuEnumerationForExistingResourceResult & {
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
      parsedBody: SkuEnumerationForExistingResourceResult;
    };
};

/**
 * Contains response data for the listGatewayStatus operation.
 */
export type ServersListGatewayStatusResponse = GatewayListStatusLive & {
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
      parsedBody: GatewayListStatusLive;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type ServersCheckNameAvailabilityResponse = CheckServerNameAvailabilityResult & {
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
      parsedBody: CheckServerNameAvailabilityResult;
    };
};

/**
 * Contains response data for the listOperationStatuses operation.
 */
export type ServersListOperationStatusesResponse = OperationStatus & {
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
      parsedBody: OperationStatus;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ServersBeginCreateResponse = AnalysisServicesServer & {
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
      parsedBody: AnalysisServicesServer;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ServersBeginUpdateResponse = AnalysisServicesServer & {
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
      parsedBody: AnalysisServicesServer;
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

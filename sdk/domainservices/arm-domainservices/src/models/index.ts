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
 * The Resource model definition.
 */
export interface Resource extends BaseResource {
  /**
   * Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * Resource etag
   */
  etag?: string;
}

/**
 * Secure LDAP Settings
 */
export interface LdapsSettings {
  /**
   * A flag to determine whether or not Secure LDAP is enabled or disabled. Possible values
   * include: 'Enabled', 'Disabled'
   */
  ldaps?: Ldaps;
  /**
   * The certificate required to configure Secure LDAP. The parameter passed here should be a
   * base64encoded representation of the certificate pfx file.
   */
  pfxCertificate?: string;
  /**
   * The password to decrypt the provided Secure LDAP certificate pfx file.
   */
  pfxCertificatePassword?: string;
  /**
   * Public certificate used to configure secure ldap.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly publicCertificate?: string;
  /**
   * Thumbprint of configure ldaps certificate.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly certificateThumbprint?: string;
  /**
   * NotAfter DateTime of configure ldaps certificate.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly certificateNotAfter?: Date;
  /**
   * A flag to determine whether or not Secure LDAP access over the internet is enabled or
   * disabled. Possible values include: 'Enabled', 'Disabled'
   */
  externalAccess?: ExternalAccess;
  /**
   * External access ip address.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly externalAccessIpAddress?: string;
}

/**
 * Domain Security Settings
 */
export interface DomainSecuritySettings {
  /**
   * A flag to determine whether or not NtlmV1 is enabled or disabled. Possible values include:
   * 'Enabled', 'Disabled'
   */
  ntlmV1?: NtlmV1;
  /**
   * A flag to determine whether or not TlsV1 is enabled or disabled. Possible values include:
   * 'Enabled', 'Disabled'
   */
  tlsV1?: TlsV1;
  /**
   * A flag to determine whether or not SyncNtlmPasswords is enabled or disabled. Possible values
   * include: 'Enabled', 'Disabled'
   */
  syncNtlmPasswords?: SyncNtlmPasswords;
  /**
   * A flag to determine whether or not SyncKerberosPasswords is enabled or disabled. Possible
   * values include: 'Enabled', 'Disabled'
   */
  syncKerberosPasswords?: SyncKerberosPasswords;
  /**
   * A flag to determine whether or not SyncOnPremPasswords is enabled or disabled. Possible values
   * include: 'Enabled', 'Disabled'
   */
  syncOnPremPasswords?: SyncOnPremPasswords;
}

/**
 * Forest Trust Setting
 */
export interface ForestTrust {
  /**
   * Trusted Domain FQDN
   */
  trustedDomainFqdn?: string;
  /**
   * Trust Direction
   */
  trustDirection?: string;
  /**
   * Friendly Name
   */
  friendlyName?: string;
  /**
   * Remote Dns ips
   */
  remoteDnsIps?: string;
  /**
   * Trust Password
   */
  trustPassword?: string;
}

/**
 * Settings for Resource Forest
 */
export interface ResourceForestSettings {
  /**
   * List of settings for Resource Forest
   */
  settings?: ForestTrust[];
  /**
   * Resource Forest
   */
  resourceForest?: string;
}

/**
 * Health Monitor Description
 */
export interface HealthMonitor {
  /**
   * Health Monitor Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Health Monitor Name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Health Monitor Details
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: string;
}

/**
 * Health Alert Description
 */
export interface HealthAlert {
  /**
   * Health Alert Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Health Alert Name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Health Alert Issue
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly issue?: string;
  /**
   * Health Alert Severity
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly severity?: string;
  /**
   * Health Alert Raised DateTime
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly raised?: Date;
  /**
   * Health Alert Last Detected DateTime
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastDetected?: Date;
  /**
   * Health Alert TSG Link
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resolutionUri?: string;
}

/**
 * Settings for notification
 */
export interface NotificationSettings {
  /**
   * Should global admins be notified. Possible values include: 'Enabled', 'Disabled'
   */
  notifyGlobalAdmins?: NotifyGlobalAdmins;
  /**
   * Should domain controller admins be notified. Possible values include: 'Enabled', 'Disabled'
   */
  notifyDcAdmins?: NotifyDcAdmins;
  /**
   * The list of additional recipients
   */
  additionalRecipients?: string[];
}

/**
 * Domain service.
 */
export interface DomainService extends Resource {
  /**
   * Data Model Version
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly version?: number;
  /**
   * Azure Active Directory Tenant Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The name of the Azure domain that the user would like to deploy Domain Services to.
   */
  domainName?: string;
  /**
   * Deployment Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deploymentId?: string;
  /**
   * Virtual network site id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vnetSiteId?: string;
  /**
   * The name of the virtual network that Domain Services will be deployed on. The id of the subnet
   * that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
   */
  subnetId?: string;
  /**
   * Secure LDAP Settings
   */
  ldapsSettings?: LdapsSettings;
  /**
   * DomainSecurity Settings
   */
  domainSecuritySettings?: DomainSecuritySettings;
  /**
   * Resource Forest Settings
   */
  resourceForestSettings?: ResourceForestSettings;
  /**
   * Domain Configuration Type
   */
  domainConfigurationType?: string;
  /**
   * Sku Type
   */
  sku?: string;
  /**
   * Last domain evaluation run DateTime
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly healthLastEvaluated?: Date;
  /**
   * List of Domain Health Monitors
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly healthMonitors?: HealthMonitor[];
  /**
   * List of Domain Health Alerts
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly healthAlerts?: HealthAlert[];
  /**
   * Notification Settings
   */
  notificationSettings?: NotificationSettings;
  /**
   * Enabled or Disabled flag to turn on Group-based filtered sync. Possible values include:
   * 'Enabled', 'Disabled'
   */
  filteredSync?: FilteredSync;
  /**
   * List of Domain Controller IP Address
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly domainControllerIpAddress?: string[];
  /**
   * Status of Domain Service instance
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serviceStatus?: string;
  /**
   * the current deployment or provisioning state, which only appears in the response.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
}

/**
 * The operation supported by Domain Services.
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
   * Service provider: Domain Services.
   */
  provider?: string;
  /**
   * Resource on which the operation is performed.
   */
  resource?: string;
}

/**
 * The operation supported by Domain Services.
 */
export interface OperationEntity {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   */
  name?: string;
  /**
   * The operation supported by Domain Services.
   */
  display?: OperationDisplayInfo;
  /**
   * The origin of the operation.
   */
  origin?: string;
}

/**
 * Detailed errors.
 */
export interface DefaultErrorResponseErrorDetailsItem {
  /**
   * Standardized string to programmatically identify the error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * Detailed error description and debugging information.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * Detailed error description and debugging information.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
}

/**
 * Error model.
 */
export interface DefaultErrorResponseError {
  /**
   * Standardized string to programmatically identify the error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * Detailed error description and debugging information.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * Detailed error description and debugging information.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
  /**
   * Error details.
   */
  details?: DefaultErrorResponseErrorDetailsItem[];
  /**
   * More information to debug error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly innererror?: string;
}

/**
 * Domain Service error response.
 */
export interface DefaultErrorResponse {
  /**
   * Error model.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly error?: DefaultErrorResponseError;
}

/**
 * Container Account Description
 */
export interface ContainerAccount {
  /**
   * The account name
   */
  accountName?: string;
  /**
   * The account spn
   */
  spn?: string;
  /**
   * The account password
   */
  password?: string;
}

/**
 * Resource for OuContainer.
 */
export interface OuContainer extends Resource {
  /**
   * Azure Active Directory tenant id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The domain name of Domain Services.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly domainName?: string;
  /**
   * The Deployment id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deploymentId?: string;
  /**
   * The OuContainer name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly containerId?: string;
  /**
   * The list of container accounts
   */
  accounts?: ContainerAccount[];
  /**
   * Status of OuContainer instance
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serviceStatus?: string;
  /**
   * Distinguished Name of OuContainer instance
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly distinguishedName?: string;
  /**
   * The current deployment or provisioning state, which only appears in the response.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: string;
}

/**
 * An interface representing DomainservicesManagementClientOptions.
 */
export interface DomainservicesManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The list of domain service operation response.
 * @extends Array<OperationEntity>
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
  /**
   * The continuation token for the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * The response from the List Domain Services operation.
 * @extends Array<DomainService>
 */
export interface DomainServiceListResult extends Array<DomainService> {
  /**
   * The continuation token for the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * The response from the List OuContainer operation.
 * @extends Array<OuContainer>
 */
export interface OuContainerListResult extends Array<OuContainer> {
  /**
   * The continuation token for the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for Ldaps.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type Ldaps = 'Enabled' | 'Disabled';

/**
 * Defines values for ExternalAccess.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type ExternalAccess = 'Enabled' | 'Disabled';

/**
 * Defines values for NtlmV1.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type NtlmV1 = 'Enabled' | 'Disabled';

/**
 * Defines values for TlsV1.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type TlsV1 = 'Enabled' | 'Disabled';

/**
 * Defines values for SyncNtlmPasswords.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type SyncNtlmPasswords = 'Enabled' | 'Disabled';

/**
 * Defines values for SyncKerberosPasswords.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type SyncKerberosPasswords = 'Enabled' | 'Disabled';

/**
 * Defines values for SyncOnPremPasswords.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type SyncOnPremPasswords = 'Enabled' | 'Disabled';

/**
 * Defines values for NotifyGlobalAdmins.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type NotifyGlobalAdmins = 'Enabled' | 'Disabled';

/**
 * Defines values for NotifyDcAdmins.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type NotifyDcAdmins = 'Enabled' | 'Disabled';

/**
 * Defines values for FilteredSync.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type FilteredSync = 'Enabled' | 'Disabled';

/**
 * Contains response data for the list operation.
 */
export type DomainServiceOperationsListResponse = OperationEntityListResult & {
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
export type DomainServiceOperationsListNextResponse = OperationEntityListResult & {
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
 * Contains response data for the list operation.
 */
export type DomainServicesListResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type DomainServicesListByResourceGroupResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DomainServicesCreateOrUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DomainServicesGetResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the update operation.
 */
export type DomainServicesUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type DomainServicesBeginCreateOrUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type DomainServicesBeginUpdateResponse = DomainService & {
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
      parsedBody: DomainService;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type DomainServicesListNextResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type DomainServicesListByResourceGroupNextResponse = DomainServiceListResult & {
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
      parsedBody: DomainServiceListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OuContainerOperationsListResponse = OperationEntityListResult & {
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
export type OuContainerOperationsListNextResponse = OperationEntityListResult & {
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
 * Contains response data for the list operation.
 */
export type OuContainerListResponse = OuContainerListResult & {
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
      parsedBody: OuContainerListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type OuContainerGetResponse = OuContainer & {
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
      parsedBody: OuContainer;
    };
};

/**
 * Contains response data for the create operation.
 */
export type OuContainerCreateResponse = OuContainer & {
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
      parsedBody: OuContainer;
    };
};

/**
 * Contains response data for the update operation.
 */
export type OuContainerUpdateResponse = OuContainer & {
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
      parsedBody: OuContainer;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type OuContainerBeginCreateResponse = OuContainer & {
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
      parsedBody: OuContainer;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type OuContainerBeginUpdateResponse = OuContainer & {
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
      parsedBody: OuContainer;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OuContainerListNextResponse = OuContainerListResult & {
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
      parsedBody: OuContainerListResult;
    };
};

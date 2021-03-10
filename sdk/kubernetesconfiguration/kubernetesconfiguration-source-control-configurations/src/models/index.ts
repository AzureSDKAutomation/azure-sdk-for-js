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
 * Sample result definition
 */
export interface Result {
  /**
   * Sample property of type string
   */
  sampleProperty?: string;
}

/**
 * Error definition.
 */
export interface ErrorDefinition {
  /**
   * Service specific error code which serves as the substatus for the HTTP error code.
   */
  code: string;
  /**
   * Description of the error.
   */
  message: string;
}

/**
 * Error response.
 */
export interface ErrorResponse {
  /**
   * Error definition.
   */
  error?: ErrorDefinition;
}

/**
 * Compliance Status details
 */
export interface ComplianceStatus {
  /**
   * The compliance state of the configuration. Possible values include: 'Pending', 'Compliant',
   * 'Noncompliant', 'Installed', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly complianceState?: ComplianceStateType;
  /**
   * Datetime the configuration was last applied.
   */
  lastConfigApplied?: Date;
  /**
   * Message from when the configuration was applied.
   */
  message?: string;
  /**
   * Level of the message. Possible values include: 'Error', 'Warning', 'Information'
   */
  messageLevel?: MessageLevelType;
}

/**
 * Properties for Helm operator.
 */
export interface HelmOperatorProperties {
  /**
   * Version of the operator Helm chart.
   */
  chartVersion?: string;
  /**
   * Values override for the operator Helm chart.
   */
  chartValues?: string;
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
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * The SourceControl Configuration object returned in Get & Put response.
 */
export interface SourceControlConfiguration extends ProxyResource {
  /**
   * Url of the SourceControl Repository.
   */
  repositoryUrl?: string;
  /**
   * The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric
   * characters, hyphen and period only. Default value: 'default'.
   */
  operatorNamespace?: string;
  /**
   * Instance name of the operator - identifying the specific configuration.
   */
  operatorInstanceName?: string;
  /**
   * Type of the operator. Possible values include: 'Flux'
   */
  operatorType?: OperatorType;
  /**
   * Any Parameters for the Operator instance in string format.
   */
  operatorParams?: string;
  /**
   * Name-value pairs of protected configuration settings for the configuration
   */
  configurationProtectedSettings?: { [propertyName: string]: string };
  /**
   * Scope at which the operator will be installed. Possible values include: 'cluster',
   * 'namespace'. Default value: 'cluster'.
   */
  operatorScope?: OperatorScopeType;
  /**
   * Public Key associated with this SourceControl configuration (either generated within the
   * cluster or provided by the user).
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly repositoryPublicKey?: string;
  /**
   * Base64-encoded known_hosts contents containing public SSH keys required to access private Git
   * instances
   */
  sshKnownHostsContents?: string;
  /**
   * Option to enable Helm Operator for this git configuration.
   */
  enableHelmOperator?: boolean;
  /**
   * Properties for Helm operator.
   */
  helmOperatorProperties?: HelmOperatorProperties;
  /**
   * The provisioning state of the resource provider. Possible values include: 'Accepted',
   * 'Deleting', 'Running', 'Succeeded', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningStateType;
  /**
   * Compliance Status of the Configuration
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly complianceStatus?: ComplianceStatus;
  /**
   * Top level metadata
   * https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
   */
  systemData?: SystemData;
}

/**
 * Display metadata associated with the operation.
 */
export interface ResourceProviderOperationDisplay {
  /**
   * Resource provider: Microsoft KubernetesConfiguration.
   */
  provider?: string;
  /**
   * Resource on which the operation is performed.
   */
  resource?: string;
  /**
   * Type of operation: get, read, delete, etc.
   */
  operation?: string;
  /**
   * Description of this operation.
   */
  description?: string;
}

/**
 * Supported operation of this resource provider.
 */
export interface ResourceProviderOperation {
  /**
   * Operation name, in format of {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * Display metadata associated with the operation.
   */
  display?: ResourceProviderOperationDisplay;
  /**
   * The flag that indicates whether the operation applies to data plane.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly isDataAction?: boolean;
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
 * An interface representing KubernetesConfigurationClientOptions.
 */
export interface KubernetesConfigurationClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Source Control Configurations.  It contains a list of
 * SourceControlConfiguration objects and a URL link to get the next set of results.
 * @extends Array<SourceControlConfiguration>
 */
export interface SourceControlConfigurationList extends Array<SourceControlConfiguration> {
  /**
   * URL to get the next set of configuration objects, if any.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * Result of the request to list operations.
 * @extends Array<ResourceProviderOperation>
 */
export interface ResourceProviderOperationList extends Array<ResourceProviderOperation> {
  /**
   * URL to the next set of results, if any.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for ComplianceStateType.
 * Possible values include: 'Pending', 'Compliant', 'Noncompliant', 'Installed', 'Failed'
 * @readonly
 * @enum {string}
 */
export type ComplianceStateType = 'Pending' | 'Compliant' | 'Noncompliant' | 'Installed' | 'Failed';

/**
 * Defines values for MessageLevelType.
 * Possible values include: 'Error', 'Warning', 'Information'
 * @readonly
 * @enum {string}
 */
export type MessageLevelType = 'Error' | 'Warning' | 'Information';

/**
 * Defines values for OperatorType.
 * Possible values include: 'Flux'
 * @readonly
 * @enum {string}
 */
export type OperatorType = 'Flux';

/**
 * Defines values for OperatorScopeType.
 * Possible values include: 'cluster', 'namespace'
 * @readonly
 * @enum {string}
 */
export type OperatorScopeType = 'cluster' | 'namespace';

/**
 * Defines values for ProvisioningStateType.
 * Possible values include: 'Accepted', 'Deleting', 'Running', 'Succeeded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type ProvisioningStateType = 'Accepted' | 'Deleting' | 'Running' | 'Succeeded' | 'Failed';

/**
 * Defines values for CreatedByType.
 * Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
 * @readonly
 * @enum {string}
 */
export type CreatedByType = 'User' | 'Application' | 'ManagedIdentity' | 'Key';

/**
 * Defines values for ClusterRp.
 * Possible values include: 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
 * @readonly
 * @enum {string}
 */
export type ClusterRp = 'Microsoft.ContainerService' | 'Microsoft.Kubernetes';

/**
 * Defines values for ClusterResourceName.
 * Possible values include: 'managedClusters', 'connectedClusters'
 * @readonly
 * @enum {string}
 */
export type ClusterResourceName = 'managedClusters' | 'connectedClusters';

/**
 * Defines values for ClusterRp1.
 * Possible values include: 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
 * @readonly
 * @enum {string}
 */
export type ClusterRp1 = 'Microsoft.ContainerService' | 'Microsoft.Kubernetes';

/**
 * Defines values for ClusterResourceName1.
 * Possible values include: 'managedClusters', 'connectedClusters'
 * @readonly
 * @enum {string}
 */
export type ClusterResourceName1 = 'managedClusters' | 'connectedClusters';

/**
 * Defines values for ClusterRp2.
 * Possible values include: 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
 * @readonly
 * @enum {string}
 */
export type ClusterRp2 = 'Microsoft.ContainerService' | 'Microsoft.Kubernetes';

/**
 * Defines values for ClusterResourceName2.
 * Possible values include: 'managedClusters', 'connectedClusters'
 * @readonly
 * @enum {string}
 */
export type ClusterResourceName2 = 'managedClusters' | 'connectedClusters';

/**
 * Defines values for ClusterRp3.
 * Possible values include: 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
 * @readonly
 * @enum {string}
 */
export type ClusterRp3 = 'Microsoft.ContainerService' | 'Microsoft.Kubernetes';

/**
 * Defines values for ClusterResourceName3.
 * Possible values include: 'managedClusters', 'connectedClusters'
 * @readonly
 * @enum {string}
 */
export type ClusterResourceName3 = 'managedClusters' | 'connectedClusters';

/**
 * Contains response data for the get operation.
 */
export type SourceControlConfigurationsGetResponse = SourceControlConfiguration & {
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
      parsedBody: SourceControlConfiguration;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type SourceControlConfigurationsCreateOrUpdateResponse = SourceControlConfiguration & {
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
      parsedBody: SourceControlConfiguration;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SourceControlConfigurationsListResponse = SourceControlConfigurationList & {
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
      parsedBody: SourceControlConfigurationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SourceControlConfigurationsListNextResponse = SourceControlConfigurationList & {
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
      parsedBody: SourceControlConfigurationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ResourceProviderOperationList & {
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
      parsedBody: ResourceProviderOperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ResourceProviderOperationList & {
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
      parsedBody: ResourceProviderOperationList;
    };
};

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
 * Contains the possible cases for ImageTemplateSource.
 */
export type ImageTemplateSourceUnion = ImageTemplateSource | ImageTemplatePlatformImageSource | ImageTemplateManagedImageSource | ImageTemplateSharedImageVersionSource;

/**
 * Describes a virtual machine image source for building, customizing and distributing
 */
export interface ImageTemplateSource {
  /**
   * Polymorphic Discriminator
   */
  type: "ImageTemplateSource";
}

/**
 * Contains the possible cases for ImageTemplateCustomizer.
 */
export type ImageTemplateCustomizerUnion = ImageTemplateCustomizer | ImageTemplateShellCustomizer | ImageTemplateRestartCustomizer | ImageTemplateWindowsUpdateCustomizer | ImageTemplatePowerShellCustomizer | ImageTemplateFileCustomizer;

/**
 * Describes a unit of image customization
 */
export interface ImageTemplateCustomizer {
  /**
   * Polymorphic Discriminator
   */
  type: "ImageTemplateCustomizer";
  /**
   * Friendly Name to provide context on what this customization step does
   */
  name?: string;
}

/**
 * Contains the possible cases for ImageTemplateDistributor.
 */
export type ImageTemplateDistributorUnion = ImageTemplateDistributor | ImageTemplateManagedImageDistributor | ImageTemplateSharedImageDistributor | ImageTemplateVhdDistributor;

/**
 * Generic distribution object
 */
export interface ImageTemplateDistributor {
  /**
   * Polymorphic Discriminator
   */
  type: "ImageTemplateDistributor";
  /**
   * The name to be used for the associated RunOutput.
   */
  runOutputName: string;
  /**
   * Tags that will be applied to the artifact once it has been created/updated by the distributor.
   */
  artifactTags?: { [propertyName: string]: string };
}

/**
 * Describes the error happened when create or update an image template
 */
export interface ProvisioningError {
  /**
   * Error code of the provisioning failure. Possible values include: 'BadSourceType',
   * 'BadPIRSource', 'BadManagedImageSource', 'BadSharedImageVersionSource', 'BadCustomizerType',
   * 'UnsupportedCustomizerType', 'NoCustomizerScript', 'BadDistributeType',
   * 'BadSharedImageDistribute', 'ServerError', 'Other'
   */
  provisioningErrorCode?: ProvisioningErrorCode;
  /**
   * Verbose error message about the provisioning failure
   */
  message?: string;
}

/**
 * Describes the latest status of running an image template
 */
export interface ImageTemplateLastRunStatus {
  /**
   * Start time of the last run (UTC)
   */
  startTime?: Date;
  /**
   * End time of the last run (UTC)
   */
  endTime?: Date;
  /**
   * State of the last run. Possible values include: 'Running', 'Canceling', 'Succeeded',
   * 'PartiallySucceeded', 'Failed', 'Canceled'
   */
  runState?: RunState;
  /**
   * Sub-state of the last run. Possible values include: 'Queued', 'Building', 'Customizing',
   * 'Distributing'
   */
  runSubState?: RunSubState;
  /**
   * Verbose information about the last run state
   */
  message?: string;
}

/**
 * Virtual Network configuration.
 */
export interface VirtualNetworkConfig {
  /**
   * Resource id of a pre-existing subnet.
   */
  subnetId?: string;
}

/**
 * Describes the virtual machine used to build, customize and capture images
 */
export interface ImageTemplateVmProfile {
  /**
   * Size of the virtual machine used to build, customize and capture images. Omit or specify empty
   * string to use the default (Standard_D1_v2). Default value: ''.
   */
  vmSize?: string;
  /**
   * Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size. Default
   * value: 0.
   */
  osDiskSizeGB?: number;
  /**
   * Optional configuration of the virtual network to use to deploy the build virtual machine in.
   * Omit if no specific virtual network needs to be used.
   */
  vnetConfig?: VirtualNetworkConfig;
}

/**
 * An interface representing ImageTemplateIdentityUserAssignedIdentitiesValue.
 */
export interface ImageTemplateIdentityUserAssignedIdentitiesValue {
  /**
   * The principal id of user assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The client id of user assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clientId?: string;
}

/**
 * Identity for the image template.
 */
export interface ImageTemplateIdentity {
  /**
   * The type of identity used for the image template. The type 'None' will remove any identities
   * from the image template. Possible values include: 'UserAssigned', 'None'
   */
  type?: ResourceIdentityType;
  /**
   * The list of user identities associated with the image template. The user identity dictionary
   * key references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
  userAssignedIdentities?: { [propertyName: string]: ImageTemplateIdentityUserAssignedIdentitiesValue };
}

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
  location: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider
 */
export interface ImageTemplate extends Resource {
  /**
   * Specifies the properties used to describe the source image.
   */
  source: ImageTemplateSourceUnion;
  /**
   * Specifies the properties used to describe the customization steps of the image, like Image
   * source etc
   */
  customize?: ImageTemplateCustomizerUnion[];
  /**
   * The distribution targets where the image output needs to go to.
   */
  distribute: ImageTemplateDistributorUnion[];
  /**
   * Provisioning state of the resource. Possible values include: 'Creating', 'Updating',
   * 'Succeeded', 'Failed', 'Deleting'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Provisioning error, if any
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningError?: ProvisioningError;
  /**
   * State of 'run' that is currently executing or was last executed.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastRunStatus?: ImageTemplateLastRunStatus;
  /**
   * Maximum duration to wait while building the image template. Omit or specify 0 to use the
   * default (4 hours). Default value: 0.
   */
  buildTimeoutInMinutes?: number;
  /**
   * Describes how virtual machine is set up to build images
   */
  vmProfile?: ImageTemplateVmProfile;
  /**
   * The identity of the image template, if configured.
   */
  identity: ImageTemplateIdentity;
}

/**
 * Purchase plan configuration for platform image.
 */
export interface PlatformImagePurchasePlan {
  /**
   * Name of the purchase plan.
   */
  planName: string;
  /**
   * Product of the purchase plan.
   */
  planProduct: string;
  /**
   * Publisher of the purchase plan.
   */
  planPublisher: string;
}

/**
 * Describes an image source from [Azure Gallery
 * Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
 */
export interface ImageTemplatePlatformImageSource {
  /**
   * Polymorphic Discriminator
   */
  type: "PlatformImage";
  /**
   * Image Publisher in [Azure Gallery
   * Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
   */
  publisher?: string;
  /**
   * Image offer from the [Azure Gallery
   * Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
   */
  offer?: string;
  /**
   * Image sku from the [Azure Gallery
   * Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
   */
  sku?: string;
  /**
   * Image version from the [Azure Gallery
   * Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest'
   * is specified here, the version is evaluated when the image build takes place, not when the
   * template is submitted. Specifying 'latest' could cause ROUNDTRIP_INCONSISTENT_PROPERTY issue
   * which will be fixed.
   */
  version?: string;
  /**
   * Optional configuration of purchase plan for platform image.
   */
  planInfo?: PlatformImagePurchasePlan;
}

/**
 * Describes an image source that is a managed image in customer subscription.
 */
export interface ImageTemplateManagedImageSource {
  /**
   * Polymorphic Discriminator
   */
  type: "ManagedImage";
  /**
   * ARM resource id of the managed image in customer subscription
   */
  imageId: string;
}

/**
 * Describes an image source that is an image version in a shared image gallery.
 */
export interface ImageTemplateSharedImageVersionSource {
  /**
   * Polymorphic Discriminator
   */
  type: "SharedImageVersion";
  /**
   * ARM resource id of the image version in the shared image gallery
   */
  imageVersionId: string;
}

/**
 * Runs a shell script during the customization phase (Linux). Corresponds to Packer shell
 * provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 */
export interface ImageTemplateShellCustomizer {
  /**
   * Polymorphic Discriminator
   */
  type: "Shell";
  /**
   * Friendly Name to provide context on what this customization step does
   */
  name?: string;
  /**
   * URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure
   * Storage, etc
   */
  scriptUri?: string;
  /**
   * SHA256 checksum of the shell script provided in the scriptUri field. Default value: ''.
   */
  sha256Checksum?: string;
  /**
   * Array of shell commands to execute
   */
  inline?: string[];
}

/**
 * Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer
 * windows-restart provisioner
 */
export interface ImageTemplateRestartCustomizer {
  /**
   * Polymorphic Discriminator
   */
  type: "WindowsRestart";
  /**
   * Friendly Name to provide context on what this customization step does
   */
  name?: string;
  /**
   * Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
   */
  restartCommand?: string;
  /**
   * Command to check if restart succeeded [Default: '']
   */
  restartCheckCommand?: string;
  /**
   * Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2
   * hours) [Default: '5m']
   */
  restartTimeout?: string;
}

/**
 * Installs Windows Updates. Corresponds to Packer Windows Update Provisioner
 * (https://github.com/rgl/packer-provisioner-windows-update)
 */
export interface ImageTemplateWindowsUpdateCustomizer {
  /**
   * Polymorphic Discriminator
   */
  type: "WindowsUpdate";
  /**
   * Friendly Name to provide context on what this customization step does
   */
  name?: string;
  /**
   * Criteria to search updates. Omit or specify empty string to use the default (search all).
   * Refer to above link for examples and detailed description of this field.
   */
  searchCriteria?: string;
  /**
   * Array of filters to select updates to apply. Omit or specify empty array to use the default
   * (no filter). Refer to above link for examples and detailed description of this field.
   */
  filters?: string[];
  /**
   * Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)
   */
  updateLimit?: number;
}

/**
 * Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner.
 * Exactly one of 'scriptUri' or 'inline' can be specified.
 */
export interface ImageTemplatePowerShellCustomizer {
  /**
   * Polymorphic Discriminator
   */
  type: "PowerShell";
  /**
   * Friendly Name to provide context on what this customization step does
   */
  name?: string;
  /**
   * URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for
   * Azure Storage, etc
   */
  scriptUri?: string;
  /**
   * SHA256 checksum of the power shell script provided in the scriptUri field above. Default
   * value: ''.
   */
  sha256Checksum?: string;
  /**
   * Array of PowerShell commands to execute
   */
  inline?: string[];
  /**
   * If specified, the PowerShell script will be run with elevated privileges. Default value:
   * false.
   */
  runElevated?: boolean;
  /**
   * If specified, the PowerShell script will be run with elevated privileges using the Local
   * System user. Can only be true when the runElevated field above is set to true. Default value:
   * false.
   */
  runAsSystem?: boolean;
  /**
   * Valid exit codes for the PowerShell script. [Default: 0]
   */
  validExitCodes?: number[];
}

/**
 * Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner
 */
export interface ImageTemplateFileCustomizer {
  /**
   * Polymorphic Discriminator
   */
  type: "File";
  /**
   * Friendly Name to provide context on what this customization step does
   */
  name?: string;
  /**
   * The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI
   * for Azure Storage, etc
   */
  sourceUri?: string;
  /**
   * SHA256 checksum of the file provided in the sourceUri field above. Default value: ''.
   */
  sha256Checksum?: string;
  /**
   * The absolute path to a file (with nested directory structures already created) where the file
   * (from sourceUri) will be uploaded to in the VM
   */
  destination?: string;
}

/**
 * Distribute as a Managed Disk Image.
 */
export interface ImageTemplateManagedImageDistributor {
  /**
   * Polymorphic Discriminator
   */
  type: "ManagedImage";
  /**
   * The name to be used for the associated RunOutput.
   */
  runOutputName: string;
  /**
   * Tags that will be applied to the artifact once it has been created/updated by the distributor.
   */
  artifactTags?: { [propertyName: string]: string };
  /**
   * Resource Id of the Managed Disk Image
   */
  imageId: string;
  /**
   * Azure location for the image, should match if image already exists
   */
  location: string;
}

/**
 * Distribute via Shared Image Gallery.
 */
export interface ImageTemplateSharedImageDistributor {
  /**
   * Polymorphic Discriminator
   */
  type: "SharedImage";
  /**
   * The name to be used for the associated RunOutput.
   */
  runOutputName: string;
  /**
   * Tags that will be applied to the artifact once it has been created/updated by the distributor.
   */
  artifactTags?: { [propertyName: string]: string };
  /**
   * Resource Id of the Shared Image Gallery image
   */
  galleryImageId: string;
  /**
   * A list of regions that the image will be replicated to
   */
  replicationRegions: string[];
  /**
   * Flag that indicates whether created image version should be excluded from latest. Omit to use
   * the default (false). Default value: false.
   */
  excludeFromLatest?: boolean;
  /**
   * Storage account type to be used to store the shared image. Omit to use the default
   * (Standard_LRS). Possible values include: 'Standard_LRS', 'Standard_ZRS'
   */
  storageAccountType?: SharedImageStorageAccountType;
}

/**
 * Distribute via VHD in a storage account.
 */
export interface ImageTemplateVhdDistributor {
  /**
   * Polymorphic Discriminator
   */
  type: "VHD";
  /**
   * The name to be used for the associated RunOutput.
   */
  runOutputName: string;
  /**
   * Tags that will be applied to the artifact once it has been created/updated by the distributor.
   */
  artifactTags?: { [propertyName: string]: string };
}

/**
 * Parameters for updating an image template.
 */
export interface ImageTemplateUpdateParameters {
  /**
   * The identity of the image template, if configured.
   */
  identity?: ImageTemplateIdentity;
  /**
   * The user-specified tags associated with the image template.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The Sub Resource model definition.
 */
export interface SubResource {
  /**
   * Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   */
  name: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * Represents an output that was created by running an image template.
 */
export interface RunOutput extends SubResource {
  /**
   * The resource id of the artifact.
   */
  artifactId?: string;
  /**
   * The location URI of the artifact.
   */
  artifactUri?: string;
  /**
   * Provisioning state of the resource. Possible values include: 'Creating', 'Updating',
   * 'Succeeded', 'Failed', 'Deleting'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
}

/**
 * An interface representing OperationDisplay.
 * @summary The object that describes the operation.
 */
export interface OperationDisplay {
  /**
   * Friendly name of the resource provider.
   */
  provider?: string;
  /**
   * The operation type. For example: read, write, delete, or listKeys/action
   */
  operation?: string;
  /**
   * The resource type on which the operation is performed.
   */
  resource?: string;
  /**
   * The friendly name of the operation.
   */
  description?: string;
}

/**
 * An interface representing Operation.
 * @summary A REST API operation
 */
export interface Operation {
  /**
   * The operation name. This is of the format {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that describes the operation.
   */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation.
   */
  origin?: string;
  /**
   * Properties of the operation.
   */
  properties?: any;
  /**
   * The flag that indicates whether the operation applies to data plane.
   */
  isDataAction?: boolean;
}

/**
 * Api error base.
 */
export interface ApiErrorBase {
  /**
   * The error code.
   */
  code?: string;
  /**
   * The target of the particular error.
   */
  target?: string;
  /**
   * The error message.
   */
  message?: string;
}

/**
 * Inner error details.
 */
export interface InnerError {
  /**
   * The exception type.
   */
  exceptionType?: string;
  /**
   * The internal error message or exception dump.
   */
  errorDetail?: string;
}

/**
 * Api error.
 */
export interface ApiError {
  /**
   * The Api error details
   */
  details?: ApiErrorBase[];
  /**
   * The Api inner error
   */
  innerError?: InnerError;
  /**
   * The error code.
   */
  code?: string;
  /**
   * The target of the particular error.
   */
  target?: string;
  /**
   * The error message.
   */
  message?: string;
}

/**
 * An interface representing ImageBuilderClientOptions.
 */
export interface ImageBuilderClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The result of List image templates operation
 * @extends Array<ImageTemplate>
 */
export interface ImageTemplateListResult extends Array<ImageTemplate> {
  /**
   * The continuation token.
   */
  nextLink?: string;
}

/**
 * @interface
 * The result of List run outputs operation
 * @extends Array<RunOutput>
 */
export interface RunOutputCollection extends Array<RunOutput> {
  /**
   * The continuation token.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the OperationListResult.
 * @summary Result of the request to list REST API operations. It contains a list of operations and
 * a URL nextLink to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'Updating', 'Succeeded', 'Failed', 'Deleting'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Creating' | 'Updating' | 'Succeeded' | 'Failed' | 'Deleting';

/**
 * Defines values for ProvisioningErrorCode.
 * Possible values include: 'BadSourceType', 'BadPIRSource', 'BadManagedImageSource',
 * 'BadSharedImageVersionSource', 'BadCustomizerType', 'UnsupportedCustomizerType',
 * 'NoCustomizerScript', 'BadDistributeType', 'BadSharedImageDistribute', 'ServerError', 'Other'
 * @readonly
 * @enum {string}
 */
export type ProvisioningErrorCode = 'BadSourceType' | 'BadPIRSource' | 'BadManagedImageSource' | 'BadSharedImageVersionSource' | 'BadCustomizerType' | 'UnsupportedCustomizerType' | 'NoCustomizerScript' | 'BadDistributeType' | 'BadSharedImageDistribute' | 'ServerError' | 'Other';

/**
 * Defines values for RunState.
 * Possible values include: 'Running', 'Canceling', 'Succeeded', 'PartiallySucceeded', 'Failed',
 * 'Canceled'
 * @readonly
 * @enum {string}
 */
export type RunState = 'Running' | 'Canceling' | 'Succeeded' | 'PartiallySucceeded' | 'Failed' | 'Canceled';

/**
 * Defines values for RunSubState.
 * Possible values include: 'Queued', 'Building', 'Customizing', 'Distributing'
 * @readonly
 * @enum {string}
 */
export type RunSubState = 'Queued' | 'Building' | 'Customizing' | 'Distributing';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'UserAssigned', 'None'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'UserAssigned' | 'None';

/**
 * Defines values for SharedImageStorageAccountType.
 * Possible values include: 'Standard_LRS', 'Standard_ZRS'
 * @readonly
 * @enum {string}
 */
export type SharedImageStorageAccountType = 'Standard_LRS' | 'Standard_ZRS';

/**
 * Contains response data for the list operation.
 */
export type VirtualMachineImageTemplatesListResponse = ImageTemplateListResult & {
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
      parsedBody: ImageTemplateListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type VirtualMachineImageTemplatesListByResourceGroupResponse = ImageTemplateListResult & {
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
      parsedBody: ImageTemplateListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VirtualMachineImageTemplatesCreateOrUpdateResponse = ImageTemplate & {
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
      parsedBody: ImageTemplate;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VirtualMachineImageTemplatesUpdateResponse = ImageTemplate & {
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
      parsedBody: ImageTemplate;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VirtualMachineImageTemplatesGetResponse = ImageTemplate & {
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
      parsedBody: ImageTemplate;
    };
};

/**
 * Contains response data for the listRunOutputs operation.
 */
export type VirtualMachineImageTemplatesListRunOutputsResponse = RunOutputCollection & {
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
      parsedBody: RunOutputCollection;
    };
};

/**
 * Contains response data for the getRunOutput operation.
 */
export type VirtualMachineImageTemplatesGetRunOutputResponse = RunOutput & {
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
      parsedBody: RunOutput;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type VirtualMachineImageTemplatesBeginCreateOrUpdateResponse = ImageTemplate & {
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
      parsedBody: ImageTemplate;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type VirtualMachineImageTemplatesBeginUpdateResponse = ImageTemplate & {
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
      parsedBody: ImageTemplate;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type VirtualMachineImageTemplatesListNextResponse = ImageTemplateListResult & {
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
      parsedBody: ImageTemplateListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type VirtualMachineImageTemplatesListByResourceGroupNextResponse = ImageTemplateListResult & {
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
      parsedBody: ImageTemplateListResult;
    };
};

/**
 * Contains response data for the listRunOutputsNext operation.
 */
export type VirtualMachineImageTemplatesListRunOutputsNextResponse = RunOutputCollection & {
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
      parsedBody: RunOutputCollection;
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

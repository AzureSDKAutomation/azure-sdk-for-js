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
 * An interface representing ErrorResponseErrorDetailsItem.
 */
export interface ErrorResponseErrorDetailsItem {
  /**
   * Provides information about the error code.
   */
  code?: string;
  /**
   * Provides information about the error target.
   */
  target?: string;
  /**
   * Provides information about the error message.
   */
  message?: string;
}

/**
 * Response when errors occurred
 */
export interface ErrorResponse {
  /**
   * Provides information about the error code.
   */
  code?: string;
  /**
   * Provides information about the error message.
   */
  message?: string;
  /**
   * Provides information about the error target.
   */
  target?: string;
  /**
   * Describes the error details if present.
   */
  details?: ErrorResponseErrorDetailsItem[];
  /**
   * Inner error object if present.
   */
  innererror?: any;
}

/**
 * Specifies the return address information for the job.
 */
export interface ReturnAddress {
  /**
   * The name of the recipient who will receive the hard drives when they are returned.
   */
  recipientName: string;
  /**
   * The first line of the street address to use when returning the drives.
   */
  streetAddress1: string;
  /**
   * The second line of the street address to use when returning the drives.
   */
  streetAddress2?: string;
  /**
   * The city name to use when returning the drives.
   */
  city: string;
  /**
   * The state or province to use when returning the drives.
   */
  stateOrProvince?: string;
  /**
   * The postal code to use when returning the drives.
   */
  postalCode: string;
  /**
   * The country or region to use when returning the drives.
   */
  countryOrRegion: string;
  /**
   * Phone number of the recipient of the returned drives.
   */
  phone: string;
  /**
   * Email address of the recipient of the returned drives.
   */
  email: string;
}

/**
 * Specifies the return carrier and customer's account with the carrier.
 */
export interface ReturnShipping {
  /**
   * The carrier's name.
   */
  carrierName: string;
  /**
   * The customer's account number with the carrier.
   */
  carrierAccountNumber: string;
}

/**
 * Contains information about the Microsoft datacenter to which the drives should be shipped.
 */
export interface ShippingInformation {
  /**
   * The name of the recipient who will receive the hard drives when they are returned.
   */
  recipientName: string;
  /**
   * The first line of the street address to use when returning the drives.
   */
  streetAddress1: string;
  /**
   * The second line of the street address to use when returning the drives.
   */
  streetAddress2?: string;
  /**
   * The city name to use when returning the drives.
   */
  city: string;
  /**
   * The state or province to use when returning the drives.
   */
  stateOrProvince: string;
  /**
   * The postal code to use when returning the drives.
   */
  postalCode: string;
  /**
   * The country or region to use when returning the drives.
   */
  countryOrRegion: string;
  /**
   * Phone number of the recipient of the returned drives.
   */
  phone?: string;
  /**
   * Additional shipping information for customer, specific to datacenter to which customer should
   * send their disks.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly additionalInformation?: string;
}

/**
 * Contains information about the package being shipped by the customer to the Microsoft data
 * center.
 */
export interface PackageInfomation {
  /**
   * The name of the carrier that is used to ship the import or export drives.
   */
  carrierName: string;
  /**
   * The tracking number of the package.
   */
  trackingNumber: string;
  /**
   * The number of drives included in the package.
   */
  driveCount?: number;
  /**
   * The date when the package is shipped.
   */
  shipDate?: string;
}

/**
 * Provides information about the drive's status
 */
export interface DriveStatus {
  /**
   * The drive's hardware serial number, without spaces.
   */
  driveId?: string;
  /**
   * The BitLocker key used to encrypt the drive.
   */
  bitLockerKey?: string;
  /**
   * The relative path of the manifest file on the drive.
   */
  manifestFile?: string;
  /**
   * The Base16-encoded MD5 hash of the manifest file on the drive.
   */
  manifestHash?: string;
  /**
   * The drive header hash value.
   */
  driveHeaderHash?: string;
  /**
   * The drive's current state. Possible values include: 'Specified', 'Received', 'NeverReceived',
   * 'Transferring', 'Completed', 'CompletedMoreInfo', 'ShippedBack'
   */
  state?: DriveState;
  /**
   * Detailed status about the data transfer process. This field is not returned in the response
   * until the drive is in the Transferring state.
   */
  copyStatus?: string;
  /**
   * Percentage completed for the drive.
   */
  percentComplete?: number;
  /**
   * A URI that points to the blob containing the verbose log for the data transfer operation.
   */
  verboseLogUri?: string;
  /**
   * A URI that points to the blob containing the error log for the data transfer operation.
   */
  errorLogUri?: string;
  /**
   * A URI that points to the blob containing the drive manifest file.
   */
  manifestUri?: string;
  /**
   * Bytes successfully transferred for the drive.
   */
  bytesSucceeded?: number;
}

/**
 * A property containing information about the blobs to be exported for an export job. This
 * property is required for export jobs, but must not be specified for import jobs.
 */
export interface ExportModel {
  /**
   * A collection of blob-path strings.
   */
  blobPath?: string[];
  /**
   * A collection of blob-prefix strings.
   */
  blobPathPrefix?: string[];
  /**
   * The relative URI to the block blob that contains the list of blob paths or blob path prefixes
   * as defined above, beginning with the container name. If the blob is in root container, the URI
   * must begin with $root.
   */
  blobListblobPath?: string;
}

/**
 * Specifies the encryption key properties
 */
export interface EncryptionKeyDetails {
  /**
   * The type of kek encryption key. Possible values include: 'MicrosoftManaged',
   * 'CustomerManaged'. Default value: 'MicrosoftManaged'.
   */
  kekType?: KekType;
  /**
   * Specifies the url for kek encryption key.
   */
  kekUrl?: string;
  /**
   * Specifies the keyvault resource id for kek encryption key.
   */
  kekVaultResourceID?: string;
}

/**
 * Specifies the job properties
 */
export interface JobDetails {
  /**
   * The resource identifier of the storage account where data will be imported to or exported
   * from.
   */
  storageAccountId?: string;
  /**
   * The type of job
   */
  jobType?: string;
  /**
   * Specifies the return address information for the job.
   */
  returnAddress?: ReturnAddress;
  /**
   * Specifies the return carrier and customer's account with the carrier.
   */
  returnShipping?: ReturnShipping;
  /**
   * Contains information about the Microsoft datacenter to which the drives should be shipped.
   */
  shippingInformation?: ShippingInformation;
  /**
   * Contains information about the package being shipped by the customer to the Microsoft data
   * center.
   */
  deliveryPackage?: PackageInfomation;
  /**
   * Contains information about the package being shipped from the Microsoft data center to the
   * customer to return the drives. The format is the same as the deliveryPackage property above.
   * This property is not included if the drives have not yet been returned.
   */
  returnPackage?: PackageInfomation;
  /**
   * The virtual blob directory to which the copy logs and backups of drive manifest files (if
   * enabled) will be stored.
   */
  diagnosticsPath?: string;
  /**
   * Default value is Error. Indicates whether error logging or verbose logging will be enabled.
   */
  logLevel?: string;
  /**
   * Default value is false. Indicates whether the manifest files on the drives should be copied to
   * block blobs.
   */
  backupDriveManifest?: boolean;
  /**
   * Current state of the job.
   */
  state?: string;
  /**
   * Indicates whether a request has been submitted to cancel the job.
   */
  cancelRequested?: boolean;
  /**
   * Overall percentage completed for the job.
   */
  percentComplete?: number;
  /**
   * A blob path that points to a block blob containing a list of blob names that were not exported
   * due to insufficient drive space. If all blobs were exported successfully, then this element is
   * not included in the response.
   */
  incompleteBlobListUri?: string;
  /**
   * List of up to ten drives that comprise the job. The drive list is a required element for an
   * import job; it is not specified for export jobs.
   */
  driveList?: DriveStatus[];
  /**
   * A property containing information about the blobs to be exported for an export job. This
   * property is included for export jobs only.
   */
  exportProperty?: ExportModel;
  /**
   * Specifies the provisioning state of the job.
   */
  provisioningState?: string;
  /**
   * Contains information about the encryption key.
   */
  encryptionKey?: EncryptionKeyDetails;
  /**
   * Specifies the provisioning state of the job.
   */
  affinityId?: string;
}

/**
 * Put Job parameters
 */
export interface PutJobParameters {
  /**
   * Specifies the supported Azure location where the job should be created
   */
  location?: string;
  /**
   * Specifies the tags that will be assigned to the job.
   */
  tags?: any;
  /**
   * Specifies the job properties
   */
  properties?: JobDetails;
}

/**
 * Specifies the identity properties.
 */
export interface IdentityDetails {
  /**
   * The type of identity. Possible values include: 'None', 'SystemAssigned', 'UserAssigned'.
   * Default value: 'None'.
   */
  type?: Type;
  /**
   * Specifies the principal id for the identity for the job.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * Specifies the tenant id for the identity for the job.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
}

/**
 * Update Job parameters
 */
export interface UpdateJobParameters {
  /**
   * Specifies the tags that will be assigned to the job
   */
  tags?: any;
  /**
   * If specified, the value must be true. The service will attempt to cancel the job.
   */
  cancelRequested?: boolean;
  /**
   * If specified, the value must be Shipping, which tells the Import/Export service that the
   * package for the job has been shipped. The ReturnAddress and DeliveryPackage properties must
   * have been set either in this request or in a previous request, otherwise the request will
   * fail.
   */
  state?: string;
  /**
   * Specifies the return address information for the job.
   */
  returnAddress?: ReturnAddress;
  /**
   * Specifies the return carrier and customer's account with the carrier.
   */
  returnShipping?: ReturnShipping;
  /**
   * Contains information about the package being shipped by the customer to the Microsoft data
   * center.
   */
  deliveryPackage?: PackageInfomation;
  /**
   * Indicates whether error logging or verbose logging is enabled.
   */
  logLevel?: string;
  /**
   * Indicates whether the manifest files on the drives should be copied to block blobs.
   */
  backupDriveManifest?: boolean;
  /**
   * List of drives that comprise the job.
   */
  driveList?: DriveStatus[];
}

/**
 * Contains the job information.
 */
export interface JobResponse extends BaseResource {
  /**
   * Specifies the resource identifier of the job.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Specifies the name of the job.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Specifies the type of the job resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Specifies the Azure location where the job is created.
   */
  location?: string;
  /**
   * Specifies the tags that are assigned to the job.
   */
  tags?: any;
  /**
   * Specifies the job properties
   */
  properties?: JobDetails;
  /**
   * Specifies the job identity details
   */
  identity?: IdentityDetails;
}

/**
 * Describes a supported operation by the Storage Import/Export job API.
 */
export interface Operation {
  /**
   * Name of the operation.
   */
  name: string;
  /**
   * The resource provider name to which the operation belongs.
   */
  provider?: string;
  /**
   * The name of the resource to which the operation belongs.
   */
  resource?: string;
  /**
   * The display name of the operation.
   */
  operation?: string;
  /**
   * Short description of the operation.
   */
  description?: string;
}

/**
 * Provides information about an Azure data center location.
 */
export interface Location {
  /**
   * Specifies the resource identifier of the location.
   */
  id?: string;
  /**
   * Specifies the name of the location. Use List Locations to get all supported locations.
   */
  name?: string;
  /**
   * Specifies the type of the location.
   */
  type?: string;
  /**
   * The recipient name to use when shipping the drives to the Azure data center.
   */
  recipientName?: string;
  /**
   * The first line of the street address to use when shipping the drives to the Azure data center.
   */
  streetAddress1?: string;
  /**
   * The second line of the street address to use when shipping the drives to the Azure data
   * center.
   */
  streetAddress2?: string;
  /**
   * The city name to use when shipping the drives to the Azure data center.
   */
  city?: string;
  /**
   * The state or province to use when shipping the drives to the Azure data center.
   */
  stateOrProvince?: string;
  /**
   * The postal code to use when shipping the drives to the Azure data center.
   */
  postalCode?: string;
  /**
   * The country or region to use when shipping the drives to the Azure data center.
   */
  countryOrRegion?: string;
  /**
   * The phone number for the Azure data center.
   */
  phone?: string;
  /**
   * Additional shipping information for customer, specific to datacenter to which customer should
   * send their disks.
   */
  additionalShippingInformation?: string;
  /**
   * A list of carriers that are supported at this location.
   */
  supportedCarriers?: string[];
  /**
   * A list of location IDs that should be used to ship shipping drives to for jobs created against
   * the current location. If the current location is active, it will be part of the list. If it is
   * temporarily closed due to maintenance, this list may contain other locations.
   */
  alternateLocations?: string[];
}

/**
 * BitLocker recovery key or password to the specified drive
 */
export interface DriveBitLockerKey {
  /**
   * BitLocker recovery key or password
   */
  bitLockerKey?: string;
  /**
   * Drive ID
   */
  driveId?: string;
}

/**
 * Optional Parameters.
 */
export interface JobsListBySubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An integer value that specifies how many jobs at most should be returned. The value cannot
   * exceed 100.
   */
  top?: number;
  /**
   * Can be used to restrict the results to certain conditions.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface JobsListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An integer value that specifies how many jobs at most should be returned. The value cannot
   * exceed 100.
   */
  top?: number;
  /**
   * Can be used to restrict the results to certain conditions.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface JobsCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The tenant ID of the client making the request.
   */
  clientTenantId?: string;
}

/**
 * An interface representing StorageImportExportManagementClientOptions.
 */
export interface StorageImportExportManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Locations response
 * @extends Array<Location>
 */
export interface LocationsResponse extends Array<Location> {
}

/**
 * @interface
 * List jobs response
 * @extends Array<JobResponse>
 */
export interface ListJobsResponse extends Array<JobResponse> {
  /**
   * link to next batch of jobs
   */
  nextLink?: string;
}

/**
 * @interface
 * GetBitLockerKeys response
 * @extends Array<DriveBitLockerKey>
 */
export interface GetBitLockerKeysResponse extends Array<DriveBitLockerKey> {
}

/**
 * @interface
 * List operations response
 * @extends Array<Operation>
 */
export interface ListOperationsResponse extends Array<Operation> {
}

/**
 * Defines values for DriveState.
 * Possible values include: 'Specified', 'Received', 'NeverReceived', 'Transferring', 'Completed',
 * 'CompletedMoreInfo', 'ShippedBack'
 * @readonly
 * @enum {string}
 */
export type DriveState = 'Specified' | 'Received' | 'NeverReceived' | 'Transferring' | 'Completed' | 'CompletedMoreInfo' | 'ShippedBack';

/**
 * Defines values for KekType.
 * Possible values include: 'MicrosoftManaged', 'CustomerManaged'
 * @readonly
 * @enum {string}
 */
export type KekType = 'MicrosoftManaged' | 'CustomerManaged';

/**
 * Defines values for Type.
 * Possible values include: 'None', 'SystemAssigned', 'UserAssigned'
 * @readonly
 * @enum {string}
 */
export type Type = 'None' | 'SystemAssigned' | 'UserAssigned';

/**
 * Contains response data for the list operation.
 */
export type LocationsListResponse = LocationsResponse & {
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
      parsedBody: LocationsResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type LocationsGetResponse = Location & {
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
      parsedBody: Location;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type JobsListBySubscriptionResponse = ListJobsResponse & {
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
      parsedBody: ListJobsResponse;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type JobsListByResourceGroupResponse = ListJobsResponse & {
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
      parsedBody: ListJobsResponse;
    };
};

/**
 * Contains response data for the get operation.
 */
export type JobsGetResponse = JobResponse & {
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
      parsedBody: JobResponse;
    };
};

/**
 * Contains response data for the update operation.
 */
export type JobsUpdateResponse = JobResponse & {
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
      parsedBody: JobResponse;
    };
};

/**
 * Contains response data for the create operation.
 */
export type JobsCreateResponse = JobResponse & {
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
      parsedBody: JobResponse;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type JobsListBySubscriptionNextResponse = ListJobsResponse & {
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
      parsedBody: ListJobsResponse;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type JobsListByResourceGroupNextResponse = ListJobsResponse & {
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
      parsedBody: ListJobsResponse;
    };
};

/**
 * Contains response data for the list operation.
 */
export type BitLockerKeysListResponse = GetBitLockerKeysResponse & {
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
      parsedBody: GetBitLockerKeysResponse;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ListOperationsResponse & {
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
      parsedBody: ListOperationsResponse;
    };
};

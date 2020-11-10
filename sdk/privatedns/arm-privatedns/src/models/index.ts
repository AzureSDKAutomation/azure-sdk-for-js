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
 * The core properties of ARM resources
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource. Example -
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
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
   * The Azure Region where the resource lives
   */
  location?: string;
}

/**
 * Describes a Private DNS zone.
 */
export interface PrivateZone extends TrackedResource {
  /**
   * The ETag of the zone.
   */
  etag?: string;
  /**
   * The maximum number of record sets that can be created in this Private DNS zone. This is a
   * read-only property and any attempt to set this value will be ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly maxNumberOfRecordSets?: number;
  /**
   * The current number of record sets in this Private DNS zone. This is a read-only property and
   * any attempt to set this value will be ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly numberOfRecordSets?: number;
  /**
   * The maximum number of virtual networks that can be linked to this Private DNS zone. This is a
   * read-only property and any attempt to set this value will be ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly maxNumberOfVirtualNetworkLinks?: number;
  /**
   * The current number of virtual networks that are linked to this Private DNS zone. This is a
   * read-only property and any attempt to set this value will be ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly numberOfVirtualNetworkLinks?: number;
  /**
   * The maximum number of virtual networks that can be linked to this Private DNS zone with
   * registration enabled. This is a read-only property and any attempt to set this value will be
   * ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly maxNumberOfVirtualNetworkLinksWithRegistration?: number;
  /**
   * The current number of virtual networks that are linked to this Private DNS zone with
   * registration enabled. This is a read-only property and any attempt to set this value will be
   * ignored.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly numberOfVirtualNetworkLinksWithRegistration?: number;
  /**
   * The provisioning state of the resource. This is a read-only property and any attempt to set
   * this value will be ignored. Possible values include: 'Creating', 'Updating', 'Deleting',
   * 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
}

/**
 * Reference to another subresource.
 */
export interface SubResource extends BaseResource {
  /**
   * Resource ID.
   */
  id?: string;
}

/**
 * Describes a link to virtual network for a Private DNS zone.
 */
export interface VirtualNetworkLink extends TrackedResource {
  /**
   * The ETag of the virtual network link.
   */
  etag?: string;
  /**
   * The reference of the virtual network.
   */
  virtualNetwork?: SubResource;
  /**
   * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone
   * enabled?
   */
  registrationEnabled?: boolean;
  /**
   * The status of the virtual network link to the Private DNS zone. Possible values are
   * 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will
   * be ignored. Possible values include: 'InProgress', 'Completed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly virtualNetworkLinkState?: VirtualNetworkLinkState;
  /**
   * The provisioning state of the resource. This is a read-only property and any attempt to set
   * this value will be ignored. Possible values include: 'Creating', 'Updating', 'Deleting',
   * 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
}

/**
 * An A record.
 */
export interface ARecord {
  /**
   * The IPv4 address of this A record.
   */
  ipv4Address?: string;
}

/**
 * An AAAA record.
 */
export interface AaaaRecord {
  /**
   * The IPv6 address of this AAAA record.
   */
  ipv6Address?: string;
}

/**
 * A CNAME record.
 */
export interface CnameRecord {
  /**
   * The canonical name for this CNAME record.
   */
  cname?: string;
}

/**
 * An MX record.
 */
export interface MxRecord {
  /**
   * The preference value for this MX record.
   */
  preference?: number;
  /**
   * The domain name of the mail host for this MX record.
   */
  exchange?: string;
}

/**
 * A PTR record.
 */
export interface PtrRecord {
  /**
   * The PTR target domain name for this PTR record.
   */
  ptrdname?: string;
}

/**
 * An SOA record.
 */
export interface SoaRecord {
  /**
   * The domain name of the authoritative name server for this SOA record.
   */
  host?: string;
  /**
   * The email contact for this SOA record.
   */
  email?: string;
  /**
   * The serial number for this SOA record.
   */
  serialNumber?: number;
  /**
   * The refresh value for this SOA record.
   */
  refreshTime?: number;
  /**
   * The retry time for this SOA record.
   */
  retryTime?: number;
  /**
   * The expire time for this SOA record.
   */
  expireTime?: number;
  /**
   * The minimum value for this SOA record. By convention this is used to determine the negative
   * caching duration.
   */
  minimumTtl?: number;
}

/**
 * An SRV record.
 */
export interface SrvRecord {
  /**
   * The priority value for this SRV record.
   */
  priority?: number;
  /**
   * The weight value for this SRV record.
   */
  weight?: number;
  /**
   * The port value for this SRV record.
   */
  port?: number;
  /**
   * The target domain name for this SRV record.
   */
  target?: string;
}

/**
 * A TXT record.
 */
export interface TxtRecord {
  /**
   * The text value of this TXT record.
   */
  value?: string[];
}

/**
 * The resource model definition for an ARM proxy resource.
 */
export interface ProxyResource extends Resource {
}

/**
 * Describes a DNS record set (a collection of DNS records with the same name and type) in a
 * Private DNS zone.
 */
export interface RecordSet extends ProxyResource {
  /**
   * The ETag of the record set.
   */
  etag?: string;
  /**
   * The metadata attached to the record set.
   */
  metadata?: { [propertyName: string]: string };
  /**
   * The TTL (time-to-live) of the records in the record set.
   */
  ttl?: number;
  /**
   * Fully qualified domain name of the record set.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly fqdn?: string;
  /**
   * Is the record set auto-registered in the Private DNS zone through a virtual network link?
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly isAutoRegistered?: boolean;
  /**
   * The list of A records in the record set.
   */
  aRecords?: ARecord[];
  /**
   * The list of AAAA records in the record set.
   */
  aaaaRecords?: AaaaRecord[];
  /**
   * The CNAME record in the record set.
   */
  cnameRecord?: CnameRecord;
  /**
   * The list of MX records in the record set.
   */
  mxRecords?: MxRecord[];
  /**
   * The list of PTR records in the record set.
   */
  ptrRecords?: PtrRecord[];
  /**
   * The SOA record in the record set.
   */
  soaRecord?: SoaRecord;
  /**
   * The list of SRV records in the record set.
   */
  srvRecords?: SrvRecord[];
  /**
   * The list of TXT records in the record set.
   */
  txtRecords?: TxtRecord[];
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the Private DNS zone. Omit this value to always overwrite the current zone.
   * Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new Private DNS zone to be created, but to prevent updating an existing
   * zone. Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the Private DNS zone. Omit this value to always overwrite the current zone.
   * Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify
   * the last-seen ETag value to prevent accidentally deleting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the Private DNS zone. Omit this value to always overwrite the current zone.
   * Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new Private DNS zone to be created, but to prevent updating an existing
   * zone. Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesBeginUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the Private DNS zone. Omit this value to always overwrite the current zone.
   * Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesBeginDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify
   * the last-seen ETag value to prevent accidentally deleting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface PrivateZonesListByResourceGroupNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the virtual network link to the Private DNS zone. Omit this value to always
   * overwrite the current virtual network link. Specify the last-seen ETag value to prevent
   * accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new virtual network link to the Private DNS zone to be created, but to
   * prevent updating an existing link. Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the virtual network link to the Private DNS zone. Omit this value to always
   * overwrite the current virtual network link. Specify the last-seen ETag value to prevent
   * accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete
   * the current zone. Specify the last-seen ETag value to prevent accidentally deleting any
   * concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of virtual network links to return. If not specified, returns up to 100
   * virtual network links.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the virtual network link to the Private DNS zone. Omit this value to always
   * overwrite the current virtual network link. Specify the last-seen ETag value to prevent
   * accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new virtual network link to the Private DNS zone to be created, but to
   * prevent updating an existing link. Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksBeginUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the virtual network link to the Private DNS zone. Omit this value to always
   * overwrite the current virtual network link. Specify the last-seen ETag value to prevent
   * accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksBeginDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete
   * the current zone. Specify the last-seen ETag value to prevent accidentally deleting any
   * concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface VirtualNetworkLinksListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of virtual network links to return. If not specified, returns up to 100
   * virtual network links.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the record set. Omit this value to always overwrite the current record set.
   * Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
   */
  ifMatch?: string;
  /**
   * Set to '*' to allow a new record set to be created, but to prevent updating an existing record
   * set. Other values will be ignored.
   */
  ifNoneMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the record set. Omit this value to always overwrite the current record set.
   * Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The ETag of the record set. Omit this value to always delete the current record set. Specify
   * the last-seen ETag value to prevent accidentally deleting any concurrent changes.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsListByTypeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
  /**
   * The suffix label of the record set name to be used to filter the record set enumeration. If
   * this parameter is specified, the returned enumeration will only contain records that end with
   * ".<recordsetnamesuffix>".
   */
  recordsetnamesuffix?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
  /**
   * The suffix label of the record set name to be used to filter the record set enumeration. If
   * this parameter is specified, the returned enumeration will only contain records that end with
   * ".<recordsetnamesuffix>".
   */
  recordsetnamesuffix?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsListByTypeNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
  /**
   * The suffix label of the record set name to be used to filter the record set enumeration. If
   * this parameter is specified, the returned enumeration will only contain records that end with
   * ".<recordsetnamesuffix>".
   */
  recordsetnamesuffix?: string;
}

/**
 * Optional Parameters.
 */
export interface RecordSetsListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The maximum number of record sets to return. If not specified, returns up to 100 record sets.
   */
  top?: number;
  /**
   * The suffix label of the record set name to be used to filter the record set enumeration. If
   * this parameter is specified, the returned enumeration will only contain records that end with
   * ".<recordsetnamesuffix>".
   */
  recordsetnamesuffix?: string;
}

/**
 * An interface representing PrivateDnsManagementClientOptions.
 */
export interface PrivateDnsManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The response to a Private DNS zone list operation.
 * @extends Array<PrivateZone>
 */
export interface PrivateZoneListResult extends Array<PrivateZone> {
  /**
   * The continuation token for the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * The response to a list virtual network link to Private DNS zone operation.
 * @extends Array<VirtualNetworkLink>
 */
export interface VirtualNetworkLinkListResult extends Array<VirtualNetworkLink> {
  /**
   * The continuation token for the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * The response to a record set list operation.
 * @extends Array<RecordSet>
 */
export interface RecordSetListResult extends Array<RecordSet> {
  /**
   * The continuation token for the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Creating' | 'Updating' | 'Deleting' | 'Succeeded' | 'Failed' | 'Canceled';

/**
 * Defines values for VirtualNetworkLinkState.
 * Possible values include: 'InProgress', 'Completed'
 * @readonly
 * @enum {string}
 */
export type VirtualNetworkLinkState = 'InProgress' | 'Completed';

/**
 * Defines values for RecordType.
 * Possible values include: 'A', 'AAAA', 'CNAME', 'MX', 'PTR', 'SOA', 'SRV', 'TXT'
 * @readonly
 * @enum {string}
 */
export type RecordType = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'PTR' | 'SOA' | 'SRV' | 'TXT';

/**
 * Contains response data for the createOrUpdate operation.
 */
export type PrivateZonesCreateOrUpdateResponse = PrivateZone & {
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
      parsedBody: PrivateZone;
    };
};

/**
 * Contains response data for the update operation.
 */
export type PrivateZonesUpdateResponse = PrivateZone & {
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
      parsedBody: PrivateZone;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateZonesGetResponse = PrivateZone & {
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
      parsedBody: PrivateZone;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PrivateZonesListResponse = PrivateZoneListResult & {
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
      parsedBody: PrivateZoneListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type PrivateZonesListByResourceGroupResponse = PrivateZoneListResult & {
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
      parsedBody: PrivateZoneListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type PrivateZonesBeginCreateOrUpdateResponse = PrivateZone & {
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
      parsedBody: PrivateZone;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type PrivateZonesBeginUpdateResponse = PrivateZone & {
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
      parsedBody: PrivateZone;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type PrivateZonesListNextResponse = PrivateZoneListResult & {
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
      parsedBody: PrivateZoneListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type PrivateZonesListByResourceGroupNextResponse = PrivateZoneListResult & {
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
      parsedBody: PrivateZoneListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VirtualNetworkLinksCreateOrUpdateResponse = VirtualNetworkLink & {
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
      parsedBody: VirtualNetworkLink;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VirtualNetworkLinksUpdateResponse = VirtualNetworkLink & {
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
      parsedBody: VirtualNetworkLink;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VirtualNetworkLinksGetResponse = VirtualNetworkLink & {
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
      parsedBody: VirtualNetworkLink;
    };
};

/**
 * Contains response data for the list operation.
 */
export type VirtualNetworkLinksListResponse = VirtualNetworkLinkListResult & {
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
      parsedBody: VirtualNetworkLinkListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type VirtualNetworkLinksBeginCreateOrUpdateResponse = VirtualNetworkLink & {
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
      parsedBody: VirtualNetworkLink;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type VirtualNetworkLinksBeginUpdateResponse = VirtualNetworkLink & {
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
      parsedBody: VirtualNetworkLink;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type VirtualNetworkLinksListNextResponse = VirtualNetworkLinkListResult & {
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
      parsedBody: VirtualNetworkLinkListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type RecordSetsCreateOrUpdateResponse = RecordSet & {
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
      parsedBody: RecordSet;
    };
};

/**
 * Contains response data for the update operation.
 */
export type RecordSetsUpdateResponse = RecordSet & {
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
      parsedBody: RecordSet;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RecordSetsGetResponse = RecordSet & {
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
      parsedBody: RecordSet;
    };
};

/**
 * Contains response data for the listByType operation.
 */
export type RecordSetsListByTypeResponse = RecordSetListResult & {
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
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type RecordSetsListResponse = RecordSetListResult & {
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
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the listByTypeNext operation.
 */
export type RecordSetsListByTypeNextResponse = RecordSetListResult & {
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
      parsedBody: RecordSetListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type RecordSetsListNextResponse = RecordSetListResult & {
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
      parsedBody: RecordSetListResult;
    };
};

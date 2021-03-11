/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/recordSetsMappers";
import * as Parameters from "../models/parameters";
import { DnsManagementClientContext } from "../dnsManagementClientContext";

/** Class representing a RecordSets. */
export class RecordSets {
  private readonly client: DnsManagementClientContext;

  /**
   * Create a RecordSets.
   * @param {DnsManagementClientContext} client Reference to the service client.
   */
  constructor(client: DnsManagementClientContext) {
    this.client = client;
  }

  /**
   * Updates a record set within a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param parameters Parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsUpdateResponse>
   */
  update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options?: Models.RecordSetsUpdateOptionalParams): Promise<Models.RecordSetsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param parameters Parameters supplied to the Update operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param parameters Parameters supplied to the Update operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options: Models.RecordSetsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options?: Models.RecordSetsUpdateOptionalParams | msRest.ServiceCallback<Models.RecordSet>, callback?: msRest.ServiceCallback<Models.RecordSet>): Promise<Models.RecordSetsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.RecordSetsUpdateResponse>;
  }

  /**
   * Creates or updates a record set within a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be
   * updated but not created (they are created when the DNS zone is created). Possible values
   * include: 'A', 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options?: Models.RecordSetsCreateOrUpdateOptionalParams): Promise<Models.RecordSetsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be
   * updated but not created (they are created when the DNS zone is created). Possible values
   * include: 'A', 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA can be
   * updated but not created (they are created when the DNS zone is created). Possible values
   * include: 'A', 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options: Models.RecordSetsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options?: Models.RecordSetsCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.RecordSet>, callback?: msRest.ServiceCallback<Models.RecordSet>): Promise<Models.RecordSetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.RecordSetsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a record set from a DNS zone. This operation cannot be undone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   * deleted (they are deleted when the DNS zone is deleted). Possible values include: 'A', 'AAAA',
   * 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options?: Models.RecordSetsDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   * deleted (they are deleted when the DNS zone is deleted). Possible values include: 'A', 'AAAA',
   * 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Record sets of type SOA cannot be
   * deleted (they are deleted when the DNS zone is deleted). Possible values include: 'A', 'AAAA',
   * 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options: Models.RecordSetsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options?: Models.RecordSetsDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a record set.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsGetResponse>
   */
  get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options?: msRest.RequestOptionsBase): Promise<Models.RecordSetsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param callback The callback
   */
  get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param relativeRecordSetName The name of the record set, relative to the name of the zone.
   * @param recordType The type of DNS record in this record set. Possible values include: 'A',
   * 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSet>): void;
  get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecordSet>, callback?: msRest.ServiceCallback<Models.RecordSet>): Promise<Models.RecordSetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        relativeRecordSetName,
        recordType,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecordSetsGetResponse>;
  }

  /**
   * Lists the record sets of a specified type in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate. Possible values include: 'A', 'AAAA',
   * 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListByTypeResponse>
   */
  listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, options?: Models.RecordSetsListByTypeOptionalParams): Promise<Models.RecordSetsListByTypeResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate. Possible values include: 'A', 'AAAA',
   * 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param callback The callback
   */
  listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param recordType The type of record sets to enumerate. Possible values include: 'A', 'AAAA',
   * 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
   * @param options The optional parameters
   * @param callback The callback
   */
  listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, options: Models.RecordSetsListByTypeOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, options?: Models.RecordSetsListByTypeOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListByTypeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        recordType,
        options
      },
      listByTypeOperationSpec,
      callback) as Promise<Models.RecordSetsListByTypeResponse>;
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListByDnsZoneResponse>
   */
  listByDnsZone(resourceGroupName: string, zoneName: string, options?: Models.RecordSetsListByDnsZoneOptionalParams): Promise<Models.RecordSetsListByDnsZoneResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param callback The callback
   */
  listByDnsZone(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDnsZone(resourceGroupName: string, zoneName: string, options: Models.RecordSetsListByDnsZoneOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listByDnsZone(resourceGroupName: string, zoneName: string, options?: Models.RecordSetsListByDnsZoneOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListByDnsZoneResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        options
      },
      listByDnsZoneOperationSpec,
      callback) as Promise<Models.RecordSetsListByDnsZoneResponse>;
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListAllByDnsZoneResponse>
   */
  listAllByDnsZone(resourceGroupName: string, zoneName: string, options?: Models.RecordSetsListAllByDnsZoneOptionalParams): Promise<Models.RecordSetsListAllByDnsZoneResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param callback The callback
   */
  listAllByDnsZone(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllByDnsZone(resourceGroupName: string, zoneName: string, options: Models.RecordSetsListAllByDnsZoneOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listAllByDnsZone(resourceGroupName: string, zoneName: string, options?: Models.RecordSetsListAllByDnsZoneOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListAllByDnsZoneResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        options
      },
      listAllByDnsZoneOperationSpec,
      callback) as Promise<Models.RecordSetsListAllByDnsZoneResponse>;
  }

  /**
   * Lists the record sets of a specified type in a DNS zone.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListByTypeNextResponse>
   */
  listByTypeNext(nextPageLink: string, options?: Models.RecordSetsListByTypeNextOptionalParams): Promise<Models.RecordSetsListByTypeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByTypeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByTypeNext(nextPageLink: string, options: Models.RecordSetsListByTypeNextOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listByTypeNext(nextPageLink: string, options?: Models.RecordSetsListByTypeNextOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListByTypeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByTypeNextOperationSpec,
      callback) as Promise<Models.RecordSetsListByTypeNextResponse>;
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListByDnsZoneNextResponse>
   */
  listByDnsZoneNext(nextPageLink: string, options?: Models.RecordSetsListByDnsZoneNextOptionalParams): Promise<Models.RecordSetsListByDnsZoneNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDnsZoneNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDnsZoneNext(nextPageLink: string, options: Models.RecordSetsListByDnsZoneNextOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listByDnsZoneNext(nextPageLink: string, options?: Models.RecordSetsListByDnsZoneNextOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListByDnsZoneNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDnsZoneNextOperationSpec,
      callback) as Promise<Models.RecordSetsListByDnsZoneNextResponse>;
  }

  /**
   * Lists all record sets in a DNS zone.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecordSetsListAllByDnsZoneNextResponse>
   */
  listAllByDnsZoneNext(nextPageLink: string, options?: Models.RecordSetsListAllByDnsZoneNextOptionalParams): Promise<Models.RecordSetsListAllByDnsZoneNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllByDnsZoneNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllByDnsZoneNext(nextPageLink: string, options: Models.RecordSetsListAllByDnsZoneNextOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
  listAllByDnsZoneNext(nextPageLink: string, options?: Models.RecordSetsListAllByDnsZoneNextOptionalParams | msRest.ServiceCallback<Models.RecordSetListResult>, callback?: msRest.ServiceCallback<Models.RecordSetListResult>): Promise<Models.RecordSetsListAllByDnsZoneNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllByDnsZoneNextOperationSpec,
      callback) as Promise<Models.RecordSetsListAllByDnsZoneNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RecordSet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RecordSet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    201: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.relativeRecordSetName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByTypeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.recordType,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordsetnamesuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDnsZoneOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/recordsets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordsetnamesuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllByDnsZoneOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/all",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordSetNameSuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByTypeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordsetnamesuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDnsZoneNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordsetnamesuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllByDnsZoneNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.top,
    Parameters.recordSetNameSuffix,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecordSetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

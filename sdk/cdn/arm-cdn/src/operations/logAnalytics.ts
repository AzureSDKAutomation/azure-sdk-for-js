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
import * as Mappers from "../models/logAnalyticsMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";

/** Class representing a LogAnalytics. */
export class LogAnalytics {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a LogAnalytics.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Get log report for AFD profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity Possible values include: 'PT5M', 'PT1H', 'P1D'
   * @param customDomains
   * @param protocols
   * @param [options] The optional parameters
   * @returns Promise<Models.LogAnalyticsGetLogAnalyticsMetricsResponse>
   */
  getLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.LogMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.LogMetricsGranularity, customDomains: string[], protocols: string[], options?: Models.LogAnalyticsGetLogAnalyticsMetricsOptionalParams): Promise<Models.LogAnalyticsGetLogAnalyticsMetricsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity Possible values include: 'PT5M', 'PT1H', 'P1D'
   * @param customDomains
   * @param protocols
   * @param callback The callback
   */
  getLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.LogMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.LogMetricsGranularity, customDomains: string[], protocols: string[], callback: msRest.ServiceCallback<Models.MetricsResponse>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity Possible values include: 'PT5M', 'PT1H', 'P1D'
   * @param customDomains
   * @param protocols
   * @param options The optional parameters
   * @param callback The callback
   */
  getLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.LogMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.LogMetricsGranularity, customDomains: string[], protocols: string[], options: Models.LogAnalyticsGetLogAnalyticsMetricsOptionalParams, callback: msRest.ServiceCallback<Models.MetricsResponse>): void;
  getLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.LogMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.LogMetricsGranularity, customDomains: string[], protocols: string[], options?: Models.LogAnalyticsGetLogAnalyticsMetricsOptionalParams | msRest.ServiceCallback<Models.MetricsResponse>, callback?: msRest.ServiceCallback<Models.MetricsResponse>): Promise<Models.LogAnalyticsGetLogAnalyticsMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        metrics,
        dateTimeBegin,
        dateTimeEnd,
        granularity,
        customDomains,
        protocols,
        options
      },
      getLogAnalyticsMetricsOperationSpec,
      callback) as Promise<Models.LogAnalyticsGetLogAnalyticsMetricsResponse>;
  }

  /**
   * Get log analytics ranking report for AFD profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param rankings
   * @param metrics
   * @param maxRanking
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param [options] The optional parameters
   * @returns Promise<Models.LogAnalyticsGetLogAnalyticsRankingsResponse>
   */
  getLogAnalyticsRankings(resourceGroupName: string, profileName: string, rankings: Models.LogRanking[], metrics: Models.LogRankingMetric[], maxRanking: number, dateTimeBegin: Date | string, dateTimeEnd: Date | string, options?: Models.LogAnalyticsGetLogAnalyticsRankingsOptionalParams): Promise<Models.LogAnalyticsGetLogAnalyticsRankingsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param rankings
   * @param metrics
   * @param maxRanking
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param callback The callback
   */
  getLogAnalyticsRankings(resourceGroupName: string, profileName: string, rankings: Models.LogRanking[], metrics: Models.LogRankingMetric[], maxRanking: number, dateTimeBegin: Date | string, dateTimeEnd: Date | string, callback: msRest.ServiceCallback<Models.RankingsResponse>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param rankings
   * @param metrics
   * @param maxRanking
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param options The optional parameters
   * @param callback The callback
   */
  getLogAnalyticsRankings(resourceGroupName: string, profileName: string, rankings: Models.LogRanking[], metrics: Models.LogRankingMetric[], maxRanking: number, dateTimeBegin: Date | string, dateTimeEnd: Date | string, options: Models.LogAnalyticsGetLogAnalyticsRankingsOptionalParams, callback: msRest.ServiceCallback<Models.RankingsResponse>): void;
  getLogAnalyticsRankings(resourceGroupName: string, profileName: string, rankings: Models.LogRanking[], metrics: Models.LogRankingMetric[], maxRanking: number, dateTimeBegin: Date | string, dateTimeEnd: Date | string, options?: Models.LogAnalyticsGetLogAnalyticsRankingsOptionalParams | msRest.ServiceCallback<Models.RankingsResponse>, callback?: msRest.ServiceCallback<Models.RankingsResponse>): Promise<Models.LogAnalyticsGetLogAnalyticsRankingsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        rankings,
        metrics,
        maxRanking,
        dateTimeBegin,
        dateTimeEnd,
        options
      },
      getLogAnalyticsRankingsOperationSpec,
      callback) as Promise<Models.LogAnalyticsGetLogAnalyticsRankingsResponse>;
  }

  /**
   * Get all available location names for AFD log analytics report.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LogAnalyticsGetLogAnalyticsLocationsResponse>
   */
  getLogAnalyticsLocations(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.LogAnalyticsGetLogAnalyticsLocationsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param callback The callback
   */
  getLogAnalyticsLocations(resourceGroupName: string, profileName: string, callback: msRest.ServiceCallback<Models.ContinentsResponse>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  getLogAnalyticsLocations(resourceGroupName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ContinentsResponse>): void;
  getLogAnalyticsLocations(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ContinentsResponse>, callback?: msRest.ServiceCallback<Models.ContinentsResponse>): Promise<Models.LogAnalyticsGetLogAnalyticsLocationsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      getLogAnalyticsLocationsOperationSpec,
      callback) as Promise<Models.LogAnalyticsGetLogAnalyticsLocationsResponse>;
  }

  /**
   * Get all endpoints and custom domains available for AFD log report
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LogAnalyticsGetLogAnalyticsResourcesResponse>
   */
  getLogAnalyticsResources(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.LogAnalyticsGetLogAnalyticsResourcesResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param callback The callback
   */
  getLogAnalyticsResources(resourceGroupName: string, profileName: string, callback: msRest.ServiceCallback<Models.ResourcesResponse>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  getLogAnalyticsResources(resourceGroupName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourcesResponse>): void;
  getLogAnalyticsResources(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourcesResponse>, callback?: msRest.ServiceCallback<Models.ResourcesResponse>): Promise<Models.LogAnalyticsGetLogAnalyticsResourcesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      getLogAnalyticsResourcesOperationSpec,
      callback) as Promise<Models.LogAnalyticsGetLogAnalyticsResourcesResponse>;
  }

  /**
   * Get Waf related log analytics report for AFD profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity Possible values include: 'PT5M', 'PT1H', 'P1D'
   * @param [options] The optional parameters
   * @returns Promise<Models.LogAnalyticsGetWafLogAnalyticsMetricsResponse>
   */
  getWafLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.WafGranularity, options?: Models.LogAnalyticsGetWafLogAnalyticsMetricsOptionalParams): Promise<Models.LogAnalyticsGetWafLogAnalyticsMetricsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity Possible values include: 'PT5M', 'PT1H', 'P1D'
   * @param callback The callback
   */
  getWafLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.WafGranularity, callback: msRest.ServiceCallback<Models.WafMetricsResponse>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity Possible values include: 'PT5M', 'PT1H', 'P1D'
   * @param options The optional parameters
   * @param callback The callback
   */
  getWafLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.WafGranularity, options: Models.LogAnalyticsGetWafLogAnalyticsMetricsOptionalParams, callback: msRest.ServiceCallback<Models.WafMetricsResponse>): void;
  getWafLogAnalyticsMetrics(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, granularity: Models.WafGranularity, options?: Models.LogAnalyticsGetWafLogAnalyticsMetricsOptionalParams | msRest.ServiceCallback<Models.WafMetricsResponse>, callback?: msRest.ServiceCallback<Models.WafMetricsResponse>): Promise<Models.LogAnalyticsGetWafLogAnalyticsMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        metrics,
        dateTimeBegin,
        dateTimeEnd,
        granularity,
        options
      },
      getWafLogAnalyticsMetricsOperationSpec,
      callback) as Promise<Models.LogAnalyticsGetWafLogAnalyticsMetricsResponse>;
  }

  /**
   * Get WAF log analytics charts for AFD profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param maxRanking
   * @param rankings
   * @param [options] The optional parameters
   * @returns Promise<Models.LogAnalyticsGetWafLogAnalyticsRankingsResponse>
   */
  getWafLogAnalyticsRankings(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, maxRanking: number, rankings: Models.WafRankingType[], options?: Models.LogAnalyticsGetWafLogAnalyticsRankingsOptionalParams): Promise<Models.LogAnalyticsGetWafLogAnalyticsRankingsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param maxRanking
   * @param rankings
   * @param callback The callback
   */
  getWafLogAnalyticsRankings(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, maxRanking: number, rankings: Models.WafRankingType[], callback: msRest.ServiceCallback<Models.WafRankingsResponse>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param metrics
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param maxRanking
   * @param rankings
   * @param options The optional parameters
   * @param callback The callback
   */
  getWafLogAnalyticsRankings(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, maxRanking: number, rankings: Models.WafRankingType[], options: Models.LogAnalyticsGetWafLogAnalyticsRankingsOptionalParams, callback: msRest.ServiceCallback<Models.WafRankingsResponse>): void;
  getWafLogAnalyticsRankings(resourceGroupName: string, profileName: string, metrics: Models.WafMetric[], dateTimeBegin: Date | string, dateTimeEnd: Date | string, maxRanking: number, rankings: Models.WafRankingType[], options?: Models.LogAnalyticsGetWafLogAnalyticsRankingsOptionalParams | msRest.ServiceCallback<Models.WafRankingsResponse>, callback?: msRest.ServiceCallback<Models.WafRankingsResponse>): Promise<Models.LogAnalyticsGetWafLogAnalyticsRankingsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        metrics,
        dateTimeBegin,
        dateTimeEnd,
        maxRanking,
        rankings,
        options
      },
      getWafLogAnalyticsRankingsOperationSpec,
      callback) as Promise<Models.LogAnalyticsGetWafLogAnalyticsRankingsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getLogAnalyticsMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsMetrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.metrics,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.granularity,
    Parameters.groupBy,
    Parameters.continents,
    Parameters.countryOrRegions,
    Parameters.customDomains0,
    Parameters.protocols
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricsResponse
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getLogAnalyticsRankingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsRankings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.rankings,
    Parameters.metrics,
    Parameters.maxRanking,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.customDomains1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RankingsResponse
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getLogAnalyticsLocationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsLocations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ContinentsResponse
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getLogAnalyticsResourcesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsResources",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourcesResponse
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getWafLogAnalyticsMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getWafLogAnalyticsMetrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.metrics,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.granularity,
    Parameters.actions,
    Parameters.groupBy,
    Parameters.ruleTypes
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WafMetricsResponse
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

const getWafLogAnalyticsRankingsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getWafLogAnalyticsRankings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.profileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.metrics,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.maxRanking,
    Parameters.rankings,
    Parameters.actions,
    Parameters.ruleTypes
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WafRankingsResponse
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  serializer
};

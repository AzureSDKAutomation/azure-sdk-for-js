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
 * The metadata supported value detail.
 */
export interface MetadataSupportedValueDetail {
  /**
   * The id.
   */
  id?: string;
  /**
   * The display name.
   */
  displayName?: string;
}

/**
 * The metadata entity contract.
 */
export interface MetadataEntity {
  /**
   * The resource Id of the metadata entity.
   */
  id?: string;
  /**
   * The type of the metadata entity.
   */
  type?: string;
  /**
   * The name of the metadata entity.
   */
  name?: string;
  /**
   * The display name.
   */
  displayName?: string;
  /**
   * The list of keys on which this entity depends on.
   */
  dependsOn?: string[];
  /**
   * The list of scenarios applicable to this metadata entity.
   */
  applicableScenarios?: Scenario[];
  /**
   * The list of supported values.
   */
  supportedValues?: MetadataSupportedValueDetail[];
}

/**
 * Advisor Digest configuration entity
 */
export interface DigestConfig {
  /**
   * Name of digest configuration. Value is case-insensitive and must be unique within a
   * subscription.
   */
  name?: string;
  /**
   * Action group resource id used by digest.
   */
  actionGroupResourceId?: string;
  /**
   * Frequency that digest will be triggered, in days. Value must be between 7 and 30 days
   * inclusive.
   */
  frequency?: number;
  /**
   * Categories to send digest for. If categories are not provided, then digest will be sent for
   * all categories.
   */
  categories?: Category[];
  /**
   * Language for digest content body. Value must be ISO 639-1 code for one of Azure portal
   * supported languages. Otherwise, it will be converted into one. Default value is English (en).
   */
  language?: string;
  /**
   * State of digest configuration. Possible values include: 'Active', 'Disabled'
   */
  state?: DigestConfigState;
}

/**
 * An Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * The resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The Advisor configuration data structure.
 */
export interface ConfigData extends Resource {
  /**
   * Exclude the resource from Advisor evaluations. Valid values: False (default) or True.
   */
  exclude?: boolean;
  /**
   * Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for
   * subscriptions. Valid values: 5 (default), 10, 15 or 20. Possible values include: '5', '10',
   * '15', '20'
   */
  lowCpuThreshold?: CpuThreshold;
  /**
   * Advisor digest configuration. Valid only for subscriptions
   */
  digests?: DigestConfig[];
}

/**
 * ARM error response body.
 */
export interface ARMErrorResponseBody {
  /**
   * Gets or sets the string that describes the error in detail and provides debugging information.
   */
  message?: string;
  /**
   * Gets or sets the string that can be used to programmatically identify the error.
   */
  code?: string;
}

/**
 * An interface representing ArmErrorResponse.
 */
export interface ArmErrorResponse {
  error?: ARMErrorResponseBody;
}

/**
 * A summary of the recommendation.
 */
export interface ShortDescription {
  /**
   * The issue or opportunity identified by the recommendation.
   */
  problem?: string;
  /**
   * The remediation action suggested by the recommendation.
   */
  solution?: string;
}

/**
 * Recommendation resource metadata
 */
export interface ResourceMetadata {
  /**
   * Azure resource Id of the assessed resource
   */
  resourceId?: string;
  /**
   * Source from which recommendation is generated
   */
  source?: string;
  /**
   * The action to view resource.
   */
  action?: { [propertyName: string]: any };
  /**
   * The singular user friendly name of resource type. eg: virtual machine
   */
  singular?: string;
  /**
   * The plural user friendly name of resource type. eg: virtual machines
   */
  plural?: string;
}

/**
 * Advisor Recommendation.
 */
export interface ResourceRecommendationBase extends Resource {
  /**
   * The category of the recommendation. Possible values include: 'HighAvailability', 'Security',
   * 'Performance', 'Cost', 'OperationalExcellence'
   */
  category?: Category;
  /**
   * The business impact of the recommendation. Possible values include: 'High', 'Medium', 'Low'
   */
  impact?: Impact;
  /**
   * The resource type identified by Advisor.
   */
  impactedField?: string;
  /**
   * The resource identified by Advisor.
   */
  impactedValue?: string;
  /**
   * The most recent time that Advisor checked the validity of the recommendation.
   */
  lastUpdated?: Date;
  /**
   * The recommendation metadata.
   */
  metadata?: { [propertyName: string]: any };
  /**
   * The recommendation-type GUID.
   */
  recommendationTypeId?: string;
  /**
   * The potential risk of not implementing the recommendation. Possible values include: 'Error',
   * 'Warning', 'None'
   */
  risk?: Risk;
  /**
   * A summary of the recommendation.
   */
  shortDescription?: ShortDescription;
  /**
   * The list of snoozed and dismissed rules for the recommendation.
   */
  suppressionIds?: string[];
  /**
   * Extended properties
   */
  extendedProperties?: { [propertyName: string]: string };
  /**
   * Metadata of resource that was assessed
   */
  resourceMetadata?: ResourceMetadata;
  /**
   * The detailed description of recommendation.
   */
  description?: string;
  /**
   * The label of recommendation.
   */
  label?: string;
  /**
   * The link to learn more about recommendation and generation logic.
   */
  learnMoreLink?: string;
  /**
   * The potential benefit of implementing recommendation.
   */
  potentialBenefits?: string;
  /**
   * The list of recommended actions to implement recommendation.
   */
  actions?: { [propertyName: string]: any }[];
  /**
   * The automated way to apply recommendation.
   */
  remediation?: { [propertyName: string]: any };
  /**
   * The recommendation metadata properties exposed to customer to provide additional information.
   */
  exposedMetadataProperties?: { [propertyName: string]: any };
}

/**
 * The operation supported by Advisor.
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
   * Service provider: Microsoft Advisor.
   */
  provider?: string;
  /**
   * Resource on which the operation is performed.
   */
  resource?: string;
}

/**
 * The operation supported by Advisor.
 */
export interface OperationEntity {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   */
  name?: string;
  /**
   * The operation supported by Advisor.
   */
  display?: OperationDisplayInfo;
}

/**
 * The details of the snoozed or dismissed rule; for example, the duration, name, and GUID
 * associated with the rule.
 */
export interface SuppressionContract extends Resource {
  /**
   * The GUID of the suppression.
   */
  suppressionId?: string;
  /**
   * The duration for which the suppression is valid.
   */
  ttl?: string;
  /**
   * Gets or sets the expiration time stamp.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly expirationTimeStamp?: Date;
}

/**
 * Optional Parameters.
 */
export interface RecommendationsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The filter to apply to the recommendations.<br>Filter can be applied to properties
   * ['ResourceId', 'ResourceGroup', 'RecommendationTypeGuid', '[Category](#category)'] with
   * operators ['eq', 'and', 'or'].<br>Example:<br>- $filter=Category eq 'Cost' and ResourceGroup
   * eq 'MyResourceGroup'
   */
  filter?: string;
  /**
   * The number of recommendations per page if a paged version of this API is being used.
   */
  top?: number;
  /**
   * The page-continuation token to use with a paged version of this API.
   */
  skipToken?: string;
}

/**
 * Optional Parameters.
 */
export interface RecommendationsListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The filter to apply to the recommendations.<br>Filter can be applied to properties
   * ['ResourceId', 'ResourceGroup', 'RecommendationTypeGuid', '[Category](#category)'] with
   * operators ['eq', 'and', 'or'].<br>Example:<br>- $filter=Category eq 'Cost' and ResourceGroup
   * eq 'MyResourceGroup'
   */
  filter?: string;
  /**
   * The number of recommendations per page if a paged version of this API is being used.
   */
  top?: number;
  /**
   * The page-continuation token to use with a paged version of this API.
   */
  skipToken?: string;
}

/**
 * Optional Parameters.
 */
export interface SuppressionsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The number of suppressions per page if a paged version of this API is being used.
   */
  top?: number;
  /**
   * The page-continuation token to use with a paged version of this API.
   */
  skipToken?: string;
}

/**
 * Optional Parameters.
 */
export interface SuppressionsListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The number of suppressions per page if a paged version of this API is being used.
   */
  top?: number;
  /**
   * The page-continuation token to use with a paged version of this API.
   */
  skipToken?: string;
}

/**
 * An interface representing AdvisorManagementClientOptions.
 */
export interface AdvisorManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines headers for Generate operation.
 */
export interface RecommendationsGenerateHeaders {
  /**
   * The URL where the status of the asynchronous operation can be checked.
   */
  location: string;
  /**
   * The amount of delay to use while the status of the operation is checked. The value is
   * expressed in seconds.
   */
  retryAfter: string;
}

/**
 * @interface
 * The list of metadata entities
 * @extends Array<MetadataEntity>
 */
export interface MetadataEntityListResult extends Array<MetadataEntity> {
  /**
   * The link used to get the next page of metadata.
   */
  nextLink?: string;
}

/**
 * @interface
 * The list of Advisor configurations.
 * @extends Array<ConfigData>
 */
export interface ConfigurationListResult extends Array<ConfigData> {
  /**
   * The link used to get the next page of configurations.
   */
  nextLink?: string;
}

/**
 * @interface
 * The list of Advisor recommendations.
 * @extends Array<ResourceRecommendationBase>
 */
export interface ResourceRecommendationBaseListResult extends Array<ResourceRecommendationBase> {
  /**
   * The link used to get the next page of recommendations.
   */
  nextLink?: string;
}

/**
 * @interface
 * The list of Advisor operations.
 * @extends Array<OperationEntity>
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
  /**
   * The link used to get the next page of operations.
   */
  nextLink?: string;
}

/**
 * @interface
 * The list of Advisor suppressions.
 * @extends Array<SuppressionContract>
 */
export interface SuppressionContractListResult extends Array<SuppressionContract> {
  /**
   * The link used to get the next page of suppressions.
   */
  nextLink?: string;
}

/**
 * Defines values for Scenario.
 * Possible values include: 'Alerts'
 * @readonly
 * @enum {string}
 */
export type Scenario = 'Alerts';

/**
 * Defines values for CpuThreshold.
 * Possible values include: '5', '10', '15', '20'
 * @readonly
 * @enum {string}
 */
export type CpuThreshold = '5' | '10' | '15' | '20';

/**
 * Defines values for Category.
 * Possible values include: 'HighAvailability', 'Security', 'Performance', 'Cost',
 * 'OperationalExcellence'
 * @readonly
 * @enum {string}
 */
export type Category = 'HighAvailability' | 'Security' | 'Performance' | 'Cost' | 'OperationalExcellence';

/**
 * Defines values for DigestConfigState.
 * Possible values include: 'Active', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type DigestConfigState = 'Active' | 'Disabled';

/**
 * Defines values for Impact.
 * Possible values include: 'High', 'Medium', 'Low'
 * @readonly
 * @enum {string}
 */
export type Impact = 'High' | 'Medium' | 'Low';

/**
 * Defines values for Risk.
 * Possible values include: 'Error', 'Warning', 'None'
 * @readonly
 * @enum {string}
 */
export type Risk = 'Error' | 'Warning' | 'None';

/**
 * Contains response data for the get operation.
 */
export type RecommendationMetadataGetResponse = {
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
 * Contains response data for the list operation.
 */
export type RecommendationMetadataListResponse = MetadataEntityListResult & {
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
      parsedBody: MetadataEntityListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type RecommendationMetadataListNextResponse = MetadataEntityListResult & {
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
      parsedBody: MetadataEntityListResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ConfigurationsListBySubscriptionResponse = ConfigurationListResult & {
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
      parsedBody: ConfigurationListResult;
    };
};

/**
 * Contains response data for the createInSubscription operation.
 */
export type ConfigurationsCreateInSubscriptionResponse = ConfigData & {
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
      parsedBody: ConfigData;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ConfigurationsListByResourceGroupResponse = ConfigurationListResult & {
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
      parsedBody: ConfigurationListResult;
    };
};

/**
 * Contains response data for the createInResourceGroup operation.
 */
export type ConfigurationsCreateInResourceGroupResponse = ConfigData & {
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
      parsedBody: ConfigData;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type ConfigurationsListBySubscriptionNextResponse = ConfigurationListResult & {
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
      parsedBody: ConfigurationListResult;
    };
};

/**
 * Contains response data for the generate operation.
 */
export type RecommendationsGenerateResponse = RecommendationsGenerateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: RecommendationsGenerateHeaders;
    };
};

/**
 * Contains response data for the list operation.
 */
export type RecommendationsListResponse = ResourceRecommendationBaseListResult & {
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
      parsedBody: ResourceRecommendationBaseListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RecommendationsGetResponse = ResourceRecommendationBase & {
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
      parsedBody: ResourceRecommendationBase;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type RecommendationsListNextResponse = ResourceRecommendationBaseListResult & {
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
      parsedBody: ResourceRecommendationBaseListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationEntityListResult & {
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
export type OperationsListNextResponse = OperationEntityListResult & {
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
 * Contains response data for the get operation.
 */
export type SuppressionsGetResponse = {
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
 * Contains response data for the create operation.
 */
export type SuppressionsCreateResponse = {
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
 * Contains response data for the list operation.
 */
export type SuppressionsListResponse = SuppressionContractListResult & {
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
      parsedBody: SuppressionContractListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SuppressionsListNextResponse = SuppressionContractListResult & {
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
      parsedBody: SuppressionContractListResult;
    };
};

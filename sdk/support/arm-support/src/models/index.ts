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
 * The object that describes the operation.
 */
export interface OperationDisplay {
  /**
   * The description of the operation.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
  /**
   * The action that users can perform, based on their permission level.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * Service provider: Microsoft Support.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
}

/**
 * The operation supported by Microsoft Support resource provider.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The object that describes the operation.
   */
  display?: OperationDisplay;
}

/**
 * Object that represents a Service resource.
 */
export interface Service {
  /**
   * Id of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of the resource 'Microsoft.Support/services'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Localized name of the Azure service.
   */
  displayName?: string;
  /**
   * ARM Resource types.
   */
  resourceTypes?: string[];
}

/**
 * ProblemClassification resource object.
 */
export interface ProblemClassification {
  /**
   * Id of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of the resource 'Microsoft.Support/problemClassification'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Localized name of problem classification.
   */
  displayName?: string;
}

/**
 * Input of CheckNameAvailability API.
 */
export interface CheckNameAvailabilityInput {
  /**
   * The resource name to validate.
   */
  name: string;
  /**
   * The type of resource. Possible values include: 'Microsoft.Support/supportTickets',
   * 'Microsoft.Support/communications'
   */
  type: Type;
}

/**
 * Output of check name availability API.
 */
export interface CheckNameAvailabilityOutput {
  /**
   * Indicates whether the name is available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason why the name is not available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly reason?: string;
  /**
   * The detailed error message describing why the name is not available.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
}

/**
 * Contact information associated with the support ticket.
 */
export interface ContactProfile {
  /**
   * First name.
   */
  firstName: string;
  /**
   * Last name.
   */
  lastName: string;
  /**
   * Preferred contact method. Possible values include: 'email', 'phone'
   */
  preferredContactMethod: PreferredContactMethod;
  /**
   * Primary email address.
   */
  primaryEmailAddress: string;
  /**
   * Additional email addresses listed will be copied on any correspondence about the support
   * ticket.
   */
  additionalEmailAddresses?: string[];
  /**
   * Phone number. This is required if preferred contact method is phone.
   */
  phoneNumber?: string;
  /**
   * Time zone of the user. This is the name of the time zone from [Microsoft Time Zone Index
   * Values](https://support.microsoft.com/help/973627/microsoft-time-zone-index-values).
   */
  preferredTimeZone: string;
  /**
   * Country of the user. This is the ISO 3166-1 alpha-3 code.
   */
  country: string;
  /**
   * Preferred language of support from Azure. Support languages vary based on the severity you
   * choose for your support ticket. Learn more at [Azure Severity and
   * responsiveness](https://azure.microsoft.com/support/plans/response). Use the standard
   * language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es'
   * for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for
   * Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for
   * German.
   */
  preferredSupportLanguage: string;
}

/**
 * Service Level Agreement details for a support ticket.
 */
export interface ServiceLevelAgreement {
  /**
   * Time in UTC (ISO 8601 format) when the service level agreement starts.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startTime?: Date;
  /**
   * Time in UTC (ISO 8601 format) when the service level agreement expires.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly expirationTime?: Date;
  /**
   * Service Level Agreement in minutes.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly slaMinutes?: number;
}

/**
 * Support engineer information.
 */
export interface SupportEngineer {
  /**
   * Email address of the Azure Support engineer assigned to the support ticket.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly emailAddress?: string;
}

/**
 * Additional information for technical support ticket.
 */
export interface TechnicalTicketDetails {
  /**
   * This is the resource Id of the Azure service resource (For example: A virtual machine resource
   * or an HDInsight resource) for which the support ticket is created.
   */
  resourceId?: string;
}

/**
 * This property is required for providing the region and new quota limits.
 */
export interface QuotaChangeRequest {
  /**
   * Region for which the quota increase request is being made.
   */
  region?: string;
  /**
   * Payload of the quota increase request.
   */
  payload?: string;
}

/**
 * Additional set of information required for quota increase support ticket for certain quota
 * types, e.g.: Virtual machine cores. Get complete details about Quota payload support request
 * along with examples at [Support quota request](https://aka.ms/supportrpquotarequestpayload).
 */
export interface QuotaTicketDetails {
  /**
   * Required for certain quota types when there is a sub type, such as Batch, for which you are
   * requesting a quota increase.
   */
  quotaChangeRequestSubType?: string;
  /**
   * Quota change request version.
   */
  quotaChangeRequestVersion?: string;
  /**
   * This property is required for providing the region and new quota limits.
   */
  quotaChangeRequests?: QuotaChangeRequest[];
}

/**
 * Object that represents SupportTicketDetails resource.
 */
export interface SupportTicketDetails extends BaseResource {
  /**
   * Id of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of the resource 'Microsoft.Support/supportTickets'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * System generated support ticket Id that is unique.
   */
  supportTicketId?: string;
  /**
   * Detailed description of the question or issue.
   */
  description: string;
  /**
   * Each Azure service has its own set of issue categories, also known as problem classification.
   * This parameter is the unique Id for the type of problem you are experiencing.
   */
  problemClassificationId: string;
  /**
   * Localized name of problem classification.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly problemClassificationDisplayName?: string;
  /**
   * A value that indicates the urgency of the case, which in turn determines the response time
   * according to the service level agreement of the technical support plan you have with Azure.
   * Note: 'Highest critical impact', also known as the 'Emergency - Severe impact' level in the
   * Azure portal is reserved only for our Premium customers. Possible values include: 'minimal',
   * 'moderate', 'critical', 'highestcriticalimpact'
   */
  severity: SeverityLevel;
  /**
   * Enrollment Id associated with the support ticket.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly enrollmentId?: string;
  /**
   * Indicates if this requires a 24x7 response from Azure.
   */
  require24X7Response?: boolean;
  /**
   * Contact information of the user requesting to create a support ticket.
   */
  contactDetails: ContactProfile;
  /**
   * Service Level Agreement information for this support ticket.
   */
  serviceLevelAgreement?: ServiceLevelAgreement;
  /**
   * Information about the support engineer working on this support ticket.
   */
  supportEngineer?: SupportEngineer;
  /**
   * Support plan type associated with the support ticket.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly supportPlanType?: string;
  /**
   * Title of the support ticket.
   */
  title: string;
  /**
   * Time in UTC (ISO 8601 format) when the problem started.
   */
  problemStartTime?: Date;
  /**
   * This is the resource Id of the Azure service resource associated with the support ticket.
   */
  serviceId: string;
  /**
   * Localized name of the Azure service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serviceDisplayName?: string;
  /**
   * Status of the support ticket.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: string;
  /**
   * Time in UTC (ISO 8601 format) when the support ticket was created.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly createdDate?: Date;
  /**
   * Time in UTC (ISO 8601 format) when the support ticket was last modified.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly modifiedDate?: Date;
  /**
   * Additional ticket details associated with a technical support ticket request.
   */
  technicalTicketDetails?: TechnicalTicketDetails;
  /**
   * Additional ticket details associated with a quota support ticket request.
   */
  quotaTicketDetails?: QuotaTicketDetails;
}

/**
 * Object that represents a Communication resource.
 */
export interface CommunicationDetails extends BaseResource {
  /**
   * Id of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Type of the resource 'Microsoft.Support/communications'.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Communication type. Possible values include: 'web', 'phone'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly communicationType?: CommunicationType;
  /**
   * Direction of communication. Possible values include: 'inbound', 'outbound'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly communicationDirection?: CommunicationDirection;
  /**
   * Email address of the sender. This property is required if called by a service principal.
   */
  sender?: string;
  /**
   * Subject of the communication.
   */
  subject: string;
  /**
   * Body of the communication.
   */
  body: string;
  /**
   * Time in UTC (ISO 8601 format) when the communication was created.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly createdDate?: Date;
}

/**
 * The error details.
 */
export interface ServiceErrorDetail {
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
   * The target of the error.
   */
  target?: string;
}

/**
 * The API error details.
 */
export interface ServiceError {
  /**
   * The error code.
   */
  code?: string;
  /**
   * The error message.
   */
  message?: string;
  /**
   * The target of the error.
   */
  target?: string;
  /**
   * The list of error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: ServiceErrorDetail[];
}

/**
 * The API error.
 */
export interface ExceptionResponse {
  /**
   * The API error details.
   */
  error?: ServiceError;
}

/**
 * Contact information associated with the support ticket.
 */
export interface UpdateContactProfile {
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * Preferred contact method. Possible values include: 'email', 'phone'
   */
  preferredContactMethod?: PreferredContactMethod;
  /**
   * Primary email address.
   */
  primaryEmailAddress?: string;
  /**
   * Email addresses listed will be copied on any correspondence about the support ticket.
   */
  additionalEmailAddresses?: string[];
  /**
   * Phone number. This is required if preferred contact method is phone.
   */
  phoneNumber?: string;
  /**
   * Time zone of the user. This is the name of the time zone from [Microsoft Time Zone Index
   * Values](https://support.microsoft.com/help/973627/microsoft-time-zone-index-values).
   */
  preferredTimeZone?: string;
  /**
   * Country of the user. This is the ISO 3166-1 alpha-3 code.
   */
  country?: string;
  /**
   * Preferred language of support from Azure. Support languages vary based on the severity you
   * choose for your support ticket. Learn more at [Azure Severity and
   * responsiveness](https://azure.microsoft.com/support/plans/response/). Use the standard
   * language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es'
   * for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for
   * Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for
   * German.
   */
  preferredSupportLanguage?: string;
}

/**
 * Updates severity, ticket status, and contact details in the support ticket.
 */
export interface UpdateSupportTicket {
  /**
   * Severity level. Possible values include: 'minimal', 'moderate', 'critical',
   * 'highestcriticalimpact'
   */
  severity?: SeverityLevel;
  /**
   * Status to be updated on the ticket. Possible values include: 'open', 'closed'
   */
  status?: Status;
  /**
   * Contact details to be updated on the support ticket.
   */
  contactDetails?: UpdateContactProfile;
}

/**
 * Optional Parameters.
 */
export interface SupportTicketsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The number of values to return in the collection. Default is 25 and max is 100.
   */
  top?: number;
  /**
   * The filter to apply on the operation. We support 'odata v4.0' filter semantics. [Learn
   * more](https://docs.microsoft.com/odata/concepts/queryoptions-overview). _Status_ filter can
   * only be used with Equals ('eq') operator. For _CreatedDate_ filter, the supported operators
   * are Greater Than ('gt') and Greater Than or Equals ('ge'). When using both filters, combine
   * them using the logical 'AND'.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface CommunicationsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The number of values to return in the collection. Default is 10 and max is 10.
   */
  top?: number;
  /**
   * The filter to apply on the operation. You can filter by communicationType and createdDate
   * properties. CommunicationType supports Equals ('eq') operator and createdDate supports Greater
   * Than ('gt') and Greater Than or Equals ('ge') operators. You may combine the CommunicationType
   * and CreatedDate filters by Logical And ('and') operator.
   */
  filter?: string;
}

/**
 * An interface representing MicrosoftSupportOptions.
 */
export interface MicrosoftSupportOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The list of operations supported by Microsoft Support resource provider.
 * @extends Array<Operation>
 */
export interface OperationsListResult extends Array<Operation> {
}

/**
 * @interface
 * Collection of Service resources.
 * @extends Array<Service>
 */
export interface ServicesListResult extends Array<Service> {
}

/**
 * @interface
 * Collection of ProblemClassification resources.
 * @extends Array<ProblemClassification>
 */
export interface ProblemClassificationsListResult extends Array<ProblemClassification> {
}

/**
 * @interface
 * Object that represents a collection of SupportTicket resources.
 * @extends Array<SupportTicketDetails>
 */
export interface SupportTicketsListResult extends Array<SupportTicketDetails> {
  /**
   * The URI to fetch the next page of SupportTicket resources.
   */
  nextLink?: string;
}

/**
 * @interface
 * Collection of Communication resources.
 * @extends Array<CommunicationDetails>
 */
export interface CommunicationsListResult extends Array<CommunicationDetails> {
  /**
   * The URI to fetch the next page of Communication resources.
   */
  nextLink?: string;
}

/**
 * Defines values for Type.
 * Possible values include: 'Microsoft.Support/supportTickets', 'Microsoft.Support/communications'
 * @readonly
 * @enum {string}
 */
export type Type = 'Microsoft.Support/supportTickets' | 'Microsoft.Support/communications';

/**
 * Defines values for SeverityLevel.
 * Possible values include: 'minimal', 'moderate', 'critical', 'highestcriticalimpact'
 * @readonly
 * @enum {string}
 */
export type SeverityLevel = 'minimal' | 'moderate' | 'critical' | 'highestcriticalimpact';

/**
 * Defines values for PreferredContactMethod.
 * Possible values include: 'email', 'phone'
 * @readonly
 * @enum {string}
 */
export type PreferredContactMethod = 'email' | 'phone';

/**
 * Defines values for CommunicationType.
 * Possible values include: 'web', 'phone'
 * @readonly
 * @enum {string}
 */
export type CommunicationType = 'web' | 'phone';

/**
 * Defines values for CommunicationDirection.
 * Possible values include: 'inbound', 'outbound'
 * @readonly
 * @enum {string}
 */
export type CommunicationDirection = 'inbound' | 'outbound';

/**
 * Defines values for Status.
 * Possible values include: 'open', 'closed'
 * @readonly
 * @enum {string}
 */
export type Status = 'open' | 'closed';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationsListResult & {
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
      parsedBody: OperationsListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServicesListResponse = ServicesListResult & {
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
      parsedBody: ServicesListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServicesGetResponse = Service & {
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
      parsedBody: Service;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ProblemClassificationsListResponse = ProblemClassificationsListResult & {
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
      parsedBody: ProblemClassificationsListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ProblemClassificationsGetResponse = ProblemClassification & {
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
      parsedBody: ProblemClassification;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type SupportTicketsCheckNameAvailabilityResponse = CheckNameAvailabilityOutput & {
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
      parsedBody: CheckNameAvailabilityOutput;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SupportTicketsListResponse = SupportTicketsListResult & {
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
      parsedBody: SupportTicketsListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SupportTicketsGetResponse = SupportTicketDetails & {
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
      parsedBody: SupportTicketDetails;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SupportTicketsUpdateResponse = SupportTicketDetails & {
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
      parsedBody: SupportTicketDetails;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SupportTicketsCreateResponse = SupportTicketDetails & {
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
      parsedBody: SupportTicketDetails;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type SupportTicketsBeginCreateResponse = SupportTicketDetails & {
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
      parsedBody: SupportTicketDetails;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SupportTicketsListNextResponse = SupportTicketsListResult & {
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
      parsedBody: SupportTicketsListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type CommunicationsCheckNameAvailabilityResponse = CheckNameAvailabilityOutput & {
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
      parsedBody: CheckNameAvailabilityOutput;
    };
};

/**
 * Contains response data for the list operation.
 */
export type CommunicationsListResponse = CommunicationsListResult & {
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
      parsedBody: CommunicationsListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type CommunicationsGetResponse = CommunicationDetails & {
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
      parsedBody: CommunicationDetails;
    };
};

/**
 * Contains response data for the create operation.
 */
export type CommunicationsCreateResponse = CommunicationDetails & {
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
      parsedBody: CommunicationDetails;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type CommunicationsBeginCreateResponse = CommunicationDetails & {
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
      parsedBody: CommunicationDetails;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type CommunicationsListNextResponse = CommunicationsListResult & {
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
      parsedBody: CommunicationsListResult;
    };
};

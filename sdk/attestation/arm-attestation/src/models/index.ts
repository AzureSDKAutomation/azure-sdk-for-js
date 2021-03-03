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
 * Display object with properties of the operation.
 */
export interface OperationsDisplayDefinition {
  /**
   * Resource provider of the operation.
   */
  provider?: string;
  /**
   * Resource for the operation.
   */
  resource?: string;
  /**
   * Short description of the operation.
   */
  operation?: string;
  /**
   * Description of the operation.
   */
  description?: string;
}

/**
 * Definition object with the name and properties of an operation.
 */
export interface OperationsDefinition {
  /**
   * Name of the operation.
   */
  name?: string;
  /**
   * Display object with properties of the operation.
   */
  display?: OperationsDisplayDefinition;
}

/**
 * List of supported operations.
 */
export interface OperationList {
  /**
   * The system metadata relating to this resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
  /**
   * List of supported operations.
   */
  value?: OperationsDefinition[];
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
}

/**
 * A collection of information about the state of the connection between service consumer and
 * provider.
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the
   * service. Possible values include: 'Pending', 'Approved', 'Rejected'
   */
  status?: PrivateEndpointServiceConnectionStatus;
  /**
   * The reason for approval/rejection of the connection.
   */
  description?: string;
  /**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
  actionsRequired?: string;
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
 * The Private Endpoint Connection resource.
 */
export interface PrivateEndpointConnection extends Resource {
  /**
   * The resource of private end point.
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * A collection of information about the state of the connection between service consumer and
   * provider.
   */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state of the private endpoint connection resource. Possible values include:
   * 'Succeeded', 'Creating', 'Deleting', 'Failed'
   */
  provisioningState?: PrivateEndpointConnectionProvisioningState;
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
 * Attestation service response message.
 */
export interface AttestationProvider extends TrackedResource {
  /**
   * The system metadata relating to this resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
  /**
   * Trust model for the attestation provider.
   */
  trustModel?: string;
  /**
   * Status of attestation service. Possible values include: 'Ready', 'NotReady', 'Error'
   */
  status?: AttestationServiceStatus;
  /**
   * Gets the uri of attestation service
   */
  attestUri?: string;
  /**
   * List of private endpoint connections associated with the attestation provider.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
}

/**
 * Attestation Providers List.
 */
export interface AttestationProviderListResult {
  /**
   * The system metadata relating to this resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly systemData?: SystemData;
  /**
   * Attestation Provider array.
   */
  value?: AttestationProvider[];
}

/**
 * Parameters for patching an attestation provider
 */
export interface AttestationServicePatchParams extends BaseResource {
  /**
   * The tags that will be assigned to the attestation provider.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * An interface representing JSONWebKey.
 */
export interface JSONWebKey {
  /**
   * The "alg" (algorithm) parameter identifies the algorithm intended for
   * use with the key.  The values used should either be registered in the
   * IANA "JSON Web Signature and Encryption Algorithms" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.
   */
  alg?: string;
  /**
   * The "crv" (curve) parameter identifies the curve type
   */
  crv?: string;
  /**
   * RSA private exponent or ECC private key
   */
  d?: string;
  /**
   * RSA Private Key Parameter
   */
  dp?: string;
  /**
   * RSA Private Key Parameter
   */
  dq?: string;
  /**
   * RSA public exponent, in Base64
   */
  e?: string;
  /**
   * Symmetric key
   */
  k?: string;
  /**
   * The "kid" (key ID) parameter is used to match a specific key.  This
   * is used, for instance, to choose among a set of keys within a JWK Set
   * during key rollover.  The structure of the "kid" value is
   * unspecified.  When "kid" values are used within a JWK Set, different
   * keys within the JWK Set SHOULD use distinct "kid" values.  (One
   * example in which different keys might use the same "kid" value is if
   * they have different "kty" (key type) values but are considered to be
   * equivalent alternatives by the application using them.)  The "kid"
   * value is a case-sensitive string.
   */
  kid?: string;
  /**
   * The "kty" (key type) parameter identifies the cryptographic algorithm
   * family used with the key, such as "RSA" or "EC". "kty" values should
   * either be registered in the IANA "JSON Web Key Types" registry
   * established by [JWA] or be a value that contains a Collision-
   * Resistant Name.  The "kty" value is a case-sensitive string.
   */
  kty: string;
  /**
   * RSA modulus, in Base64
   */
  n?: string;
  /**
   * RSA secret prime
   */
  p?: string;
  /**
   * RSA secret prime, with p < q
   */
  q?: string;
  /**
   * RSA Private Key Parameter
   */
  qi?: string;
  /**
   * Use ("public key use") identifies the intended use of
   * the public key. The "use" parameter is employed to indicate whether
   * a public key is used for encrypting data or verifying the signature
   * on data. Values are commonly "sig" (signature) or "enc" (encryption).
   */
  use?: string;
  /**
   * X coordinate for the Elliptic Curve point
   */
  x?: string;
  /**
   * The "x5c" (X.509 certificate chain) parameter contains a chain of one
   * or more PKIX certificates [RFC5280].  The certificate chain is
   * represented as a JSON array of certificate value strings.  Each
   * string in the array is a base64-encoded (Section 4 of [RFC4648] --
   * not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
   * The PKIX certificate containing the key value MUST be the first
   * certificate.
   */
  x5c?: string[];
  /**
   * Y coordinate for the Elliptic Curve point
   */
  y?: string;
}

/**
 * An interface representing JSONWebKeySet.
 */
export interface JSONWebKeySet {
  /**
   * The value of the "keys" parameter is an array of JWK values.  By
   * default, the order of the JWK values within the array does not imply
   * an order of preference among them, although applications of JWK Sets
   * can choose to assign a meaning to the order for their purposes, if
   * desired.
   */
  keys?: JSONWebKey[];
}

/**
 * Client supplied parameters used to create a new attestation provider.
 */
export interface AttestationServiceCreationSpecificParams {
  /**
   * JSON Web Key Set defining a set of X.509 Certificates that will represent the parent
   * certificate for the signing certificate used for policy operations
   */
  policySigningCertificates?: JSONWebKeySet;
}

/**
 * Parameters for creating an attestation provider
 */
export interface AttestationServiceCreationParams extends BaseResource {
  /**
   * The supported Azure location where the attestation provider should be created.
   */
  location: string;
  /**
   * The tags that will be assigned to the attestation provider.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Properties of the attestation provider
   */
  properties: AttestationServiceCreationSpecificParams;
}

/**
 * The resource model definition for a Azure Resource Manager proxy resource. It will not have tags
 * and a location
 * @summary Proxy Resource
 */
export interface ProxyResource extends Resource {
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
 * An interface representing AttestationManagementClientOptions.
 */
export interface AttestationManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * List of private endpoint connection associated with the specified storage account
 * @extends Array<PrivateEndpointConnection>
 */
export interface PrivateEndpointConnectionListResult extends Array<PrivateEndpointConnection> {
}

/**
 * Defines values for CreatedByType.
 * Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
 * @readonly
 * @enum {string}
 */
export type CreatedByType = 'User' | 'Application' | 'ManagedIdentity' | 'Key';

/**
 * Defines values for AttestationServiceStatus.
 * Possible values include: 'Ready', 'NotReady', 'Error'
 * @readonly
 * @enum {string}
 */
export type AttestationServiceStatus = 'Ready' | 'NotReady' | 'Error';

/**
 * Defines values for PrivateEndpointServiceConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointServiceConnectionStatus = 'Pending' | 'Approved' | 'Rejected';

/**
 * Defines values for PrivateEndpointConnectionProvisioningState.
 * Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Failed'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointConnectionProvisioningState = 'Succeeded' | 'Creating' | 'Deleting' | 'Failed';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
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
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AttestationProvidersGetResponse = AttestationProvider & {
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
      parsedBody: AttestationProvider;
    };
};

/**
 * Contains response data for the create operation.
 */
export type AttestationProvidersCreateResponse = AttestationProvider & {
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
      parsedBody: AttestationProvider;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AttestationProvidersUpdateResponse = AttestationProvider & {
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
      parsedBody: AttestationProvider;
    };
};

/**
 * Contains response data for the list operation.
 */
export type AttestationProvidersListResponse = AttestationProviderListResult & {
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
      parsedBody: AttestationProviderListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AttestationProvidersListByResourceGroupResponse = AttestationProviderListResult & {
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
      parsedBody: AttestationProviderListResult;
    };
};

/**
 * Contains response data for the listDefault operation.
 */
export type AttestationProvidersListDefaultResponse = AttestationProviderListResult & {
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
      parsedBody: AttestationProviderListResult;
    };
};

/**
 * Contains response data for the getDefaultByLocation operation.
 */
export type AttestationProvidersGetDefaultByLocationResponse = AttestationProvider & {
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
      parsedBody: AttestationProvider;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PrivateEndpointConnectionsListResponse = PrivateEndpointConnectionListResult & {
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
      parsedBody: PrivateEndpointConnectionListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection & {
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
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the create operation.
 */
export type PrivateEndpointConnectionsCreateResponse = PrivateEndpointConnection & {
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
      parsedBody: PrivateEndpointConnection;
    };
};

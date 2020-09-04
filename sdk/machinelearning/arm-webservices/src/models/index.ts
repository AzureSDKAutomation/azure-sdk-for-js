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
 * Error Response.
 */
export interface ErrorResponse {
  /**
   * Error code.
   */
  code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  message?: string;
}

/**
 * Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * Specifies the resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Specifies the name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Specifies the location of the resource.
   */
  location: string;
  /**
   * Specifies the type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Contains resource tags defined as key/value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Azure resource.
 */
export interface PatchedResource extends BaseResource {
  /**
   * Specifies the resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Specifies the name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Specifies the location of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly location?: string;
  /**
   * Specifies the type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Contains resource tags defined as key/value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Access keys for the web service calls.
 */
export interface WebServiceKeys {
  /**
   * The primary access key.
   */
  primary?: string;
  /**
   * The secondary access key.
   */
  secondary?: string;
}

/**
 * Holds the available configuration options for an Azure ML web service endpoint.
 */
export interface RealtimeConfiguration {
  /**
   * Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4,
   * Maximum value: 200.
   */
  maxConcurrentCalls?: number;
}

/**
 * Diagnostics settings for an Azure ML web service.
 */
export interface DiagnosticsConfiguration {
  /**
   * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing;
   * Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
   * Possible values include: 'None', 'Error', 'All'
   */
  level: DiagnosticsLevel;
  /**
   * Specifies the date and time when the logging will cease. If null, diagnostic collection is not
   * time limited.
   */
  expiry?: Date;
}

/**
 * Access information for a storage account.
 */
export interface StorageAccount {
  /**
   * Specifies the name of the storage account.
   */
  name?: string;
  /**
   * Specifies the key used to access the storage account.
   */
  key?: string;
}

/**
 * Information about the machine learning workspace containing the experiment that is source for
 * the web service.
 */
export interface MachineLearningWorkspace {
  /**
   * Specifies the workspace ID of the machine learning workspace associated with the web service
   */
  id: string;
}

/**
 * Information about the machine learning commitment plan associated with the web service.
 */
export interface CommitmentPlan {
  /**
   * Specifies the Azure Resource Manager ID of the commitment plan associated with the web
   * service.
   */
  id: string;
}

/**
 * Swagger 2.0 schema for a column within the data table representing a web service input or
 * output. See Swagger specification: http://swagger.io/specification/
 */
export interface ColumnSpecification {
  /**
   * Data type of the column. Possible values include: 'Boolean', 'Integer', 'Number', 'String'
   */
  type: ColumnType;
  /**
   * Additional format information for the data type. Possible values include: 'Byte', 'Char',
   * 'Complex64', 'Complex128', 'Date-time', 'Date-timeOffset', 'Double', 'Duration', 'Float',
   * 'Int8', 'Int16', 'Int32', 'Int64', 'Uint8', 'Uint16', 'Uint32', 'Uint64'
   */
  format?: ColumnFormat;
  /**
   * If the data type is categorical, this provides the list of accepted categories.
   */
  enum?: any[];
  /**
   * Flag indicating if the type supports null values or not.
   */
  xMsIsnullable?: boolean;
  /**
   * Flag indicating whether the categories are treated as an ordered set or not, if this is a
   * categorical column.
   */
  xMsIsordered?: boolean;
}

/**
 * The swagger 2.0 schema describing a single service input or output. See Swagger specification:
 * http://swagger.io/specification/
 */
export interface TableSpecification {
  /**
   * Swagger schema title.
   */
  title?: string;
  /**
   * Swagger schema description.
   */
  description?: string;
  /**
   * The type of the entity described in swagger. Default value: 'object'.
   */
  type: string;
  /**
   * The format, if 'type' is not 'object'
   */
  format?: string;
  /**
   * The set of columns within the data table.
   */
  properties?: { [propertyName: string]: ColumnSpecification };
}

/**
 * The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification:
 * http://swagger.io/specification/
 */
export interface ServiceInputOutputSpecification {
  /**
   * The title of your Swagger schema.
   */
  title?: string;
  /**
   * The description of the Swagger schema.
   */
  description?: string;
  /**
   * The type of the entity described in swagger. Always 'object'. Default value: 'object'.
   */
  type: string;
  /**
   * Specifies a collection that contains the column schema for each input or output of the web
   * service. For more information, see the Swagger specification.
   */
  properties: { [propertyName: string]: TableSpecification };
}

/**
 * Sample input data for the service's input(s).
 */
export interface ExampleRequest {
  /**
   * Sample input data for the web service's input(s) given as an input name to sample input values
   * matrix map.
   */
  inputs?: { [propertyName: string]: any[][] };
  /**
   * Sample input data for the web service's global parameters
   */
  globalParameters?: { [propertyName: string]: any };
}

/**
 * Describes the access location for a blob.
 */
export interface BlobLocation {
  /**
   * The URI from which the blob is accessible from. For example, aml://abc for system assets or
   * https://xyz for user assets or payload.
   */
  uri: string;
  /**
   * Access credentials for the blob, if applicable (e.g. blob specified by storage account
   * connection string + blob URI)
   */
  credentials?: string;
}

/**
 * Asset input port
 */
export interface InputPort {
  /**
   * Port data type. Possible values include: 'Dataset'. Default value: 'Dataset'.
   */
  type?: InputPortType;
}

/**
 * Asset output port
 */
export interface OutputPort {
  /**
   * Port data type. Possible values include: 'Dataset'. Default value: 'Dataset'.
   */
  type?: OutputPortType;
}

/**
 * Nested parameter definition.
 */
export interface ModeValueInfo {
  /**
   * The interface string name for the nested parameter.
   */
  interfaceString?: string;
  /**
   * The definition of the parameter.
   */
  parameters?: ModuleAssetParameter[];
}

/**
 * Parameter definition for a module asset.
 */
export interface ModuleAssetParameter {
  /**
   * Parameter name.
   */
  name?: string;
  /**
   * Parameter type.
   */
  parameterType?: string;
  /**
   * Definitions for nested interface parameters if this is a complex module parameter.
   */
  modeValuesInfo?: { [propertyName: string]: ModeValueInfo };
}

/**
 * Information about an asset associated with the web service.
 */
export interface AssetItem {
  /**
   * Asset's friendly name.
   */
  name: string;
  /**
   * Asset's Id.
   */
  id?: string;
  /**
   * Asset's type. Possible values include: 'Module', 'Resource'
   */
  type: AssetType;
  /**
   * Access information for the asset.
   */
  locationInfo: BlobLocation;
  /**
   * Information about the asset's input ports.
   */
  inputPorts?: { [propertyName: string]: InputPort };
  /**
   * Information about the asset's output ports.
   */
  outputPorts?: { [propertyName: string]: OutputPort };
  /**
   * If the asset is a custom module, this holds the module's metadata.
   */
  metadata?: { [propertyName: string]: string };
  /**
   * If the asset is a custom module, this holds the module's parameters.
   */
  parameters?: ModuleAssetParameter[];
}

/**
 * Web Service Parameter object for node and global parameter
 */
export interface WebServiceParameter {
  /**
   * The parameter value
   */
  value?: any;
  /**
   * If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should
   * be put here.
   */
  certificateThumbprint?: string;
}

/**
 * Contains the possible cases for WebServiceProperties.
 */
export type WebServicePropertiesUnion = WebServiceProperties | WebServicePropertiesForGraph;

/**
 * The set of properties specific to the Azure ML web service resource.
 */
export interface WebServiceProperties {
  /**
   * Polymorphic Discriminator
   */
  packageType: "WebServiceProperties";
  /**
   * The title of the web service.
   */
  title?: string;
  /**
   * The description of the web service.
   */
  description?: string;
  /**
   * Read Only: The date and time when the web service was created.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly createdOn?: Date;
  /**
   * Read Only: The date and time when the web service was last modified.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * Read Only: The provision state of the web service. Valid values are Unknown, Provisioning,
   * Succeeded, and Failed. Possible values include: 'Unknown', 'Provisioning', 'Succeeded',
   * 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure
   * Machine Learning system generates them for you. Note: The keys are not returned from calls to
   * GET operations.
   */
  keys?: WebServiceKeys;
  /**
   * When set to true, indicates that the web service is read-only and can no longer be updated or
   * patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
   */
  readOnly?: boolean;
  /**
   * Read Only: Contains the URI of the swagger spec associated with this web service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly swaggerLocation?: string;
  /**
   * When set to true, sample data is included in the web service's swagger definition. The default
   * value is true.
   */
  exposeSampleData?: boolean;
  /**
   * Contains the configuration settings for the web service endpoint.
   */
  realtimeConfiguration?: RealtimeConfiguration;
  /**
   * Settings controlling the diagnostics traces collection for the web service.
   */
  diagnostics?: DiagnosticsConfiguration;
  /**
   * Specifies the storage account that Azure Machine Learning uses to store information about the
   * web service. Only the name of the storage account is returned from calls to GET operations.
   * When updating the storage account information, you must ensure that all necessary assets are
   * available in the new storage account or calls to your web service will fail.
   */
  storageAccount?: StorageAccount;
  /**
   * Specifies the Machine Learning workspace containing the experiment that is source for the web
   * service.
   */
  machineLearningWorkspace?: MachineLearningWorkspace;
  /**
   * Contains the commitment plan associated with this web service. Set at creation time. Once set,
   * this value cannot be changed. Note: The commitment plan is not returned from calls to GET
   * operations.
   */
  commitmentPlan?: CommitmentPlan;
  /**
   * Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more
   * information, see the Swagger specification.
   */
  input?: ServiceInputOutputSpecification;
  /**
   * Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more
   * information, see the Swagger specification.
   */
  output?: ServiceInputOutputSpecification;
  /**
   * Defines sample input data for one or more of the service's inputs.
   */
  exampleRequest?: ExampleRequest;
  /**
   * Contains user defined properties describing web service assets. Properties are expressed as
   * Key/Value pairs.
   */
  assets?: { [propertyName: string]: AssetItem };
  /**
   * The set of global parameters values defined for the web service, given as a global parameter
   * name to default value map. If no default value is specified, the parameter is considered to be
   * required.
   */
  parameters?: { [propertyName: string]: WebServiceParameter };
  /**
   * When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the
   * payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter
   * contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output,
   * Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the
   * size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
   */
  payloadsInBlobStorage?: boolean;
  /**
   * The URI of the payload blob. This parameter contains a value only if the payloadsInBlobStorage
   * parameter is set to true. Otherwise is set to null.
   */
  payloadsLocation?: BlobLocation;
}

/**
 * Instance of an Azure ML web service resource.
 */
export interface WebService extends Resource {
  /**
   * Contains the property payload that describes the web service.
   */
  properties: WebServicePropertiesUnion;
}

/**
 * Instance of an Patched Azure ML web service resource.
 */
export interface PatchedWebService extends PatchedResource {
  /**
   * Contains the property payload that describes the web service.
   */
  properties?: WebServicePropertiesUnion;
}

/**
 * Specifies a node in the web service graph. The node can either be an input, output or asset
 * node, so only one of the corresponding id properties is populated at any given time.
 */
export interface GraphNode {
  /**
   * The id of the asset represented by this node.
   */
  assetId?: string;
  /**
   * The id of the input element represented by this node.
   */
  inputId?: string;
  /**
   * The id of the output element represented by this node.
   */
  outputId?: string;
  /**
   * If applicable, parameters of the node. Global graph parameters map into these, with values set
   * at runtime.
   */
  parameters?: { [propertyName: string]: WebServiceParameter };
}

/**
 * Defines an edge within the web service's graph.
 */
export interface GraphEdge {
  /**
   * The source graph node's identifier.
   */
  sourceNodeId?: string;
  /**
   * The identifier of the source node's port that the edge connects from.
   */
  sourcePortId?: string;
  /**
   * The destination graph node's identifier.
   */
  targetNodeId?: string;
  /**
   * The identifier of the destination node's port that the edge connects into.
   */
  targetPortId?: string;
}

/**
 * Association link for a graph global parameter to a node in the graph.
 */
export interface GraphParameterLink {
  /**
   * The graph node's identifier
   */
  nodeId: string;
  /**
   * The identifier of the node parameter that the global parameter maps to.
   */
  parameterKey: string;
}

/**
 * Defines a global parameter in the graph.
 */
export interface GraphParameter {
  /**
   * Description of this graph parameter.
   */
  description?: string;
  /**
   * Graph parameter's type. Possible values include: 'String', 'Int', 'Float', 'Enumerated',
   * 'Script', 'Mode', 'Credential', 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange',
   * 'DataGatewayName'
   */
  type: ParameterType;
  /**
   * Association links for this parameter to nodes in the graph.
   */
  links: GraphParameterLink[];
}

/**
 * Defines the graph of modules making up the machine learning solution.
 */
export interface GraphPackage {
  /**
   * The set of nodes making up the graph, provided as a nodeId to GraphNode map
   */
  nodes?: { [propertyName: string]: GraphNode };
  /**
   * The list of edges making up the graph.
   */
  edges?: GraphEdge[];
  /**
   * The collection of global parameters for the graph, given as a global parameter name to
   * GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map
   * declared at the WebServiceProperties level.
   */
  graphParameters?: { [propertyName: string]: GraphParameter };
}

/**
 * Properties specific to a Graph based web service.
 */
export interface WebServicePropertiesForGraph {
  /**
   * Polymorphic Discriminator
   */
  packageType: "Graph";
  /**
   * The title of the web service.
   */
  title?: string;
  /**
   * The description of the web service.
   */
  description?: string;
  /**
   * Read Only: The date and time when the web service was created.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly createdOn?: Date;
  /**
   * Read Only: The date and time when the web service was last modified.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * Read Only: The provision state of the web service. Valid values are Unknown, Provisioning,
   * Succeeded, and Failed. Possible values include: 'Unknown', 'Provisioning', 'Succeeded',
   * 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Contains the web service provisioning keys. If you do not specify provisioning keys, the Azure
   * Machine Learning system generates them for you. Note: The keys are not returned from calls to
   * GET operations.
   */
  keys?: WebServiceKeys;
  /**
   * When set to true, indicates that the web service is read-only and can no longer be updated or
   * patched, only removed. Default, is false. Note: Once set to true, you cannot change its value.
   */
  readOnly?: boolean;
  /**
   * Read Only: Contains the URI of the swagger spec associated with this web service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly swaggerLocation?: string;
  /**
   * When set to true, sample data is included in the web service's swagger definition. The default
   * value is true.
   */
  exposeSampleData?: boolean;
  /**
   * Contains the configuration settings for the web service endpoint.
   */
  realtimeConfiguration?: RealtimeConfiguration;
  /**
   * Settings controlling the diagnostics traces collection for the web service.
   */
  diagnostics?: DiagnosticsConfiguration;
  /**
   * Specifies the storage account that Azure Machine Learning uses to store information about the
   * web service. Only the name of the storage account is returned from calls to GET operations.
   * When updating the storage account information, you must ensure that all necessary assets are
   * available in the new storage account or calls to your web service will fail.
   */
  storageAccount?: StorageAccount;
  /**
   * Specifies the Machine Learning workspace containing the experiment that is source for the web
   * service.
   */
  machineLearningWorkspace?: MachineLearningWorkspace;
  /**
   * Contains the commitment plan associated with this web service. Set at creation time. Once set,
   * this value cannot be changed. Note: The commitment plan is not returned from calls to GET
   * operations.
   */
  commitmentPlan?: CommitmentPlan;
  /**
   * Contains the Swagger 2.0 schema describing one or more of the web service's inputs. For more
   * information, see the Swagger specification.
   */
  input?: ServiceInputOutputSpecification;
  /**
   * Contains the Swagger 2.0 schema describing one or more of the web service's outputs. For more
   * information, see the Swagger specification.
   */
  output?: ServiceInputOutputSpecification;
  /**
   * Defines sample input data for one or more of the service's inputs.
   */
  exampleRequest?: ExampleRequest;
  /**
   * Contains user defined properties describing web service assets. Properties are expressed as
   * Key/Value pairs.
   */
  assets?: { [propertyName: string]: AssetItem };
  /**
   * The set of global parameters values defined for the web service, given as a global parameter
   * name to default value map. If no default value is specified, the parameter is considered to be
   * required.
   */
  parameters?: { [propertyName: string]: WebServiceParameter };
  /**
   * When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the
   * payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter
   * contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output,
   * Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the
   * size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest.
   */
  payloadsInBlobStorage?: boolean;
  /**
   * The URI of the payload blob. This parameter contains a value only if the payloadsInBlobStorage
   * parameter is set to true. Otherwise is set to null.
   */
  payloadsLocation?: BlobLocation;
  /**
   * The definition of the graph package making up this web service.
   */
  packageProperty?: GraphPackage;
}

/**
 * The error detail information for async operation
 */
export interface AsyncOperationErrorInfo {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * An array containing error information.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: AsyncOperationErrorInfo[];
}

/**
 * Azure async operation status.
 */
export interface AsyncOperationStatus {
  /**
   * Async operation id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Async operation name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Read Only: The provisioning state of the web service. Valid values are Unknown, Provisioning,
   * Succeeded, and Failed. Possible values include: 'Unknown', 'Provisioning', 'Succeeded',
   * 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The date time that the async operation started.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly startTime?: Date;
  /**
   * The date time that the async operation finished.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endTime?: Date;
  /**
   * Async operation progress.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly percentComplete?: number;
  /**
   * If the async operation fails, this structure contains the error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly errorInfo?: AsyncOperationErrorInfo;
}

/**
 * The API operation info.
 */
export interface OperationDisplayInfo {
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
   * The service provider.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * The resource on which the operation is performed.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
}

/**
 * An API operation.
 */
export interface OperationEntity {
  /**
   * Operation name: {provider}/{resource}/{operation}.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The API operation info.
   */
  display?: OperationDisplayInfo;
}

/**
 * Optional Parameters.
 */
export interface WebServicesGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The region for which encrypted credential parameters are valid.
   */
  region?: string;
}

/**
 * Optional Parameters.
 */
export interface WebServicesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * Optional Parameters.
 */
export interface WebServicesListBySubscriptionIdOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * An interface representing AzureMLWebServicesManagementClientOptions.
 */
export interface AzureMLWebServicesManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * The list of REST API operations.
 * @extends Array<OperationEntity>
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
}

/**
 * @interface
 * Paginated list of web services.
 * @extends Array<WebService>
 */
export interface PaginatedWebServicesList extends Array<WebService> {
  /**
   * A continuation link (absolute URI) to the next page of results in the list.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Unknown', 'Provisioning', 'Succeeded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Unknown' | 'Provisioning' | 'Succeeded' | 'Failed';

/**
 * Defines values for DiagnosticsLevel.
 * Possible values include: 'None', 'Error', 'All'
 * @readonly
 * @enum {string}
 */
export type DiagnosticsLevel = 'None' | 'Error' | 'All';

/**
 * Defines values for ColumnType.
 * Possible values include: 'Boolean', 'Integer', 'Number', 'String'
 * @readonly
 * @enum {string}
 */
export type ColumnType = 'Boolean' | 'Integer' | 'Number' | 'String';

/**
 * Defines values for ColumnFormat.
 * Possible values include: 'Byte', 'Char', 'Complex64', 'Complex128', 'Date-time',
 * 'Date-timeOffset', 'Double', 'Duration', 'Float', 'Int8', 'Int16', 'Int32', 'Int64', 'Uint8',
 * 'Uint16', 'Uint32', 'Uint64'
 * @readonly
 * @enum {string}
 */
export type ColumnFormat = 'Byte' | 'Char' | 'Complex64' | 'Complex128' | 'Date-time' | 'Date-timeOffset' | 'Double' | 'Duration' | 'Float' | 'Int8' | 'Int16' | 'Int32' | 'Int64' | 'Uint8' | 'Uint16' | 'Uint32' | 'Uint64';

/**
 * Defines values for AssetType.
 * Possible values include: 'Module', 'Resource'
 * @readonly
 * @enum {string}
 */
export type AssetType = 'Module' | 'Resource';

/**
 * Defines values for InputPortType.
 * Possible values include: 'Dataset'
 * @readonly
 * @enum {string}
 */
export type InputPortType = 'Dataset';

/**
 * Defines values for OutputPortType.
 * Possible values include: 'Dataset'
 * @readonly
 * @enum {string}
 */
export type OutputPortType = 'Dataset';

/**
 * Defines values for ParameterType.
 * Possible values include: 'String', 'Int', 'Float', 'Enumerated', 'Script', 'Mode', 'Credential',
 * 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange', 'DataGatewayName'
 * @readonly
 * @enum {string}
 */
export type ParameterType = 'String' | 'Int' | 'Float' | 'Enumerated' | 'Script' | 'Mode' | 'Credential' | 'Boolean' | 'Double' | 'ColumnPicker' | 'ParameterRange' | 'DataGatewayName';

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
 * Contains response data for the createOrUpdate operation.
 */
export type WebServicesCreateOrUpdateResponse = WebService & {
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
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the get operation.
 */
export type WebServicesGetResponse = WebService & {
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
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the patch operation.
 */
export type WebServicesPatchResponse = WebService & {
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
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the createRegionalProperties operation.
 */
export type WebServicesCreateRegionalPropertiesResponse = AsyncOperationStatus & {
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
      parsedBody: AsyncOperationStatus;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type WebServicesListKeysResponse = WebServiceKeys & {
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
      parsedBody: WebServiceKeys;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type WebServicesListByResourceGroupResponse = PaginatedWebServicesList & {
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
      parsedBody: PaginatedWebServicesList;
    };
};

/**
 * Contains response data for the listBySubscriptionId operation.
 */
export type WebServicesListBySubscriptionIdResponse = PaginatedWebServicesList & {
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
      parsedBody: PaginatedWebServicesList;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type WebServicesBeginCreateOrUpdateResponse = WebService & {
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
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the beginPatch operation.
 */
export type WebServicesBeginPatchResponse = WebService & {
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
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the beginCreateRegionalProperties operation.
 */
export type WebServicesBeginCreateRegionalPropertiesResponse = AsyncOperationStatus & {
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
      parsedBody: AsyncOperationStatus;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type WebServicesListByResourceGroupNextResponse = PaginatedWebServicesList & {
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
      parsedBody: PaginatedWebServicesList;
    };
};

/**
 * Contains response data for the listBySubscriptionIdNext operation.
 */
export type WebServicesListBySubscriptionIdNextResponse = PaginatedWebServicesList & {
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
      parsedBody: PaginatedWebServicesList;
    };
};

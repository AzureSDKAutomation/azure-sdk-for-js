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
import * as Mappers from "../models/snapshotOperationsMappers";
import * as Parameters from "../models/parameters";
import { FaceClientContext } from "../faceClientContext";

/** Class representing a SnapshotOperations. */
export class SnapshotOperations {
  private readonly client: FaceClientContext;

  /**
   * Create a SnapshotOperations.
   * @param {FaceClientContext} client Reference to the service client.
   */
  constructor(client: FaceClientContext) {
    this.client = client;
  }

  /**
   * Submit an operation to take a snapshot of face list, large face list, person group or large
   * person group, with user-specified snapshot type, source object id, apply scope and an optional
   * user data.<br />
   * The snapshot interfaces are for users to backup and restore their face data from one face
   * subscription to another, inside same region or across regions. The workflow contains two phases,
   * user first calls Snapshot - Take to create a copy of the source object and store it as a
   * snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The
   * snapshots are stored in a centralized location (per Azure instance), so that they can be applied
   * cross accounts and regions.<br />
   * Taking snapshot is an asynchronous operation. An operation id can be obtained from the
   * "Operation-Location" field in response header, to be used in OperationStatus - Get for tracking
   * the progress of creating the snapshot. The snapshot id will be included in the
   * "resourceLocation" field in OperationStatus - Get response when the operation status is
   * "succeeded".<br />
   * Snapshot taking time depends on the number of person and face entries in the source object. It
   * could be in seconds, or up to several hours for 1,000,000 persons with multiple faces.<br />
   * Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot
   * - Take. User can delete the snapshot using Snapshot - Delete by themselves any time before
   * expiration.<br />
   * Taking snapshot for a certain object will not block any other operations against the object. All
   * read-only operations (Get/List and Identify/FindSimilar/Verify) can be conducted as usual. For
   * all writable operations, including Add/Update/Delete the source object or its persons/faces and
   * Train, they are not blocked but not recommended because writable updates may not be reflected on
   * the snapshot during its taking. After snapshot taking is completed, all readable and writable
   * operations can work as normal. Snapshot will also include the training results of the source
   * object, which means target subscription the snapshot applied to does not need re-train the
   * target object before calling Identify/FindSimilar.<br />
   * * Free-tier subscription quota: 100 take operations per month.
   * * S0-tier subscription quota: 100 take operations per day.
   * @param type User specified type for the source object to take snapshot from. Currently FaceList,
   * PersonGroup, LargeFaceList and LargePersonGroup are supported. Possible values include:
   * 'FaceList', 'LargeFaceList', 'LargePersonGroup', 'PersonGroup'
   * @param objectId User specified source object id to take snapshot from.
   * @param applyScope User specified array of target Face subscription ids for the snapshot. For
   * each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotTakeResponse>
   */
  take(type: Models.SnapshotObjectType, objectId: string, applyScope: string[], options?: Models.SnapshotTakeOptionalParams): Promise<Models.SnapshotTakeResponse>;
  /**
   * @param type User specified type for the source object to take snapshot from. Currently FaceList,
   * PersonGroup, LargeFaceList and LargePersonGroup are supported. Possible values include:
   * 'FaceList', 'LargeFaceList', 'LargePersonGroup', 'PersonGroup'
   * @param objectId User specified source object id to take snapshot from.
   * @param applyScope User specified array of target Face subscription ids for the snapshot. For
   * each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.
   * @param callback The callback
   */
  take(type: Models.SnapshotObjectType, objectId: string, applyScope: string[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param type User specified type for the source object to take snapshot from. Currently FaceList,
   * PersonGroup, LargeFaceList and LargePersonGroup are supported. Possible values include:
   * 'FaceList', 'LargeFaceList', 'LargePersonGroup', 'PersonGroup'
   * @param objectId User specified source object id to take snapshot from.
   * @param applyScope User specified array of target Face subscription ids for the snapshot. For
   * each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.
   * @param options The optional parameters
   * @param callback The callback
   */
  take(type: Models.SnapshotObjectType, objectId: string, applyScope: string[], options: Models.SnapshotTakeOptionalParams, callback: msRest.ServiceCallback<void>): void;
  take(type: Models.SnapshotObjectType, objectId: string, applyScope: string[], options?: Models.SnapshotTakeOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.SnapshotTakeResponse> {
    return this.client.sendOperationRequest(
      {
        type,
        objectId,
        applyScope,
        options
      },
      takeOperationSpec,
      callback) as Promise<Models.SnapshotTakeResponse>;
  }

  /**
   * List all accessible snapshots with related information, including snapshots that were taken by
   * the user, or snapshots to be applied to the user (subscription id was included in the applyScope
   * in Snapshot - Take).
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotListResponse>
   */
  list(options?: Models.SnapshotListOptionalParams): Promise<Models.SnapshotListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.Snapshot[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.SnapshotListOptionalParams, callback: msRest.ServiceCallback<Models.Snapshot[]>): void;
  list(options?: Models.SnapshotListOptionalParams | msRest.ServiceCallback<Models.Snapshot[]>, callback?: msRest.ServiceCallback<Models.Snapshot[]>): Promise<Models.SnapshotListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SnapshotListResponse>;
  }

  /**
   * Retrieve information about a snapshot. Snapshot is only accessible to the source subscription
   * who took it, and target subscriptions included in the applyScope in Snapshot - Take.
   * @param snapshotId Id referencing a particular snapshot.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotGetResponse>
   */
  get(snapshotId: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotGetResponse>;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param callback The callback
   */
  get(snapshotId: string, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(snapshotId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  get(snapshotId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Snapshot>, callback?: msRest.ServiceCallback<Models.Snapshot>): Promise<Models.SnapshotGetResponse> {
    return this.client.sendOperationRequest(
      {
        snapshotId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SnapshotGetResponse>;
  }

  /**
   * Update the information of a snapshot. Only the source subscription who took the snapshot can
   * update the snapshot.
   * @param snapshotId Id referencing a particular snapshot.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(snapshotId: string, options?: Models.SnapshotUpdateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param callback The callback
   */
  update(snapshotId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(snapshotId: string, options: Models.SnapshotUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(snapshotId: string, options?: Models.SnapshotUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        snapshotId,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Delete an existing snapshot according to the snapshotId. All object data and information in the
   * snapshot will also be deleted. Only the source subscription who took the snapshot can delete the
   * snapshot. If the user does not delete a snapshot with this API, the snapshot will still be
   * automatically deleted in 48 hours after creation.
   * @param snapshotId Id referencing a particular snapshot.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(snapshotId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param callback The callback
   */
  deleteMethod(snapshotId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(snapshotId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(snapshotId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        snapshotId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Submit an operation to apply a snapshot to current subscription. For each snapshot, only
   * subscriptions included in the applyScope of Snapshot - Take can apply it.<br />
   * The snapshot interfaces are for users to backup and restore their face data from one face
   * subscription to another, inside same region or across regions. The workflow contains two phases,
   * user first calls Snapshot - Take to create a copy of the source object and store it as a
   * snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The
   * snapshots are stored in a centralized location (per Azure instance), so that they can be applied
   * cross accounts and regions.<br />
   * Applying snapshot is an asynchronous operation. An operation id can be obtained from the
   * "Operation-Location" field in response header, to be used in OperationStatus - Get for tracking
   * the progress of applying the snapshot. The target object id will be included in the
   * "resourceLocation" field in OperationStatus - Get response when the operation status is
   * "succeeded".<br />
   * Snapshot applying time depends on the number of person and face entries in the snapshot object.
   * It could be in seconds, or up to 1 hour for 1,000,000 persons with multiple faces.<br />
   * Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot
   * - Take. So the target subscription is required to apply the snapshot in 48 hours since its
   * creation.<br />
   * Applying a snapshot will not block any other operations against the target object, however it is
   * not recommended because the correctness cannot be guaranteed during snapshot applying. After
   * snapshot applying is completed, all operations towards the target object can work as normal.
   * Snapshot also includes the training results of the source object, which means target
   * subscription the snapshot applied to does not need re-train the target object before calling
   * Identify/FindSimilar.<br />
   * One snapshot can be applied multiple times in parallel, while currently only CreateNew apply
   * mode is supported, which means the apply operation will fail if target subscription already
   * contains an object of same type and using the same objectId. Users can specify the "objectId" in
   * request body to avoid such conflicts.<br />
   * * Free-tier subscription quota: 100 apply operations per month.
   * * S0-tier subscription quota: 100 apply operations per day.
   * @param snapshotId Id referencing a particular snapshot.
   * @param objectId User specified target object id to be created from the snapshot.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotApplyResponse>
   */
  apply(snapshotId: string, objectId: string, options?: Models.SnapshotApplyOptionalParams): Promise<Models.SnapshotApplyResponse>;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param objectId User specified target object id to be created from the snapshot.
   * @param callback The callback
   */
  apply(snapshotId: string, objectId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param snapshotId Id referencing a particular snapshot.
   * @param objectId User specified target object id to be created from the snapshot.
   * @param options The optional parameters
   * @param callback The callback
   */
  apply(snapshotId: string, objectId: string, options: Models.SnapshotApplyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  apply(snapshotId: string, objectId: string, options?: Models.SnapshotApplyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.SnapshotApplyResponse> {
    return this.client.sendOperationRequest(
      {
        snapshotId,
        objectId,
        options
      },
      applyOperationSpec,
      callback) as Promise<Models.SnapshotApplyResponse>;
  }

  /**
   * Retrieve the status of a take/apply snapshot operation.
   * @param operationId Id referencing a particular take/apply snapshot operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotGetOperationStatusResponse>
   */
  getOperationStatus(operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotGetOperationStatusResponse>;
  /**
   * @param operationId Id referencing a particular take/apply snapshot operation.
   * @param callback The callback
   */
  getOperationStatus(operationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param operationId Id referencing a particular take/apply snapshot operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  getOperationStatus(operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  getOperationStatus(operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.SnapshotGetOperationStatusResponse> {
    return this.client.sendOperationRequest(
      {
        operationId,
        options
      },
      getOperationStatusOperationSpec,
      callback) as Promise<Models.SnapshotGetOperationStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const takeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "snapshots",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: {
      type: "type",
      objectId: "objectId",
      applyScope: "applyScope",
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.TakeSnapshotRequest,
      required: true
    }
  },
  responses: {
    202: {
      headersMapper: Mappers.SnapshotTakeHeaders
    },
    default: {
      bodyMapper: Mappers.APIError,
      headersMapper: Mappers.SnapshotTakeHeaders
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "snapshots",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.type,
    Parameters.applyScope
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Snapshot"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "snapshots/{snapshotId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.snapshotId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "snapshots/{snapshotId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.snapshotId
  ],
  requestBody: {
    parameterPath: {
      applyScope: [
        "options",
        "applyScope"
      ],
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.UpdateSnapshotRequest,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "snapshots/{snapshotId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.snapshotId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const applyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "snapshots/{snapshotId}/apply",
  urlParameters: [
    Parameters.endpoint,
    Parameters.snapshotId
  ],
  requestBody: {
    parameterPath: {
      objectId: "objectId",
      mode: [
        "options",
        "mode"
      ]
    },
    mapper: {
      ...Mappers.ApplySnapshotRequest,
      required: true
    }
  },
  responses: {
    202: {
      headersMapper: Mappers.SnapshotApplyHeaders
    },
    default: {
      bodyMapper: Mappers.APIError,
      headersMapper: Mappers.SnapshotApplyHeaders
    }
  },
  serializer
};

const getOperationStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "operations/{operationId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.operationId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

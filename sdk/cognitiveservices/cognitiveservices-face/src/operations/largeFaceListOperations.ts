/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/largeFaceListOperationsMappers";
import * as Parameters from "../models/parameters";
import { FaceClientContext } from "../faceClientContext";

/** Class representing a LargeFaceListOperations. */
export class LargeFaceListOperations {
  private readonly client: FaceClientContext;

  /**
   * Create a LargeFaceListOperations.
   * @param {FaceClientContext} client Reference to the service client.
   */
  constructor(client: FaceClientContext) {
    this.client = client;
  }

  /**
   * Create an empty large face list with user-specified largeFaceListId, name, an optional userData
   * and recognitionModel.
   * <br /> Large face list is a list of faces, up to 1,000,000 faces, and used by [Face - Find
   * Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237).
   * <br /> After creation, user should use [LargeFaceList Face -
   * Add](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3) to import the
   * faces and [LargeFaceList -
   * Train](/docs/services/563879b61984550e40cbbe8d/operations/5a158422d2de3616c086f2d1) to make it
   * ready for [Face - Find
   * Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). No image
   * will be stored. Only the extracted face features are stored on server until [LargeFaceList -
   * Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
   * <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face
   * filtering, or as a light way face identification. But if the actual use is to identify person,
   * please use
   * [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) /
   * [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d)
   * and [Face -
   * Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
   * <br/>'recognitionModel' should be specified to associate with this large face list. The default
   * value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly
   * specify the model you need in this parameter. New faces that are added to an existing large face
   * list will use the recognition model that's already associated with the collection. Existing face
   * features in a large face list can't be updated to features extracted by another version of
   * recognition model.
   * * 'recognition_01': The default recognition model for [LargeFaceList-
   * Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc). All those
   * large face lists created before 2019 March are bonded with this recognition model.
   * * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended
   * since its overall accuracy is improved compared with 'recognition_01'.
   *
   * Large face list quota:
   * * Free-tier subscription quota: 64 large face lists.
   * * S0-tier subscription quota: 1,000,000 large face lists.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param name User defined name, maximum length is 128.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  create(largeFaceListId: string, name: string, options?: Models.LargeFaceListCreateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param name User defined name, maximum length is 128.
   * @param callback The callback
   */
  create(largeFaceListId: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param name User defined name, maximum length is 128.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(largeFaceListId: string, name: string, options: Models.LargeFaceListCreateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  create(largeFaceListId: string, name: string, options?: Models.LargeFaceListCreateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        name,
        options
      },
      createOperationSpec,
      callback);
  }

  /**
   * Retrieve a large face list’s largeFaceListId, name, userData and recognitionModel.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListGetResponse>
   */
  get(largeFaceListId: string, options?: Models.LargeFaceListGetOptionalParams): Promise<Models.LargeFaceListGetResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param callback The callback
   */
  get(largeFaceListId: string, callback: msRest.ServiceCallback<Models.LargeFaceList>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(largeFaceListId: string, options: Models.LargeFaceListGetOptionalParams, callback: msRest.ServiceCallback<Models.LargeFaceList>): void;
  get(largeFaceListId: string, options?: Models.LargeFaceListGetOptionalParams | msRest.ServiceCallback<Models.LargeFaceList>, callback?: msRest.ServiceCallback<Models.LargeFaceList>): Promise<Models.LargeFaceListGetResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LargeFaceListGetResponse>;
  }

  /**
   * Update information of a large face list.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(largeFaceListId: string, options?: Models.LargeFaceListUpdateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param callback The callback
   */
  update(largeFaceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(largeFaceListId: string, options: Models.LargeFaceListUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(largeFaceListId: string, options?: Models.LargeFaceListUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Delete a specified large face list.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(largeFaceListId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param callback The callback
   */
  deleteMethod(largeFaceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(largeFaceListId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(largeFaceListId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the training status of a large face list (completed or ongoing).
   * @param largeFaceListId Id referencing a particular large face list.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListGetTrainingStatusResponse>
   */
  getTrainingStatus(largeFaceListId: string, options?: msRest.RequestOptionsBase): Promise<Models.LargeFaceListGetTrainingStatusResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param callback The callback
   */
  getTrainingStatus(largeFaceListId: string, callback: msRest.ServiceCallback<Models.TrainingStatus>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  getTrainingStatus(largeFaceListId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TrainingStatus>): void;
  getTrainingStatus(largeFaceListId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TrainingStatus>, callback?: msRest.ServiceCallback<Models.TrainingStatus>): Promise<Models.LargeFaceListGetTrainingStatusResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        options
      },
      getTrainingStatusOperationSpec,
      callback) as Promise<Models.LargeFaceListGetTrainingStatusResponse>;
  }

  /**
   * List large face lists’ information of largeFaceListId, name, userData and recognitionModel. <br
   * />
   * To get face information inside largeFaceList use [LargeFaceList Face -
   * Get](/docs/services/563879b61984550e40cbbe8d/operations/5a158cf2d2de3616c086f2d5)<br />
   * * Large face lists are stored in alphabetical order of largeFaceListId.
   * * "start" parameter (string, optional) is a user-provided largeFaceListId value that returned
   * entries have larger ids by string comparison. "start" set to empty to indicate return from the
   * first item.
   * * "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000
   * entries can be returned in one call. To fetch more, you can specify "start" with the last
   * returned entry’s Id of the current call.
   * <br />
   * For example, total 5 large person lists: "list1", ..., "list5".
   * <br /> "start=&top=" will return all 5 lists.
   * <br /> "start=&top=2" will return "list1", "list2".
   * <br /> "start=list2&top=3" will return "list3", "list4", "list5".
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListListResponse>
   */
  list(options?: Models.LargeFaceListListOptionalParams): Promise<Models.LargeFaceListListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.LargeFaceList[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.LargeFaceListListOptionalParams, callback: msRest.ServiceCallback<Models.LargeFaceList[]>): void;
  list(options?: Models.LargeFaceListListOptionalParams | msRest.ServiceCallback<Models.LargeFaceList[]>, callback?: msRest.ServiceCallback<Models.LargeFaceList[]>): Promise<Models.LargeFaceListListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LargeFaceListListResponse>;
  }

  /**
   * Queue a large face list training task, the training task may not be started immediately.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  train(largeFaceListId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param callback The callback
   */
  train(largeFaceListId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  train(largeFaceListId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  train(largeFaceListId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        options
      },
      trainOperationSpec,
      callback);
  }

  /**
   * Delete a face from a large face list by specified largeFaceListId and persistedFaceId.
   * <br /> Adding/deleting faces to/from a same large face list are processed sequentially and
   * to/from different large face lists are in parallel.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteFace(largeFaceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  deleteFace(largeFaceListId: string, persistedFaceId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteFace(largeFaceListId: string, persistedFaceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteFace(largeFaceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        persistedFaceId,
        options
      },
      deleteFaceOperationSpec,
      callback);
  }

  /**
   * Retrieve information about a persisted face (specified by persistedFaceId and its belonging
   * largeFaceListId).
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListGetFaceResponse>
   */
  getFace(largeFaceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase): Promise<Models.LargeFaceListGetFaceResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  getFace(largeFaceListId: string, persistedFaceId: string, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  getFace(largeFaceListId: string, persistedFaceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  getFace(largeFaceListId: string, persistedFaceId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.LargeFaceListGetFaceResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        persistedFaceId,
        options
      },
      getFaceOperationSpec,
      callback) as Promise<Models.LargeFaceListGetFaceResponse>;
  }

  /**
   * Update a persisted face's userData field.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateFace(largeFaceListId: string, persistedFaceId: string, options?: Models.LargeFaceListUpdateFaceOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param callback The callback
   */
  updateFace(largeFaceListId: string, persistedFaceId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param persistedFaceId Id referencing a particular persistedFaceId of an existing face.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateFace(largeFaceListId: string, persistedFaceId: string, options: Models.LargeFaceListUpdateFaceOptionalParams, callback: msRest.ServiceCallback<void>): void;
  updateFace(largeFaceListId: string, persistedFaceId: string, options?: Models.LargeFaceListUpdateFaceOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        persistedFaceId,
        options
      },
      updateFaceOperationSpec,
      callback);
  }

  /**
   * Add a face to a specified large face list, up to 1,000,000 faces.
   * <br /> To deal with an image contains multiple faces, input face can be specified as an image
   * with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image
   * will be stored. Only the extracted face feature will be stored on server until [LargeFaceList
   * Face - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a158c8ad2de3616c086f2d4) or
   * [LargeFaceList -
   * Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
   * <br /> Note persistedFaceId is different from faceId generated by [Face -
   * Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
   * * Higher face image quality means better recognition precision. Please consider high-quality
   * faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an
   * error. If the provided "targetFace" rectangle is not returned from [Face -
   * Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no
   * guarantee to detect and add the face successfully.
   * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions
   * will cause failures.
   * * Adding/deleting faces to/from a same face list are processed sequentially and to/from
   * different face lists are in parallel.
   * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels.
   * Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum
   * face size.
   * * Different 'detectionModel' values can be provided. To use and compare different detection
   * models, please refer to [How to specify a detection
   * model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
   * | Model | Recommended use-case(s) |
   * | ---------- | -------- |
   * | 'detection_01': | The default detection model for [LargeFaceList - Add
   * Face](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3). Recommend
   * for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces,
   * occluded faces or wrong image orientation, the faces in such cases may not be detected. |
   * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on
   * small, side and blurry faces. |
   *
   * Quota:
   * * Free-tier subscription quota: 1,000 faces per large face list.
   * * S0-tier subscription quota: 1,000,000 faces per large face list.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param url Publicly reachable URL of an image
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListAddFaceFromUrlResponse>
   */
  addFaceFromUrl(largeFaceListId: string, url: string, options?: Models.LargeFaceListAddFaceFromUrlOptionalParams): Promise<Models.LargeFaceListAddFaceFromUrlResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param url Publicly reachable URL of an image
   * @param callback The callback
   */
  addFaceFromUrl(largeFaceListId: string, url: string, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param url Publicly reachable URL of an image
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromUrl(largeFaceListId: string, url: string, options: Models.LargeFaceListAddFaceFromUrlOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromUrl(largeFaceListId: string, url: string, options?: Models.LargeFaceListAddFaceFromUrlOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.LargeFaceListAddFaceFromUrlResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        url,
        options
      },
      addFaceFromUrlOperationSpec,
      callback) as Promise<Models.LargeFaceListAddFaceFromUrlResponse>;
  }

  /**
   * List all faces in a large face list, and retrieve face information (including userData and
   * persistedFaceIds of registered faces of the face).
   * @param largeFaceListId Id referencing a particular large face list.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListListFacesResponse>
   */
  listFaces(largeFaceListId: string, options?: Models.LargeFaceListListFacesOptionalParams): Promise<Models.LargeFaceListListFacesResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param callback The callback
   */
  listFaces(largeFaceListId: string, callback: msRest.ServiceCallback<Models.PersistedFace[]>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param options The optional parameters
   * @param callback The callback
   */
  listFaces(largeFaceListId: string, options: Models.LargeFaceListListFacesOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace[]>): void;
  listFaces(largeFaceListId: string, options?: Models.LargeFaceListListFacesOptionalParams | msRest.ServiceCallback<Models.PersistedFace[]>, callback?: msRest.ServiceCallback<Models.PersistedFace[]>): Promise<Models.LargeFaceListListFacesResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        options
      },
      listFacesOperationSpec,
      callback) as Promise<Models.LargeFaceListListFacesResponse>;
  }

  /**
   * Add a face to a specified large face list, up to 1,000,000 faces.
   * <br /> To deal with an image contains multiple faces, input face can be specified as an image
   * with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image
   * will be stored. Only the extracted face feature will be stored on server until [LargeFaceList
   * Face - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a158c8ad2de3616c086f2d4) or
   * [LargeFaceList -
   * Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
   * <br /> Note persistedFaceId is different from faceId generated by [Face -
   * Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
   * * Higher face image quality means better recognition precision. Please consider high-quality
   * faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
   * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is
   * from 1KB to 6MB.
   * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an
   * error. If the provided "targetFace" rectangle is not returned from [Face -
   * Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no
   * guarantee to detect and add the face successfully.
   * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions
   * will cause failures.
   * * Adding/deleting faces to/from a same face list are processed sequentially and to/from
   * different face lists are in parallel.
   * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels.
   * Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum
   * face size.
   * * Different 'detectionModel' values can be provided. To use and compare different detection
   * models, please refer to [How to specify a detection
   * model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
   * | Model | Recommended use-case(s) |
   * | ---------- | -------- |
   * | 'detection_01': | The default detection model for [LargeFaceList - Add
   * Face](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3). Recommend
   * for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces,
   * occluded faces or wrong image orientation, the faces in such cases may not be detected. |
   * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on
   * small, side and blurry faces. |
   *
   * Quota:
   * * Free-tier subscription quota: 1,000 faces per large face list.
   * * S0-tier subscription quota: 1,000,000 faces per large face list.
   * @param largeFaceListId Id referencing a particular large face list.
   * @param image An image stream.
   * @param [options] The optional parameters
   * @returns Promise<Models.LargeFaceListAddFaceFromStreamResponse>
   */
  addFaceFromStream(largeFaceListId: string, image: msRest.HttpRequestBody, options?: Models.LargeFaceListAddFaceFromStreamOptionalParams): Promise<Models.LargeFaceListAddFaceFromStreamResponse>;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param image An image stream.
   * @param callback The callback
   */
  addFaceFromStream(largeFaceListId: string, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  /**
   * @param largeFaceListId Id referencing a particular large face list.
   * @param image An image stream.
   * @param options The optional parameters
   * @param callback The callback
   */
  addFaceFromStream(largeFaceListId: string, image: msRest.HttpRequestBody, options: Models.LargeFaceListAddFaceFromStreamOptionalParams, callback: msRest.ServiceCallback<Models.PersistedFace>): void;
  addFaceFromStream(largeFaceListId: string, image: msRest.HttpRequestBody, options?: Models.LargeFaceListAddFaceFromStreamOptionalParams | msRest.ServiceCallback<Models.PersistedFace>, callback?: msRest.ServiceCallback<Models.PersistedFace>): Promise<Models.LargeFaceListAddFaceFromStreamResponse> {
    return this.client.sendOperationRequest(
      {
        largeFaceListId,
        image,
        options
      },
      addFaceFromStreamOperationSpec,
      callback) as Promise<Models.LargeFaceListAddFaceFromStreamResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "largefacelists/{largeFaceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  requestBody: {
    parameterPath: {
      name: "name",
      userData: [
        "options",
        "userData"
      ],
      recognitionModel: [
        "options",
        "recognitionModel"
      ]
    },
    mapper: {
      ...Mappers.MetaDataContractMandatoryName,
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largefacelists/{largeFaceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  queryParameters: [
    Parameters.returnRecognitionModel
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LargeFaceList
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "largefacelists/{largeFaceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  requestBody: {
    parameterPath: {
      name: [
        "options",
        "name"
      ],
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.NameAndUserDataContract,
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
  path: "largefacelists/{largeFaceListId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getTrainingStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largefacelists/{largeFaceListId}/training",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TrainingStatus
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largefacelists",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.returnRecognitionModel
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
              className: "LargeFaceList"
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

const trainOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "largefacelists/{largeFaceListId}/train",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const deleteFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId,
    Parameters.persistedFaceId
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId,
    Parameters.persistedFaceId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const updateFaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId,
    Parameters.persistedFaceId
  ],
  requestBody: {
    parameterPath: {
      userData: [
        "options",
        "userData"
      ]
    },
    mapper: {
      ...Mappers.UpdateFaceRequest,
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

const addFaceFromUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "largefacelists/{largeFaceListId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace,
    Parameters.detectionModel
  ],
  requestBody: {
    parameterPath: {
      url: "url"
    },
    mapper: {
      ...Mappers.ImageUrl,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const listFacesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "largefacelists/{largeFaceListId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  queryParameters: [
    Parameters.start0,
    Parameters.top0
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
              className: "PersistedFace"
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

const addFaceFromStreamOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "largefacelists/{largeFaceListId}/persistedfaces",
  urlParameters: [
    Parameters.endpoint,
    Parameters.largeFaceListId
  ],
  queryParameters: [
    Parameters.userData,
    Parameters.targetFace,
    Parameters.detectionModel
  ],
  requestBody: {
    parameterPath: "image",
    mapper: {
      required: true,
      serializedName: "Image",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    200: {
      bodyMapper: Mappers.PersistedFace
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

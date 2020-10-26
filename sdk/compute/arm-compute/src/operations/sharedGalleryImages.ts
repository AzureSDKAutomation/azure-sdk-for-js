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
import * as Mappers from "../models/sharedGalleryImagesMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a SharedGalleryImages. */
export class SharedGalleryImages {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a SharedGalleryImages.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * List shared gallery images by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedGalleryImagesListResponse>
   */
  list(location: string, galleryUniqueName: string, options?: Models.SharedGalleryImagesListOptionalParams): Promise<Models.SharedGalleryImagesListResponse>;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param callback The callback
   */
  list(location: string, galleryUniqueName: string, callback: msRest.ServiceCallback<Models.SharedGalleryImageList>): void;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, galleryUniqueName: string, options: Models.SharedGalleryImagesListOptionalParams, callback: msRest.ServiceCallback<Models.SharedGalleryImageList>): void;
  list(location: string, galleryUniqueName: string, options?: Models.SharedGalleryImagesListOptionalParams | msRest.ServiceCallback<Models.SharedGalleryImageList>, callback?: msRest.ServiceCallback<Models.SharedGalleryImageList>): Promise<Models.SharedGalleryImagesListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        galleryUniqueName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SharedGalleryImagesListResponse>;
  }

  /**
   * Get a shared gallery image by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedGalleryImagesGetResponse>
   */
  get(location: string, galleryUniqueName: string, galleryImageName: string, options?: msRest.RequestOptionsBase): Promise<Models.SharedGalleryImagesGetResponse>;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param callback The callback
   */
  get(location: string, galleryUniqueName: string, galleryImageName: string, callback: msRest.ServiceCallback<Models.SharedGalleryImage>): void;
  /**
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   * Versions are to be listed.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(location: string, galleryUniqueName: string, galleryImageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SharedGalleryImage>): void;
  get(location: string, galleryUniqueName: string, galleryImageName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SharedGalleryImage>, callback?: msRest.ServiceCallback<Models.SharedGalleryImage>): Promise<Models.SharedGalleryImagesGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        galleryUniqueName,
        galleryImageName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SharedGalleryImagesGetResponse>;
  }

  /**
   * List shared gallery images by subscription id or tenant id.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedGalleryImagesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SharedGalleryImagesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SharedGalleryImageList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SharedGalleryImageList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SharedGalleryImageList>, callback?: msRest.ServiceCallback<Models.SharedGalleryImageList>): Promise<Models.SharedGalleryImagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SharedGalleryImagesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location0,
    Parameters.galleryUniqueName
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.sharedTo
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location0,
    Parameters.galleryUniqueName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

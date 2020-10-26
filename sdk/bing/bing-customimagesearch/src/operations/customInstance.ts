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
import * as Mappers from "../models/customInstanceMappers";
import * as Parameters from "../models/parameters";
import { CustomImageSearchClientContext } from "../customImageSearchClientContext";

/** Class representing a CustomInstance. */
export class CustomInstance {
  private readonly client: CustomImageSearchClientContext;

  /**
   * Create a CustomInstance.
   * @param {CustomImageSearchClientContext} client Reference to the service client.
   */
  constructor(client: CustomImageSearchClientContext) {
    this.client = client;
  }

  /**
   * @summary The Custom Image Search API lets you send an image search query to Bing and get image
   * results found in your custom view of the web.
   * @param customConfig The identifier for the custom search configuration
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/bing/bing-custom-search/overview)), you should
   * always include the user's query term. Use this parameter only with the Image Search API.Do not
   * specify this parameter when calling the Trending Images API.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomInstanceImageSearchResponse>
   */
  imageSearch(customConfig: string, query: string, options?: Models.CustomInstanceImageSearchOptionalParams): Promise<Models.CustomInstanceImageSearchResponse>;
  /**
   * @param customConfig The identifier for the custom search configuration
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/bing/bing-custom-search/overview)), you should
   * always include the user's query term. Use this parameter only with the Image Search API.Do not
   * specify this parameter when calling the Trending Images API.
   * @param callback The callback
   */
  imageSearch(customConfig: string, query: string, callback: msRest.ServiceCallback<Models.Images>): void;
  /**
   * @param customConfig The identifier for the custom search configuration
   * @param query The user's search query term. The term cannot be empty. The term may contain [Bing
   * Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit
   * images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx)
   * operator. To help improve relevance of an insights query (see
   * [insightsToken](https://docs.microsoft.com/en-us/bing/bing-custom-search/overview)), you should
   * always include the user's query term. Use this parameter only with the Image Search API.Do not
   * specify this parameter when calling the Trending Images API.
   * @param options The optional parameters
   * @param callback The callback
   */
  imageSearch(customConfig: string, query: string, options: Models.CustomInstanceImageSearchOptionalParams, callback: msRest.ServiceCallback<Models.Images>): void;
  imageSearch(customConfig: string, query: string, options?: Models.CustomInstanceImageSearchOptionalParams | msRest.ServiceCallback<Models.Images>, callback?: msRest.ServiceCallback<Models.Images>): Promise<Models.CustomInstanceImageSearchResponse> {
    return this.client.sendOperationRequest(
      {
        customConfig,
        query,
        options
      },
      imageSearchOperationSpec,
      callback) as Promise<Models.CustomInstanceImageSearchResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const imageSearchOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v7.0/custom/images/search",
  queryParameters: [
    Parameters.customConfig,
    Parameters.aspect,
    Parameters.color,
    Parameters.countryCode,
    Parameters.count,
    Parameters.freshness,
    Parameters.height,
    Parameters.id,
    Parameters.imageContent,
    Parameters.imageType,
    Parameters.license,
    Parameters.market,
    Parameters.maxFileSize,
    Parameters.maxHeight,
    Parameters.maxWidth,
    Parameters.minFileSize,
    Parameters.minHeight,
    Parameters.minWidth,
    Parameters.offset,
    Parameters.query,
    Parameters.safeSearch,
    Parameters.size,
    Parameters.setLang,
    Parameters.width
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Images
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

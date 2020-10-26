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
import * as Models from "./models";

const packageName = "@azure/bing-autosuggest";
const packageVersion = "1.0.0";

export class AutoSuggestClientContext extends msRest.ServiceClient {
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the AutoSuggestClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AutoSuggestClientOptions) {
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.baseUri = options.baseUri || this.baseUri || "https://api.bing.microsoft.com/v7.0";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
  }
}

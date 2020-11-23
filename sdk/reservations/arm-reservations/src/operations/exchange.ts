/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/exchangeMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a Exchange. */
export class Exchange {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a Exchange.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Returns one or more `Reservations` in exchange for one or more `Reservation` purchases.
   * @summary Exchange Reservation(s)
   * @param body Request containing the refunds and purchases that need to be executed.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExchangePostResponse>
   */
  post(body: Models.ExchangeRequest, options?: msRest.RequestOptionsBase): Promise<Models.ExchangePostResponse> {
    return this.beginPost(body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExchangePostResponse>;
  }

  /**
   * Returns one or more `Reservations` in exchange for one or more `Reservation` purchases.
   * @summary Exchange Reservation(s)
   * @param body Request containing the refunds and purchases that need to be executed.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPost(body: Models.ExchangeRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        options
      },
      beginPostOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginPostOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Capacity/exchange",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ExchangeRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExchangeOperationResultResponse,
      headersMapper: Mappers.ExchangePostHeaders
    },
    202: {
      headersMapper: Mappers.ExchangePostHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.ExchangePostHeaders
    }
  },
  serializer
};

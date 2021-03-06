// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const { DefaultAzureCredential } = require("@azure/identity");
const { DigitalTwinsClient } = require("@azure/digital-twins-core");
const { inspect } = require("util");

// Scenario example of how to:
// - delete models
//
// Preconditions:
// - Environment variables have to be set
// - DigitalTwins enabled device must exist on the ADT hub
async function main() {
  // - AZURE_DIGITALTWINS_URL: The tenant ID in Azure Active Directory
  const url = process.env.AZURE_DIGITALTWINS_URL;

  // DefaultAzureCredential expects the following three environment variables:
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application
  const credential = new DefaultAzureCredential();
  const serviceClient = new DigitalTwinsClient(url, credential);

  const modelId = ""; //Example: dtmi:samples:Building;1

  // Decomission models
  const response = await serviceClient.decomissionModel(modelId);
  console.log(`Decomission Model response:`);
  console.log(inspect(response));

  // Delete models
  response = await serviceClient.deleteModel(modelId);
  console.log(`Delete Model response:`);
  console.log(inspect(response));
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});

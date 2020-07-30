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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/managedClustersMappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClientContext } from "../containerServiceClientContext";

/** Class representing a ManagedClusters. */
export class ManagedClusters {
  private readonly client: ContainerServiceClientContext;

  /**
   * Create a ManagedClusters.
   * @param {ContainerServiceClientContext} client Reference to the service client.
   */
  constructor(client: ContainerServiceClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of managed clusters in the specified subscription. The operation returns properties
   * of each managed cluster.
   * @summary Gets a list of managed clusters in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.ManagedClusterListResult>): Promise<Models.ManagedClustersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ManagedClustersListResponse>;
  }

  /**
   * Lists managed clusters in the specified subscription and resource group. The operation returns
   * properties of each managed cluster.
   * @summary Lists managed clusters in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.ManagedClusterListResult>): Promise<Models.ManagedClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ManagedClustersListByResourceGroupResponse>;
  }

  /**
   * Gets the details of the upgrade profile for a managed cluster with a specified resource group
   * and name.
   * @summary Gets upgrade profile for a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersGetUpgradeProfileResponse>
   */
  getUpgradeProfile(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersGetUpgradeProfileResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param callback The callback
   */
  getUpgradeProfile(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ManagedClusterUpgradeProfile>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUpgradeProfile(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedClusterUpgradeProfile>): void;
  getUpgradeProfile(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedClusterUpgradeProfile>, callback?: msRest.ServiceCallback<Models.ManagedClusterUpgradeProfile>): Promise<Models.ManagedClustersGetUpgradeProfileResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getUpgradeProfileOperationSpec,
      callback) as Promise<Models.ManagedClustersGetUpgradeProfileResponse>;
  }

  /**
   * Gets the accessProfile for the specified role name of the managed cluster with a specified
   * resource group and name. **WARNING**: This API will be deprecated. Instead use
   * [ListClusterUserCredentials](https://docs.microsoft.com/en-us/rest/api/aks/managedclusters/listclusterusercredentials)
   * or
   * [ListClusterAdminCredentials](https://docs.microsoft.com/en-us/rest/api/aks/managedclusters/listclusteradmincredentials)
   * .
   * @summary Gets an access profile of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param roleName The name of the role for managed cluster accessProfile resource.
   * @param [options] The optional parameters
   * @deprecated This operation is deprecated. Please do not use it any longer.
   * @returns Promise<Models.ManagedClustersGetAccessProfileResponse>
   */
  getAccessProfile(resourceGroupName: string, resourceName: string, roleName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersGetAccessProfileResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param roleName The name of the role for managed cluster accessProfile resource.
   * @param callback The callback
   * @deprecated This operation is deprecated. Please do not use it any longer.
   */
  getAccessProfile(resourceGroupName: string, resourceName: string, roleName: string, callback: msRest.ServiceCallback<Models.ManagedClusterAccessProfile>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param roleName The name of the role for managed cluster accessProfile resource.
   * @param options The optional parameters
   * @param callback The callback
   * @deprecated This operation is deprecated. Please do not use it any longer.
   */
  getAccessProfile(resourceGroupName: string, resourceName: string, roleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedClusterAccessProfile>): void;
  getAccessProfile(resourceGroupName: string, resourceName: string, roleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedClusterAccessProfile>, callback?: msRest.ServiceCallback<Models.ManagedClusterAccessProfile>): Promise<Models.ManagedClustersGetAccessProfileResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        roleName,
        options
      },
      getAccessProfileOperationSpec,
      callback) as Promise<Models.ManagedClustersGetAccessProfileResponse>;
  }

  /**
   * Gets cluster admin credential of the managed cluster with a specified resource group and name.
   * @summary Gets cluster admin credential of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListClusterAdminCredentialsResponse>
   */
  listClusterAdminCredentials(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersListClusterAdminCredentialsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param callback The callback
   */
  listClusterAdminCredentials(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.CredentialResults>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listClusterAdminCredentials(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CredentialResults>): void;
  listClusterAdminCredentials(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CredentialResults>, callback?: msRest.ServiceCallback<Models.CredentialResults>): Promise<Models.ManagedClustersListClusterAdminCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listClusterAdminCredentialsOperationSpec,
      callback) as Promise<Models.ManagedClustersListClusterAdminCredentialsResponse>;
  }

  /**
   * Gets cluster user credential of the managed cluster with a specified resource group and name.
   * @summary Gets cluster user credential of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListClusterUserCredentialsResponse>
   */
  listClusterUserCredentials(resourceGroupName: string, resourceName: string, options?: Models.ManagedClustersListClusterUserCredentialsOptionalParams): Promise<Models.ManagedClustersListClusterUserCredentialsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param callback The callback
   */
  listClusterUserCredentials(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.CredentialResults>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listClusterUserCredentials(resourceGroupName: string, resourceName: string, options: Models.ManagedClustersListClusterUserCredentialsOptionalParams, callback: msRest.ServiceCallback<Models.CredentialResults>): void;
  listClusterUserCredentials(resourceGroupName: string, resourceName: string, options?: Models.ManagedClustersListClusterUserCredentialsOptionalParams | msRest.ServiceCallback<Models.CredentialResults>, callback?: msRest.ServiceCallback<Models.CredentialResults>): Promise<Models.ManagedClustersListClusterUserCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listClusterUserCredentialsOperationSpec,
      callback) as Promise<Models.ManagedClustersListClusterUserCredentialsResponse>;
  }

  /**
   * Gets cluster monitoring user credential of the managed cluster with a specified resource group
   * and name.
   * @summary Gets cluster monitoring user credential of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListClusterMonitoringUserCredentialsResponse>
   */
  listClusterMonitoringUserCredentials(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersListClusterMonitoringUserCredentialsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param callback The callback
   */
  listClusterMonitoringUserCredentials(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.CredentialResults>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listClusterMonitoringUserCredentials(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CredentialResults>): void;
  listClusterMonitoringUserCredentials(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CredentialResults>, callback?: msRest.ServiceCallback<Models.CredentialResults>): Promise<Models.ManagedClustersListClusterMonitoringUserCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listClusterMonitoringUserCredentialsOperationSpec,
      callback) as Promise<Models.ManagedClustersListClusterMonitoringUserCredentialsResponse>;
  }

  /**
   * Gets the details of the managed cluster with a specified resource group and name.
   * @summary Gets a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ManagedCluster>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedCluster>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedCluster>, callback?: msRest.ServiceCallback<Models.ManagedCluster>): Promise<Models.ManagedClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedClustersGetResponse>;
  }

  /**
   * Creates or updates a managed cluster with the specified configuration for agents and Kubernetes
   * version.
   * @summary Creates or updates a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Create or Update a Managed Cluster operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.ManagedCluster, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedClustersCreateOrUpdateResponse>;
  }

  /**
   * Updates a managed cluster with the specified tags.
   * @summary Updates tags on a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Update Managed Cluster Tags operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, resourceName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedClustersUpdateTagsResponse>;
  }

  /**
   * Deletes the managed cluster with a specified resource group and name.
   * @summary Deletes a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Update the service principal Profile for a managed cluster.
   * @summary Reset Service Principal Profile of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Reset Service Principal Profile operation for a
   * Managed Cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetServicePrincipalProfile(resourceGroupName: string, resourceName: string, parameters: Models.ManagedClusterServicePrincipalProfile, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResetServicePrincipalProfile(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Update the AAD Profile for a managed cluster.
   * @summary Reset AAD Profile of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Reset AAD Profile operation for a Managed Cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetAADProfile(resourceGroupName: string, resourceName: string, parameters: Models.ManagedClusterAADProfile, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResetAADProfile(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Rotate certificates of a managed cluster.
   * @summary Rotate certificates of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  rotateClusterCertificates(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRotateClusterCertificates(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a managed cluster with the specified configuration for agents and Kubernetes
   * version.
   * @summary Creates or updates a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Create or Update a Managed Cluster operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.ManagedCluster, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a managed cluster with the specified tags.
   * @summary Updates tags on a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Update Managed Cluster Tags operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, resourceName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Deletes the managed cluster with a specified resource group and name.
   * @summary Deletes a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Update the service principal Profile for a managed cluster.
   * @summary Reset Service Principal Profile of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Reset Service Principal Profile operation for a
   * Managed Cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResetServicePrincipalProfile(resourceGroupName: string, resourceName: string, parameters: Models.ManagedClusterServicePrincipalProfile, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginResetServicePrincipalProfileOperationSpec,
      options);
  }

  /**
   * Update the AAD Profile for a managed cluster.
   * @summary Reset AAD Profile of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Reset AAD Profile operation for a Managed Cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResetAADProfile(resourceGroupName: string, resourceName: string, parameters: Models.ManagedClusterAADProfile, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginResetAADProfileOperationSpec,
      options);
  }

  /**
   * Rotate certificates of a managed cluster.
   * @summary Rotate certificates of a managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRotateClusterCertificates(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginRotateClusterCertificatesOperationSpec,
      options);
  }

  /**
   * Gets a list of managed clusters in the specified subscription. The operation returns properties
   * of each managed cluster.
   * @summary Gets a list of managed clusters in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.ManagedClusterListResult>): Promise<Models.ManagedClustersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ManagedClustersListNextResponse>;
  }

  /**
   * Lists managed clusters in the specified subscription and resource group. The operation returns
   * properties of each managed cluster.
   * @summary Lists managed clusters in the specified subscription and resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedClustersListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedClustersListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedClusterListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.ManagedClusterListResult>): Promise<Models.ManagedClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ManagedClustersListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getUpgradeProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/upgradeProfiles/default",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedClusterUpgradeProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getAccessProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/accessProfiles/{roleName}/listCredential",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1,
    Parameters.roleName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedClusterAccessProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listClusterAdminCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterAdminCredential",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CredentialResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listClusterUserCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterUserCredential",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3,
    Parameters.format,
    Parameters.login
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CredentialResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listClusterMonitoringUserCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterMonitoringUserCredential",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CredentialResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedCluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCluster
    },
    201: {
      bodyMapper: Mappers.ManagedCluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginResetServicePrincipalProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resetServicePrincipalProfile",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedClusterServicePrincipalProfile,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginResetAADProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resetAADProfile",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedClusterAADProfile,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRotateClusterCertificatesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/rotateClusterCertificates",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName1
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
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
      bodyMapper: Mappers.ManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

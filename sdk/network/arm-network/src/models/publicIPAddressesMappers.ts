/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AadAuthenticationParameters,
  AddressSpace,
  ApplicationGateway,
  ApplicationGatewayAuthenticationCertificate,
  ApplicationGatewayAutoscaleConfiguration,
  ApplicationGatewayAvailableSslOptions,
  ApplicationGatewayBackendAddress,
  ApplicationGatewayBackendAddressPool,
  ApplicationGatewayBackendHttpSettings,
  ApplicationGatewayClientAuthConfiguration,
  ApplicationGatewayConnectionDraining,
  ApplicationGatewayCustomError,
  ApplicationGatewayFirewallDisabledRuleGroup,
  ApplicationGatewayFirewallExclusion,
  ApplicationGatewayFirewallRule,
  ApplicationGatewayFirewallRuleGroup,
  ApplicationGatewayFirewallRuleSet,
  ApplicationGatewayFrontendIPConfiguration,
  ApplicationGatewayFrontendPort,
  ApplicationGatewayHeaderConfiguration,
  ApplicationGatewayHttpListener,
  ApplicationGatewayIPConfiguration,
  ApplicationGatewayPathRule,
  ApplicationGatewayPrivateEndpointConnection,
  ApplicationGatewayPrivateLinkConfiguration,
  ApplicationGatewayPrivateLinkIpConfiguration,
  ApplicationGatewayPrivateLinkResource,
  ApplicationGatewayProbe,
  ApplicationGatewayProbeHealthResponseMatch,
  ApplicationGatewayRedirectConfiguration,
  ApplicationGatewayRequestRoutingRule,
  ApplicationGatewayRewriteRule,
  ApplicationGatewayRewriteRuleActionSet,
  ApplicationGatewayRewriteRuleCondition,
  ApplicationGatewayRewriteRuleSet,
  ApplicationGatewaySku,
  ApplicationGatewaySslCertificate,
  ApplicationGatewaySslPolicy,
  ApplicationGatewaySslPredefinedPolicy,
  ApplicationGatewaySslProfile,
  ApplicationGatewayTrustedClientCertificate,
  ApplicationGatewayTrustedRootCertificate,
  ApplicationGatewayUrlConfiguration,
  ApplicationGatewayUrlPathMap,
  ApplicationGatewayWebApplicationFirewallConfiguration,
  ApplicationRule,
  ApplicationSecurityGroup,
  AzureFirewall,
  AzureFirewallApplicationRule,
  AzureFirewallApplicationRuleCollection,
  AzureFirewallApplicationRuleProtocol,
  AzureFirewallFqdnTag,
  AzureFirewallIPConfiguration,
  AzureFirewallIpGroups,
  AzureFirewallNatRCAction,
  AzureFirewallNatRule,
  AzureFirewallNatRuleCollection,
  AzureFirewallNetworkRule,
  AzureFirewallNetworkRuleCollection,
  AzureFirewallPublicIPAddress,
  AzureFirewallRCAction,
  AzureFirewallSku,
  BackendAddressPool,
  BaseResource,
  BastionHost,
  BastionHostIPConfiguration,
  BGPCommunity,
  BgpConnection,
  BgpServiceCommunity,
  BgpSettings,
  BreakOutCategoryPolicies,
  CloudError,
  ConnectionMonitorDestination,
  ConnectionMonitorEndpoint,
  ConnectionMonitorEndpointFilter,
  ConnectionMonitorEndpointFilterItem,
  ConnectionMonitorEndpointScope,
  ConnectionMonitorEndpointScopeItem,
  ConnectionMonitorHttpConfiguration,
  ConnectionMonitorIcmpConfiguration,
  ConnectionMonitorOutput,
  ConnectionMonitorResult,
  ConnectionMonitorSource,
  ConnectionMonitorSuccessThreshold,
  ConnectionMonitorTcpConfiguration,
  ConnectionMonitorTestConfiguration,
  ConnectionMonitorTestGroup,
  ConnectionMonitorWorkspaceSettings,
  ConnectionSharedKey,
  Container,
  ContainerNetworkInterface,
  ContainerNetworkInterfaceConfiguration,
  ContainerNetworkInterfaceIpConfiguration,
  CustomDnsConfigPropertiesFormat,
  CustomIpPrefix,
  DdosCustomPolicy,
  DdosProtectionPlan,
  DdosSettings,
  Delegation,
  DeviceProperties,
  DhcpOptions,
  DnsSettings,
  DscpConfiguration,
  EndpointServiceResult,
  ExpressRouteCircuit,
  ExpressRouteCircuitAuthorization,
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringConfig,
  ExpressRouteCircuitPeeringId,
  ExpressRouteCircuitReference,
  ExpressRouteCircuitServiceProviderProperties,
  ExpressRouteCircuitSku,
  ExpressRouteCircuitStats,
  ExpressRouteConnection,
  ExpressRouteConnectionId,
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionPeering,
  ExpressRouteGateway,
  ExpressRouteGatewayPropertiesAutoScaleConfiguration,
  ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds,
  ExpressRouteLink,
  ExpressRouteLinkMacSecConfig,
  ExpressRoutePort,
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationBandwidths,
  ExpressRouteServiceProvider,
  ExpressRouteServiceProviderBandwidthsOffered,
  ExtendedLocation,
  FirewallPolicy,
  FirewallPolicyCertificateAuthority,
  FirewallPolicyFilterRuleCollection,
  FirewallPolicyFilterRuleCollectionAction,
  FirewallPolicyIntrusionDetection,
  FirewallPolicyIntrusionDetectionBypassTrafficSpecifications,
  FirewallPolicyIntrusionDetectionConfiguration,
  FirewallPolicyIntrusionDetectionSignatureSpecification,
  FirewallPolicyNatRuleCollection,
  FirewallPolicyNatRuleCollectionAction,
  FirewallPolicyRule,
  FirewallPolicyRuleApplicationProtocol,
  FirewallPolicyRuleCollection,
  FirewallPolicyRuleCollectionGroup,
  FirewallPolicySku,
  FirewallPolicyThreatIntelWhitelist,
  FirewallPolicyTransportSecurity,
  FlowLog,
  FlowLogFormatParameters,
  FrontendIPConfiguration,
  HTTPHeader,
  HubIPAddresses,
  HubIpConfiguration,
  HubPublicIPAddresses,
  HubRoute,
  HubRouteTable,
  HubVirtualNetworkConnection,
  InboundNatPool,
  InboundNatRule,
  InboundSecurityRule,
  InboundSecurityRules,
  IpAllocation,
  IPConfiguration,
  IPConfigurationBgpPeeringAddress,
  IPConfigurationProfile,
  IpGroup,
  IpsecPolicy,
  IpTag,
  Ipv6CircuitConnectionConfig,
  Ipv6ExpressRouteCircuitPeeringConfig,
  LoadBalancer,
  LoadBalancerBackendAddress,
  LoadBalancerSku,
  LoadBalancingRule,
  LocalNetworkGateway,
  ManagedRuleGroupOverride,
  ManagedRuleOverride,
  ManagedRulesDefinition,
  ManagedRuleSet,
  ManagedServiceIdentity,
  ManagedServiceIdentityUserAssignedIdentitiesValue,
  MatchCondition,
  MatchVariable,
  NatGateway,
  NatGatewaySku,
  NatRule,
  NetworkIntentPolicy,
  NetworkInterface,
  NetworkInterfaceDnsSettings,
  NetworkInterfaceIPConfiguration,
  NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties,
  NetworkInterfaceTapConfiguration,
  NetworkProfile,
  NetworkRule,
  NetworkSecurityGroup,
  NetworkVirtualAppliance,
  NetworkVirtualApplianceSku,
  NetworkVirtualApplianceSkuInstances,
  NetworkWatcher,
  O365BreakOutCategoryPolicies,
  O365PolicyProperties,
  Office365PolicyProperties,
  OutboundRule,
  OwaspCrsExclusionEntry,
  P2SConnectionConfiguration,
  P2SVpnGateway,
  PatchRouteFilter,
  PatchRouteFilterRule,
  PeerExpressRouteCircuitConnection,
  PolicySettings,
  PrivateDnsZoneConfig,
  PrivateDnsZoneGroup,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkService,
  PrivateLinkServiceConnection,
  PrivateLinkServiceConnectionState,
  PrivateLinkServiceIpConfiguration,
  PrivateLinkServicePropertiesAutoApproval,
  PrivateLinkServicePropertiesVisibility,
  Probe,
  PropagatedRouteTable,
  ProtocolCustomSettingsFormat,
  PublicIPAddress,
  PublicIPAddressDnsSettings,
  PublicIPAddressListResult,
  PublicIPAddressSku,
  PublicIPPrefix,
  PublicIPPrefixSku,
  QosIpRange,
  QosPortRange,
  RadiusServer,
  RecordSet,
  ReferencedPublicIpAddress,
  Resource,
  ResourceNavigationLink,
  ResourceSet,
  RetentionPolicyParameters,
  Route,
  RouteFilter,
  RouteFilterRule,
  RouteTable,
  RoutingConfiguration,
  SecurityPartnerProvider,
  SecurityRule,
  ServiceAssociationLink,
  ServiceEndpointPolicy,
  ServiceEndpointPolicyDefinition,
  ServiceEndpointPropertiesFormat,
  StaticRoute,
  Subnet,
  SubResource,
  TagsObject,
  TrafficAnalyticsConfigurationProperties,
  TrafficAnalyticsProperties,
  TrafficSelectorPolicy,
  TunnelConnectionHealth,
  VirtualApplianceNicProperties,
  VirtualApplianceSite,
  VirtualApplianceSkuProperties,
  VirtualHub,
  VirtualHubId,
  VirtualHubRoute,
  VirtualHubRouteTable,
  VirtualHubRouteTableV2,
  VirtualHubRouteV2,
  VirtualNetwork,
  VirtualNetworkBgpCommunities,
  VirtualNetworkConnectionGatewayReference,
  VirtualNetworkGateway,
  VirtualNetworkGatewayConnection,
  VirtualNetworkGatewayConnectionListEntity,
  VirtualNetworkGatewayIPConfiguration,
  VirtualNetworkGatewaySku,
  VirtualNetworkPeering,
  VirtualNetworkTap,
  VirtualRouter,
  VirtualRouterPeering,
  VirtualWAN,
  VM,
  VnetRoute,
  VpnClientConfiguration,
  VpnClientConnectionHealth,
  VpnClientRevokedCertificate,
  VpnClientRootCertificate,
  VpnConnection,
  VpnGateway,
  VpnGatewayIpConfiguration,
  VpnGatewayNatRule,
  VpnLinkBgpSettings,
  VpnLinkProviderProperties,
  VpnNatRuleMapping,
  VpnServerConfigRadiusClientRootCertificate,
  VpnServerConfigRadiusServerRootCertificate,
  VpnServerConfiguration,
  VpnServerConfigVpnClientRevokedCertificate,
  VpnServerConfigVpnClientRootCertificate,
  VpnSite,
  VpnSiteLink,
  VpnSiteLinkConnection,
  WebApplicationFirewallCustomRule,
  WebApplicationFirewallPolicy
} from "../models/mappers";

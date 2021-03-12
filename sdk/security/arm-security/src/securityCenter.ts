/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SecurityCenterContext } from "./securityCenterContext";


class SecurityCenter extends SecurityCenterContext {
  // Operation groups
  complianceResults: operations.ComplianceResults;
  pricings: operations.Pricings;
  settings: operations.Settings;
  advancedThreatProtection: operations.AdvancedThreatProtection;
  deviceSecurityGroups: operations.DeviceSecurityGroups;
  iotSecuritySolution: operations.IotSecuritySolution;
  iotSecuritySolutionAnalytics: operations.IotSecuritySolutionAnalytics;
  iotSecuritySolutionsAnalyticsAggregatedAlert: operations.IotSecuritySolutionsAnalyticsAggregatedAlert;
  iotSecuritySolutionsAnalyticsRecommendation: operations.IotSecuritySolutionsAnalyticsRecommendation;
  iotAlertTypes: operations.IotAlertTypes;
  iotAlerts: operations.IotAlerts;
  iotRecommendationTypes: operations.IotRecommendationTypes;
  iotRecommendations: operations.IotRecommendations;
  locations: operations.Locations;
  operations: operations.Operations;
  tasks: operations.Tasks;
  autoProvisioningSettings: operations.AutoProvisioningSettings;
  compliances: operations.Compliances;
  informationProtectionPolicies: operations.InformationProtectionPolicies;
  securityContacts: operations.SecurityContacts;
  workspaceSettings: operations.WorkspaceSettings;
  regulatoryComplianceStandards: operations.RegulatoryComplianceStandards;
  regulatoryComplianceControls: operations.RegulatoryComplianceControls;
  regulatoryComplianceAssessments: operations.RegulatoryComplianceAssessments;
  subAssessments: operations.SubAssessments;
  automations: operations.Automations;
  alertsSuppressionRules: operations.AlertsSuppressionRules;
  serverVulnerabilityAssessment: operations.ServerVulnerabilityAssessmentOperations;
  assessmentsMetadata: operations.AssessmentsMetadata;
  assessments: operations.Assessments;
  adaptiveApplicationControls: operations.AdaptiveApplicationControls;
  adaptiveNetworkHardenings: operations.AdaptiveNetworkHardenings;
  allowedConnections: operations.AllowedConnections;
  topology: operations.Topology;
  jitNetworkAccessPolicies: operations.JitNetworkAccessPolicies;
  discoveredSecuritySolutions: operations.DiscoveredSecuritySolutions;
  securitySolutionsReferenceData: operations.SecuritySolutionsReferenceDataOperations;
  externalSecuritySolutions: operations.ExternalSecuritySolutions;
  secureScores: operations.SecureScores;
  secureScoreControls: operations.SecureScoreControls;
  secureScoreControlDefinitions: operations.SecureScoreControlDefinitions;
  securitySolutions: operations.SecuritySolutions;
  connectors: operations.Connectors;
  sqlVulnerabilityAssessmentScans: operations.SqlVulnerabilityAssessmentScans;
  sqlVulnerabilityAssessmentScanResults: operations.SqlVulnerabilityAssessmentScanResults;
  sqlVulnerabilityAssessmentBaselineRules: operations.SqlVulnerabilityAssessmentBaselineRules;
  iotDefenderSettings: operations.IotDefenderSettings;
  iotSensors: operations.IotSensors;
  devicesForSubscription: operations.DevicesForSubscription;
  devicesForHub: operations.DevicesForHub;
  device: operations.DeviceOperations;
  onPremiseIotSensors: operations.OnPremiseIotSensors;
  iotSites: operations.IotSites;
  alerts: operations.Alerts;

  /**
   * Initializes a new instance of the SecurityCenter class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure subscription ID
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved
   * from Get locations
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, ascLocation: string, options?: Models.SecurityCenterOptions) {
    super(credentials, subscriptionId, ascLocation, options);
    this.complianceResults = new operations.ComplianceResults(this);
    this.pricings = new operations.Pricings(this);
    this.settings = new operations.Settings(this);
    this.advancedThreatProtection = new operations.AdvancedThreatProtection(this);
    this.deviceSecurityGroups = new operations.DeviceSecurityGroups(this);
    this.iotSecuritySolution = new operations.IotSecuritySolution(this);
    this.iotSecuritySolutionAnalytics = new operations.IotSecuritySolutionAnalytics(this);
    this.iotSecuritySolutionsAnalyticsAggregatedAlert = new operations.IotSecuritySolutionsAnalyticsAggregatedAlert(this);
    this.iotSecuritySolutionsAnalyticsRecommendation = new operations.IotSecuritySolutionsAnalyticsRecommendation(this);
    this.iotAlertTypes = new operations.IotAlertTypes(this);
    this.iotAlerts = new operations.IotAlerts(this);
    this.iotRecommendationTypes = new operations.IotRecommendationTypes(this);
    this.iotRecommendations = new operations.IotRecommendations(this);
    this.locations = new operations.Locations(this);
    this.operations = new operations.Operations(this);
    this.tasks = new operations.Tasks(this);
    this.autoProvisioningSettings = new operations.AutoProvisioningSettings(this);
    this.compliances = new operations.Compliances(this);
    this.informationProtectionPolicies = new operations.InformationProtectionPolicies(this);
    this.securityContacts = new operations.SecurityContacts(this);
    this.workspaceSettings = new operations.WorkspaceSettings(this);
    this.regulatoryComplianceStandards = new operations.RegulatoryComplianceStandards(this);
    this.regulatoryComplianceControls = new operations.RegulatoryComplianceControls(this);
    this.regulatoryComplianceAssessments = new operations.RegulatoryComplianceAssessments(this);
    this.subAssessments = new operations.SubAssessments(this);
    this.automations = new operations.Automations(this);
    this.alertsSuppressionRules = new operations.AlertsSuppressionRules(this);
    this.serverVulnerabilityAssessment = new operations.ServerVulnerabilityAssessmentOperations(this);
    this.assessmentsMetadata = new operations.AssessmentsMetadata(this);
    this.assessments = new operations.Assessments(this);
    this.adaptiveApplicationControls = new operations.AdaptiveApplicationControls(this);
    this.adaptiveNetworkHardenings = new operations.AdaptiveNetworkHardenings(this);
    this.allowedConnections = new operations.AllowedConnections(this);
    this.topology = new operations.Topology(this);
    this.jitNetworkAccessPolicies = new operations.JitNetworkAccessPolicies(this);
    this.discoveredSecuritySolutions = new operations.DiscoveredSecuritySolutions(this);
    this.securitySolutionsReferenceData = new operations.SecuritySolutionsReferenceDataOperations(this);
    this.externalSecuritySolutions = new operations.ExternalSecuritySolutions(this);
    this.secureScores = new operations.SecureScores(this);
    this.secureScoreControls = new operations.SecureScoreControls(this);
    this.secureScoreControlDefinitions = new operations.SecureScoreControlDefinitions(this);
    this.securitySolutions = new operations.SecuritySolutions(this);
    this.connectors = new operations.Connectors(this);
    this.sqlVulnerabilityAssessmentScans = new operations.SqlVulnerabilityAssessmentScans(this);
    this.sqlVulnerabilityAssessmentScanResults = new operations.SqlVulnerabilityAssessmentScanResults(this);
    this.sqlVulnerabilityAssessmentBaselineRules = new operations.SqlVulnerabilityAssessmentBaselineRules(this);
    this.iotDefenderSettings = new operations.IotDefenderSettings(this);
    this.iotSensors = new operations.IotSensors(this);
    this.devicesForSubscription = new operations.DevicesForSubscription(this);
    this.devicesForHub = new operations.DevicesForHub(this);
    this.device = new operations.DeviceOperations(this);
    this.onPremiseIotSensors = new operations.OnPremiseIotSensors(this);
    this.iotSites = new operations.IotSites(this);
    this.alerts = new operations.Alerts(this);
  }
}

// Operation Specifications

export {
  SecurityCenter,
  SecurityCenterContext,
  Models as SecurityCenterModels,
  Mappers as SecurityCenterMappers
};
export * from "./operations";

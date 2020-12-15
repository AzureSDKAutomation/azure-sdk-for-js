/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  AdditionalCapabilities,
  AdditionalUnattendContent,
  ApiEntityReference,
  ApiError,
  ApiErrorBase,
  ApplicationProfile,
  AutomaticOSUpgradePolicy,
  AutomaticOSUpgradeProperties,
  AutomaticRepairsPolicy,
  AvailabilitySet,
  AvailabilitySetUpdate,
  AvailablePatchSummary,
  BaseResource,
  BillingProfile,
  BootDiagnostics,
  BootDiagnosticsInstanceView,
  CloudError,
  ContainerService,
  ContainerServiceAgentPoolProfile,
  ContainerServiceCustomProfile,
  ContainerServiceDiagnosticsProfile,
  ContainerServiceLinuxProfile,
  ContainerServiceMasterProfile,
  ContainerServiceOrchestratorProfile,
  ContainerServiceServicePrincipalProfile,
  ContainerServiceSshConfiguration,
  ContainerServiceSshPublicKey,
  ContainerServiceVMDiagnostics,
  ContainerServiceWindowsProfile,
  CreationData,
  DataDisk,
  DataDiskImage,
  DataDiskImageEncryption,
  DedicatedHost,
  DedicatedHostAllocatableVM,
  DedicatedHostAvailableCapacity,
  DedicatedHostGroup,
  DedicatedHostGroupInstanceView,
  DedicatedHostGroupUpdate,
  DedicatedHostInstanceView,
  DedicatedHostInstanceViewWithName,
  DedicatedHostUpdate,
  DiagnosticsProfile,
  DiffDiskSettings,
  Disallowed,
  DisallowedConfiguration,
  Disk,
  DiskAccess,
  DiskEncryptionSet,
  DiskEncryptionSetParameters,
  DiskEncryptionSettings,
  DiskImageEncryption,
  DiskInstanceView,
  DiskSku,
  Encryption,
  EncryptionImages,
  EncryptionSetIdentity,
  EncryptionSettingsCollection,
  EncryptionSettingsElement,
  ExtendedLocation,
  Gallery,
  GalleryApplication,
  GalleryApplicationUpdate,
  GalleryApplicationVersion,
  GalleryApplicationVersionPublishingProfile,
  GalleryApplicationVersionUpdate,
  GalleryArtifactPublishingProfileBase,
  GalleryArtifactVersionSource,
  GalleryDataDiskImage,
  GalleryDiskImage,
  GalleryIdentifier,
  GalleryImage,
  GalleryImageFeature,
  GalleryImageIdentifier,
  GalleryImageUpdate,
  GalleryImageVersion,
  GalleryImageVersionPublishingProfile,
  GalleryImageVersionStorageProfile,
  GalleryImageVersionUpdate,
  GalleryOSDiskImage,
  GalleryUpdate,
  HardwareProfile,
  Image,
  ImageDataDisk,
  ImageDisk,
  ImageDiskReference,
  ImageOSDisk,
  ImagePurchasePlan,
  ImageReference,
  ImageStorageProfile,
  ImageUpdate,
  InnerError,
  InstanceViewStatus,
  KeyVaultAndKeyReference,
  KeyVaultAndSecretReference,
  KeyVaultKeyReference,
  KeyVaultSecretReference,
  LastPatchInstallationSummary,
  LinuxConfiguration,
  LinuxParameters,
  LinuxPatchSettings,
  MaintenanceRedeployStatus,
  ManagedDiskParameters,
  NetworkInterfaceReference,
  NetworkProfile,
  OSDisk,
  OSDiskImage,
  OSDiskImageEncryption,
  OSProfile,
  PatchInstallationDetail,
  Plan,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkServiceConnectionState,
  ProximityPlacementGroup,
  ProximityPlacementGroupUpdate,
  PurchasePlan,
  RecommendedMachineConfiguration,
  RegionalReplicationStatus,
  ReplicationStatus,
  Resource,
  ResourceRange,
  RetrieveBootDiagnosticsDataResult,
  RollingUpgradePolicy,
  RollingUpgradeProgressInfo,
  RollingUpgradeRunningStatus,
  RollingUpgradeStatusInfo,
  RunCommandInput,
  RunCommandInputParameter,
  RunCommandResult,
  ScaleInPolicy,
  ScheduledEventsProfile,
  SecurityProfile,
  ShareInfoElement,
  SharingProfile,
  SharingProfileGroup,
  SharingUpdate,
  Sku,
  Snapshot,
  SnapshotSku,
  SourceVault,
  SshConfiguration,
  SshPublicKey,
  SshPublicKeyResource,
  SshPublicKeyUpdateResource,
  StorageProfile,
  SubResource,
  SubResourceReadOnly,
  SubResourceWithColocationStatus,
  TargetRegion,
  TerminateNotificationProfile,
  UefiSettings,
  UpdateResource,
  UpdateResourceDefinition,
  UpgradePolicy,
  UserArtifactSource,
  VaultCertificate,
  VaultSecretGroup,
  VirtualHardDisk,
  VirtualMachine,
  VirtualMachineAgentInstanceView,
  VirtualMachineAssessPatchesResult,
  VirtualMachineCaptureParameters,
  VirtualMachineCaptureResult,
  VirtualMachineExtension,
  VirtualMachineExtensionHandlerInstanceView,
  VirtualMachineExtensionImage,
  VirtualMachineExtensionInstanceView,
  VirtualMachineExtensionUpdate,
  VirtualMachineHealthStatus,
  VirtualMachineIdentity,
  VirtualMachineIdentityUserAssignedIdentitiesValue,
  VirtualMachineImage,
  VirtualMachineImageFeature,
  VirtualMachineImageResource,
  VirtualMachineInstallPatchesParameters,
  VirtualMachineInstallPatchesResult,
  VirtualMachineInstanceView,
  VirtualMachineListResult,
  VirtualMachinePatchStatus,
  VirtualMachineReimageParameters,
  VirtualMachineScaleSet,
  VirtualMachineScaleSetDataDisk,
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionProfile,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetIdentity,
  VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue,
  VirtualMachineScaleSetIPConfiguration,
  VirtualMachineScaleSetIpTag,
  VirtualMachineScaleSetManagedDiskParameters,
  VirtualMachineScaleSetNetworkConfiguration,
  VirtualMachineScaleSetNetworkConfigurationDnsSettings,
  VirtualMachineScaleSetNetworkProfile,
  VirtualMachineScaleSetOSDisk,
  VirtualMachineScaleSetOSProfile,
  VirtualMachineScaleSetPublicIPAddressConfiguration,
  VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings,
  VirtualMachineScaleSetReimageParameters,
  VirtualMachineScaleSetStorageProfile,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetUpdateIPConfiguration,
  VirtualMachineScaleSetUpdateNetworkConfiguration,
  VirtualMachineScaleSetUpdateNetworkProfile,
  VirtualMachineScaleSetUpdateOSDisk,
  VirtualMachineScaleSetUpdateOSProfile,
  VirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
  VirtualMachineScaleSetUpdateStorageProfile,
  VirtualMachineScaleSetUpdateVMProfile,
  VirtualMachineScaleSetVM,
  VirtualMachineScaleSetVMInstanceView,
  VirtualMachineScaleSetVMNetworkProfileConfiguration,
  VirtualMachineScaleSetVMProfile,
  VirtualMachineScaleSetVMProtectionPolicy,
  VirtualMachineScaleSetVMReimageParameters,
  VirtualMachineSize,
  VirtualMachineSizeListResult,
  VirtualMachineSoftwarePatchProperties,
  VirtualMachineUpdate,
  VMGalleryApplication,
  WindowsConfiguration,
  WindowsParameters,
  WindowsPatchSettings,
  WinRMConfiguration,
  WinRMListener
} from "../models/mappers";

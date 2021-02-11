"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./attachedVolumes"), exports);
__exportStar(require("./backupUnit"), exports);
__exportStar(require("./backupUnitProperties"), exports);
__exportStar(require("./backupUnitSSO"), exports);
__exportStar(require("./backupUnits"), exports);
__exportStar(require("./balancedNics"), exports);
__exportStar(require("./cdroms"), exports);
__exportStar(require("./connectableDatacenter"), exports);
__exportStar(require("./contract"), exports);
__exportStar(require("./contractProperties"), exports);
__exportStar(require("./dataCenterEntities"), exports);
__exportStar(require("./datacenter"), exports);
__exportStar(require("./datacenterElementMetadata"), exports);
__exportStar(require("./datacenterProperties"), exports);
__exportStar(require("./datacenters"), exports);
__exportStar(require("./errorMessage"), exports);
__exportStar(require("./firewallRule"), exports);
__exportStar(require("./firewallRules"), exports);
__exportStar(require("./firewallruleProperties"), exports);
__exportStar(require("./group"), exports);
__exportStar(require("./groupEntities"), exports);
__exportStar(require("./groupMembers"), exports);
__exportStar(require("./groupProperties"), exports);
__exportStar(require("./groupShare"), exports);
__exportStar(require("./groupShareProperties"), exports);
__exportStar(require("./groupShares"), exports);
__exportStar(require("./groupUsers"), exports);
__exportStar(require("./groups"), exports);
__exportStar(require("./iPFailover"), exports);
__exportStar(require("./image"), exports);
__exportStar(require("./imageProperties"), exports);
__exportStar(require("./images"), exports);
__exportStar(require("./info"), exports);
__exportStar(require("./ipBlock"), exports);
__exportStar(require("./ipBlockProperties"), exports);
__exportStar(require("./ipBlocks"), exports);
__exportStar(require("./ipConsumer"), exports);
__exportStar(require("./kubernetesAutoScaling"), exports);
__exportStar(require("./kubernetesCluster"), exports);
__exportStar(require("./kubernetesClusterEntities"), exports);
__exportStar(require("./kubernetesClusterProperties"), exports);
__exportStar(require("./kubernetesClusterPropertiesForPostAndPut"), exports);
__exportStar(require("./kubernetesClusters"), exports);
__exportStar(require("./kubernetesConfig"), exports);
__exportStar(require("./kubernetesConfigProperties"), exports);
__exportStar(require("./kubernetesMaintenanceWindow"), exports);
__exportStar(require("./kubernetesNode"), exports);
__exportStar(require("./kubernetesNodeMetadata"), exports);
__exportStar(require("./kubernetesNodePool"), exports);
__exportStar(require("./kubernetesNodePoolForPut"), exports);
__exportStar(require("./kubernetesNodePoolLan"), exports);
__exportStar(require("./kubernetesNodePoolProperties"), exports);
__exportStar(require("./kubernetesNodePoolPropertiesForPost"), exports);
__exportStar(require("./kubernetesNodePoolPropertiesForPut"), exports);
__exportStar(require("./kubernetesNodePools"), exports);
__exportStar(require("./kubernetesNodeProperties"), exports);
__exportStar(require("./kubernetesNodes"), exports);
__exportStar(require("./label"), exports);
__exportStar(require("./labelProperties"), exports);
__exportStar(require("./labelResource"), exports);
__exportStar(require("./labelResourceProperties"), exports);
__exportStar(require("./labelResources"), exports);
__exportStar(require("./labels"), exports);
__exportStar(require("./lan"), exports);
__exportStar(require("./lanEntities"), exports);
__exportStar(require("./lanNics"), exports);
__exportStar(require("./lanPost"), exports);
__exportStar(require("./lanProperties"), exports);
__exportStar(require("./lanPropertiesPost"), exports);
__exportStar(require("./lans"), exports);
__exportStar(require("./loadbalancer"), exports);
__exportStar(require("./loadbalancerEntities"), exports);
__exportStar(require("./loadbalancerProperties"), exports);
__exportStar(require("./loadbalancers"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./locationProperties"), exports);
__exportStar(require("./locations"), exports);
__exportStar(require("./modelError"), exports);
__exportStar(require("./nic"), exports);
__exportStar(require("./nicEntities"), exports);
__exportStar(require("./nicProperties"), exports);
__exportStar(require("./nics"), exports);
__exportStar(require("./noStateMetaData"), exports);
__exportStar(require("./paginationLinks"), exports);
__exportStar(require("./peer"), exports);
__exportStar(require("./privateCrossConnect"), exports);
__exportStar(require("./privateCrossConnectProperties"), exports);
__exportStar(require("./privateCrossConnects"), exports);
__exportStar(require("./request"), exports);
__exportStar(require("./requestMetadata"), exports);
__exportStar(require("./requestProperties"), exports);
__exportStar(require("./requestStatus"), exports);
__exportStar(require("./requestStatusMetadata"), exports);
__exportStar(require("./requestTarget"), exports);
__exportStar(require("./requests"), exports);
__exportStar(require("./resource"), exports);
__exportStar(require("./resourceEntities"), exports);
__exportStar(require("./resourceGroups"), exports);
__exportStar(require("./resourceLimits"), exports);
__exportStar(require("./resourceProperties"), exports);
__exportStar(require("./resourceReference"), exports);
__exportStar(require("./resources"), exports);
__exportStar(require("./resourcesUsers"), exports);
__exportStar(require("./s3Key"), exports);
__exportStar(require("./s3KeyMetadata"), exports);
__exportStar(require("./s3KeyProperties"), exports);
__exportStar(require("./s3Keys"), exports);
__exportStar(require("./s3ObjectStorageSSO"), exports);
__exportStar(require("./server"), exports);
__exportStar(require("./serverEntities"), exports);
__exportStar(require("./serverProperties"), exports);
__exportStar(require("./servers"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./snapshotProperties"), exports);
__exportStar(require("./snapshots"), exports);
__exportStar(require("./type"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userMetadata"), exports);
__exportStar(require("./userProperties"), exports);
__exportStar(require("./users"), exports);
__exportStar(require("./usersEntities"), exports);
__exportStar(require("./volume"), exports);
__exportStar(require("./volumeProperties"), exports);
__exportStar(require("./volumes"), exports);
var attachedVolumes_1 = require("./attachedVolumes");
var backupUnit_1 = require("./backupUnit");
var backupUnitProperties_1 = require("./backupUnitProperties");
var backupUnitSSO_1 = require("./backupUnitSSO");
var backupUnits_1 = require("./backupUnits");
var balancedNics_1 = require("./balancedNics");
var cdroms_1 = require("./cdroms");
var connectableDatacenter_1 = require("./connectableDatacenter");
var contract_1 = require("./contract");
var contractProperties_1 = require("./contractProperties");
var dataCenterEntities_1 = require("./dataCenterEntities");
var datacenter_1 = require("./datacenter");
var datacenterElementMetadata_1 = require("./datacenterElementMetadata");
var datacenterProperties_1 = require("./datacenterProperties");
var datacenters_1 = require("./datacenters");
var errorMessage_1 = require("./errorMessage");
var firewallRule_1 = require("./firewallRule");
var firewallRules_1 = require("./firewallRules");
var firewallruleProperties_1 = require("./firewallruleProperties");
var group_1 = require("./group");
var groupEntities_1 = require("./groupEntities");
var groupMembers_1 = require("./groupMembers");
var groupProperties_1 = require("./groupProperties");
var groupShare_1 = require("./groupShare");
var groupShareProperties_1 = require("./groupShareProperties");
var groupShares_1 = require("./groupShares");
var groupUsers_1 = require("./groupUsers");
var groups_1 = require("./groups");
var iPFailover_1 = require("./iPFailover");
var image_1 = require("./image");
var imageProperties_1 = require("./imageProperties");
var images_1 = require("./images");
var info_1 = require("./info");
var ipBlock_1 = require("./ipBlock");
var ipBlockProperties_1 = require("./ipBlockProperties");
var ipBlocks_1 = require("./ipBlocks");
var ipConsumer_1 = require("./ipConsumer");
var kubernetesAutoScaling_1 = require("./kubernetesAutoScaling");
var kubernetesCluster_1 = require("./kubernetesCluster");
var kubernetesClusterEntities_1 = require("./kubernetesClusterEntities");
var kubernetesClusterProperties_1 = require("./kubernetesClusterProperties");
var kubernetesClusterPropertiesForPostAndPut_1 = require("./kubernetesClusterPropertiesForPostAndPut");
var kubernetesClusters_1 = require("./kubernetesClusters");
var kubernetesConfig_1 = require("./kubernetesConfig");
var kubernetesConfigProperties_1 = require("./kubernetesConfigProperties");
var kubernetesMaintenanceWindow_1 = require("./kubernetesMaintenanceWindow");
var kubernetesNode_1 = require("./kubernetesNode");
var kubernetesNodeMetadata_1 = require("./kubernetesNodeMetadata");
var kubernetesNodePool_1 = require("./kubernetesNodePool");
var kubernetesNodePoolForPut_1 = require("./kubernetesNodePoolForPut");
var kubernetesNodePoolLan_1 = require("./kubernetesNodePoolLan");
var kubernetesNodePoolProperties_1 = require("./kubernetesNodePoolProperties");
var kubernetesNodePoolPropertiesForPost_1 = require("./kubernetesNodePoolPropertiesForPost");
var kubernetesNodePoolPropertiesForPut_1 = require("./kubernetesNodePoolPropertiesForPut");
var kubernetesNodePools_1 = require("./kubernetesNodePools");
var kubernetesNodeProperties_1 = require("./kubernetesNodeProperties");
var kubernetesNodes_1 = require("./kubernetesNodes");
var label_1 = require("./label");
var labelProperties_1 = require("./labelProperties");
var labelResource_1 = require("./labelResource");
var labelResourceProperties_1 = require("./labelResourceProperties");
var labelResources_1 = require("./labelResources");
var labels_1 = require("./labels");
var lan_1 = require("./lan");
var lanEntities_1 = require("./lanEntities");
var lanNics_1 = require("./lanNics");
var lanPost_1 = require("./lanPost");
var lanProperties_1 = require("./lanProperties");
var lanPropertiesPost_1 = require("./lanPropertiesPost");
var lans_1 = require("./lans");
var loadbalancer_1 = require("./loadbalancer");
var loadbalancerEntities_1 = require("./loadbalancerEntities");
var loadbalancerProperties_1 = require("./loadbalancerProperties");
var loadbalancers_1 = require("./loadbalancers");
var location_1 = require("./location");
var locationProperties_1 = require("./locationProperties");
var locations_1 = require("./locations");
var modelError_1 = require("./modelError");
var nic_1 = require("./nic");
var nicEntities_1 = require("./nicEntities");
var nicProperties_1 = require("./nicProperties");
var nics_1 = require("./nics");
var noStateMetaData_1 = require("./noStateMetaData");
var paginationLinks_1 = require("./paginationLinks");
var peer_1 = require("./peer");
var privateCrossConnect_1 = require("./privateCrossConnect");
var privateCrossConnectProperties_1 = require("./privateCrossConnectProperties");
var privateCrossConnects_1 = require("./privateCrossConnects");
var request_1 = require("./request");
var requestMetadata_1 = require("./requestMetadata");
var requestProperties_1 = require("./requestProperties");
var requestStatus_1 = require("./requestStatus");
var requestStatusMetadata_1 = require("./requestStatusMetadata");
var requestTarget_1 = require("./requestTarget");
var requests_1 = require("./requests");
var resource_1 = require("./resource");
var resourceEntities_1 = require("./resourceEntities");
var resourceGroups_1 = require("./resourceGroups");
var resourceLimits_1 = require("./resourceLimits");
var resourceProperties_1 = require("./resourceProperties");
var resourceReference_1 = require("./resourceReference");
var resources_1 = require("./resources");
var resourcesUsers_1 = require("./resourcesUsers");
var s3Key_1 = require("./s3Key");
var s3KeyMetadata_1 = require("./s3KeyMetadata");
var s3KeyProperties_1 = require("./s3KeyProperties");
var s3Keys_1 = require("./s3Keys");
var s3ObjectStorageSSO_1 = require("./s3ObjectStorageSSO");
var server_1 = require("./server");
var serverEntities_1 = require("./serverEntities");
var serverProperties_1 = require("./serverProperties");
var servers_1 = require("./servers");
var snapshot_1 = require("./snapshot");
var snapshotProperties_1 = require("./snapshotProperties");
var snapshots_1 = require("./snapshots");
var type_1 = require("./type");
var user_1 = require("./user");
var userMetadata_1 = require("./userMetadata");
var userProperties_1 = require("./userProperties");
var users_1 = require("./users");
var usersEntities_1 = require("./usersEntities");
var volume_1 = require("./volume");
var volumeProperties_1 = require("./volumeProperties");
var volumes_1 = require("./volumes");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "BackupUnit.TypeEnum": backupUnit_1.BackupUnit.TypeEnum,
    "BackupUnits.TypeEnum": backupUnits_1.BackupUnits.TypeEnum,
    "DatacenterElementMetadata.StateEnum": datacenterElementMetadata_1.DatacenterElementMetadata.StateEnum,
    "DatacenterProperties.FeaturesEnum": datacenterProperties_1.DatacenterProperties.FeaturesEnum,
    "FirewallruleProperties.ProtocolEnum": firewallruleProperties_1.FirewallruleProperties.ProtocolEnum,
    "FirewallruleProperties.SourceMacEnum": firewallruleProperties_1.FirewallruleProperties.SourceMacEnum,
    "FirewallruleProperties.SourceIpEnum": firewallruleProperties_1.FirewallruleProperties.SourceIpEnum,
    "FirewallruleProperties.TargetIpEnum": firewallruleProperties_1.FirewallruleProperties.TargetIpEnum,
    "ImageProperties.LicenceTypeEnum": imageProperties_1.ImageProperties.LicenceTypeEnum,
    "ImageProperties.ImageTypeEnum": imageProperties_1.ImageProperties.ImageTypeEnum,
    "KubernetesCluster.TypeEnum": kubernetesCluster_1.KubernetesCluster.TypeEnum,
    "KubernetesClusters.TypeEnum": kubernetesClusters_1.KubernetesClusters.TypeEnum,
    "KubernetesConfig.TypeEnum": kubernetesConfig_1.KubernetesConfig.TypeEnum,
    "KubernetesMaintenanceWindow.DayOfTheWeekEnum": kubernetesMaintenanceWindow_1.KubernetesMaintenanceWindow.DayOfTheWeekEnum,
    "KubernetesNode.TypeEnum": kubernetesNode_1.KubernetesNode.TypeEnum,
    "KubernetesNodeMetadata.StateEnum": kubernetesNodeMetadata_1.KubernetesNodeMetadata.StateEnum,
    "KubernetesNodePool.TypeEnum": kubernetesNodePool_1.KubernetesNodePool.TypeEnum,
    "KubernetesNodePoolForPut.TypeEnum": kubernetesNodePoolForPut_1.KubernetesNodePoolForPut.TypeEnum,
    "KubernetesNodePoolProperties.AvailabilityZoneEnum": kubernetesNodePoolProperties_1.KubernetesNodePoolProperties.AvailabilityZoneEnum,
    "KubernetesNodePoolProperties.StorageTypeEnum": kubernetesNodePoolProperties_1.KubernetesNodePoolProperties.StorageTypeEnum,
    "KubernetesNodePoolPropertiesForPost.AvailabilityZoneEnum": kubernetesNodePoolPropertiesForPost_1.KubernetesNodePoolPropertiesForPost.AvailabilityZoneEnum,
    "KubernetesNodePoolPropertiesForPost.StorageTypeEnum": kubernetesNodePoolPropertiesForPost_1.KubernetesNodePoolPropertiesForPost.StorageTypeEnum,
    "KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum": kubernetesNodePoolPropertiesForPut_1.KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum,
    "KubernetesNodePoolPropertiesForPut.StorageTypeEnum": kubernetesNodePoolPropertiesForPut_1.KubernetesNodePoolPropertiesForPut.StorageTypeEnum,
    "KubernetesNodePools.TypeEnum": kubernetesNodePools_1.KubernetesNodePools.TypeEnum,
    "KubernetesNodes.TypeEnum": kubernetesNodes_1.KubernetesNodes.TypeEnum,
    "Label.TypeEnum": label_1.Label.TypeEnum,
    "LabelResource.TypeEnum": labelResource_1.LabelResource.TypeEnum,
    "LabelResources.TypeEnum": labelResources_1.LabelResources.TypeEnum,
    "Labels.TypeEnum": labels_1.Labels.TypeEnum,
    "LoadbalancerProperties.IpEnum": loadbalancerProperties_1.LoadbalancerProperties.IpEnum,
    "LocationProperties.FeaturesEnum": locationProperties_1.LocationProperties.FeaturesEnum,
    "RequestStatusMetadata.StatusEnum": requestStatusMetadata_1.RequestStatusMetadata.StatusEnum,
    "RequestTarget.StatusEnum": requestTarget_1.RequestTarget.StatusEnum,
    "ServerProperties.AvailabilityZoneEnum": serverProperties_1.ServerProperties.AvailabilityZoneEnum,
    "ServerProperties.VmStateEnum": serverProperties_1.ServerProperties.VmStateEnum,
    "SnapshotProperties.LicenceTypeEnum": snapshotProperties_1.SnapshotProperties.LicenceTypeEnum,
    "Type": type_1.Type,
    "VolumeProperties.TypeEnum": volumeProperties_1.VolumeProperties.TypeEnum,
    "VolumeProperties.AvailabilityZoneEnum": volumeProperties_1.VolumeProperties.AvailabilityZoneEnum,
    "VolumeProperties.BusEnum": volumeProperties_1.VolumeProperties.BusEnum,
    "VolumeProperties.LicenceTypeEnum": volumeProperties_1.VolumeProperties.LicenceTypeEnum,
};
var typeMap = {
    "AttachedVolumes": attachedVolumes_1.AttachedVolumes,
    "BackupUnit": backupUnit_1.BackupUnit,
    "BackupUnitProperties": backupUnitProperties_1.BackupUnitProperties,
    "BackupUnitSSO": backupUnitSSO_1.BackupUnitSSO,
    "BackupUnits": backupUnits_1.BackupUnits,
    "BalancedNics": balancedNics_1.BalancedNics,
    "Cdroms": cdroms_1.Cdroms,
    "ConnectableDatacenter": connectableDatacenter_1.ConnectableDatacenter,
    "Contract": contract_1.Contract,
    "ContractProperties": contractProperties_1.ContractProperties,
    "DataCenterEntities": dataCenterEntities_1.DataCenterEntities,
    "Datacenter": datacenter_1.Datacenter,
    "DatacenterElementMetadata": datacenterElementMetadata_1.DatacenterElementMetadata,
    "DatacenterProperties": datacenterProperties_1.DatacenterProperties,
    "Datacenters": datacenters_1.Datacenters,
    "ErrorMessage": errorMessage_1.ErrorMessage,
    "FirewallRule": firewallRule_1.FirewallRule,
    "FirewallRules": firewallRules_1.FirewallRules,
    "FirewallruleProperties": firewallruleProperties_1.FirewallruleProperties,
    "Group": group_1.Group,
    "GroupEntities": groupEntities_1.GroupEntities,
    "GroupMembers": groupMembers_1.GroupMembers,
    "GroupProperties": groupProperties_1.GroupProperties,
    "GroupShare": groupShare_1.GroupShare,
    "GroupShareProperties": groupShareProperties_1.GroupShareProperties,
    "GroupShares": groupShares_1.GroupShares,
    "GroupUsers": groupUsers_1.GroupUsers,
    "Groups": groups_1.Groups,
    "IPFailover": iPFailover_1.IPFailover,
    "Image": image_1.Image,
    "ImageProperties": imageProperties_1.ImageProperties,
    "Images": images_1.Images,
    "Info": info_1.Info,
    "IpBlock": ipBlock_1.IpBlock,
    "IpBlockProperties": ipBlockProperties_1.IpBlockProperties,
    "IpBlocks": ipBlocks_1.IpBlocks,
    "IpConsumer": ipConsumer_1.IpConsumer,
    "KubernetesAutoScaling": kubernetesAutoScaling_1.KubernetesAutoScaling,
    "KubernetesCluster": kubernetesCluster_1.KubernetesCluster,
    "KubernetesClusterEntities": kubernetesClusterEntities_1.KubernetesClusterEntities,
    "KubernetesClusterProperties": kubernetesClusterProperties_1.KubernetesClusterProperties,
    "KubernetesClusterPropertiesForPostAndPut": kubernetesClusterPropertiesForPostAndPut_1.KubernetesClusterPropertiesForPostAndPut,
    "KubernetesClusters": kubernetesClusters_1.KubernetesClusters,
    "KubernetesConfig": kubernetesConfig_1.KubernetesConfig,
    "KubernetesConfigProperties": kubernetesConfigProperties_1.KubernetesConfigProperties,
    "KubernetesMaintenanceWindow": kubernetesMaintenanceWindow_1.KubernetesMaintenanceWindow,
    "KubernetesNode": kubernetesNode_1.KubernetesNode,
    "KubernetesNodeMetadata": kubernetesNodeMetadata_1.KubernetesNodeMetadata,
    "KubernetesNodePool": kubernetesNodePool_1.KubernetesNodePool,
    "KubernetesNodePoolForPut": kubernetesNodePoolForPut_1.KubernetesNodePoolForPut,
    "KubernetesNodePoolLan": kubernetesNodePoolLan_1.KubernetesNodePoolLan,
    "KubernetesNodePoolProperties": kubernetesNodePoolProperties_1.KubernetesNodePoolProperties,
    "KubernetesNodePoolPropertiesForPost": kubernetesNodePoolPropertiesForPost_1.KubernetesNodePoolPropertiesForPost,
    "KubernetesNodePoolPropertiesForPut": kubernetesNodePoolPropertiesForPut_1.KubernetesNodePoolPropertiesForPut,
    "KubernetesNodePools": kubernetesNodePools_1.KubernetesNodePools,
    "KubernetesNodeProperties": kubernetesNodeProperties_1.KubernetesNodeProperties,
    "KubernetesNodes": kubernetesNodes_1.KubernetesNodes,
    "Label": label_1.Label,
    "LabelProperties": labelProperties_1.LabelProperties,
    "LabelResource": labelResource_1.LabelResource,
    "LabelResourceProperties": labelResourceProperties_1.LabelResourceProperties,
    "LabelResources": labelResources_1.LabelResources,
    "Labels": labels_1.Labels,
    "Lan": lan_1.Lan,
    "LanEntities": lanEntities_1.LanEntities,
    "LanNics": lanNics_1.LanNics,
    "LanPost": lanPost_1.LanPost,
    "LanProperties": lanProperties_1.LanProperties,
    "LanPropertiesPost": lanPropertiesPost_1.LanPropertiesPost,
    "Lans": lans_1.Lans,
    "Loadbalancer": loadbalancer_1.Loadbalancer,
    "LoadbalancerEntities": loadbalancerEntities_1.LoadbalancerEntities,
    "LoadbalancerProperties": loadbalancerProperties_1.LoadbalancerProperties,
    "Loadbalancers": loadbalancers_1.Loadbalancers,
    "Location": location_1.Location,
    "LocationProperties": locationProperties_1.LocationProperties,
    "Locations": locations_1.Locations,
    "ModelError": modelError_1.ModelError,
    "Nic": nic_1.Nic,
    "NicEntities": nicEntities_1.NicEntities,
    "NicProperties": nicProperties_1.NicProperties,
    "Nics": nics_1.Nics,
    "NoStateMetaData": noStateMetaData_1.NoStateMetaData,
    "PaginationLinks": paginationLinks_1.PaginationLinks,
    "Peer": peer_1.Peer,
    "PrivateCrossConnect": privateCrossConnect_1.PrivateCrossConnect,
    "PrivateCrossConnectProperties": privateCrossConnectProperties_1.PrivateCrossConnectProperties,
    "PrivateCrossConnects": privateCrossConnects_1.PrivateCrossConnects,
    "Request": request_1.Request,
    "RequestMetadata": requestMetadata_1.RequestMetadata,
    "RequestProperties": requestProperties_1.RequestProperties,
    "RequestStatus": requestStatus_1.RequestStatus,
    "RequestStatusMetadata": requestStatusMetadata_1.RequestStatusMetadata,
    "RequestTarget": requestTarget_1.RequestTarget,
    "Requests": requests_1.Requests,
    "Resource": resource_1.Resource,
    "ResourceEntities": resourceEntities_1.ResourceEntities,
    "ResourceGroups": resourceGroups_1.ResourceGroups,
    "ResourceLimits": resourceLimits_1.ResourceLimits,
    "ResourceProperties": resourceProperties_1.ResourceProperties,
    "ResourceReference": resourceReference_1.ResourceReference,
    "Resources": resources_1.Resources,
    "ResourcesUsers": resourcesUsers_1.ResourcesUsers,
    "S3Key": s3Key_1.S3Key,
    "S3KeyMetadata": s3KeyMetadata_1.S3KeyMetadata,
    "S3KeyProperties": s3KeyProperties_1.S3KeyProperties,
    "S3Keys": s3Keys_1.S3Keys,
    "S3ObjectStorageSSO": s3ObjectStorageSSO_1.S3ObjectStorageSSO,
    "Server": server_1.Server,
    "ServerEntities": serverEntities_1.ServerEntities,
    "ServerProperties": serverProperties_1.ServerProperties,
    "Servers": servers_1.Servers,
    "Snapshot": snapshot_1.Snapshot,
    "SnapshotProperties": snapshotProperties_1.SnapshotProperties,
    "Snapshots": snapshots_1.Snapshots,
    "User": user_1.User,
    "UserMetadata": userMetadata_1.UserMetadata,
    "UserProperties": userProperties_1.UserProperties,
    "Users": users_1.Users,
    "UsersEntities": usersEntities_1.UsersEntities,
    "Volume": volume_1.Volume,
    "VolumeProperties": volumeProperties_1.VolumeProperties,
    "Volumes": volumes_1.Volumes,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;

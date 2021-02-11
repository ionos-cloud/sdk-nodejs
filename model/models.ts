import localVarRequest from 'request';

export * from './attachedVolumes';
export * from './backupUnit';
export * from './backupUnitProperties';
export * from './backupUnitSSO';
export * from './backupUnits';
export * from './balancedNics';
export * from './cdroms';
export * from './connectableDatacenter';
export * from './contract';
export * from './contractProperties';
export * from './dataCenterEntities';
export * from './datacenter';
export * from './datacenterElementMetadata';
export * from './datacenterProperties';
export * from './datacenters';
export * from './errorMessage';
export * from './firewallRule';
export * from './firewallRules';
export * from './firewallruleProperties';
export * from './group';
export * from './groupEntities';
export * from './groupMembers';
export * from './groupProperties';
export * from './groupShare';
export * from './groupShareProperties';
export * from './groupShares';
export * from './groupUsers';
export * from './groups';
export * from './iPFailover';
export * from './image';
export * from './imageProperties';
export * from './images';
export * from './info';
export * from './ipBlock';
export * from './ipBlockProperties';
export * from './ipBlocks';
export * from './ipConsumer';
export * from './kubernetesAutoScaling';
export * from './kubernetesCluster';
export * from './kubernetesClusterEntities';
export * from './kubernetesClusterProperties';
export * from './kubernetesClusterPropertiesForPostAndPut';
export * from './kubernetesClusters';
export * from './kubernetesConfig';
export * from './kubernetesConfigProperties';
export * from './kubernetesMaintenanceWindow';
export * from './kubernetesNode';
export * from './kubernetesNodeMetadata';
export * from './kubernetesNodePool';
export * from './kubernetesNodePoolForPut';
export * from './kubernetesNodePoolLan';
export * from './kubernetesNodePoolProperties';
export * from './kubernetesNodePoolPropertiesForPost';
export * from './kubernetesNodePoolPropertiesForPut';
export * from './kubernetesNodePools';
export * from './kubernetesNodeProperties';
export * from './kubernetesNodes';
export * from './label';
export * from './labelProperties';
export * from './labelResource';
export * from './labelResourceProperties';
export * from './labelResources';
export * from './labels';
export * from './lan';
export * from './lanEntities';
export * from './lanNics';
export * from './lanPost';
export * from './lanProperties';
export * from './lanPropertiesPost';
export * from './lans';
export * from './loadbalancer';
export * from './loadbalancerEntities';
export * from './loadbalancerProperties';
export * from './loadbalancers';
export * from './location';
export * from './locationProperties';
export * from './locations';
export * from './modelError';
export * from './nic';
export * from './nicEntities';
export * from './nicProperties';
export * from './nics';
export * from './noStateMetaData';
export * from './paginationLinks';
export * from './peer';
export * from './privateCrossConnect';
export * from './privateCrossConnectProperties';
export * from './privateCrossConnects';
export * from './request';
export * from './requestMetadata';
export * from './requestProperties';
export * from './requestStatus';
export * from './requestStatusMetadata';
export * from './requestTarget';
export * from './requests';
export * from './resource';
export * from './resourceEntities';
export * from './resourceGroups';
export * from './resourceLimits';
export * from './resourceProperties';
export * from './resourceReference';
export * from './resources';
export * from './resourcesUsers';
export * from './s3Key';
export * from './s3KeyMetadata';
export * from './s3KeyProperties';
export * from './s3Keys';
export * from './s3ObjectStorageSSO';
export * from './server';
export * from './serverEntities';
export * from './serverProperties';
export * from './servers';
export * from './snapshot';
export * from './snapshotProperties';
export * from './snapshots';
export * from './type';
export * from './user';
export * from './userMetadata';
export * from './userProperties';
export * from './users';
export * from './usersEntities';
export * from './volume';
export * from './volumeProperties';
export * from './volumes';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AttachedVolumes } from './attachedVolumes';
import { BackupUnit } from './backupUnit';
import { BackupUnitProperties } from './backupUnitProperties';
import { BackupUnitSSO } from './backupUnitSSO';
import { BackupUnits } from './backupUnits';
import { BalancedNics } from './balancedNics';
import { Cdroms } from './cdroms';
import { ConnectableDatacenter } from './connectableDatacenter';
import { Contract } from './contract';
import { ContractProperties } from './contractProperties';
import { DataCenterEntities } from './dataCenterEntities';
import { Datacenter } from './datacenter';
import { DatacenterElementMetadata } from './datacenterElementMetadata';
import { DatacenterProperties } from './datacenterProperties';
import { Datacenters } from './datacenters';
import { ErrorMessage } from './errorMessage';
import { FirewallRule } from './firewallRule';
import { FirewallRules } from './firewallRules';
import { FirewallruleProperties } from './firewallruleProperties';
import { Group } from './group';
import { GroupEntities } from './groupEntities';
import { GroupMembers } from './groupMembers';
import { GroupProperties } from './groupProperties';
import { GroupShare } from './groupShare';
import { GroupShareProperties } from './groupShareProperties';
import { GroupShares } from './groupShares';
import { GroupUsers } from './groupUsers';
import { Groups } from './groups';
import { IPFailover } from './iPFailover';
import { Image } from './image';
import { ImageProperties } from './imageProperties';
import { Images } from './images';
import { Info } from './info';
import { IpBlock } from './ipBlock';
import { IpBlockProperties } from './ipBlockProperties';
import { IpBlocks } from './ipBlocks';
import { IpConsumer } from './ipConsumer';
import { KubernetesAutoScaling } from './kubernetesAutoScaling';
import { KubernetesCluster } from './kubernetesCluster';
import { KubernetesClusterEntities } from './kubernetesClusterEntities';
import { KubernetesClusterProperties } from './kubernetesClusterProperties';
import { KubernetesClusterPropertiesForPostAndPut } from './kubernetesClusterPropertiesForPostAndPut';
import { KubernetesClusters } from './kubernetesClusters';
import { KubernetesConfig } from './kubernetesConfig';
import { KubernetesConfigProperties } from './kubernetesConfigProperties';
import { KubernetesMaintenanceWindow } from './kubernetesMaintenanceWindow';
import { KubernetesNode } from './kubernetesNode';
import { KubernetesNodeMetadata } from './kubernetesNodeMetadata';
import { KubernetesNodePool } from './kubernetesNodePool';
import { KubernetesNodePoolForPut } from './kubernetesNodePoolForPut';
import { KubernetesNodePoolLan } from './kubernetesNodePoolLan';
import { KubernetesNodePoolProperties } from './kubernetesNodePoolProperties';
import { KubernetesNodePoolPropertiesForPost } from './kubernetesNodePoolPropertiesForPost';
import { KubernetesNodePoolPropertiesForPut } from './kubernetesNodePoolPropertiesForPut';
import { KubernetesNodePools } from './kubernetesNodePools';
import { KubernetesNodeProperties } from './kubernetesNodeProperties';
import { KubernetesNodes } from './kubernetesNodes';
import { Label } from './label';
import { LabelProperties } from './labelProperties';
import { LabelResource } from './labelResource';
import { LabelResourceProperties } from './labelResourceProperties';
import { LabelResources } from './labelResources';
import { Labels } from './labels';
import { Lan } from './lan';
import { LanEntities } from './lanEntities';
import { LanNics } from './lanNics';
import { LanPost } from './lanPost';
import { LanProperties } from './lanProperties';
import { LanPropertiesPost } from './lanPropertiesPost';
import { Lans } from './lans';
import { Loadbalancer } from './loadbalancer';
import { LoadbalancerEntities } from './loadbalancerEntities';
import { LoadbalancerProperties } from './loadbalancerProperties';
import { Loadbalancers } from './loadbalancers';
import { Location } from './location';
import { LocationProperties } from './locationProperties';
import { Locations } from './locations';
import { ModelError } from './modelError';
import { Nic } from './nic';
import { NicEntities } from './nicEntities';
import { NicProperties } from './nicProperties';
import { Nics } from './nics';
import { NoStateMetaData } from './noStateMetaData';
import { PaginationLinks } from './paginationLinks';
import { Peer } from './peer';
import { PrivateCrossConnect } from './privateCrossConnect';
import { PrivateCrossConnectProperties } from './privateCrossConnectProperties';
import { PrivateCrossConnects } from './privateCrossConnects';
import { Request } from './request';
import { RequestMetadata } from './requestMetadata';
import { RequestProperties } from './requestProperties';
import { RequestStatus } from './requestStatus';
import { RequestStatusMetadata } from './requestStatusMetadata';
import { RequestTarget } from './requestTarget';
import { Requests } from './requests';
import { Resource } from './resource';
import { ResourceEntities } from './resourceEntities';
import { ResourceGroups } from './resourceGroups';
import { ResourceLimits } from './resourceLimits';
import { ResourceProperties } from './resourceProperties';
import { ResourceReference } from './resourceReference';
import { Resources } from './resources';
import { ResourcesUsers } from './resourcesUsers';
import { S3Key } from './s3Key';
import { S3KeyMetadata } from './s3KeyMetadata';
import { S3KeyProperties } from './s3KeyProperties';
import { S3Keys } from './s3Keys';
import { S3ObjectStorageSSO } from './s3ObjectStorageSSO';
import { Server } from './server';
import { ServerEntities } from './serverEntities';
import { ServerProperties } from './serverProperties';
import { Servers } from './servers';
import { Snapshot } from './snapshot';
import { SnapshotProperties } from './snapshotProperties';
import { Snapshots } from './snapshots';
import { Type } from './type';
import { User } from './user';
import { UserMetadata } from './userMetadata';
import { UserProperties } from './userProperties';
import { Users } from './users';
import { UsersEntities } from './usersEntities';
import { Volume } from './volume';
import { VolumeProperties } from './volumeProperties';
import { Volumes } from './volumes';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "BackupUnit.TypeEnum": BackupUnit.TypeEnum,
        "BackupUnits.TypeEnum": BackupUnits.TypeEnum,
        "DatacenterElementMetadata.StateEnum": DatacenterElementMetadata.StateEnum,
        "DatacenterProperties.FeaturesEnum": DatacenterProperties.FeaturesEnum,
        "FirewallruleProperties.ProtocolEnum": FirewallruleProperties.ProtocolEnum,
        "FirewallruleProperties.SourceMacEnum": FirewallruleProperties.SourceMacEnum,
        "FirewallruleProperties.SourceIpEnum": FirewallruleProperties.SourceIpEnum,
        "FirewallruleProperties.TargetIpEnum": FirewallruleProperties.TargetIpEnum,
        "ImageProperties.LicenceTypeEnum": ImageProperties.LicenceTypeEnum,
        "ImageProperties.ImageTypeEnum": ImageProperties.ImageTypeEnum,
        "KubernetesCluster.TypeEnum": KubernetesCluster.TypeEnum,
        "KubernetesClusters.TypeEnum": KubernetesClusters.TypeEnum,
        "KubernetesConfig.TypeEnum": KubernetesConfig.TypeEnum,
        "KubernetesMaintenanceWindow.DayOfTheWeekEnum": KubernetesMaintenanceWindow.DayOfTheWeekEnum,
        "KubernetesNode.TypeEnum": KubernetesNode.TypeEnum,
        "KubernetesNodeMetadata.StateEnum": KubernetesNodeMetadata.StateEnum,
        "KubernetesNodePool.TypeEnum": KubernetesNodePool.TypeEnum,
        "KubernetesNodePoolForPut.TypeEnum": KubernetesNodePoolForPut.TypeEnum,
        "KubernetesNodePoolProperties.AvailabilityZoneEnum": KubernetesNodePoolProperties.AvailabilityZoneEnum,
        "KubernetesNodePoolProperties.StorageTypeEnum": KubernetesNodePoolProperties.StorageTypeEnum,
        "KubernetesNodePoolPropertiesForPost.AvailabilityZoneEnum": KubernetesNodePoolPropertiesForPost.AvailabilityZoneEnum,
        "KubernetesNodePoolPropertiesForPost.StorageTypeEnum": KubernetesNodePoolPropertiesForPost.StorageTypeEnum,
        "KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum": KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum,
        "KubernetesNodePoolPropertiesForPut.StorageTypeEnum": KubernetesNodePoolPropertiesForPut.StorageTypeEnum,
        "KubernetesNodePools.TypeEnum": KubernetesNodePools.TypeEnum,
        "KubernetesNodes.TypeEnum": KubernetesNodes.TypeEnum,
        "Label.TypeEnum": Label.TypeEnum,
        "LabelResource.TypeEnum": LabelResource.TypeEnum,
        "LabelResources.TypeEnum": LabelResources.TypeEnum,
        "Labels.TypeEnum": Labels.TypeEnum,
        "LoadbalancerProperties.IpEnum": LoadbalancerProperties.IpEnum,
        "LocationProperties.FeaturesEnum": LocationProperties.FeaturesEnum,
        "RequestStatusMetadata.StatusEnum": RequestStatusMetadata.StatusEnum,
        "RequestTarget.StatusEnum": RequestTarget.StatusEnum,
        "ServerProperties.AvailabilityZoneEnum": ServerProperties.AvailabilityZoneEnum,
        "ServerProperties.VmStateEnum": ServerProperties.VmStateEnum,
        "SnapshotProperties.LicenceTypeEnum": SnapshotProperties.LicenceTypeEnum,
        "Type": Type,
        "VolumeProperties.TypeEnum": VolumeProperties.TypeEnum,
        "VolumeProperties.AvailabilityZoneEnum": VolumeProperties.AvailabilityZoneEnum,
        "VolumeProperties.BusEnum": VolumeProperties.BusEnum,
        "VolumeProperties.LicenceTypeEnum": VolumeProperties.LicenceTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AttachedVolumes": AttachedVolumes,
    "BackupUnit": BackupUnit,
    "BackupUnitProperties": BackupUnitProperties,
    "BackupUnitSSO": BackupUnitSSO,
    "BackupUnits": BackupUnits,
    "BalancedNics": BalancedNics,
    "Cdroms": Cdroms,
    "ConnectableDatacenter": ConnectableDatacenter,
    "Contract": Contract,
    "ContractProperties": ContractProperties,
    "DataCenterEntities": DataCenterEntities,
    "Datacenter": Datacenter,
    "DatacenterElementMetadata": DatacenterElementMetadata,
    "DatacenterProperties": DatacenterProperties,
    "Datacenters": Datacenters,
    "ErrorMessage": ErrorMessage,
    "FirewallRule": FirewallRule,
    "FirewallRules": FirewallRules,
    "FirewallruleProperties": FirewallruleProperties,
    "Group": Group,
    "GroupEntities": GroupEntities,
    "GroupMembers": GroupMembers,
    "GroupProperties": GroupProperties,
    "GroupShare": GroupShare,
    "GroupShareProperties": GroupShareProperties,
    "GroupShares": GroupShares,
    "GroupUsers": GroupUsers,
    "Groups": Groups,
    "IPFailover": IPFailover,
    "Image": Image,
    "ImageProperties": ImageProperties,
    "Images": Images,
    "Info": Info,
    "IpBlock": IpBlock,
    "IpBlockProperties": IpBlockProperties,
    "IpBlocks": IpBlocks,
    "IpConsumer": IpConsumer,
    "KubernetesAutoScaling": KubernetesAutoScaling,
    "KubernetesCluster": KubernetesCluster,
    "KubernetesClusterEntities": KubernetesClusterEntities,
    "KubernetesClusterProperties": KubernetesClusterProperties,
    "KubernetesClusterPropertiesForPostAndPut": KubernetesClusterPropertiesForPostAndPut,
    "KubernetesClusters": KubernetesClusters,
    "KubernetesConfig": KubernetesConfig,
    "KubernetesConfigProperties": KubernetesConfigProperties,
    "KubernetesMaintenanceWindow": KubernetesMaintenanceWindow,
    "KubernetesNode": KubernetesNode,
    "KubernetesNodeMetadata": KubernetesNodeMetadata,
    "KubernetesNodePool": KubernetesNodePool,
    "KubernetesNodePoolForPut": KubernetesNodePoolForPut,
    "KubernetesNodePoolLan": KubernetesNodePoolLan,
    "KubernetesNodePoolProperties": KubernetesNodePoolProperties,
    "KubernetesNodePoolPropertiesForPost": KubernetesNodePoolPropertiesForPost,
    "KubernetesNodePoolPropertiesForPut": KubernetesNodePoolPropertiesForPut,
    "KubernetesNodePools": KubernetesNodePools,
    "KubernetesNodeProperties": KubernetesNodeProperties,
    "KubernetesNodes": KubernetesNodes,
    "Label": Label,
    "LabelProperties": LabelProperties,
    "LabelResource": LabelResource,
    "LabelResourceProperties": LabelResourceProperties,
    "LabelResources": LabelResources,
    "Labels": Labels,
    "Lan": Lan,
    "LanEntities": LanEntities,
    "LanNics": LanNics,
    "LanPost": LanPost,
    "LanProperties": LanProperties,
    "LanPropertiesPost": LanPropertiesPost,
    "Lans": Lans,
    "Loadbalancer": Loadbalancer,
    "LoadbalancerEntities": LoadbalancerEntities,
    "LoadbalancerProperties": LoadbalancerProperties,
    "Loadbalancers": Loadbalancers,
    "Location": Location,
    "LocationProperties": LocationProperties,
    "Locations": Locations,
    "ModelError": ModelError,
    "Nic": Nic,
    "NicEntities": NicEntities,
    "NicProperties": NicProperties,
    "Nics": Nics,
    "NoStateMetaData": NoStateMetaData,
    "PaginationLinks": PaginationLinks,
    "Peer": Peer,
    "PrivateCrossConnect": PrivateCrossConnect,
    "PrivateCrossConnectProperties": PrivateCrossConnectProperties,
    "PrivateCrossConnects": PrivateCrossConnects,
    "Request": Request,
    "RequestMetadata": RequestMetadata,
    "RequestProperties": RequestProperties,
    "RequestStatus": RequestStatus,
    "RequestStatusMetadata": RequestStatusMetadata,
    "RequestTarget": RequestTarget,
    "Requests": Requests,
    "Resource": Resource,
    "ResourceEntities": ResourceEntities,
    "ResourceGroups": ResourceGroups,
    "ResourceLimits": ResourceLimits,
    "ResourceProperties": ResourceProperties,
    "ResourceReference": ResourceReference,
    "Resources": Resources,
    "ResourcesUsers": ResourcesUsers,
    "S3Key": S3Key,
    "S3KeyMetadata": S3KeyMetadata,
    "S3KeyProperties": S3KeyProperties,
    "S3Keys": S3Keys,
    "S3ObjectStorageSSO": S3ObjectStorageSSO,
    "Server": Server,
    "ServerEntities": ServerEntities,
    "ServerProperties": ServerProperties,
    "Servers": Servers,
    "Snapshot": Snapshot,
    "SnapshotProperties": SnapshotProperties,
    "Snapshots": Snapshots,
    "User": User,
    "UserMetadata": UserMetadata,
    "UserProperties": UserProperties,
    "Users": Users,
    "UsersEntities": UsersEntities,
    "Volume": Volume,
    "VolumeProperties": VolumeProperties,
    "Volumes": Volumes,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

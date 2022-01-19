/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * IONOS Enterprise-grade Infrastructure as a Service (IaaS) solutions can be managed through the Cloud API, in addition or as an alternative to the \"Data Center Designer\" (DCD) browser-based tool.    Both methods employ consistent concepts and features, deliver similar power and flexibility, and can be used to perform a multitude of management tasks, including adding servers, volumes, configuring networks, and so on.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { KubernetesAutoScaling } from './kubernetes-auto-scaling';
import { KubernetesMaintenanceWindow } from './kubernetes-maintenance-window';
import { KubernetesNodePoolLan } from './kubernetes-node-pool-lan';

/**
 * 
 * @export
 * @interface KubernetesNodePoolPropertiesForPost
 */
export interface KubernetesNodePoolPropertiesForPost {

    /**
     * A Kubernetes node pool name. Valid Kubernetes node pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     * @type {string}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    name: string;

    /**
     * A valid ID of the data center, to which the user has access.
     * @type {string}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    datacenterId: string;

    /**
     * The number of nodes that make up the node pool.
     * @type {number}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    nodeCount: number;

    /**
     * A valid CPU family name.
     * @type {string}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    cpuFamily: string;

    /**
     * The number of cores for the node.
     * @type {number}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    coresCount: number;

    /**
     * The RAM size for the node. Must be set in multiples of 1024 MB, with minimum size is of 2048 MB.
     * @type {number}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    ramSize: number;

    /**
     * The availability zone in which the target VM should be provisioned.
     * @type {string}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    availabilityZone: KubernetesNodePoolPropertiesForPostAvailabilityZoneEnum;

    /**
     * The type of hardware for the volume.
     * @type {string}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    storageType: KubernetesNodePoolPropertiesForPostStorageTypeEnum;

    /**
     * The size of the volume in GB. The size should be greater than 10GB.
     * @type {number}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    storageSize: number;

    /**
     * The Kubernetes version the nodepool is running. This imposes restrictions on what Kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all Kubernetes versions are viable upgrade targets for all prior versions.
     * @type {string}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    k8sVersion?: string;

    /**
     * 
     * @type {KubernetesMaintenanceWindow}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    maintenanceWindow?: KubernetesMaintenanceWindow;

    /**
     * 
     * @type {KubernetesAutoScaling}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    autoScaling?: KubernetesAutoScaling;

    /**
     * array of additional LANs attached to worker nodes
     * @type {Array<KubernetesNodePoolLan>}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    lans?: Array<KubernetesNodePoolLan>;

    /**
     * map of labels attached to node pool.
     * @type {{ [key: string]: string; }}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    labels?: { [key: string]: string; };

    /**
     * map of annotations attached to node pool.
     * @type {{ [key: string]: string; }}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    annotations?: { [key: string]: string; };

    /**
     * Optional array of reserved public IP addresses to be used by the nodes. IPs must be from same location as the data center used for the node pool. The array must contain one extra IP than maximum number of nodes could be. (nodeCount+1 if fixed node amount or maxNodeCount+1 if auto scaling is used) The extra provided IP Will be used during rebuilding of nodes.
     * @type {Array<string>}
     * @memberof KubernetesNodePoolPropertiesForPost
     */
    publicIps?: Array<string>;
}








/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodePoolPropertiesForPostAvailabilityZoneEnum {
    Auto = 'AUTO',
    Zone1 = 'ZONE_1',
    Zone2 = 'ZONE_2'
}

/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodePoolPropertiesForPostStorageTypeEnum {
    Hdd = 'HDD',
    Ssd = 'SSD'
}












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
 * @interface KubernetesNodePoolProperties
 */
export interface KubernetesNodePoolProperties {

    /**
     * A Kubernetes node pool name. Valid Kubernetes node pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    name: string;

    /**
     * A valid ID of the data center, to which user has access.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    datacenterId: string;

    /**
     * The number of nodes that make up the node pool.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    nodeCount: number;

    /**
     * A valid CPU family name.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    cpuFamily: string;

    /**
     * The number of cores for the node.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    coresCount: number;

    /**
     * The RAM size for the node. Must be set in multiples of 1024 MB, with minimum size is of 2048 MB.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    ramSize: number;

    /**
     * The availability zone in which the target VM should be provisioned.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    availabilityZone: KubernetesNodePoolPropertiesAvailabilityZoneEnum;

    /**
     * The type of hardware for the volume.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    storageType: KubernetesNodePoolPropertiesStorageTypeEnum;

    /**
     * The size of the volume in GB. The size should be greater than 10GB.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    storageSize: number;

    /**
     * The Kubernetes version the nodepool is running. This imposes restrictions on what Kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all Kubernetes versions are viable upgrade targets for all prior versions.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    k8sVersion?: string;

    /**
     * 
     * @type {KubernetesMaintenanceWindow}
     * @memberof KubernetesNodePoolProperties
     */
    maintenanceWindow?: KubernetesMaintenanceWindow;

    /**
     * 
     * @type {KubernetesAutoScaling}
     * @memberof KubernetesNodePoolProperties
     */
    autoScaling?: KubernetesAutoScaling;

    /**
     * array of additional LANs attached to worker nodes
     * @type {Array<KubernetesNodePoolLan>}
     * @memberof KubernetesNodePoolProperties
     */
    lans?: Array<KubernetesNodePoolLan>;

    /**
     * map of labels attached to node pool.
     * @type {{ [key: string]: string; }}
     * @memberof KubernetesNodePoolProperties
     */
    labels?: { [key: string]: string; };

    /**
     * map of annotations attached to node pool.
     * @type {{ [key: string]: string; }}
     * @memberof KubernetesNodePoolProperties
     */
    annotations?: { [key: string]: string; };

    /**
     * Optional array of reserved public IP addresses to be used by the nodes. IPs must be from same location as the data center used for the node pool. The array must contain one more IP than maximum number possible number of nodes (nodeCount+1 for fixed number of nodes or maxNodeCount+1 when auto scaling is used). The extra IP is used when the nodes are rebuilt.
     * @type {Array<string>}
     * @memberof KubernetesNodePoolProperties
     */
    publicIps?: Array<string>;

    /**
     * List of available versions for upgrading the node pool.
     * @type {Array<string>}
     * @memberof KubernetesNodePoolProperties
     */
    availableUpgradeVersions?: Array<string>;
}








/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodePoolPropertiesAvailabilityZoneEnum {
    Auto = 'AUTO',
    Zone1 = 'ZONE_1',
    Zone2 = 'ZONE_2'
}

/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodePoolPropertiesStorageTypeEnum {
    Hdd = 'HDD',
    Ssd = 'SSD'
}













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
     * The annotations attached to the node pool.
     * @type {{ [key: string]: string; }}
     * @memberof KubernetesNodePoolProperties
     */
    annotations?: { [key: string]: string; };

    /**
     * 
     * @type {KubernetesAutoScaling}
     * @memberof KubernetesNodePoolProperties
     */
    autoScaling?: KubernetesAutoScaling;

    /**
     * The availability zone in which the target VM should be provisioned.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    availabilityZone: KubernetesNodePoolPropertiesAvailabilityZoneEnum;

    /**
     * The list of available versions for upgrading the node pool.
     * @type {Array<string>}
     * @memberof KubernetesNodePoolProperties
     */
    availableUpgradeVersions?: Array<string>;

    /**
     * The total number of cores for the nodes.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    coresCount: number;

    /**
     * The CPU type for the nodes.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    cpuFamily: string;

    /**
     * The unique identifier of the VDC where the worker nodes of the node pool are provisioned.Note that the data center is located in the exact place where the parent cluster of the node pool is located.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    datacenterId: string;

    /**
     * The Kubernetes version running in the node pool. Note that this imposes restrictions on which Kubernetes versions can run in the node pools of a cluster. Also, not all Kubernetes versions are suitable upgrade targets for all earlier versions.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    k8sVersion?: string;

    /**
     * The labels attached to the node pool.
     * @type {{ [key: string]: string; }}
     * @memberof KubernetesNodePoolProperties
     */
    labels?: { [key: string]: string; };

    /**
     * The array of existing private LANs to attach to worker nodes.
     * @type {Array<KubernetesNodePoolLan>}
     * @memberof KubernetesNodePoolProperties
     */
    lans?: Array<KubernetesNodePoolLan>;

    /**
     * 
     * @type {KubernetesMaintenanceWindow}
     * @memberof KubernetesNodePoolProperties
     */
    maintenanceWindow?: KubernetesMaintenanceWindow;

    /**
     * A Kubernetes node pool name. Valid Kubernetes node pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    name: string;

    /**
     * The number of worker nodes of the node pool.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    nodeCount: number;

    /**
     * Optional array of reserved public IP addresses to be used by the nodes. The IPs must be from the exact location of the node pool\'s data center. If autoscaling is used, the array must contain one more IP than the maximum possible number of nodes (nodeCount+1 for a fixed number of nodes or maxNodeCount+1). The extra IP is used when the nodes are rebuilt.
     * @type {Array<string>}
     * @memberof KubernetesNodePoolProperties
     */
    publicIps?: Array<string>;

    /**
     * The RAM size for the nodes. Must be specified in multiples of 1024 MB, with a minimum size of 2048 MB.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    ramSize: number;

    /**
     * The allocated volume size in GB. The allocated volume size in GB. To achieve good performance, we recommend a size greater than 100GB for SSD.
     * @type {number}
     * @memberof KubernetesNodePoolProperties
     */
    storageSize: number;

    /**
     * The storage type for the nodes.
     * @type {string}
     * @memberof KubernetesNodePoolProperties
     */
    storageType: KubernetesNodePoolPropertiesStorageTypeEnum;
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




/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 *  IONOS Enterprise-grade Infrastructure as a Service (IaaS) solutions can be managed through the Cloud API, in addition or as an alternative to the \"Data Center Designer\" (DCD) browser-based tool.    Both methods employ consistent concepts and features, deliver similar power and flexibility, and can be used to perform a multitude of management tasks, including adding servers, volumes, configuring networks, and so on.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ResourceReference } from './resource-reference';

/**
 * 
 * @export
 * @interface ServerProperties
 */
export interface ServerProperties {

    /**
     * The ID of the template for creating a CUBE server; the available templates for CUBE servers can be found on the templates resource.
     * @type {string}
     * @memberof ServerProperties
     */
    templateUuid?: string;

    /**
     * The name of the  resource.
     * @type {string}
     * @memberof ServerProperties
     */
    name?: string;

    /**
     * The hostname of the  resource. Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters.
     * @type {string}
     * @memberof ServerProperties
     */
    hostname?: string;

    /**
     * The total number of cores for the enterprise server.
     * @type {number}
     * @memberof ServerProperties
     */
    cores?: number;

    /**
     * The memory size for the enterprise server in MB, such as 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB.
     * @type {number}
     * @memberof ServerProperties
     */
    ram?: number;

    /**
     * The availability zone in which the server should be provisioned.
     * @type {string}
     * @memberof ServerProperties
     */
    availabilityZone?: ServerPropertiesAvailabilityZoneEnum;

    /**
     * Status of the virtual machine.
     * @type {string}
     * @memberof ServerProperties
     */
    vmState?: ServerPropertiesVmStateEnum;

    /**
     * 
     * @type {ResourceReference}
     * @memberof ServerProperties
     */
    bootCdrom?: ResourceReference;

    /**
     * 
     * @type {ResourceReference}
     * @memberof ServerProperties
     */
    bootVolume?: ResourceReference;

    /**
     * CPU architecture on which server gets provisioned; not all CPU architectures are available in all datacenter regions; available CPU architectures can be retrieved from the datacenter resource; must not be provided for CUBE and VCPU servers.
     * @type {string}
     * @memberof ServerProperties
     */
    cpuFamily?: string;

    /**
     * Server type: CUBE, ENTERPRISE or VCPU.
     * @type {string}
     * @memberof ServerProperties
     */
    type?: string;

    /**
     * Activate or deactivate the Multi Queue feature on all NICs of this server. This feature is beneficial to  enable when the NICs are experiencing performance issues (e.g. low throughput). Toggling this feature will also initiate a restart of the server. If the specified value is `true`, the feature will  be activated; if it is not specified or set to `false`, the feature will be deactivated. It is not allowed for servers of type Cube.
     * @type {boolean}
     * @memberof ServerProperties
     */
    nicMultiQueue?: boolean;
}







/**
    * @export
    * @enum {string}
    */
export enum ServerPropertiesAvailabilityZoneEnum {
    Auto = 'AUTO',
    Zone1 = 'ZONE_1',
    Zone2 = 'ZONE_2'
}

/**
    * @export
    * @enum {string}
    */
export enum ServerPropertiesVmStateEnum {
    Nostate = 'NOSTATE',
    Running = 'RUNNING',
    Blocked = 'BLOCKED',
    Paused = 'PAUSED',
    Shutdown = 'SHUTDOWN',
    Shutoff = 'SHUTOFF',
    Crashed = 'CRASHED',
    Suspended = 'SUSPENDED'
}









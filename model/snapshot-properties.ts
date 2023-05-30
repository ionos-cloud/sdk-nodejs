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



/**
 * 
 * @export
 * @interface SnapshotProperties
 */
export interface SnapshotProperties {

    /**
     * Hot-plug capable CPU (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    cpuHotPlug?: boolean;

    /**
     * Hot-unplug capable CPU (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    cpuHotUnplug?: boolean;

    /**
     * Human-readable description.
     * @type {string}
     * @memberof SnapshotProperties
     */
    description?: string;

    /**
     * Hot-plug capable SCSI drive (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    discScsiHotPlug?: boolean;

    /**
     * Is capable of SCSI drive hot unplug (no reboot required). This works only for non-Windows virtual Machines.
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    discScsiHotUnplug?: boolean;

    /**
     * Hot-plug capable Virt-IO drive (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    discVirtioHotPlug?: boolean;

    /**
     * Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs.
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    discVirtioHotUnplug?: boolean;

    /**
     * OS type of this snapshot
     * @type {string}
     * @memberof SnapshotProperties
     */
    licenceType?: SnapshotPropertiesLicenceTypeEnum;

    /**
     * Location of that image/snapshot. 
     * @type {string}
     * @memberof SnapshotProperties
     */
    location?: string;

    /**
     * The name of the  resource.
     * @type {string}
     * @memberof SnapshotProperties
     */
    name?: string;

    /**
     * Hot-plug capable NIC (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    nicHotPlug?: boolean;

    /**
     * Hot-unplug capable NIC (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    nicHotUnplug?: boolean;

    /**
     * Hot-plug capable RAM (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    ramHotPlug?: boolean;

    /**
     * Hot-unplug capable RAM (no reboot required).
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    ramHotUnplug?: boolean;

    /**
     * Boolean value representing if the snapshot requires extra protection, such as two-step verification.
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    secAuthProtection?: boolean;

    /**
     * The size of the image in GB.
     * @type {number}
     * @memberof SnapshotProperties
     */
    size?: number;
}









/**
    * @export
    * @enum {string}
    */
export enum SnapshotPropertiesLicenceTypeEnum {
    Unknown = 'UNKNOWN',
    Windows = 'WINDOWS',
    Windows2016 = 'WINDOWS2016',
    Windows2022 = 'WINDOWS2022',
    Rhel = 'RHEL',
    Linux = 'LINUX',
    Other = 'OTHER'
}












/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * An enterprise-grade Infrastructure is provided as a Service (IaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.   The API allows you to perform a variety of management tasks such as spinning up additional servers, adding volumes, adjusting networking, and so forth. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive.
 *
 * The version of the OpenAPI document: 5.0
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
     * A name of that resource
     * @type {string}
     * @memberof SnapshotProperties
     */
    name?: string;

    /**
     * Human readable description
     * @type {string}
     * @memberof SnapshotProperties
     */
    description?: string;

    /**
     * Location of that image/snapshot. 
     * @type {string}
     * @memberof SnapshotProperties
     */
    location?: string;

    /**
     * The size of the image in GB
     * @type {number}
     * @memberof SnapshotProperties
     */
    size?: number;

    /**
     * Boolean value representing if the snapshot requires extra protection e.g. two factor protection
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    secAuthProtection?: boolean;

    /**
     * Is capable of CPU hot plug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    cpuHotPlug?: boolean;

    /**
     * Is capable of CPU hot unplug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    cpuHotUnplug?: boolean;

    /**
     * Is capable of memory hot plug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    ramHotPlug?: boolean;

    /**
     * Is capable of memory hot unplug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    ramHotUnplug?: boolean;

    /**
     * Is capable of nic hot plug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    nicHotPlug?: boolean;

    /**
     * Is capable of nic hot unplug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    nicHotUnplug?: boolean;

    /**
     * Is capable of Virt-IO drive hot plug (no reboot required)
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    discVirtioHotPlug?: boolean;

    /**
     * Is capable of Virt-IO drive hot unplug (no reboot required). This works only for non-Windows virtual Machines.
     * @type {boolean}
     * @memberof SnapshotProperties
     */
    discVirtioHotUnplug?: boolean;

    /**
     * Is capable of SCSI drive hot plug (no reboot required)
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
     * OS type of this Snapshot
     * @type {string}
     * @memberof SnapshotProperties
     */
    licenceType?: SnapshotPropertiesLicenceTypeEnum;
}

















/**
    * @export
    * @enum {string}
    */
export enum SnapshotPropertiesLicenceTypeEnum {
    Unknown = 'UNKNOWN',
    Windows = 'WINDOWS',
    Windows2016 = 'WINDOWS2016',
    Linux = 'LINUX',
    Other = 'OTHER'
}




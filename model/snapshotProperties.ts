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

import { RequestFile } from './models';

export class SnapshotProperties {
    /**
    * A name of that resource
    */
    'name'?: string;
    /**
    * Human readable description
    */
    'description'?: string;
    /**
    * Location of that image/snapshot. 
    */
    'location'?: string;
    /**
    * The size of the image in GB
    */
    'size'?: number;
    /**
    * Boolean value representing if the snapshot requires extra protection e.g. two factor protection
    */
    'secAuthProtection'?: boolean;
    /**
    * Is capable of CPU hot plug (no reboot required)
    */
    'cpuHotPlug'?: boolean;
    /**
    * Is capable of CPU hot unplug (no reboot required)
    */
    'cpuHotUnplug'?: boolean;
    /**
    * Is capable of memory hot plug (no reboot required)
    */
    'ramHotPlug'?: boolean;
    /**
    * Is capable of memory hot unplug (no reboot required)
    */
    'ramHotUnplug'?: boolean;
    /**
    * Is capable of nic hot plug (no reboot required)
    */
    'nicHotPlug'?: boolean;
    /**
    * Is capable of nic hot unplug (no reboot required)
    */
    'nicHotUnplug'?: boolean;
    /**
    * Is capable of Virt-IO drive hot plug (no reboot required)
    */
    'discVirtioHotPlug'?: boolean;
    /**
    * Is capable of Virt-IO drive hot unplug (no reboot required). This works only for non-Windows virtual Machines.
    */
    'discVirtioHotUnplug'?: boolean;
    /**
    * Is capable of SCSI drive hot plug (no reboot required)
    */
    'discScsiHotPlug'?: boolean;
    /**
    * Is capable of SCSI drive hot unplug (no reboot required). This works only for non-Windows virtual Machines.
    */
    'discScsiHotUnplug'?: boolean;
    /**
    * OS type of this Snapshot
    */
    'licenceType'?: SnapshotProperties.LicenceTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "secAuthProtection",
            "baseName": "secAuthProtection",
            "type": "boolean"
        },
        {
            "name": "cpuHotPlug",
            "baseName": "cpuHotPlug",
            "type": "boolean"
        },
        {
            "name": "cpuHotUnplug",
            "baseName": "cpuHotUnplug",
            "type": "boolean"
        },
        {
            "name": "ramHotPlug",
            "baseName": "ramHotPlug",
            "type": "boolean"
        },
        {
            "name": "ramHotUnplug",
            "baseName": "ramHotUnplug",
            "type": "boolean"
        },
        {
            "name": "nicHotPlug",
            "baseName": "nicHotPlug",
            "type": "boolean"
        },
        {
            "name": "nicHotUnplug",
            "baseName": "nicHotUnplug",
            "type": "boolean"
        },
        {
            "name": "discVirtioHotPlug",
            "baseName": "discVirtioHotPlug",
            "type": "boolean"
        },
        {
            "name": "discVirtioHotUnplug",
            "baseName": "discVirtioHotUnplug",
            "type": "boolean"
        },
        {
            "name": "discScsiHotPlug",
            "baseName": "discScsiHotPlug",
            "type": "boolean"
        },
        {
            "name": "discScsiHotUnplug",
            "baseName": "discScsiHotUnplug",
            "type": "boolean"
        },
        {
            "name": "licenceType",
            "baseName": "licenceType",
            "type": "SnapshotProperties.LicenceTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SnapshotProperties.attributeTypeMap;
    }
}

export namespace SnapshotProperties {
    export enum LicenceTypeEnum {
        Unknown = <any> 'UNKNOWN',
        Windows = <any> 'WINDOWS',
        Windows2016 = <any> 'WINDOWS2016',
        Linux = <any> 'LINUX',
        Other = <any> 'OTHER'
    }
}

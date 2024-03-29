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
 * @interface VolumeProperties
 */
export interface VolumeProperties {

    /**
     * The availability zone in which the volume should be provisioned. The storage volume will be provisioned on as few physical storage devices as possible, but this cannot be guaranteed upfront. This is uavailable for DAS (Direct Attached Storage), and subject to availability for SSD.
     * @type {string}
     * @memberof VolumeProperties
     */
    availabilityZone?: VolumePropertiesAvailabilityZoneEnum;

    /**
     * The ID of the backup unit that the user has access to. The property is immutable and is only allowed to be set on creation of a new a volume. It is mandatory to provide either \'public image\' or \'imageAlias\' in conjunction with this property.
     * @type {string}
     * @memberof VolumeProperties
     */
    backupunitId?: string;

    /**
     * Determines whether the volume will be used as a boot volume. Set to `NONE`, the volume will not be used as boot volume. Set to `PRIMARY`, the volume will be used as boot volume and all other volumes must be set to `NONE`. Set to `AUTO` or `null` requires all volumes to be set to `AUTO` or `null`; this will use the legacy behavior, which is to use the volume as a boot volume only if there are no other volumes or cdrom devices.
     * @type {string}
     * @memberof VolumeProperties
     */
    bootOrder?: VolumePropertiesBootOrderEnum;

    /**
     * The UUID of the attached server.
     * @type {string}
     * @memberof VolumeProperties
     */
    bootServer?: string;

    /**
     * The bus type for this volume; default is VIRTIO.
     * @type {string}
     * @memberof VolumeProperties
     */
    bus?: VolumePropertiesBusEnum;

    /**
     * Hot-plug capable CPU (no reboot required).
     * @type {boolean}
     * @memberof VolumeProperties
     */
    cpuHotPlug?: boolean;

    /**
     * The Logical Unit Number of the storage volume. Null for volumes, not mounted to a VM.
     * @type {number}
     * @memberof VolumeProperties
     */
    deviceNumber?: number;

    /**
     * Hot-plug capable Virt-IO drive (no reboot required).
     * @type {boolean}
     * @memberof VolumeProperties
     */
    discVirtioHotPlug?: boolean;

    /**
     * Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs.
     * @type {boolean}
     * @memberof VolumeProperties
     */
    discVirtioHotUnplug?: boolean;

    /**
     * Image or snapshot ID to be used as template for this volume.
     * @type {string}
     * @memberof VolumeProperties
     */
    image?: string;

    /**
     * 
     * @type {string}
     * @memberof VolumeProperties
     */
    imageAlias?: string;

    /**
     * Initial password to be set for installed OS. Works with public images only. Not modifiable, forbidden in update requests. Password rules allows all characters from a-z, A-Z, 0-9.
     * @type {string}
     * @memberof VolumeProperties
     */
    imagePassword?: string;

    /**
     * OS type for this volume.
     * @type {string}
     * @memberof VolumeProperties
     */
    licenceType?: VolumePropertiesLicenceTypeEnum;

    /**
     * The name of the  resource.
     * @type {string}
     * @memberof VolumeProperties
     */
    name?: string;

    /**
     * Hot-plug capable NIC (no reboot required).
     * @type {boolean}
     * @memberof VolumeProperties
     */
    nicHotPlug?: boolean;

    /**
     * Hot-unplug capable NIC (no reboot required).
     * @type {boolean}
     * @memberof VolumeProperties
     */
    nicHotUnplug?: boolean;

    /**
     * The PCI slot number of the storage volume. Null for volumes, not mounted to a VM.
     * @type {number}
     * @memberof VolumeProperties
     */
    pciSlot?: number;

    /**
     * Hot-plug capable RAM (no reboot required).
     * @type {boolean}
     * @memberof VolumeProperties
     */
    ramHotPlug?: boolean;

    /**
     * The size of the volume in GB.
     * @type {number}
     * @memberof VolumeProperties
     */
    size: number;

    /**
     * Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.
     * @type {Array<string>}
     * @memberof VolumeProperties
     */
    sshKeys?: Array<string>;

    /**
     * Hardware type of the volume. DAS (Direct Attached Storage) could be used only in a composite call with a Cube server.
     * @type {string}
     * @memberof VolumeProperties
     */
    type?: VolumePropertiesTypeEnum;

    /**
     * The cloud-init configuration for the volume as base64 encoded string. The property is immutable and is only allowed to be set on creation of a new a volume. It is mandatory to provide either \'public image\' or \'imageAlias\' that has cloud-init compatibility in conjunction with this property.
     * @type {string}
     * @memberof VolumeProperties
     */
    userData?: string;
}


/**
    * @export
    * @enum {string}
    */
export enum VolumePropertiesAvailabilityZoneEnum {
    Auto = 'AUTO',
    Zone1 = 'ZONE_1',
    Zone2 = 'ZONE_2',
    Zone3 = 'ZONE_3'
}


/**
    * @export
    * @enum {string}
    */
export enum VolumePropertiesBootOrderEnum {
    Auto = 'AUTO',
    None = 'NONE',
    Primary = 'PRIMARY'
}


/**
    * @export
    * @enum {string}
    */
export enum VolumePropertiesBusEnum {
    Virtio = 'VIRTIO',
    Ide = 'IDE',
    Unknown = 'UNKNOWN'
}








/**
    * @export
    * @enum {string}
    */
export enum VolumePropertiesLicenceTypeEnum {
    Unknown = 'UNKNOWN',
    Windows = 'WINDOWS',
    Windows2016 = 'WINDOWS2016',
    Windows2022 = 'WINDOWS2022',
    Rhel = 'RHEL',
    Linux = 'LINUX',
    Other = 'OTHER'
}








/**
    * @export
    * @enum {string}
    */
export enum VolumePropertiesTypeEnum {
    Hdd = 'HDD',
    Ssd = 'SSD',
    SsdStandard = 'SSD Standard',
    SsdPremium = 'SSD Premium',
    Das = 'DAS',
    Iso = 'ISO'
}





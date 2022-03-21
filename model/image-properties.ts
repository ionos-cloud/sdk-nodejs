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
 * @interface ImageProperties
 */
export interface ImageProperties {

    /**
     * The name of the  resource.
     * @type {string}
     * @memberof ImageProperties
     */
    name?: string;

    /**
     * Human-readable description.
     * @type {string}
     * @memberof ImageProperties
     */
    description?: string;

    /**
     * Location of that image/snapshot. 
     * @type {string}
     * @memberof ImageProperties
     */
    location?: string;

    /**
     * The size of the image in GB.
     * @type {number}
     * @memberof ImageProperties
     */
    size?: number;

    /**
     * Hot-plug capable CPU (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    cpuHotPlug?: boolean;

    /**
     * Hot-unplug capable CPU (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    cpuHotUnplug?: boolean;

    /**
     * Hot-plug capable RAM (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    ramHotPlug?: boolean;

    /**
     * Hot-unplug capable RAM (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    ramHotUnplug?: boolean;

    /**
     * Hot-plug capable NIC (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    nicHotPlug?: boolean;

    /**
     * Hot-unplug capable NIC (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    nicHotUnplug?: boolean;

    /**
     * Hot-plug capable Virt-IO drive (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    discVirtioHotPlug?: boolean;

    /**
     * Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs.
     * @type {boolean}
     * @memberof ImageProperties
     */
    discVirtioHotUnplug?: boolean;

    /**
     * Hot-plug capable SCSI drive (no reboot required).
     * @type {boolean}
     * @memberof ImageProperties
     */
    discScsiHotPlug?: boolean;

    /**
     * Hot-unplug capable SCSI drive (no reboot required). Not supported with Windows VMs.
     * @type {boolean}
     * @memberof ImageProperties
     */
    discScsiHotUnplug?: boolean;

    /**
     * OS type for this image.
     * @type {string}
     * @memberof ImageProperties
     */
    licenceType: ImagePropertiesLicenceTypeEnum;

    /**
     * The image type.
     * @type {string}
     * @memberof ImageProperties
     */
    imageType?: ImagePropertiesImageTypeEnum;

    /**
     * Indicates whether the image is part of a public repository.
     * @type {boolean}
     * @memberof ImageProperties
     */
    _public?: boolean;

    /**
     * List of image aliases mapped for this Image
     * @type {Array<string>}
     * @memberof ImageProperties
     */
    imageAliases?: Array<string>;

    /**
     * Cloud init compatibility.
     * @type {string}
     * @memberof ImageProperties
     */
    cloudInit?: ImagePropertiesCloudInitEnum;
}
















/**
    * @export
    * @enum {string}
    */
export enum ImagePropertiesLicenceTypeEnum {
    Unknown = 'UNKNOWN',
    Windows = 'WINDOWS',
    Windows2016 = 'WINDOWS2016',
    Windows2022 = 'WINDOWS2022',
    Linux = 'LINUX',
    Other = 'OTHER'
}

/**
    * @export
    * @enum {string}
    */
export enum ImagePropertiesImageTypeEnum {
    Hdd = 'HDD',
    Cdrom = 'CDROM',
    Unknown = 'UNKNOWN'
}



/**
    * @export
    * @enum {string}
    */
export enum ImagePropertiesCloudInitEnum {
    None = 'NONE',
    V1 = 'V1'
}




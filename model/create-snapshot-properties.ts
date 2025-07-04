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



/**
 * 
 * @export
 * @interface CreateSnapshotProperties
 */
export interface CreateSnapshotProperties {

    /**
     * The name of the snapshot
     * @type {string}
     * @memberof CreateSnapshotProperties
     */
    name?: string;

    /**
     * The description of the snapshot
     * @type {string}
     * @memberof CreateSnapshotProperties
     */
    description?: string;

    /**
     * Flag representing if extra protection is enabled on snapshot e.g. Two Factor protection etc.
     * @type {boolean}
     * @memberof CreateSnapshotProperties
     */
    secAuthProtection?: boolean;

    /**
     * OS type of this Snapshot
     * @type {string}
     * @memberof CreateSnapshotProperties
     */
    licenceType?: CreateSnapshotPropertiesLicenceTypeEnum;

    /**
     * The type of application that is hosted on this resource.  Only public images can have an Application type different than UNKNOWN.
     * @type {string}
     * @memberof CreateSnapshotProperties
     */
    applicationType?: string;
}





/**
    * @export
    * @enum {string}
    */
export enum CreateSnapshotPropertiesLicenceTypeEnum {
    Unknown = 'UNKNOWN',
    Windows = 'WINDOWS',
    Windows2016 = 'WINDOWS2016',
    Windows2019 = 'WINDOWS2019',
    Windows2022 = 'WINDOWS2022',
    Windows2025 = 'WINDOWS2025',
    Rhel = 'RHEL',
    Linux = 'LINUX',
    Other = 'OTHER'
}





/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * IONOS Enterprise-grade Infrastructure as a Service (IaaS) solutions can be managed through the Cloud API, in addition or as an alternative to the \"Data Center Designer\" (DCD) browser-based tool.    Both methods employ consistent concepts and features, deliver similar power and flexibility, and can be used to perform a multitude of management tasks, including adding servers, volumes, configuring networks, and so on.
 *
 * The version of the OpenAPI document: 6.0-SDK.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LabelProperties } from './label-properties';
import { NoStateMetaData } from './no-state-meta-data';

/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * Label is identified using standard URN.
     * @type {string}
     * @memberof Label
     */
    id?: string;
    /**
     * The type of object that has been created
     * @type {string}
     * @memberof Label
     */
    type?: LabelTypeEnum;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof Label
     */
    href?: string;
    /**
     * 
     * @type {NoStateMetaData}
     * @memberof Label
     */
    metadata?: NoStateMetaData;
    /**
     * 
     * @type {LabelProperties}
     * @memberof Label
     */
    properties: LabelProperties;
}

/**
    * @export
    * @enum {string}
    */
export enum LabelTypeEnum {
    Label = 'label'
}




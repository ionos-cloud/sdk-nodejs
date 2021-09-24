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


import { DataCenterEntities } from './data-center-entities';
import { DatacenterElementMetadata } from './datacenter-element-metadata';
import { DatacenterProperties } from './datacenter-properties';
import { Type } from './type';

/**
 * 
 * @export
 * @interface Datacenter
 */
export interface Datacenter {
    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof Datacenter
     */
    id?: string;
    /**
     * The type of object that has been created
     * @type {Type}
     * @memberof Datacenter
     */
    type?: Type;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof Datacenter
     */
    href?: string;
    /**
     * 
     * @type {DatacenterElementMetadata}
     * @memberof Datacenter
     */
    metadata?: DatacenterElementMetadata;
    /**
     * 
     * @type {DatacenterProperties}
     * @memberof Datacenter
     */
    properties: DatacenterProperties;
    /**
     * 
     * @type {DataCenterEntities}
     * @memberof Datacenter
     */
    entities?: DataCenterEntities;
}



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


import { S3Key } from './s3-key';
import { Type } from './type';

/**
 * 
 * @export
 * @interface S3Keys
 */
export interface S3Keys {
    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof S3Keys
     */
    id?: string;
    /**
     * The type of the resource
     * @type {Type}
     * @memberof S3Keys
     */
    type?: Type;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof S3Keys
     */
    href?: string;
    /**
     * Array of items in that collection
     * @type {Array<S3Key>}
     * @memberof S3Keys
     */
    items?: Array<S3Key>;
}



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



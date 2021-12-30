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


import { RequestMetadata } from './request-metadata';
import { RequestProperties } from './request-properties';
import { Type } from './type';

/**
 * 
 * @export
 * @interface Request
 */
export interface Request {

    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof Request
     */
    id?: string;

    /**
     * The type of object that has been created
     * @type {Type}
     * @memberof Request
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof Request
     */
    href?: string;

    /**
     * 
     * @type {RequestMetadata}
     * @memberof Request
     */
    metadata?: RequestMetadata;

    /**
     * 
     * @type {RequestProperties}
     * @memberof Request
     */
    properties: RequestProperties;
}



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


import { Snapshot } from './snapshot';
import { Type } from './type';

/**
 * 
 * @export
 * @interface Snapshots
 */
export interface Snapshots {
    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof Snapshots
     */
    id?: string;
    /**
     * The type of object that has been created
     * @type {Type}
     * @memberof Snapshots
     */
    type?: Type;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof Snapshots
     */
    href?: string;
    /**
     * Array of items in that collection
     * @type {Array<Snapshot>}
     * @memberof Snapshots
     */
    items?: Array<Snapshot>;
}



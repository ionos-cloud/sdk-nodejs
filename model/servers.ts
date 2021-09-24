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


import { PaginationLinks } from './pagination-links';
import { Server } from './server';
import { Type } from './type';

/**
 * 
 * @export
 * @interface Servers
 */
export interface Servers {
    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof Servers
     */
    id?: string;
    /**
     * The type of object that has been created
     * @type {Type}
     * @memberof Servers
     */
    type?: Type;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof Servers
     */
    href?: string;
    /**
     * Array of items in that collection
     * @type {Array<Server>}
     * @memberof Servers
     */
    items?: Array<Server>;
    /**
     * the offset (if specified in the request)
     * @type {number}
     * @memberof Servers
     */
    offset?: number;
    /**
     * the limit (if specified in the request)
     * @type {number}
     * @memberof Servers
     */
    limit?: number;
    /**
     * 
     * @type {PaginationLinks}
     * @memberof Servers
     */
    _links?: PaginationLinks;
}



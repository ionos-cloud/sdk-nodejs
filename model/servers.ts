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
     * 
     * @type {PaginationLinks}
     * @memberof Servers
     */
    _links?: PaginationLinks;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof Servers
     */
    href?: string;

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof Servers
     */
    id?: string;

    /**
     * Array of items in the collection.
     * @type {Array<Server>}
     * @memberof Servers
     */
    items?: Array<Server>;

    /**
     * The limit (if specified in the request).
     * @type {number}
     * @memberof Servers
     */
    limit?: number;

    /**
     * The offset (if specified in the request).
     * @type {number}
     * @memberof Servers
     */
    offset?: number;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof Servers
     */
    type?: Type;
}



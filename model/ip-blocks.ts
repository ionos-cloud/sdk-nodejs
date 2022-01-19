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


import { IpBlock } from './ip-block';
import { PaginationLinks } from './pagination-links';
import { Type } from './type';

/**
 * 
 * @export
 * @interface IpBlocks
 */
export interface IpBlocks {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof IpBlocks
     */
    id?: string;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof IpBlocks
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof IpBlocks
     */
    href?: string;

    /**
     * Array of items in that collection
     * @type {Array<IpBlock>}
     * @memberof IpBlocks
     */
    items?: Array<IpBlock>;

    /**
     * The offset specified in the request (or, if none was specified, the default offset of 0)
     * @type {number}
     * @memberof IpBlocks
     */
    offset?: number;

    /**
     * The limit specified in the request (if none was specified, use the endpoint\'s default pagination limit).
     * @type {number}
     * @memberof IpBlocks
     */
    limit?: number;

    /**
     * 
     * @type {PaginationLinks}
     * @memberof IpBlocks
     */
    _links?: PaginationLinks;
}



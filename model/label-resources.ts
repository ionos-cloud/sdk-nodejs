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


import { LabelResource } from './label-resource';
import { PaginationLinks } from './pagination-links';

/**
 * 
 * @export
 * @interface LabelResources
 */
export interface LabelResources {

    /**
     * A unique representation of the label as a resource collection.
     * @type {string}
     * @memberof LabelResources
     */
    id?: string;

    /**
     * The type of resource within a collection.
     * @type {string}
     * @memberof LabelResources
     */
    type?: LabelResourcesTypeEnum;

    /**
     * URL to the collection representation (absolute path).
     * @type {string}
     * @memberof LabelResources
     */
    href?: string;

    /**
     * Array of items in the collection.
     * @type {Array<LabelResource>}
     * @memberof LabelResources
     */
    items?: Array<LabelResource>;

    /**
     * The offset (if specified in the request).
     * @type {number}
     * @memberof LabelResources
     */
    offset?: number;

    /**
     * The limit (if specified in the request).
     * @type {number}
     * @memberof LabelResources
     */
    limit?: number;

    /**
     * 
     * @type {PaginationLinks}
     * @memberof LabelResources
     */
    _links?: PaginationLinks;
}



/**
    * @export
    * @enum {string}
    */
export enum LabelResourcesTypeEnum {
    Collection = 'collection'
}









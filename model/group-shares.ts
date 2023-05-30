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


import { GroupShare } from './group-share';
import { Type } from './type';

/**
 * 
 * @export
 * @interface GroupShares
 */
export interface GroupShares {

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof GroupShares
     */
    href?: string;

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof GroupShares
     */
    id?: string;

    /**
     * Array of items in the collection.
     * @type {Array<GroupShare>}
     * @memberof GroupShares
     */
    items?: Array<GroupShare>;

    /**
     * Share representing groups and resource relationship
     * @type {Type}
     * @memberof GroupShares
     */
    type?: Type;
}



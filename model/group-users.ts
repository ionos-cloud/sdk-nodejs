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


import { Group } from './group';
import { Type } from './type';

/**
 * collection of groups a user is member of
 * @export
 * @interface GroupUsers
 */
export interface GroupUsers {
    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof GroupUsers
     */
    id?: string;
    /**
     * The type of the resource
     * @type {Type}
     * @memberof GroupUsers
     */
    type?: Type;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof GroupUsers
     */
    href?: string;
    /**
     * Array of items in that collection
     * @type {Array<Group>}
     * @memberof GroupUsers
     */
    items?: Array<Group>;
}



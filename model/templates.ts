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


import { Template } from './template';
import { Type } from './type';

/**
 * 
 * @export
 * @interface Templates
 */
export interface Templates {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof Templates
     */
    id?: string;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof Templates
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof Templates
     */
    href?: string;

    /**
     * Array of items in the collection.
     * @type {Array<Template>}
     * @memberof Templates
     */
    items?: Array<Template>;
}



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


import { PrivateCrossConnect } from './private-cross-connect';
import { Type } from './type';

/**
 * 
 * @export
 * @interface PrivateCrossConnects
 */
export interface PrivateCrossConnects {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof PrivateCrossConnects
     */
    id?: string;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof PrivateCrossConnects
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof PrivateCrossConnects
     */
    href?: string;

    /**
     * Array of items in the collection.
     * @type {Array<PrivateCrossConnect>}
     * @memberof PrivateCrossConnects
     */
    items?: Array<PrivateCrossConnect>;
}



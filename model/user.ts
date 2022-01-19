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


import { Type } from './type';
import { UserMetadata } from './user-metadata';
import { UserProperties } from './user-properties';
import { UsersEntities } from './users-entities';

/**
 * 
 * @export
 * @interface User
 */
export interface User {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof User
     */
    id?: string;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof User
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof User
     */
    href?: string;

    /**
     * 
     * @type {UserMetadata}
     * @memberof User
     */
    metadata?: UserMetadata;

    /**
     * 
     * @type {UserProperties}
     * @memberof User
     */
    properties: UserProperties;

    /**
     * 
     * @type {UsersEntities}
     * @memberof User
     */
    entities?: UsersEntities;
}



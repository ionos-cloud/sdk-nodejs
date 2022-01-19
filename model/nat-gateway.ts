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


import { DatacenterElementMetadata } from './datacenter-element-metadata';
import { NatGatewayEntities } from './nat-gateway-entities';
import { NatGatewayProperties } from './nat-gateway-properties';
import { Type } from './type';

/**
 * 
 * @export
 * @interface NatGateway
 */
export interface NatGateway {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof NatGateway
     */
    id?: string;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof NatGateway
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof NatGateway
     */
    href?: string;

    /**
     * 
     * @type {DatacenterElementMetadata}
     * @memberof NatGateway
     */
    metadata?: DatacenterElementMetadata;

    /**
     * 
     * @type {NatGatewayProperties}
     * @memberof NatGateway
     */
    properties: NatGatewayProperties;

    /**
     * 
     * @type {NatGatewayEntities}
     * @memberof NatGateway
     */
    entities?: NatGatewayEntities;
}



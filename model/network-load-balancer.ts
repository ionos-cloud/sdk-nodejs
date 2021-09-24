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


import { DatacenterElementMetadata } from './datacenter-element-metadata';
import { NetworkLoadBalancerEntities } from './network-load-balancer-entities';
import { NetworkLoadBalancerProperties } from './network-load-balancer-properties';
import { Type } from './type';

/**
 * 
 * @export
 * @interface NetworkLoadBalancer
 */
export interface NetworkLoadBalancer {
    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof NetworkLoadBalancer
     */
    id?: string;
    /**
     * The type of object that has been created
     * @type {Type}
     * @memberof NetworkLoadBalancer
     */
    type?: Type;
    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof NetworkLoadBalancer
     */
    href?: string;
    /**
     * 
     * @type {DatacenterElementMetadata}
     * @memberof NetworkLoadBalancer
     */
    metadata?: DatacenterElementMetadata;
    /**
     * 
     * @type {NetworkLoadBalancerProperties}
     * @memberof NetworkLoadBalancer
     */
    properties: NetworkLoadBalancerProperties;
    /**
     * 
     * @type {NetworkLoadBalancerEntities}
     * @memberof NetworkLoadBalancer
     */
    entities?: NetworkLoadBalancerEntities;
}



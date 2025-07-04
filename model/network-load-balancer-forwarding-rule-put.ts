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


import { NetworkLoadBalancerForwardingRuleProperties } from './network-load-balancer-forwarding-rule-properties';
import { Type } from './type';

/**
 * 
 * @export
 * @interface NetworkLoadBalancerForwardingRulePut
 */
export interface NetworkLoadBalancerForwardingRulePut {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof NetworkLoadBalancerForwardingRulePut
     */
    id?: string;

    /**
     * The type of object that has been created.
     * @type {Type}
     * @memberof NetworkLoadBalancerForwardingRulePut
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof NetworkLoadBalancerForwardingRulePut
     */
    href?: string;

    /**
     * 
     * @type {NetworkLoadBalancerForwardingRuleProperties}
     * @memberof NetworkLoadBalancerForwardingRulePut
     */
    properties: NetworkLoadBalancerForwardingRuleProperties;
}



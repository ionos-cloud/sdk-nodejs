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


import { NetworkLoadBalancerForwardingRuleTargetHealthCheck } from './network-load-balancer-forwarding-rule-target-health-check';

/**
 * 
 * @export
 * @interface NetworkLoadBalancerForwardingRuleTarget
 */
export interface NetworkLoadBalancerForwardingRuleTarget {

    /**
     * The IP of the balanced target VM.
     * @type {string}
     * @memberof NetworkLoadBalancerForwardingRuleTarget
     */
    ip: string;

    /**
     * The port of the balanced target service; valid range is 1 to 65535.
     * @type {number}
     * @memberof NetworkLoadBalancerForwardingRuleTarget
     */
    port: number;

    /**
     * Traffic is distributed in proportion to target weight, relative to the combined weight of all targets. A target with higher weight receives a greater share of traffic. Valid range is 0 to 256 and default is 1. Targets with weight of 0 do not participate in load balancing but still accept persistent connections. It is best to assign weights in the middle of the range to leave room for later adjustments.
     * @type {number}
     * @memberof NetworkLoadBalancerForwardingRuleTarget
     */
    weight: number;

    /**
     * Proxy protocol version.
     * @type {string}
     * @memberof NetworkLoadBalancerForwardingRuleTarget
     */
    proxyProtocol?: NetworkLoadBalancerForwardingRuleTargetProxyProtocolEnum;

    /**
     * 
     * @type {NetworkLoadBalancerForwardingRuleTargetHealthCheck}
     * @memberof NetworkLoadBalancerForwardingRuleTarget
     */
    healthCheck?: NetworkLoadBalancerForwardingRuleTargetHealthCheck;
}





/**
    * @export
    * @enum {string}
    */
export enum NetworkLoadBalancerForwardingRuleTargetProxyProtocolEnum {
    None = 'none',
    V1 = 'v1',
    V2 = 'v2',
    V2ssl = 'v2ssl'
}





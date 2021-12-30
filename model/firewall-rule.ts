/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * An enterprise-grade Infrastructure is provided as a Service (IaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.   The API allows you to perform a variety of management tasks such as spinning up additional servers, adding volumes, adjusting networking, and so forth. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive.
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DatacenterElementMetadata } from './datacenter-element-metadata';
import { FirewallruleProperties } from './firewallrule-properties';
import { Type } from './type';

/**
 * 
 * @export
 * @interface FirewallRule
 */
export interface FirewallRule {

    /**
     * The resource\'s unique identifier
     * @type {string}
     * @memberof FirewallRule
     */
    id?: string;

    /**
     * The type of object that has been created
     * @type {Type}
     * @memberof FirewallRule
     */
    type?: Type;

    /**
     * URL to the object representation (absolute path)
     * @type {string}
     * @memberof FirewallRule
     */
    href?: string;

    /**
     * 
     * @type {DatacenterElementMetadata}
     * @memberof FirewallRule
     */
    metadata?: DatacenterElementMetadata;

    /**
     * 
     * @type {FirewallruleProperties}
     * @memberof FirewallRule
     */
    properties: FirewallruleProperties;
}



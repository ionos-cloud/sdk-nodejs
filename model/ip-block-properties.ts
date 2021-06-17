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


import { IpConsumer } from './ip-consumer';

/**
 * 
 * @export
 * @interface IpBlockProperties
 */
export interface IpBlockProperties {
    /**
     * A collection of IPs associated with the IP Block
     * @type {Array<string>}
     * @memberof IpBlockProperties
     */
    ips?: Array<string>;
    /**
     * Location of that IP Block. Property cannot be modified after creation (disallowed in update requests)
     * @type {string}
     * @memberof IpBlockProperties
     */
    location: string;
    /**
     * The size of the IP block
     * @type {number}
     * @memberof IpBlockProperties
     */
    size: number;
    /**
     * A name of that resource
     * @type {string}
     * @memberof IpBlockProperties
     */
    name?: string;
    /**
     * Read-Only attribute. Lists consumption detail of an individual ip
     * @type {Array<IpConsumer>}
     * @memberof IpBlockProperties
     */
    ipConsumers?: Array<IpConsumer>;
}


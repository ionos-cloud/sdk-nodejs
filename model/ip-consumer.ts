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



/**
 * 
 * @export
 * @interface IpConsumer
 */
export interface IpConsumer {

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    ip?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    mac?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    nicId?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    serverId?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    serverName?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    datacenterId?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    datacenterName?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    k8sNodePoolUuid?: string;

    /**
     * 
     * @type {string}
     * @memberof IpConsumer
     */
    k8sClusterUuid?: string;
}



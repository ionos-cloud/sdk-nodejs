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



/**
 * 
 * @export
 * @interface NetworkLoadBalancerProperties
 */
export interface NetworkLoadBalancerProperties {

    /**
     * The name of the Network Load Balancer.
     * @type {string}
     * @memberof NetworkLoadBalancerProperties
     */
    name: string;

    /**
     * ID of the listening LAN (inbound).
     * @type {number}
     * @memberof NetworkLoadBalancerProperties
     */
    listenerLan: number;

    /**
     * Collection of IP addresses of the Network Load Balancer. (Inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public Load Balancer and private IP for the private Load balancer.
     * @type {Array<string>}
     * @memberof NetworkLoadBalancerProperties
     */
    ips?: Array<string>;

    /**
     * ID of the balanced private target LAN (outbound).
     * @type {number}
     * @memberof NetworkLoadBalancerProperties
     */
    targetLan: number;

    /**
     * Collection of private IP addresses with subnet mask of the Network Load Balancer. IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet.
     * @type {Array<string>}
     * @memberof NetworkLoadBalancerProperties
     */
    lbPrivateIps?: Array<string>;
}



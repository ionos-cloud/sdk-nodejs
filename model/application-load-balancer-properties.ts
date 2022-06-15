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
 * @interface ApplicationLoadBalancerProperties
 */
export interface ApplicationLoadBalancerProperties {

    /**
     * The name of the Application Load Balancer.
     * @type {string}
     * @memberof ApplicationLoadBalancerProperties
     */
    name: string;

    /**
     * ID of the listening (inbound) LAN.
     * @type {number}
     * @memberof ApplicationLoadBalancerProperties
     */
    listenerLan: number;

    /**
     * Collection of the Application Load Balancer IP addresses. (Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.
     * @type {Array<string>}
     * @memberof ApplicationLoadBalancerProperties
     */
    ips?: Array<string>;

    /**
     * ID of the balanced private target LAN (outbound).
     * @type {number}
     * @memberof ApplicationLoadBalancerProperties
     */
    targetLan: number;

    /**
     * Collection of private IP addresses with the subnet mask of the Application Load Balancer. IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.
     * @type {Array<string>}
     * @memberof ApplicationLoadBalancerProperties
     */
    lbPrivateIps?: Array<string>;
}



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
     * Collection of the Network Load Balancer IP addresses. (Inbound and outbound) IPs of the listenerLan must be customer-reserved IPs for public Load Balancers, and private IPs for private Load Balancers.
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
     * Collection of private IP addresses with subnet mask of the Network Load Balancer. IPs must contain a valid subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.
     * @type {Array<string>}
     * @memberof NetworkLoadBalancerProperties
     */
    lbPrivateIps?: Array<string>;

    /**
     * Turn logging on and off for this product. Default value is \'false\'.
     * @type {boolean}
     * @memberof NetworkLoadBalancerProperties
     */
    centralLogging?: boolean;

    /**
     * Specifies the format of the logs.
     * @type {string}
     * @memberof NetworkLoadBalancerProperties
     */
    loggingFormat?: string;
}



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
 * @interface TargetGroupTarget
 */
export interface TargetGroupTarget {

    /**
     * The IP of the balanced target VM.
     * @type {string}
     * @memberof TargetGroupTarget
     */
    ip: string;

    /**
     * The port of the balanced target service; valid range is 1 to 65535.
     * @type {number}
     * @memberof TargetGroupTarget
     */
    port: number;

    /**
     * Traffic is distributed in proportion to target weight, relative to the combined weight of all targets. A target with higher weight receives a greater share of traffic. Valid range is 0 to 256 and default is 1; targets with weight of 0 do not participate in load balancing but still accept persistent connections. It is best use values in the middle of the range to leave room for later adjustments.
     * @type {number}
     * @memberof TargetGroupTarget
     */
    weight: number;

    /**
     * When the health check is enabled, the target is available only when it accepts regular TCP or HTTP connection attempts for state checking. The state check consists of one connection attempt with the target\'s address and port. The default value is \'TRUE\'.
     * @type {boolean}
     * @memberof TargetGroupTarget
     */
    healthCheckEnabled?: boolean;

    /**
     * When the maintenance mode is enabled, the target is prevented from receiving traffic; the default value is \'FALSE\'.
     * @type {boolean}
     * @memberof TargetGroupTarget
     */
    maintenanceEnabled?: boolean;
}


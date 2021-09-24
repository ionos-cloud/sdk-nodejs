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



/**
 * 
 * @export
 * @interface LabelProperties
 */
export interface LabelProperties {
    /**
     * A Label Key
     * @type {string}
     * @memberof LabelProperties
     */
    key?: string;
    /**
     * A Label Value
     * @type {string}
     * @memberof LabelProperties
     */
    value?: string;
    /**
     * The id of the resource
     * @type {string}
     * @memberof LabelProperties
     */
    resourceId?: string;
    /**
     * The type of the resource on which the label is applied.
     * @type {string}
     * @memberof LabelProperties
     */
    resourceType?: string;
    /**
     * URL to the Resource (absolute path) on which the label is applied.
     * @type {string}
     * @memberof LabelProperties
     */
    resourceHref?: string;
}



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


import { CpuArchitectureProperties } from './cpu-architecture-properties';

/**
 * 
 * @export
 * @interface LocationProperties
 */
export interface LocationProperties {

    /**
     * The name of the  resource.
     * @type {string}
     * @memberof LocationProperties
     */
    name?: string;

    /**
     * List of features supported by the location
     * @type {Array<string>}
     * @memberof LocationProperties
     */
    features?: Array<string>;

    /**
     * List of image aliases available for the location
     * @type {Array<string>}
     * @memberof LocationProperties
     */
    imageAliases?: Array<string>;

    /**
     * Array of features and CPU families available in a location
     * @type {Array<CpuArchitectureProperties>}
     * @memberof LocationProperties
     */
    cpuArchitecture?: Array<CpuArchitectureProperties>;
}



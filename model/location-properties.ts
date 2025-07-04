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


import { CpuArchitectureProperties } from './cpu-architecture-properties';

/**
 * 
 * @export
 * @interface LocationProperties
 */
export interface LocationProperties {

    /**
     * The location name.
     * @type {string}
     * @memberof LocationProperties
     */
    name?: string;

    /**
     * A list of available features in the location.
     * @type {Array<string>}
     * @memberof LocationProperties
     */
    features?: Array<string>;

    /**
     * A list of image aliases available in the location.
     * @type {Array<string>}
     * @memberof LocationProperties
     */
    imageAliases?: Array<string>;

    /**
     * A list of available CPU types and related resources available in the location.
     * @type {Array<CpuArchitectureProperties>}
     * @memberof LocationProperties
     */
    cpuArchitecture?: Array<CpuArchitectureProperties>;
}



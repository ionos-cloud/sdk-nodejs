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


import { DatacenterElementMetadata } from './datacenter-element-metadata';
import { KubernetesNodePoolPropertiesForPost } from './kubernetes-node-pool-properties-for-post';

/**
 * 
 * @export
 * @interface KubernetesNodePoolForPost
 */
export interface KubernetesNodePoolForPost {

    /**
     * The resource\'s unique identifier.
     * @type {string}
     * @memberof KubernetesNodePoolForPost
     */
    id?: string;

    /**
     * The type of object.
     * @type {string}
     * @memberof KubernetesNodePoolForPost
     */
    type?: KubernetesNodePoolForPostTypeEnum;

    /**
     * URL to the object representation (absolute path).
     * @type {string}
     * @memberof KubernetesNodePoolForPost
     */
    href?: string;

    /**
     * 
     * @type {DatacenterElementMetadata}
     * @memberof KubernetesNodePoolForPost
     */
    metadata?: DatacenterElementMetadata;

    /**
     * 
     * @type {KubernetesNodePoolPropertiesForPost}
     * @memberof KubernetesNodePoolForPost
     */
    properties: KubernetesNodePoolPropertiesForPost;
}



/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodePoolForPostTypeEnum {
    Nodepool = 'nodepool'
}







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


import { KubernetesNode } from './kubernetes-node';

/**
 * 
 * @export
 * @interface KubernetesNodes
 */
export interface KubernetesNodes {

    /**
     * A unique representation of the Kubernetes node pool as a resource collection.
     * @type {string}
     * @memberof KubernetesNodes
     */
    id?: string;

    /**
     * The type of resource within a collection.
     * @type {string}
     * @memberof KubernetesNodes
     */
    type?: KubernetesNodesTypeEnum;

    /**
     * URL to the collection representation (absolute path).
     * @type {string}
     * @memberof KubernetesNodes
     */
    href?: string;

    /**
     * Array of items in that collection.
     * @type {Array<KubernetesNode>}
     * @memberof KubernetesNodes
     */
    items?: Array<KubernetesNode>;
}



/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodesTypeEnum {
    Collection = 'collection'
}






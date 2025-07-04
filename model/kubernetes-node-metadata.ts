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
 * @interface KubernetesNodeMetadata
 */
export interface KubernetesNodeMetadata {

    /**
     * The resource entity tag as defined in http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.11  Entity tags are also added as \'ETag\' response headers to requests that do not use the \'depth\' parameter.
     * @type {string}
     * @memberof KubernetesNodeMetadata
     */
    etag?: string;

    /**
     * The date the resource was created.
     * @type {string}
     * @memberof KubernetesNodeMetadata
     */
    createdDate?: string;

    /**
     * The date the resource was last modified.
     * @type {string}
     * @memberof KubernetesNodeMetadata
     */
    lastModifiedDate?: string;

    /**
     * The resource state.
     * @type {string}
     * @memberof KubernetesNodeMetadata
     */
    state?: KubernetesNodeMetadataStateEnum;

    /**
     * The date when the software on the node was last updated.
     * @type {string}
     * @memberof KubernetesNodeMetadata
     */
    lastSoftwareUpdatedDate?: string;
}





/**
    * @export
    * @enum {string}
    */
export enum KubernetesNodeMetadataStateEnum {
    Provisioning = 'PROVISIONING',
    Provisioned = 'PROVISIONED',
    Ready = 'READY',
    Terminating = 'TERMINATING',
    Rebuilding = 'REBUILDING',
    Busy = 'BUSY'
}





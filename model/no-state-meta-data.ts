/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * An enterprise-grade Infrastructure is provided as a Service (IaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.   The API allows you to perform a variety of management tasks such as spinning up additional servers, adding volumes, adjusting networking, and so forth. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive.
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface NoStateMetaData
 */
export interface NoStateMetaData {
    /**
     * Resource\'s Entity Tag as defined in http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.11 . Entity Tag is also added as an \'ETag response header to requests which don\'t use \'depth\' parameter. 
     * @type {string}
     * @memberof NoStateMetaData
     */
    etag?: string;
    /**
     * The time the Resource was created
     * @type {string}
     * @memberof NoStateMetaData
     */
    createdDate?: string;
    /**
     * The user who has created the resource.
     * @type {string}
     * @memberof NoStateMetaData
     */
    createdBy?: string;
    /**
     * The user id of the user who has created the resource.
     * @type {string}
     * @memberof NoStateMetaData
     */
    createdByUserId?: string;
    /**
     * The last time the resource has been modified
     * @type {string}
     * @memberof NoStateMetaData
     */
    lastModifiedDate?: string;
    /**
     * The user who last modified the resource.
     * @type {string}
     * @memberof NoStateMetaData
     */
    lastModifiedBy?: string;
    /**
     * The user id of the user who has last modified the resource.
     * @type {string}
     * @memberof NoStateMetaData
     */
    lastModifiedByUserId?: string;
}



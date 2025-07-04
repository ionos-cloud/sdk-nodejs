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
 * @interface S3KeyMetadata
 */
export interface S3KeyMetadata {

    /**
     * Resource\'s Entity Tag as defined in http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.11  Entity Tag is also added as an \'ETag response header to requests which don\'t use \'depth\' parameter.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    etag?: string;

    /**
     * The time when the Object storage key was created.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    createdDate?: string;

    /**
     * Unique name of the identity that created the resource.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    createdBy?: string;

    /**
     * The unique ID of the user who created the Object storage key.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    createdByUserId?: string;

    /**
     * The last time the Object storage key was modified.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    lastModifiedDate?: string;

    /**
     * Unique name of the identity that last modified the Object storage key.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    lastModifiedBy?: string;

    /**
     * The unique ID of the user who last modified the Object storage key.
     * @type {string}
     * @memberof S3KeyMetadata
     */
    lastModifiedByUserId?: string;
}



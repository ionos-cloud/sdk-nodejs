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
 * @interface UserProperties
 */
export interface UserProperties {
    /**
     * first name of the user
     * @type {string}
     * @memberof UserProperties
     */
    firstname?: string;
    /**
     * last name of the user
     * @type {string}
     * @memberof UserProperties
     */
    lastname?: string;
    /**
     * email address of the user
     * @type {string}
     * @memberof UserProperties
     */
    email?: string;
    /**
     * indicates if the user has admin rights or not
     * @type {boolean}
     * @memberof UserProperties
     */
    administrator?: boolean;
    /**
     * indicates if secure authentication should be forced on the user or not
     * @type {boolean}
     * @memberof UserProperties
     */
    forceSecAuth?: boolean;
    /**
     * indicates if secure authentication is active for the user or not
     * @type {boolean}
     * @memberof UserProperties
     */
    secAuthActive?: boolean;
    /**
     * Canonical (S3) id of the user for a given identity
     * @type {string}
     * @memberof UserProperties
     */
    s3CanonicalUserId?: string;
    /**
     * indicates if the user is active
     * @type {boolean}
     * @memberof UserProperties
     */
    active?: boolean;
}



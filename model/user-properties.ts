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
 * @interface UserProperties
 */
export interface UserProperties {

    /**
     * The first name of the user.
     * @type {string}
     * @memberof UserProperties
     */
    firstname?: string;

    /**
     * The last name of the user.
     * @type {string}
     * @memberof UserProperties
     */
    lastname?: string;

    /**
     * The email address of the user.
     * @type {string}
     * @memberof UserProperties
     */
    email?: string;

    /**
     * Indicates if the user has admin rights.
     * @type {boolean}
     * @memberof UserProperties
     */
    administrator?: boolean;

    /**
     * Indicates if secure authentication should be forced on the user.
     * @type {boolean}
     * @memberof UserProperties
     */
    forceSecAuth?: boolean;

    /**
     * Indicates if secure authentication is active for the user.
     * @type {boolean}
     * @memberof UserProperties
     */
    secAuthActive?: boolean;

    /**
     * Canonical (Object storage) ID of the user for a given identity.
     * @type {string}
     * @memberof UserProperties
     */
    s3CanonicalUserId?: string;

    /**
     * Indicates if the user is active.
     * @type {boolean}
     * @memberof UserProperties
     */
    active?: boolean;
}



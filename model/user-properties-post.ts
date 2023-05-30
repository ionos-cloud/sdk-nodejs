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



/**
 * 
 * @export
 * @interface UserPropertiesPost
 */
export interface UserPropertiesPost {

    /**
     * Indicates if the user is active.
     * @type {boolean}
     * @memberof UserPropertiesPost
     */
    active?: boolean;

    /**
     * Indicates if the user has admin rights.
     * @type {boolean}
     * @memberof UserPropertiesPost
     */
    administrator?: boolean;

    /**
     * The email address of the user.
     * @type {string}
     * @memberof UserPropertiesPost
     */
    email?: string;

    /**
     * The first name of the user.
     * @type {string}
     * @memberof UserPropertiesPost
     */
    firstname?: string;

    /**
     * Indicates if secure authentication should be forced on the user.
     * @type {boolean}
     * @memberof UserPropertiesPost
     */
    forceSecAuth?: boolean;

    /**
     * The last name of the user.
     * @type {string}
     * @memberof UserPropertiesPost
     */
    lastname?: string;

    /**
     * User password.
     * @type {string}
     * @memberof UserPropertiesPost
     */
    password?: string;

    /**
     * Indicates if secure authentication is active for the user.
     * @type {boolean}
     * @memberof UserPropertiesPost
     */
    secAuthActive?: boolean;
}



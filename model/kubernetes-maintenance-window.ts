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
 * @interface KubernetesMaintenanceWindow
 */
export interface KubernetesMaintenanceWindow {

    /**
     * The weekday for a maintenance window.
     * @type {string}
     * @memberof KubernetesMaintenanceWindow
     */
    dayOfTheWeek: KubernetesMaintenanceWindowDayOfTheWeekEnum;

    /**
     * The time to use for a maintenance window. Accepted formats are: HH:mm:ss; HH:mm:ss\"Z\"; HH:mm:ssZ. This time may vary by 15 minutes.
     * @type {string}
     * @memberof KubernetesMaintenanceWindow
     */
    time: string;
}


/**
    * @export
    * @enum {string}
    */
export enum KubernetesMaintenanceWindowDayOfTheWeekEnum {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}





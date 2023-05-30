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
 * @interface GroupProperties
 */
export interface GroupProperties {

    /**
     * Activity log access privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    accessActivityLog?: boolean;

    /**
     * Privilege for a group to access and manage certificates.
     * @type {boolean}
     * @memberof GroupProperties
     */
    accessAndManageCertificates?: boolean;

    /**
     * Privilege for a group to access and manage dns records.
     * @type {boolean}
     * @memberof GroupProperties
     */
    accessAndManageDns?: boolean;

    /**
     * Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS).
     * @type {boolean}
     * @memberof GroupProperties
     */
    accessAndManageMonitoring?: boolean;

    /**
     * Create backup unit privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createBackupUnit?: boolean;

    /**
     * Create data center privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createDataCenter?: boolean;

    /**
     * Create Flow Logs privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createFlowLog?: boolean;

    /**
     * Create internet access privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createInternetAccess?: boolean;

    /**
     * Create Kubernetes cluster privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createK8sCluster?: boolean;

    /**
     * Create pcc privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createPcc?: boolean;

    /**
     * Create snapshot privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    createSnapshot?: boolean;

    /**
     * Privilege for a group to manage DBaaS related functionality.
     * @type {boolean}
     * @memberof GroupProperties
     */
    manageDBaaS?: boolean;

    /**
     * Privilege for a group to access and manage the Data Platform.
     * @type {boolean}
     * @memberof GroupProperties
     */
    manageDataplatform?: boolean;

    /**
     * Privilege for group accessing container registry related functionality.
     * @type {boolean}
     * @memberof GroupProperties
     */
    manageRegistry?: boolean;

    /**
     * The name of the resource.
     * @type {string}
     * @memberof GroupProperties
     */
    name?: string;

    /**
     * Reserve IP block privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    reserveIp?: boolean;

    /**
     * S3 privilege.
     * @type {boolean}
     * @memberof GroupProperties
     */
    s3Privilege?: boolean;
}



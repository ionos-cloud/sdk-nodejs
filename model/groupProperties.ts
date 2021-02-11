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

import { RequestFile } from './models';

export class GroupProperties {
    /**
    * A name of that resource
    */
    'name'?: string;
    /**
    * create data center privilege
    */
    'createDataCenter'?: boolean;
    /**
    * create snapshot privilege
    */
    'createSnapshot'?: boolean;
    /**
    * reserve ip block privilege
    */
    'reserveIp'?: boolean;
    /**
    * activity log access privilege
    */
    'accessActivityLog'?: boolean;
    /**
    * create pcc privilege
    */
    'createPcc'?: boolean;
    /**
    * S3 privilege
    */
    's3Privilege'?: boolean;
    /**
    * create backup unit privilege
    */
    'createBackupUnit'?: boolean;
    /**
    * create internet access privilege
    */
    'createInternetAccess'?: boolean;
    /**
    * create kubernetes cluster privilege
    */
    'createK8sCluster'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "createDataCenter",
            "baseName": "createDataCenter",
            "type": "boolean"
        },
        {
            "name": "createSnapshot",
            "baseName": "createSnapshot",
            "type": "boolean"
        },
        {
            "name": "reserveIp",
            "baseName": "reserveIp",
            "type": "boolean"
        },
        {
            "name": "accessActivityLog",
            "baseName": "accessActivityLog",
            "type": "boolean"
        },
        {
            "name": "createPcc",
            "baseName": "createPcc",
            "type": "boolean"
        },
        {
            "name": "s3Privilege",
            "baseName": "s3Privilege",
            "type": "boolean"
        },
        {
            "name": "createBackupUnit",
            "baseName": "createBackupUnit",
            "type": "boolean"
        },
        {
            "name": "createInternetAccess",
            "baseName": "createInternetAccess",
            "type": "boolean"
        },
        {
            "name": "createK8sCluster",
            "baseName": "createK8sCluster",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GroupProperties.attributeTypeMap;
    }
}


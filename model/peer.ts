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

export class Peer {
    'id'?: string;
    'name'?: string;
    'datacenterId'?: string;
    'datacenterName'?: string;
    'location'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "datacenterId",
            "baseName": "datacenterId",
            "type": "string"
        },
        {
            "name": "datacenterName",
            "baseName": "datacenterName",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Peer.attributeTypeMap;
    }
}


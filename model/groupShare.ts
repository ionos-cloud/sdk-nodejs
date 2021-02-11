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
import { GroupShareProperties } from './groupShareProperties';
import { Type } from './type';

export class GroupShare {
    /**
    * The resource\'s unique identifier
    */
    'id'?: string;
    /**
    * resource as generic type
    */
    'type'?: Type;
    /**
    * URL to the object representation (absolute path)
    */
    'href'?: string;
    'properties': GroupShareProperties;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Type"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "GroupShareProperties"
        }    ];

    static getAttributeTypeMap() {
        return GroupShare.attributeTypeMap;
    }
}


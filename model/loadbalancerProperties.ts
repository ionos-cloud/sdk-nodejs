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

export class LoadbalancerProperties {
    /**
    * A name of that resource
    */
    'name'?: string;
    /**
    * IPv4 address of the loadbalancer. All attached NICs will inherit this IP. Leaving value null will assign IP automatically
    */
    'ip'?: LoadbalancerProperties.IpEnum;
    /**
    * Indicates if the loadbalancer will reserve an IP using DHCP
    */
    'dhcp'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "LoadbalancerProperties.IpEnum"
        },
        {
            "name": "dhcp",
            "baseName": "dhcp",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LoadbalancerProperties.attributeTypeMap;
    }
}

export namespace LoadbalancerProperties {
    export enum IpEnum {
        ValidIpAddress = <any> '@Valid IP address@',
        Null = <any> 'null'
    }
}

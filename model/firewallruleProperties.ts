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

export class FirewallruleProperties {
    /**
    * A name of that resource
    */
    'name'?: string;
    /**
    * The protocol for the rule. Property cannot be modified after creation (disallowed in update requests)
    */
    'protocol': FirewallruleProperties.ProtocolEnum;
    /**
    * Only traffic originating from the respective MAC address is allowed. Valid format: aa:bb:cc:dd:ee:ff. Value null allows all source MAC address
    */
    'sourceMac'?: FirewallruleProperties.SourceMacEnum;
    /**
    * Only traffic originating from the respective IPv4 address is allowed. Value null allows all source IPs
    */
    'sourceIp'?: FirewallruleProperties.SourceIpEnum;
    /**
    * In case the target NIC has multiple IP addresses, only traffic directed to the respective IP address of the NIC is allowed. Value null allows all target IPs
    */
    'targetIp'?: FirewallruleProperties.TargetIpEnum;
    /**
    * Defines the allowed code (from 0 to 254) if protocol ICMP is chosen. Value null allows all codes
    */
    'icmpCode'?: number;
    /**
    * Defines the allowed type (from 0 to 254) if the protocol ICMP is chosen. Value null allows all types
    */
    'icmpType'?: number;
    /**
    * Defines the start range of the allowed port (from 1 to 65534) if protocol TCP or UDP is chosen. Leave portRangeStart and portRangeEnd value null to allow all ports
    */
    'portRangeStart'?: number;
    /**
    * Defines the end range of the allowed port (from 1 to 65534) if the protocol TCP or UDP is chosen. Leave portRangeStart and portRangeEnd null to allow all ports
    */
    'portRangeEnd'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "FirewallruleProperties.ProtocolEnum"
        },
        {
            "name": "sourceMac",
            "baseName": "sourceMac",
            "type": "FirewallruleProperties.SourceMacEnum"
        },
        {
            "name": "sourceIp",
            "baseName": "sourceIp",
            "type": "FirewallruleProperties.SourceIpEnum"
        },
        {
            "name": "targetIp",
            "baseName": "targetIp",
            "type": "FirewallruleProperties.TargetIpEnum"
        },
        {
            "name": "icmpCode",
            "baseName": "icmpCode",
            "type": "number"
        },
        {
            "name": "icmpType",
            "baseName": "icmpType",
            "type": "number"
        },
        {
            "name": "portRangeStart",
            "baseName": "portRangeStart",
            "type": "number"
        },
        {
            "name": "portRangeEnd",
            "baseName": "portRangeEnd",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FirewallruleProperties.attributeTypeMap;
    }
}

export namespace FirewallruleProperties {
    export enum ProtocolEnum {
        Tcp = <any> 'TCP',
        Udp = <any> 'UDP',
        Icmp = <any> 'ICMP',
        Any = <any> 'ANY'
    }
    export enum SourceMacEnum {
        ValidMacAddress = <any> '@Valid MAC address@',
        Null = <any> 'null'
    }
    export enum SourceIpEnum {
        ValidIpAddress = <any> '@Valid IP address@',
        Null = <any> 'null'
    }
    export enum TargetIpEnum {
        ValidIpAddress = <any> '@Valid IP address@',
        Null = <any> 'null'
    }
}
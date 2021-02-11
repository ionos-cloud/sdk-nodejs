"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NicProperties = void 0;
var NicProperties = /** @class */ (function () {
    function NicProperties() {
    }
    NicProperties.getAttributeTypeMap = function () {
        return NicProperties.attributeTypeMap;
    };
    NicProperties.discriminator = undefined;
    NicProperties.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "mac",
            "baseName": "mac",
            "type": "string"
        },
        {
            "name": "ips",
            "baseName": "ips",
            "type": "Array<string>"
        },
        {
            "name": "dhcp",
            "baseName": "dhcp",
            "type": "boolean"
        },
        {
            "name": "lan",
            "baseName": "lan",
            "type": "number"
        },
        {
            "name": "firewallActive",
            "baseName": "firewallActive",
            "type": "boolean"
        },
        {
            "name": "nat",
            "baseName": "nat",
            "type": "boolean"
        }
    ];
    return NicProperties;
}());
exports.NicProperties = NicProperties;

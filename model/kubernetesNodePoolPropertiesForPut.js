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
exports.KubernetesNodePoolPropertiesForPut = void 0;
var KubernetesNodePoolPropertiesForPut = /** @class */ (function () {
    function KubernetesNodePoolPropertiesForPut() {
    }
    KubernetesNodePoolPropertiesForPut.getAttributeTypeMap = function () {
        return KubernetesNodePoolPropertiesForPut.attributeTypeMap;
    };
    KubernetesNodePoolPropertiesForPut.discriminator = undefined;
    KubernetesNodePoolPropertiesForPut.attributeTypeMap = [
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
            "name": "nodeCount",
            "baseName": "nodeCount",
            "type": "number"
        },
        {
            "name": "cpuFamily",
            "baseName": "cpuFamily",
            "type": "string"
        },
        {
            "name": "coresCount",
            "baseName": "coresCount",
            "type": "number"
        },
        {
            "name": "ramSize",
            "baseName": "ramSize",
            "type": "number"
        },
        {
            "name": "availabilityZone",
            "baseName": "availabilityZone",
            "type": "KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum"
        },
        {
            "name": "storageType",
            "baseName": "storageType",
            "type": "KubernetesNodePoolPropertiesForPut.StorageTypeEnum"
        },
        {
            "name": "storageSize",
            "baseName": "storageSize",
            "type": "number"
        },
        {
            "name": "k8sVersion",
            "baseName": "k8sVersion",
            "type": "string"
        },
        {
            "name": "maintenanceWindow",
            "baseName": "maintenanceWindow",
            "type": "KubernetesMaintenanceWindow"
        },
        {
            "name": "autoScaling",
            "baseName": "autoScaling",
            "type": "KubernetesAutoScaling"
        },
        {
            "name": "lans",
            "baseName": "lans",
            "type": "Array<KubernetesNodePoolLan>"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "publicIps",
            "baseName": "publicIps",
            "type": "Array<string>"
        }
    ];
    return KubernetesNodePoolPropertiesForPut;
}());
exports.KubernetesNodePoolPropertiesForPut = KubernetesNodePoolPropertiesForPut;
(function (KubernetesNodePoolPropertiesForPut) {
    var AvailabilityZoneEnum;
    (function (AvailabilityZoneEnum) {
        AvailabilityZoneEnum[AvailabilityZoneEnum["Auto"] = 'AUTO'] = "Auto";
        AvailabilityZoneEnum[AvailabilityZoneEnum["Zone1"] = 'ZONE_1'] = "Zone1";
        AvailabilityZoneEnum[AvailabilityZoneEnum["Zone2"] = 'ZONE_2'] = "Zone2";
    })(AvailabilityZoneEnum = KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum || (KubernetesNodePoolPropertiesForPut.AvailabilityZoneEnum = {}));
    var StorageTypeEnum;
    (function (StorageTypeEnum) {
        StorageTypeEnum[StorageTypeEnum["Hdd"] = 'HDD'] = "Hdd";
        StorageTypeEnum[StorageTypeEnum["Ssd"] = 'SSD'] = "Ssd";
    })(StorageTypeEnum = KubernetesNodePoolPropertiesForPut.StorageTypeEnum || (KubernetesNodePoolPropertiesForPut.StorageTypeEnum = {}));
})(KubernetesNodePoolPropertiesForPut = exports.KubernetesNodePoolPropertiesForPut || (exports.KubernetesNodePoolPropertiesForPut = {}));
exports.KubernetesNodePoolPropertiesForPut = KubernetesNodePoolPropertiesForPut;
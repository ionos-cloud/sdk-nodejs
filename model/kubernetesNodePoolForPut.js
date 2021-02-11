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
exports.KubernetesNodePoolForPut = void 0;
var KubernetesNodePoolForPut = /** @class */ (function () {
    function KubernetesNodePoolForPut() {
    }
    KubernetesNodePoolForPut.getAttributeTypeMap = function () {
        return KubernetesNodePoolForPut.attributeTypeMap;
    };
    KubernetesNodePoolForPut.discriminator = undefined;
    KubernetesNodePoolForPut.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "KubernetesNodePoolForPut.TypeEnum"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "DatacenterElementMetadata"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "KubernetesNodePoolPropertiesForPut"
        }
    ];
    return KubernetesNodePoolForPut;
}());
exports.KubernetesNodePoolForPut = KubernetesNodePoolForPut;
(function (KubernetesNodePoolForPut) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Nodepool"] = 'nodepool'] = "Nodepool";
    })(TypeEnum = KubernetesNodePoolForPut.TypeEnum || (KubernetesNodePoolForPut.TypeEnum = {}));
})(KubernetesNodePoolForPut = exports.KubernetesNodePoolForPut || (exports.KubernetesNodePoolForPut = {}));
exports.KubernetesNodePoolForPut = KubernetesNodePoolForPut;

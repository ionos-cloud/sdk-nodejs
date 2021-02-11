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
exports.RequestTarget = void 0;
var RequestTarget = /** @class */ (function () {
    function RequestTarget() {
    }
    RequestTarget.getAttributeTypeMap = function () {
        return RequestTarget.attributeTypeMap;
    };
    RequestTarget.discriminator = undefined;
    RequestTarget.attributeTypeMap = [
        {
            "name": "target",
            "baseName": "target",
            "type": "ResourceReference"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RequestTarget.StatusEnum"
        }
    ];
    return RequestTarget;
}());
exports.RequestTarget = RequestTarget;
(function (RequestTarget) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Queued"] = 'QUEUED'] = "Queued";
        StatusEnum[StatusEnum["Running"] = 'RUNNING'] = "Running";
        StatusEnum[StatusEnum["Done"] = 'DONE'] = "Done";
        StatusEnum[StatusEnum["Failed"] = 'FAILED'] = "Failed";
    })(StatusEnum = RequestTarget.StatusEnum || (RequestTarget.StatusEnum = {}));
})(RequestTarget = exports.RequestTarget || (exports.RequestTarget = {}));
exports.RequestTarget = RequestTarget;
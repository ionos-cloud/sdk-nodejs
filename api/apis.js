"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./defaultApi"), exports);
var defaultApi_1 = require("./defaultApi");
__exportStar(require("./backupUnitApi"), exports);
var backupUnitApi_1 = require("./backupUnitApi");
__exportStar(require("./contractApi"), exports);
var contractApi_1 = require("./contractApi");
__exportStar(require("./dataCenterApi"), exports);
var dataCenterApi_1 = require("./dataCenterApi");
__exportStar(require("./iPBlocksApi"), exports);
var iPBlocksApi_1 = require("./iPBlocksApi");
__exportStar(require("./imageApi"), exports);
var imageApi_1 = require("./imageApi");
__exportStar(require("./kubernetesApi"), exports);
var kubernetesApi_1 = require("./kubernetesApi");
__exportStar(require("./labelApi"), exports);
var labelApi_1 = require("./labelApi");
__exportStar(require("./lanApi"), exports);
var lanApi_1 = require("./lanApi");
__exportStar(require("./loadBalancerApi"), exports);
var loadBalancerApi_1 = require("./loadBalancerApi");
__exportStar(require("./locationApi"), exports);
var locationApi_1 = require("./locationApi");
__exportStar(require("./nicApi"), exports);
var nicApi_1 = require("./nicApi");
__exportStar(require("./privateCrossConnectApi"), exports);
var privateCrossConnectApi_1 = require("./privateCrossConnectApi");
__exportStar(require("./requestApi"), exports);
var requestApi_1 = require("./requestApi");
__exportStar(require("./serverApi"), exports);
var serverApi_1 = require("./serverApi");
__exportStar(require("./snapshotApi"), exports);
var snapshotApi_1 = require("./snapshotApi");
__exportStar(require("./userManagementApi"), exports);
var userManagementApi_1 = require("./userManagementApi");
__exportStar(require("./volumeApi"), exports);
var volumeApi_1 = require("./volumeApi");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [defaultApi_1.DefaultApi, backupUnitApi_1.BackupUnitApi, contractApi_1.ContractApi, dataCenterApi_1.DataCenterApi, iPBlocksApi_1.IPBlocksApi, imageApi_1.ImageApi, kubernetesApi_1.KubernetesApi, labelApi_1.LabelApi, lanApi_1.LanApi, loadBalancerApi_1.LoadBalancerApi, locationApi_1.LocationApi, nicApi_1.NicApi, privateCrossConnectApi_1.PrivateCrossConnectApi, requestApi_1.RequestApi, serverApi_1.ServerApi, snapshotApi_1.SnapshotApi, userManagementApi_1.UserManagementApi, volumeApi_1.VolumeApi];

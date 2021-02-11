export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './backupUnitApi';
import { BackupUnitApi } from './backupUnitApi';
export * from './contractApi';
import { ContractApi } from './contractApi';
export * from './dataCenterApi';
import { DataCenterApi } from './dataCenterApi';
export * from './iPBlocksApi';
import { IPBlocksApi } from './iPBlocksApi';
export * from './imageApi';
import { ImageApi } from './imageApi';
export * from './kubernetesApi';
import { KubernetesApi } from './kubernetesApi';
export * from './labelApi';
import { LabelApi } from './labelApi';
export * from './lanApi';
import { LanApi } from './lanApi';
export * from './loadBalancerApi';
import { LoadBalancerApi } from './loadBalancerApi';
export * from './locationApi';
import { LocationApi } from './locationApi';
export * from './nicApi';
import { NicApi } from './nicApi';
export * from './privateCrossConnectApi';
import { PrivateCrossConnectApi } from './privateCrossConnectApi';
export * from './requestApi';
import { RequestApi } from './requestApi';
export * from './serverApi';
import { ServerApi } from './serverApi';
export * from './snapshotApi';
import { SnapshotApi } from './snapshotApi';
export * from './userManagementApi';
import { UserManagementApi } from './userManagementApi';
export * from './volumeApi';
import { VolumeApi } from './volumeApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DefaultApi, BackupUnitApi, ContractApi, DataCenterApi, IPBlocksApi, ImageApi, KubernetesApi, LabelApi, LanApi, LoadBalancerApi, LocationApi, NicApi, PrivateCrossConnectApi, RequestApi, ServerApi, SnapshotApi, UserManagementApi, VolumeApi];

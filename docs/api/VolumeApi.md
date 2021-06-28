# Class: VolumeApi

## VolumeApi

#### new VolumeApi()

VolumeApi - object-oriented interface

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 960](/../../api/volume-api.ts#L960)

---------------

### Extends

- BaseAPI

### Methods

#### datacentersVolumesCreateSnapshotPost(requestParameters, options)

Create Volume Snapshot
Creates a snapshot of a volume within the datacenter. You can use a snapshot to create a new storage volume or to restore a storage volume.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesCreateSnapshotPostRequest](global.md#VolumeApiDatacentersVolumesCreateSnapshotPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 975](/../../api/volume-api.ts#L975)

##### Throws:

*RequiredError*

#### datacentersVolumesDelete(requestParameters, options)

Delete a Volume
Deletes the specified volume. This will result in the volume being removed from your datacenter. Use this with caution.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesDeleteRequest](global.md#VolumeApiDatacentersVolumesDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 986](/../../api/volume-api.ts#L986)

##### Throws:

*RequiredError*

#### datacentersVolumesFindById(requestParameters, options)

Retrieve a Volume
Retrieves the attributes of a given Volume

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesFindByIdRequest](global.md#VolumeApiDatacentersVolumesFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 997](/../../api/volume-api.ts#L997)

##### Throws:

*RequiredError*

#### datacentersVolumesGet(requestParameters, options)

List Volumes
Retrieves a list of Volumes.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesGetRequest](global.md#VolumeApiDatacentersVolumesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 1008](/../../api/volume-api.ts#L1008)

##### Throws:

*RequiredError*

#### datacentersVolumesPatch(requestParameters, options)

Partially modify a Volume
You can use update attributes of a Volume

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesPatchRequest](global.md#VolumeApiDatacentersVolumesPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 1019](/../../api/volume-api.ts#L1019)

##### Throws:

*RequiredError*

#### datacentersVolumesPost(requestParameters, options)

Create a Volume
Creates a volume within the datacenter. This will not attach the volume to a server. Please see the Servers section for details on how to attach storage volumes

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesPostRequest](global.md#VolumeApiDatacentersVolumesPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 1030](/../../api/volume-api.ts#L1030)

##### Throws:

*RequiredError*

#### datacentersVolumesPut(requestParameters, options)

Modify a Volume
You can use update attributes of a Volume

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesPutRequest](global.md#VolumeApiDatacentersVolumesPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 1041](/../../api/volume-api.ts#L1041)

##### Throws:

*RequiredError*

#### datacentersVolumesRestoreSnapshotPost(requestParameters, options)

Restore Volume Snapshot
This will restore a snapshot onto a volume. A snapshot is created as just another image that can be used to create subsequent volumes if you want or to restore an existing volume.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[VolumeApiDatacentersVolumesRestoreSnapshotPostRequest](global.md#VolumeApiDatacentersVolumesRestoreSnapshotPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/volume-api.ts](/../../api/volume-api.ts), [line 1052](/../../api/volume-api.ts#L1052)

##### Throws:

*RequiredError*
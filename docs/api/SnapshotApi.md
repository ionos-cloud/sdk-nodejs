# Class: SnapshotApi

## SnapshotApi

#### new SnapshotApi()

SnapshotApi - object-oriented interface

*Source:*
[api/snapshot-api.ts](api/snapshot-api.ts), [line 541](api/snapshot-api.ts#L541)

---------------

### Extends

- BaseAPI

### Methods

#### snapshotsDelete(requestParameters, options)

Delete a Snapshot
Deletes the specified Snapshot.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[SnapshotApiSnapshotsDeleteRequest](global.md#SnapshotApiSnapshotsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/snapshot-api.ts](api/snapshot-api.ts), [line 556](api/snapshot-api.ts#L556)

##### Throws:

*RequiredError*

#### snapshotsFindById(requestParameters, options)

Retrieve a Snapshot by its uuid.
Retrieves the attributes of a given Snapshot.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[SnapshotApiSnapshotsFindByIdRequest](global.md#SnapshotApiSnapshotsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/snapshot-api.ts](api/snapshot-api.ts), [line 567](api/snapshot-api.ts#L567)

##### Throws:

*RequiredError*

#### snapshotsGet(requestParameters, options)

List Snapshots
Retrieve a list of available snapshots.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[SnapshotApiSnapshotsGetRequest](global.md#SnapshotApiSnapshotsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/snapshot-api.ts](api/snapshot-api.ts), [line 578](api/snapshot-api.ts#L578)

##### Throws:

*RequiredError*

#### snapshotsPatch(requestParameters, options)

Partially modify a Snapshot
You can use this method to update attributes of a Snapshot.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[SnapshotApiSnapshotsPatchRequest](global.md#SnapshotApiSnapshotsPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/snapshot-api.ts](api/snapshot-api.ts), [line 589](api/snapshot-api.ts#L589)

##### Throws:

*RequiredError*

#### snapshotsPut(requestParameters, options)

Modify a Snapshot
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[SnapshotApiSnapshotsPutRequest](global.md#SnapshotApiSnapshotsPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/snapshot-api.ts](api/snapshot-api.ts), [line 600](api/snapshot-api.ts#L600)

##### Throws:

*RequiredError*
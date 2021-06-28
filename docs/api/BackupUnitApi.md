# Class: BackupUnitApi

## BackupUnitApi

#### new BackupUnitApi()

BackupUnitApi - object-oriented interface

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 735](/../../api/backup-unit-api.ts#L735)

---------------

### Extends

- BaseAPI

### Methods

#### backupunitsDelete(requestParameters, options)

Delete a Backup Unit
NOTE: Running through the deletion process will delete: - the backup plans inside the Backup Unit. - all backups associated with the Backup Unit. - the backup user and finally also the unit

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsDeleteRequest](global.md#BackupUnitApiBackupunitsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 750](/../../api/backup-unit-api.ts#L750)

##### Throws:

*RequiredError*

#### backupunitsFindById(requestParameters, options)

Returns the specified backup Unit
You can retrieve the details of an specific backup unit.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsFindByIdRequest](global.md#BackupUnitApiBackupunitsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 761](/../../api/backup-unit-api.ts#L761)

##### Throws:

*RequiredError*

#### backupunitsGet(requestParameters, options)

List Backup Units
You can retrieve a complete list of backup Units that you have access to.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsGetRequest](global.md#BackupUnitApiBackupunitsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 772](/../../api/backup-unit-api.ts#L772)

##### Throws:

*RequiredError*

#### backupunitsPatch(requestParameters, options)

Partially modify a Backup Unit
You can use update a backup Unit properties

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsPatchRequest](global.md#BackupUnitApiBackupunitsPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 783](/../../api/backup-unit-api.ts#L783)

##### Throws:

*RequiredError*

#### backupunitsPost(requestParameters, options)

Create a Backup Unit
Create a Backup Unit. A Backup Unit is considered a resource like a virtual datacenter, IP Block, snapshot, etc. It shall be shareable via groups inside our User Management Feature

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsPostRequest](global.md#BackupUnitApiBackupunitsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 794](/../../api/backup-unit-api.ts#L794)

##### Throws:

*RequiredError*

#### backupunitsPut(requestParameters, options)

Modify a Backup Unit
You can use update a backup Unit properties

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsPutRequest](global.md#BackupUnitApiBackupunitsPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 805](/../../api/backup-unit-api.ts#L805)

##### Throws:

*RequiredError*

#### backupunitsSsourlGet(requestParameters, options)

Returns a single signon URL for the specified backup Unit.
Returns a single signon URL for the specified backup Unit.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[BackupUnitApiBackupunitsSsourlGetRequest](global.md#BackupUnitApiBackupunitsSsourlGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/backup-unit-api.ts](/../../api/backup-unit-api.ts), [line 816](/../../api/backup-unit-api.ts#L816)

##### Throws:

*RequiredError*
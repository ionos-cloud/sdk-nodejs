# Class: ServerApi

## ServerApi

#### new ServerApi()

ServerApi - object-oriented interface

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2077](/../../api/server-api.ts#L2077)

---------------

### Extends

- BaseAPI

### Methods

#### datacentersServersCdromsDelete(requestParameters, options)

Detach a CD-ROM
This will detach a CD-ROM from the server

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersCdromsDeleteRequest](global.md#ServerApiDatacentersServersCdromsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2092](/../../api/server-api.ts#L2092)

##### Throws:

*RequiredError*

#### datacentersServersCdromsFindById(requestParameters, options)

Retrieve an attached CD-ROM
You can retrieve a specific CD-ROM attached to the server

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersCdromsFindByIdRequest](global.md#ServerApiDatacentersServersCdromsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2103](/../../api/server-api.ts#L2103)

##### Throws:

*RequiredError*

#### datacentersServersCdromsGet(requestParameters, options)

List attached CD-ROMs
You can retrieve a list of CD-ROMs attached to the server.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersCdromsGetRequest](global.md#ServerApiDatacentersServersCdromsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2114](/../../api/server-api.ts#L2114)

##### Throws:

*RequiredError*

#### datacentersServersCdromsPost(requestParameters, options)

Attach a CD-ROM
You can attach a CD-ROM to an existing server. You can attach up to 2 CD-ROMs to one server.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersCdromsPostRequest](global.md#ServerApiDatacentersServersCdromsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2125](/../../api/server-api.ts#L2125)

##### Throws:

*RequiredError*

#### datacentersServersDelete(requestParameters, options)

Delete a Server
This will remove a server from your datacenter; however, it will not remove the storage volumes attached to the server. You will need to make a separate API call to perform that action

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersDeleteRequest](global.md#ServerApiDatacentersServersDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2136](/../../api/server-api.ts#L2136)

##### Throws:

*RequiredError*

#### datacentersServersFindById(requestParameters, options)

Retrieve a Server
Returns information about a server such as its configuration, provisioning status, etc.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersFindByIdRequest](global.md#ServerApiDatacentersServersFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2147](/../../api/server-api.ts#L2147)

##### Throws:

*RequiredError*

#### datacentersServersGet(requestParameters, options)

List Servers
You can retrieve a list of servers within a datacenter

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersGetRequest](global.md#ServerApiDatacentersServersGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2158](/../../api/server-api.ts#L2158)

##### Throws:

*RequiredError*

#### datacentersServersPatch(requestParameters, options)

Partially modify a Server
You can use update attributes of a server

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersPatchRequest](global.md#ServerApiDatacentersServersPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2169](/../../api/server-api.ts#L2169)

##### Throws:

*RequiredError*

#### datacentersServersPost(requestParameters, options)

Create a Server
Creates a server within an existing datacenter. You can configure the boot volume and connect the server to an existing LAN.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersPostRequest](global.md#ServerApiDatacentersServersPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2180](/../../api/server-api.ts#L2180)

##### Throws:

*RequiredError*

#### datacentersServersPut(requestParameters, options)

Modify a Server
Allows to modify the attributes of a Server. From v5 onwards \'allowReboot\' attribute will no longer be available. For certain server property change it was earlier forced to be provided. Now this behaviour is implicit and backend will do this automatically e.g. in earlier versions, when CPU family changes, the \'allowReboot\' property was required to be set to true which will no longer be the case and the server will be rebooted automatically

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersPutRequest](global.md#ServerApiDatacentersServersPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2191](/../../api/server-api.ts#L2191)

##### Throws:

*RequiredError*

#### datacentersServersRebootPost(requestParameters, options)

Reboot a Server
This will force a hard reboot of the server. Do not use this method if you want to gracefully reboot the machine. This is the equivalent of powering off the machine and turning it back on.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersRebootPostRequest](global.md#ServerApiDatacentersServersRebootPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2202](/../../api/server-api.ts#L2202)

##### Throws:

*RequiredError*

#### datacentersServersStartPost(requestParameters, options)

Start a Server
This will start a server. If the server\'s public IP was deallocated then a new IP will be assigned

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersStartPostRequest](global.md#ServerApiDatacentersServersStartPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2213](/../../api/server-api.ts#L2213)

##### Throws:

*RequiredError*

#### datacentersServersStopPost(requestParameters, options)

Stop a Server
This will stop a server. The machine will be forcefully powered off, billing will cease, and the public IP, if one is allocated, will be deallocated. The operation is not supported for Cube servers.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersStopPostRequest](global.md#ServerApiDatacentersServersStopPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2224](/../../api/server-api.ts#L2224)

##### Throws:

*RequiredError*

#### datacentersServersUpgradePost(requestParameters, options)

Upgrade a Server
This will upgrade the version of the server, if needed. To verify if there is an upgrade available for a server, call \'/datacenters/{datacenterId}/servers?upgradeNeeded=true\'

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersUpgradePostRequest](global.md#ServerApiDatacentersServersUpgradePostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2235](/../../api/server-api.ts#L2235)

##### Throws:

*RequiredError*

#### datacentersServersVolumesDelete(requestParameters, options)

Detach a volume
This will detach the volume from the server. This will not delete the volume from your datacenter. You will need to make a separate request to perform a deletion

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersVolumesDeleteRequest](global.md#ServerApiDatacentersServersVolumesDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2246](/../../api/server-api.ts#L2246)

##### Throws:

*RequiredError*

#### datacentersServersVolumesFindById(requestParameters, options)

Retrieve an attached volume
This will retrieve the properties of an attached volume.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersVolumesFindByIdRequest](global.md#ServerApiDatacentersServersVolumesFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2257](/../../api/server-api.ts#L2257)

##### Throws:

*RequiredError*

#### datacentersServersVolumesGet(requestParameters, options)

List Attached Volumes
You can retrieve a list of volumes attached to the server

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersVolumesGetRequest](global.md#ServerApiDatacentersServersVolumesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2268](/../../api/server-api.ts#L2268)

##### Throws:

*RequiredError*

#### datacentersServersVolumesPost(requestParameters, options)

Attach a volume
This will attach a pre-existing storage volume to the server. It is also possible to create and attach a volume in one step just by providing a new volume description as payload. Combine count of Nics and volumes attached to the server should not exceed size 24.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ServerApiDatacentersServersVolumesPostRequest](global.md#ServerApiDatacentersServersVolumesPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/server-api.ts](/../../api/server-api.ts), [line 2279](/../../api/server-api.ts#L2279)

##### Throws:

*RequiredError*
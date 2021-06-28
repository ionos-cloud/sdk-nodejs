# Class: LanApi

## LanApi

#### new LanApi()

LanApi - object-oriented interface

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1071](/../../api/lan-api.ts#L1071)

---------------

### Extends

- BaseAPI

### Methods

#### datacentersLansDelete(requestParameters, options)

Delete a Lan.
Removes the specific Lan

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansDeleteRequest](global.md#LanApiDatacentersLansDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1086](/../../api/lan-api.ts#L1086)

##### Throws:

*RequiredError*

#### datacentersLansFindById(requestParameters, options)

Retrieve a Lan
Retrieves the attributes of a given LAN

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansFindByIdRequest](global.md#LanApiDatacentersLansFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1097](/../../api/lan-api.ts#L1097)

##### Throws:

*RequiredError*

#### datacentersLansGet(requestParameters, options)

List Lans
Retrieve a list of LANs within the datacenter

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansGetRequest](global.md#LanApiDatacentersLansGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1108](/../../api/lan-api.ts#L1108)

##### Throws:

*RequiredError*

#### datacentersLansNicsFindById(requestParameters, options)

Retrieve a nic attached to lan
This will retrieve the properties of an attached nic.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansNicsFindByIdRequest](global.md#LanApiDatacentersLansNicsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1119](/../../api/lan-api.ts#L1119)

##### Throws:

*RequiredError*

#### datacentersLansNicsGet(requestParameters, options)

List Lan Members
You can retrieve a list of nics attached to a lan

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansNicsGetRequest](global.md#LanApiDatacentersLansNicsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1130](/../../api/lan-api.ts#L1130)

##### Throws:

*RequiredError*

#### datacentersLansNicsPost(requestParameters, options)

Attach a nic
This will attach a pre-existing nic to a lan.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansNicsPostRequest](global.md#LanApiDatacentersLansNicsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1141](/../../api/lan-api.ts#L1141)

##### Throws:

*RequiredError*

#### datacentersLansPatch(requestParameters, options)

Partially modify a Lan
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansPatchRequest](global.md#LanApiDatacentersLansPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1152](/../../api/lan-api.ts#L1152)

##### Throws:

*RequiredError*

#### datacentersLansPost(requestParameters, options)

Create a Lan
Creates a LAN within the datacenter

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansPostRequest](global.md#LanApiDatacentersLansPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1163](/../../api/lan-api.ts#L1163)

##### Throws:

*RequiredError*

#### datacentersLansPut(requestParameters, options)

Modify a Lan
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LanApiDatacentersLansPutRequest](global.md#LanApiDatacentersLansPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/lan-api.ts](/../../api/lan-api.ts), [line 1174](/../../api/lan-api.ts#L1174)

##### Throws:

*RequiredError*
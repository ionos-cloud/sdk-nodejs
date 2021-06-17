# Class: IPBlocksApi

## IPBlocksApi

#### new IPBlocksApi()

IPBlocksApi - object-oriented interface

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 646](api/ipblocks-api.ts#L646)

---------------

### Extends

- BaseAPI

### Methods

#### ipblocksDelete(requestParameters, options)

Delete IP Block
Removes the specific IP Block

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[IPBlocksApiIpblocksDeleteRequest](global.md#IPBlocksApiIpblocksDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 661](api/ipblocks-api.ts#L661)

##### Throws:

*RequiredError*

#### ipblocksFindById(requestParameters, options)

Retrieve an IP Block
Retrieves the attributes of a given IP Block.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[IPBlocksApiIpblocksFindByIdRequest](global.md#IPBlocksApiIpblocksFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 672](api/ipblocks-api.ts#L672)

##### Throws:

*RequiredError*

#### ipblocksGet(requestParameters, options)

List IP Blocks
Retrieve a list of all reserved IP Blocks

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[IPBlocksApiIpblocksGetRequest](global.md#IPBlocksApiIpblocksGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 683](api/ipblocks-api.ts#L683)

##### Throws:

*RequiredError*

#### ipblocksPatch(requestParameters, options)

Partially modify IP Block
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[IPBlocksApiIpblocksPatchRequest](global.md#IPBlocksApiIpblocksPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 694](api/ipblocks-api.ts#L694)

##### Throws:

*RequiredError*

#### ipblocksPost(requestParameters, options)

Reserve IP Block
This will reserve a new IP Block

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[IPBlocksApiIpblocksPostRequest](global.md#IPBlocksApiIpblocksPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 705](api/ipblocks-api.ts#L705)

##### Throws:

*RequiredError*

#### ipblocksPut(requestParameters, options)

Modify IP Block
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[IPBlocksApiIpblocksPutRequest](global.md#IPBlocksApiIpblocksPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/ipblocks-api.ts](api/ipblocks-api.ts), [line 716](api/ipblocks-api.ts#L716)

##### Throws:

*RequiredError*
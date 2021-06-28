# Class: PrivateCrossConnectApi

## PrivateCrossConnectApi

#### new PrivateCrossConnectApi()

PrivateCrossConnectApi - object-oriented interface

*Source:*
[/../../api/private-cross-connect-api.ts](/../..//../../api/private-cross-connect-api.ts), [line 533](/../..//../../api/private-cross-connect-api.ts#L533)

---------------

### Extends

- BaseAPI

### Methods

#### pccsDelete(requestParameters, options)

Delete a Private Cross-Connect
Delete a private cross-connect if no datacenters are joined to the given PCC

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[PrivateCrossConnectApiPccsDeleteRequest](global.md#PrivateCrossConnectApiPccsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/private-cross-connect-api.ts](/../../api/private-cross-connect-api.ts), [line 548](/../../api/private-cross-connect-api.ts#L548)

##### Throws:

*RequiredError*

#### pccsFindById(requestParameters, options)

Retrieve a Private Cross-Connect
You can retrieve a private cross-connect by using the resource\'s ID. This value can be found in the response body when a private cross-connect is created or when you GET a list of private cross-connects.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[PrivateCrossConnectApiPccsFindByIdRequest](global.md#PrivateCrossConnectApiPccsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/private-cross-connect-api.ts](/../../api/private-cross-connect-api.ts), [line 559](/../../api/private-cross-connect-api.ts#L559)

##### Throws:

*RequiredError*

#### pccsGet(requestParameters, options)

List Private Cross-Connects
You can retrieve a complete list of private cross-connects provisioned under your account

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[PrivateCrossConnectApiPccsGetRequest](global.md#PrivateCrossConnectApiPccsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/private-cross-connect-api.ts](/../../api/private-cross-connect-api.ts), [line 570](/../../api/private-cross-connect-api.ts#L570)

##### Throws:

*RequiredError*

#### pccsPatch(requestParameters, options)

Partially modify a private cross-connect
You can use update private cross-connect to re-name or update its description

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[PrivateCrossConnectApiPccsPatchRequest](global.md#PrivateCrossConnectApiPccsPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/private-cross-connect-api.ts](/../../api/private-cross-connect-api.ts), [line 581](/../../api/private-cross-connect-api.ts#L581)

##### Throws:

*RequiredError*

#### pccsPost(requestParameters, options)

Create a Private Cross-Connect
You can use this POST method to create a private cross-connect

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[PrivateCrossConnectApiPccsPostRequest](global.md#PrivateCrossConnectApiPccsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/private-cross-connect-api.ts](/../../api/private-cross-connect-api.ts), [line 592](/../../api/private-cross-connect-api.ts#L592)

##### Throws:

*RequiredError*

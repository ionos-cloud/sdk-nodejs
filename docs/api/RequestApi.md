# Class: RequestApi

## RequestApi

#### new RequestApi()

RequestApi - object-oriented interface

*Source:*
[/../../api/request-api.ts](/../../api/request-api.ts), [line 432](/../../api/request-api.ts#L432)

---------------

### Extends

- BaseAPI

### Methods

#### requestsFindById(requestParameters, options)

Retrieve a Request
Retrieves the attributes of a given request.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[RequestApiRequestsFindByIdRequest](global.md#RequestApiRequestsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/request-api.ts](/../../api/request-api.ts), [line 447](/../../api/request-api.ts#L447)

##### Throws:

*RequiredError*

#### requestsGet(requestParameters, options)

List Requests
Retrieve a list of API requests.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[RequestApiRequestsGetRequest](global.md#RequestApiRequestsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/request-api.ts](/../../api/request-api.ts), [line 458](/../../api/request-api.ts#L458)

##### Throws:

*RequiredError*

#### requestsStatusGet(requestParameters, options)

Retrieve Request Status
Retrieves the status of a given request.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[RequestApiRequestsStatusGetRequest](global.md#RequestApiRequestsStatusGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/request-api.ts](/../../api/request-api.ts), [line 469](/../../api/request-api.ts#L469)

##### Throws:

*RequiredError*
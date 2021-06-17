# Class: DataCenterApi

## DataCenterApi

#### new DataCenterApi()

DataCenterApi - object-oriented interface

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 664](api/data-center-api.ts#L664)

---------------

### Extends

- BaseAPI

### Methods

#### datacentersDelete(requestParameters, options)

Delete a Data Center
Will remove all objects within the datacenter and remove the datacenter object itself, too. This is a highly destructive method which should be used with caution

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[DataCenterApiDatacentersDeleteRequest](global.md#DataCenterApiDatacentersDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 679](api/data-center-api.ts#L679)

##### Throws:

*RequiredError*

#### datacentersFindById(requestParameters, options)

Retrieve a Data Center
You can retrieve a data center by using the resource\'s ID. This value can be found in the response body when a datacenter is created or when you GET a list of datacenters.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[DataCenterApiDatacentersFindByIdRequest](global.md#DataCenterApiDatacentersFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 690](api/data-center-api.ts#L690)

##### Throws:

*RequiredError*

#### datacentersGet(requestParameters, options)

List Data Centers under your account
You can retrieve a complete list of data centers provisioned under your account

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[DataCenterApiDatacentersGetRequest](global.md#DataCenterApiDatacentersGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 701](api/data-center-api.ts#L701)

##### Throws:

*RequiredError*

#### datacentersPatch(requestParameters, options)

Partially modify a Data Center
You can use update datacenter to re-name the datacenter or update its description

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[DataCenterApiDatacentersPatchRequest](global.md#DataCenterApiDatacentersPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 712](api/data-center-api.ts#L712)

##### Throws:

*RequiredError*

#### datacentersPost(requestParameters, options)

Create a Data Center
Virtual data centers are the foundation of the platform. They act as logical containers for all other objects you will be creating, e.g. servers. You can provision as many data centers as you want. Datacenters have their own private network and are logically segmented from each other to create isolation. You can use this POST method to create a simple datacenter or to create a datacenter with multiple objects under it such as servers and storage volumes.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[DataCenterApiDatacentersPostRequest](global.md#DataCenterApiDatacentersPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 723](api/data-center-api.ts#L723)

##### Throws:

*RequiredError*

#### datacentersPut(requestParameters, options)

Modify a Data Center
You can use update datacenter to re-name the datacenter or update its description

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[DataCenterApiDatacentersPutRequest](global.md#DataCenterApiDatacentersPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/data-center-api.ts](api/data-center-api.ts), [line 734](api/data-center-api.ts#L734)

##### Throws:

*RequiredError*
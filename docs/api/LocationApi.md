# Class: LocationApi

## LocationApi

#### new LocationApi()

LocationApi - object-oriented interface

*Source:*
[/../../api/location-api.ts](/../../api/location-api.ts), [line 323](/../../api/location-api.ts#L323)

---------------

### Extends

- BaseAPI

### Methods

#### locationsFindByRegionId(requestParameters, options)

List Locations within a region
Retrieve a list of Locations within a world\'s region

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LocationApiLocationsFindByRegionIdRequest](global.md#LocationApiLocationsFindByRegionIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/location-api.ts](/../../api/location-api.ts), [line 338](/../../api/location-api.ts#L338)

##### Throws:

*RequiredError*

#### locationsFindByRegionIdAndId(requestParameters, options)

Retrieve a Location
Retrieves the attributes of a given location

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LocationApiLocationsFindByRegionIdAndIdRequest](global.md#LocationApiLocationsFindByRegionIdAndIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/location-api.ts](/../../api/location-api.ts), [line 349](/../../api/location-api.ts#L349)

##### Throws:

*RequiredError*

#### locationsGet(requestParameters, options)

List Locations
Retrieve a list of Locations. This list represents where you can provision your virtual data centers

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LocationApiLocationsGetRequest](global.md#LocationApiLocationsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/location-api.ts](/../../api/location-api.ts), [line 360](/../../api/location-api.ts#L360)

##### Throws:

*RequiredError*
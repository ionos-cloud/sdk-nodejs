# LocationApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**locationsFindByRegionId**](LocationApi.md#locationsfindbyregionid) | **GET** /locations/{regionId} | List Locations within a region |
| [**locationsFindByRegionIdAndId**](LocationApi.md#locationsfindbyregionidandid) | **GET** /locations/{regionId}/{locationId} | Retrieve a Location |
| [**locationsGet**](LocationApi.md#locationsget) | **GET** /locations | List Locations |


# **locationsFindByRegionId**
> Locations locationsFindByRegionId(regionId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Locations within a region

Retrieve a list of Locations within a world\'s region

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LocationApi(config)
# List Locations within a region
api_instance.locationsFindByRegionId(regionId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LocationApi(config)
# List Locations within a region
api_instance.locationsFindByRegionId(regionId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **regionId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Locations**](../models/Locations.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **locationsFindByRegionIdAndId**
> Location locationsFindByRegionIdAndId(regionId, locationId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Location

Retrieves the attributes of a given location

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LocationApi(config)
# Retrieve a Location
api_instance.locationsFindByRegionIdAndId(regionId, locationId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LocationApi(config)
# Retrieve a Location
api_instance.locationsFindByRegionIdAndId(regionId, locationId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **regionId** | **string**|  | [default to undefined] |
| **locationId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Location**](../models/Location.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **locationsGet**
> Locations locationsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Locations

Retrieve a list of Locations. This list represents where you can provision your virtual data centers

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LocationApi(config)
# List Locations
api_instance.locationsGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LocationApi(config)
# List Locations
api_instance.locationsGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Locations**](../models/Locations.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


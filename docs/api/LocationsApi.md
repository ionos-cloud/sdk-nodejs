# LocationsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**locationsFindByRegionId**](LocationsApi.md#locationsfindbyregionid) | **GET** /locations/{regionId} | Get Locations within a Region |
| [**locationsFindByRegionIdAndId**](LocationsApi.md#locationsfindbyregionidandid) | **GET** /locations/{regionId}/{locationId} | Get Location by ID |
| [**locationsGet**](LocationsApi.md#locationsget) | **GET** /locations | Get Locations |


## locationsFindByRegionId

> <Locations> locationsFindByRegionId(regionId, opts)

Get Locations within a Region

Retrieves the available locations in a region specified by its ID. The \'regionId\' consists of the two character identifier of the region (country), e.g., \'de\'.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LocationsApi(config);
// Get Locations within a Region
api_instance
  .locationsFindByRegionId({
    regionId: regionId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **regionId** | **string** | The unique ID of the region. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Locations**](../models/Locations.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## locationsFindByRegionIdAndId

> <Location> locationsFindByRegionIdAndId(regionId, locationId, opts)

Get Location by ID

Retrieves the information about the location specified by its ID. The \'locationId\' consists of the three-digit identifier of the city according to the IATA code.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LocationsApi(config);
// Get Location by ID
api_instance
  .locationsFindByRegionIdAndId({
    regionId: regionId_example,
    locationId: locationId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **regionId** | **string** | The unique ID of the region. | [default to undefined] |
| **locationId** | **string** | The unique ID of the location. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Location**](../models/Location.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## locationsGet

> <Locations> locationsGet(opts)

Get Locations

Retrieves the available physical locations where you can deploy cloud resources in a VDC.    A location is identified by a combination of the following characters:    * a two-character **regionId**, which represents a country (example: \'de\')    * a three-character **locationId**, which represents a city. The \'locationId\' is typically based on the IATA code of the city\'s airport (example: \'txl\').    >Note that \'locations\' are read-only and cannot be changed.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LocationsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Get Locations
api_instance
  .locationsGet({
    pretty: true,
    depth: 56,
    xContractNumber: 56
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Locations**](../models/Locations.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


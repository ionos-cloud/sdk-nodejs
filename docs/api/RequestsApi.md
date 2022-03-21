# RequestsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**requestsFindById**](RequestsApi.md#requestsfindbyid) | **GET** /requests/{requestId} | Retrieve requests |
| [**requestsGet**](RequestsApi.md#requestsget) | **GET** /requests | List requests |
| [**requestsStatusGet**](RequestsApi.md#requestsstatusget) | **GET** /requests/{requestId}/status | Retrieve request status |


## requestsFindById

> <Request> requestsFindById(requestId, opts)

Retrieve requests

Retrieve the properties of the specified request.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RequestsApi(config);
// Retrieve requests
api_instance
  .requestsFindById({
    requestId: requestId_example,
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
| **requestId** | **string** | The unique ID of the request. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Request**](../models/Request.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestsGet

> <Requests> requestsGet(opts)

List requests

List all API requests.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RequestsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List requests
api_instance
  .requestsGet({
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    filterStatus: filterStatus_example,
    filterCreatedAfter: filterCreatedAfter_example,
    filterCreatedBefore: filterCreatedBefore_example,
    filterCreatedDate: filterCreatedDate_example,
    filterCreatedBy: filterCreatedBy_example,
    filterEtag: filterEtag_example,
    filterRequestStatus: filterRequestStatus_example,
    filterMethod: filterMethod_example,
    filterHeaders: filterHeaders_example,
    filterBody: filterBody_example,
    filterUrl: filterUrl_example,
    offset: 56,
    limit: 56
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
| **filterStatus** | **string** | Filter the list by request status [QUEUED, RUNNING, DONE, FAILED]. Filter is not affected by the depth query parameter. | [optional][default to undefined] |
| **filterCreatedAfter** | **string** | Filter the list to only include the requests created after the date, specified in the yyyy-MM-dd HH:mm:ss format. Filter is not affected by the depth query parameter. | [optional][default to undefined] |
| **filterCreatedBefore** | **string** | Filter the list to only include the requests created before the date, specified in the yyyy-MM-dd HH:mm:ss format. Filter is not affected by the depth query parameter. | [optional][default to undefined] |
| **filterCreatedDate** | **string** | Filter the list to only include the requests that contain the createdDate, specified in the yyyy-MM-dd HH:mm:ss format. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero. | [optional][default to undefined] |
| **filterCreatedBy** | **string** | Filter the list to only include the requests that contain the createdBy, specified in the yyyy-MM-dd HH:mm:ss format. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **filterEtag** | **string** | Filter the list to only include the requests that contain the specified etag. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **filterRequestStatus** | **string** | Filter the list to only include the requests that contain the specified requestStatus. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **filterMethod** | **string** | Filter the list to only include the requests that contain the specified method. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **filterHeaders** | **string** | Filter the list to only include the requests that contain the specified headers. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **filterBody** | **string** | Filter the list to only include the requests that contain the specified body. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **filterUrl** | **string** | Filter the list to only include the requests that contain the specified URL. The value is not case-sensitive, and the filter requires that the depth query parameter value is greater than zero.  | [optional][default to undefined] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**Requests**](../models/Requests.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestsStatusGet

> <RequestStatus> requestsStatusGet(requestId, opts)

Retrieve request status

Retrieve the status of the specified request.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RequestsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve request status
api_instance
  .requestsStatusGet({
    requestId: requestId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56, 
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
| **requestId** | **string** | The unique ID of the request. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**RequestStatus**](../models/RequestStatus.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


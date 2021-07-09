# RequestApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**requestsFindById**](RequestApi.md#requestsFindById) | **GET** /requests/{requestId} | Retrieve a Request |
| [**requestsGet**](RequestApi.md#requestsGet) | **GET** /requests | List Requests |
| [**requestsStatusGet**](RequestApi.md#requestsStatusGet) | **GET** /requests/{requestId}/status | Retrieve Request Status |


## requestsFindById

> <Request> requestsFindById(requestId, opts)

Retrieve a Request

Retrieves the attributes of a given request.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RequestApi(config);
// Retrieve a Request
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
| **requestId** | **string** |  | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**Request**](models/Request.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestsGet

> <Requests> requestsGet(opts)

List Requests

Retrieve a list of API requests.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RequestApi(config);
// List Requests
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
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |
| **filterStatus** | **string** | Request filter to fetch all requests based on a particular status [QUEUED, RUNNING, DONE, FAILED]. It doesn\&#39;t depend on depth query parameter | [optional][default to undefined] |
| **filterCreatedAfter** | **string** | Request filter to fetch all requests created after the specified date. It doesn\&#39;t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00 | [optional][default to undefined] |
| **filterCreatedBefore** | **string** | Request filter to fetch all requests created before the specified date. It doesn\&#39;t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00 | [optional][default to undefined] |
| **filterCreatedDate** | **string** | Response filter to select and display only the requests that contains the specified createdDate. The value is case insensitive and it  depends on depth query parameter that should have a value greater than 0. Date format e.g. 2020-11-16T17:42:59Z | [optional][default to undefined] |
| **filterCreatedBy** | **string** | Response filter to select and display only the requests that contains the specified createdBy. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **filterEtag** | **string** | Response filter to select and display only the requests that contains the specified etag. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **filterRequestStatus** | **string** | Response filter to select and display only the requests that contains the specified requestStatus. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **filterMethod** | **string** | Response filter to select and display only the requests that contains the specified method. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **filterHeaders** | **string** | Response filter to select and display only the requests that contains the specified headers. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **filterBody** | **string** | Response filter to select and display only the requests that contains the specified body. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **filterUrl** | **string** | Response filter to select and display only the requests that contains the specified url. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional][default to undefined] |
| **offset** | **number** | the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional][default to 0] |
| **limit** | **number** | the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional][default to 1000] |

### Return type

[**Requests**](models/Requests.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestsStatusGet

> <RequestStatus> requestsStatusGet(requestId, opts)

Retrieve Request Status

Retrieves the status of a given request.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RequestApi(config);
// Retrieve Request Status
api_instance
  .requestsStatusGet({
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
| **requestId** | **string** |  | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**RequestStatus**](models/RequestStatus.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# RequestApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**requestsFindById**](RequestApi.md#requestsFindById) | **GET** /requests/{requestId} | Retrieve a Request |
| [**requestsGet**](RequestApi.md#requestsGet) | **GET** /requests | List Requests |
| [**requestsStatusGet**](RequestApi.md#requestsStatusGet) | **GET** /requests/{requestId}/status | Retrieve Request Status |


# **requestsFindById**
> Request requestsFindById(requestId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Request

Retrieves the attributes of a given request.

### Example

* Basic Authentication (Basic Authentication):
```ruby
require 'time'
require ''
# setup authorization
.configure do |config|
  # Configure HTTP basic authorization: Basic Authentication
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'

  # Configure API key authorization: Token Authentication
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = ::RequestApi.new
requestId =  # string | 
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Request
  result = api_instance.requestsFindById(requestId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling RequestApi->requestsFindById: #{e}"
end
```

* Api Key Authentication (Token Authentication):
```ruby
require 'time'
require ''
# setup authorization
.configure do |config|
  # Configure HTTP basic authorization: Basic Authentication
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'

  # Configure API key authorization: Token Authentication
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = ::RequestApi.new
requestId =  # string | 
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Request
  result = api_instance.requestsFindById(requestId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling RequestApi->requestsFindById: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **requestId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Request**](Request.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **requestsGet**
> Requests requestsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber, filterStatus=filterStatus, filterCreatedAfter=filterCreatedAfter, filterCreatedBefore=filterCreatedBefore, filterCreatedDate=filterCreatedDate, filterCreatedBy=filterCreatedBy, filterEtag=filterEtag, filterRequestStatus=filterRequestStatus, filterMethod=filterMethod, filterHeaders=filterHeaders, filterBody=filterBody, filterUrl=filterUrl, offset=offset, limit=limit)

List Requests

Retrieve a list of API requests.

### Example

* Basic Authentication (Basic Authentication):
```ruby
require 'time'
require ''
# setup authorization
.configure do |config|
  # Configure HTTP basic authorization: Basic Authentication
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'

  # Configure API key authorization: Token Authentication
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = ::RequestApi.new
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  filterStatus: , # string | Request filter to fetch all requests based on a particular status [QUEUED, RUNNING, DONE, FAILED]. It doesn\'t depend on depth query parameter
  filterCreatedAfter: , # string | Request filter to fetch all requests created after the specified date. It doesn\'t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00
  filterCreatedBefore: , # string | Request filter to fetch all requests created before the specified date. It doesn\'t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00
  filterCreatedDate: , # string | Response filter to select and display only the requests that contains the specified createdDate. The value is case insensitive and it  depends on depth query parameter that should have a value greater than 0. Date format e.g. 2020-11-16T17:42:59Z
  filterCreatedBy: , # string | Response filter to select and display only the requests that contains the specified createdBy. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterEtag: , # string | Response filter to select and display only the requests that contains the specified etag. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterRequestStatus: , # string | Response filter to select and display only the requests that contains the specified requestStatus. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterMethod: , # string | Response filter to select and display only the requests that contains the specified method. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterHeaders: , # string | Response filter to select and display only the requests that contains the specified headers. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterBody: , # string | Response filter to select and display only the requests that contains the specified body. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterUrl: , # string | Response filter to select and display only the requests that contains the specified url. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Requests
  result = api_instance.requestsGet(opts)
  p result
rescue ::ApiError => e
  puts "Error when calling RequestApi->requestsGet: #{e}"
end
```

* Api Key Authentication (Token Authentication):
```ruby
require 'time'
require ''
# setup authorization
.configure do |config|
  # Configure HTTP basic authorization: Basic Authentication
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'

  # Configure API key authorization: Token Authentication
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = ::RequestApi.new
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  filterStatus: , # string | Request filter to fetch all requests based on a particular status [QUEUED, RUNNING, DONE, FAILED]. It doesn\'t depend on depth query parameter
  filterCreatedAfter: , # string | Request filter to fetch all requests created after the specified date. It doesn\'t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00
  filterCreatedBefore: , # string | Request filter to fetch all requests created before the specified date. It doesn\'t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00
  filterCreatedDate: , # string | Response filter to select and display only the requests that contains the specified createdDate. The value is case insensitive and it  depends on depth query parameter that should have a value greater than 0. Date format e.g. 2020-11-16T17:42:59Z
  filterCreatedBy: , # string | Response filter to select and display only the requests that contains the specified createdBy. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterEtag: , # string | Response filter to select and display only the requests that contains the specified etag. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterRequestStatus: , # string | Response filter to select and display only the requests that contains the specified requestStatus. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterMethod: , # string | Response filter to select and display only the requests that contains the specified method. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterHeaders: , # string | Response filter to select and display only the requests that contains the specified headers. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterBody: , # string | Response filter to select and display only the requests that contains the specified body. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  filterUrl: , # string | Response filter to select and display only the requests that contains the specified url. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0. 
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Requests
  result = api_instance.requestsGet(opts)
  p result
rescue ::ApiError => e
  puts "Error when calling RequestApi->requestsGet: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **filterStatus** | **string**| Request filter to fetch all requests based on a particular status [QUEUED, RUNNING, DONE, FAILED]. It doesn\&#39;t depend on depth query parameter | [optional] [default to undefined] |
| **filterCreatedAfter** | **string**| Request filter to fetch all requests created after the specified date. It doesn\&#39;t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00 | [optional] [default to undefined] |
| **filterCreatedBefore** | **string**| Request filter to fetch all requests created before the specified date. It doesn\&#39;t depend on depth query parameter. Date format e.g. 2021-01-01+00:00:00 | [optional] [default to undefined] |
| **filterCreatedDate** | **string**| Response filter to select and display only the requests that contains the specified createdDate. The value is case insensitive and it  depends on depth query parameter that should have a value greater than 0. Date format e.g. 2020-11-16T17:42:59Z | [optional] [default to undefined] |
| **filterCreatedBy** | **string**| Response filter to select and display only the requests that contains the specified createdBy. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **filterEtag** | **string**| Response filter to select and display only the requests that contains the specified etag. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **filterRequestStatus** | **string**| Response filter to select and display only the requests that contains the specified requestStatus. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **filterMethod** | **string**| Response filter to select and display only the requests that contains the specified method. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **filterHeaders** | **string**| Response filter to select and display only the requests that contains the specified headers. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **filterBody** | **string**| Response filter to select and display only the requests that contains the specified body. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **filterUrl** | **string**| Response filter to select and display only the requests that contains the specified url. The value is case insensitive and it depends on depth query parameter that should have a value greater than 0.  | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Requests**](Requests.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **requestsStatusGet**
> RequestStatus requestsStatusGet(requestId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve Request Status

Retrieves the status of a given request.

### Example

* Basic Authentication (Basic Authentication):
```ruby
require 'time'
require ''
# setup authorization
.configure do |config|
  # Configure HTTP basic authorization: Basic Authentication
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'

  # Configure API key authorization: Token Authentication
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = ::RequestApi.new
requestId =  # string | 
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve Request Status
  result = api_instance.requestsStatusGet(requestId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling RequestApi->requestsStatusGet: #{e}"
end
```

* Api Key Authentication (Token Authentication):
```ruby
require 'time'
require ''
# setup authorization
.configure do |config|
  # Configure HTTP basic authorization: Basic Authentication
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'

  # Configure API key authorization: Token Authentication
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = ::RequestApi.new
requestId =  # string | 
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve Request Status
  result = api_instance.requestsStatusGet(requestId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling RequestApi->requestsStatusGet: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **requestId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**RequestStatus**](RequestStatus.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


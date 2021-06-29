# DataCenterApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**datacentersDelete**](DataCenterApi.md#datacentersDelete) | **DELETE** /datacenters/{datacenterId} | Delete a Data Center |
| [**datacentersFindById**](DataCenterApi.md#datacentersFindById) | **GET** /datacenters/{datacenterId} | Retrieve a Data Center |
| [**datacentersGet**](DataCenterApi.md#datacentersGet) | **GET** /datacenters | List Data Centers under your account |
| [**datacentersPatch**](DataCenterApi.md#datacentersPatch) | **PATCH** /datacenters/{datacenterId} | Partially modify a Data Center |
| [**datacentersPost**](DataCenterApi.md#datacentersPost) | **POST** /datacenters | Create a Data Center |
| [**datacentersPut**](DataCenterApi.md#datacentersPut) | **PUT** /datacenters/{datacenterId} | Modify a Data Center |


# **datacentersDelete**
> object datacentersDelete(datacenterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Data Center

Will remove all objects within the datacenter and remove the datacenter object itself, too. This is a highly destructive method which should be used with caution

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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Data Center
  result = api_instance.datacentersDelete(datacenterId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersDelete: #{e}"
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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Data Center
  result = api_instance.datacentersDelete(datacenterId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersDelete: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersFindById**
> Datacenter datacentersFindById(datacenterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Data Center

You can retrieve a data center by using the resource\'s ID. This value can be found in the response body when a datacenter is created or when you GET a list of datacenters.

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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Data Center
  result = api_instance.datacentersFindById(datacenterId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersFindById: #{e}"
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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Data Center
  result = api_instance.datacentersFindById(datacenterId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersFindById: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Datacenter**](Datacenter.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersGet**
> Datacenters datacentersGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Data Centers under your account

You can retrieve a complete list of data centers provisioned under your account

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

api_instance = ::DataCenterApi.new
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Data Centers under your account
  result = api_instance.datacentersGet(opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersGet: #{e}"
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

api_instance = ::DataCenterApi.new
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Data Centers under your account
  result = api_instance.datacentersGet(opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersGet: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Datacenters**](Datacenters.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersPatch**
> Datacenter datacentersPatch(datacenterId, datacenter, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Data Center

You can use update datacenter to re-name the datacenter or update its description

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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
datacenter =  # DatacenterProperties | Modified properties of Data Center
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Data Center
  result = api_instance.datacentersPatch(datacenterId, datacenter, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersPatch: #{e}"
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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
datacenter =  # DatacenterProperties | Modified properties of Data Center
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Data Center
  result = api_instance.datacentersPatch(datacenterId, datacenter, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersPatch: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **datacenter** | [**DatacenterProperties**](DatacenterProperties.md)| Modified properties of Data Center |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Datacenter**](Datacenter.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersPost**
> Datacenter datacentersPost(datacenter, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Data Center

Virtual data centers are the foundation of the platform. They act as logical containers for all other objects you will be creating, e.g. servers. You can provision as many data centers as you want. Datacenters have their own private network and are logically segmented from each other to create isolation. You can use this POST method to create a simple datacenter or to create a datacenter with multiple objects under it such as servers and storage volumes.

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

api_instance = ::DataCenterApi.new
datacenter =  # Datacenter | Datacenter to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Data Center
  result = api_instance.datacentersPost(datacenter, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersPost: #{e}"
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

api_instance = ::DataCenterApi.new
datacenter =  # Datacenter | Datacenter to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Data Center
  result = api_instance.datacentersPost(datacenter, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersPost: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenter** | [**Datacenter**](Datacenter.md)| Datacenter to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Datacenter**](Datacenter.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersPut**
> Datacenter datacentersPut(datacenterId, datacenter, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Data Center

You can use update datacenter to re-name the datacenter or update its description

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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
datacenter =  # Datacenter | Modified Data Center
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Data Center
  result = api_instance.datacentersPut(datacenterId, datacenter, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersPut: #{e}"
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

api_instance = ::DataCenterApi.new
datacenterId =  # string | The unique ID of the datacenter
datacenter =  # Datacenter | Modified Data Center
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Data Center
  result = api_instance.datacentersPut(datacenterId, datacenter, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling DataCenterApi->datacentersPut: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **datacenter** | [**Datacenter**](Datacenter.md)| Modified Data Center |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Datacenter**](Datacenter.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


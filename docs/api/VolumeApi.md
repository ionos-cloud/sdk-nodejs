# VolumeApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**datacentersVolumesCreateSnapshotPost**](VolumeApi.md#datacentersVolumesCreateSnapshotPost) | **POST** /datacenters/{datacenterId}/volumes/{volumeId}/create-snapshot | Create Volume Snapshot |
| [**datacentersVolumesDelete**](VolumeApi.md#datacentersVolumesDelete) | **DELETE** /datacenters/{datacenterId}/volumes/{volumeId} | Delete a Volume |
| [**datacentersVolumesFindById**](VolumeApi.md#datacentersVolumesFindById) | **GET** /datacenters/{datacenterId}/volumes/{volumeId} | Retrieve a Volume |
| [**datacentersVolumesGet**](VolumeApi.md#datacentersVolumesGet) | **GET** /datacenters/{datacenterId}/volumes | List Volumes  |
| [**datacentersVolumesPatch**](VolumeApi.md#datacentersVolumesPatch) | **PATCH** /datacenters/{datacenterId}/volumes/{volumeId} | Partially modify a Volume |
| [**datacentersVolumesPost**](VolumeApi.md#datacentersVolumesPost) | **POST** /datacenters/{datacenterId}/volumes | Create a Volume |
| [**datacentersVolumesPut**](VolumeApi.md#datacentersVolumesPut) | **PUT** /datacenters/{datacenterId}/volumes/{volumeId} | Modify a Volume |
| [**datacentersVolumesRestoreSnapshotPost**](VolumeApi.md#datacentersVolumesRestoreSnapshotPost) | **POST** /datacenters/{datacenterId}/volumes/{volumeId}/restore-snapshot | Restore Volume Snapshot |


# **datacentersVolumesCreateSnapshotPost**
> Snapshot datacentersVolumesCreateSnapshotPost(datacenterId, volumeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, name=name, description=description, secAuthProtection=secAuthProtection, licenceType=licenceType)

Create Volume Snapshot

Creates a snapshot of a volume within the datacenter. You can use a snapshot to create a new storage volume or to restore a storage volume.

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  name: , # string | The name of the snapshot
  description: , # string | The description of the snapshot
  secAuthProtection: , # boolean | Flag representing if extra protection is enabled on snapshot e.g. Two Factor protection etc.
  licenceType:  # string | The OS type of this Snapshot
}

begin
  # Create Volume Snapshot
  result = api_instance.datacentersVolumesCreateSnapshotPost(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesCreateSnapshotPost: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  name: , # string | The name of the snapshot
  description: , # string | The description of the snapshot
  secAuthProtection: , # boolean | Flag representing if extra protection is enabled on snapshot e.g. Two Factor protection etc.
  licenceType:  # string | The OS type of this Snapshot
}

begin
  # Create Volume Snapshot
  result = api_instance.datacentersVolumesCreateSnapshotPost(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesCreateSnapshotPost: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **name** | **string**| The name of the snapshot | [optional] [default to undefined] |
| **description** | **string**| The description of the snapshot | [optional] [default to undefined] |
| **secAuthProtection** | **boolean**| Flag representing if extra protection is enabled on snapshot e.g. Two Factor protection etc. | [optional] [default to undefined] |
| **licenceType** | **string**| The OS type of this Snapshot | [optional] [default to undefined] |

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

# **datacentersVolumesDelete**
> object datacentersVolumesDelete(datacenterId, volumeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Volume

Deletes the specified volume. This will result in the volume being removed from your datacenter. Use this with caution.

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Volume
  result = api_instance.datacentersVolumesDelete(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesDelete: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Volume
  result = api_instance.datacentersVolumesDelete(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesDelete: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
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

# **datacentersVolumesFindById**
> Volume datacentersVolumesFindById(datacenterId, volumeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Volume

Retrieves the attributes of a given Volume

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Volume
  result = api_instance.datacentersVolumesFindById(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesFindById: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Volume
  result = api_instance.datacentersVolumesFindById(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesFindById: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Volume**](Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersVolumesGet**
> Volumes datacentersVolumesGet(datacenterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Volumes 

Retrieves a list of Volumes.

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Volumes 
  result = api_instance.datacentersVolumesGet(datacenterId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesGet: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Volumes 
  result = api_instance.datacentersVolumesGet(datacenterId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesGet: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Volumes**](Volumes.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersVolumesPatch**
> Volume datacentersVolumesPatch(datacenterId, volumeId, volume, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Volume

You can use update attributes of a Volume

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
volume =  # VolumeProperties | Modified properties of Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Volume
  result = api_instance.datacentersVolumesPatch(datacenterId, volumeId, volume, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesPatch: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
volume =  # VolumeProperties | Modified properties of Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Volume
  result = api_instance.datacentersVolumesPatch(datacenterId, volumeId, volume, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesPatch: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
| **volume** | [**VolumeProperties**](VolumeProperties.md)| Modified properties of Volume |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Volume**](Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersVolumesPost**
> Volume datacentersVolumesPost(datacenterId, volume, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Volume

Creates a volume within the datacenter. This will not attach the volume to a server. Please see the Servers section for details on how to attach storage volumes

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volume =  # Volume | Volume to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Volume
  result = api_instance.datacentersVolumesPost(datacenterId, volume, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesPost: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volume =  # Volume | Volume to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Volume
  result = api_instance.datacentersVolumesPost(datacenterId, volume, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesPost: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volume** | [**Volume**](Volume.md)| Volume to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Volume**](Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersVolumesPut**
> Volume datacentersVolumesPut(datacenterId, volumeId, volume, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Volume

You can use update attributes of a Volume

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
volume =  # Volume | Modified Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Volume
  result = api_instance.datacentersVolumesPut(datacenterId, volumeId, volume, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesPut: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
volume =  # Volume | Modified Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Volume
  result = api_instance.datacentersVolumesPut(datacenterId, volumeId, volume, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesPut: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
| **volume** | [**Volume**](Volume.md)| Modified Volume |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Volume**](Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersVolumesRestoreSnapshotPost**
> object datacentersVolumesRestoreSnapshotPost(datacenterId, volumeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, snapshotId=snapshotId)

Restore Volume Snapshot

This will restore a snapshot onto a volume. A snapshot is created as just another image that can be used to create subsequent volumes if you want or to restore an existing volume.

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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  snapshotId:  # string | This is the ID of the snapshot
}

begin
  # Restore Volume Snapshot
  result = api_instance.datacentersVolumesRestoreSnapshotPost(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesRestoreSnapshotPost: #{e}"
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

api_instance = ::VolumeApi.new
datacenterId =  # string | The unique ID of the datacenter
volumeId =  # string | The unique ID of the Volume
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  snapshotId:  # string | This is the ID of the snapshot
}

begin
  # Restore Volume Snapshot
  result = api_instance.datacentersVolumesRestoreSnapshotPost(datacenterId, volumeId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling VolumeApi->datacentersVolumesRestoreSnapshotPost: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **snapshotId** | **string**| This is the ID of the snapshot | [optional] [default to undefined] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


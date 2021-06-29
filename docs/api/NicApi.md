# NicApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**datacentersServersNicsDelete**](NicApi.md#datacentersServersNicsDelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Delete a Nic |
| [**datacentersServersNicsFindById**](NicApi.md#datacentersServersNicsFindById) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Retrieve a Nic |
| [**datacentersServersNicsFirewallrulesDelete**](NicApi.md#datacentersServersNicsFirewallrulesDelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Delete a Firewall Rule |
| [**datacentersServersNicsFirewallrulesFindById**](NicApi.md#datacentersServersNicsFirewallrulesFindById) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Retrieve a Firewall Rule |
| [**datacentersServersNicsFirewallrulesGet**](NicApi.md#datacentersServersNicsFirewallrulesGet) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules | List Firewall Rules  |
| [**datacentersServersNicsFirewallrulesPatch**](NicApi.md#datacentersServersNicsFirewallrulesPatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Partially modify a Firewall Rule |
| [**datacentersServersNicsFirewallrulesPost**](NicApi.md#datacentersServersNicsFirewallrulesPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules | Create a Firewall Rule |
| [**datacentersServersNicsFirewallrulesPut**](NicApi.md#datacentersServersNicsFirewallrulesPut) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Modify a Firewall Rule |
| [**datacentersServersNicsGet**](NicApi.md#datacentersServersNicsGet) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics | List Nics  |
| [**datacentersServersNicsPatch**](NicApi.md#datacentersServersNicsPatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Partially modify a Nic |
| [**datacentersServersNicsPost**](NicApi.md#datacentersServersNicsPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/nics | Create a Nic |
| [**datacentersServersNicsPut**](NicApi.md#datacentersServersNicsPut) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Modify a Nic |


# **datacentersServersNicsDelete**
> object datacentersServersNicsDelete(datacenterId, serverId, nicId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Nic

Deletes the specified NIC.

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Nic
  result = api_instance.datacentersServersNicsDelete(datacenterId, serverId, nicId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsDelete: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Nic
  result = api_instance.datacentersServersNicsDelete(datacenterId, serverId, nicId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsDelete: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
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

# **datacentersServersNicsFindById**
> Nic datacentersServersNicsFindById(datacenterId, serverId, nicId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Nic

Retrieves the attributes of a given NIC

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Nic
  result = api_instance.datacentersServersNicsFindById(datacenterId, serverId, nicId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFindById: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Nic
  result = api_instance.datacentersServersNicsFindById(datacenterId, serverId, nicId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFindById: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersNicsFirewallrulesDelete**
> object datacentersServersNicsFirewallrulesDelete(datacenterId, serverId, nicId, firewallruleId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Firewall Rule

Removes the specific Firewall Rule

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesDelete(datacenterId, serverId, nicId, firewallruleId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesDelete: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Delete a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesDelete(datacenterId, serverId, nicId, firewallruleId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesDelete: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string**| The unique ID of the Firewall Rule | [default to undefined] |
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

# **datacentersServersNicsFirewallrulesFindById**
> FirewallRule datacentersServersNicsFirewallrulesFindById(datacenterId, serverId, nicId, firewallruleId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Firewall Rule

Retrieves the attributes of a given Firewall Rule.

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesFindById(datacenterId, serverId, nicId, firewallruleId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesFindById: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Retrieve a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesFindById(datacenterId, serverId, nicId, firewallruleId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesFindById: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string**| The unique ID of the Firewall Rule | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersNicsFirewallrulesGet**
> FirewallRules datacentersServersNicsFirewallrulesGet(datacenterId, serverId, nicId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Firewall Rules 

Retrieves a list of firewall rules associated with a particular NIC

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Firewall Rules 
  result = api_instance.datacentersServersNicsFirewallrulesGet(datacenterId, serverId, nicId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesGet: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Firewall Rules 
  result = api_instance.datacentersServersNicsFirewallrulesGet(datacenterId, serverId, nicId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesGet: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**FirewallRules**](FirewallRules.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersNicsFirewallrulesPatch**
> FirewallRule datacentersServersNicsFirewallrulesPatch(datacenterId, serverId, nicId, firewallruleId, firewallrule, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Firewall Rule

You can use update attributes of a resource

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
firewallrule =  # FirewallruleProperties | Modified Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesPatch(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesPatch: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
firewallrule =  # FirewallruleProperties | Modified Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesPatch(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesPatch: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string**| The unique ID of the Firewall Rule | [default to undefined] |
| **firewallrule** | [**FirewallruleProperties**](FirewallruleProperties.md)| Modified Firewall Rule |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersNicsFirewallrulesPost**
> FirewallRule datacentersServersNicsFirewallrulesPost(datacenterId, serverId, nicId, firewallrule, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Firewall Rule

This will add a Firewall Rule to the NIC

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the server
nicId =  # string | The unique ID of the NIC
firewallrule =  # FirewallRule | Firewall Rule to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesPost(datacenterId, serverId, nicId, firewallrule, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesPost: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the server
nicId =  # string | The unique ID of the NIC
firewallrule =  # FirewallRule | Firewall Rule to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesPost(datacenterId, serverId, nicId, firewallrule, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesPost: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **firewallrule** | [**FirewallRule**](FirewallRule.md)| Firewall Rule to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersNicsFirewallrulesPut**
> FirewallRule datacentersServersNicsFirewallrulesPut(datacenterId, serverId, nicId, firewallruleId, firewallrule, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Firewall Rule

You can use update attributes of a resource

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
firewallrule =  # FirewallRule | Modified Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesPut(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesPut: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
firewallruleId =  # string | The unique ID of the Firewall Rule
firewallrule =  # FirewallRule | Modified Firewall Rule
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Firewall Rule
  result = api_instance.datacentersServersNicsFirewallrulesPut(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsFirewallrulesPut: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string**| The unique ID of the Firewall Rule | [default to undefined] |
| **firewallrule** | [**FirewallRule**](FirewallRule.md)| Modified Firewall Rule |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersNicsGet**
> Nics datacentersServersNicsGet(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Nics 

Retrieves a list of NICs.

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Nics 
  result = api_instance.datacentersServersNicsGet(datacenterId, serverId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsGet: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber: , # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
  offset: , # number | the first element (of the total list of elements) to include in the response (use together with <code>limit</code> for pagination)
  limit:  # number | the maximum number of elements to return (use together with <code>offset</code> for pagination)
}

begin
  # List Nics 
  result = api_instance.datacentersServersNicsGet(datacenterId, serverId, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsGet: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Nics**](Nics.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersNicsPatch**
> Nic datacentersServersNicsPatch(datacenterId, serverId, nicId, nic, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Nic

You can use update attributes of a Nic

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
nic =  # NicProperties | Modified properties of Nic
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Nic
  result = api_instance.datacentersServersNicsPatch(datacenterId, serverId, nicId, nic, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsPatch: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
nic =  # NicProperties | Modified properties of Nic
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Partially modify a Nic
  result = api_instance.datacentersServersNicsPatch(datacenterId, serverId, nicId, nic, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsPatch: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **nic** | [**NicProperties**](NicProperties.md)| Modified properties of Nic |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersNicsPost**
> Nic datacentersServersNicsPost(datacenterId, serverId, nic, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Nic

Adds a NIC to the target server. Combine count of Nics and volumes attached to the server should not exceed size 24.

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nic =  # Nic | Nic to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Nic
  result = api_instance.datacentersServersNicsPost(datacenterId, serverId, nic, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsPost: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nic =  # Nic | Nic to be created
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Create a Nic
  result = api_instance.datacentersServersNicsPost(datacenterId, serverId, nic, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsPost: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nic** | [**Nic**](Nic.md)| Nic to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersNicsPut**
> Nic datacentersServersNicsPut(datacenterId, serverId, nicId, nic, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Nic

You can use update attributes of a Nic

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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
nic =  # Nic | Modified Nic
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Nic
  result = api_instance.datacentersServersNicsPut(datacenterId, serverId, nicId, nic, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsPut: #{e}"
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

api_instance = ::NicApi.new
datacenterId =  # string | The unique ID of the datacenter
serverId =  # string | The unique ID of the Server
nicId =  # string | The unique ID of the NIC
nic =  # Nic | Modified Nic
opts = {
  pretty: , # boolean | Controls whether response is pretty-printed (with indentation and new lines)
  depth: , # number | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth=0: only direct properties are included. Children (servers etc.) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on
  xContractNumber:  # number | Users having more than 1 contract need to provide contract number, against which all API requests should be executed
}

begin
  # Modify a Nic
  result = api_instance.datacentersServersNicsPut(datacenterId, serverId, nicId, nic, opts)
  p result
rescue ::ApiError => e
  puts "Error when calling NicApi->datacentersServersNicsPut: #{e}"
end
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **nic** | [**Nic**](Nic.md)| Modified Nic |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


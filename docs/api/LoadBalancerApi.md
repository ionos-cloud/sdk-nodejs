# LoadBalancerApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**datacentersLoadbalancersBalancednicsDelete**](LoadBalancerApi.md#datacentersLoadbalancersBalancednicsDelete) | **DELETE** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics/{nicId} | Detach a nic from loadbalancer |
| [**datacentersLoadbalancersBalancednicsFindByNicId**](LoadBalancerApi.md#datacentersLoadbalancersBalancednicsFindByNicId) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics/{nicId} | Retrieve a nic attached to Load Balancer |
| [**datacentersLoadbalancersBalancednicsGet**](LoadBalancerApi.md#datacentersLoadbalancersBalancednicsGet) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics | List Load Balancer Members  |
| [**datacentersLoadbalancersBalancednicsPost**](LoadBalancerApi.md#datacentersLoadbalancersBalancednicsPost) | **POST** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics | Attach a nic to Load Balancer |
| [**datacentersLoadbalancersDelete**](LoadBalancerApi.md#datacentersLoadbalancersDelete) | **DELETE** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Delete a Loadbalancer. |
| [**datacentersLoadbalancersFindById**](LoadBalancerApi.md#datacentersLoadbalancersFindById) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Retrieve a loadbalancer |
| [**datacentersLoadbalancersGet**](LoadBalancerApi.md#datacentersLoadbalancersGet) | **GET** /datacenters/{datacenterId}/loadbalancers | List Load Balancers |
| [**datacentersLoadbalancersPatch**](LoadBalancerApi.md#datacentersLoadbalancersPatch) | **PATCH** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Partially modify a Loadbalancer |
| [**datacentersLoadbalancersPost**](LoadBalancerApi.md#datacentersLoadbalancersPost) | **POST** /datacenters/{datacenterId}/loadbalancers | Create a Load Balancer |
| [**datacentersLoadbalancersPut**](LoadBalancerApi.md#datacentersLoadbalancersPut) | **PUT** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Modify a Load Balancer |


# **datacentersLoadbalancersBalancednicsDelete**
> object datacentersLoadbalancersBalancednicsDelete(datacenterId, loadbalancerId, nicId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Detach a nic from loadbalancer

This will remove a nic from Load Balancer

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Detach a nic from loadbalancer
api_instance.datacentersLoadbalancersBalancednicsDelete(datacenterId, loadbalancerId, nicId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Detach a nic from loadbalancer
api_instance.datacentersLoadbalancersBalancednicsDelete(datacenterId, loadbalancerId, nicId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
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

# **datacentersLoadbalancersBalancednicsFindByNicId**
> Nic datacentersLoadbalancersBalancednicsFindByNicId(datacenterId, loadbalancerId, nicId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a nic attached to Load Balancer

This will retrieve the properties of an attached nic.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Retrieve a nic attached to Load Balancer
api_instance.datacentersLoadbalancersBalancednicsFindByNicId(datacenterId, loadbalancerId, nicId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Retrieve a nic attached to Load Balancer
api_instance.datacentersLoadbalancersBalancednicsFindByNicId(datacenterId, loadbalancerId, nicId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLoadbalancersBalancednicsGet**
> BalancedNics datacentersLoadbalancersBalancednicsGet(datacenterId, loadbalancerId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Load Balancer Members 

You can retrieve a list of nics attached to a Load Balancer

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# List Load Balancer Members 
api_instance.datacentersLoadbalancersBalancednicsGet(datacenterId, loadbalancerId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# List Load Balancer Members 
api_instance.datacentersLoadbalancersBalancednicsGet(datacenterId, loadbalancerId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**BalancedNics**](models/BalancedNics.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLoadbalancersBalancednicsPost**
> Nic datacentersLoadbalancersBalancednicsPost(datacenterId, loadbalancerId, nic, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Attach a nic to Load Balancer

This will attach a pre-existing nic to a Load Balancer. 

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Attach a nic to Load Balancer
api_instance.datacentersLoadbalancersBalancednicsPost(datacenterId, loadbalancerId, nic, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Attach a nic to Load Balancer
api_instance.datacentersLoadbalancersBalancednicsPost(datacenterId, loadbalancerId, nic, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
| **nic** | [**Nic**](Nic.md)| Nic id to be attached |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersLoadbalancersDelete**
> object datacentersLoadbalancersDelete(datacenterId, loadbalancerId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Loadbalancer.

Removes the specific Loadbalancer

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Delete a Loadbalancer.
api_instance.datacentersLoadbalancersDelete(datacenterId, loadbalancerId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Delete a Loadbalancer.
api_instance.datacentersLoadbalancersDelete(datacenterId, loadbalancerId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
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

# **datacentersLoadbalancersFindById**
> Loadbalancer datacentersLoadbalancersFindById(datacenterId, loadbalancerId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a loadbalancer

Retrieves the attributes of a given Loadbalancer

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Retrieve a loadbalancer
api_instance.datacentersLoadbalancersFindById(datacenterId, loadbalancerId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Retrieve a loadbalancer
api_instance.datacentersLoadbalancersFindById(datacenterId, loadbalancerId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Loadbalancer**](models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLoadbalancersGet**
> Loadbalancers datacentersLoadbalancersGet(datacenterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Load Balancers

Retrieve a list of Load Balancers within the datacenter

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# List Load Balancers
api_instance.datacentersLoadbalancersGet(datacenterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# List Load Balancers
api_instance.datacentersLoadbalancersGet(datacenterId, options).then((response) => console.log(response));
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

[**Loadbalancers**](models/Loadbalancers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLoadbalancersPatch**
> Loadbalancer datacentersLoadbalancersPatch(datacenterId, loadbalancerId, loadbalancer, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Loadbalancer

You can use update attributes of a resource

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Partially modify a Loadbalancer
api_instance.datacentersLoadbalancersPatch(datacenterId, loadbalancerId, loadbalancer, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Partially modify a Loadbalancer
api_instance.datacentersLoadbalancersPatch(datacenterId, loadbalancerId, loadbalancer, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
| **loadbalancer** | [**LoadbalancerProperties**](LoadbalancerProperties.md)| Modified Loadbalancer |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Loadbalancer**](models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersLoadbalancersPost**
> Loadbalancer datacentersLoadbalancersPost(datacenterId, loadbalancer, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Load Balancer

Creates a Loadbalancer within the datacenter

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Create a Load Balancer
api_instance.datacentersLoadbalancersPost(datacenterId, loadbalancer, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Create a Load Balancer
api_instance.datacentersLoadbalancersPost(datacenterId, loadbalancer, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancer** | [**Loadbalancer**](Loadbalancer.md)| Loadbalancer to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Loadbalancer**](models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersLoadbalancersPut**
> Loadbalancer datacentersLoadbalancersPut(datacenterId, loadbalancerId, loadbalancer, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Load Balancer

You can use update attributes of a resource

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Modify a Load Balancer
api_instance.datacentersLoadbalancersPut(datacenterId, loadbalancerId, loadbalancer, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LoadBalancerApi(config)
# Modify a Load Balancer
api_instance.datacentersLoadbalancersPut(datacenterId, loadbalancerId, loadbalancer, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **loadbalancerId** | **string**| The unique ID of the Load Balancer | [default to undefined] |
| **loadbalancer** | [**Loadbalancer**](Loadbalancer.md)| Modified Loadbalancer |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Loadbalancer**](models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


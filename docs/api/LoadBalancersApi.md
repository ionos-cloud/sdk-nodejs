# LoadBalancersApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersLoadbalancersBalancednicsDelete**](LoadBalancersApi.md#datacentersloadbalancersbalancednicsdelete) | **DELETE** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics/{nicId} | Detach balanced NICs |
| [**datacentersLoadbalancersBalancednicsFindByNicId**](LoadBalancersApi.md#datacentersloadbalancersbalancednicsfindbynicid) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics/{nicId} | Retrieve balanced NICs |
| [**datacentersLoadbalancersBalancednicsGet**](LoadBalancersApi.md#datacentersloadbalancersbalancednicsget) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics | List balanced NICs |
| [**datacentersLoadbalancersBalancednicsPost**](LoadBalancersApi.md#datacentersloadbalancersbalancednicspost) | **POST** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics | Attach balanced NICs |
| [**datacentersLoadbalancersDelete**](LoadBalancersApi.md#datacentersloadbalancersdelete) | **DELETE** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Delete Load Balancers |
| [**datacentersLoadbalancersFindById**](LoadBalancersApi.md#datacentersloadbalancersfindbyid) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Retrieve Load Balancers |
| [**datacentersLoadbalancersGet**](LoadBalancersApi.md#datacentersloadbalancersget) | **GET** /datacenters/{datacenterId}/loadbalancers | List Load Balancers |
| [**datacentersLoadbalancersPatch**](LoadBalancersApi.md#datacentersloadbalancerspatch) | **PATCH** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Partially modify Load Balancers |
| [**datacentersLoadbalancersPost**](LoadBalancersApi.md#datacentersloadbalancerspost) | **POST** /datacenters/{datacenterId}/loadbalancers | Create Load Balancers |
| [**datacentersLoadbalancersPut**](LoadBalancersApi.md#datacentersloadbalancersput) | **PUT** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Modify Load Balancers |


## datacentersLoadbalancersBalancednicsDelete

> datacentersLoadbalancersBalancednicsDelete(datacenterId, loadbalancerId, nicId, opts)

Detach balanced NICs

Detach the specified NIC from the Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Detach balanced NICs
api_instance
  .datacentersLoadbalancersBalancednicsDelete({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
    nicId: nicId_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLoadbalancersBalancednicsFindByNicId

> <Nic> datacentersLoadbalancersBalancednicsFindByNicId(datacenterId, loadbalancerId, nicId, opts)

Retrieve balanced NICs

Retrieve the properties of the specified NIC, attached to the Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Retrieve balanced NICs
api_instance
  .datacentersLoadbalancersBalancednicsFindByNicId({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
    nicId: nicId_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLoadbalancersBalancednicsGet

> <BalancedNics> datacentersLoadbalancersBalancednicsGet(datacenterId, loadbalancerId, opts)

List balanced NICs

List all NICs, attached to the specified Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List balanced NICs
api_instance
  .datacentersLoadbalancersBalancednicsGet({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**BalancedNics**](../models/BalancedNics.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLoadbalancersBalancednicsPost

> <Nic> datacentersLoadbalancersBalancednicsPost(datacenterId, loadbalancerId, nic, opts)

Attach balanced NICs

Attach an existing NIC to the specified Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Attach balanced NICs
api_instance
  .datacentersLoadbalancersBalancednicsPost({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
    nic: nic_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **nic** | [**Nic**](../models/Nic.md) | The NIC to be attached. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLoadbalancersDelete

> datacentersLoadbalancersDelete(datacenterId, loadbalancerId, opts)

Delete Load Balancers

Remove the specified Load Balancer from the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Delete Load Balancers
api_instance
  .datacentersLoadbalancersDelete({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLoadbalancersFindById

> <Loadbalancer> datacentersLoadbalancersFindById(datacenterId, loadbalancerId, opts)

Retrieve Load Balancers

Retrieve the properties of the specified Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Retrieve Load Balancers
api_instance
  .datacentersLoadbalancersFindById({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Loadbalancer**](../models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLoadbalancersGet

> <Loadbalancers> datacentersLoadbalancersGet(datacenterId, opts)

List Load Balancers

List all the Load Balancers within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Load Balancers
api_instance
  .datacentersLoadbalancersGet({
    datacenterId: datacenterId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**Loadbalancers**](../models/Loadbalancers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLoadbalancersPatch

> <Loadbalancer> datacentersLoadbalancersPatch(datacenterId, loadbalancerId, loadbalancer, opts)

Partially modify Load Balancers

Update the properties of the specified Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Partially modify Load Balancers
api_instance
  .datacentersLoadbalancersPatch({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
    loadbalancer: loadbalancer_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **loadbalancer** | [**LoadbalancerProperties**](../models/LoadbalancerProperties.md) | The properties of the Load Balancer to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Loadbalancer**](../models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLoadbalancersPost

> <Loadbalancer> datacentersLoadbalancersPost(datacenterId, loadbalancer, opts)

Create Load Balancers

Create a Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Create Load Balancers
api_instance
  .datacentersLoadbalancersPost({
    datacenterId: datacenterId_example,
    loadbalancer: loadbalancer_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancer** | [**Loadbalancer**](../models/Loadbalancer.md) | The Load Balancer to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Loadbalancer**](../models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLoadbalancersPut

> <Loadbalancer> datacentersLoadbalancersPut(datacenterId, loadbalancerId, loadbalancer, opts)

Modify Load Balancers

Modify the properties of the specified Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancersApi(config);
// Modify Load Balancers
api_instance
  .datacentersLoadbalancersPut({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
    loadbalancer: loadbalancer_example,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer. | [default to undefined] |
| **loadbalancer** | [**Loadbalancer**](../models/Loadbalancer.md) | The modified Load Balancer. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Loadbalancer**](../models/Loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


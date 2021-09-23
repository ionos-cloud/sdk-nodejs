# LoadBalancerApi

All URIs are relative to [https://api.ionos.com/cloudapi/v5](https://api.ionos.com/cloudapi/v5)

| Method | HTTP request | Description |
| :--- | :--- | :--- |
| [**datacentersLoadbalancersBalancednicsDelete**](loadbalancerapi.md#datacentersloadbalancersbalancednicsdelete) | **DELETE** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics/{nicId} | Detach a nic from loadbalancer |
| [**datacentersLoadbalancersBalancednicsFindByNicId**](loadbalancerapi.md#datacentersloadbalancersbalancednicsfindbynicid) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics/{nicId} | Retrieve a nic attached to Load Balancer |
| [**datacentersLoadbalancersBalancednicsGet**](loadbalancerapi.md#datacentersloadbalancersbalancednicsget) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics | List Load Balancer Members |
| [**datacentersLoadbalancersBalancednicsPost**](loadbalancerapi.md#datacentersloadbalancersbalancednicspost) | **POST** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId}/balancednics | Attach a nic to Load Balancer |
| [**datacentersLoadbalancersDelete**](loadbalancerapi.md#datacentersloadbalancersdelete) | **DELETE** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Delete a Loadbalancer. |
| [**datacentersLoadbalancersFindById**](loadbalancerapi.md#datacentersloadbalancersfindbyid) | **GET** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Retrieve a loadbalancer |
| [**datacentersLoadbalancersGet**](loadbalancerapi.md#datacentersloadbalancersget) | **GET** /datacenters/{datacenterId}/loadbalancers | List Load Balancers |
| [**datacentersLoadbalancersPatch**](loadbalancerapi.md#datacentersloadbalancerspatch) | **PATCH** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Partially modify a Loadbalancer |
| [**datacentersLoadbalancersPost**](loadbalancerapi.md#datacentersloadbalancerspost) | **POST** /datacenters/{datacenterId}/loadbalancers | Create a Load Balancer |
| [**datacentersLoadbalancersPut**](loadbalancerapi.md#datacentersloadbalancersput) | **PUT** /datacenters/{datacenterId}/loadbalancers/{loadbalancerId} | Modify a Load Balancer |

## datacentersLoadbalancersBalancednicsDelete

> object datacentersLoadbalancersBalancednicsDelete\(datacenterId, loadbalancerId, nicId, opts\)

Detach a nic from loadbalancer

This will remove a nic from Load Balancer

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Detach a nic from loadbalancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **nicId** | **string** | The unique ID of the NIC | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLoadbalancersBalancednicsFindByNicId

> datacentersLoadbalancersBalancednicsFindByNicId\(datacenterId, loadbalancerId, nicId, opts\)

Retrieve a nic attached to Load Balancer

This will retrieve the properties of an attached nic.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Retrieve a nic attached to Load Balancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **nicId** | **string** | The unique ID of the NIC | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Nic**](../models/nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLoadbalancersBalancednicsGet

> datacentersLoadbalancersBalancednicsGet\(datacenterId, loadbalancerId, opts\)

List Load Balancer Members

You can retrieve a list of nics attached to a Load Balancer

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// List Load Balancer Members 
api_instance
  .datacentersLoadbalancersBalancednicsGet({
    datacenterId: datacenterId_example,
    loadbalancerId: loadbalancerId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**BalancedNics**](../models/balancednics.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLoadbalancersBalancednicsPost

> datacentersLoadbalancersBalancednicsPost\(datacenterId, loadbalancerId, nic, opts\)

Attach a nic to Load Balancer

This will attach a pre-existing nic to a Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Attach a nic to Load Balancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **nic** | [**Nic**](../models/nic.md) | Nic id to be attached |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Nic**](../models/nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersLoadbalancersDelete

> object datacentersLoadbalancersDelete\(datacenterId, loadbalancerId, opts\)

Delete a Loadbalancer.

Removes the specific Loadbalancer

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Delete a Loadbalancer.
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLoadbalancersFindById

> datacentersLoadbalancersFindById\(datacenterId, loadbalancerId, opts\)

Retrieve a loadbalancer

Retrieves the attributes of a given Loadbalancer

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Retrieve a loadbalancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Loadbalancer**](../models/loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLoadbalancersGet

> datacentersLoadbalancersGet\(datacenterId, opts\)

List Load Balancers

Retrieve a list of Load Balancers within the datacenter

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// List Load Balancers
api_instance
  .datacentersLoadbalancersGet({
    datacenterId: datacenterId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**Loadbalancers**](../models/loadbalancers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLoadbalancersPatch

> datacentersLoadbalancersPatch\(datacenterId, loadbalancerId, loadbalancer, opts\)

Partially modify a Loadbalancer

You can use update attributes of a resource

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Partially modify a Loadbalancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **loadbalancer** | [**LoadbalancerProperties**](../models/loadbalancerproperties.md) | Modified Loadbalancer |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Loadbalancer**](../models/loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersLoadbalancersPost

> datacentersLoadbalancersPost\(datacenterId, loadbalancer, opts\)

Create a Load Balancer

Creates a Loadbalancer within the datacenter

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Create a Load Balancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancer** | [**Loadbalancer**](../models/loadbalancer.md) | Loadbalancer to be created |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Loadbalancer**](../models/loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersLoadbalancersPut

> datacentersLoadbalancersPut\(datacenterId, loadbalancerId, loadbalancer, opts\)

Modify a Load Balancer

You can use update attributes of a resource

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LoadBalancerApi(config);
// Modify a Load Balancer
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **loadbalancerId** | **string** | The unique ID of the Load Balancer | \[default to undefined\] |
| **loadbalancer** | [**Loadbalancer**](../models/loadbalancer.md) | Modified Loadbalancer |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Loadbalancer**](../models/loadbalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json


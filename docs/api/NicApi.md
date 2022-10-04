# NicApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersServersNicsDelete**](NicApi.md#datacentersserversnicsdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Delete a Nic |
| [**datacentersServersNicsFindById**](NicApi.md#datacentersserversnicsfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Retrieve a Nic |
| [**datacentersServersNicsFirewallrulesDelete**](NicApi.md#datacentersserversnicsfirewallrulesdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Delete a Firewall Rule |
| [**datacentersServersNicsFirewallrulesFindById**](NicApi.md#datacentersserversnicsfirewallrulesfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Retrieve a Firewall Rule |
| [**datacentersServersNicsFirewallrulesGet**](NicApi.md#datacentersserversnicsfirewallrulesget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules | List Firewall Rules  |
| [**datacentersServersNicsFirewallrulesPatch**](NicApi.md#datacentersserversnicsfirewallrulespatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Partially modify a Firewall Rule |
| [**datacentersServersNicsFirewallrulesPost**](NicApi.md#datacentersserversnicsfirewallrulespost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules | Create a Firewall Rule |
| [**datacentersServersNicsFirewallrulesPut**](NicApi.md#datacentersserversnicsfirewallrulesput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Modify a Firewall Rule |
| [**datacentersServersNicsGet**](NicApi.md#datacentersserversnicsget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics | List Nics  |
| [**datacentersServersNicsPatch**](NicApi.md#datacentersserversnicspatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Partially modify a Nic |
| [**datacentersServersNicsPost**](NicApi.md#datacentersserversnicspost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/nics | Create a Nic |
| [**datacentersServersNicsPut**](NicApi.md#datacentersserversnicsput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId} | Modify a Nic |


## datacentersServersNicsDelete

> object datacentersServersNicsDelete(datacenterId, serverId, nicId, opts)

Delete a Nic

Deletes the specified NIC.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Delete a Nic
api_instance
  .datacentersServersNicsDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFindById

> <Nic> datacentersServersNicsFindById(datacenterId, serverId, nicId, opts)

Retrieve a Nic

Retrieves the attributes of a given NIC

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Retrieve a Nic
api_instance
  .datacentersServersNicsFindById({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFirewallrulesDelete

> object datacentersServersNicsFirewallrulesDelete(datacenterId, serverId, nicId, firewallruleId, opts)

Delete a Firewall Rule

Removes the specific Firewall Rule

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Delete a Firewall Rule
api_instance
  .datacentersServersNicsFirewallrulesDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    firewallruleId: firewallruleId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the Firewall Rule | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFirewallrulesFindById

> <FirewallRule> datacentersServersNicsFirewallrulesFindById(datacenterId, serverId, nicId, firewallruleId, opts)

Retrieve a Firewall Rule

Retrieves the attributes of a given Firewall Rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Retrieve a Firewall Rule
api_instance
  .datacentersServersNicsFirewallrulesFindById({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    firewallruleId: firewallruleId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the Firewall Rule | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFirewallrulesGet

> <FirewallRules> datacentersServersNicsFirewallrulesGet(datacenterId, serverId, nicId, opts)

List Firewall Rules 

Retrieves a list of firewall rules associated with a particular NIC

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// List Firewall Rules 
api_instance
  .datacentersServersNicsFirewallrulesGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
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
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |
| **offset** | **number** | the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional][default to 0] |
| **limit** | **number** | the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional][default to 1000] |

### Return type

[**FirewallRules**](../models/FirewallRules.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFirewallrulesPatch

> <FirewallRule> datacentersServersNicsFirewallrulesPatch(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)

Partially modify a Firewall Rule

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
const api_instance = new ionoscloud.NicApi(config);
// Partially modify a Firewall Rule
api_instance
  .datacentersServersNicsFirewallrulesPatch({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    firewallruleId: firewallruleId_example,
    firewallrule: firewallrule_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the Firewall Rule | [default to undefined] |
| **firewallrule** | [**FirewallruleProperties**](../models/FirewallruleProperties.md) | Modified Firewall Rule |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsFirewallrulesPost

> <FirewallRule> datacentersServersNicsFirewallrulesPost(datacenterId, serverId, nicId, firewallrule, opts)

Create a Firewall Rule

This will add a Firewall Rule to the NIC

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Create a Firewall Rule
api_instance
  .datacentersServersNicsFirewallrulesPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    firewallrule: firewallrule_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **firewallrule** | [**FirewallRule**](../models/FirewallRule.md) | Firewall Rule to be created |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsFirewallrulesPut

> <FirewallRule> datacentersServersNicsFirewallrulesPut(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)

Modify a Firewall Rule

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
const api_instance = new ionoscloud.NicApi(config);
// Modify a Firewall Rule
api_instance
  .datacentersServersNicsFirewallrulesPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    firewallruleId: firewallruleId_example,
    firewallrule: firewallrule_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the Firewall Rule | [default to undefined] |
| **firewallrule** | [**FirewallRule**](../models/FirewallRule.md) | Modified Firewall Rule |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsGet

> <Nics> datacentersServersNicsGet(datacenterId, serverId, opts)

List Nics 

Retrieves a list of NICs.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// List Nics 
api_instance
  .datacentersServersNicsGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |
| **offset** | **number** | the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional][default to 0] |
| **limit** | **number** | the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional][default to 1000] |

### Return type

[**Nics**](../models/Nics.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsPatch

> <Nic> datacentersServersNicsPatch(datacenterId, serverId, nicId, nic, opts)

Partially modify a Nic

You can use update attributes of a Nic

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Partially modify a Nic
api_instance
  .datacentersServersNicsPatch({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **nic** | [**NicProperties**](../models/NicProperties.md) | Modified properties of Nic |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsPost

> <Nic> datacentersServersNicsPost(datacenterId, serverId, nic, opts)

Create a Nic

Adds a NIC to the target server. Combine count of Nics and volumes attached to the server should not exceed size 24.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Create a Nic
api_instance
  .datacentersServersNicsPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nic** | [**Nic**](../models/Nic.md) | Nic to be created |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsPut

> <Nic> datacentersServersNicsPut(datacenterId, serverId, nicId, nic, opts)

Modify a Nic

You can use update attributes of a Nic

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NicApi(config);
// Modify a Nic
api_instance
  .datacentersServersNicsPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **nic** | [**Nic**](../models/Nic.md) | Modified Nic |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed (with indentation and new lines) | [optional][default to true] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

# FirewallRulesApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersServersNicsFirewallrulesDelete**](FirewallRulesApi.md#datacentersserversnicsfirewallrulesdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Delete firewall rules |
| [**datacentersServersNicsFirewallrulesFindById**](FirewallRulesApi.md#datacentersserversnicsfirewallrulesfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Retrieve firewall rules |
| [**datacentersServersNicsFirewallrulesGet**](FirewallRulesApi.md#datacentersserversnicsfirewallrulesget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules | List firewall rules |
| [**datacentersServersNicsFirewallrulesPatch**](FirewallRulesApi.md#datacentersserversnicsfirewallrulespatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Partially modify firewall rules |
| [**datacentersServersNicsFirewallrulesPost**](FirewallRulesApi.md#datacentersserversnicsfirewallrulespost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules | Create firewall rules |
| [**datacentersServersNicsFirewallrulesPut**](FirewallRulesApi.md#datacentersserversnicsfirewallrulesput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/firewallrules/{firewallruleId} | Modify firewall rules |


## datacentersServersNicsFirewallrulesDelete

> datacentersServersNicsFirewallrulesDelete(datacenterId, serverId, nicId, firewallruleId, opts)

Delete firewall rules

Delete the specified firewall rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FirewallRulesApi(config);
// Delete firewall rules
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the firewall rule. | [default to undefined] |
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


## datacentersServersNicsFirewallrulesFindById

> <FirewallRule> datacentersServersNicsFirewallrulesFindById(datacenterId, serverId, nicId, firewallruleId, opts)

Retrieve firewall rules

Retrieve the properties of the specified firewall rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FirewallRulesApi(config);
// Retrieve firewall rules
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the firewall rule. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFirewallrulesGet

> <FirewallRules> datacentersServersNicsFirewallrulesGet(datacenterId, serverId, nicId, opts)

List firewall rules

List all firewall rules for the specified NIC.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FirewallRulesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List firewall rules
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
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**FirewallRules**](../models/FirewallRules.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFirewallrulesPatch

> <FirewallRule> datacentersServersNicsFirewallrulesPatch(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)

Partially modify firewall rules

Update the properties of the specified firewall rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FirewallRulesApi(config);
// Partially modify firewall rules
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the firewall rule. | [default to undefined] |
| **firewallrule** | [**FirewallruleProperties**](../models/FirewallruleProperties.md) | The properties of the firewall rule to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsFirewallrulesPost

> <FirewallRule> datacentersServersNicsFirewallrulesPost(datacenterId, serverId, nicId, firewallrule, opts)

Create firewall rules

Create a firewall rule for the specified NIC.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FirewallRulesApi(config);
// Create firewall rules
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **firewallrule** | [**FirewallRule**](../models/FirewallRule.md) | The firewall rule to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsFirewallrulesPut

> <FirewallRule> datacentersServersNicsFirewallrulesPut(datacenterId, serverId, nicId, firewallruleId, firewallrule, opts)

Modify firewall rules

Modify the properties of the specified firewall rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FirewallRulesApi(config);
// Modify firewall rules
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **firewallruleId** | **string** | The unique ID of the firewall rule. | [default to undefined] |
| **firewallrule** | [**FirewallRule**](../models/FirewallRule.md) | The modified firewall rule. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


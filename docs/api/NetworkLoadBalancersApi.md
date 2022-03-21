# NetworkLoadBalancersApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersNetworkloadbalancersDelete**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersdelete) | **DELETE** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId} | Delete Network Load Balancers |
| [**datacentersNetworkloadbalancersFindByNetworkLoadBalancerId**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersfindbynetworkloadbalancerid) | **GET** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId} | Retrieve Network Load Balancers |
| [**datacentersNetworkloadbalancersFlowlogsDelete**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersflowlogsdelete) | **DELETE** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/flowlogs/{flowLogId} | Delete NLB Flow Logs |
| [**datacentersNetworkloadbalancersFlowlogsFindByFlowLogId**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersflowlogsfindbyflowlogid) | **GET** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/flowlogs/{flowLogId} | Retrieve NLB Flow Logs |
| [**datacentersNetworkloadbalancersFlowlogsGet**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersflowlogsget) | **GET** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/flowlogs | List NLB Flow Logs |
| [**datacentersNetworkloadbalancersFlowlogsPatch**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersflowlogspatch) | **PATCH** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/flowlogs/{flowLogId} | Partially modify NLB Flow Logs |
| [**datacentersNetworkloadbalancersFlowlogsPost**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersflowlogspost) | **POST** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/flowlogs | Create NLB Flow Logs |
| [**datacentersNetworkloadbalancersFlowlogsPut**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersflowlogsput) | **PUT** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/flowlogs/{flowLogId} | Modify NLB Flow Logs |
| [**datacentersNetworkloadbalancersForwardingrulesDelete**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersforwardingrulesdelete) | **DELETE** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/forwardingrules/{forwardingRuleId} | Delete NLB forwarding rules |
| [**datacentersNetworkloadbalancersForwardingrulesFindByForwardingRuleId**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersforwardingrulesfindbyforwardingruleid) | **GET** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/forwardingrules/{forwardingRuleId} | Retrieve NLB forwarding rules |
| [**datacentersNetworkloadbalancersForwardingrulesGet**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersforwardingrulesget) | **GET** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/forwardingrules | List NLB forwarding rules |
| [**datacentersNetworkloadbalancersForwardingrulesPatch**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersforwardingrulespatch) | **PATCH** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/forwardingrules/{forwardingRuleId} | Partially modify NLB forwarding rules |
| [**datacentersNetworkloadbalancersForwardingrulesPost**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersforwardingrulespost) | **POST** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/forwardingrules | Create NLB forwarding rules |
| [**datacentersNetworkloadbalancersForwardingrulesPut**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersforwardingrulesput) | **PUT** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId}/forwardingrules/{forwardingRuleId} | Modify NLB forwarding rules |
| [**datacentersNetworkloadbalancersGet**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersget) | **GET** /datacenters/{datacenterId}/networkloadbalancers | List Network Load Balancers |
| [**datacentersNetworkloadbalancersPatch**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancerspatch) | **PATCH** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId} | Partially modify Network Load Balancers |
| [**datacentersNetworkloadbalancersPost**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancerspost) | **POST** /datacenters/{datacenterId}/networkloadbalancers | Create Network Load Balancers |
| [**datacentersNetworkloadbalancersPut**](NetworkLoadBalancersApi.md#datacentersnetworkloadbalancersput) | **PUT** /datacenters/{datacenterId}/networkloadbalancers/{networkLoadBalancerId} | Modify Network Load Balancers |


## datacentersNetworkloadbalancersDelete

> datacentersNetworkloadbalancersDelete(datacenterId, networkLoadBalancerId, opts)

Delete Network Load Balancers

Remove the specified Network Load Balancer from the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Delete Network Load Balancers
api_instance
  .datacentersNetworkloadbalancersDelete({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
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


## datacentersNetworkloadbalancersFindByNetworkLoadBalancerId

> <NetworkLoadBalancer> datacentersNetworkloadbalancersFindByNetworkLoadBalancerId(datacenterId, networkLoadBalancerId, opts)

Retrieve Network Load Balancers

Retrieve the properties of the specified Network Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Retrieve Network Load Balancers
api_instance
  .datacentersNetworkloadbalancersFindByNetworkLoadBalancerId({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancer**](../models/NetworkLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersFlowlogsDelete

> datacentersNetworkloadbalancersFlowlogsDelete(datacenterId, networkLoadBalancerId, flowLogId, opts)

Delete NLB Flow Logs

Delete the specified Network Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Delete NLB Flow Logs
api_instance
  .datacentersNetworkloadbalancersFlowlogsDelete({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    flowLogId: flowLogId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
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


## datacentersNetworkloadbalancersFlowlogsFindByFlowLogId

> <FlowLog> datacentersNetworkloadbalancersFlowlogsFindByFlowLogId(datacenterId, networkLoadBalancerId, flowLogId, opts)

Retrieve NLB Flow Logs

Retrieve the specified Network Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Retrieve NLB Flow Logs
api_instance
  .datacentersNetworkloadbalancersFlowlogsFindByFlowLogId({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    flowLogId: flowLogId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersFlowlogsGet

> <FlowLogs> datacentersNetworkloadbalancersFlowlogsGet(datacenterId, networkLoadBalancerId, opts)

List NLB Flow Logs

List all the Flow Logs for the specified Network Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List NLB Flow Logs
api_instance
  .datacentersNetworkloadbalancersFlowlogsGet({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FlowLogs**](../models/FlowLogs.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersFlowlogsPatch

> <FlowLog> datacentersNetworkloadbalancersFlowlogsPatch(datacenterId, networkLoadBalancerId, flowLogId, networkLoadBalancerFlowLogProperties, opts)

Partially modify NLB Flow Logs

Update the properties of the specified Network Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Partially modify NLB Flow Logs
api_instance
  .datacentersNetworkloadbalancersFlowlogsPatch({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    flowLogId: flowLogId_example,
    networkLoadBalancerFlowLogProperties: networkLoadBalancerFlowLogProperties_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **networkLoadBalancerFlowLogProperties** | [**FlowLogProperties**](../models/FlowLogProperties.md) | The properties of the Flow Log to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersFlowlogsPost

> <FlowLog> datacentersNetworkloadbalancersFlowlogsPost(datacenterId, networkLoadBalancerId, networkLoadBalancerFlowLog, opts)

Create NLB Flow Logs

Add a new Flow Log for the Network Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Create NLB Flow Logs
api_instance
  .datacentersNetworkloadbalancersFlowlogsPost({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    networkLoadBalancerFlowLog: networkLoadBalancerFlowLog_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **networkLoadBalancerFlowLog** | [**FlowLog**](../models/FlowLog.md) | The Flow Log to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNetworkloadbalancersFlowlogsPut

> <FlowLog> datacentersNetworkloadbalancersFlowlogsPut(datacenterId, networkLoadBalancerId, flowLogId, networkLoadBalancerFlowLog, opts)

Modify NLB Flow Logs

Modify the specified Network Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Modify NLB Flow Logs
api_instance
  .datacentersNetworkloadbalancersFlowlogsPut({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    flowLogId: flowLogId_example,
    networkLoadBalancerFlowLog: networkLoadBalancerFlowLog_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **networkLoadBalancerFlowLog** | [**FlowLogPut**](../models/FlowLogPut.md) | The modified NLB Flow Log. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNetworkloadbalancersForwardingrulesDelete

> datacentersNetworkloadbalancersForwardingrulesDelete(datacenterId, networkLoadBalancerId, forwardingRuleId, opts)

Delete NLB forwarding rules

Delete the specified Network Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Delete NLB forwarding rules
api_instance
  .datacentersNetworkloadbalancersForwardingrulesDelete({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    forwardingRuleId: forwardingRuleId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
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


## datacentersNetworkloadbalancersForwardingrulesFindByForwardingRuleId

> <NetworkLoadBalancerForwardingRule> datacentersNetworkloadbalancersForwardingrulesFindByForwardingRuleId(datacenterId, networkLoadBalancerId, forwardingRuleId, opts)

Retrieve NLB forwarding rules

Retrieve the specified Network Load Balance forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Retrieve NLB forwarding rules
api_instance
  .datacentersNetworkloadbalancersForwardingrulesFindByForwardingRuleId({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    forwardingRuleId: forwardingRuleId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancerForwardingRule**](../models/NetworkLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersForwardingrulesGet

> <NetworkLoadBalancerForwardingRules> datacentersNetworkloadbalancersForwardingrulesGet(datacenterId, networkLoadBalancerId, opts)

List NLB forwarding rules

List the forwarding rules for the specified Network Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List NLB forwarding rules
api_instance
  .datacentersNetworkloadbalancersForwardingrulesGet({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancerForwardingRules**](../models/NetworkLoadBalancerForwardingRules.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersForwardingrulesPatch

> <NetworkLoadBalancerForwardingRule> datacentersNetworkloadbalancersForwardingrulesPatch(datacenterId, networkLoadBalancerId, forwardingRuleId, networkLoadBalancerForwardingRuleProperties, opts)

Partially modify NLB forwarding rules

Update the properties of the specified Network Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Partially modify NLB forwarding rules
api_instance
  .datacentersNetworkloadbalancersForwardingrulesPatch({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    forwardingRuleId: forwardingRuleId_example,
    networkLoadBalancerForwardingRuleProperties: networkLoadBalancerForwardingRuleProperties_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
| **networkLoadBalancerForwardingRuleProperties** | [**NetworkLoadBalancerForwardingRuleProperties**](../models/NetworkLoadBalancerForwardingRuleProperties.md) | The properties of the forwarding rule to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancerForwardingRule**](../models/NetworkLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersForwardingrulesPost

> <NetworkLoadBalancerForwardingRule> datacentersNetworkloadbalancersForwardingrulesPost(datacenterId, networkLoadBalancerId, networkLoadBalancerForwardingRule, opts)

Create NLB forwarding rules

Create a forwarding rule for the specified Network Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Create NLB forwarding rules
api_instance
  .datacentersNetworkloadbalancersForwardingrulesPost({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    networkLoadBalancerForwardingRule: networkLoadBalancerForwardingRule_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **networkLoadBalancerForwardingRule** | [**NetworkLoadBalancerForwardingRule**](../models/NetworkLoadBalancerForwardingRule.md) | The forwarding rule to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancerForwardingRule**](../models/NetworkLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNetworkloadbalancersForwardingrulesPut

> <NetworkLoadBalancerForwardingRule> datacentersNetworkloadbalancersForwardingrulesPut(datacenterId, networkLoadBalancerId, forwardingRuleId, networkLoadBalancerForwardingRule, opts)

Modify NLB forwarding rules

Modify the specified Network Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Modify NLB forwarding rules
api_instance
  .datacentersNetworkloadbalancersForwardingrulesPut({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    forwardingRuleId: forwardingRuleId_example,
    networkLoadBalancerForwardingRule: networkLoadBalancerForwardingRule_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
| **networkLoadBalancerForwardingRule** | [**NetworkLoadBalancerForwardingRulePut**](../models/NetworkLoadBalancerForwardingRulePut.md) | The modified NLB forwarding rule. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancerForwardingRule**](../models/NetworkLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNetworkloadbalancersGet

> <NetworkLoadBalancers> datacentersNetworkloadbalancersGet(datacenterId, opts)

List Network Load Balancers

List all the Network Load Balancers within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Network Load Balancers
api_instance
  .datacentersNetworkloadbalancersGet({
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

[**NetworkLoadBalancers**](../models/NetworkLoadBalancers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersPatch

> <NetworkLoadBalancer> datacentersNetworkloadbalancersPatch(datacenterId, networkLoadBalancerId, networkLoadBalancerProperties, opts)

Partially modify Network Load Balancers

Update the properties of the specified Network Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Partially modify Network Load Balancers
api_instance
  .datacentersNetworkloadbalancersPatch({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    networkLoadBalancerProperties: networkLoadBalancerProperties_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **networkLoadBalancerProperties** | [**NetworkLoadBalancerProperties**](../models/NetworkLoadBalancerProperties.md) | The properties of the Network Load Balancer to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancer**](../models/NetworkLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNetworkloadbalancersPost

> <NetworkLoadBalancer> datacentersNetworkloadbalancersPost(datacenterId, networkLoadBalancer, opts)

Create Network Load Balancers

Create a Network Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Create Network Load Balancers
api_instance
  .datacentersNetworkloadbalancersPost({
    datacenterId: datacenterId_example,
    networkLoadBalancer: networkLoadBalancer_example,
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
| **networkLoadBalancer** | [**NetworkLoadBalancer**](../models/NetworkLoadBalancer.md) | The Network Load Balancer to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancer**](../models/NetworkLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNetworkloadbalancersPut

> <NetworkLoadBalancer> datacentersNetworkloadbalancersPut(datacenterId, networkLoadBalancerId, networkLoadBalancer, opts)

Modify Network Load Balancers

Modify the properties of the specified Network Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NetworkLoadBalancersApi(config);
// Modify Network Load Balancers
api_instance
  .datacentersNetworkloadbalancersPut({
    datacenterId: datacenterId_example,
    networkLoadBalancerId: networkLoadBalancerId_example,
    networkLoadBalancer: networkLoadBalancer_example,
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
| **networkLoadBalancerId** | **string** | The unique ID of the Network Load Balancer. | [default to undefined] |
| **networkLoadBalancer** | [**NetworkLoadBalancerPut**](../models/NetworkLoadBalancerPut.md) | The modified Network Load Balancer. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NetworkLoadBalancer**](../models/NetworkLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


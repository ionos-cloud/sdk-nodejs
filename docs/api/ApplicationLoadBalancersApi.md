# ApplicationLoadBalancersApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersApplicationloadbalancersDelete**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersdelete) | **DELETE** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Delete Application Load Balancers |
| [**datacentersApplicationloadbalancersFindByApplicationLoadBalancerId**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersfindbyapplicationloadbalancerid) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Retrieve Application Load Balancers |
| [**datacentersApplicationloadbalancersFlowlogsDelete**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsdelete) | **DELETE** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Delete ALB Flow Logs |
| [**datacentersApplicationloadbalancersFlowlogsFindByFlowLogId**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsfindbyflowlogid) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Retrieve ALB Flow Logs |
| [**datacentersApplicationloadbalancersFlowlogsGet**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsget) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs | List ALB Flow Logs |
| [**datacentersApplicationloadbalancersFlowlogsPatch**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogspatch) | **PATCH** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Partially modify ALB Flow Logs |
| [**datacentersApplicationloadbalancersFlowlogsPost**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogspost) | **POST** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs | Create ALB Flow Logs |
| [**datacentersApplicationloadbalancersFlowlogsPut**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsput) | **PUT** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Modify ALB Flow Logs |
| [**datacentersApplicationloadbalancersForwardingrulesDelete**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesdelete) | **DELETE** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Delete ALB forwarding rules |
| [**datacentersApplicationloadbalancersForwardingrulesFindByForwardingRuleId**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesfindbyforwardingruleid) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Retrieve ALB forwarding rules |
| [**datacentersApplicationloadbalancersForwardingrulesGet**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesget) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules | List ALB forwarding rules |
| [**datacentersApplicationloadbalancersForwardingrulesPatch**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulespatch) | **PATCH** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Partially modify ALB forwarding rules |
| [**datacentersApplicationloadbalancersForwardingrulesPost**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulespost) | **POST** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules | Create ALB forwarding rules |
| [**datacentersApplicationloadbalancersForwardingrulesPut**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesput) | **PUT** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Modify ALB forwarding rules |
| [**datacentersApplicationloadbalancersGet**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersget) | **GET** /datacenters/{datacenterId}/applicationloadbalancers | List Application Load Balancers |
| [**datacentersApplicationloadbalancersPatch**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancerspatch) | **PATCH** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Partially modify Application Load Balancers |
| [**datacentersApplicationloadbalancersPost**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancerspost) | **POST** /datacenters/{datacenterId}/applicationloadbalancers | Create Application Load Balancers |
| [**datacentersApplicationloadbalancersPut**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersput) | **PUT** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Modify Application Load Balancers |


## datacentersApplicationloadbalancersDelete

> datacentersApplicationloadbalancersDelete(datacenterId, applicationLoadBalancerId, opts)

Delete Application Load Balancers

Remove the specified Application Load Balancer from the data center..

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Delete Application Load Balancers
api_instance
  .datacentersApplicationloadbalancersDelete({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
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


## datacentersApplicationloadbalancersFindByApplicationLoadBalancerId

> <ApplicationLoadBalancer> datacentersApplicationloadbalancersFindByApplicationLoadBalancerId(datacenterId, applicationLoadBalancerId, opts)

Retrieve Application Load Balancers

Retrieve the properties of the specified Application Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Retrieve Application Load Balancers
api_instance
  .datacentersApplicationloadbalancersFindByApplicationLoadBalancerId({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancer**](../models/ApplicationLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersApplicationloadbalancersFlowlogsDelete

> datacentersApplicationloadbalancersFlowlogsDelete(datacenterId, applicationLoadBalancerId, flowLogId, opts)

Delete ALB Flow Logs

Delete the specified Application Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Delete ALB Flow Logs
api_instance
  .datacentersApplicationloadbalancersFlowlogsDelete({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
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


## datacentersApplicationloadbalancersFlowlogsFindByFlowLogId

> <FlowLog> datacentersApplicationloadbalancersFlowlogsFindByFlowLogId(datacenterId, applicationLoadBalancerId, flowLogId, opts)

Retrieve ALB Flow Logs

Retrieve the specified Application Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Retrieve ALB Flow Logs
api_instance
  .datacentersApplicationloadbalancersFlowlogsFindByFlowLogId({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
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


## datacentersApplicationloadbalancersFlowlogsGet

> <FlowLogs> datacentersApplicationloadbalancersFlowlogsGet(datacenterId, applicationLoadBalancerId, opts)

List ALB Flow Logs

List the Flow Logs for the specified Application Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List ALB Flow Logs
api_instance
  .datacentersApplicationloadbalancersFlowlogsGet({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
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


## datacentersApplicationloadbalancersFlowlogsPatch

> <FlowLog> datacentersApplicationloadbalancersFlowlogsPatch(datacenterId, applicationLoadBalancerId, flowLogId, applicationLoadBalancerFlowLogProperties, opts)

Partially modify ALB Flow Logs

Update the properties of the specified Application Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Partially modify ALB Flow Logs
api_instance
  .datacentersApplicationloadbalancersFlowlogsPatch({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    flowLogId: flowLogId_example,
    applicationLoadBalancerFlowLogProperties: applicationLoadBalancerFlowLogProperties_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **applicationLoadBalancerFlowLogProperties** | [**FlowLogProperties**](../models/FlowLogProperties.md) | The properties of the ALB Flow Log to be updated. |  |
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


## datacentersApplicationloadbalancersFlowlogsPost

> <FlowLog> datacentersApplicationloadbalancersFlowlogsPost(datacenterId, applicationLoadBalancerId, applicationLoadBalancerFlowLog, opts)

Create ALB Flow Logs

Add a new Flow Log for the Application Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Create ALB Flow Logs
api_instance
  .datacentersApplicationloadbalancersFlowlogsPost({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    applicationLoadBalancerFlowLog: applicationLoadBalancerFlowLog_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **applicationLoadBalancerFlowLog** | [**FlowLog**](../models/FlowLog.md) | The Flow Log to create. |  |
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


## datacentersApplicationloadbalancersFlowlogsPut

> <FlowLog> datacentersApplicationloadbalancersFlowlogsPut(datacenterId, applicationLoadBalancerId, flowLogId, applicationLoadBalancerFlowLog, opts)

Modify ALB Flow Logs

Modify the specified Application Load Balancer Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Modify ALB Flow Logs
api_instance
  .datacentersApplicationloadbalancersFlowlogsPut({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    flowLogId: flowLogId_example,
    applicationLoadBalancerFlowLog: applicationLoadBalancerFlowLog_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **applicationLoadBalancerFlowLog** | [**FlowLogPut**](../models/FlowLogPut.md) | The modified ALB Flow Log. |  |
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


## datacentersApplicationloadbalancersForwardingrulesDelete

> datacentersApplicationloadbalancersForwardingrulesDelete(datacenterId, applicationLoadBalancerId, forwardingRuleId, opts)

Delete ALB forwarding rules

Delete the specified Application Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Delete ALB forwarding rules
api_instance
  .datacentersApplicationloadbalancersForwardingrulesDelete({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
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


## datacentersApplicationloadbalancersForwardingrulesFindByForwardingRuleId

> <ApplicationLoadBalancerForwardingRule> datacentersApplicationloadbalancersForwardingrulesFindByForwardingRuleId(datacenterId, applicationLoadBalancerId, forwardingRuleId, opts)

Retrieve ALB forwarding rules

Retrieve the specified Application Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Retrieve ALB forwarding rules
api_instance
  .datacentersApplicationloadbalancersForwardingrulesFindByForwardingRuleId({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancerForwardingRule**](../models/ApplicationLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersApplicationloadbalancersForwardingrulesGet

> <ApplicationLoadBalancerForwardingRules> datacentersApplicationloadbalancersForwardingrulesGet(datacenterId, applicationLoadBalancerId, opts)

List ALB forwarding rules

List the forwarding rules for the specified Application Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List ALB forwarding rules
api_instance
  .datacentersApplicationloadbalancersForwardingrulesGet({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancerForwardingRules**](../models/ApplicationLoadBalancerForwardingRules.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersApplicationloadbalancersForwardingrulesPatch

> <ApplicationLoadBalancerForwardingRule> datacentersApplicationloadbalancersForwardingrulesPatch(datacenterId, applicationLoadBalancerId, forwardingRuleId, applicationLoadBalancerForwardingRuleProperties, opts)

Partially modify ALB forwarding rules

Update the properties of the specified Application Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Partially modify ALB forwarding rules
api_instance
  .datacentersApplicationloadbalancersForwardingrulesPatch({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    forwardingRuleId: forwardingRuleId_example,
    applicationLoadBalancerForwardingRuleProperties: applicationLoadBalancerForwardingRuleProperties_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
| **applicationLoadBalancerForwardingRuleProperties** | [**ApplicationLoadBalancerForwardingRuleProperties**](../models/ApplicationLoadBalancerForwardingRuleProperties.md) | The properties of the forwarding rule to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancerForwardingRule**](../models/ApplicationLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersApplicationloadbalancersForwardingrulesPost

> <ApplicationLoadBalancerForwardingRule> datacentersApplicationloadbalancersForwardingrulesPost(datacenterId, applicationLoadBalancerId, applicationLoadBalancerForwardingRule, opts)

Create ALB forwarding rules

Create a forwarding rule for the Application Load Balancer.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Create ALB forwarding rules
api_instance
  .datacentersApplicationloadbalancersForwardingrulesPost({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    applicationLoadBalancerForwardingRule: applicationLoadBalancerForwardingRule_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **applicationLoadBalancerForwardingRule** | [**ApplicationLoadBalancerForwardingRule**](../models/ApplicationLoadBalancerForwardingRule.md) | The forwarding rule to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancerForwardingRule**](../models/ApplicationLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersApplicationloadbalancersForwardingrulesPut

> <ApplicationLoadBalancerForwardingRule> datacentersApplicationloadbalancersForwardingrulesPut(datacenterId, applicationLoadBalancerId, forwardingRuleId, applicationLoadBalancerForwardingRule, opts)

Modify ALB forwarding rules

Modify the specified Application Load Balancer forwarding rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Modify ALB forwarding rules
api_instance
  .datacentersApplicationloadbalancersForwardingrulesPut({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    forwardingRuleId: forwardingRuleId_example,
    applicationLoadBalancerForwardingRule: applicationLoadBalancerForwardingRule_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **forwardingRuleId** | **string** | The unique ID of the forwarding rule. | [default to undefined] |
| **applicationLoadBalancerForwardingRule** | [**ApplicationLoadBalancerForwardingRulePut**](../models/ApplicationLoadBalancerForwardingRulePut.md) | The modified ALB forwarding rule. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancerForwardingRule**](../models/ApplicationLoadBalancerForwardingRule.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersApplicationloadbalancersGet

> <ApplicationLoadBalancers> datacentersApplicationloadbalancersGet(datacenterId, opts)

List Application Load Balancers

List all Application Load Balancers within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Application Load Balancers
api_instance
  .datacentersApplicationloadbalancersGet({
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

[**ApplicationLoadBalancers**](../models/ApplicationLoadBalancers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersApplicationloadbalancersPatch

> <ApplicationLoadBalancer> datacentersApplicationloadbalancersPatch(datacenterId, applicationLoadBalancerId, applicationLoadBalancerProperties, opts)

Partially modify Application Load Balancers

Update the properties of the specified Application Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Partially modify Application Load Balancers
api_instance
  .datacentersApplicationloadbalancersPatch({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    applicationLoadBalancerProperties: applicationLoadBalancerProperties_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **applicationLoadBalancerProperties** | [**ApplicationLoadBalancerProperties**](../models/ApplicationLoadBalancerProperties.md) | The Application Load Balancer properties to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancer**](../models/ApplicationLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersApplicationloadbalancersPost

> <ApplicationLoadBalancer> datacentersApplicationloadbalancersPost(datacenterId, applicationLoadBalancer, opts)

Create Application Load Balancers

Create an Application Load Balancer within the datacenter.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Create Application Load Balancers
api_instance
  .datacentersApplicationloadbalancersPost({
    datacenterId: datacenterId_example,
    applicationLoadBalancer: applicationLoadBalancer_example,
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
| **applicationLoadBalancer** | [**ApplicationLoadBalancer**](../models/ApplicationLoadBalancer.md) | The Application Load Balancer to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancer**](../models/ApplicationLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersApplicationloadbalancersPut

> <ApplicationLoadBalancer> datacentersApplicationloadbalancersPut(datacenterId, applicationLoadBalancerId, applicationLoadBalancer, opts)

Modify Application Load Balancers

Modify the properties of the specified Application Load Balancer within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ApplicationLoadBalancersApi(config);
// Modify Application Load Balancers
api_instance
  .datacentersApplicationloadbalancersPut({
    datacenterId: datacenterId_example,
    applicationLoadBalancerId: applicationLoadBalancerId_example,
    applicationLoadBalancer: applicationLoadBalancer_example,
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
| **applicationLoadBalancerId** | **string** | The unique ID of the Application Load Balancer. | [default to undefined] |
| **applicationLoadBalancer** | [**ApplicationLoadBalancerPut**](../models/ApplicationLoadBalancerPut.md) | The modified Application Load Balancer. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**ApplicationLoadBalancer**](../models/ApplicationLoadBalancer.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


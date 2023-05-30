# ApplicationLoadBalancersApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersApplicationloadbalancersDelete**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersdelete) | **DELETE** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Delete an Application Load Balancer by ID |
| [**datacentersApplicationloadbalancersFindByApplicationLoadBalancerId**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersfindbyapplicationloadbalancerid) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Get an Application Load Balancer by ID |
| [**datacentersApplicationloadbalancersFlowlogsDelete**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsdelete) | **DELETE** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Delete an ALB Flow Log by ID |
| [**datacentersApplicationloadbalancersFlowlogsFindByFlowLogId**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsfindbyflowlogid) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Get an ALB Flow Log by ID |
| [**datacentersApplicationloadbalancersFlowlogsGet**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsget) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs | Get ALB Flow Logs |
| [**datacentersApplicationloadbalancersFlowlogsPatch**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogspatch) | **PATCH** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Partially Modify an ALB Flow Log by ID |
| [**datacentersApplicationloadbalancersFlowlogsPost**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogspost) | **POST** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs | Create an ALB Flow Log |
| [**datacentersApplicationloadbalancersFlowlogsPut**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersflowlogsput) | **PUT** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/flowlogs/{flowLogId} | Modify an ALB Flow Log by ID |
| [**datacentersApplicationloadbalancersForwardingrulesDelete**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesdelete) | **DELETE** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Delete an ALB Forwarding Rule by ID |
| [**datacentersApplicationloadbalancersForwardingrulesFindByForwardingRuleId**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesfindbyforwardingruleid) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Get an ALB Forwarding Rule by ID |
| [**datacentersApplicationloadbalancersForwardingrulesGet**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesget) | **GET** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules | Get ALB Forwarding Rules |
| [**datacentersApplicationloadbalancersForwardingrulesPatch**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulespatch) | **PATCH** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Partially modify an ALB Forwarding Rule by ID |
| [**datacentersApplicationloadbalancersForwardingrulesPost**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulespost) | **POST** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules | Create an ALB Forwarding Rule |
| [**datacentersApplicationloadbalancersForwardingrulesPut**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersforwardingrulesput) | **PUT** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId}/forwardingrules/{forwardingRuleId} | Modify an ALB Forwarding Rule by ID |
| [**datacentersApplicationloadbalancersGet**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersget) | **GET** /datacenters/{datacenterId}/applicationloadbalancers | Get Application Load Balancers |
| [**datacentersApplicationloadbalancersPatch**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancerspatch) | **PATCH** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Partially Modify an Application Load Balancer by ID |
| [**datacentersApplicationloadbalancersPost**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancerspost) | **POST** /datacenters/{datacenterId}/applicationloadbalancers | Create an Application Load Balancer |
| [**datacentersApplicationloadbalancersPut**](ApplicationLoadBalancersApi.md#datacentersapplicationloadbalancersput) | **PUT** /datacenters/{datacenterId}/applicationloadbalancers/{applicationLoadBalancerId} | Modify an Application Load Balancer by ID |


## datacentersApplicationloadbalancersDelete

> datacentersApplicationloadbalancersDelete(datacenterId, applicationLoadBalancerId, opts)

Delete an Application Load Balancer by ID

Removes the specified Application Load Balancer from the data center.

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
// Delete an Application Load Balancer by ID
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

Get an Application Load Balancer by ID

Retrieves the properties of the specified Application Load Balancer within the data center.

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
// Get an Application Load Balancer by ID
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

Delete an ALB Flow Log by ID

Deletes the Application Load Balancer flow log specified by its ID.

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
// Delete an ALB Flow Log by ID
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
| **flowLogId** | **string** | The unique ID of the flow log. | [default to undefined] |
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

Get an ALB Flow Log by ID

Retrieves the Application Load Balancer flow log specified by its ID.

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
// Get an ALB Flow Log by ID
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
| **flowLogId** | **string** | The unique ID of the flow log. | [default to undefined] |
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

Get ALB Flow Logs

Retrieves the flow logs for the specified Application Load Balancer.

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
// Get ALB Flow Logs
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

Partially Modify an ALB Flow Log by ID

Updates the properties of the Application Load Balancer flow log specified by its ID.

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
// Partially Modify an ALB Flow Log by ID
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
| **flowLogId** | **string** | The unique ID of the flow log. | [default to undefined] |
| **applicationLoadBalancerFlowLogProperties** | [**FlowLogProperties**](../models/FlowLogProperties.md) | The properties of the ALB flow log to be updated. |  |
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

Create an ALB Flow Log

Creates a flow log for the Application Load Balancer specified by ID.

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
// Create an ALB Flow Log
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
| **applicationLoadBalancerFlowLog** | [**FlowLog**](../models/FlowLog.md) | The flow log to create. |  |
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

Modify an ALB Flow Log by ID

Modifies the Application Load Balancer flow log specified by its ID.

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
// Modify an ALB Flow Log by ID
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
| **flowLogId** | **string** | The unique ID of the flow log. | [default to undefined] |
| **applicationLoadBalancerFlowLog** | [**FlowLogPut**](../models/FlowLogPut.md) | The modified ALB flow log. |  |
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

Delete an ALB Forwarding Rule by ID

Deletes the Application Load Balancer forwarding rule specified by its ID.

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
// Delete an ALB Forwarding Rule by ID
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

Get an ALB Forwarding Rule by ID

Retrieves the Application Load Balancer forwarding rule specified by its ID.

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
// Get an ALB Forwarding Rule by ID
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

Get ALB Forwarding Rules

Lists the forwarding rules of the specified Application Load Balancer.

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
// Get ALB Forwarding Rules
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

Partially modify an ALB Forwarding Rule by ID

Updates the properties of the Application Load Balancer forwarding rule specified by its ID.

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
// Partially modify an ALB Forwarding Rule by ID
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

Create an ALB Forwarding Rule

Creates a forwarding rule for the specified Application Load Balancer.

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
// Create an ALB Forwarding Rule
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

Modify an ALB Forwarding Rule by ID

Modifies the Application Load Balancer forwarding rule specified by its ID.

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
// Modify an ALB Forwarding Rule by ID
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

Get Application Load Balancers

Lists all Application Load Balancers within a data center.

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
// Get Application Load Balancers
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

Partially Modify an Application Load Balancer by ID

Updates the properties of the specified Application Load Balancer within the data center.

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
// Partially Modify an Application Load Balancer by ID
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

Create an Application Load Balancer

Creates an Application Load Balancer within the data center.

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
// Create an Application Load Balancer
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

Modify an Application Load Balancer by ID

Modifies the properties of the specified Application Load Balancer within the data center.

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
// Modify an Application Load Balancer by ID
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


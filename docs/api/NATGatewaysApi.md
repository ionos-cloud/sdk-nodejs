# NATGatewaysApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersNatgatewaysDelete**](NATGatewaysApi.md#datacentersnatgatewaysdelete) | **DELETE** /datacenters/{datacenterId}/natgateways/{natGatewayId} | Delete NAT Gateways |
| [**datacentersNatgatewaysFindByNatGatewayId**](NATGatewaysApi.md#datacentersnatgatewaysfindbynatgatewayid) | **GET** /datacenters/{datacenterId}/natgateways/{natGatewayId} | Retrieve NAT Gateways |
| [**datacentersNatgatewaysFlowlogsDelete**](NATGatewaysApi.md#datacentersnatgatewaysflowlogsdelete) | **DELETE** /datacenters/{datacenterId}/natgateways/{natGatewayId}/flowlogs/{flowLogId} | Delete NAT Gateway Flow Logs |
| [**datacentersNatgatewaysFlowlogsFindByFlowLogId**](NATGatewaysApi.md#datacentersnatgatewaysflowlogsfindbyflowlogid) | **GET** /datacenters/{datacenterId}/natgateways/{natGatewayId}/flowlogs/{flowLogId} | Retrieve NAT Gateway Flow Logs |
| [**datacentersNatgatewaysFlowlogsGet**](NATGatewaysApi.md#datacentersnatgatewaysflowlogsget) | **GET** /datacenters/{datacenterId}/natgateways/{natGatewayId}/flowlogs | List NAT Gateway Flow Logs |
| [**datacentersNatgatewaysFlowlogsPatch**](NATGatewaysApi.md#datacentersnatgatewaysflowlogspatch) | **PATCH** /datacenters/{datacenterId}/natgateways/{natGatewayId}/flowlogs/{flowLogId} | Partially modify NAT Gateway Flow Logs |
| [**datacentersNatgatewaysFlowlogsPost**](NATGatewaysApi.md#datacentersnatgatewaysflowlogspost) | **POST** /datacenters/{datacenterId}/natgateways/{natGatewayId}/flowlogs | Create a NAT Gateway Flow Log |
| [**datacentersNatgatewaysFlowlogsPut**](NATGatewaysApi.md#datacentersnatgatewaysflowlogsput) | **PUT** /datacenters/{datacenterId}/natgateways/{natGatewayId}/flowlogs/{flowLogId} | Modify NAT Gateway Flow Logs |
| [**datacentersNatgatewaysGet**](NATGatewaysApi.md#datacentersnatgatewaysget) | **GET** /datacenters/{datacenterId}/natgateways | List NAT Gateways |
| [**datacentersNatgatewaysPatch**](NATGatewaysApi.md#datacentersnatgatewayspatch) | **PATCH** /datacenters/{datacenterId}/natgateways/{natGatewayId} | Partially modify NAT Gateways |
| [**datacentersNatgatewaysPost**](NATGatewaysApi.md#datacentersnatgatewayspost) | **POST** /datacenters/{datacenterId}/natgateways | Create a NAT Gateway |
| [**datacentersNatgatewaysPut**](NATGatewaysApi.md#datacentersnatgatewaysput) | **PUT** /datacenters/{datacenterId}/natgateways/{natGatewayId} | Modify NAT Gateways |
| [**datacentersNatgatewaysRulesDelete**](NATGatewaysApi.md#datacentersnatgatewaysrulesdelete) | **DELETE** /datacenters/{datacenterId}/natgateways/{natGatewayId}/rules/{natGatewayRuleId} | Delete NAT Gateway rules |
| [**datacentersNatgatewaysRulesFindByNatGatewayRuleId**](NATGatewaysApi.md#datacentersnatgatewaysrulesfindbynatgatewayruleid) | **GET** /datacenters/{datacenterId}/natgateways/{natGatewayId}/rules/{natGatewayRuleId} | Retrieve NAT Gateway rules |
| [**datacentersNatgatewaysRulesGet**](NATGatewaysApi.md#datacentersnatgatewaysrulesget) | **GET** /datacenters/{datacenterId}/natgateways/{natGatewayId}/rules | List NAT Gateway rules |
| [**datacentersNatgatewaysRulesPatch**](NATGatewaysApi.md#datacentersnatgatewaysrulespatch) | **PATCH** /datacenters/{datacenterId}/natgateways/{natGatewayId}/rules/{natGatewayRuleId} | Partially Modify a NAT Gateway Rule by ID |
| [**datacentersNatgatewaysRulesPost**](NATGatewaysApi.md#datacentersnatgatewaysrulespost) | **POST** /datacenters/{datacenterId}/natgateways/{natGatewayId}/rules | Create a NAT Gateway Rule |
| [**datacentersNatgatewaysRulesPut**](NATGatewaysApi.md#datacentersnatgatewaysrulesput) | **PUT** /datacenters/{datacenterId}/natgateways/{natGatewayId}/rules/{natGatewayRuleId} | Modify a NAT Gateway Rule by ID |


## datacentersNatgatewaysDelete

> datacentersNatgatewaysDelete(datacenterId, natGatewayId, opts)

Delete NAT Gateways

Remove the specified NAT Gateway from the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Delete NAT Gateways
api_instance
  .datacentersNatgatewaysDelete({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysFindByNatGatewayId

> <NatGateway> datacentersNatgatewaysFindByNatGatewayId(datacenterId, natGatewayId, opts)

Retrieve NAT Gateways

Retrieve the properties of the specified NAT Gateway within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Retrieve NAT Gateways
api_instance
  .datacentersNatgatewaysFindByNatGatewayId({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGateway**](../models/NatGateway.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysFlowlogsDelete

> datacentersNatgatewaysFlowlogsDelete(datacenterId, natGatewayId, flowLogId, opts)

Delete NAT Gateway Flow Logs

Delete the specified NAT Gateway Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Delete NAT Gateway Flow Logs
api_instance
  .datacentersNatgatewaysFlowlogsDelete({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    flowLogId: flowLogId_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

nil (empty response body)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysFlowlogsFindByFlowLogId

> <FlowLog> datacentersNatgatewaysFlowlogsFindByFlowLogId(datacenterId, natGatewayId, flowLogId, opts)

Retrieve NAT Gateway Flow Logs

Retrieve the specified NAT Gateway Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Retrieve NAT Gateway Flow Logs
api_instance
  .datacentersNatgatewaysFlowlogsFindByFlowLogId({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    flowLogId: flowLogId_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysFlowlogsGet

> <FlowLogs> datacentersNatgatewaysFlowlogsGet(datacenterId, natGatewayId, opts)

List NAT Gateway Flow Logs

List all the Flow Logs for the specified NAT Gateway.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List NAT Gateway Flow Logs
api_instance
  .datacentersNatgatewaysFlowlogsGet({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    pretty: true,
    depth: 56,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**FlowLogs**](../models/FlowLogs.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysFlowlogsPatch

> <FlowLog> datacentersNatgatewaysFlowlogsPatch(datacenterId, natGatewayId, flowLogId, natGatewayFlowLogProperties, opts)

Partially modify NAT Gateway Flow Logs

Update the properties of the specified NAT Gateway Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Partially modify NAT Gateway Flow Logs
api_instance
  .datacentersNatgatewaysFlowlogsPatch({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    flowLogId: flowLogId_example,
    natGatewayFlowLogProperties: natGatewayFlowLogProperties_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **natGatewayFlowLogProperties** | [**FlowLogProperties**](../models/FlowLogProperties.md) | The properties of the Flow Log to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysFlowlogsPost

> <FlowLog> datacentersNatgatewaysFlowlogsPost(datacenterId, natGatewayId, natGatewayFlowLog, opts)

Create a NAT Gateway Flow Log

Adds a new Flow Log to the specified NAT Gateway.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Create a NAT Gateway Flow Log
api_instance
  .datacentersNatgatewaysFlowlogsPost({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayFlowLog: natGatewayFlowLog_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayFlowLog** | [**FlowLog**](../models/FlowLog.md) | The Flow Log to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNatgatewaysFlowlogsPut

> <FlowLog> datacentersNatgatewaysFlowlogsPut(datacenterId, natGatewayId, flowLogId, natGatewayFlowLog, opts)

Modify NAT Gateway Flow Logs

Modify the specified NAT Gateway Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Modify NAT Gateway Flow Logs
api_instance
  .datacentersNatgatewaysFlowlogsPut({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    flowLogId: flowLogId_example,
    natGatewayFlowLog: natGatewayFlowLog_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **flowLogId** | **string** | The unique ID of the Flow Log. | [default to undefined] |
| **natGatewayFlowLog** | [**FlowLogPut**](../models/FlowLogPut.md) | The modified NAT Gateway Flow Log. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNatgatewaysGet

> <NatGateways> datacentersNatgatewaysGet(datacenterId, opts)

List NAT Gateways

List all NAT Gateways within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List NAT Gateways
api_instance
  .datacentersNatgatewaysGet({
    datacenterId: datacenterId_example,
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
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGateways**](../models/NatGateways.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysPatch

> <NatGateway> datacentersNatgatewaysPatch(datacenterId, natGatewayId, natGatewayProperties, opts)

Partially modify NAT Gateways

Update the properties of the specified NAT Gateway within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Partially modify NAT Gateways
api_instance
  .datacentersNatgatewaysPatch({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayProperties: natGatewayProperties_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayProperties** | [**NatGatewayProperties**](../models/NatGatewayProperties.md) | The properties of the NAT Gateway to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGateway**](../models/NatGateway.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysPost

> <NatGateway> datacentersNatgatewaysPost(datacenterId, natGateway, opts)

Create a NAT Gateway

Creates a NAT Gateway within the data center.  This operation is restricted to contract owner, admin, and users with \'createInternetAccess\' privileges.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Create a NAT Gateway
api_instance
  .datacentersNatgatewaysPost({
    datacenterId: datacenterId_example,
    natGateway: natGateway_example,
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
| **natGateway** | [**NatGateway**](../models/NatGateway.md) | The NAT Gateway to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGateway**](../models/NatGateway.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNatgatewaysPut

> <NatGateway> datacentersNatgatewaysPut(datacenterId, natGatewayId, natGateway, opts)

Modify NAT Gateways

Modify the properties of the specified NAT Gateway within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Modify NAT Gateways
api_instance
  .datacentersNatgatewaysPut({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGateway: natGateway_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGateway** | [**NatGatewayPut**](../models/NatGatewayPut.md) | The modified NAT Gateway. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGateway**](../models/NatGateway.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNatgatewaysRulesDelete

> datacentersNatgatewaysRulesDelete(datacenterId, natGatewayId, natGatewayRuleId, opts)

Delete NAT Gateway rules

Delete the specified NAT Gateway rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Delete NAT Gateway rules
api_instance
  .datacentersNatgatewaysRulesDelete({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayRuleId: natGatewayRuleId_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayRuleId** | **string** | The unique ID of the NAT Gateway rule. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysRulesFindByNatGatewayRuleId

> <NatGatewayRule> datacentersNatgatewaysRulesFindByNatGatewayRuleId(datacenterId, natGatewayId, natGatewayRuleId, opts)

Retrieve NAT Gateway rules

Retrieve the properties of the specified NAT Gateway rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Retrieve NAT Gateway rules
api_instance
  .datacentersNatgatewaysRulesFindByNatGatewayRuleId({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayRuleId: natGatewayRuleId_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayRuleId** | **string** | The unique ID of the NAT Gateway rule. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGatewayRule**](../models/NatGatewayRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysRulesGet

> <NatGatewayRules> datacentersNatgatewaysRulesGet(datacenterId, natGatewayId, opts)

List NAT Gateway rules

List all rules for the specified NAT Gateway.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List NAT Gateway rules
api_instance
  .datacentersNatgatewaysRulesGet({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGatewayRules**](../models/NatGatewayRules.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysRulesPatch

> <NatGatewayRule> datacentersNatgatewaysRulesPatch(datacenterId, natGatewayId, natGatewayRuleId, natGatewayRuleProperties, opts)

Partially Modify a NAT Gateway Rule by ID

Updates the properties of the specified NAT Gateway rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Partially Modify a NAT Gateway Rule by ID
api_instance
  .datacentersNatgatewaysRulesPatch({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayRuleId: natGatewayRuleId_example,
    natGatewayRuleProperties: natGatewayRuleProperties_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayRuleId** | **string** | The unique ID of the NAT Gateway rule. | [default to undefined] |
| **natGatewayRuleProperties** | [**NatGatewayRuleProperties**](../models/NatGatewayRuleProperties.md) | The properties of the NAT Gateway rule to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGatewayRule**](../models/NatGatewayRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersNatgatewaysRulesPost

> <NatGatewayRule> datacentersNatgatewaysRulesPost(datacenterId, natGatewayId, natGatewayRule, opts)

Create a NAT Gateway Rule

Creates a rule for the specified NAT Gateway.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Create a NAT Gateway Rule
api_instance
  .datacentersNatgatewaysRulesPost({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayRule: natGatewayRule_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayRule** | [**NatGatewayRule**](../models/NatGatewayRule.md) | The NAT Gateway rule to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGatewayRule**](../models/NatGatewayRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersNatgatewaysRulesPut

> <NatGatewayRule> datacentersNatgatewaysRulesPut(datacenterId, natGatewayId, natGatewayRuleId, natGatewayRule, opts)

Modify a NAT Gateway Rule by ID

Modify the specified NAT Gateway rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NATGatewaysApi(config);
// Modify a NAT Gateway Rule by ID
api_instance
  .datacentersNatgatewaysRulesPut({
    datacenterId: datacenterId_example,
    natGatewayId: natGatewayId_example,
    natGatewayRuleId: natGatewayRuleId_example,
    natGatewayRule: natGatewayRule_example,
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
| **natGatewayId** | **string** | The unique ID of the NAT Gateway. | [default to undefined] |
| **natGatewayRuleId** | **string** | The unique ID of the NAT Gateway rule. | [default to undefined] |
| **natGatewayRule** | [**NatGatewayRulePut**](../models/NatGatewayRulePut.md) | The modified NAT Gateway rule. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**NatGatewayRule**](../models/NatGatewayRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


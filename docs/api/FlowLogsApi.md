# FlowLogsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersServersNicsFlowlogsDelete**](FlowLogsApi.md#datacentersserversnicsflowlogsdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/flowlogs/{flowlogId} | Delete a Flow Log |
| [**datacentersServersNicsFlowlogsFindById**](FlowLogsApi.md#datacentersserversnicsflowlogsfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/flowlogs/{flowlogId} | Retrieve a Flow Log |
| [**datacentersServersNicsFlowlogsGet**](FlowLogsApi.md#datacentersserversnicsflowlogsget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/flowlogs | List Flow Logs |
| [**datacentersServersNicsFlowlogsPatch**](FlowLogsApi.md#datacentersserversnicsflowlogspatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/flowlogs/{flowlogId} | Partially update a Flow Log |
| [**datacentersServersNicsFlowlogsPost**](FlowLogsApi.md#datacentersserversnicsflowlogspost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/flowlogs | Create a Flow Log |
| [**datacentersServersNicsFlowlogsPut**](FlowLogsApi.md#datacentersserversnicsflowlogsput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/flowlogs/{flowlogId} | Modify a Flow Log |


## datacentersServersNicsFlowlogsDelete

> datacentersServersNicsFlowlogsDelete(datacenterId, serverId, nicId, flowlogId, opts)

Delete a Flow Log

Removes the specified Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FlowLogsApi(config);
// Delete a Flow Log
api_instance
  .datacentersServersNicsFlowlogsDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    flowlogId: flowlogId_example,
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
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **flowlogId** | **string** | The unique ID of the Flow Log | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFlowlogsFindById

> <FlowLog> datacentersServersNicsFlowlogsFindById(datacenterId, serverId, nicId, flowlogId, opts)

Retrieve a Flow Log

Retrieves the attributes of a given Flow Log.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FlowLogsApi(config);
// Retrieve a Flow Log
api_instance
  .datacentersServersNicsFlowlogsFindById({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    flowlogId: flowlogId_example,
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
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **flowlogId** | **string** | The unique ID of the Flow Log | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFlowlogsGet

> <FlowLogs> datacentersServersNicsFlowlogsGet(datacenterId, serverId, nicId, opts)

List Flow Logs

Retrieves a list of Flow Logs associated with a particular network interface.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FlowLogsApi(config);
// List Flow Logs
api_instance
  .datacentersServersNicsFlowlogsGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    pretty: true,
    depth: 56,
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
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the Server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (use together with limit for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**FlowLogs**](../models/FlowLogs.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersNicsFlowlogsPatch

> <FlowLog> datacentersServersNicsFlowlogsPatch(datacenterId, serverId, nicId, flowlogId, flowlog, opts)

Partially update a Flow Log

This will partially update a Flow Log record.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FlowLogsApi(config);
// Partially update a Flow Log
api_instance
  .datacentersServersNicsFlowlogsPatch({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    flowlogId: flowlogId_example,
    flowlog: flowlog_example,
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
| **serverId** | **string** | The unique ID of the server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **flowlogId** | **string** | The unique ID of the Flow Log | [default to undefined] |
| **flowlog** | [**FlowLogProperties**](../models/FlowLogProperties.md) | Modified Flow Log |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsFlowlogsPost

> <FlowLog> datacentersServersNicsFlowlogsPost(datacenterId, serverId, nicId, flowlog, opts)

Create a Flow Log

This will add a Flow Log to the network interface.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FlowLogsApi(config);
// Create a Flow Log
api_instance
  .datacentersServersNicsFlowlogsPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    flowlog: flowlog_example,
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
| **serverId** | **string** | The unique ID of the server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **flowlog** | [**FlowLog**](../models/FlowLog.md) | Flow Log to be created |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsFlowlogsPut

> <FlowLog> datacentersServersNicsFlowlogsPut(datacenterId, serverId, nicId, flowlogId, flowlog, opts)

Modify a Flow Log

This will update a Flow Log record.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.FlowLogsApi(config);
// Modify a Flow Log
api_instance
  .datacentersServersNicsFlowlogsPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    flowlogId: flowlogId_example,
    flowlog: flowlog_example,
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
| **serverId** | **string** | The unique ID of the server | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC | [default to undefined] |
| **flowlogId** | **string** | The unique ID of the Flow Log | [default to undefined] |
| **flowlog** | [**FlowLogPut**](../models/FlowLogPut.md) | Modified Flow Log |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FlowLog**](../models/FlowLog.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


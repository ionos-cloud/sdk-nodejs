# PrivateCrossConnectsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**pccsDelete**](PrivateCrossConnectsApi.md#pccsdelete) | **DELETE** /pccs/{pccId} | Delete Private Cross-Connects |
| [**pccsFindById**](PrivateCrossConnectsApi.md#pccsfindbyid) | **GET** /pccs/{pccId} | Retrieve a Cross Connect |
| [**pccsGet**](PrivateCrossConnectsApi.md#pccsget) | **GET** /pccs | List Private Cross-Connects |
| [**pccsPatch**](PrivateCrossConnectsApi.md#pccspatch) | **PATCH** /pccs/{pccId} | Partially modify a Private Cross-Connects |
| [**pccsPost**](PrivateCrossConnectsApi.md#pccspost) | **POST** /pccs | Create a Cross Connect |


## pccsDelete

> pccsDelete(pccId, opts)

Delete Private Cross-Connects

Remove the specified Cross Connect. Cross connect can be deleted only if it is not connected to any LANs. For non administrator users a cross connect can be deleted only if you are granted access via the user groups you are member of.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.PrivateCrossConnectsApi(config);
// Delete Private Cross-Connects
api_instance
  .pccsDelete({
    pccId: pccId_example,
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
| **pccId** | **string** | The unique ID of the Cross Connect. | [default to undefined] |
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


## pccsFindById

> <PrivateCrossConnect> pccsFindById(pccId, opts)

Retrieve a Cross Connect

Retrieve a Cross Connect by the resource ID. Cross Connect ID is in the response body when the Cross Connect is created and in the list of Private Cross-Connects, returned by GET. For contract owner and administrators all Private Cross-Connects in your contract can be retrieved. For non administrator users it only returns the cross connects you are granted access via the user groups you are member of.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.PrivateCrossConnectsApi(config);
// Retrieve a Cross Connect
api_instance
  .pccsFindById({
    pccId: pccId_example,
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
| **pccId** | **string** | The unique ID of the Cross Connect. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**PrivateCrossConnect**](../models/PrivateCrossConnect.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pccsGet

> <PrivateCrossConnects> pccsGet(opts)

List Private Cross-Connects

List all Private Cross-Connects. For contract owner and administrators it returns all Private Cross-Connects in your contract. For non administrator users it only returns the Private Cross-Connects you are granted access via the user groups you are member of.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.PrivateCrossConnectsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Private Cross-Connects
api_instance
  .pccsGet({
    pretty: true,
    depth: 56,
    xContractNumber: 56
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
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**PrivateCrossConnects**](../models/PrivateCrossConnects.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pccsPatch

> <PrivateCrossConnect> pccsPatch(pccId, pcc, opts)

Partially modify a Private Cross-Connects

Update the properties of the specified Cross Connect.For non administrator users you can only update the Private Cross-Connects you are granted access via the user groups you are member of

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.PrivateCrossConnectsApi(config);
// Partially modify a Private Cross-Connects
api_instance
  .pccsPatch({
    pccId: pccId_example,
    pcc: pcc_example,
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
| **pccId** | **string** | The unique ID of the Cross Connect. | [default to undefined] |
| **pcc** | [**PrivateCrossConnectProperties**](../models/PrivateCrossConnectProperties.md) | The properties of the Cross Connect to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**PrivateCrossConnect**](../models/PrivateCrossConnect.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pccsPost

> <PrivateCrossConnect> pccsPost(pcc, opts)

Create a Cross Connect

Creates a Cross-Connect. Only contract owners, administrators and users with createPcc user privilege can create a cross connect. Please note that connecting a LAN to a cross connect is to be done via the /lan endpoint.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.PrivateCrossConnectsApi(config);
// Create a Cross Connect
api_instance
  .pccsPost({
    pcc: pcc_example,
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
| **pcc** | [**PrivateCrossConnect**](../models/PrivateCrossConnect.md) | The Cross Connect to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**PrivateCrossConnect**](../models/PrivateCrossConnect.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


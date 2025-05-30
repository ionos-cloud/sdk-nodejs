# LANsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersLansDelete**](LANsApi.md#datacenterslansdelete) | **DELETE** /datacenters/{datacenterId}/lans/{lanId} | Delete LANs |
| [**datacentersLansFindById**](LANsApi.md#datacenterslansfindbyid) | **GET** /datacenters/{datacenterId}/lans/{lanId} | Retrieve LANs |
| [**datacentersLansGet**](LANsApi.md#datacenterslansget) | **GET** /datacenters/{datacenterId}/lans | List LANs |
| [**datacentersLansNicsFindById**](LANsApi.md#datacenterslansnicsfindbyid) | **GET** /datacenters/{datacenterId}/lans/{lanId}/nics/{nicId} | Retrieve attached NICs |
| [**datacentersLansNicsGet**](LANsApi.md#datacenterslansnicsget) | **GET** /datacenters/{datacenterId}/lans/{lanId}/nics | List LAN members |
| [**datacentersLansNicsPost**](LANsApi.md#datacenterslansnicspost) | **POST** /datacenters/{datacenterId}/lans/{lanId}/nics | Attach NICs |
| [**datacentersLansPatch**](LANsApi.md#datacenterslanspatch) | **PATCH** /datacenters/{datacenterId}/lans/{lanId} | Partially modify LANs |
| [**datacentersLansPost**](LANsApi.md#datacenterslanspost) | **POST** /datacenters/{datacenterId}/lans | Create LANs |
| [**datacentersLansPut**](LANsApi.md#datacenterslansput) | **PUT** /datacenters/{datacenterId}/lans/{lanId} | Modify LANs |


## datacentersLansDelete

> datacentersLansDelete(datacenterId, lanId, opts)

Delete LANs

Delete the specified LAN within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Delete LANs
api_instance
  .datacentersLansDelete({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
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


## datacentersLansFindById

> <Lan> datacentersLansFindById(datacenterId, lanId, opts)

Retrieve LANs

Retrieve the properties of the specified LAN within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Retrieve LANs
api_instance
  .datacentersLansFindById({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Lan**](../models/Lan.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLansGet

> <Lans> datacentersLansGet(datacenterId, opts)

List LANs

List all LANs within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List LANs
api_instance
  .datacentersLansGet({
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

[**Lans**](../models/Lans.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLansNicsFindById

> <Nic> datacentersLansNicsFindById(datacenterId, lanId, nicId, opts)

Retrieve attached NICs

Retrieve the properties of the NIC, attached to the specified LAN.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Retrieve attached NICs
api_instance
  .datacentersLansNicsFindById({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
| **nicId** | **string** | The unique ID of the NIC. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLansNicsGet

> <LanNics> datacentersLansNicsGet(datacenterId, lanId, opts)

List LAN members

List all NICs, attached to the specified LAN.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List LAN members
api_instance
  .datacentersLansNicsGet({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**LanNics**](../models/LanNics.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLansNicsPost

> <Nic> datacentersLansNicsPost(datacenterId, lanId, nic, opts)

Attach NICs

Attach an existing NIC to the specified LAN.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Attach NICs
api_instance
  .datacentersLansNicsPost({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
| **nic** | [**Nic**](../models/Nic.md) | The NIC to be attached. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Nic**](../models/Nic.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLansPatch

> <Lan> datacentersLansPatch(datacenterId, lanId, lan, opts)

Partially modify LANs

Update the properties of the specified LAN within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Partially modify LANs
api_instance
  .datacentersLansPatch({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
    lan: lan_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
| **lan** | [**LanProperties**](../models/LanProperties.md) | The properties of the LAN to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Lan**](../models/Lan.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLansPost

> <Lan> datacentersLansPost(datacenterId, lan, opts)

Create LANs

Creates a LAN within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Create LANs
api_instance
  .datacentersLansPost({
    datacenterId: datacenterId_example,
    lan: lan_example,
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
| **lan** | [**Lan**](../models/Lan.md) | The LAN to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Lan**](../models/Lan.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLansPut

> <Lan> datacentersLansPut(datacenterId, lanId, lan, opts)

Modify LANs

Modify the properties of the specified LAN within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LANsApi(config);
// Modify LANs
api_instance
  .datacentersLansPut({
    datacenterId: datacenterId_example,
    lanId: lanId_example,
    lan: lan_example,
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
| **lanId** | **string** | The unique ID of the LAN. | [default to undefined] |
| **lan** | [**Lan**](../models/Lan.md) | The modified LAN |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Lan**](../models/Lan.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# LabelsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersLabelsDelete**](LabelsApi.md#datacenterslabelsdelete) | **DELETE** /datacenters/{datacenterId}/labels/{key} | Delete data center labels |
| [**datacentersLabelsFindByKey**](LabelsApi.md#datacenterslabelsfindbykey) | **GET** /datacenters/{datacenterId}/labels/{key} | Retrieve data center labels |
| [**datacentersLabelsGet**](LabelsApi.md#datacenterslabelsget) | **GET** /datacenters/{datacenterId}/labels | List data center labels |
| [**datacentersLabelsPost**](LabelsApi.md#datacenterslabelspost) | **POST** /datacenters/{datacenterId}/labels | Create a Data Center Label |
| [**datacentersLabelsPut**](LabelsApi.md#datacenterslabelsput) | **PUT** /datacenters/{datacenterId}/labels/{key} | Modify a Data Center Label by Key |
| [**datacentersServersLabelsDelete**](LabelsApi.md#datacentersserverslabelsdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/labels/{key} | Delete server labels |
| [**datacentersServersLabelsFindByKey**](LabelsApi.md#datacentersserverslabelsfindbykey) | **GET** /datacenters/{datacenterId}/servers/{serverId}/labels/{key} | Retrieve server labels |
| [**datacentersServersLabelsGet**](LabelsApi.md#datacentersserverslabelsget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/labels | List server labels |
| [**datacentersServersLabelsPost**](LabelsApi.md#datacentersserverslabelspost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/labels | Create a Server Label |
| [**datacentersServersLabelsPut**](LabelsApi.md#datacentersserverslabelsput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/labels/{key} | Modify a Server Label |
| [**datacentersVolumesLabelsDelete**](LabelsApi.md#datacentersvolumeslabelsdelete) | **DELETE** /datacenters/{datacenterId}/volumes/{volumeId}/labels/{key} | Delete volume labels |
| [**datacentersVolumesLabelsFindByKey**](LabelsApi.md#datacentersvolumeslabelsfindbykey) | **GET** /datacenters/{datacenterId}/volumes/{volumeId}/labels/{key} | Retrieve volume labels |
| [**datacentersVolumesLabelsGet**](LabelsApi.md#datacentersvolumeslabelsget) | **GET** /datacenters/{datacenterId}/volumes/{volumeId}/labels | List volume labels |
| [**datacentersVolumesLabelsPost**](LabelsApi.md#datacentersvolumeslabelspost) | **POST** /datacenters/{datacenterId}/volumes/{volumeId}/labels | Create a Volume Label |
| [**datacentersVolumesLabelsPut**](LabelsApi.md#datacentersvolumeslabelsput) | **PUT** /datacenters/{datacenterId}/volumes/{volumeId}/labels/{key} | Modify a Volume Label |
| [**imagesLabelsDelete**](LabelsApi.md#imageslabelsdelete) | **DELETE** /images/{imageId}/labels/{key} | Delete image label |
| [**imagesLabelsFindByKey**](LabelsApi.md#imageslabelsfindbykey) | **GET** /images/{imageId}/labels/{key} | Retrieve image labels |
| [**imagesLabelsGet**](LabelsApi.md#imageslabelsget) | **GET** /images/{imageId}/labels | List image labels |
| [**imagesLabelsPost**](LabelsApi.md#imageslabelspost) | **POST** /images/{imageId}/labels | Create an Image Label |
| [**imagesLabelsPut**](LabelsApi.md#imageslabelsput) | **PUT** /images/{imageId}/labels/{key} | Modify an Image Label by Key |
| [**ipblocksLabelsDelete**](LabelsApi.md#ipblockslabelsdelete) | **DELETE** /ipblocks/{ipblockId}/labels/{key} | Delete IP block labels |
| [**ipblocksLabelsFindByKey**](LabelsApi.md#ipblockslabelsfindbykey) | **GET** /ipblocks/{ipblockId}/labels/{key} | Retrieve IP block labels |
| [**ipblocksLabelsGet**](LabelsApi.md#ipblockslabelsget) | **GET** /ipblocks/{ipblockId}/labels | List IP block labels |
| [**ipblocksLabelsPost**](LabelsApi.md#ipblockslabelspost) | **POST** /ipblocks/{ipblockId}/labels | Create IP block labels |
| [**ipblocksLabelsPut**](LabelsApi.md#ipblockslabelsput) | **PUT** /ipblocks/{ipblockId}/labels/{key} | Modify a IP Block Label by ID |
| [**labelsFindByUrn**](LabelsApi.md#labelsfindbyurn) | **GET** /labels/{labelurn} | Retrieve labels by URN |
| [**labelsGet**](LabelsApi.md#labelsget) | **GET** /labels | List labels  |
| [**snapshotsLabelsDelete**](LabelsApi.md#snapshotslabelsdelete) | **DELETE** /snapshots/{snapshotId}/labels/{key} | Delete snapshot labels |
| [**snapshotsLabelsFindByKey**](LabelsApi.md#snapshotslabelsfindbykey) | **GET** /snapshots/{snapshotId}/labels/{key} | Retrieve snapshot labels |
| [**snapshotsLabelsGet**](LabelsApi.md#snapshotslabelsget) | **GET** /snapshots/{snapshotId}/labels | List snapshot labels |
| [**snapshotsLabelsPost**](LabelsApi.md#snapshotslabelspost) | **POST** /snapshots/{snapshotId}/labels | Create a Snapshot Label |
| [**snapshotsLabelsPut**](LabelsApi.md#snapshotslabelsput) | **PUT** /snapshots/{snapshotId}/labels/{key} | Modify a Snapshot Label by ID |


## datacentersLabelsDelete

> datacentersLabelsDelete(datacenterId, key, opts)

Delete data center labels

Delete the specified data center label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Delete data center labels
api_instance
  .datacentersLabelsDelete({
    datacenterId: datacenterId_example,
    key: key_example,
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
| **key** | **string** | The label key | [default to undefined] |
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


## datacentersLabelsFindByKey

> <LabelResource> datacentersLabelsFindByKey(datacenterId, key, opts)

Retrieve data center labels

Retrieve the properties of the specified data center label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve data center labels
api_instance
  .datacentersLabelsFindByKey({
    datacenterId: datacenterId_example,
    key: key_example,
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
| **key** | **string** | The label key | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLabelsGet

> <LabelResources> datacentersLabelsGet(datacenterId, opts)

List data center labels

List all the the labels for the specified data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List data center labels
api_instance
  .datacentersLabelsGet({
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

[**LabelResources**](../models/LabelResources.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersLabelsPost

> <LabelResource> datacentersLabelsPost(datacenterId, label, opts)

Create a Data Center Label

Adds a new label to the specified data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Create a Data Center Label
api_instance
  .datacentersLabelsPost({
    datacenterId: datacenterId_example,
    label: label_example,
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
| **label** | [**LabelResource**](../models/LabelResource.md) | The label to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersLabelsPut

> <LabelResource> datacentersLabelsPut(datacenterId, key, label, opts)

Modify a Data Center Label by Key

Modifies the specified data center label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Modify a Data Center Label by Key
api_instance
  .datacentersLabelsPut({
    datacenterId: datacenterId_example,
    key: key_example,
    label: label_example,
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
| **key** | **string** | The label key | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The modified label |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersLabelsDelete

> datacentersServersLabelsDelete(datacenterId, serverId, key, opts)

Delete server labels

Delete the specified server label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Delete server labels
api_instance
  .datacentersServersLabelsDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    key: key_example,
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
| **key** | **string** | The label key | [default to undefined] |
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


## datacentersServersLabelsFindByKey

> <LabelResource> datacentersServersLabelsFindByKey(datacenterId, serverId, key, opts)

Retrieve server labels

Retrieve the properties of the specified server label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve server labels
api_instance
  .datacentersServersLabelsFindByKey({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    key: key_example,
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
| **key** | **string** | The label key | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersLabelsGet

> <LabelResources> datacentersServersLabelsGet(datacenterId, serverId, opts)

List server labels

List all the the labels for the specified server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List server labels
api_instance
  .datacentersServersLabelsGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResources**](../models/LabelResources.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersServersLabelsPost

> <LabelResource> datacentersServersLabelsPost(datacenterId, serverId, label, opts)

Create a Server Label

Adds a new label to the specified server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Create a Server Label
api_instance
  .datacentersServersLabelsPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    label: label_example,
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
| **label** | [**LabelResource**](../models/LabelResource.md) | The label to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersLabelsPut

> <LabelResource> datacentersServersLabelsPut(datacenterId, serverId, key, label, opts)

Modify a Server Label

Modifies the specified server label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Modify a Server Label
api_instance
  .datacentersServersLabelsPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    key: key_example,
    label: label_example,
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
| **key** | **string** | The label key | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The modified label |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersVolumesLabelsDelete

> datacentersVolumesLabelsDelete(datacenterId, volumeId, key, opts)

Delete volume labels

Delete the specified volume label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Delete volume labels
api_instance
  .datacentersVolumesLabelsDelete({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    key: key_example,
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
| **volumeId** | **string** | The unique ID of the volume. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
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


## datacentersVolumesLabelsFindByKey

> <LabelResource> datacentersVolumesLabelsFindByKey(datacenterId, volumeId, key, opts)

Retrieve volume labels

Retrieve the properties of the specified volume label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve volume labels
api_instance
  .datacentersVolumesLabelsFindByKey({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    key: key_example,
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
| **volumeId** | **string** | The unique ID of the volume. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersVolumesLabelsGet

> <LabelResources> datacentersVolumesLabelsGet(datacenterId, volumeId, opts)

List volume labels

List all the the labels for the specified volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List volume labels
api_instance
  .datacentersVolumesLabelsGet({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
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
| **volumeId** | **string** | The unique ID of the volume. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResources**](../models/LabelResources.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersVolumesLabelsPost

> <LabelResource> datacentersVolumesLabelsPost(datacenterId, volumeId, label, opts)

Create a Volume Label

Adds a new label to the specified volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Create a Volume Label
api_instance
  .datacentersVolumesLabelsPost({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    label: label_example,
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
| **volumeId** | **string** | The unique ID of the volume. | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The label to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersVolumesLabelsPut

> <LabelResource> datacentersVolumesLabelsPut(datacenterId, volumeId, key, label, opts)

Modify a Volume Label

Modifies the specified volume label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Modify a Volume Label
api_instance
  .datacentersVolumesLabelsPut({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    key: key_example,
    label: label_example,
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
| **volumeId** | **string** | The unique ID of the volume. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The modified label |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## imagesLabelsDelete

> imagesLabelsDelete(imageId, key, opts)

Delete image label

Delete the specified image label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Delete image label
api_instance
  .imagesLabelsDelete({
    imageId: imageId_example,
    key: key_example,
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
| **imageId** | **string** | The unique ID of the image. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
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


## imagesLabelsFindByKey

> <LabelResource> imagesLabelsFindByKey(imageId, key, opts)

Retrieve image labels

Retrieve the properties of the specified image label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve image labels
api_instance
  .imagesLabelsFindByKey({
    imageId: imageId_example,
    key: key_example,
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
| **imageId** | **string** | The unique ID of the image. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## imagesLabelsGet

> <LabelResources> imagesLabelsGet(imageId, opts)

List image labels

List all the the labels for the specified image.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List image labels
api_instance
  .imagesLabelsGet({
    imageId: imageId_example,
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
| **imageId** | **string** | The unique ID of the image. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResources**](../models/LabelResources.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## imagesLabelsPost

> <LabelResource> imagesLabelsPost(imageId, label, opts)

Create an Image Label

Adds a new label to the specified image.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Create an Image Label
api_instance
  .imagesLabelsPost({
    imageId: imageId_example,
    label: label_example,
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
| **imageId** | **string** | The unique ID of the image | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The label to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## imagesLabelsPut

> <LabelResource> imagesLabelsPut(imageId, key, label, opts)

Modify an Image Label by Key

Modifies the specified data center label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Modify an Image Label by Key
api_instance
  .imagesLabelsPut({
    imageId: imageId_example,
    key: key_example,
    label: label_example,
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
| **imageId** | **string** | The unique ID of the image. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The modified label |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ipblocksLabelsDelete

> ipblocksLabelsDelete(ipblockId, key, opts)

Delete IP block labels

Delete the specified IP block label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Delete IP block labels
api_instance
  .ipblocksLabelsDelete({
    ipblockId: ipblockId_example,
    key: key_example,
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
| **ipblockId** | **string** | The unique ID of the IP block. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
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


## ipblocksLabelsFindByKey

> <LabelResource> ipblocksLabelsFindByKey(ipblockId, key, opts)

Retrieve IP block labels

Retrieve the properties of the specified IP block label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve IP block labels
api_instance
  .ipblocksLabelsFindByKey({
    ipblockId: ipblockId_example,
    key: key_example,
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
| **ipblockId** | **string** | The unique ID of the IP block. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ipblocksLabelsGet

> <LabelResources> ipblocksLabelsGet(ipblockId, opts)

List IP block labels

List all the the labels for the specified IP block.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List IP block labels
api_instance
  .ipblocksLabelsGet({
    ipblockId: ipblockId_example,
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
| **ipblockId** | **string** | The unique ID of the IP block. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResources**](../models/LabelResources.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ipblocksLabelsPost

> <LabelResource> ipblocksLabelsPost(ipblockId, label, opts)

Create IP block labels

Add a new label to the specified IP block.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Create IP block labels
api_instance
  .ipblocksLabelsPost({
    ipblockId: ipblockId_example,
    label: label_example,
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
| **ipblockId** | **string** | The unique ID of the IP block. | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The label to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ipblocksLabelsPut

> <LabelResource> ipblocksLabelsPut(ipblockId, key, label, opts)

Modify a IP Block Label by ID

Modifies the specified IP block label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Modify a IP Block Label by ID
api_instance
  .ipblocksLabelsPut({
    ipblockId: ipblockId_example,
    key: key_example,
    label: label_example,
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
| **ipblockId** | **string** | The unique ID of the IP block. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The modified label |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## labelsFindByUrn

> <Label> labelsFindByUrn(labelurn, opts)

Retrieve labels by URN

Retrieve a label by label URN.  The URN is unique for each label, and consists of:  urn:label:<resource_type>:<resource_uuid>:<key>

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve labels by URN
api_instance
  .labelsFindByUrn({
    labelurn: labelurn_example,
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
| **labelurn** | **string** | The label URN; URN is unique for each label, and consists of:  urn:label:&lt;resource_type&gt;:&lt;resource_uuid&gt;:&lt;key&gt;&lt;key&gt; | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Label**](../models/Label.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## labelsGet

> <Labels> labelsGet(opts)

List labels 

List all available labels.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List labels 
api_instance
  .labelsGet({
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

[**Labels**](../models/Labels.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotsLabelsDelete

> snapshotsLabelsDelete(snapshotId, key, opts)

Delete snapshot labels

Delete the specified snapshot label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Delete snapshot labels
api_instance
  .snapshotsLabelsDelete({
    snapshotId: snapshotId_example,
    key: key_example,
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
| **snapshotId** | **string** | The unique ID of the snapshot. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
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


## snapshotsLabelsFindByKey

> <LabelResource> snapshotsLabelsFindByKey(snapshotId, key, opts)

Retrieve snapshot labels

Retrieve the properties of the specified snapshot label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Retrieve snapshot labels
api_instance
  .snapshotsLabelsFindByKey({
    snapshotId: snapshotId_example,
    key: key_example,
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
| **snapshotId** | **string** | The unique ID of the snapshot. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotsLabelsGet

> <LabelResources> snapshotsLabelsGet(snapshotId, opts)

List snapshot labels

List all the the labels for the specified snapshot.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List snapshot labels
api_instance
  .snapshotsLabelsGet({
    snapshotId: snapshotId_example,
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
| **snapshotId** | **string** | The unique ID of the snapshot. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResources**](../models/LabelResources.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotsLabelsPost

> <LabelResource> snapshotsLabelsPost(snapshotId, label, opts)

Create a Snapshot Label

Adds a new label to the specified snapshot.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Create a Snapshot Label
api_instance
  .snapshotsLabelsPost({
    snapshotId: snapshotId_example,
    label: label_example,
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
| **snapshotId** | **string** | The unique ID of the snapshot. | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The label to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snapshotsLabelsPut

> <LabelResource> snapshotsLabelsPut(snapshotId, key, label, opts)

Modify a Snapshot Label by ID

Modifies the specified snapshot label.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelsApi(config);
// Modify a Snapshot Label by ID
api_instance
  .snapshotsLabelsPut({
    snapshotId: snapshotId_example,
    key: key_example,
    label: label_example,
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
| **snapshotId** | **string** | The unique ID of the snapshot. | [default to undefined] |
| **key** | **string** | The label key | [default to undefined] |
| **label** | [**LabelResource**](../models/LabelResource.md) | The modified label |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**LabelResource**](../models/LabelResource.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


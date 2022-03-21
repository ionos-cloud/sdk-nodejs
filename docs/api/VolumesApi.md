# VolumesApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersVolumesCreateSnapshotPost**](VolumesApi.md#datacentersvolumescreatesnapshotpost) | **POST** /datacenters/{datacenterId}/volumes/{volumeId}/create-snapshot | Create volume snapshots |
| [**datacentersVolumesDelete**](VolumesApi.md#datacentersvolumesdelete) | **DELETE** /datacenters/{datacenterId}/volumes/{volumeId} | Delete volumes |
| [**datacentersVolumesFindById**](VolumesApi.md#datacentersvolumesfindbyid) | **GET** /datacenters/{datacenterId}/volumes/{volumeId} | Retrieve volumes |
| [**datacentersVolumesGet**](VolumesApi.md#datacentersvolumesget) | **GET** /datacenters/{datacenterId}/volumes | List volumes |
| [**datacentersVolumesPatch**](VolumesApi.md#datacentersvolumespatch) | **PATCH** /datacenters/{datacenterId}/volumes/{volumeId} | Partially modify volumes |
| [**datacentersVolumesPost**](VolumesApi.md#datacentersvolumespost) | **POST** /datacenters/{datacenterId}/volumes | Create volumes |
| [**datacentersVolumesPut**](VolumesApi.md#datacentersvolumesput) | **PUT** /datacenters/{datacenterId}/volumes/{volumeId} | Modify volumes |
| [**datacentersVolumesRestoreSnapshotPost**](VolumesApi.md#datacentersvolumesrestoresnapshotpost) | **POST** /datacenters/{datacenterId}/volumes/{volumeId}/restore-snapshot | Restore volume snapshots |


## datacentersVolumesCreateSnapshotPost

> <Snapshot> datacentersVolumesCreateSnapshotPost(datacenterId, volumeId, opts)

Create volume snapshots

Create a snapshot of the specified volume within the data center; this snapshot can later be used to restore this volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Create volume snapshots
api_instance
  .datacentersVolumesCreateSnapshotPost({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    name: name_example,
    description: description_example,
    secAuthProtection: true,
    licenceType: licenceType_example, 
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
| **name** | **string** | Snapshot name | [optional][default to undefined] |
| **description** | **string** | Snapshot description | [optional][default to undefined] |
| **secAuthProtection** | **boolean** | Flag for enabling extra protection for this snapshot, such as two-step verification. | [optional][default to undefined] |
| **licenceType** | **string** | The OS type for this snapshot. | [optional][default to undefined] |

### Return type

[**Snapshot**](../models/Snapshot.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## datacentersVolumesDelete

> datacentersVolumesDelete(datacenterId, volumeId, opts)

Delete volumes

Delete the specified volume within the data center. Use with caution, the volume will be permanently removed!

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Delete volumes
api_instance
  .datacentersVolumesDelete({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
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


## datacentersVolumesFindById

> <Volume> datacentersVolumesFindById(datacenterId, volumeId, opts)

Retrieve volumes

Retrieve the properties of the specified volume within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Retrieve volumes
api_instance
  .datacentersVolumesFindById({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
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
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Volume**](../models/Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersVolumesGet

> <Volumes> datacentersVolumesGet(datacenterId, opts)

List volumes

List all the volumes within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List volumes
api_instance
  .datacentersVolumesGet({
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

[**Volumes**](../models/Volumes.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersVolumesPatch

> <Volume> datacentersVolumesPatch(datacenterId, volumeId, volume, opts)

Partially modify volumes

Update the properties of the specified storage volume within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Partially modify volumes
api_instance
  .datacentersVolumesPatch({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    volume: volume_example,
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
| **volume** | [**VolumeProperties**](../models/VolumeProperties.md) | The properties of the volume to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Volume**](../models/Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersVolumesPost

> <Volume> datacentersVolumesPost(datacenterId, volume, opts)

Create volumes

Create a storage volume within the specified data center. The volume will not be attached! Attaching volumes is described in the Servers section.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Create volumes
api_instance
  .datacentersVolumesPost({
    datacenterId: datacenterId_example,
    volume: volume_example,
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
| **volume** | [**Volume**](../models/Volume.md) | The volume to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Volume**](../models/Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersVolumesPut

> <Volume> datacentersVolumesPut(datacenterId, volumeId, volume, opts)

Modify volumes

Modify the properties of the specified volume within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Modify volumes
api_instance
  .datacentersVolumesPut({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    volume: volume_example,
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
| **volume** | [**Volume**](../models/Volume.md) | The modified volume |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**Volume**](../models/Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersVolumesRestoreSnapshotPost

> datacentersVolumesRestoreSnapshotPost(datacenterId, volumeId, opts)

Restore volume snapshots

Restore a snapshot for the specified volume within the data center. A snapshot is an image of a volume, which can be used to restore this volume at a later time.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VolumesApi(config);
// Restore volume snapshots
api_instance
  .datacentersVolumesRestoreSnapshotPost({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    snapshotId: snapshotId_example, 
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
| **snapshotId** | **string** | The unique ID of the snapshot. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


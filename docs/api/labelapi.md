# LabelApi

All URIs are relative to [https://api.ionos.com/cloudapi/v5](https://api.ionos.com/cloudapi/v5)

| Method | HTTP request | Description |
| :--- | :--- | :--- |
| [**datacentersLabelsDelete**](labelapi.md#datacenterslabelsdelete) | **DELETE** /datacenters/{datacenterId}/labels/{key} | Delete a Label from Data Center |
| [**datacentersLabelsFindByKey**](labelapi.md#datacenterslabelsfindbykey) | **GET** /datacenters/{datacenterId}/labels/{key} | Retrieve a Label of Data Center |
| [**datacentersLabelsGet**](labelapi.md#datacenterslabelsget) | **GET** /datacenters/{datacenterId}/labels | List all Data Center Labels |
| [**datacentersLabelsPost**](labelapi.md#datacenterslabelspost) | **POST** /datacenters/{datacenterId}/labels | Add a Label to Data Center |
| [**datacentersLabelsPut**](labelapi.md#datacenterslabelsput) | **PUT** /datacenters/{datacenterId}/labels/{key} | Modify a Label of Data Center |
| [**datacentersServersLabelsDelete**](labelapi.md#datacentersserverslabelsdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/labels/{key} | Delete a Label from Server |
| [**datacentersServersLabelsFindByKey**](labelapi.md#datacentersserverslabelsfindbykey) | **GET** /datacenters/{datacenterId}/servers/{serverId}/labels/{key} | Retrieve a Label of Server |
| [**datacentersServersLabelsGet**](labelapi.md#datacentersserverslabelsget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/labels | List all Server Labels |
| [**datacentersServersLabelsPost**](labelapi.md#datacentersserverslabelspost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/labels | Add a Label to Server |
| [**datacentersServersLabelsPut**](labelapi.md#datacentersserverslabelsput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/labels/{key} | Modify a Label of Server |
| [**datacentersVolumesLabelsDelete**](labelapi.md#datacentersvolumeslabelsdelete) | **DELETE** /datacenters/{datacenterId}/volumes/{volumeId}/labels/{key} | Delete a Label from Volume |
| [**datacentersVolumesLabelsFindByKey**](labelapi.md#datacentersvolumeslabelsfindbykey) | **GET** /datacenters/{datacenterId}/volumes/{volumeId}/labels/{key} | Retrieve a Label of Volume |
| [**datacentersVolumesLabelsGet**](labelapi.md#datacentersvolumeslabelsget) | **GET** /datacenters/{datacenterId}/volumes/{volumeId}/labels | List all Volume Labels |
| [**datacentersVolumesLabelsPost**](labelapi.md#datacentersvolumeslabelspost) | **POST** /datacenters/{datacenterId}/volumes/{volumeId}/labels | Add a Label to Volume |
| [**datacentersVolumesLabelsPut**](labelapi.md#datacentersvolumeslabelsput) | **PUT** /datacenters/{datacenterId}/volumes/{volumeId}/labels/{key} | Modify a Label of Volume |
| [**ipblocksLabelsDelete**](labelapi.md#ipblockslabelsdelete) | **DELETE** /ipblocks/{ipblockId}/labels/{key} | Delete a Label from IP Block |
| [**ipblocksLabelsFindByKey**](labelapi.md#ipblockslabelsfindbykey) | **GET** /ipblocks/{ipblockId}/labels/{key} | Retrieve a Label of IP Block |
| [**ipblocksLabelsGet**](labelapi.md#ipblockslabelsget) | **GET** /ipblocks/{ipblockId}/labels | List all Ip Block Labels |
| [**ipblocksLabelsPost**](labelapi.md#ipblockslabelspost) | **POST** /ipblocks/{ipblockId}/labels | Add a Label to IP Block |
| [**ipblocksLabelsPut**](labelapi.md#ipblockslabelsput) | **PUT** /ipblocks/{ipblockId}/labels/{key} | Modify a Label of IP Block |
| [**labelsFindByUrn**](labelapi.md#labelsfindbyurn) | **GET** /labels/{labelurn} | Returns the label by its URN. |
| [**labelsGet**](labelapi.md#labelsget) | **GET** /labels | List Labels |
| [**snapshotsLabelsDelete**](labelapi.md#snapshotslabelsdelete) | **DELETE** /snapshots/{snapshotId}/labels/{key} | Delete a Label from Snapshot |
| [**snapshotsLabelsFindByKey**](labelapi.md#snapshotslabelsfindbykey) | **GET** /snapshots/{snapshotId}/labels/{key} | Retrieve a Label of Snapshot |
| [**snapshotsLabelsGet**](labelapi.md#snapshotslabelsget) | **GET** /snapshots/{snapshotId}/labels | List all Snapshot Labels |
| [**snapshotsLabelsPost**](labelapi.md#snapshotslabelspost) | **POST** /snapshots/{snapshotId}/labels | Add a Label to Snapshot |
| [**snapshotsLabelsPut**](labelapi.md#snapshotslabelsput) | **PUT** /snapshots/{snapshotId}/labels/{key} | Modify a Label of Snapshot |

## datacentersLabelsDelete

> object datacentersLabelsDelete\(datacenterId, key, opts\)

Delete a Label from Data Center

This will remove a label from the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Delete a Label from Data Center
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Data Center | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLabelsFindByKey

> datacentersLabelsFindByKey\(datacenterId, key, opts\)

Retrieve a Label of Data Center

This will retrieve the properties of a associated label to a data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Retrieve a Label of Data Center
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Data Center | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLabelsGet

> datacentersLabelsGet\(datacenterId, opts\)

List all Data Center Labels

You can retrieve a list of all labels associated with a data center

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// List all Data Center Labels
api_instance
  .datacentersLabelsGet({
    datacenterId: datacenterId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Data Center | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**LabelResources**](../models/labelresources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersLabelsPost

> datacentersLabelsPost\(datacenterId, label, opts\)

Add a Label to Data Center

This will add a label to the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Add a Label to Data Center
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Data Center | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Label to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersLabelsPut

> datacentersLabelsPut\(datacenterId, key, label, opts\)

Modify a Label of Data Center

This will modify the value of the label on a data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Modify a Label of Data Center
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Data Center | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Modified Label |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersServersLabelsDelete

> object datacentersServersLabelsDelete\(datacenterId, serverId, key, opts\)

Delete a Label from Server

This will remove a label from the server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Delete a Label from Server
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersLabelsFindByKey

> datacentersServersLabelsFindByKey\(datacenterId, serverId, key, opts\)

Retrieve a Label of Server

This will retrieve the properties of a associated label to a server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Retrieve a Label of Server
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersLabelsGet

> datacentersServersLabelsGet\(datacenterId, serverId, opts\)

List all Server Labels

You can retrieve a list of all labels associated with a server

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// List all Server Labels
api_instance
  .datacentersServersLabelsGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**LabelResources**](../models/labelresources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersLabelsPost

> datacentersServersLabelsPost\(datacenterId, serverId, label, opts\)

Add a Label to Server

This will add a label to the server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Add a Label to Server
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Label to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersServersLabelsPut

> datacentersServersLabelsPut\(datacenterId, serverId, key, label, opts\)

Modify a Label of Server

This will modify the value of the label on a server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Modify a Label of Server
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Modified Label |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersVolumesLabelsDelete

> object datacentersVolumesLabelsDelete\(datacenterId, volumeId, key, opts\)

Delete a Label from Volume

This will remove a label from the volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Delete a Label from Volume
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersVolumesLabelsFindByKey

> datacentersVolumesLabelsFindByKey\(datacenterId, volumeId, key, opts\)

Retrieve a Label of Volume

This will retrieve the properties of a associated label to a volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Retrieve a Label of Volume
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersVolumesLabelsGet

> datacentersVolumesLabelsGet\(datacenterId, volumeId, opts\)

List all Volume Labels

You can retrieve a list of all labels associated with a volume

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// List all Volume Labels
api_instance
  .datacentersVolumesLabelsGet({
    datacenterId: datacenterId_example,
    volumeId: volumeId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**LabelResources**](../models/labelresources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersVolumesLabelsPost

> datacentersVolumesLabelsPost\(datacenterId, volumeId, label, opts\)

Add a Label to Volume

This will add a label to the volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Add a Label to Volume
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Label to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersVolumesLabelsPut

> datacentersVolumesLabelsPut\(datacenterId, volumeId, key, label, opts\)

Modify a Label of Volume

This will modify the value of the label on a volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Modify a Label of Volume
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
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Modified Label |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## ipblocksLabelsDelete

> object ipblocksLabelsDelete\(ipblockId, key, opts\)

Delete a Label from IP Block

This will remove a label from the Ip Block.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Delete a Label from IP Block
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
| :--- | :--- | :--- | :--- |
| **ipblockId** | **string** | The unique ID of the Ip Block | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## ipblocksLabelsFindByKey

> ipblocksLabelsFindByKey\(ipblockId, key, opts\)

Retrieve a Label of IP Block

This will retrieve the properties of a associated label to a Ip Block.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Retrieve a Label of IP Block
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
| :--- | :--- | :--- | :--- |
| **ipblockId** | **string** | The unique ID of the Ip Block | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## ipblocksLabelsGet

> ipblocksLabelsGet\(ipblockId, opts\)

List all Ip Block Labels

You can retrieve a list of all labels associated with a IP Block

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// List all Ip Block Labels
api_instance
  .ipblocksLabelsGet({
    ipblockId: ipblockId_example,
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
| :--- | :--- | :--- | :--- |
| **ipblockId** | **string** | The unique ID of the Ip Block | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResources**](../models/labelresources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## ipblocksLabelsPost

> ipblocksLabelsPost\(ipblockId, label, opts\)

Add a Label to IP Block

This will add a label to the Ip Block.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Add a Label to IP Block
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
| :--- | :--- | :--- | :--- |
| **ipblockId** | **string** | The unique ID of the Ip Block | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Label to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## ipblocksLabelsPut

> ipblocksLabelsPut\(ipblockId, key, label, opts\)

Modify a Label of IP Block

This will modify the value of the label on a Ip Block.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Modify a Label of IP Block
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
| :--- | :--- | :--- | :--- |
| **ipblockId** | **string** | The unique ID of the Ip Block | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Modified Label |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## labelsFindByUrn

> labelsFindByUrn\(labelurn, opts\)

Returns the label by its URN.

You can retrieve the details of a specific label using its URN. A URN is for uniqueness of a Label and composed using urn:label:::

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Returns the label by its URN.
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
| :--- | :--- | :--- | :--- |
| **labelurn** | **string** | The URN representing the unique ID of the label. A URN is for uniqueness of a Label and composed using urn:label:&lt;resource\_type&gt;:&lt;resource\_uuid&gt;:&lt;key&gt; | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Label**](../models/label.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## labelsGet

> labelsGet\(opts\)

List Labels

You can retrieve a complete list of labels that you have access to.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// List Labels 
api_instance
  .labelsGet({
    pretty: true,
    depth: 56,
    xContractNumber: 56
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Labels**](../models/labels.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## snapshotsLabelsDelete

> object snapshotsLabelsDelete\(snapshotId, key, opts\)

Delete a Label from Snapshot

This will remove a label from the snapshot.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Delete a Label from Snapshot
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
| :--- | :--- | :--- | :--- |
| **snapshotId** | **string** | The unique ID of the Snapshot | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## snapshotsLabelsFindByKey

> snapshotsLabelsFindByKey\(snapshotId, key, opts\)

Retrieve a Label of Snapshot

This will retrieve the properties of a associated label to a snapshot.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Retrieve a Label of Snapshot
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
| :--- | :--- | :--- | :--- |
| **snapshotId** | **string** | The unique ID of the Snapshot | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## snapshotsLabelsGet

> snapshotsLabelsGet\(snapshotId, opts\)

List all Snapshot Labels

You can retrieve a list of all labels associated with a snapshot

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// List all Snapshot Labels
api_instance
  .snapshotsLabelsGet({
    snapshotId: snapshotId_example,
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
| :--- | :--- | :--- | :--- |
| **snapshotId** | **string** | The unique ID of the Snapshot | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResources**](../models/labelresources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## snapshotsLabelsPost

> snapshotsLabelsPost\(snapshotId, label, opts\)

Add a Label to Snapshot

This will add a label to the snapshot.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Add a Label to Snapshot
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
| :--- | :--- | :--- | :--- |
| **snapshotId** | **string** | The unique ID of the Snapshot | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Label to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## snapshotsLabelsPut

> snapshotsLabelsPut\(snapshotId, key, label, opts\)

Modify a Label of Snapshot

This will modify the value of the label on a snapshot.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LabelApi(config);
// Modify a Label of Snapshot
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
| :--- | :--- | :--- | :--- |
| **snapshotId** | **string** | The unique ID of the Snapshot | \[default to undefined\] |
| **key** | **string** | The key of the Label | \[default to undefined\] |
| **label** | [**LabelResource**](../models/labelresource.md) | Modified Label |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**LabelResource**](../models/labelresource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json


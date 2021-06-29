# SnapshotApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**snapshotsDelete**](SnapshotApi.md#snapshotsDelete) | **DELETE** /snapshots/{snapshotId} | Delete a Snapshot |
| [**snapshotsFindById**](SnapshotApi.md#snapshotsFindById) | **GET** /snapshots/{snapshotId} | Retrieve a Snapshot by its uuid. |
| [**snapshotsGet**](SnapshotApi.md#snapshotsGet) | **GET** /snapshots | List Snapshots  |
| [**snapshotsPatch**](SnapshotApi.md#snapshotsPatch) | **PATCH** /snapshots/{snapshotId} | Partially modify a Snapshot |
| [**snapshotsPut**](SnapshotApi.md#snapshotsPut) | **PUT** /snapshots/{snapshotId} | Modify a Snapshot |


# **snapshotsDelete**
> object snapshotsDelete(snapshotId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Snapshot

Deletes the specified Snapshot.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Delete a Snapshot
api_instance.snapshotsDelete(snapshotId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Delete a Snapshot
api_instance.snapshotsDelete(snapshotId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **snapshotId** | **string**| The unique ID of the Snapshot | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

**object**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **snapshotsFindById**
> Snapshot snapshotsFindById(snapshotId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Snapshot by its uuid.

Retrieves the attributes of a given Snapshot.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Retrieve a Snapshot by its uuid.
api_instance.snapshotsFindById(snapshotId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Retrieve a Snapshot by its uuid.
api_instance.snapshotsFindById(snapshotId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **snapshotId** | **string**| The unique ID of the Snapshot | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **snapshotsGet**
> Snapshots snapshotsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Snapshots 

Retrieve a list of available snapshots.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# List Snapshots 
api_instance.snapshotsGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# List Snapshots 
api_instance.snapshotsGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Snapshots**](Snapshots.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **snapshotsPatch**
> Snapshot snapshotsPatch(snapshotId, snapshot, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Snapshot

You can use this method to update attributes of a Snapshot.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Partially modify a Snapshot
api_instance.snapshotsPatch(snapshotId, snapshot, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Partially modify a Snapshot
api_instance.snapshotsPatch(snapshotId, snapshot, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **snapshotId** | **string**| The unique ID of the Snapshot | [default to undefined] |
| **snapshot** | [**SnapshotProperties**](SnapshotProperties.md)| Modified Snapshot |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **snapshotsPut**
> Snapshot snapshotsPut(snapshotId, snapshot, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Snapshot

You can use update attributes of a resource

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Modify a Snapshot
api_instance.snapshotsPut(snapshotId, snapshot, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.SnapshotApi(config)
# Modify a Snapshot
api_instance.snapshotsPut(snapshotId, snapshot, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **snapshotId** | **string**| The unique ID of the Snapshot | [default to undefined] |
| **snapshot** | [**Snapshot**](Snapshot.md)| Modified Snapshot |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


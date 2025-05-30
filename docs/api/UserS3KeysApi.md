# UserS3KeysApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**umUsersS3keysDelete**](UserS3KeysApi.md#umuserss3keysdelete) | **DELETE** /um/users/{userId}/s3keys/{keyId} | Delete Object storage keys |
| [**umUsersS3keysFindByKeyId**](UserS3KeysApi.md#umuserss3keysfindbykeyid) | **GET** /um/users/{userId}/s3keys/{keyId} | Retrieve user Object storage keys by key ID |
| [**umUsersS3keysGet**](UserS3KeysApi.md#umuserss3keysget) | **GET** /um/users/{userId}/s3keys | List user Object storage keys |
| [**umUsersS3keysPost**](UserS3KeysApi.md#umuserss3keyspost) | **POST** /um/users/{userId}/s3keys | Create user Object storage keys |
| [**umUsersS3keysPut**](UserS3KeysApi.md#umuserss3keysput) | **PUT** /um/users/{userId}/s3keys/{keyId} | Modify a Object storage Key by Key ID |
| [**umUsersS3ssourlGet**](UserS3KeysApi.md#umuserss3ssourlget) | **GET** /um/users/{userId}/s3ssourl | Retrieve Object storage single sign-on URLs |


## umUsersS3keysDelete

> umUsersS3keysDelete(userId, keyId, opts)

Delete Object storage keys

Delete the specified user Object storage key.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserS3KeysApi(config);
// Delete Object storage keys
api_instance
  .umUsersS3keysDelete({
    userId: userId_example,
    keyId: keyId_example,
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
| **userId** | **string** | The unique ID of the user. | [default to undefined] |
| **keyId** | **string** | The unique ID of the Object storage key. | [default to undefined] |
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


## umUsersS3keysFindByKeyId

> <S3Key> umUsersS3keysFindByKeyId(userId, keyId, opts)

Retrieve user Object storage keys by key ID

Retrieve the specified user Object storage key. The user ID is in the response body when the user is created, and in the list of the users, returned by GET. The key ID is in the response body when the Object storage key is created, and in the list of all user Object storage keys, returned by GET.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserS3KeysApi(config);
// Retrieve user Object storage keys by key ID
api_instance
  .umUsersS3keysFindByKeyId({
    userId: userId_example,
    keyId: keyId_example,
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
| **userId** | **string** | The unique ID of the user. | [default to undefined] |
| **keyId** | **string** | The unique ID of the Object storage key. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**S3Key**](../models/S3Key.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## umUsersS3keysGet

> <S3Keys> umUsersS3keysGet(userId, opts)

List user Object storage keys

List Object storage keys by user ID. The user ID is in the response body when the user is created, and in the list of the users, returned by GET.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserS3KeysApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List user Object storage keys
api_instance
  .umUsersS3keysGet({
    userId: userId_example,
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
| **userId** | **string** | The unique ID of the user. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**S3Keys**](../models/S3Keys.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## umUsersS3keysPost

> <S3Key> umUsersS3keysPost(userId, opts)

Create user Object storage keys

Create an Object storage key for the specified user. The user ID is in the response body when the user is created, and in the list of the users, returned by GET. A maximum of five keys per user can be generated.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserS3KeysApi(config);
// Create user Object storage keys
api_instance
  .umUsersS3keysPost({
    userId: userId_example,
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
| **userId** | **string** | The unique ID of the user. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**S3Key**](../models/S3Key.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## umUsersS3keysPut

> <S3Key> umUsersS3keysPut(userId, keyId, s3Key, opts)

Modify a Object storage Key by Key ID

Enables or disables the specified user Object storage key.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserS3KeysApi(config);
// Modify a Object storage Key by Key ID
api_instance
  .umUsersS3keysPut({
    userId: userId_example,
    keyId: keyId_example,
    s3Key: s3Key_example,
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
| **userId** | **string** | The unique ID of the user. | [default to undefined] |
| **keyId** | **string** | The unique ID of the Object storage key. | [default to undefined] |
| **s3Key** | [**S3Key**](../models/S3Key.md) | The modified Object storage key. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**S3Key**](../models/S3Key.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## umUsersS3ssourlGet

> <S3ObjectStorageSSO> umUsersS3ssourlGet(userId, opts)

Retrieve Object storage single sign-on URLs

Retrieve Ionos Object Storage single sign-on URLs for the the specified user. The user ID is in the response body when the user is created, and in the list of the users, returned by GET.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserS3KeysApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve Object storage single sign-on URLs
api_instance
  .umUsersS3ssourlGet({
    userId: userId_example,
    pretty: true,
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
| **userId** | **string** | The unique ID of the user. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**S3ObjectStorageSSO**](../models/S3ObjectStorageSSO.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# UserManagementApi

All URIs are relative to [https://api.ionos.com/cloudapi/v5](https://api.ionos.com/cloudapi/v5)

| Method | HTTP request | Description |
| :--- | :--- | :--- |
| [**umGroupsDelete**](usermanagementapi.md#umgroupsdelete) | **DELETE** /um/groups/{groupId} | Delete a Group |
| [**umGroupsFindById**](usermanagementapi.md#umgroupsfindbyid) | **GET** /um/groups/{groupId} | Retrieve a Group |
| [**umGroupsGet**](usermanagementapi.md#umgroupsget) | **GET** /um/groups | List All Groups. |
| [**umGroupsPost**](usermanagementapi.md#umgroupspost) | **POST** /um/groups | Create a Group |
| [**umGroupsPut**](usermanagementapi.md#umgroupsput) | **PUT** /um/groups/{groupId} | Modify a group |
| [**umGroupsResourcesGet**](usermanagementapi.md#umgroupsresourcesget) | **GET** /um/groups/{groupId}/resources | Retrieve resources assigned to a group |
| [**umGroupsSharesDelete**](usermanagementapi.md#umgroupssharesdelete) | **DELETE** /um/groups/{groupId}/shares/{resourceId} | Remove a resource from a group |
| [**umGroupsSharesFindByResourceId**](usermanagementapi.md#umgroupssharesfindbyresourceid) | **GET** /um/groups/{groupId}/shares/{resourceId} | Retrieve a group share |
| [**umGroupsSharesGet**](usermanagementapi.md#umgroupssharesget) | **GET** /um/groups/{groupId}/shares | List Group Shares |
| [**umGroupsSharesPost**](usermanagementapi.md#umgroupssharespost) | **POST** /um/groups/{groupId}/shares/{resourceId} | Add a resource to a group |
| [**umGroupsSharesPut**](usermanagementapi.md#umgroupssharesput) | **PUT** /um/groups/{groupId}/shares/{resourceId} | Modify resource permissions of a group |
| [**umGroupsUsersDelete**](usermanagementapi.md#umgroupsusersdelete) | **DELETE** /um/groups/{groupId}/users/{userId} | Remove a user from a group |
| [**umGroupsUsersGet**](usermanagementapi.md#umgroupsusersget) | **GET** /um/groups/{groupId}/users | List Group Members |
| [**umGroupsUsersPost**](usermanagementapi.md#umgroupsuserspost) | **POST** /um/groups/{groupId}/users | Add a user to a group |
| [**umResourcesFindByType**](usermanagementapi.md#umresourcesfindbytype) | **GET** /um/resources/{resourceType} | Retrieve a list of Resources by type. |
| [**umResourcesFindByTypeAndId**](usermanagementapi.md#umresourcesfindbytypeandid) | **GET** /um/resources/{resourceType}/{resourceId} | Retrieve a Resource by type. |
| [**umResourcesGet**](usermanagementapi.md#umresourcesget) | **GET** /um/resources | List All Resources. |
| [**umUsersDelete**](usermanagementapi.md#umusersdelete) | **DELETE** /um/users/{userId} | Delete a User |
| [**umUsersFindById**](usermanagementapi.md#umusersfindbyid) | **GET** /um/users/{userId} | Retrieve a User |
| [**umUsersGet**](usermanagementapi.md#umusersget) | **GET** /um/users | List all Users |
| [**umUsersGroupsGet**](usermanagementapi.md#umusersgroupsget) | **GET** /um/users/{userId}/groups | Retrieve a User\'s group resources |
| [**umUsersOwnsGet**](usermanagementapi.md#umusersownsget) | **GET** /um/users/{userId}/owns | Retrieve a User\'s own resources |
| [**umUsersPost**](usermanagementapi.md#umuserspost) | **POST** /um/users | Create a user |
| [**umUsersPut**](usermanagementapi.md#umusersput) | **PUT** /um/users/{userId} | Modify a user |
| [**umUsersS3keysDelete**](usermanagementapi.md#umuserss3keysdelete) | **DELETE** /um/users/{userId}/s3keys/{keyId} | Delete a S3 key |
| [**umUsersS3keysFindByKeyId**](usermanagementapi.md#umuserss3keysfindbykeyid) | **GET** /um/users/{userId}/s3keys/{keyId} | Retrieve given S3 key belonging to the given User |
| [**umUsersS3keysGet**](usermanagementapi.md#umuserss3keysget) | **GET** /um/users/{userId}/s3keys | Retrieve a User\'s S3 keys |
| [**umUsersS3keysPost**](usermanagementapi.md#umuserss3keyspost) | **POST** /um/users/{userId}/s3keys | Create a S3 key for the given user |
| [**umUsersS3keysPut**](usermanagementapi.md#umuserss3keysput) | **PUT** /um/users/{userId}/s3keys/{keyId} | Modify a S3 key having the given key id |
| [**umUsersS3ssourlGet**](usermanagementapi.md#umuserss3ssourlget) | **GET** /um/users/{userId}/s3ssourl | Retrieve S3 object storage single signon URL for the given user |

## umGroupsDelete

> object umGroupsDelete\(groupId, opts\)

Delete a Group

Delete a group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Delete a Group
api_instance
  .umGroupsDelete({
    groupId: groupId_example,
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
| **groupId** | **string** | The unique ID of the group | \[default to undefined\] |
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

## umGroupsFindById

> umGroupsFindById\(groupId, opts\)

Retrieve a Group

You can retrieve a group by using the group ID. This value can be found in the response body when a group is created or when you GET a list of groups.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a Group
api_instance
  .umGroupsFindById({
    groupId: groupId_example,
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
| **groupId** | **string** | The unique ID of the group | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Group**](../models/group.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsGet

> umGroupsGet\(opts\)

List All Groups.

You can retrieve a complete list of all groups that you have access to

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// List All Groups.
api_instance
  .umGroupsGet({
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

[**Groups**](../models/groups.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsPost

> umGroupsPost\(group, opts\)

Create a Group

You can use this POST method to create a group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Create a Group
api_instance
  .umGroupsPost({
    group: group_example,
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
| **group** | [**Group**](../models/group.md) | Group to be created |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Group**](../models/group.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umGroupsPut

> umGroupsPut\(groupId, group, opts\)

Modify a group

You can use this method to update properties of the group.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Modify a group
api_instance
  .umGroupsPut({
    groupId: groupId_example,
    group: group_example,
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
| **groupId** | **string** | The unique ID of the group | \[default to undefined\] |
| **group** | [**Group**](../models/group.md) | Modified properties of the Group |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Group**](../models/group.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umGroupsResourcesGet

> umGroupsResourcesGet\(groupId, opts\)

Retrieve resources assigned to a group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve resources assigned to a group
api_instance
  .umGroupsResourcesGet({
    groupId: groupId_example,
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
| **groupId** | **string** | The unique ID of the group | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**ResourceGroups**](../models/resourcegroups.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsSharesDelete

> object umGroupsSharesDelete\(groupId, resourceId, opts\)

Remove a resource from a group

This will remove a resource from a group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Remove a resource from a group
api_instance
  .umGroupsSharesDelete({
    groupId: groupId_example,
    resourceId: resourceId_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **resourceId** | **string** |  | \[default to undefined\] |
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

## umGroupsSharesFindByResourceId

> umGroupsSharesFindByResourceId\(groupId, resourceId, opts\)

Retrieve a group share

This will retrieve the properties of a group share.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a group share
api_instance
  .umGroupsSharesFindByResourceId({
    groupId: groupId_example,
    resourceId: resourceId_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **resourceId** | **string** |  | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**GroupShare**](../models/groupshare.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsSharesGet

> umGroupsSharesGet\(groupId, opts\)

List Group Shares

You can retrieve a list of all resources along with their permissions of the group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// List Group Shares 
api_instance
  .umGroupsSharesGet({
    groupId: groupId_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**GroupShares**](../models/groupshares.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsSharesPost

> umGroupsSharesPost\(groupId, resourceId, resource, opts\)

Add a resource to a group

This will add a resource to the group.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Add a resource to a group
api_instance
  .umGroupsSharesPost({
    groupId: groupId_example,
    resourceId: resourceId_example,
    resource: resource_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **resourceId** | **string** |  | \[default to undefined\] |
| **resource** | [**GroupShare**](../models/groupshare.md) | Resource to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**GroupShare**](../models/groupshare.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsSharesPut

> umGroupsSharesPut\(groupId, resourceId, resource, opts\)

Modify resource permissions of a group

You can use update resource permissions of a group. If empty body will be provided, no updates will happen, instead you will be returned the current permissions of resource in a group. In this case response code will be 200

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Modify resource permissions of a group
api_instance
  .umGroupsSharesPut({
    groupId: groupId_example,
    resourceId: resourceId_example,
    resource: resource_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **resourceId** | **string** |  | \[default to undefined\] |
| **resource** | [**GroupShare**](../models/groupshare.md) | Modified Resource |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**GroupShare**](../models/groupshare.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umGroupsUsersDelete

> object umGroupsUsersDelete\(groupId, userId, opts\)

Remove a user from a group

This will remove a user from a group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Remove a user from a group
api_instance
  .umGroupsUsersDelete({
    groupId: groupId_example,
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
| :--- | :--- | :--- | :--- |
| **groupId** | **string** |  | \[default to undefined\] |
| **userId** | **string** |  | \[default to undefined\] |
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

## umGroupsUsersGet

> umGroupsUsersGet\(groupId, opts\)

List Group Members

You can retrieve a list of users who are members of the group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// List Group Members 
api_instance
  .umGroupsUsersGet({
    groupId: groupId_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**GroupMembers**](../models/groupmembers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umGroupsUsersPost

> umGroupsUsersPost\(groupId, user, opts\)

Add a user to a group

This will attach a pre-existing user to a group.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Add a user to a group
api_instance
  .umGroupsUsersPost({
    groupId: groupId_example,
    user: user_example,
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
| **groupId** | **string** |  | \[default to undefined\] |
| **user** | [**User**](../models/user.md) | User to be added |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**User**](../models/user.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umResourcesFindByType

> umResourcesFindByType\(resourceType, opts\)

Retrieve a list of Resources by type.

You can retrieve a list of resources by using the type. Allowed values are { datacenter, snapshot, image, ipblock, pcc, backupunit, k8s }. This value of resource type also be found in the response body when you GET a list of all resources.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a list of Resources by type.
api_instance
  .umResourcesFindByType({
    resourceType: resourceType_example,
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
| **resourceType** | **string** | The resource Type | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Resources**](../models/resources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umResourcesFindByTypeAndId

> umResourcesFindByTypeAndId\(resourceType, resourceId, opts\)

Retrieve a Resource by type.

You can retrieve a resource by using the type and its uuid. Allowed values for types are { datacenter, snapshot, image, ipblock, pcc, backupunit, k8s }. The value of resource type can also be found in the response body when you GET a list of all resources.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a Resource by type.
api_instance
  .umResourcesFindByTypeAndId({
    resourceType: resourceType_example,
    resourceId: resourceId_example,
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
| **resourceType** | **string** | The resource Type | \[default to undefined\] |
| **resourceId** | **string** | The resource Uuid | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Resource**](../models/resource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umResourcesGet

> umResourcesGet\(opts\)

List All Resources.

You can retrieve a complete list of all resources that you have access to

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// List All Resources.
api_instance
  .umResourcesGet({
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

[**Resources**](../models/resources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersDelete

> object umUsersDelete\(userId, opts\)

Delete a User

Delete a user

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Delete a User
api_instance
  .umUsersDelete({
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
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

## umUsersFindById

> umUsersFindById\(userId, opts\)

Retrieve a User

You can retrieve user details by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a User
api_instance
  .umUsersFindById({
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**User**](../models/user.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersGet

> umUsersGet\(opts\)

List all Users

You can retrieve a complete list of users under your account

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// List all Users 
api_instance
  .umUsersGet({
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

[**Users**](../models/users.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersGroupsGet

> umUsersGroupsGet\(userId, opts\)

Retrieve a User\'s group resources

You can retrieve group resources of user by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a User\'s group resources
api_instance
  .umUsersGroupsGet({
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**ResourceGroups**](../models/resourcegroups.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersOwnsGet

> umUsersOwnsGet\(userId, opts\)

Retrieve a User\'s own resources

You can retrieve resources owned by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a User\'s own resources
api_instance
  .umUsersOwnsGet({
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**ResourcesUsers**](../models/resourcesusers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersPost

> umUsersPost\(user, opts\)

Create a user

You can use this POST method to create a user

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Create a user
api_instance
  .umUsersPost({
    user: user_example,
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
| **user** | [**UserPost**](../models/userpost.md) | User to be created |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**User**](../models/user.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umUsersPut

> umUsersPut\(userId, user, opts\)

Modify a user

You can use update attributes of a User

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Modify a user
api_instance
  .umUsersPut({
    userId: userId_example,
    user: user_example,
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
| **userId** | **string** |  | \[default to undefined\] |
| **user** | [**UserPut**](../models/userput.md) | Modified user |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**User**](../models/user.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umUsersS3keysDelete

> object umUsersS3keysDelete\(userId, keyId, opts\)

Delete a S3 key

Delete a S3 key

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Delete a S3 key
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **keyId** | **string** | The unique access key ID of the S3 key | \[default to undefined\] |
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

## umUsersS3keysFindByKeyId

> umUsersS3keysFindByKeyId\(userId, keyId, opts\)

Retrieve given S3 key belonging to the given User

You can retrieve S3 key belonging to the given User. This user Id can be found in the response body when a user is created or when you GET a list of users. The key Id can be found in the response body when a S3 key is created or when you GET a list of all S3 keys of a user

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve given S3 key belonging to the given User
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **keyId** | **string** | The unique access key ID of the S3 key | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**S3Key**](../models/s3key.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersS3keysGet

> umUsersS3keysGet\(userId, opts\)

Retrieve a User\'s S3 keys

You can retrieve S3 keys owned by a user by using the users ID. This user Id can be found in the response body when a user is created or when you GET a list of users.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve a User\'s S3 keys
api_instance
  .umUsersS3keysGet({
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**S3Keys**](../models/s3keys.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersS3keysPost

> umUsersS3keysPost\(userId, opts\)

Create a S3 key for the given user

Creates a S3 key for the given user. This user Id can be found in the response body when a user is created or when you GET a list of users. Maximum of 5 keys can be generated for a given user

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Create a S3 key for the given user
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**S3Key**](../models/s3key.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## umUsersS3keysPut

> umUsersS3keysPut\(userId, keyId, s3Key, opts\)

Modify a S3 key having the given key id

You can enable or disable a given S3 key.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Modify a S3 key having the given key id
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
| :--- | :--- | :--- | :--- |
| **userId** | **string** |  | \[default to undefined\] |
| **keyId** | **string** | The unique access key ID of the S3 key | \[default to undefined\] |
| **s3Key** | [**S3Key**](../models/s3key.md) | Modified S3 key |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**S3Key**](../models/s3key.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## umUsersS3ssourlGet

> umUsersS3ssourlGet\(userId, opts\)

Retrieve S3 object storage single signon URL for the given user

You can retrieve S3 object storage single signon URL for the given user. This user Id can be found in the response body when a user is created or when you GET a list of users.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.UserManagementApi(config);
// Retrieve S3 object storage single signon URL for the given user
api_instance
  .umUsersS3ssourlGet({
    userId: userId_example,
    pretty: true,
    xContractNumber: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **userId** | **string** | The unique ID of the user | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**S3ObjectStorageSSO**](../models/s3objectstoragesso.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

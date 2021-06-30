# UserManagementApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**umGroupsDelete**](UserManagementApi.md#umGroupsDelete) | **DELETE** /um/groups/{groupId} | Delete a Group |
| [**umGroupsFindById**](UserManagementApi.md#umGroupsFindById) | **GET** /um/groups/{groupId} | Retrieve a Group |
| [**umGroupsGet**](UserManagementApi.md#umGroupsGet) | **GET** /um/groups | List All Groups. |
| [**umGroupsPost**](UserManagementApi.md#umGroupsPost) | **POST** /um/groups | Create a Group |
| [**umGroupsPut**](UserManagementApi.md#umGroupsPut) | **PUT** /um/groups/{groupId} | Modify a group |
| [**umGroupsResourcesGet**](UserManagementApi.md#umGroupsResourcesGet) | **GET** /um/groups/{groupId}/resources | Retrieve resources assigned to a group |
| [**umGroupsSharesDelete**](UserManagementApi.md#umGroupsSharesDelete) | **DELETE** /um/groups/{groupId}/shares/{resourceId} | Remove a resource from a group |
| [**umGroupsSharesFindByResourceId**](UserManagementApi.md#umGroupsSharesFindByResourceId) | **GET** /um/groups/{groupId}/shares/{resourceId} | Retrieve a group share |
| [**umGroupsSharesGet**](UserManagementApi.md#umGroupsSharesGet) | **GET** /um/groups/{groupId}/shares | List Group Shares  |
| [**umGroupsSharesPost**](UserManagementApi.md#umGroupsSharesPost) | **POST** /um/groups/{groupId}/shares/{resourceId} | Add a resource to a group |
| [**umGroupsSharesPut**](UserManagementApi.md#umGroupsSharesPut) | **PUT** /um/groups/{groupId}/shares/{resourceId} | Modify resource permissions of a group |
| [**umGroupsUsersDelete**](UserManagementApi.md#umGroupsUsersDelete) | **DELETE** /um/groups/{groupId}/users/{userId} | Remove a user from a group |
| [**umGroupsUsersGet**](UserManagementApi.md#umGroupsUsersGet) | **GET** /um/groups/{groupId}/users | List Group Members  |
| [**umGroupsUsersPost**](UserManagementApi.md#umGroupsUsersPost) | **POST** /um/groups/{groupId}/users | Add a user to a group |
| [**umResourcesFindByType**](UserManagementApi.md#umResourcesFindByType) | **GET** /um/resources/{resourceType} | Retrieve a list of Resources by type. |
| [**umResourcesFindByTypeAndId**](UserManagementApi.md#umResourcesFindByTypeAndId) | **GET** /um/resources/{resourceType}/{resourceId} | Retrieve a Resource by type. |
| [**umResourcesGet**](UserManagementApi.md#umResourcesGet) | **GET** /um/resources | List All Resources. |
| [**umUsersDelete**](UserManagementApi.md#umUsersDelete) | **DELETE** /um/users/{userId} | Delete a User |
| [**umUsersFindById**](UserManagementApi.md#umUsersFindById) | **GET** /um/users/{userId} | Retrieve a User |
| [**umUsersGet**](UserManagementApi.md#umUsersGet) | **GET** /um/users | List all Users  |
| [**umUsersGroupsGet**](UserManagementApi.md#umUsersGroupsGet) | **GET** /um/users/{userId}/groups | Retrieve a User\&#39;s group resources |
| [**umUsersOwnsGet**](UserManagementApi.md#umUsersOwnsGet) | **GET** /um/users/{userId}/owns | Retrieve a User\&#39;s own resources |
| [**umUsersPost**](UserManagementApi.md#umUsersPost) | **POST** /um/users | Create a user |
| [**umUsersPut**](UserManagementApi.md#umUsersPut) | **PUT** /um/users/{userId} | Modify a user |
| [**umUsersS3keysDelete**](UserManagementApi.md#umUsersS3keysDelete) | **DELETE** /um/users/{userId}/s3keys/{keyId} | Delete a S3 key |
| [**umUsersS3keysFindByKeyId**](UserManagementApi.md#umUsersS3keysFindByKeyId) | **GET** /um/users/{userId}/s3keys/{keyId} | Retrieve given S3 key belonging to the given User |
| [**umUsersS3keysGet**](UserManagementApi.md#umUsersS3keysGet) | **GET** /um/users/{userId}/s3keys | Retrieve a User\&#39;s S3 keys |
| [**umUsersS3keysPost**](UserManagementApi.md#umUsersS3keysPost) | **POST** /um/users/{userId}/s3keys | Create a S3 key for the given user |
| [**umUsersS3keysPut**](UserManagementApi.md#umUsersS3keysPut) | **PUT** /um/users/{userId}/s3keys/{keyId} | Modify a S3 key having the given key id |
| [**umUsersS3ssourlGet**](UserManagementApi.md#umUsersS3ssourlGet) | **GET** /um/users/{userId}/s3ssourl | Retrieve S3 object storage single signon URL for the given user |


# **umGroupsDelete**
> object umGroupsDelete(groupId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Group

Delete a group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Delete a Group
api_instance.umGroupsDelete(groupId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Delete a Group
api_instance.umGroupsDelete(groupId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**| The unique ID of the group | [default to undefined] |
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

# **umGroupsFindById**
> Group umGroupsFindById(groupId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Group

You can retrieve a group by using the group ID. This value can be found in the response body when a group is created or when you GET a list of groups.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a Group
api_instance.umGroupsFindById(groupId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a Group
api_instance.umGroupsFindById(groupId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**| The unique ID of the group | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Group**](../models/Group.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsGet**
> Groups umGroupsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List All Groups.

You can retrieve a complete list of all groups that you have access to

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List All Groups.
api_instance.umGroupsGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List All Groups.
api_instance.umGroupsGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Groups**](../models/Groups.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsPost**
> Group umGroupsPost(group, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Group

You can use this POST method to create a group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Create a Group
api_instance.umGroupsPost(group, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Create a Group
api_instance.umGroupsPost(group, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **group** | [**Group**](Group.md)| Group to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Group**](../models/Group.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umGroupsPut**
> Group umGroupsPut(groupId, group, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a group

You can use this method to update properties of the group.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify a group
api_instance.umGroupsPut(groupId, group, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify a group
api_instance.umGroupsPut(groupId, group, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**| The unique ID of the group | [default to undefined] |
| **group** | [**Group**](Group.md)| Modified properties of the Group |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Group**](../models/Group.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umGroupsResourcesGet**
> ResourceGroups umGroupsResourcesGet(groupId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve resources assigned to a group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve resources assigned to a group
api_instance.umGroupsResourcesGet(groupId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve resources assigned to a group
api_instance.umGroupsResourcesGet(groupId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**| The unique ID of the group | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**ResourceGroups**](../models/ResourceGroups.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsSharesDelete**
> object umGroupsSharesDelete(groupId, resourceId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Remove a resource from a group

This will remove a resource from a group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Remove a resource from a group
api_instance.umGroupsSharesDelete(groupId, resourceId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Remove a resource from a group
api_instance.umGroupsSharesDelete(groupId, resourceId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **resourceId** | **string**|  | [default to undefined] |
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

# **umGroupsSharesFindByResourceId**
> GroupShare umGroupsSharesFindByResourceId(groupId, resourceId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a group share

This will retrieve the properties of a group share.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a group share
api_instance.umGroupsSharesFindByResourceId(groupId, resourceId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a group share
api_instance.umGroupsSharesFindByResourceId(groupId, resourceId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **resourceId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**GroupShare**](../models/GroupShare.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsSharesGet**
> GroupShares umGroupsSharesGet(groupId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Group Shares 

You can retrieve a list of all resources along with their permissions of the group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List Group Shares 
api_instance.umGroupsSharesGet(groupId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List Group Shares 
api_instance.umGroupsSharesGet(groupId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**GroupShares**](../models/GroupShares.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsSharesPost**
> GroupShare umGroupsSharesPost(groupId, resourceId, resource, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Add a resource to a group

This will add a resource to the group. 

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Add a resource to a group
api_instance.umGroupsSharesPost(groupId, resourceId, resource, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Add a resource to a group
api_instance.umGroupsSharesPost(groupId, resourceId, resource, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **resourceId** | **string**|  | [default to undefined] |
| **resource** | [**GroupShare**](GroupShare.md)| Resource to be added |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**GroupShare**](../models/GroupShare.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsSharesPut**
> GroupShare umGroupsSharesPut(groupId, resourceId, resource, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify resource permissions of a group

You can use update resource permissions of a group. If empty body will be provided, no updates will happen, instead you will be returned the current permissions of resource in a group. In this case response code will be 200

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify resource permissions of a group
api_instance.umGroupsSharesPut(groupId, resourceId, resource, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify resource permissions of a group
api_instance.umGroupsSharesPut(groupId, resourceId, resource, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **resourceId** | **string**|  | [default to undefined] |
| **resource** | [**GroupShare**](GroupShare.md)| Modified Resource |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**GroupShare**](../models/GroupShare.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umGroupsUsersDelete**
> object umGroupsUsersDelete(groupId, userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Remove a user from a group

This will remove a user from a group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Remove a user from a group
api_instance.umGroupsUsersDelete(groupId, userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Remove a user from a group
api_instance.umGroupsUsersDelete(groupId, userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **userId** | **string**|  | [default to undefined] |
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

# **umGroupsUsersGet**
> GroupMembers umGroupsUsersGet(groupId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Group Members 

You can retrieve a list of users who are members of the group

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List Group Members 
api_instance.umGroupsUsersGet(groupId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List Group Members 
api_instance.umGroupsUsersGet(groupId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**GroupMembers**](../models/GroupMembers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umGroupsUsersPost**
> User umGroupsUsersPost(groupId, user, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Add a user to a group

This will attach a pre-existing user to a group. 

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Add a user to a group
api_instance.umGroupsUsersPost(groupId, user, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Add a user to a group
api_instance.umGroupsUsersPost(groupId, user, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **groupId** | **string**|  | [default to undefined] |
| **user** | [**User**](User.md)| User to be added |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**User**](../models/User.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umResourcesFindByType**
> Resources umResourcesFindByType(resourceType, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a list of Resources by type.

You can retrieve a list of resources by using the type. Allowed values are { datacenter, snapshot, image, ipblock, pcc, backupunit, k8s }. This value of resource type also be found in the response body when you GET a list of all resources.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a list of Resources by type.
api_instance.umResourcesFindByType(resourceType, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a list of Resources by type.
api_instance.umResourcesFindByType(resourceType, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resourceType** | **string**| The resource Type | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Resources**](../models/Resources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umResourcesFindByTypeAndId**
> Resource umResourcesFindByTypeAndId(resourceType, resourceId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Resource by type.

You can retrieve a resource by using the type and its uuid. Allowed values for types are { datacenter, snapshot, image, ipblock, pcc, backupunit, k8s }. The value of resource type can also be found in the response body when you GET a list of all resources.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a Resource by type.
api_instance.umResourcesFindByTypeAndId(resourceType, resourceId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a Resource by type.
api_instance.umResourcesFindByTypeAndId(resourceType, resourceId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resourceType** | **string**| The resource Type | [default to undefined] |
| **resourceId** | **string**| The resource Uuid | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Resource**](../models/Resource.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umResourcesGet**
> Resources umResourcesGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List All Resources.

You can retrieve a complete list of all resources that you have access to

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List All Resources.
api_instance.umResourcesGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List All Resources.
api_instance.umResourcesGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Resources**](../models/Resources.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersDelete**
> object umUsersDelete(userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a User

Delete a user

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Delete a User
api_instance.umUsersDelete(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Delete a User
api_instance.umUsersDelete(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
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

# **umUsersFindById**
> User umUsersFindById(userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a User

You can retrieve user details by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User
api_instance.umUsersFindById(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User
api_instance.umUsersFindById(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**User**](../models/User.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersGet**
> Users umUsersGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List all Users 

You can retrieve a complete list of users under your account

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List all Users 
api_instance.umUsersGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# List all Users 
api_instance.umUsersGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Users**](../models/Users.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersGroupsGet**
> ResourceGroups umUsersGroupsGet(userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a User\'s group resources

You can retrieve group resources of user by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User\'s group resources
api_instance.umUsersGroupsGet(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User\'s group resources
api_instance.umUsersGroupsGet(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**ResourceGroups**](../models/ResourceGroups.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersOwnsGet**
> ResourcesUsers umUsersOwnsGet(userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a User\'s own resources

You can retrieve resources owned by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User\'s own resources
api_instance.umUsersOwnsGet(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User\'s own resources
api_instance.umUsersOwnsGet(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**ResourcesUsers**](../models/ResourcesUsers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersPost**
> User umUsersPost(user, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a user

You can use this POST method to create a user

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Create a user
api_instance.umUsersPost(user, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Create a user
api_instance.umUsersPost(user, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user** | [**UserPost**](UserPost.md)| User to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**User**](../models/User.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umUsersPut**
> User umUsersPut(userId, user, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a user

You can use update attributes of a User

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify a user
api_instance.umUsersPut(userId, user, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify a user
api_instance.umUsersPut(userId, user, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**|  | [default to undefined] |
| **user** | [**UserPut**](UserPut.md)| Modified user |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**User**](../models/User.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umUsersS3keysDelete**
> object umUsersS3keysDelete(userId, keyId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a S3 key

Delete a S3 key

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Delete a S3 key
api_instance.umUsersS3keysDelete(userId, keyId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Delete a S3 key
api_instance.umUsersS3keysDelete(userId, keyId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **keyId** | **string**| The unique access key ID of the S3 key | [default to undefined] |
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

# **umUsersS3keysFindByKeyId**
> S3Key umUsersS3keysFindByKeyId(userId, keyId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve given S3 key belonging to the given User

You can retrieve S3 key belonging to the given User. This user Id can be found in the response body when a user is created or when you GET a list of users. The key Id can be found in the response body when a S3 key is created or when you GET a list of all S3 keys of a user

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve given S3 key belonging to the given User
api_instance.umUsersS3keysFindByKeyId(userId, keyId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve given S3 key belonging to the given User
api_instance.umUsersS3keysFindByKeyId(userId, keyId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **keyId** | **string**| The unique access key ID of the S3 key | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**S3Key**](../models/S3Key.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersS3keysGet**
> S3Keys umUsersS3keysGet(userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a User\'s S3 keys

You can retrieve S3 keys owned by a user by using the users ID. This user Id can be found in the response body when a user is created or when you GET a list of users.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User\'s S3 keys
api_instance.umUsersS3keysGet(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve a User\'s S3 keys
api_instance.umUsersS3keysGet(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**S3Keys**](../models/S3Keys.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersS3keysPost**
> S3Key umUsersS3keysPost(userId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a S3 key for the given user

Creates a S3 key for the given user. This user Id can be found in the response body when a user is created or when you GET a list of users. Maximum of 5 keys can be generated for a given user

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Create a S3 key for the given user
api_instance.umUsersS3keysPost(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Create a S3 key for the given user
api_instance.umUsersS3keysPost(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**S3Key**](../models/S3Key.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **umUsersS3keysPut**
> S3Key umUsersS3keysPut(userId, keyId, s3Key, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a S3 key having the given key id

You can enable or disable a given S3 key.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify a S3 key having the given key id
api_instance.umUsersS3keysPut(userId, keyId, s3Key, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Modify a S3 key having the given key id
api_instance.umUsersS3keysPut(userId, keyId, s3Key, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**|  | [default to undefined] |
| **keyId** | **string**| The unique access key ID of the S3 key | [default to undefined] |
| **s3Key** | [**S3Key**](S3Key.md)| Modified S3 key |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**S3Key**](../models/S3Key.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **umUsersS3ssourlGet**
> S3ObjectStorageSSO umUsersS3ssourlGet(userId, pretty=pretty, xContractNumber=xContractNumber)

Retrieve S3 object storage single signon URL for the given user

You can retrieve S3 object storage single signon URL for the given user. This user Id can be found in the response body when a user is created or when you GET a list of users.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve S3 object storage single signon URL for the given user
api_instance.umUsersS3ssourlGet(userId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.UserManagementApi(config)
# Retrieve S3 object storage single signon URL for the given user
api_instance.umUsersS3ssourlGet(userId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **userId** | **string**| The unique ID of the user | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**S3ObjectStorageSSO**](../models/S3ObjectStorageSSO.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


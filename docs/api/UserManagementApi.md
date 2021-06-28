# Class: UserManagementApi

## UserManagementApi

#### new UserManagementApi()

UserManagementApi - object-oriented interface

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3112](/../../api/user-management-api.ts#L3112)

---------------

### Extends

- BaseAPI

### Methods

#### umGroupsDelete(requestParameters, options)

Delete a Group
Delete a group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsDeleteRequest](global.md#UserManagementApiUmGroupsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3127](/../../api/user-management-api.ts#L3127)

##### Throws:

*RequiredError*

#### umGroupsFindById(requestParameters, options)

Retrieve a Group
You can retrieve a group by using the group ID. This value can be found in the response body when a group is created or when you GET a list of groups.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsFindByIdRequest](global.md#UserManagementApiUmGroupsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3138](/../../api/user-management-api.ts#L3138)

##### Throws:

*RequiredError*

#### umGroupsGet(requestParameters, options)

List All Groups.
You can retrieve a complete list of all groups that you have access to

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsGetRequest](global.md#UserManagementApiUmGroupsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3149](/../../api/user-management-api.ts#L3149)

##### Throws:

*RequiredError*

#### umGroupsPost(requestParameters, options)

Create a Group
You can use this POST method to create a group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsPostRequest](global.md#UserManagementApiUmGroupsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3160](/../../api/user-management-api.ts#L3160)

##### Throws:

*RequiredError*

#### umGroupsPut(requestParameters, options)

Modify a group
You can use this method to update properties of the group.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsPutRequest](global.md#UserManagementApiUmGroupsPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3171](/../../api/user-management-api.ts#L3171)

##### Throws:

*RequiredError*

#### umGroupsResourcesGet(requestParameters, options)

Retrieve resources assigned to a group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsResourcesGetRequest](global.md#UserManagementApiUmGroupsResourcesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3182](/../../api/user-management-api.ts#L3182)

##### Throws:

*RequiredError*

#### umGroupsSharesDelete(requestParameters, options)

Remove a resource from a group
This will remove a resource from a group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsSharesDeleteRequest](global.md#UserManagementApiUmGroupsSharesDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3193](/../../api/user-management-api.ts#L3193)

##### Throws:

*RequiredError*

#### umGroupsSharesFindByResourceId(requestParameters, options)

Retrieve a group share
This will retrieve the properties of a group share.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsSharesFindByResourceIdRequest](global.md#UserManagementApiUmGroupsSharesFindByResourceIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3204](/../../api/user-management-api.ts#L3204)

##### Throws:

*RequiredError*

#### umGroupsSharesGet(requestParameters, options)

List Group Shares
You can retrieve a list of all resources along with their permissions of the group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsSharesGetRequest](global.md#UserManagementApiUmGroupsSharesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3215](/../../api/user-management-api.ts#L3215)

##### Throws:

*RequiredError*

#### umGroupsSharesPost(requestParameters, options)

Add a resource to a group
This will add a resource to the group.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsSharesPostRequest](global.md#UserManagementApiUmGroupsSharesPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3226](/../../api/user-management-api.ts#L3226)

##### Throws:

*RequiredError*

#### umGroupsSharesPut(requestParameters, options)

Modify resource permissions of a group
You can use update resource permissions of a group. If empty body will be provided, no updates will happen, instead you will be returned the current permissions of resource in a group. In this case response code will be 200

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsSharesPutRequest](global.md#UserManagementApiUmGroupsSharesPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3237](/../../api/user-management-api.ts#L3237)

##### Throws:

*RequiredError*

#### umGroupsUsersDelete(requestParameters, options)

Remove a user from a group
This will remove a user from a group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsUsersDeleteRequest](global.md#UserManagementApiUmGroupsUsersDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3248](/../../api/user-management-api.ts#L3248)

##### Throws:

*RequiredError*

#### umGroupsUsersGet(requestParameters, options)

List Group Members
You can retrieve a list of users who are members of the group

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsUsersGetRequest](global.md#UserManagementApiUmGroupsUsersGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3259](/../../api/user-management-api.ts#L3259)

##### Throws:

*RequiredError*

#### umGroupsUsersPost(requestParameters, options)

Add a user to a group
This will attach a pre-existing user to a group.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmGroupsUsersPostRequest](global.md#UserManagementApiUmGroupsUsersPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3270](/../../api/user-management-api.ts#L3270)

##### Throws:

*RequiredError*

#### umResourcesFindByType(requestParameters, options)

Retrieve a list of Resources by type.
You can retrieve a list of resources by using the type. Allowed values are { datacenter, snapshot, image, ipblock, pcc, backupunit, k8s }. This value of resource type also be found in the response body when you GET a list of all resources.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmResourcesFindByTypeRequest](global.md#UserManagementApiUmResourcesFindByTypeRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3281](/../../api/user-management-api.ts#L3281)

##### Throws:

*RequiredError*

#### umResourcesFindByTypeAndId(requestParameters, options)

Retrieve a Resource by type.
You can retrieve a resource by using the type and its uuid. Allowed values for types are { datacenter, snapshot, image, ipblock, pcc, backupunit, k8s }. The value of resource type can also be found in the response body when you GET a list of all resources.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmResourcesFindByTypeAndIdRequest](global.md#UserManagementApiUmResourcesFindByTypeAndIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3292](/../../api/user-management-api.ts#L3292)

##### Throws:

*RequiredError*

#### umResourcesGet(requestParameters, options)

List All Resources.
You can retrieve a complete list of all resources that you have access to

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmResourcesGetRequest](global.md#UserManagementApiUmResourcesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3303](/../../api/user-management-api.ts#L3303)

##### Throws:

*RequiredError*

#### umUsersDelete(requestParameters, options)

Delete a User
Delete a user

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersDeleteRequest](global.md#UserManagementApiUmUsersDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3314](/../../api/user-management-api.ts#L3314)

##### Throws:

*RequiredError*

#### umUsersFindById(requestParameters, options)

Retrieve a User
You can retrieve user details by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersFindByIdRequest](global.md#UserManagementApiUmUsersFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3325](/../../api/user-management-api.ts#L3325)

##### Throws:

*RequiredError*

#### umUsersGet(requestParameters, options)

List all Users
You can retrieve a complete list of users under your account

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersGetRequest](global.md#UserManagementApiUmUsersGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3336](/../../api/user-management-api.ts#L3336)

##### Throws:

*RequiredError*

#### umUsersGroupsGet(requestParameters, options)

Retrieve a User\'s group resources
You can retrieve group resources of user by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersGroupsGetRequest](global.md#UserManagementApiUmUsersGroupsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3347](/../../api/user-management-api.ts#L3347)

##### Throws:

*RequiredError*

#### umUsersOwnsGet(requestParameters, options)

Retrieve a User\'s own resources
You can retrieve resources owned by using the users ID. This value can be found in the response body when a user is created or when you GET a list of users.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersOwnsGetRequest](global.md#UserManagementApiUmUsersOwnsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3358](/../../api/user-management-api.ts#L3358)

##### Throws:

*RequiredError*

#### umUsersPost(requestParameters, options)

Create a user
You can use this POST method to create a user

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersPostRequest](global.md#UserManagementApiUmUsersPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3369](/../../api/user-management-api.ts#L3369)

##### Throws:

*RequiredError*

#### umUsersPut(requestParameters, options)

Modify a user
You can use update attributes of a User

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersPutRequest](global.md#UserManagementApiUmUsersPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3380](/../../api/user-management-api.ts#L3380)

##### Throws:

*RequiredError*

#### umUsersS3keysDelete(requestParameters, options)

Delete a S3 key
Delete a S3 key

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersS3keysDeleteRequest](global.md#UserManagementApiUmUsersS3keysDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3391](/../../api/user-management-api.ts#L3391)

##### Throws:

*RequiredError*

#### umUsersS3keysFindByKeyId(requestParameters, options)

Retrieve given S3 key belonging to the given User
You can retrieve S3 key belonging to the given User. This user Id can be found in the response body when a user is created or when you GET a list of users. The key Id can be found in the response body when a S3 key is created or when you GET a list of all S3 keys of a user

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersS3keysFindByKeyIdRequest](global.md#UserManagementApiUmUsersS3keysFindByKeyIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3402](/../../api/user-management-api.ts#L3402)

##### Throws:

*RequiredError*

#### umUsersS3keysGet(requestParameters, options)

Retrieve a User\'s S3 keys
You can retrieve S3 keys owned by a user by using the users ID. This user Id can be found in the response body when a user is created or when you GET a list of users.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersS3keysGetRequest](global.md#UserManagementApiUmUsersS3keysGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3413](/../../api/user-management-api.ts#L3413)

##### Throws:

*RequiredError*

#### umUsersS3keysPost(requestParameters, options)

Create a S3 key for the given user
Creates a S3 key for the given user. This user Id can be found in the response body when a user is created or when you GET a list of users. Maximum of 5 keys can be generated for a given user

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersS3keysPostRequest](global.md#UserManagementApiUmUsersS3keysPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3424](/../../api/user-management-api.ts#L3424)

##### Throws:

*RequiredError*

#### umUsersS3keysPut(requestParameters, options)

Modify a S3 key having the given key id
You can enable or disable a given S3 key.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersS3keysPutRequest](global.md#UserManagementApiUmUsersS3keysPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3435](/../../api/user-management-api.ts#L3435)

##### Throws:

*RequiredError*

#### umUsersS3ssourlGet(requestParameters, options)

Retrieve S3 object storage single signon URL for the given user
You can retrieve S3 object storage single signon URL for the given user. This user Id can be found in the response body when a user is created or when you GET a list of users.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[UserManagementApiUmUsersS3ssourlGetRequest](global.md#UserManagementApiUmUsersS3ssourlGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/user-management-api.ts](/../../api/user-management-api.ts), [line 3446](/../../api/user-management-api.ts#L3446)

##### Throws:

*RequiredError*
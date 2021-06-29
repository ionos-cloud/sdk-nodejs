# BackupUnitApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**backupunitsDelete**](BackupUnitApi.md#backupunitsDelete) | **DELETE** /backupunits/{backupunitId} | Delete a Backup Unit |
| [**backupunitsFindById**](BackupUnitApi.md#backupunitsFindById) | **GET** /backupunits/{backupunitId} | Returns the specified backup Unit |
| [**backupunitsGet**](BackupUnitApi.md#backupunitsGet) | **GET** /backupunits | List Backup Units  |
| [**backupunitsPatch**](BackupUnitApi.md#backupunitsPatch) | **PATCH** /backupunits/{backupunitId} | Partially modify a Backup Unit |
| [**backupunitsPost**](BackupUnitApi.md#backupunitsPost) | **POST** /backupunits | Create a Backup Unit |
| [**backupunitsPut**](BackupUnitApi.md#backupunitsPut) | **PUT** /backupunits/{backupunitId} | Modify a Backup Unit |
| [**backupunitsSsourlGet**](BackupUnitApi.md#backupunitsSsourlGet) | **GET** /backupunits/{backupunitId}/ssourl | Returns a single signon URL for the specified backup Unit. |


# **backupunitsDelete**
> object backupunitsDelete(backupunitId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Backup Unit

NOTE: Running through the deletion process will delete: - the backup plans inside the Backup Unit. - all backups associated with the Backup Unit. - the backup user and finally also the unit

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Delete a Backup Unit

api_instance.backupunitsDelete(backupunitId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Delete a Backup Unit

api_instance.backupunitsDelete(backupunitId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **backupunitId** | **string**| The unique ID of the backup Unit | [default to undefined] |
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

# **backupunitsFindById**
> BackupUnit backupunitsFindById(backupunitId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Returns the specified backup Unit

You can retrieve the details of an specific backup unit.

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Returns the specified backup Unit

api_instance.backupunitsFindById(backupunitId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Returns the specified backup Unit

api_instance.backupunitsFindById(backupunitId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **backupunitId** | **string**| The unique ID of the backup unit | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**BackupUnit**](BackupUnit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **backupunitsGet**
> BackupUnits backupunitsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Backup Units 

You can retrieve a complete list of backup Units that you have access to.

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# List Backup Units 

api_instance.backupunitsGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# List Backup Units 

api_instance.backupunitsGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**BackupUnits**](BackupUnits.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **backupunitsPatch**
> BackupUnit backupunitsPatch(backupunitId, backupUnitProperties, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Backup Unit

You can use update a backup Unit properties

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Partially modify a Backup Unit

api_instance.backupunitsPatch(backupunitId, backupUnitProperties, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Partially modify a Backup Unit

api_instance.backupunitsPatch(backupunitId, backupUnitProperties, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **backupunitId** | **string**| The unique ID of the backup unit | [default to undefined] |
| **backupUnitProperties** | [**BackupUnitProperties**](BackupUnitProperties.md)| Modified backup Unit properties |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**BackupUnit**](BackupUnit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **backupunitsPost**
> BackupUnit backupunitsPost(backupUnit, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Backup Unit

Create a Backup Unit. A Backup Unit is considered a resource like a virtual datacenter, IP Block, snapshot, etc. It shall be shareable via groups inside our User Management Feature 

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Create a Backup Unit

api_instance.backupunitsPost(backupUnit, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Create a Backup Unit

api_instance.backupunitsPost(backupUnit, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **backupUnit** | [**BackupUnit**](BackupUnit.md)| Payload containing data to create a new Backup Unit |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**BackupUnit**](BackupUnit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **backupunitsPut**
> BackupUnit backupunitsPut(backupunitId, backupUnit, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Backup Unit

You can use update a backup Unit properties

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Modify a Backup Unit

api_instance.backupunitsPut(backupunitId, backupUnit, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Modify a Backup Unit

api_instance.backupunitsPut(backupunitId, backupUnit, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **backupunitId** | **string**| The unique ID of the backup unit | [default to undefined] |
| **backupUnit** | [**BackupUnit**](BackupUnit.md)| Modified backup Unit |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**BackupUnit**](BackupUnit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **backupunitsSsourlGet**
> BackupUnitSSO backupunitsSsourlGet(backupunitId, pretty=pretty, xContractNumber=xContractNumber)

Returns a single signon URL for the specified backup Unit.

Returns a single signon URL for the specified backup Unit.

### Example

* Basic Authentication (Basic Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Returns a single signon URL for the specified backup Unit.

api_instance.backupunitsSsourlGet(backupunitId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript

const ionoscloud = require('@ionos-cloud/sdk-nodejs')

# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});

api_instance = ionoscloud.BackupUnitApi(config)

# Returns a single signon URL for the specified backup Unit.

api_instance.backupunitsSsourlGet(backupunitId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **backupunitId** | **string**| The unique UUID of the backup unit | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**BackupUnitSSO**](BackupUnitSSO.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


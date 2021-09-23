# BackupUnitApi

All URIs are relative to [https://api.ionos.com/cloudapi/v5](https://api.ionos.com/cloudapi/v5)

| Method | HTTP request | Description |
| :--- | :--- | :--- |
| [**backupunitsDelete**](backupunitapi.md#backupunitsdelete) | **DELETE** /backupunits/{backupunitId} | Delete a Backup Unit |
| [**backupunitsFindById**](backupunitapi.md#backupunitsfindbyid) | **GET** /backupunits/{backupunitId} | Returns the specified backup Unit |
| [**backupunitsGet**](backupunitapi.md#backupunitsget) | **GET** /backupunits | List Backup Units |
| [**backupunitsPatch**](backupunitapi.md#backupunitspatch) | **PATCH** /backupunits/{backupunitId} | Partially modify a Backup Unit |
| [**backupunitsPost**](backupunitapi.md#backupunitspost) | **POST** /backupunits | Create a Backup Unit |
| [**backupunitsPut**](backupunitapi.md#backupunitsput) | **PUT** /backupunits/{backupunitId} | Modify a Backup Unit |
| [**backupunitsSsourlGet**](backupunitapi.md#backupunitsssourlget) | **GET** /backupunits/{backupunitId}/ssourl | Returns a single signon URL for the specified backup Unit. |

## backupunitsDelete

> object backupunitsDelete\(backupunitId, opts\)

Delete a Backup Unit

NOTE: Running through the deletion process will delete: - the backup plans inside the Backup Unit. - all backups associated with the Backup Unit. - the backup user and finally also the unit

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// Delete a Backup Unit
api_instance
  .backupunitsDelete({
    backupunitId: backupunitId_example,
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
| **backupunitId** | **string** | The unique ID of the backup Unit | \[default to undefined\] |
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

## backupunitsFindById

> backupunitsFindById\(backupunitId, opts\)

Returns the specified backup Unit

You can retrieve the details of an specific backup unit.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// Returns the specified backup Unit
api_instance
  .backupunitsFindById({
    backupunitId: backupunitId_example,
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
| **backupunitId** | **string** | The unique ID of the backup unit | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**BackupUnit**](../models/backupunit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## backupunitsGet

> backupunitsGet\(opts\)

List Backup Units

You can retrieve a complete list of backup Units that you have access to.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// List Backup Units 
api_instance
  .backupunitsGet({
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

[**BackupUnits**](../models/backupunits.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## backupunitsPatch

> backupunitsPatch\(backupunitId, backupUnitProperties, opts\)

Partially modify a Backup Unit

You can use update a backup Unit properties

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// Partially modify a Backup Unit
api_instance
  .backupunitsPatch({
    backupunitId: backupunitId_example,
    backupUnitProperties: backupUnitProperties_example,
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
| **backupunitId** | **string** | The unique ID of the backup unit | \[default to undefined\] |
| **backupUnitProperties** | [**BackupUnitProperties**](../models/backupunitproperties.md) | Modified backup Unit properties |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**BackupUnit**](../models/backupunit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## backupunitsPost

> backupunitsPost\(backupUnit, opts\)

Create a Backup Unit

Create a Backup Unit. A Backup Unit is considered a resource like a virtual datacenter, IP Block, snapshot, etc. It shall be shareable via groups inside our User Management Feature

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// Create a Backup Unit
api_instance
  .backupunitsPost({
    backupUnit: backupUnit_example,
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
| **backupUnit** | [**BackupUnit**](../models/backupunit.md) | Payload containing data to create a new Backup Unit |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**BackupUnit**](../models/backupunit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## backupunitsPut

> backupunitsPut\(backupunitId, backupUnit, opts\)

Modify a Backup Unit

You can use update a backup Unit properties

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// Modify a Backup Unit
api_instance
  .backupunitsPut({
    backupunitId: backupunitId_example,
    backupUnit: backupUnit_example,
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
| **backupunitId** | **string** | The unique ID of the backup unit | \[default to undefined\] |
| **backupUnit** | [**BackupUnit**](../models/backupunit.md) | Modified backup Unit |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**BackupUnit**](../models/backupunit.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## backupunitsSsourlGet

> backupunitsSsourlGet\(backupunitId, opts\)

Returns a single signon URL for the specified backup Unit.

Returns a single signon URL for the specified backup Unit.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupUnitApi(config);
// Returns a single signon URL for the specified backup Unit.
api_instance
  .backupunitsSsourlGet({
    backupunitId: backupunitId_example,
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
| **backupunitId** | **string** | The unique UUID of the backup unit | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**BackupUnitSSO**](../models/backupunitsso.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json


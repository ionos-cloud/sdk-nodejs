# PrivateCrossConnectApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**pccsDelete**](PrivateCrossConnectApi.md#pccsdelete) | **DELETE** /pccs/{pccId} | Delete a Private Cross-Connect |
| [**pccsFindById**](PrivateCrossConnectApi.md#pccsfindbyid) | **GET** /pccs/{pccId} | Retrieve a Private Cross-Connect |
| [**pccsGet**](PrivateCrossConnectApi.md#pccsget) | **GET** /pccs | List Private Cross-Connects  |
| [**pccsPatch**](PrivateCrossConnectApi.md#pccspatch) | **PATCH** /pccs/{pccId} | Partially modify a private cross-connect |
| [**pccsPost**](PrivateCrossConnectApi.md#pccspost) | **POST** /pccs | Create a Private Cross-Connect |


# **pccsDelete**
> object pccsDelete(pccId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Private Cross-Connect

Delete a private cross-connect if no datacenters are joined to the given PCC

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Delete a Private Cross-Connect
api_instance.pccsDelete(pccId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Delete a Private Cross-Connect
api_instance.pccsDelete(pccId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pccId** | **string**| The unique ID of the private cross-connect | [default to undefined] |
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

# **pccsFindById**
> PrivateCrossConnect pccsFindById(pccId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Private Cross-Connect

You can retrieve a private cross-connect by using the resource\'s ID. This value can be found in the response body when a private cross-connect is created or when you GET a list of private cross-connects.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Retrieve a Private Cross-Connect
api_instance.pccsFindById(pccId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Retrieve a Private Cross-Connect
api_instance.pccsFindById(pccId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pccId** | **string**| The unique ID of the private cross-connect | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**PrivateCrossConnect**](../models/PrivateCrossConnect.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **pccsGet**
> PrivateCrossConnects pccsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Private Cross-Connects 

You can retrieve a complete list of private cross-connects provisioned under your account

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# List Private Cross-Connects 
api_instance.pccsGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# List Private Cross-Connects 
api_instance.pccsGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**PrivateCrossConnects**](../models/PrivateCrossConnects.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **pccsPatch**
> PrivateCrossConnect pccsPatch(pccId, pcc, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a private cross-connect

You can use update private cross-connect to re-name or update its description

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Partially modify a private cross-connect
api_instance.pccsPatch(pccId, pcc, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Partially modify a private cross-connect
api_instance.pccsPatch(pccId, pcc, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pccId** | **string**| The unique ID of the private cross-connect | [default to undefined] |
| **pcc** | [**PrivateCrossConnectProperties**](PrivateCrossConnectProperties.md)| Modified properties of private cross-connect |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**PrivateCrossConnect**](../models/PrivateCrossConnect.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **pccsPost**
> PrivateCrossConnect pccsPost(pcc, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Private Cross-Connect

You can use this POST method to create a private cross-connect

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Create a Private Cross-Connect
api_instance.pccsPost(pcc, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.PrivateCrossConnectApi(config)
# Create a Private Cross-Connect
api_instance.pccsPost(pcc, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pcc** | [**PrivateCrossConnect**](PrivateCrossConnect.md)| Private Cross-Connect to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**PrivateCrossConnect**](../models/PrivateCrossConnect.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


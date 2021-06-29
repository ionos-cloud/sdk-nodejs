# ContractApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**contractsGet**](ContractApi.md#contractsGet) | **GET** /contracts | Retrieve a Contract |


# **contractsGet**
> Contract contractsGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Contract

Retrieves the attributes of user\'s contract.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ContractApi(config)
# Retrieve a Contract
api_instance.contractsGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ContractApi(config)
# Retrieve a Contract
api_instance.contractsGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Contract**](Contract.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


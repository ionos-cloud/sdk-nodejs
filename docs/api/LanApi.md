# LanApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**datacentersLansDelete**](LanApi.md#datacentersLansDelete) | **DELETE** /datacenters/{datacenterId}/lans/{lanId} | Delete a Lan. |
| [**datacentersLansFindById**](LanApi.md#datacentersLansFindById) | **GET** /datacenters/{datacenterId}/lans/{lanId} | Retrieve a Lan |
| [**datacentersLansGet**](LanApi.md#datacentersLansGet) | **GET** /datacenters/{datacenterId}/lans | List Lans |
| [**datacentersLansNicsFindById**](LanApi.md#datacentersLansNicsFindById) | **GET** /datacenters/{datacenterId}/lans/{lanId}/nics/{nicId} | Retrieve a nic attached to lan |
| [**datacentersLansNicsGet**](LanApi.md#datacentersLansNicsGet) | **GET** /datacenters/{datacenterId}/lans/{lanId}/nics | List Lan Members  |
| [**datacentersLansNicsPost**](LanApi.md#datacentersLansNicsPost) | **POST** /datacenters/{datacenterId}/lans/{lanId}/nics | Attach a nic |
| [**datacentersLansPatch**](LanApi.md#datacentersLansPatch) | **PATCH** /datacenters/{datacenterId}/lans/{lanId} | Partially modify a Lan |
| [**datacentersLansPost**](LanApi.md#datacentersLansPost) | **POST** /datacenters/{datacenterId}/lans | Create a Lan |
| [**datacentersLansPut**](LanApi.md#datacentersLansPut) | **PUT** /datacenters/{datacenterId}/lans/{lanId} | Modify a Lan |


# **datacentersLansDelete**
> object datacentersLansDelete(datacenterId, lanId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Lan.

Removes the specific Lan

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Delete a Lan.
api_instance.datacentersLansDelete(datacenterId, lanId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Delete a Lan.
api_instance.datacentersLansDelete(datacenterId, lanId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
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

# **datacentersLansFindById**
> Lan datacentersLansFindById(datacenterId, lanId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Lan

Retrieves the attributes of a given LAN

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Retrieve a Lan
api_instance.datacentersLansFindById(datacenterId, lanId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Retrieve a Lan
api_instance.datacentersLansFindById(datacenterId, lanId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Lan**](Lan.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLansGet**
> Lans datacentersLansGet(datacenterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Lans

Retrieve a list of LANs within the datacenter

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# List Lans
api_instance.datacentersLansGet(datacenterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# List Lans
api_instance.datacentersLansGet(datacenterId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Lans**](Lans.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLansNicsFindById**
> Nic datacentersLansNicsFindById(datacenterId, lanId, nicId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a nic attached to lan

This will retrieve the properties of an attached nic.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Retrieve a nic attached to lan
api_instance.datacentersLansNicsFindById(datacenterId, lanId, nicId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Retrieve a nic attached to lan
api_instance.datacentersLansNicsFindById(datacenterId, lanId, nicId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
| **nicId** | **string**| The unique ID of the NIC | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLansNicsGet**
> LanNics datacentersLansNicsGet(datacenterId, lanId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Lan Members 

You can retrieve a list of nics attached to a lan

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# List Lan Members 
api_instance.datacentersLansNicsGet(datacenterId, lanId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# List Lan Members 
api_instance.datacentersLansNicsGet(datacenterId, lanId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**LanNics**](LanNics.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersLansNicsPost**
> Nic datacentersLansNicsPost(datacenterId, lanId, nic, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Attach a nic

This will attach a pre-existing nic to a lan. 

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Attach a nic
api_instance.datacentersLansNicsPost(datacenterId, lanId, nic, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Attach a nic
api_instance.datacentersLansNicsPost(datacenterId, lanId, nic, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
| **nic** | [**Nic**](Nic.md)| Nic to be attached |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Nic**](Nic.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersLansPatch**
> Lan datacentersLansPatch(datacenterId, lanId, lan, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Lan

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
api_instance = ionoscloud.LanApi(config)
# Partially modify a Lan
api_instance.datacentersLansPatch(datacenterId, lanId, lan, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Partially modify a Lan
api_instance.datacentersLansPatch(datacenterId, lanId, lan, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
| **lan** | [**LanProperties**](LanProperties.md)| Modified Lan |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Lan**](Lan.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersLansPost**
> LanPost datacentersLansPost(datacenterId, lan, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Lan

Creates a LAN within the datacenter

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Create a Lan
api_instance.datacentersLansPost(datacenterId, lan, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Create a Lan
api_instance.datacentersLansPost(datacenterId, lan, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lan** | [**LanPost**](LanPost.md)| Lan to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**LanPost**](LanPost.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersLansPut**
> Lan datacentersLansPut(datacenterId, lanId, lan, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Lan

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
api_instance = ionoscloud.LanApi(config)
# Modify a Lan
api_instance.datacentersLansPut(datacenterId, lanId, lan, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.LanApi(config)
# Modify a Lan
api_instance.datacentersLansPut(datacenterId, lanId, lan, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **lanId** | **string**| The unique ID of the LAN | [default to undefined] |
| **lan** | [**Lan**](Lan.md)| Modified Lan |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Lan**](Lan.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


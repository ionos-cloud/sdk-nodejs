# ImageApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**imagesDelete**](ImageApi.md#imagesdelete) | **DELETE** /images/{imageId} | Delete an Image |
| [**imagesFindById**](ImageApi.md#imagesfindbyid) | **GET** /images/{imageId} | Retrieve an Image |
| [**imagesGet**](ImageApi.md#imagesget) | **GET** /images | List Images  |
| [**imagesPatch**](ImageApi.md#imagespatch) | **PATCH** /images/{imageId} | Partially modify an Image |
| [**imagesPut**](ImageApi.md#imagesput) | **PUT** /images/{imageId} | Modify an Image |


# **imagesDelete**
> object imagesDelete(imageId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete an Image

Deletes the specified image. This operation is permitted on private image only.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Delete an Image
api_instance.imagesDelete({
  imageId: imageId_example,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Delete an Image
api_instance.imagesDelete({
  imageId: imageId_example,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **imageId** | **string**|  | [default to undefined] |
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

# **imagesFindById**
> Image imagesFindById(imageId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve an Image

Retrieves the attributes of a given image.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Retrieve an Image
api_instance.imagesFindById({
  imageId: imageId_example,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Retrieve an Image
api_instance.imagesFindById({
  imageId: imageId_example,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **imageId** | **string**|  | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Image**](../models/Image.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **imagesGet**
> Images imagesGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Images 

Retrieve a list of images within the datacenter

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// List Images 
api_instance.imagesGet({
  pretty: true,
  depth: 56,
  xContractNumber: 56
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// List Images 
api_instance.imagesGet({
  pretty: true,
  depth: 56,
  xContractNumber: 56
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Images**](../models/Images.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **imagesPatch**
> Image imagesPatch(imageId, image, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify an Image

You can use update attributes of a resource

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Partially modify an Image
api_instance.imagesPatch({
  imageId: imageId_example,
  image: ,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Partially modify an Image
api_instance.imagesPatch({
  imageId: imageId_example,
  image: ,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **imageId** | **string**|  | [default to undefined] |
| **image** | [**ImageProperties**](ImageProperties.md)| Modified Image |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Image**](../models/Image.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **imagesPut**
> Image imagesPut(imageId, image, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify an Image

You can use update attributes of a resource

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Modify an Image
api_instance.imagesPut({
  imageId: imageId_example,
  image: ,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
const api_instance = new ionoscloud.ImageApi(config)
// Modify an Image
api_instance.imagesPut({
  imageId: imageId_example,
  image: ,
  pretty: true,
  depth: 56,
  xContractNumber: 56, 
  options: {}
}).then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **imageId** | **string**|  | [default to undefined] |
| **image** | [**Image**](Image.md)| Modified Image |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Image**](../models/Image.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


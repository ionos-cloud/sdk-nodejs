# ServerApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**datacentersServersCdromsDelete**](ServerApi.md#datacentersServersCdromsDelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/cdroms/{cdromId} | Detach a CD-ROM |
| [**datacentersServersCdromsFindById**](ServerApi.md#datacentersServersCdromsFindById) | **GET** /datacenters/{datacenterId}/servers/{serverId}/cdroms/{cdromId} | Retrieve an attached CD-ROM |
| [**datacentersServersCdromsGet**](ServerApi.md#datacentersServersCdromsGet) | **GET** /datacenters/{datacenterId}/servers/{serverId}/cdroms | List attached CD-ROMs  |
| [**datacentersServersCdromsPost**](ServerApi.md#datacentersServersCdromsPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/cdroms | Attach a CD-ROM |
| [**datacentersServersDelete**](ServerApi.md#datacentersServersDelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId} | Delete a Server |
| [**datacentersServersFindById**](ServerApi.md#datacentersServersFindById) | **GET** /datacenters/{datacenterId}/servers/{serverId} | Retrieve a Server |
| [**datacentersServersGet**](ServerApi.md#datacentersServersGet) | **GET** /datacenters/{datacenterId}/servers | List Servers  |
| [**datacentersServersPatch**](ServerApi.md#datacentersServersPatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId} | Partially modify a Server |
| [**datacentersServersPost**](ServerApi.md#datacentersServersPost) | **POST** /datacenters/{datacenterId}/servers | Create a Server |
| [**datacentersServersPut**](ServerApi.md#datacentersServersPut) | **PUT** /datacenters/{datacenterId}/servers/{serverId} | Modify a Server |
| [**datacentersServersRebootPost**](ServerApi.md#datacentersServersRebootPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/reboot | Reboot a Server |
| [**datacentersServersStartPost**](ServerApi.md#datacentersServersStartPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/start | Start a Server |
| [**datacentersServersStopPost**](ServerApi.md#datacentersServersStopPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/stop | Stop a Server |
| [**datacentersServersUpgradePost**](ServerApi.md#datacentersServersUpgradePost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/upgrade | Upgrade a Server |
| [**datacentersServersVolumesDelete**](ServerApi.md#datacentersServersVolumesDelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/volumes/{volumeId} | Detach a volume |
| [**datacentersServersVolumesFindById**](ServerApi.md#datacentersServersVolumesFindById) | **GET** /datacenters/{datacenterId}/servers/{serverId}/volumes/{volumeId} | Retrieve an attached volume |
| [**datacentersServersVolumesGet**](ServerApi.md#datacentersServersVolumesGet) | **GET** /datacenters/{datacenterId}/servers/{serverId}/volumes | List Attached Volumes |
| [**datacentersServersVolumesPost**](ServerApi.md#datacentersServersVolumesPost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/volumes | Attach a volume |


# **datacentersServersCdromsDelete**
> object datacentersServersCdromsDelete(datacenterId, serverId, cdromId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Detach a CD-ROM

This will detach a CD-ROM from the server

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Detach a CD-ROM
api_instance.datacentersServersCdromsDelete(datacenterId, serverId, cdromId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Detach a CD-ROM
api_instance.datacentersServersCdromsDelete(datacenterId, serverId, cdromId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **cdromId** | **string**| The unique ID of the CD-ROM | [default to undefined] |
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

# **datacentersServersCdromsFindById**
> Image datacentersServersCdromsFindById(datacenterId, serverId, cdromId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve an attached CD-ROM

You can retrieve a specific CD-ROM attached to the server

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Retrieve an attached CD-ROM
api_instance.datacentersServersCdromsFindById(datacenterId, serverId, cdromId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Retrieve an attached CD-ROM
api_instance.datacentersServersCdromsFindById(datacenterId, serverId, cdromId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **cdromId** | **string**| The unique ID of the CD-ROM | [default to undefined] |
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

# **datacentersServersCdromsGet**
> Cdroms datacentersServersCdromsGet(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List attached CD-ROMs 

You can retrieve a list of CD-ROMs attached to the server.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# List attached CD-ROMs 
api_instance.datacentersServersCdromsGet(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# List attached CD-ROMs 
api_instance.datacentersServersCdromsGet(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Cdroms**](../models/Cdroms.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersCdromsPost**
> Image datacentersServersCdromsPost(datacenterId, serverId, cdrom, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Attach a CD-ROM

You can attach a CD-ROM to an existing server. You can attach up to 2 CD-ROMs to one server. 

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Attach a CD-ROM
api_instance.datacentersServersCdromsPost(datacenterId, serverId, cdrom, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Attach a CD-ROM
api_instance.datacentersServersCdromsPost(datacenterId, serverId, cdrom, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **cdrom** | [**Image**](Image.md)| CD-ROM to be attached |  |
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

# **datacentersServersDelete**
> object datacentersServersDelete(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete a Server

This will remove a server from your datacenter; however, it will not remove the storage volumes attached to the server. You will need to make a separate API call to perform that action

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Delete a Server
api_instance.datacentersServersDelete(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Delete a Server
api_instance.datacentersServersDelete(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
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

# **datacentersServersFindById**
> Server datacentersServersFindById(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve a Server

Returns information about a server such as its configuration, provisioning status, etc.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Retrieve a Server
api_instance.datacentersServersFindById(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Retrieve a Server
api_instance.datacentersServersFindById(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Server**](../models/Server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersGet**
> Servers datacentersServersGet(datacenterId, pretty=pretty, depth=depth, upgradeNeeded=upgradeNeeded, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Servers 

You can retrieve a list of servers within a datacenter

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# List Servers 
api_instance.datacentersServersGet(datacenterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# List Servers 
api_instance.datacentersServersGet(datacenterId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **upgradeNeeded** | **boolean**| It can be used to filter which servers can be upgraded which can not be upgraded. | [optional] [default to undefined] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**Servers**](../models/Servers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersPatch**
> Server datacentersServersPatch(datacenterId, serverId, server, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Partially modify a Server

You can use update attributes of a server

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Partially modify a Server
api_instance.datacentersServersPatch(datacenterId, serverId, server, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Partially modify a Server
api_instance.datacentersServersPatch(datacenterId, serverId, server, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the server | [default to undefined] |
| **server** | [**ServerProperties**](ServerProperties.md)| Modified properties of Server |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Server**](../models/Server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersPost**
> Server datacentersServersPost(datacenterId, server, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Server

Creates a server within an existing datacenter. You can configure the boot volume and connect the server to an existing LAN.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Create a Server
api_instance.datacentersServersPost(datacenterId, server, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Create a Server
api_instance.datacentersServersPost(datacenterId, server, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **server** | [**Server**](Server.md)| Server to be created |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Server**](../models/Server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersPut**
> Server datacentersServersPut(datacenterId, serverId, server, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify a Server

Allows to modify the attributes of a Server. From v5 onwards \'allowReboot\' attribute will no longer be available. For certain server property change it was earlier forced to be provided. Now this behaviour is implicit and backend will do this automatically e.g. in earlier versions, when CPU family changes, the \'allowReboot\' property was required to be set to true which will no longer be the case and the server will be rebooted automatically

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Modify a Server
api_instance.datacentersServersPut(datacenterId, serverId, server, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Modify a Server
api_instance.datacentersServersPut(datacenterId, serverId, server, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the server | [default to undefined] |
| **server** | [**Server**](Server.md)| Modified Server |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Server**](../models/Server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **datacentersServersRebootPost**
> object datacentersServersRebootPost(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Reboot a Server

This will force a hard reboot of the server. Do not use this method if you want to gracefully reboot the machine. This is the equivalent of powering off the machine and turning it back on.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Reboot a Server
api_instance.datacentersServersRebootPost(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Reboot a Server
api_instance.datacentersServersRebootPost(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
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

# **datacentersServersStartPost**
> object datacentersServersStartPost(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Start a Server

This will start a server. If the server\'s public IP was deallocated then a new IP will be assigned

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Start a Server
api_instance.datacentersServersStartPost(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Start a Server
api_instance.datacentersServersStartPost(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
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

# **datacentersServersStopPost**
> object datacentersServersStopPost(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Stop a Server

This will stop a server. The machine will be forcefully powered off, billing will cease, and the public IP, if one is allocated, will be deallocated. The operation is not supported for Cube servers.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Stop a Server
api_instance.datacentersServersStopPost(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Stop a Server
api_instance.datacentersServersStopPost(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
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

# **datacentersServersUpgradePost**
> object datacentersServersUpgradePost(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Upgrade a Server

This will upgrade the version of the server, if needed. To verify if there is an upgrade available for a server, call \'/datacenters/{datacenterId}/servers?upgradeNeeded=true\'

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Upgrade a Server
api_instance.datacentersServersUpgradePost(datacenterId, serverId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Upgrade a Server
api_instance.datacentersServersUpgradePost(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
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

# **datacentersServersVolumesDelete**
> object datacentersServersVolumesDelete(datacenterId, serverId, volumeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Detach a volume

This will detach the volume from the server. This will not delete the volume from your datacenter. You will need to make a separate request to perform a deletion

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Detach a volume
api_instance.datacentersServersVolumesDelete(datacenterId, serverId, volumeId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Detach a volume
api_instance.datacentersServersVolumesDelete(datacenterId, serverId, volumeId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
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

# **datacentersServersVolumesFindById**
> Volume datacentersServersVolumesFindById(datacenterId, serverId, volumeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve an attached volume

This will retrieve the properties of an attached volume.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Retrieve an attached volume
api_instance.datacentersServersVolumesFindById(datacenterId, serverId, volumeId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Retrieve an attached volume
api_instance.datacentersServersVolumesFindById(datacenterId, serverId, volumeId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **volumeId** | **string**| The unique ID of the Volume | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Volume**](../models/Volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersVolumesGet**
> AttachedVolumes datacentersServersVolumesGet(datacenterId, serverId, pretty=pretty, depth=depth, xContractNumber=xContractNumber, offset=offset, limit=limit)

List Attached Volumes

You can retrieve a list of volumes attached to the server

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# List Attached Volumes
api_instance.datacentersServersVolumesGet(datacenterId, serverId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |
| **offset** | **number**| the first element (of the total list of elements) to include in the response (use together with &lt;code&gt;limit&lt;/code&gt; for pagination) | [optional] [default to 0] |
| **limit** | **number**| the maximum number of elements to return (use together with &lt;code&gt;offset&lt;/code&gt; for pagination) | [optional] [default to 1000] |

### Return type

[**AttachedVolumes**](../models/AttachedVolumes.md)

### Authorization

Basic Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **datacentersServersVolumesPost**
> Volume datacentersServersVolumesPost(datacenterId, serverId, volume, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Attach a volume

This will attach a pre-existing storage volume to the server. It is also possible to create and attach a volume in one step just by providing a new volume description as payload. Combine count of Nics and volumes attached to the server should not exceed size 24.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.ServerApi(config)
# Attach a volume
api_instance.datacentersServersVolumesPost(datacenterId, serverId, volume, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **datacenterId** | **string**| The unique ID of the Datacenter | [default to undefined] |
| **serverId** | **string**| The unique ID of the Server | [default to undefined] |
| **volume** | [**Volume**](Volume.md)| Volume to be attached (created and attached) |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**Volume**](../models/Volume.md)

### Authorization

Basic Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


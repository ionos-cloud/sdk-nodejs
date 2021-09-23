# ServerApi

All URIs are relative to [https://api.ionos.com/cloudapi/v5](https://api.ionos.com/cloudapi/v5)

| Method | HTTP request | Description |
| :--- | :--- | :--- |
| [**datacentersServersCdromsDelete**](serverapi.md#datacentersserverscdromsdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/cdroms/{cdromId} | Detach a CD-ROM |
| [**datacentersServersCdromsFindById**](serverapi.md#datacentersserverscdromsfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId}/cdroms/{cdromId} | Retrieve an attached CD-ROM |
| [**datacentersServersCdromsGet**](serverapi.md#datacentersserverscdromsget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/cdroms | List attached CD-ROMs |
| [**datacentersServersCdromsPost**](serverapi.md#datacentersserverscdromspost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/cdroms | Attach a CD-ROM |
| [**datacentersServersDelete**](serverapi.md#datacentersserversdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId} | Delete a Server |
| [**datacentersServersFindById**](serverapi.md#datacentersserversfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId} | Retrieve a Server |
| [**datacentersServersGet**](serverapi.md#datacentersserversget) | **GET** /datacenters/{datacenterId}/servers | List Servers |
| [**datacentersServersPatch**](serverapi.md#datacentersserverspatch) | **PATCH** /datacenters/{datacenterId}/servers/{serverId} | Partially modify a Server |
| [**datacentersServersPost**](serverapi.md#datacentersserverspost) | **POST** /datacenters/{datacenterId}/servers | Create a Server |
| [**datacentersServersPut**](serverapi.md#datacentersserversput) | **PUT** /datacenters/{datacenterId}/servers/{serverId} | Modify a Server |
| [**datacentersServersRebootPost**](serverapi.md#datacentersserversrebootpost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/reboot | Reboot a Server |
| [**datacentersServersStartPost**](serverapi.md#datacentersserversstartpost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/start | Start a Server |
| [**datacentersServersStopPost**](serverapi.md#datacentersserversstoppost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/stop | Stop a Server |
| [**datacentersServersUpgradePost**](serverapi.md#datacentersserversupgradepost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/upgrade | Upgrade a Server |
| [**datacentersServersVolumesDelete**](serverapi.md#datacentersserversvolumesdelete) | **DELETE** /datacenters/{datacenterId}/servers/{serverId}/volumes/{volumeId} | Detach a volume |
| [**datacentersServersVolumesFindById**](serverapi.md#datacentersserversvolumesfindbyid) | **GET** /datacenters/{datacenterId}/servers/{serverId}/volumes/{volumeId} | Retrieve an attached volume |
| [**datacentersServersVolumesGet**](serverapi.md#datacentersserversvolumesget) | **GET** /datacenters/{datacenterId}/servers/{serverId}/volumes | List Attached Volumes |
| [**datacentersServersVolumesPost**](serverapi.md#datacentersserversvolumespost) | **POST** /datacenters/{datacenterId}/servers/{serverId}/volumes | Attach a volume |

## datacentersServersCdromsDelete

> object datacentersServersCdromsDelete\(datacenterId, serverId, cdromId, opts\)

Detach a CD-ROM

This will detach a CD-ROM from the server

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Detach a CD-ROM
api_instance
  .datacentersServersCdromsDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    cdromId: cdromId_example,
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
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **cdromId** | **string** | The unique ID of the CD-ROM | \[default to undefined\] |
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

## datacentersServersCdromsFindById

> datacentersServersCdromsFindById\(datacenterId, serverId, cdromId, opts\)

Retrieve an attached CD-ROM

You can retrieve a specific CD-ROM attached to the server

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Retrieve an attached CD-ROM
api_instance
  .datacentersServersCdromsFindById({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    cdromId: cdromId_example,
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
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **cdromId** | **string** | The unique ID of the CD-ROM | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Image**](../models/image.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersCdromsGet

> datacentersServersCdromsGet\(datacenterId, serverId, opts\)

List attached CD-ROMs

You can retrieve a list of CD-ROMs attached to the server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// List attached CD-ROMs 
api_instance
  .datacentersServersCdromsGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**Cdroms**](../models/cdroms.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersCdromsPost

> datacentersServersCdromsPost\(datacenterId, serverId, cdrom, opts\)

Attach a CD-ROM

You can attach a CD-ROM to an existing server. You can attach up to 2 CD-ROMs to one server.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Attach a CD-ROM
api_instance
  .datacentersServersCdromsPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    cdrom: cdrom_example,
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
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **cdrom** | [**Image**](../models/image.md) | CD-ROM to be attached |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Image**](../models/image.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersServersDelete

> object datacentersServersDelete\(datacenterId, serverId, opts\)

Delete a Server

This will remove a server from your datacenter; however, it will not remove the storage volumes attached to the server. You will need to make a separate API call to perform that action

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Delete a Server
api_instance
  .datacentersServersDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
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

## datacentersServersFindById

> datacentersServersFindById\(datacenterId, serverId, opts\)

Retrieve a Server

Returns information about a server such as its configuration, provisioning status, etc.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Retrieve a Server
api_instance
  .datacentersServersFindById({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Server**](../models/server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersGet

> datacentersServersGet\(datacenterId, opts\)

List Servers

You can retrieve a list of servers within a datacenter

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// List Servers 
api_instance
  .datacentersServersGet({
    datacenterId: datacenterId_example,
    pretty: true,
    depth: 56,
    upgradeNeeded: true,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **upgradeNeeded** | **boolean** | It can be used to filter which servers can be upgraded which can not be upgraded. | \[optional\]\[default to undefined\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**Servers**](../models/servers.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersPatch

> datacentersServersPatch\(datacenterId, serverId, server, opts\)

Partially modify a Server

You can use update attributes of a server

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Partially modify a Server
api_instance
  .datacentersServersPatch({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    server: server_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the server | \[default to undefined\] |
| **server** | [**ServerProperties**](../models/serverproperties.md) | Modified properties of Server |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Server**](../models/server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersServersPost

> datacentersServersPost\(datacenterId, server, opts\)

Create a Server

Creates a server within an existing datacenter. You can configure the boot volume and connect the server to an existing LAN.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Create a Server
api_instance
  .datacentersServersPost({
    datacenterId: datacenterId_example,
    server: server_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **server** | [**Server**](../models/server.md) | Server to be created |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Server**](../models/server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersServersPut

> datacentersServersPut\(datacenterId, serverId, server, opts\)

Modify a Server

Allows to modify the attributes of a Server. From v5 onwards \'allowReboot\' attribute will no longer be available. For certain server property change it was earlier forced to be provided. Now this behaviour is implicit and backend will do this automatically e.g. in earlier versions, when CPU family changes, the \'allowReboot\' property was required to be set to true which will no longer be the case and the server will be rebooted automatically

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Modify a Server
api_instance
  .datacentersServersPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    server: server_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the server | \[default to undefined\] |
| **server** | [**Server**](../models/server.md) | Modified Server |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Server**](../models/server.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## datacentersServersRebootPost

> object datacentersServersRebootPost\(datacenterId, serverId, opts\)

Reboot a Server

This will force a hard reboot of the server. Do not use this method if you want to gracefully reboot the machine. This is the equivalent of powering off the machine and turning it back on.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Reboot a Server
api_instance
  .datacentersServersRebootPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
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

## datacentersServersStartPost

> object datacentersServersStartPost\(datacenterId, serverId, opts\)

Start a Server

This will start a server. If the server\'s public IP was deallocated then a new IP will be assigned

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Start a Server
api_instance
  .datacentersServersStartPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
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

## datacentersServersStopPost

> object datacentersServersStopPost\(datacenterId, serverId, opts\)

Stop a Server

This will stop a server. The machine will be forcefully powered off, billing will cease, and the public IP, if one is allocated, will be deallocated. The operation is not supported for Cube servers.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Stop a Server
api_instance
  .datacentersServersStopPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
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

## datacentersServersUpgradePost

> object datacentersServersUpgradePost\(datacenterId, serverId, opts\)

Upgrade a Server

This will upgrade the version of the server, if needed. To verify if there is an upgrade available for a server, call \'/datacenters/{datacenterId}/servers?upgradeNeeded=true\'

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Upgrade a Server
api_instance
  .datacentersServersUpgradePost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
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
| **datacenterId** | **string** | The unique ID of the datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
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

## datacentersServersVolumesDelete

> object datacentersServersVolumesDelete\(datacenterId, serverId, volumeId, opts\)

Detach a volume

This will detach the volume from the server. This will not delete the volume from your datacenter. You will need to make a separate request to perform a deletion

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Detach a volume
api_instance
  .datacentersServersVolumesDelete({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    volumeId: volumeId_example,
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
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
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

## datacentersServersVolumesFindById

> datacentersServersVolumesFindById\(datacenterId, serverId, volumeId, opts\)

Retrieve an attached volume

This will retrieve the properties of an attached volume.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Retrieve an attached volume
api_instance
  .datacentersServersVolumesFindById({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    volumeId: volumeId_example,
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
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **volumeId** | **string** | The unique ID of the Volume | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Volume**](../models/volume.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersVolumesGet

> datacentersServersVolumesGet\(datacenterId, serverId, opts\)

List Attached Volumes

You can retrieve a list of volumes attached to the server

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// List Attached Volumes
api_instance
  .datacentersServersVolumesGet({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56,
    offset: 56,
    limit: 56, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |
| **offset** | **number** | the first element \(of the total list of elements\) to include in the response \(use together with &lt;code&gt;limit&lt;/code&gt; for pagination\) | \[optional\]\[default to 0\] |
| **limit** | **number** | the maximum number of elements to return \(use together with &lt;code&gt;offset&lt;/code&gt; for pagination\) | \[optional\]\[default to 1000\] |

### Return type

[**AttachedVolumes**](../models/attachedvolumes.md)

### Authorization

Basic Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## datacentersServersVolumesPost

> datacentersServersVolumesPost\(datacenterId, serverId, volume, opts\)

Attach a volume

This will attach a pre-existing storage volume to the server. It is also possible to create and attach a volume in one step just by providing a new volume description as payload. Combine count of Nics and volumes attached to the server should not exceed size 24.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ServerApi(config);
// Attach a volume
api_instance
  .datacentersServersVolumesPost({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    volume: volume_example,
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
| **datacenterId** | **string** | The unique ID of the Datacenter | \[default to undefined\] |
| **serverId** | **string** | The unique ID of the Server | \[default to undefined\] |
| **volume** | [**Volume**](../models/volume.md) | Volume to be attached \(created and attached\) |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**Volume**](../models/volume.md)

### Authorization

Basic Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json


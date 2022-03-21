# KubernetesApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**k8sDelete**](KubernetesApi.md#k8sdelete) | **DELETE** /k8s/{k8sClusterId} | Delete Kubernetes clusters |
| [**k8sFindByClusterId**](KubernetesApi.md#k8sfindbyclusterid) | **GET** /k8s/{k8sClusterId} | Retrieve Kubernetes clusters |
| [**k8sGet**](KubernetesApi.md#k8sget) | **GET** /k8s | List Kubernetes clusters |
| [**k8sKubeconfigGet**](KubernetesApi.md#k8skubeconfigget) | **GET** /k8s/{k8sClusterId}/kubeconfig | Retrieve Kubernetes configuration files |
| [**k8sNodepoolsDelete**](KubernetesApi.md#k8snodepoolsdelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Delete Kubernetes node pools |
| [**k8sNodepoolsFindById**](KubernetesApi.md#k8snodepoolsfindbyid) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Retrieve Kubernetes node pools |
| [**k8sNodepoolsGet**](KubernetesApi.md#k8snodepoolsget) | **GET** /k8s/{k8sClusterId}/nodepools | List Kubernetes node pools |
| [**k8sNodepoolsNodesDelete**](KubernetesApi.md#k8snodepoolsnodesdelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Delete Kubernetes nodes |
| [**k8sNodepoolsNodesFindById**](KubernetesApi.md#k8snodepoolsnodesfindbyid) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Retrieve Kubernetes nodes |
| [**k8sNodepoolsNodesGet**](KubernetesApi.md#k8snodepoolsnodesget) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes | List Kubernetes nodes |
| [**k8sNodepoolsNodesReplacePost**](KubernetesApi.md#k8snodepoolsnodesreplacepost) | **POST** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId}/replace | Recreate Kubernetes nodes |
| [**k8sNodepoolsPost**](KubernetesApi.md#k8snodepoolspost) | **POST** /k8s/{k8sClusterId}/nodepools | Create Kubernetes node pools |
| [**k8sNodepoolsPut**](KubernetesApi.md#k8snodepoolsput) | **PUT** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Modify Kubernetes node pools |
| [**k8sPost**](KubernetesApi.md#k8spost) | **POST** /k8s | Create Kubernetes clusters |
| [**k8sPut**](KubernetesApi.md#k8sput) | **PUT** /k8s/{k8sClusterId} | Modify Kubernetes clusters |
| [**k8sVersionsDefaultGet**](KubernetesApi.md#k8sversionsdefaultget) | **GET** /k8s/versions/default | Retrieve current default Kubernetes version |
| [**k8sVersionsGet**](KubernetesApi.md#k8sversionsget) | **GET** /k8s/versions | List Kubernetes versions |


## k8sDelete

> k8sDelete(k8sClusterId, opts)

Delete Kubernetes clusters

Delete the specified Kubernetes cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Delete Kubernetes clusters
api_instance
  .k8sDelete({
    k8sClusterId: k8sClusterId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sFindByClusterId

> <KubernetesCluster> k8sFindByClusterId(k8sClusterId, opts)

Retrieve Kubernetes clusters

Retrieve the specified Kubernetes cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Retrieve Kubernetes clusters
api_instance
  .k8sFindByClusterId({
    k8sClusterId: k8sClusterId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesCluster**](../models/KubernetesCluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sGet

> <KubernetesClusters> k8sGet(opts)

List Kubernetes clusters

List all available Kubernetes clusters.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Kubernetes clusters
api_instance
  .k8sGet({
    pretty: true,
    depth: 56,
    xContractNumber: 56
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesClusters**](../models/KubernetesClusters.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sKubeconfigGet

> string k8sKubeconfigGet(k8sClusterId, opts)

Retrieve Kubernetes configuration files

Retrieve a configuration file for the specified Kubernetes cluster, in YAML or JSON format as defined in the Accept header; the default Accept header is application/yaml.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve Kubernetes configuration files
api_instance
  .k8sKubeconfigGet({
    k8sClusterId: k8sClusterId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56, 
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

**string**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/yaml, application/x-yaml, application/json


## k8sNodepoolsDelete

> k8sNodepoolsDelete(k8sClusterId, nodepoolId, opts)

Delete Kubernetes node pools

Delete the specified Kubernetes node pool.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Delete Kubernetes node pools
api_instance
  .k8sNodepoolsDelete({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsFindById

> <KubernetesNodePool> k8sNodepoolsFindById(k8sClusterId, nodepoolId, opts)

Retrieve Kubernetes node pools

Retrieve the specified Kubernetes node pool.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Retrieve Kubernetes node pools
api_instance
  .k8sNodepoolsFindById({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesNodePool**](../models/KubernetesNodePool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsGet

> <KubernetesNodePools> k8sNodepoolsGet(k8sClusterId, opts)

List Kubernetes node pools

List all Kubernetes node pools, included the specified Kubernetes cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Kubernetes node pools
api_instance
  .k8sNodepoolsGet({
    k8sClusterId: k8sClusterId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56, 
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesNodePools**](../models/KubernetesNodePools.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsNodesDelete

> k8sNodepoolsNodesDelete(k8sClusterId, nodepoolId, nodeId, opts)

Delete Kubernetes nodes

Delete the specified Kubernetes node.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Delete Kubernetes nodes
api_instance
  .k8sNodepoolsNodesDelete({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
    nodeId: nodeId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **nodeId** | **string** | The unique ID of the Kubernetes node. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsNodesFindById

> <KubernetesNode> k8sNodepoolsNodesFindById(k8sClusterId, nodepoolId, nodeId, opts)

Retrieve Kubernetes nodes

Retrieve the specified Kubernetes node.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Retrieve Kubernetes nodes
api_instance
  .k8sNodepoolsNodesFindById({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
    nodeId: nodeId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **nodeId** | **string** | The unique ID of the Kubernetes node. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesNode**](../models/KubernetesNode.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsNodesGet

> <KubernetesNodes> k8sNodepoolsNodesGet(k8sClusterId, nodepoolId, opts)

List Kubernetes nodes

List all the nodes, included in the specified Kubernetes node pool.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Kubernetes nodes
api_instance
  .k8sNodepoolsNodesGet({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
    pretty: true,
    depth: 56,
    xContractNumber: 56, 
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesNodes**](../models/KubernetesNodes.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsNodesReplacePost

> k8sNodepoolsNodesReplacePost(k8sClusterId, nodepoolId, nodeId, opts)

Recreate Kubernetes nodes

Recreate the specified Kubernetes node.  A new node is created and configured by Managed Kubernetes, based on the node pool template. Once the status is  \"Active\", all the pods are migrated from the faulty node, which is then deleted once empty. During this operation, the node pool will have an additional billable  \"Active\" node.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Recreate Kubernetes nodes
api_instance
  .k8sNodepoolsNodesReplacePost({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
    nodeId: nodeId_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **nodeId** | **string** | The unique ID of the Kubernetes node. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

nil (empty response body)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sNodepoolsPost

> <KubernetesNodePool> k8sNodepoolsPost(k8sClusterId, kubernetesNodePool, opts)

Create Kubernetes node pools

Create a Kubernetes node pool inside the specified Kubernetes cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Create Kubernetes node pools
api_instance
  .k8sNodepoolsPost({
    k8sClusterId: k8sClusterId_example,
    kubernetesNodePool: kubernetesNodePool_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **kubernetesNodePool** | [**KubernetesNodePoolForPost**](../models/KubernetesNodePoolForPost.md) | The Kubernetes node pool to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesNodePool**](../models/KubernetesNodePool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## k8sNodepoolsPut

> <KubernetesNodePool> k8sNodepoolsPut(k8sClusterId, nodepoolId, kubernetesNodePool, opts)

Modify Kubernetes node pools

Modify the specified Kubernetes node pool.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Modify Kubernetes node pools
api_instance
  .k8sNodepoolsPut({
    k8sClusterId: k8sClusterId_example,
    nodepoolId: nodepoolId_example,
    kubernetesNodePool: kubernetesNodePool_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes node pool. | [default to undefined] |
| **kubernetesNodePool** | [**KubernetesNodePoolForPut**](../models/KubernetesNodePoolForPut.md) | Details of the Kubernetes Node Pool |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesNodePool**](../models/KubernetesNodePool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## k8sPost

> <KubernetesCluster> k8sPost(kubernetesCluster, opts)

Create Kubernetes clusters

Create a Kubernetes cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Create Kubernetes clusters
api_instance
  .k8sPost({
    kubernetesCluster: kubernetesCluster_example,
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
| ---- | ---- | ----------- | ----- |
| **kubernetesCluster** | [**KubernetesClusterForPost**](../models/KubernetesClusterForPost.md) | The Kubernetes cluster to create. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesCluster**](../models/KubernetesCluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## k8sPut

> <KubernetesCluster> k8sPut(k8sClusterId, kubernetesCluster, opts)

Modify Kubernetes clusters

Modify the specified Kubernetes cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
// Modify Kubernetes clusters
api_instance
  .k8sPut({
    k8sClusterId: k8sClusterId_example,
    kubernetesCluster: kubernetesCluster_example,
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
| ---- | ---- | ----------- | ----- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes cluster. | [default to undefined] |
| **kubernetesCluster** | [**KubernetesClusterForPut**](../models/KubernetesClusterForPut.md) | The modified Kubernetes cluster. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on | [optional][default to 0] |
| **xContractNumber** | **number** | Users with multiple contracts must provide the contract number, for which all API requests are to be executed. | [optional][default to undefined] |

### Return type

[**KubernetesCluster**](../models/KubernetesCluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## k8sVersionsDefaultGet

> string k8sVersionsDefaultGet

Retrieve current default Kubernetes version

Retrieve current default Kubernetes version for clusters and nodepools.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve current default Kubernetes version
api_instance
  .k8sVersionsDefaultGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## k8sVersionsGet

> Array&lt;string&gt; k8sVersionsGet

List Kubernetes versions

List available Kubernetes versions.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.KubernetesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Kubernetes versions
api_instance
  .k8sVersionsGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array&lt;string&gt;**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


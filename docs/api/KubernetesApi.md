# KubernetesApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**k8sDelete**](KubernetesApi.md#k8sdelete) | **DELETE** /k8s/{k8sClusterId} | Delete a Kubernetes Cluster by ID |
| [**k8sFindByClusterId**](KubernetesApi.md#k8sfindbyclusterid) | **GET** /k8s/{k8sClusterId} | Get a Kubernetes Cluster by ID |
| [**k8sGet**](KubernetesApi.md#k8sget) | **GET** /k8s | Get Kubernetes Clusters |
| [**k8sKubeconfigGet**](KubernetesApi.md#k8skubeconfigget) | **GET** /k8s/{k8sClusterId}/kubeconfig | Get Kubernetes Configuration File |
| [**k8sNodepoolsDelete**](KubernetesApi.md#k8snodepoolsdelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Delete a Kubernetes Node Pool by ID |
| [**k8sNodepoolsFindById**](KubernetesApi.md#k8snodepoolsfindbyid) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Get a Kubernetes Node Pool by ID |
| [**k8sNodepoolsGet**](KubernetesApi.md#k8snodepoolsget) | **GET** /k8s/{k8sClusterId}/nodepools | Get Kubernetes Node Pools |
| [**k8sNodepoolsNodesDelete**](KubernetesApi.md#k8snodepoolsnodesdelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Delete a Kubernetes Node by ID |
| [**k8sNodepoolsNodesFindById**](KubernetesApi.md#k8snodepoolsnodesfindbyid) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Get Kubernetes Node by ID |
| [**k8sNodepoolsNodesGet**](KubernetesApi.md#k8snodepoolsnodesget) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes | Get Kubernetes Nodes |
| [**k8sNodepoolsNodesReplacePost**](KubernetesApi.md#k8snodepoolsnodesreplacepost) | **POST** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId}/replace | Recreate a Kubernetes Node by ID |
| [**k8sNodepoolsPost**](KubernetesApi.md#k8snodepoolspost) | **POST** /k8s/{k8sClusterId}/nodepools | Create a Kubernetes Node Pool |
| [**k8sNodepoolsPut**](KubernetesApi.md#k8snodepoolsput) | **PUT** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Modify a Kubernetes Node Pool by ID |
| [**k8sPost**](KubernetesApi.md#k8spost) | **POST** /k8s | Create a Kubernetes Cluster |
| [**k8sPut**](KubernetesApi.md#k8sput) | **PUT** /k8s/{k8sClusterId} | Modify a Kubernetes Cluster by ID |
| [**k8sVersionsDefaultGet**](KubernetesApi.md#k8sversionsdefaultget) | **GET** /k8s/versions/default | Get Default Kubernetes Version |
| [**k8sVersionsGet**](KubernetesApi.md#k8sversionsget) | **GET** /k8s/versions | Get Kubernetes Versions |


## k8sDelete

> k8sDelete(k8sClusterId, opts)

Delete a Kubernetes Cluster by ID

Deletes the K8s cluster specified  by its ID.

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
// Delete a Kubernetes Cluster by ID
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

Get a Kubernetes Cluster by ID

Retrieves the K8s cluster specified by its ID.

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
// Get a Kubernetes Cluster by ID
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
| **k8sClusterId** | **string** | The unique ID of the K8s cluster to be retrieved. | [default to undefined] |
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

Get Kubernetes Clusters

Retrieves a list of all K8s clusters provisioned under your account.

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
// Get Kubernetes Clusters
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

Get Kubernetes Configuration File

Retrieves the configuration file for the specified K8s cluster. You can define the format (YAML or JSON) of the returned file in the Accept header. By default, \'application/yaml\' is specified.

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
// Get Kubernetes Configuration File
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

Delete a Kubernetes Node Pool by ID

Deletes the K8s node pool specified by its ID.

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
// Delete a Kubernetes Node Pool by ID
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

Get a Kubernetes Node Pool by ID

Retrieves the K8s node pool specified by its ID.

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
// Get a Kubernetes Node Pool by ID
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

Get Kubernetes Node Pools

Retrieves a list of K8s node pools of a cluster specified by its ID.

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
// Get Kubernetes Node Pools
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

Delete a Kubernetes Node by ID

Deletes the K8s node specified by its ID.

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
// Delete a Kubernetes Node by ID
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

Get Kubernetes Node by ID

Retrieves the K8s node specified by its ID.

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
// Get Kubernetes Node by ID
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

Get Kubernetes Nodes

Retrieves the list of all K8s nodes of the specified node pool.

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
// Get Kubernetes Nodes
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

Recreate a Kubernetes Node by ID

Recreates the K8s node specified by its ID.  If a node becomes unusable, Managed Kubernetes allows you to recreate it with a configuration based on the node pool template. Once the status is \'Active,\' all the pods from the failed node will be migrated to the new node. The node pool has an additional billable \'active\' node during this process.

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
// Recreate a Kubernetes Node by ID
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

Create a Kubernetes Node Pool

Creates a node pool inside the specified K8s cluster.

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
// Create a Kubernetes Node Pool
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

Modify a Kubernetes Node Pool by ID

Modifies the K8s node pool specified by its ID.

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
// Modify a Kubernetes Node Pool by ID
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

Create a Kubernetes Cluster

Creates a K8s cluster provisioned under your account.

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
// Create a Kubernetes Cluster
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

Modify a Kubernetes Cluster by ID

Modifies the K8s cluster specified by its ID.

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
// Modify a Kubernetes Cluster by ID
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

Get Default Kubernetes Version

Retrieves the current default K8s version to be used by the clusters and node pools.

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
// Get Default Kubernetes Version
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

Get Kubernetes Versions

Lists available K8s versions.

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
// Get Kubernetes Versions
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


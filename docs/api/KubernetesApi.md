# KubernetesApi

All URIs are relative to *https://api.ionos.com/cloudapi/v5*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**k8sDelete**](KubernetesApi.md#k8sDelete) | **DELETE** /k8s/{k8sClusterId} | Delete Kubernetes Cluster |
| [**k8sFindByClusterId**](KubernetesApi.md#k8sFindByClusterId) | **GET** /k8s/{k8sClusterId} | Retrieve Kubernetes Cluster |
| [**k8sGet**](KubernetesApi.md#k8sGet) | **GET** /k8s | List Kubernetes Clusters |
| [**k8sKubeconfigGet**](KubernetesApi.md#k8sKubeconfigGet) | **GET** /k8s/{k8sClusterId}/kubeconfig | Retrieve Kubernetes Configuration File |
| [**k8sNodepoolsDelete**](KubernetesApi.md#k8sNodepoolsDelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Delete Kubernetes Node Pool |
| [**k8sNodepoolsFindById**](KubernetesApi.md#k8sNodepoolsFindById) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Retrieve Kubernetes Node Pool |
| [**k8sNodepoolsGet**](KubernetesApi.md#k8sNodepoolsGet) | **GET** /k8s/{k8sClusterId}/nodepools | List Kubernetes Node Pools |
| [**k8sNodepoolsNodesDelete**](KubernetesApi.md#k8sNodepoolsNodesDelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Delete Kubernetes node |
| [**k8sNodepoolsNodesFindById**](KubernetesApi.md#k8sNodepoolsNodesFindById) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Retrieve Kubernetes node |
| [**k8sNodepoolsNodesGet**](KubernetesApi.md#k8sNodepoolsNodesGet) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes | Retrieve Kubernetes nodes. |
| [**k8sNodepoolsNodesReplacePost**](KubernetesApi.md#k8sNodepoolsNodesReplacePost) | **POST** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId}/replace | Recreate the Kubernetes node |
| [**k8sNodepoolsPost**](KubernetesApi.md#k8sNodepoolsPost) | **POST** /k8s/{k8sClusterId}/nodepools | Create a Kubernetes Node Pool |
| [**k8sNodepoolsPut**](KubernetesApi.md#k8sNodepoolsPut) | **PUT** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Modify Kubernetes Node Pool |
| [**k8sPost**](KubernetesApi.md#k8sPost) | **POST** /k8s | Create Kubernetes Cluster |
| [**k8sPut**](KubernetesApi.md#k8sPut) | **PUT** /k8s/{k8sClusterId} | Modify Kubernetes Cluster |
| [**k8sVersionsCompatibilitiesGet**](KubernetesApi.md#k8sVersionsCompatibilitiesGet) | **GET** /k8s/versions/{clusterVersion}/compatibilities | Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster. |
| [**k8sVersionsDefaultGet**](KubernetesApi.md#k8sVersionsDefaultGet) | **GET** /k8s/versions/default | Retrieve the current default kubernetes version for clusters and nodepools. |
| [**k8sVersionsGet**](KubernetesApi.md#k8sVersionsGet) | **GET** /k8s/versions | Retrieve available Kubernetes versions |


# **k8sDelete**
> object k8sDelete(k8sClusterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete Kubernetes Cluster

This will remove a Kubernetes Cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Delete Kubernetes Cluster
api_instance.k8sDelete(k8sClusterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Delete Kubernetes Cluster
api_instance.k8sDelete(k8sClusterId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
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

# **k8sFindByClusterId**
> KubernetesCluster k8sFindByClusterId(k8sClusterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve Kubernetes Cluster

This will retrieve a single Kubernetes Cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes Cluster
api_instance.k8sFindByClusterId(k8sClusterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes Cluster
api_instance.k8sFindByClusterId(k8sClusterId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesCluster**](KubernetesCluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sGet**
> KubernetesClusters k8sGet(pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Kubernetes Clusters

You can retrieve a list of all kubernetes clusters associated with a contract

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# List Kubernetes Clusters
api_instance.k8sGet(options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# List Kubernetes Clusters
api_instance.k8sGet(options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesClusters**](KubernetesClusters.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sKubeconfigGet**
> KubernetesConfig k8sKubeconfigGet(k8sClusterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve Kubernetes Configuration File

You can retrieve kubernetes configuration file for the kubernetes cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes Configuration File
api_instance.k8sKubeconfigGet(k8sClusterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes Configuration File
api_instance.k8sKubeconfigGet(k8sClusterId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesConfig**](KubernetesConfig.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sNodepoolsDelete**
> object k8sNodepoolsDelete(k8sClusterId, nodepoolId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete Kubernetes Node Pool

This will remove a Kubernetes Node Pool.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Delete Kubernetes Node Pool
api_instance.k8sNodepoolsDelete(k8sClusterId, nodepoolId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Delete Kubernetes Node Pool
api_instance.k8sNodepoolsDelete(k8sClusterId, nodepoolId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
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

# **k8sNodepoolsFindById**
> KubernetesNodePool k8sNodepoolsFindById(k8sClusterId, nodepoolId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve Kubernetes Node Pool

You can retrieve a single Kubernetes Node Pool.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes Node Pool
api_instance.k8sNodepoolsFindById(k8sClusterId, nodepoolId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes Node Pool
api_instance.k8sNodepoolsFindById(k8sClusterId, nodepoolId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesNodePool**](KubernetesNodePool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sNodepoolsGet**
> KubernetesNodePools k8sNodepoolsGet(k8sClusterId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

List Kubernetes Node Pools

You can retrieve a list of all kubernetes node pools part of kubernetes cluster

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# List Kubernetes Node Pools
api_instance.k8sNodepoolsGet(k8sClusterId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# List Kubernetes Node Pools
api_instance.k8sNodepoolsGet(k8sClusterId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesNodePools**](KubernetesNodePools.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sNodepoolsNodesDelete**
> object k8sNodepoolsNodesDelete(k8sClusterId, nodepoolId, nodeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Delete Kubernetes node

This will remove a Kubernetes node.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Delete Kubernetes node
api_instance.k8sNodepoolsNodesDelete(k8sClusterId, nodepoolId, nodeId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Delete Kubernetes node
api_instance.k8sNodepoolsNodesDelete(k8sClusterId, nodepoolId, nodeId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
| **nodeId** | **string**| The unique ID of the Kubernetes node | [default to undefined] |
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

# **k8sNodepoolsNodesFindById**
> KubernetesNode k8sNodepoolsNodesFindById(k8sClusterId, nodepoolId, nodeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve Kubernetes node

You can retrieve a single Kubernetes Node.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes node
api_instance.k8sNodepoolsNodesFindById(k8sClusterId, nodepoolId, nodeId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes node
api_instance.k8sNodepoolsNodesFindById(k8sClusterId, nodepoolId, nodeId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
| **nodeId** | **string**| The unique ID of the Kubernetes Node. | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesNode**](KubernetesNode.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sNodepoolsNodesGet**
> KubernetesNodes k8sNodepoolsNodesGet(k8sClusterId, nodepoolId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Retrieve Kubernetes nodes.

You can retrieve all nodes of Kubernetes Node Pool.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes nodes.
api_instance.k8sNodepoolsNodesGet(k8sClusterId, nodepoolId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve Kubernetes nodes.
api_instance.k8sNodepoolsNodesGet(k8sClusterId, nodepoolId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesNodes**](KubernetesNodes.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sNodepoolsNodesReplacePost**
> object k8sNodepoolsNodesReplacePost(k8sClusterId, nodepoolId, nodeId, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Recreate the Kubernetes node

You can recreate a single Kubernetes Node.  Managed Kubernetes starts a process which based on the nodepool\'s template creates & configures a new node, waits for status \"ACTIVE\", and migrates all the pods from the faulty node, deleting it once empty. While this operation occurs, the nodepool will have an extra billable \"ACTIVE\" node.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Recreate the Kubernetes node
api_instance.k8sNodepoolsNodesReplacePost(k8sClusterId, nodepoolId, nodeId, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Recreate the Kubernetes node
api_instance.k8sNodepoolsNodesReplacePost(k8sClusterId, nodepoolId, nodeId, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
| **nodeId** | **string**| The unique ID of the Kubernetes Node. | [default to undefined] |
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

# **k8sNodepoolsPost**
> KubernetesNodePool k8sNodepoolsPost(k8sClusterId, kubernetesNodePool, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create a Kubernetes Node Pool

This will create a new Kubernetes Node Pool inside a Kubernetes Cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Create a Kubernetes Node Pool
api_instance.k8sNodepoolsPost(k8sClusterId, kubernetesNodePool, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Create a Kubernetes Node Pool
api_instance.k8sNodepoolsPost(k8sClusterId, kubernetesNodePool, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **kubernetesNodePool** | [**KubernetesNodePoolForPost**](KubernetesNodePoolForPost.md)| Details of the Kubernetes Node Pool |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesNodePool**](KubernetesNodePool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **k8sNodepoolsPut**
> KubernetesNodePool k8sNodepoolsPut(k8sClusterId, nodepoolId, kubernetesNodePool, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify Kubernetes Node Pool

This will modify the Kubernetes Node Pool.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Modify Kubernetes Node Pool
api_instance.k8sNodepoolsPut(k8sClusterId, nodepoolId, kubernetesNodePool, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Modify Kubernetes Node Pool
api_instance.k8sNodepoolsPut(k8sClusterId, nodepoolId, kubernetesNodePool, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **nodepoolId** | **string**| The unique ID of the Kubernetes Node Pool | [default to undefined] |
| **kubernetesNodePool** | [**KubernetesNodePoolForPut**](KubernetesNodePoolForPut.md)| Details of the Kubernetes Node Pool |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesNodePool**](KubernetesNodePool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **k8sPost**
> KubernetesCluster k8sPost(kubernetesCluster, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Create Kubernetes Cluster

This will create a new Kubernetes Cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Create Kubernetes Cluster
api_instance.k8sPost(kubernetesCluster, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Create Kubernetes Cluster
api_instance.k8sPost(kubernetesCluster, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **kubernetesCluster** | [**KubernetesClusterForPost**](KubernetesClusterForPost.md)| Details of the Kubernetes Cluster |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesCluster**](KubernetesCluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **k8sPut**
> KubernetesCluster k8sPut(k8sClusterId, kubernetesCluster, pretty=pretty, depth=depth, xContractNumber=xContractNumber)

Modify Kubernetes Cluster

This will modify the Kubernetes Cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Modify Kubernetes Cluster
api_instance.k8sPut(k8sClusterId, kubernetesCluster, options).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Modify Kubernetes Cluster
api_instance.k8sPut(k8sClusterId, kubernetesCluster, options).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **k8sClusterId** | **string**| The unique ID of the Kubernetes Cluster | [default to undefined] |
| **kubernetesCluster** | [**KubernetesClusterForPut**](KubernetesClusterForPut.md)| Details of the Kubernetes Cluster |  |
| **pretty** | **boolean**| Controls whether response is pretty-printed (with indentation and new lines) | [optional] [default to true] |
| **depth** | **number**| Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on | [optional] [default to 0] |
| **xContractNumber** | **number**| Users having more than 1 contract need to provide contract number, against which all API requests should be executed | [optional] [default to undefined] |

### Return type

[**KubernetesCluster**](KubernetesCluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **k8sVersionsCompatibilitiesGet**
> Array<string> k8sVersionsCompatibilitiesGet(clusterVersion)

Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.

You can retrieve a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.
api_instance.k8sVersionsCompatibilitiesGet(clusterVersion).then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.
api_instance.k8sVersionsCompatibilitiesGet(clusterVersion).then((response) => console.log(response));
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **clusterVersion** | **string**|  | [default to undefined] |

### Return type

**Array<string>**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

# **k8sVersionsDefaultGet**
> string k8sVersionsDefaultGet()

Retrieve the current default kubernetes version for clusters and nodepools.

You can retrieve the current default kubernetes version for clusters and nodepools.

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve the current default kubernetes version for clusters and nodepools.
api_instance.k8sVersionsDefaultGet.then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve the current default kubernetes version for clusters and nodepools.
api_instance.k8sVersionsDefaultGet.then((response) => console.log(response));
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

# **k8sVersionsGet**
> Array<string> k8sVersionsGet()

Retrieve available Kubernetes versions

You can retrieve a list of available kubernetes versions

### Example

* Basic Authentication (Basic Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve available Kubernetes versions
api_instance.k8sVersionsGet.then((response) => console.log(response));
```

* Api Key Authentication (Token Authentication):
```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs')
# setup authorization
const config = new ionoscloud.Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
});
api_instance = ionoscloud.KubernetesApi(config)
# Retrieve available Kubernetes versions
api_instance.k8sVersionsGet.then((response) => console.log(response));
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Array<string>**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


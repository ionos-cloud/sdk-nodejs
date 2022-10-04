# KubernetesApi

All URIs are relative to [https://api.ionos.com/cloudapi/v5](https://api.ionos.com/cloudapi/v5)

| Method | HTTP request | Description |
| :--- | :--- | :--- |
| [**k8sDelete**](kubernetesapi.md#k8sdelete) | **DELETE** /k8s/{k8sClusterId} | Delete Kubernetes Cluster |
| [**k8sFindByClusterId**](kubernetesapi.md#k8sfindbyclusterid) | **GET** /k8s/{k8sClusterId} | Retrieve Kubernetes Cluster |
| [**k8sGet**](kubernetesapi.md#k8sget) | **GET** /k8s | List Kubernetes Clusters |
| [**k8sKubeconfigGet**](kubernetesapi.md#k8skubeconfigget) | **GET** /k8s/{k8sClusterId}/kubeconfig | Retrieve Kubernetes Configuration File |
| [**k8sNodepoolsDelete**](kubernetesapi.md#k8snodepoolsdelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Delete Kubernetes Node Pool |
| [**k8sNodepoolsFindById**](kubernetesapi.md#k8snodepoolsfindbyid) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Retrieve Kubernetes Node Pool |
| [**k8sNodepoolsGet**](kubernetesapi.md#k8snodepoolsget) | **GET** /k8s/{k8sClusterId}/nodepools | List Kubernetes Node Pools |
| [**k8sNodepoolsNodesDelete**](kubernetesapi.md#k8snodepoolsnodesdelete) | **DELETE** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Delete Kubernetes node |
| [**k8sNodepoolsNodesFindById**](kubernetesapi.md#k8snodepoolsnodesfindbyid) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId} | Retrieve Kubernetes node |
| [**k8sNodepoolsNodesGet**](kubernetesapi.md#k8snodepoolsnodesget) | **GET** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes | Retrieve Kubernetes nodes. |
| [**k8sNodepoolsNodesReplacePost**](kubernetesapi.md#k8snodepoolsnodesreplacepost) | **POST** /k8s/{k8sClusterId}/nodepools/{nodepoolId}/nodes/{nodeId}/replace | Recreate the Kubernetes node |
| [**k8sNodepoolsPost**](kubernetesapi.md#k8snodepoolspost) | **POST** /k8s/{k8sClusterId}/nodepools | Create a Kubernetes Node Pool |
| [**k8sNodepoolsPut**](kubernetesapi.md#k8snodepoolsput) | **PUT** /k8s/{k8sClusterId}/nodepools/{nodepoolId} | Modify Kubernetes Node Pool |
| [**k8sPost**](kubernetesapi.md#k8spost) | **POST** /k8s | Create Kubernetes Cluster |
| [**k8sPut**](kubernetesapi.md#k8sput) | **PUT** /k8s/{k8sClusterId} | Modify Kubernetes Cluster |
| [**k8sVersionsCompatibilitiesGet**](kubernetesapi.md#k8sversionscompatibilitiesget) | **GET** /k8s/versions/{clusterVersion}/compatibilities | Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster. |
| [**k8sVersionsDefaultGet**](kubernetesapi.md#k8sversionsdefaultget) | **GET** /k8s/versions/default | Retrieve the current default kubernetes version for clusters and nodepools. |
| [**k8sVersionsGet**](kubernetesapi.md#k8sversionsget) | **GET** /k8s/versions | Retrieve available Kubernetes versions |

## k8sDelete

> object k8sDelete\(k8sClusterId, opts\)

Delete Kubernetes Cluster

This will remove a Kubernetes Cluster.

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
// Delete Kubernetes Cluster
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
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

## k8sFindByClusterId

> k8sFindByClusterId\(k8sClusterId, opts\)

Retrieve Kubernetes Cluster

This will retrieve a single Kubernetes Cluster.

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
// Retrieve Kubernetes Cluster
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesCluster**](../models/kubernetescluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sGet

> k8sGet\(opts\)

List Kubernetes Clusters

You can retrieve a list of all kubernetes clusters associated with a contract

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
// List Kubernetes Clusters
api_instance
  .k8sGet({
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

[**KubernetesClusters**](../models/kubernetesclusters.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sKubeconfigGet

> k8sKubeconfigGet\(k8sClusterId, opts\)

Retrieve Kubernetes Configuration File

You can retrieve kubernetes configuration file for the kubernetes cluster.

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
// Retrieve Kubernetes Configuration File
api_instance
  .k8sKubeconfigGet({
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesConfig**](../models/kubernetesconfig.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sNodepoolsDelete

> object k8sNodepoolsDelete\(k8sClusterId, nodepoolId, opts\)

Delete Kubernetes Node Pool

This will remove a Kubernetes Node Pool.

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
// Delete Kubernetes Node Pool
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
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

## k8sNodepoolsFindById

> k8sNodepoolsFindById\(k8sClusterId, nodepoolId, opts\)

Retrieve Kubernetes Node Pool

You can retrieve a single Kubernetes Node Pool.

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
// Retrieve Kubernetes Node Pool
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesNodePool**](../models/kubernetesnodepool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sNodepoolsGet

> k8sNodepoolsGet\(k8sClusterId, opts\)

List Kubernetes Node Pools

You can retrieve a list of all kubernetes node pools part of kubernetes cluster

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
// List Kubernetes Node Pools
api_instance
  .k8sNodepoolsGet({
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesNodePools**](../models/kubernetesnodepools.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sNodepoolsNodesDelete

> object k8sNodepoolsNodesDelete\(k8sClusterId, nodepoolId, nodeId, opts\)

Delete Kubernetes node

This will remove a Kubernetes node.

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
// Delete Kubernetes node
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
| **nodeId** | **string** | The unique ID of the Kubernetes node | \[default to undefined\] |
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

## k8sNodepoolsNodesFindById

> k8sNodepoolsNodesFindById\(k8sClusterId, nodepoolId, nodeId, opts\)

Retrieve Kubernetes node

You can retrieve a single Kubernetes Node.

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
// Retrieve Kubernetes node
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
| **nodeId** | **string** | The unique ID of the Kubernetes Node. | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesNode**](../models/kubernetesnode.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sNodepoolsNodesGet

> k8sNodepoolsNodesGet\(k8sClusterId, nodepoolId, opts\)

Retrieve Kubernetes nodes.

You can retrieve all nodes of Kubernetes Node Pool.

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
// Retrieve Kubernetes nodes.
api_instance
  .k8sNodepoolsNodesGet({
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesNodes**](../models/kubernetesnodes.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sNodepoolsNodesReplacePost

> object k8sNodepoolsNodesReplacePost\(k8sClusterId, nodepoolId, nodeId, opts\)

Recreate the Kubernetes node

You can recreate a single Kubernetes Node. Managed Kubernetes starts a process which based on the nodepool\'s template creates & configures a new node, waits for status \"ACTIVE\", and migrates all the pods from the faulty node, deleting it once empty. While this operation occurs, the nodepool will have an extra billable \"ACTIVE\" node.

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
// Recreate the Kubernetes node
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
| **nodeId** | **string** | The unique ID of the Kubernetes Node. | \[default to undefined\] |
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

## k8sNodepoolsPost

> k8sNodepoolsPost\(k8sClusterId, kubernetesNodePool, opts\)

Create a Kubernetes Node Pool

This will create a new Kubernetes Node Pool inside a Kubernetes Cluster.

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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **kubernetesNodePool** | [**KubernetesNodePoolForPost**](../models/kubernetesnodepoolforpost.md) | Details of the Kubernetes Node Pool |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesNodePool**](../models/kubernetesnodepool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## k8sNodepoolsPut

> k8sNodepoolsPut\(k8sClusterId, nodepoolId, kubernetesNodePool, opts\)

Modify Kubernetes Node Pool

This will modify the Kubernetes Node Pool.

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
// Modify Kubernetes Node Pool
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **nodepoolId** | **string** | The unique ID of the Kubernetes Node Pool | \[default to undefined\] |
| **kubernetesNodePool** | [**KubernetesNodePoolForPut**](../models/kubernetesnodepoolforput.md) | Details of the Kubernetes Node Pool |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesNodePool**](../models/kubernetesnodepool.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## k8sPost

> k8sPost\(kubernetesCluster, opts\)

Create Kubernetes Cluster

This will create a new Kubernetes Cluster.

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
// Create Kubernetes Cluster
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
| :--- | :--- | :--- | :--- |
| **kubernetesCluster** | [**KubernetesClusterForPost**](../models/kubernetesclusterforpost.md) | Details of the Kubernetes Cluster |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesCluster**](../models/kubernetescluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## k8sPut

> k8sPut\(k8sClusterId, kubernetesCluster, opts\)

Modify Kubernetes Cluster

This will modify the Kubernetes Cluster.

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
// Modify Kubernetes Cluster
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
| :--- | :--- | :--- | :--- |
| **k8sClusterId** | **string** | The unique ID of the Kubernetes Cluster | \[default to undefined\] |
| **kubernetesCluster** | [**KubernetesClusterForPut**](../models/kubernetesclusterforput.md) | Details of the Kubernetes Cluster |  |
| **pretty** | **boolean** | Controls whether response is pretty-printed \(with indentation and new lines\) | \[optional\]\[default to true\] |
| **depth** | **number** | Controls the details depth of response objects.  Eg. GET /datacenters/\[ID\]  - depth=0: only direct properties are included. Children \(servers etc.\) are not included  - depth=1: direct properties and children references are included  - depth=2: direct properties and children properties are included  - depth=3: direct properties and children properties and children\'s children are included  - depth=... and so on | \[optional\]\[default to 0\] |
| **xContractNumber** | **number** | Users having more than 1 contract need to provide contract number, against which all API requests should be executed | \[optional\]\[default to undefined\] |

### Return type

[**KubernetesCluster**](../models/kubernetescluster.md)

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: application/json
* **Accept**: application/json

## k8sVersionsCompatibilitiesGet

> Array&lt;string&gt; k8sVersionsCompatibilitiesGet\(clusterVersion\)

Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.

You can retrieve a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.

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
// Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.
api_instance
  .k8sVersionsCompatibilitiesGet({
    clusterVersion: clusterVersion_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **clusterVersion** | **string** |  | \[default to undefined\] |

### Return type

**Array&lt;string&gt;**

### Authorization

Basic Authentication, Token Authentication

### HTTP request headers

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sVersionsDefaultGet

> string k8sVersionsDefaultGet

Retrieve the current default kubernetes version for clusters and nodepools.

You can retrieve the current default kubernetes version for clusters and nodepools.

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
// Retrieve the current default kubernetes version for clusters and nodepools.
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

* **Content-Type**: Not defined
* **Accept**: application/json

## k8sVersionsGet

> Array&lt;string&gt; k8sVersionsGet

Retrieve available Kubernetes versions

You can retrieve a list of available kubernetes versions

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
// Retrieve available Kubernetes versions
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

* **Content-Type**: Not defined
* **Accept**: application/json

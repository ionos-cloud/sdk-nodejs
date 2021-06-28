# Class: KubernetesApi

## KubernetesApi

#### new KubernetesApi()

KubernetesApi - object-oriented interface

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1820](/../../api/kubernetes-api.ts#L1820)

---------------

### Extends

- BaseAPI

### Methods

#### k8sDelete(requestParameters, options)

Delete Kubernetes Cluster
This will remove a Kubernetes Cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sDeleteRequest](global.md#KubernetesApiK8sDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1835](/../../api/kubernetes-api.ts#L1835)

##### Throws:

*RequiredError*

#### k8sFindByClusterId(requestParameters, options)

Retrieve Kubernetes Cluster
This will retrieve a single Kubernetes Cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sFindByClusterIdRequest](global.md#KubernetesApiK8sFindByClusterIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1846](/../../api/kubernetes-api.ts#L1846)

##### Throws:

*RequiredError*

#### k8sGet(requestParameters, options)

List Kubernetes Clusters
You can retrieve a list of all kubernetes clusters associated with a contract

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sGetRequest](global.md#KubernetesApiK8sGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1857](/../../api/kubernetes-api.ts#L1857)

##### Throws:

*RequiredError*

#### k8sKubeconfigGet(requestParameters, options)

Retrieve Kubernetes Configuration File
You can retrieve kubernetes configuration file for the kubernetes cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sKubeconfigGetRequest](global.md#KubernetesApiK8sKubeconfigGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1868](/../../api/kubernetes-api.ts#L1868)

##### Throws:

*RequiredError*

#### k8sNodepoolsDelete(requestParameters, options)

Delete Kubernetes Node Pool
This will remove a Kubernetes Node Pool.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsDeleteRequest](global.md#KubernetesApiK8sNodepoolsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1879](/../../api/kubernetes-api.ts#L1879)

##### Throws:

*RequiredError*

#### k8sNodepoolsFindById(requestParameters, options)

Retrieve Kubernetes Node Pool
You can retrieve a single Kubernetes Node Pool.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsFindByIdRequest](global.md#KubernetesApiK8sNodepoolsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1890](/../../api/kubernetes-api.ts#L1890)

##### Throws:

*RequiredError*

#### k8sNodepoolsGet(requestParameters, options)

List Kubernetes Node Pools
You can retrieve a list of all kubernetes node pools part of kubernetes cluster

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsGetRequest](global.md#KubernetesApiK8sNodepoolsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1901](/../../api/kubernetes-api.ts#L1901)

##### Throws:

*RequiredError*

#### k8sNodepoolsNodesDelete(requestParameters, options)

Delete Kubernetes node
This will remove a Kubernetes node.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsNodesDeleteRequest](global.md#KubernetesApiK8sNodepoolsNodesDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1912](/../../api/kubernetes-api.ts#L1912)

##### Throws:

*RequiredError*

#### k8sNodepoolsNodesFindById(requestParameters, options)

Retrieve Kubernetes node
You can retrieve a single Kubernetes Node.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsNodesFindByIdRequest](global.md#KubernetesApiK8sNodepoolsNodesFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1923](/../../api/kubernetes-api.ts#L1923)

##### Throws:

*RequiredError*

#### k8sNodepoolsNodesGet(requestParameters, options)

Retrieve Kubernetes nodes.
You can retrieve all nodes of Kubernetes Node Pool.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsNodesGetRequest](global.md#KubernetesApiK8sNodepoolsNodesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1934](/../../api/kubernetes-api.ts#L1934)

##### Throws:

*RequiredError*

#### k8sNodepoolsNodesReplacePost(requestParameters, options)

Recreate the Kubernetes node
You can recreate a single Kubernetes Node.  Managed Kubernetes starts a process which based on the nodepool\'s template creates & configures a new node, waits for status \"ACTIVE\", and migrates all the pods from the faulty node, deleting it once empty. While this operation occurs, the nodepool will have an extra billable \"ACTIVE\" node.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsNodesReplacePostRequest](global.md#KubernetesApiK8sNodepoolsNodesReplacePostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1945](/../../api/kubernetes-api.ts#L1945)

##### Throws:

*RequiredError*

#### k8sNodepoolsPost(requestParameters, options)

Create a Kubernetes Node Pool
This will create a new Kubernetes Node Pool inside a Kubernetes Cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsPostRequest](global.md#KubernetesApiK8sNodepoolsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1956](/../../api/kubernetes-api.ts#L1956)

##### Throws:

*RequiredError*

#### k8sNodepoolsPut(requestParameters, options)

Modify Kubernetes Node Pool
This will modify the Kubernetes Node Pool.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sNodepoolsPutRequest](global.md#KubernetesApiK8sNodepoolsPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1967](/../../api/kubernetes-api.ts#L1967)

##### Throws:

*RequiredError*

#### k8sPost(requestParameters, options)

Create Kubernetes Cluster
This will create a new Kubernetes Cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sPostRequest](global.md#KubernetesApiK8sPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1978](/../../api/kubernetes-api.ts#L1978)

##### Throws:

*RequiredError*

#### k8sPut(requestParameters, options)

Modify Kubernetes Cluster
This will modify the Kubernetes Cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sPutRequest](global.md#KubernetesApiK8sPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 1989](/../../api/kubernetes-api.ts#L1989)

##### Throws:

*RequiredError*

#### k8sVersionsCompatibilitiesGet(requestParameters, options)

Retrieves a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.
You can retrieve a list of available kubernetes versions for nodepools depending on the given kubernetes version running in the cluster.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[KubernetesApiK8sVersionsCompatibilitiesGetRequest](global.md#KubernetesApiK8sVersionsCompatibilitiesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 2000](/../../api/kubernetes-api.ts#L2000)

##### Throws:

*RequiredError*

#### k8sVersionsDefaultGet(options)

Retrieve the current default kubernetes version for clusters and nodepools.
You can retrieve the current default kubernetes version for clusters and nodepools.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 2010](/../../api/kubernetes-api.ts#L2010)

##### Throws:

*RequiredError*

#### k8sVersionsGet(options)

Retrieve available Kubernetes versions
You can retrieve a list of available kubernetes versions

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/kubernetes-api.ts](/../../api/kubernetes-api.ts), [line 2020](/../../api/kubernetes-api.ts#L2020)

##### Throws:

*RequiredError*
# KubernetesNodePoolPropertiesForPut

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A Kubernetes node pool name. Valid Kubernetes node pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] [default to undefined] |
| **nodeCount** | **number** | The number of worker nodes of the node pool. | [default to undefined] |
| **serverType** | [**KubernetesNodePoolServerType**](KubernetesNodePoolServerType.md) |  | [optional] [default to undefined] |
| **k8sVersion** | **string** | The Kubernetes version running in the node pool. Note that this imposes restrictions on which Kubernetes versions can run in the node pools of a cluster. Also, not all Kubernetes versions are suitable upgrade targets for all earlier versions. | [optional] [default to undefined] |
| **maintenanceWindow** | [**KubernetesMaintenanceWindow**](KubernetesMaintenanceWindow.md) |  | [optional] [default to undefined] |
| **autoScaling** | [**KubernetesAutoScaling**](KubernetesAutoScaling.md) |  | [optional] [default to undefined] |
| **lans** | [**Array&lt;KubernetesNodePoolLan&gt;**](KubernetesNodePoolLan.md) | The array of existing private LANs to attach to worker nodes. | [optional] [default to undefined] |
| **labels** | **{ [key: string]: string; }** | The labels attached to the node pool. | [optional] [default to undefined] |
| **annotations** | **{ [key: string]: string; }** | The annotations attached to the node pool. | [optional] [default to undefined] |
| **publicIps** | **Array&lt;string&gt;** | Optional array of reserved public IP addresses to be used by the nodes. The IPs must be from the exact location of the node pool\'s data center. If autoscaling is used, the array must contain one more IP than the maximum possible number of nodes (nodeCount+1 for a fixed number of nodes or maxNodeCount+1). The extra IP is used when the nodes are rebuilt. | [optional] [default to undefined] |



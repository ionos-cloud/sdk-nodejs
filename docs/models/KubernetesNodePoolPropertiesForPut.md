# KubernetesNodePoolPropertiesForPut

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A Kubernetes node pool name. Valid Kubernetes node pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] [default to undefined] |
| **nodeCount** | **number** | The number of nodes that make up the node pool. | [default to undefined] |
| **k8sVersion** | **string** | The Kubernetes version the nodepool is running. This imposes restrictions on what Kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all Kubernetes versions are viable upgrade targets for all prior versions. | [optional] [default to undefined] |
| **maintenanceWindow** | [**KubernetesMaintenanceWindow**](KubernetesMaintenanceWindow.md) |  | [optional] [default to undefined] |
| **autoScaling** | [**KubernetesAutoScaling**](KubernetesAutoScaling.md) |  | [optional] [default to undefined] |
| **lans** | [**Array&lt;KubernetesNodePoolLan&gt;**](KubernetesNodePoolLan.md) | array of additional LANs attached to worker nodes | [optional] [default to undefined] |
| **labels** | **{ [key: string]: string; }** | map of labels attached to node pool. | [optional] [default to undefined] |
| **annotations** | **{ [key: string]: string; }** | map of annotations attached to node pool. | [optional] [default to undefined] |
| **publicIps** | **Array&lt;string&gt;** | Optional array of reserved public IP addresses to be used by the nodes. IPs must be from same location as the data center used for the node pool. The array must contain one extra IP than maximum number of nodes could be. (nodeCount+1 if fixed node amount or maxNodeCount+1 if auto scaling is used) The extra provided IP Will be used during rebuilding of nodes. | [optional] [default to undefined] |



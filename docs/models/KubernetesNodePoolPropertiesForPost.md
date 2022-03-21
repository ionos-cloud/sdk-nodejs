# KubernetesNodePoolPropertiesForPost

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A Kubernetes node pool name. Valid Kubernetes node pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [default to undefined] |
| **datacenterId** | **string** | A valid ID of the data center, to which the user has access. | [default to undefined] |
| **nodeCount** | **number** | The number of nodes that make up the node pool. | [default to undefined] |
| **cpuFamily** | **string** | A valid CPU family name. | [default to undefined] |
| **coresCount** | **number** | The number of cores for the node. | [default to undefined] |
| **ramSize** | **number** | The RAM size for the node. Must be set in multiples of 1024 MB, with minimum size is of 2048 MB. | [default to undefined] |
| **availabilityZone** | **string** | The availability zone in which the target VM should be provisioned. | [default to undefined] |
| **storageType** | **string** | The type of hardware for the volume. | [default to undefined] |
| **storageSize** | **number** | The size of the volume in GB. The size should be greater than 10GB. | [default to undefined] |
| **k8sVersion** | **string** | The Kubernetes version the nodepool is running. This imposes restrictions on what Kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all Kubernetes versions are viable upgrade targets for all prior versions. | [optional] [default to undefined] |
| **maintenanceWindow** | [**KubernetesMaintenanceWindow**](KubernetesMaintenanceWindow.md) |  | [optional] [default to undefined] |
| **autoScaling** | [**KubernetesAutoScaling**](KubernetesAutoScaling.md) |  | [optional] [default to undefined] |
| **lans** | [**Array&lt;KubernetesNodePoolLan&gt;**](KubernetesNodePoolLan.md) | array of additional LANs attached to worker nodes | [optional] [default to undefined] |
| **labels** | **{ [key: string]: string; }** | map of labels attached to node pool. | [optional] [default to undefined] |
| **annotations** | **{ [key: string]: string; }** | map of annotations attached to node pool. | [optional] [default to undefined] |
| **publicIps** | **Array&lt;string&gt;** | Optional array of reserved public IP addresses to be used by the nodes. IPs must be from same location as the data center used for the node pool. The array must contain one more IP than the maximum possible number of nodes (nodeCount+1 for fixed number of nodes or maxNodeCount+1 when auto scaling is used). The extra IP is used when the nodes are rebuilt. | [optional] [default to undefined] |
| **gatewayIp** | **string** | Public IP address for the gateway performing source NAT for the node pool\'s nodes belonging to a private cluster. Required only if the node pool belongs to a private cluster. | [optional] [default to undefined] |



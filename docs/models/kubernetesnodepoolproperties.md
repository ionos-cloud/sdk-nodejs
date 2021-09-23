# KubernetesNodePoolProperties

## Properties

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **name** | **string** | A Kubernetes Node Pool Name. Valid Kubernetes Node Pool name must be 63 characters or less and must be empty or begin and end with an alphanumeric character \(\[a-z0-9A-Z\]\) with dashes \(-\), underscores \(\_\), dots \(.\), and alphanumerics between. | \[default to undefined\] |
| **datacenterId** | **string** | A valid uuid of the datacenter on which user has access | \[default to undefined\] |
| **nodeCount** | **number** | Number of nodes part of the Node Pool | \[default to undefined\] |
| **cpuFamily** | **string** | A valid cpu family name | \[default to undefined\] |
| **coresCount** | **number** | Number of cores for node | \[default to undefined\] |
| **ramSize** | **number** | RAM size for node, minimum size is 2048MB. Ram size must be set to multiple of 1024MB. | \[default to undefined\] |
| **availabilityZone** | **string** | The availability zone in which the target VM should exist | \[default to undefined\] |
| **storageType** | **string** | Hardware type of the volume | \[default to undefined\] |
| **storageSize** | **number** | The size of the volume in GB. The size should be greater than 10GB. | \[default to undefined\] |
| **k8sVersion** | **string** | The kubernetes version in which a nodepool is running. This imposes restrictions on what kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all kubernetes versions are viable upgrade targets for all prior versions. | \[optional\] \[default to undefined\] |
| **maintenanceWindow** | [**KubernetesMaintenanceWindow**](kubernetesmaintenancewindow.md) |  | \[optional\] \[default to undefined\] |
| **autoScaling** | [**KubernetesAutoScaling**](kubernetesautoscaling.md) |  | \[optional\] \[default to undefined\] |
| **lans** | [**Array&lt;KubernetesNodePoolLan&gt;**](kubernetesnodepoollan.md) | array of additional LANs attached to worker nodes | \[optional\] \[default to undefined\] |
| **labels** | **{ \[key: string\]: string; }** | map of labels attached to node pool | \[optional\] \[default to undefined\] |
| **annotations** | **{ \[key: string\]: string; }** | map of annotations attached to node pool | \[optional\] \[default to undefined\] |
| **publicIps** | **Array&lt;string&gt;** | Optional array of reserved public IP addresses to be used by the nodes. IPs must be from same location as the data center used for the node pool. The array must contain one extra IP than maximum number of nodes could be. \(nodeCount+1 if fixed node amount or maxNodeCount+1 if auto scaling is used\) The extra provided IP Will be used during rebuilding of nodes. | \[optional\] \[default to undefined\] |
| **availableUpgradeVersions** | **Array&lt;string&gt;** | List of available versions for upgrading the node pool | \[optional\] \[default to undefined\] |


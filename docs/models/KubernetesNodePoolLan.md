# KubernetesNodePoolLan

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **number** | The LAN ID of an existing LAN at the related data center | [default to undefined] |
| **dhcp** | **boolean** | Specifies whether the Kubernetes node pool LAN reserves an IP with DHCP. | [optional] [default to undefined] |
| **routes** | [**Array&lt;KubernetesNodePoolLanRoutes&gt;**](KubernetesNodePoolLanRoutes.md) | The array of additional LANs attached to worker nodes. | [optional] [default to undefined] |



# KubernetesNodePoolLan

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **number** | The LAN ID of an existing LAN at the related datacenter | [default to undefined] |
| **dhcp** | **boolean** | Indicates if the Kubernetes Node Pool LAN will reserve an IP using DHCP | [optional] [default to undefined] |
| **routes** | [**Array&lt;KubernetesNodePoolLanRoutes&gt;**](KubernetesNodePoolLanRoutes.md) | array of additional LANs attached to worker nodes | [optional] [default to undefined] |



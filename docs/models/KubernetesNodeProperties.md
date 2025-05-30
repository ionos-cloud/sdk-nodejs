# KubernetesNodeProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The Kubernetes node name. | [default to undefined] |
| **publicIP** | **string** | The public IP associated with the node. | [optional] [default to undefined] |
| **privateIP** | **string** | The private IP associated with the node. | [optional] [default to undefined] |
| **k8sVersion** | **string** | The Kubernetes version running in the node pool. Note that this imposes restrictions on which Kubernetes versions can run in the node pools of a cluster. Also, not all Kubernetes versions are suitable upgrade targets for all earlier versions. | [default to undefined] |



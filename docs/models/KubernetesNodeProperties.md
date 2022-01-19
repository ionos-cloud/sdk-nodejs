# KubernetesNodeProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A Kubernetes node name. | [default to undefined] |
| **publicIP** | **string** | A valid public IP. | [optional] [default to undefined] |
| **privateIP** | **string** | A valid private IP. | [optional] [default to undefined] |
| **k8sVersion** | **string** | The Kubernetes version the nodepool is running. This imposes restrictions on what Kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all Kubernetes versions are viable upgrade targets for all prior versions. | [default to undefined] |



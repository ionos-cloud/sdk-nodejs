# KubernetesAutoScaling

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **minNodeCount** | **number** | The minimum number of working nodes that the managed node pool can scale must be >= 1 and >= nodeCount. Required if autoScaling is specified. | [default to undefined] |
| **maxNodeCount** | **number** | The maximum number of worker nodes that the managed node pool can scale in. Must be >= minNodeCount and must be >= nodeCount. Required if autoScaling is specified. | [default to undefined] |



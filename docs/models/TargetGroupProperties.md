# TargetGroupProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the target group. | [default to undefined] |
| **algorithm** | **string** | Balancing algorithm | [default to undefined] |
| **protocol** | **string** | Balancing protocol | [default to undefined] |
| **targets** | [**Array&lt;TargetGroupTarget&gt;**](TargetGroupTarget.md) | Array of items in the collection. | [optional] [default to undefined] |
| **healthCheck** | [**TargetGroupHealthCheck**](TargetGroupHealthCheck.md) |  | [optional] [default to undefined] |
| **httpHealthCheck** | [**TargetGroupHttpHealthCheck**](TargetGroupHttpHealthCheck.md) |  | [optional] [default to undefined] |



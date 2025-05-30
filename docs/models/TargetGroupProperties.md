# TargetGroupProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The target group name. | [default to undefined] |
| **algorithm** | **string** | The balancing algorithm. A balancing algorithm consists of predefined rules with the logic that a load balancer uses to distribute network traffic between servers.  - **Round Robin**: Targets are served alternately according to their weighting.  - **Least Connection**: The target with the least active connection is served.  - **Random**: The targets are served based on a consistent pseudorandom algorithm.  - **Source IP**: It is ensured that the same client IP address reaches the same target. | [default to undefined] |
| **protocol** | **string** | The forwarding protocol. Only the value \'HTTP\' is allowed. | [default to undefined] |
| **protocolVersion** | **string** | The forwarding protocol version. Value is ignored when protocol is not \'HTTP\'. | [optional] [default to undefined] |
| **targets** | [**Array&lt;TargetGroupTarget&gt;**](TargetGroupTarget.md) | Array of items in the collection. | [optional] [default to undefined] |
| **healthCheck** | [**TargetGroupHealthCheck**](TargetGroupHealthCheck.md) |  | [optional] [default to undefined] |
| **httpHealthCheck** | [**TargetGroupHttpHealthCheck**](TargetGroupHttpHealthCheck.md) |  | [optional] [default to undefined] |



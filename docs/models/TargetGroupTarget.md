# TargetGroupTarget

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **ip** | **string** | The IP of the balanced target VM. | [default to undefined] |
| **port** | **number** | The port of the balanced target service; valid range is 1 to 65535. | [default to undefined] |
| **weight** | **number** | Traffic is distributed in proportion to target weight, relative to the combined weight of all targets. A target with higher weight receives a greater share of traffic. Valid range is 0 to 256 and default is 1; targets with weight of 0 do not participate in load balancing but still accept persistent connections. It is best use values in the middle of the range to leave room for later adjustments. | [default to undefined] |
| **healthCheckEnabled** | **boolean** | When the health check is enabled, the target is available only when it accepts regular TCP or HTTP connection attempts for state checking. The state check consists of one connection attempt with the target\'s address and port. The default value is \'TRUE\'. | [optional] [default to undefined] |
| **maintenanceEnabled** | **boolean** | When the maintenance mode is enabled, the target is prevented from receiving traffic; the default value is \'FALSE\'. | [optional] [default to undefined] |



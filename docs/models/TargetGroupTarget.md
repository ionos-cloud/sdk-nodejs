# TargetGroupTarget

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **healthCheckEnabled** | **boolean** | When the health check is enabled, the target is available only when it accepts regular TCP or HTTP connection attempts for state checking. The state check consists of one connection attempt with the target\'s address and port. The default value is \'TRUE\'. | [optional] [default to undefined] |
| **ip** | **string** | The IP address of the balanced target. | [default to undefined] |
| **maintenanceEnabled** | **boolean** | When the maintenance mode is enabled, the target is prevented from receiving traffic; the default value is \'FALSE\'. | [optional] [default to undefined] |
| **port** | **number** | The port of the balanced target service; the valid range is 1 to 65535. | [default to undefined] |
| **weight** | **number** | The traffic is distributed proportionally to target weight, which is the ratio of the total weight of all targets. A target with higher weight receives a larger share of traffic. The valid range is from 0 to 256; the default value is \'1\'. Targets with a weight of \'0\' do not participate in load balancing but still accept persistent connections. We recommend using values in the middle range to leave room for later adjustments. | [default to undefined] |
| **proxyProtocol** | **string** | ProxyProtocol is used to set the proxy protocol version. | [optional] [default to ProxyProtocolEnum_None] |



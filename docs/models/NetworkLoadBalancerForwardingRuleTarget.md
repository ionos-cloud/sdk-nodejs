# NetworkLoadBalancerForwardingRuleTarget

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **healthCheck** | [**NetworkLoadBalancerForwardingRuleTargetHealthCheck**](NetworkLoadBalancerForwardingRuleTargetHealthCheck.md) |  | [optional] [default to undefined] |
| **ip** | **string** | The IP of the balanced target VM. | [default to undefined] |
| **port** | **number** | The port of the balanced target service; valid range is 1 to 65535. | [default to undefined] |
| **weight** | **number** | Traffic is distributed in proportion to target weight, relative to the combined weight of all targets. A target with higher weight receives a greater share of traffic. Valid range is 0 to 256 and default is 1. Targets with weight of 0 do not participate in load balancing but still accept persistent connections. It is best to assign weights in the middle of the range to leave room for later adjustments. | [default to undefined] |
| **proxyProtocol** | **string** | ProxyProtocol is used to set the proxy protocol version. | [optional] [default to ProxyProtocolEnum_None] |



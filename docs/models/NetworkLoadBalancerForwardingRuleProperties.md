# NetworkLoadBalancerForwardingRuleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the Network Load Balancer forwarding rule. | [default to undefined] |
| **algorithm** | **string** | Balancing algorithm | [default to undefined] |
| **protocol** | **string** | Balancing protocol | [default to undefined] |
| **listenerIp** | **string** | Listening (inbound) IP | [default to undefined] |
| **listenerPort** | **number** | Listening (inbound) port number; valid range is 1 to 65535. | [default to undefined] |
| **healthCheck** | [**NetworkLoadBalancerForwardingRuleHealthCheck**](NetworkLoadBalancerForwardingRuleHealthCheck.md) |  | [optional] [default to undefined] |
| **targets** | [**Array&lt;NetworkLoadBalancerForwardingRuleTarget&gt;**](NetworkLoadBalancerForwardingRuleTarget.md) | Array of items in the collection. | [default to undefined] |



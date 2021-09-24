# NetworkLoadBalancerForwardingRuleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that Network Load Balancer forwarding rule | [default to undefined] |
| **algorithm** | **string** | Algorithm for the balancing. | [default to undefined] |
| **protocol** | **string** | Protocol of the balancing. | [default to undefined] |
| **listenerIp** | **string** | Listening IP. (inbound) | [default to undefined] |
| **listenerPort** | **number** | Listening port number. (inbound) (range: 1 to 65535) | [default to undefined] |
| **healthCheck** | [**NetworkLoadBalancerForwardingRuleHealthCheck**](NetworkLoadBalancerForwardingRuleHealthCheck.md) |  | [optional] [default to undefined] |
| **targets** | [**Array&lt;NetworkLoadBalancerForwardingRuleTarget&gt;**](NetworkLoadBalancerForwardingRuleTarget.md) | Array of items in that collection | [default to undefined] |



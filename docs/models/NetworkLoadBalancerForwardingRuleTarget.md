# NetworkLoadBalancerForwardingRuleTarget

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **ip** | **string** | IP of a balanced target VM | [default to undefined] |
| **port** | **number** | Port of the balanced target service. (range: 1 to 65535) | [default to undefined] |
| **weight** | **number** | Weight parameter is used to adjust the target VM\'s weight relative to other target VMs. All target VMs will receive a load proportional to their weight relative to the sum of all weights, so the higher the weight, the higher the load. The default weight is 1, and the maximal value is 256. A value of 0 means the target VM will not participate in load-balancing but will still accept persistent connections. If this parameter is used to distribute the load according to target VM\'s capacity, it is recommended to start with values which can both grow and shrink, for instance between 10 and 100 to leave enough room above and below for later adjustments. | [default to undefined] |
| **healthCheck** | [**NetworkLoadBalancerForwardingRuleTargetHealthCheck**](NetworkLoadBalancerForwardingRuleTargetHealthCheck.md) |  | [optional] [default to undefined] |



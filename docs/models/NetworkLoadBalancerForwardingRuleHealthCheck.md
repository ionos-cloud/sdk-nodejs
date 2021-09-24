# NetworkLoadBalancerForwardingRuleHealthCheck

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **clientTimeout** | **number** | ClientTimeout is expressed in milliseconds. This inactivity timeout applies when the client is expected to acknowledge or send data. If unset the default of 50 seconds will be used. | [optional] [default to undefined] |
| **connectTimeout** | **number** | It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed. If unset, the default of 5 seconds will be used. | [optional] [default to undefined] |
| **targetTimeout** | **number** | TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side. If unset, the default of 50 seconds will be used. | [optional] [default to undefined] |
| **retries** | **number** | Retries specifies the number of retries to perform on a target VM after a connection failure. If unset, the default value of 3 will be used. (valid range: [0, 65535]) | [optional] [default to undefined] |



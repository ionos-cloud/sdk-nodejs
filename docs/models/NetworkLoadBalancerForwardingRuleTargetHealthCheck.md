# NetworkLoadBalancerForwardingRuleTargetHealthCheck

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **check** | **boolean** | Makes the target available only if it accepts periodic health check TCP connection attempts; when turned off, the target is considered always available. The health check only consists of a connection attempt to the address and port of the target. | [optional] [default to undefined] |
| **checkInterval** | **number** | The interval in milliseconds between consecutive health checks; default is 2000. | [optional] [default to undefined] |
| **maintenance** | **boolean** | Maintenance mode prevents the target from receiving balanced traffic. | [optional] [default to undefined] |



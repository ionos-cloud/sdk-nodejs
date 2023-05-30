# TargetGroupHealthCheck

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **checkInterval** | **number** | The interval in milliseconds between consecutive health checks; the default value is \'2000\'. | [optional] [default to undefined] |
| **checkTimeout** | **number** | The maximum time in milliseconds is to wait for a target to respond to a check. For target VMs with a \'Check Interval\' set, the smaller of the two values is used once the TCP connection is established. | [optional] [default to undefined] |
| **retries** | **number** | The maximum number of attempts to reconnect to a target after a connection failure. The valid range is \'0 to 65535\'; the default value is \'3\'. | [optional] [default to undefined] |



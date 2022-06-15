# TargetGroupHealthCheck

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **checkTimeout** | **number** | The maximum time in milliseconds to wait for a target to respond to a check. For target VMs with \'Check Interval\' set, the lesser of the two  values is used once the TCP connection is established. | [optional] [default to undefined] |
| **checkInterval** | **number** | The interval in milliseconds between consecutive health checks; default is 2000. | [optional] [default to undefined] |
| **retries** | **number** | The maximum number of attempts to reconnect to a target after a connection failure. Valid range is 0 to 65535, and default is three reconnection attempts. | [optional] [default to undefined] |



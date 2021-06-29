# IpBlockProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **ips** | **Array&lt;string&gt;** | A collection of IPs associated with the IP Block | [optional] [readonly] [default to undefined] |
| **location** | **string** | Location of that IP Block. Property cannot be modified after creation (disallowed in update requests) | [default to undefined] |
| **size** | **number** | The size of the IP block | [default to undefined] |
| **name** | **string** | A name of that resource | [optional] [default to undefined] |
| **ipConsumers** | [**Array&lt;IpConsumer&gt;**](IpConsumer.md) | Read-Only attribute. Lists consumption detail of an individual ip | [optional] [readonly] [default to undefined] |



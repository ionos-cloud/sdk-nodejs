# LoadbalancerProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **ip** | **string** | IPv4 address of the loadbalancer. All attached NICs will inherit this IP. Leaving value null will assign IP automatically. | [optional] [default to undefined] |
| **dhcp** | **boolean** | Indicates if the loadbalancer will reserve an IP using DHCP. | [optional] [default to undefined] |



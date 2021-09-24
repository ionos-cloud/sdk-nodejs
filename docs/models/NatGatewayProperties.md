# NatGatewayProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | Name of the NAT gateway | [default to undefined] |
| **publicIps** | **Array&lt;string&gt;** | Collection of public IP addresses of the NAT gateway. Should be customer reserved IP addresses in that location | [default to undefined] |
| **lans** | [**Array&lt;NatGatewayLanProperties&gt;**](NatGatewayLanProperties.md) | Collection of LANs connected to the NAT gateway. IPs must contain valid subnet mask. If user will not provide any IP then system will generate an IP with /24 subnet. | [optional] [default to undefined] |


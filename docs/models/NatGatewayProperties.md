# NatGatewayProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | Name of the NAT Gateway. | [default to undefined] |
| **publicIps** | **Array&lt;string&gt;** | Collection of public IP addresses of the NAT Gateway. Should be customer reserved IP addresses in that location. | [default to undefined] |
| **lans** | [**Array&lt;NatGatewayLanProperties&gt;**](NatGatewayLanProperties.md) | Collection of LANs connected to the NAT Gateway. IPs must contain a valid subnet mask. If no IP is provided, the system will generate an IP with /24 subnet. | [optional] [default to undefined] |



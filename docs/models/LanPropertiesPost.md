# LanPropertiesPost

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **ipFailover** | [**Array&lt;IPFailover&gt;**](IPFailover.md) | IP failover configurations for lan | [optional] [default to undefined] |
| **ipv6CidrBlock** | **string** | For a GET request, this value is either \'null\' or contains the LAN\'s /64 IPv6 CIDR block if this LAN is IPv6-enabled. For POST/PUT/PATCH requests, \'AUTO\' will result in enabling this LAN for IPv6 and automatically assign a /64 IPv6 CIDR block to this LAN. If you choose the IPv6 CIDR block on your own, then you must provide a /64 block, which is inside the IPv6 CIDR block of the virtual datacenter and unique inside all LANs from this virtual datacenter. If you enable IPv6 on a LAN with NICs, those NICs will get a /80 IPv6 CIDR block and one IPv6 address assigned to each automatically, unless you specify them explicitly on the NICs. A virtual data center is limited to a maximum of 256 IPv6-enabled LANs. | [optional] [default to undefined] |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **pcc** | **string** | The unique identifier of the private Cross-Connect the LAN is connected to, if any. | [optional] [default to undefined] |
| **_public** | **boolean** | This LAN faces the public Internet. | [optional] [default to undefined] |



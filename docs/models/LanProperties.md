# LanProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **ipFailover** | [**Array&lt;IPFailover&gt;**](IPFailover.md) | IP failover configurations for lan | [optional] [default to undefined] |
| **ipv4CidrBlock** | **string** | For public LANs this property is null, for private LANs it contains the private IPv4 CIDR range. This property is a read only property. | [optional] [readonly] [default to undefined] |
| **ipv6CidrBlock** | **string** | For a GET request, this value is either \'null\' or contains the LAN\'s /64 IPv6 CIDR block if this LAN is IPv6 enabled. For POST/PUT/PATCH requests, \'AUTO\' will result in enabling this LAN for IPv6 and automatically assign a /64 IPv6 CIDR block to this LAN and /80 IPv6 CIDR blocks to the NICs and one /128 IPv6 address to each connected NIC. If you choose the IPv6 CIDR block for the LAN on your own, then you must provide a /64 block, which is inside the IPv6 CIDR block of the virtual datacenter and unique inside all LANs from this virtual datacenter. If you enable IPv6 on a LAN with NICs, those NICs will get a /80 IPv6 CIDR block and one IPv6 address assigned to each automatically, unless you specify them explicitly on the LAN and on the NICs. A virtual data center is limited to a maximum of 256 IPv6-enabled LANs. | [optional] [default to undefined] |
| **pcc** | **string** | The unique identifier of the Cross Connect the LAN is connected to, if any. It needs to be ensured that IP addresses of the NICs of all LANs connected to a given Cross Connect is not duplicated and belongs to the same subnet range. | [optional] [default to undefined] |
| **_public** | **boolean** | Indicates if the LAN is connected to the internet or not. | [optional] [default to undefined] |



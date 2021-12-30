# NicProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that resource | [optional] [default to undefined] |
| **mac** | **string** | The MAC address of the NIC | [optional] [readonly] [default to undefined] |
| **ips** | **Array&lt;string&gt;** | Collection of IP addresses assigned to a nic. Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically. | [optional] [default to undefined] |
| **dhcp** | **boolean** | Indicates if the nic will reserve an IP using DHCP | [optional] [default to undefined] |
| **lan** | **number** | The LAN ID the NIC will sit on. If the LAN ID does not exist it will be implicitly created | [default to undefined] |
| **firewallActive** | **boolean** | Activate or deactivate the firewall. By default an active firewall without any defined rules will block all incoming network traffic except for the firewall rules that explicitly allows certain protocols, ip addresses and ports. | [optional] [default to undefined] |
| **nat** | **boolean** | Indicates if NAT is enabled on this NIC. This is now deprecated. | [optional] [default to undefined] |



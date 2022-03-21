# NicProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **mac** | **string** | The MAC address of the NIC. | [optional] [readonly] [default to undefined] |
| **ips** | **Array&lt;string&gt;** | Collection of IP addresses, assigned to the NIC. Explicitly assigned public IPs need to come from reserved IP blocks. Passing value null or empty array will assign an IP address automatically. | [optional] [default to undefined] |
| **dhcp** | **boolean** | Indicates if the NIC will reserve an IP using DHCP. | [optional] [default to undefined] |
| **lan** | **number** | The LAN ID the NIC will be on. If the LAN ID does not exist, it will be implicitly created. | [default to undefined] |
| **firewallActive** | **boolean** | Activate or deactivate the firewall. By default, an active firewall without any defined rules will block all incoming network traffic except for the firewall rules that explicitly allows certain protocols, IP addresses and ports. | [optional] [default to undefined] |
| **firewallType** | **string** | The type of firewall rules that will be allowed on the NIC. If not specified, the default INGRESS value is used. | [optional] [default to undefined] |
| **deviceNumber** | **number** | The Logical Unit Number (LUN) of the storage volume. Null if this NIC was created using Cloud API and no DCD changes were performed on the Datacenter. | [optional] [readonly] [default to undefined] |
| **pciSlot** | **number** | The PCI slot number for the NIC. | [optional] [readonly] [default to undefined] |



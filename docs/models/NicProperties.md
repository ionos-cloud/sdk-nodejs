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
| **firewallType** | **string** | The type of firewall rules that will be allowed on the NIC. If it is not specified it will take the default value INGRESS | [optional] [default to undefined] |
| **deviceNumber** | **number** | The Logical Unit Number (LUN) of the storage volume. Null if this NIC was create from CloudAPI and no DCD changes were done on the Datacenter. | [optional] [readonly] [default to undefined] |
| **pciSlot** | **number** | The PCI slot number of the Nic. | [optional] [readonly] [default to undefined] |



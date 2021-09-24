# NetworkLoadBalancerProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that Network Load Balancer | [default to undefined] |
| **listenerLan** | **number** | Id of the listening LAN. (inbound) | [default to undefined] |
| **ips** | **Array&lt;string&gt;** | Collection of IP addresses of the Network Load Balancer. (inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public load balancer and private IP for the private load balancer. | [optional] [default to undefined] |
| **targetLan** | **number** | Id of the balanced private target LAN. (outbound) | [default to undefined] |
| **lbPrivateIps** | **Array&lt;string&gt;** | Collection of private IP addresses with subnet mask of the Network Load Balancer. IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet. | [optional] [default to undefined] |



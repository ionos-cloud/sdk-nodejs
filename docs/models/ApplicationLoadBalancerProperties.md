# ApplicationLoadBalancerProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the Application Load Balancer. | [default to undefined] |
| **listenerLan** | **number** | ID of the listening (inbound) LAN. | [default to undefined] |
| **ips** | **Array&lt;string&gt;** | Collection of the Application Load Balancer IP addresses. (Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers. | [optional] [default to undefined] |
| **targetLan** | **number** | ID of the balanced private target LAN (outbound). | [default to undefined] |
| **lbPrivateIps** | **Array&lt;string&gt;** | Collection of private IP addresses with the subnet mask of the Application Load Balancer. IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet. | [optional] [default to undefined] |



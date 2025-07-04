# ApplicationLoadBalancerProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The Application Load Balancer name. | [default to undefined] |
| **listenerLan** | **number** | The ID of the listening (inbound) LAN. | [default to undefined] |
| **ips** | **Array&lt;string&gt;** | Collection of the Application Load Balancer IP addresses. (Inbound and outbound) IPs of the \'listenerLan\' are customer-reserved public IPs for the public load balancers, and private IPs for the private load balancers. | [optional] [default to undefined] |
| **targetLan** | **number** | The ID of the balanced private target LAN (outbound). | [default to undefined] |
| **lbPrivateIps** | **Array&lt;string&gt;** | Collection of private IP addresses with the subnet mask of the Application Load Balancer. IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet. | [optional] [default to undefined] |
| **centralLogging** | **boolean** | Turn logging on and off for this product. Default value is \'false\'. | [optional] [default to undefined] |
| **loggingFormat** | **string** | Specifies the format of the logs. | [optional] [default to undefined] |



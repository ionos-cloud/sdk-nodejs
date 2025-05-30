# NetworkLoadBalancerProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the Network Load Balancer. | [default to undefined] |
| **listenerLan** | **number** | ID of the listening LAN (inbound). | [default to undefined] |
| **ips** | **Array&lt;string&gt;** | Collection of the Network Load Balancer IP addresses. (Inbound and outbound) IPs of the listenerLan must be customer-reserved IPs for public Load Balancers, and private IPs for private Load Balancers. | [optional] [default to undefined] |
| **targetLan** | **number** | ID of the balanced private target LAN (outbound). | [default to undefined] |
| **lbPrivateIps** | **Array&lt;string&gt;** | Collection of private IP addresses with subnet mask of the Network Load Balancer. IPs must contain a valid subnet mask. If no IP is provided, the system will generate an IP with /24 subnet. | [optional] [default to undefined] |
| **centralLogging** | **boolean** | Turn logging on and off for this product. Default value is \'false\'. | [optional] [default to undefined] |
| **loggingFormat** | **string** | Specifies the format of the logs. | [optional] [default to undefined] |



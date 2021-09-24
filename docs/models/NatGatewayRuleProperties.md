# NatGatewayRuleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | Name of the NAT gateway rule | [default to undefined] |
| **type** | [**NatGatewayRuleType**](NatGatewayRuleType.md) | Type of the NAT gateway rule. | [optional] [default to undefined] |
| **protocol** | [**NatGatewayRuleProtocol**](NatGatewayRuleProtocol.md) | Protocol of the NAT gateway rule. Defaults to ALL. If protocol is \'ICMP\' then targetPortRange start and end cannot be set. | [optional] [default to undefined] |
| **sourceSubnet** | **string** | Source subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to based on the packets source IP address. | [default to undefined] |
| **publicIp** | **string** | Public IP address of the NAT gateway rule. Specifies the address used for masking outgoing packets source address field. Should be one of the customer reserved IP address already configured on the NAT gateway resource | [default to undefined] |
| **targetSubnet** | **string** | Target or destination subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to based on the packets destination IP address. If none is provided, rule will match any address. | [optional] [default to undefined] |
| **targetPortRange** | [**TargetPortRange**](TargetPortRange.md) |  | [optional] [default to undefined] |



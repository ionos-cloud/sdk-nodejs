# FirewallruleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **protocol** | **string** | The protocol for the rule. Property cannot be modified after it is created (disallowed in update requests). | [optional] [default to undefined] |
| **sourceMac** | **string** | Only traffic originating from the respective MAC address is allowed. Valid format: aa:bb:cc:dd:ee:ff. Value null allows traffic from any MAC address. | [optional] [default to undefined] |
| **ipVersion** | **string** | The IP version for this rule. If sourceIp or targetIp are specified, you can omit this value - the IP version will then be deduced from the IP address(es) used; if you specify it anyway, it must match the specified IP address(es). If neither sourceIp nor targetIp are specified, this rule allows traffic only for the specified IP version. If neither sourceIp, targetIp nor ipVersion are specified, this rule will only allow IPv4 traffic. | [optional] [default to undefined] |
| **sourceIp** | **string** | Only traffic originating from the respective IP address (or CIDR block) is allowed. Value null allows traffic from any IP address (according to the selected ipVersion). | [optional] [default to undefined] |
| **targetIp** | **string** | If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address (or CIDR block) of the NIC is allowed. Value null allows traffic to any target IP address (according to the selected ipVersion). | [optional] [default to undefined] |
| **icmpCode** | **number** | Defines the allowed code (from 0 to 254) if protocol ICMP or ICMPv6 is chosen. Value null allows all codes. | [optional] [default to undefined] |
| **icmpType** | **number** | Defines the allowed type (from 0 to 254) if the protocol ICMP or ICMPv6 is chosen. Value null allows all types. | [optional] [default to undefined] |
| **portRangeStart** | **number** | Defines the start range of the allowed port (from 1 to 65535) if protocol TCP or UDP is chosen. Leave portRangeStart and portRangeEnd value null to allow all ports. | [optional] [default to undefined] |
| **portRangeEnd** | **number** | Defines the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is chosen. Leave portRangeStart and portRangeEnd null to allow all ports. | [optional] [default to undefined] |
| **type** | **string** | The type of the firewall rule. If not specified, the default INGRESS value is used. | [optional] [default to undefined] |



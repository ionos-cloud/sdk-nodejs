# FirewallruleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that resource | [optional] [default to undefined] |
| **protocol** | **string** | The protocol for the rule. Property cannot be modified after creation (disallowed in update requests) | [default to undefined] |
| **sourceMac** | **string** | Only traffic originating from the respective MAC address is allowed. Valid format: aa:bb:cc:dd:ee:ff. Value null allows all source MAC address | [optional] [default to undefined] |
| **sourceIp** | **string** | Only traffic originating from the respective IPv4 address is allowed. Value null allows all source IPs | [optional] [default to undefined] |
| **targetIp** | **string** | In case the target NIC has multiple IP addresses, only traffic directed to the respective IP address of the NIC is allowed. Value null allows all target IPs | [optional] [default to undefined] |
| **icmpCode** | **number** | Defines the allowed code (from 0 to 254) if protocol ICMP is chosen. Value null allows all codes | [optional] [default to undefined] |
| **icmpType** | **number** | Defines the allowed type (from 0 to 254) if the protocol ICMP is chosen. Value null allows all types | [optional] [default to undefined] |
| **portRangeStart** | **number** | Defines the start range of the allowed port (from 1 to 65534) if protocol TCP or UDP is chosen. Leave portRangeStart and portRangeEnd value null to allow all ports | [optional] [default to undefined] |
| **portRangeEnd** | **number** | Defines the end range of the allowed port (from 1 to 65534) if the protocol TCP or UDP is chosen. Leave portRangeStart and portRangeEnd null to allow all ports | [optional] [default to undefined] |
| **type** | **string** | The type of firewall rule. If is not specified, it will take the default value INGRESS | [optional] [default to undefined] |



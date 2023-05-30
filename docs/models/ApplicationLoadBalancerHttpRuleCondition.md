# ApplicationLoadBalancerHttpRuleCondition

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **condition** | **string** | The matching rule for the HTTP rule condition attribute; this parameter is mandatory for \'HEADER\', \'PATH\', \'QUERY\', \'METHOD\', \'HOST\', and \'COOKIE\' types. It must be \'null\' if the type is \'SOURCE_IP\'. | [default to undefined] |
| **key** | **string** | The key can only be set when the HTTP rule condition type is \'COOKIES\', \'HEADER\', or \'QUERY\'. For the type \'PATH\', \'METHOD\', \'HOST\', or \'SOURCE_IP\' the value must be \'null\'. | [optional] [default to undefined] |
| **negate** | **boolean** | Specifies whether the condition should be negated; the default value is \'FALSE\'. | [optional] [default to undefined] |
| **type** | **string** | The HTTP rule condition type. | [default to undefined] |
| **value** | **string** | This parameter is mandatory for the conditions \'CONTAINS\', \'EQUALS\', \'MATCHES\', \'STARTS_WITH\', \'ENDS_WITH\', or if the type is \'SOURCE_IP\'. Specify a valid CIDR. If the condition is \'EXISTS\', the value must be \'null\'. | [optional] [default to undefined] |



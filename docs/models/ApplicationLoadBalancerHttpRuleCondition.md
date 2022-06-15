# ApplicationLoadBalancerHttpRuleCondition

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **type** | **string** | Type of the HTTP rule condition. | [default to undefined] |
| **condition** | **string** | Matching rule for the HTTP rule condition attribute; mandatory for HEADER, PATH, QUERY, METHOD, HOST, and COOKIE types; must be null when type is SOURCE_IP. | [default to undefined] |
| **negate** | **boolean** | Specifies whether the condition is negated or not; the default is False. | [optional] [default to undefined] |
| **key** | **string** | Must be null when type is PATH, METHOD, HOST, or SOURCE_IP. Key can only be set when type is COOKIES, HEADER, or QUERY. | [optional] [default to undefined] |
| **value** | **string** | Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH; must be null when condition is EXISTS; should be a valid CIDR if provided and if type is SOURCE_IP. | [optional] [default to undefined] |



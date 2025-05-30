# ApplicationLoadBalancerHttpRule

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The unique name of the Application Load Balancer HTTP rule. | [default to undefined] |
| **type** | **string** | The HTTP rule type. | [default to undefined] |
| **targetGroup** | **string** | The ID of the target group; this parameter is mandatory and is valid only for \'FORWARD\' actions. | [optional] [default to undefined] |
| **dropQuery** | **boolean** | Indicates whether the query part of the URI should be dropped and is valid only for \'REDIRECT\' actions. Default value is \'FALSE\', the redirect URI does not contain any query parameters. | [optional] [default to undefined] |
| **location** | **string** | The location for the redirection; this parameter is mandatory and valid only for \'REDIRECT\' actions. | [optional] [default to undefined] |
| **statusCode** | **number** | The status code is for \'REDIRECT\' and \'STATIC\' actions only.   If the HTTP rule is \'REDIRECT\' the valid values are: 301, 302, 303, 307, 308; default value is \'301\'.  If the HTTP rule is \'STATIC\' the valid values are from the range 200-599; default value is \'503\'. | [optional] [default to undefined] |
| **responseMessage** | **string** | The response message of the request; this parameter is mandatory for \'STATIC\' actions. | [optional] [default to undefined] |
| **contentType** | **string** | Specifies the content type and is valid only for \'STATIC\' actions. | [optional] [default to undefined] |
| **conditions** | [**Array&lt;ApplicationLoadBalancerHttpRuleCondition&gt;**](ApplicationLoadBalancerHttpRuleCondition.md) | An array of items in the collection. The action will be executed only if each condition is met; the rule will always be applied if no conditions are set. | [optional] [default to undefined] |



# ApplicationLoadBalancerHttpRule

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The unique name of the Application Load Balancer HTTP rule. | [default to undefined] |
| **type** | **string** | Type of the HTTP rule. | [default to undefined] |
| **targetGroup** | **string** | The ID of the target group; mandatory and only valid for FORWARD actions. | [optional] [default to undefined] |
| **dropQuery** | **boolean** | Default is false; valid only for REDIRECT actions. | [optional] [default to undefined] |
| **location** | **string** | The location for redirecting; mandatory and valid only for REDIRECT actions. | [optional] [default to undefined] |
| **statusCode** | **number** | Valid only for REDIRECT and STATIC actions. For REDIRECT actions, default is 301 and possible values are 301, 302, 303, 307, and 308. For STATIC actions, default is 503 and valid range is 200 to 599. | [optional] [default to undefined] |
| **responseMessage** | **string** | The response message of the request; mandatory for STATIC actions. | [optional] [default to undefined] |
| **contentType** | **string** | Valid only for STATIC actions. | [optional] [default to undefined] |
| **conditions** | [**Array&lt;ApplicationLoadBalancerHttpRuleCondition&gt;**](ApplicationLoadBalancerHttpRuleCondition.md) | An array of items in the collection.The action is only performed if each and every condition is met; if no conditions are set, the rule will always be performed. | [optional] [default to undefined] |



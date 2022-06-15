# ApplicationLoadBalancerForwardingRuleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the Application Load Balancer forwarding rule. | [default to undefined] |
| **protocol** | **string** | Balancing protocol | [default to undefined] |
| **listenerIp** | **string** | Listening (inbound) IP | [default to undefined] |
| **listenerPort** | **number** | Listening (inbound) port number; valid range is 1 to 65535. | [default to undefined] |
| **clientTimeout** | **number** | The maximum time in milliseconds to wait for the client to acknowledge or send data; default is 50,000 (50 seconds). | [optional] [default to undefined] |
| **serverCertificates** | **Array&lt;string&gt;** | Array of items in the collection. | [optional] [default to undefined] |
| **httpRules** | [**Array&lt;ApplicationLoadBalancerHttpRule&gt;**](ApplicationLoadBalancerHttpRule.md) | An array of items in the collection. The original order of rules is perserved during processing, except for Forward-type rules are processed after the rules with other action defined. The relative order of Forward-type rules is also preserved during the processing. | [optional] [default to undefined] |



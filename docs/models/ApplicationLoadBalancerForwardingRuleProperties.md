# ApplicationLoadBalancerForwardingRuleProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the Application Load Balancer forwarding rule. | [default to undefined] |
| **protocol** | **string** | The balancing protocol. | [default to undefined] |
| **listenerIp** | **string** | The listening (inbound) IP. | [default to undefined] |
| **listenerPort** | **number** | The listening (inbound) port number; the valid range is 1 to 65535. | [default to undefined] |
| **clientTimeout** | **number** | The maximum time in milliseconds to wait for the client to acknowledge or send data; default is 50,000 (50 seconds). | [optional] [default to undefined] |
| **serverCertificates** | **Array&lt;string&gt;** | Array of items in the collection. | [optional] [default to undefined] |
| **httpRules** | [**Array&lt;ApplicationLoadBalancerHttpRule&gt;**](ApplicationLoadBalancerHttpRule.md) | An array of items in the collection. The original order of rules is preserved during processing, except that rules of the \'FORWARD\' type are processed after the rules with other defined actions. The relative order of the \'FORWARD\' type rules is also preserved during the processing. | [optional] [default to undefined] |



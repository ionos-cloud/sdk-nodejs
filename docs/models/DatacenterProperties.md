# DatacenterProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **description** | **string** | A description for the datacenter, such as staging, production. | [optional] [default to undefined] |
| **location** | **string** | The physical location where the datacenter will be created. This will be where all of your servers live. Property cannot be modified after datacenter creation (disallowed in update requests). | [default to undefined] |
| **version** | **number** | The version of the data center; incremented with every change. | [optional] [readonly] [default to undefined] |
| **features** | **Array&lt;string&gt;** | List of features supported by the location where this data center is provisioned. | [optional] [readonly] [default to undefined] |
| **secAuthProtection** | **boolean** | Boolean value representing if the data center requires extra protection, such as two-step verification. | [optional] [default to undefined] |
| **cpuArchitecture** | [**Array&lt;CpuArchitectureProperties&gt;**](CpuArchitectureProperties.md) | Array of features and CPU families available in a location | [optional] [readonly] [default to undefined] |
| **ipv6CidrBlock** | **string** | This value is either \'null\' or contains an automatically-assigned /56 IPv6 CIDR block if IPv6 is enabled on this virtual data center. It can neither be changed nor removed. | [optional] [readonly] [default to undefined] |
| **defaultSecurityGroupId** | **string** | Optional property to define the default security group of the datacenter. | [optional] [default to undefined] |



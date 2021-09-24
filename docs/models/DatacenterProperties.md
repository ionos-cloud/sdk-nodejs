# DatacenterProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that resource | [optional] [default to undefined] |
| **description** | **string** | A description for the datacenter, e.g. staging, production | [optional] [default to undefined] |
| **location** | **string** | The physical location where the datacenter will be created. This will be where all of your servers live. Property cannot be modified after datacenter creation (disallowed in update requests) | [default to undefined] |
| **version** | **number** | The version of that Data Center. Gets incremented with every change | [optional] [readonly] [default to undefined] |
| **features** | **Array&lt;string&gt;** | List of features supported by the location this data center is part of | [optional] [readonly] [default to undefined] |
| **secAuthProtection** | **boolean** | Boolean value representing if the data center requires extra protection e.g. two factor protection | [optional] [default to undefined] |
| **cpuArchitecture** | [**Array&lt;CpuArchitectureProperties&gt;**](CpuArchitectureProperties.md) | Array of features and CPU families available in a location | [optional] [readonly] [default to undefined] |



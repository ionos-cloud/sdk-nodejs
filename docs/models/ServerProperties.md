# ServerProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **availabilityZone** | **string** | The availability zone in which the server should be provisioned. | [optional] [default to undefined] |
| **bootCdrom** | [**ResourceReference**](ResourceReference.md) |  | [optional] [default to undefined] |
| **bootVolume** | [**ResourceReference**](ResourceReference.md) |  | [optional] [default to undefined] |
| **cores** | **number** | The total number of cores for the enterprise server. | [optional] [default to undefined] |
| **cpuFamily** | **string** | CPU architecture on which server gets provisioned; not all CPU architectures are available in all datacenter regions; available CPU architectures can be retrieved from the datacenter resource; must not be provided for CUBE servers. | [optional] [default to undefined] |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **ram** | **number** | The memory size for the enterprise server in MB, such as 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB. | [optional] [default to undefined] |
| **templateUuid** | **string** | The ID of the template for creating a CUBE server; the available templates for CUBE servers can be found on the templates resource. | [optional] [default to undefined] |
| **type** | **string** | Server type: CUBE or ENTERPRISE. | [optional] [default to undefined] |
| **vmState** | **string** | Status of the virtual machine. | [optional] [readonly] [default to undefined] |



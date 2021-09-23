# ServerProperties

## Properties

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **name** | **string** | A name of that resource | \[optional\] \[default to undefined\] |
| **cores** | **number** | The total number of cores for the server | \[default to undefined\] |
| **ram** | **number** | The amount of memory for the server in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB. | \[default to undefined\] |
| **availabilityZone** | **string** | The availability zone in which the server should exist | \[optional\] \[default to undefined\] |
| **vmState** | **string** | Status of the virtual Machine | \[optional\] \[readonly\] \[default to undefined\] |
| **bootCdrom** | [**ResourceReference**](resourcereference.md) |  | \[optional\] \[default to undefined\] |
| **bootVolume** | [**ResourceReference**](resourcereference.md) |  | \[optional\] \[default to undefined\] |
| **cpuFamily** | **string** | Cpu family of pserver | \[optional\] \[default to undefined\] |


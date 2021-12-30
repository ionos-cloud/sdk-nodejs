# ImageProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that resource | [optional] [default to undefined] |
| **description** | **string** | Human readable description | [optional] [default to undefined] |
| **location** | **string** | Location of that image/snapshot.  | [optional] [readonly] [default to undefined] |
| **size** | **number** | The size of the image in GB | [optional] [readonly] [default to undefined] |
| **cpuHotPlug** | **boolean** | Is capable of CPU hot plug (no reboot required) | [optional] [default to undefined] |
| **cpuHotUnplug** | **boolean** | Is capable of CPU hot unplug (no reboot required) | [optional] [default to undefined] |
| **ramHotPlug** | **boolean** | Is capable of memory hot plug (no reboot required) | [optional] [default to undefined] |
| **ramHotUnplug** | **boolean** | Is capable of memory hot unplug (no reboot required) | [optional] [default to undefined] |
| **nicHotPlug** | **boolean** | Is capable of nic hot plug (no reboot required) | [optional] [default to undefined] |
| **nicHotUnplug** | **boolean** | Is capable of nic hot unplug (no reboot required) | [optional] [default to undefined] |
| **discVirtioHotPlug** | **boolean** | Is capable of Virt-IO drive hot plug (no reboot required) | [optional] [default to undefined] |
| **discVirtioHotUnplug** | **boolean** | Is capable of Virt-IO drive hot unplug (no reboot required). This works only for non-Windows virtual Machines. | [optional] [default to undefined] |
| **discScsiHotPlug** | **boolean** | Is capable of SCSI drive hot plug (no reboot required) | [optional] [default to undefined] |
| **discScsiHotUnplug** | **boolean** | Is capable of SCSI drive hot unplug (no reboot required). This works only for non-Windows virtual Machines. | [optional] [default to undefined] |
| **licenceType** | **string** | OS type of this Image | [default to undefined] |
| **imageType** | **string** | This indicates the type of image | [optional] [readonly] [default to undefined] |
| **_public** | **boolean** | Indicates if the image is part of the public repository or not | [optional] [readonly] [default to undefined] |
| **imageAliases** | **Array&lt;string&gt;** | List of image aliases mapped for this Image | [optional] [readonly] [default to undefined] |
| **cloudInit** | **string** | Cloud init compatibility | [optional] [default to undefined] |



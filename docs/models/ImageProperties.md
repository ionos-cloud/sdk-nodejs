# ImageProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **cloudInit** | **string** | Cloud init compatibility. | [optional] [default to undefined] |
| **cpuHotPlug** | **boolean** | Hot-plug capable CPU (no reboot required). | [optional] [default to undefined] |
| **cpuHotUnplug** | **boolean** | Hot-unplug capable CPU (no reboot required). | [optional] [default to undefined] |
| **description** | **string** | Human-readable description. | [optional] [default to undefined] |
| **discScsiHotPlug** | **boolean** | Hot-plug capable SCSI drive (no reboot required). | [optional] [default to undefined] |
| **discScsiHotUnplug** | **boolean** | Hot-unplug capable SCSI drive (no reboot required). Not supported with Windows VMs. | [optional] [default to undefined] |
| **discVirtioHotPlug** | **boolean** | Hot-plug capable Virt-IO drive (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotUnplug** | **boolean** | Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs. | [optional] [default to undefined] |
| **imageAliases** | **Array&lt;string&gt;** | List of image aliases mapped for this image | [optional] [readonly] [default to undefined] |
| **imageType** | **string** | The image type. | [optional] [readonly] [default to undefined] |
| **licenceType** | **string** | The OS type of this image. | [default to undefined] |
| **location** | **string** | The location of this image/snapshot. | [optional] [readonly] [default to undefined] |
| **name** | **string** | The resource name. | [optional] [default to undefined] |
| **nicHotPlug** | **boolean** | Hot-plug capable NIC (no reboot required). | [optional] [default to undefined] |
| **nicHotUnplug** | **boolean** | Hot-unplug capable NIC (no reboot required). | [optional] [default to undefined] |
| **_public** | **boolean** | Indicates whether the image is part of a public repository. | [optional] [readonly] [default to undefined] |
| **ramHotPlug** | **boolean** | Hot-plug capable RAM (no reboot required). | [optional] [default to undefined] |
| **ramHotUnplug** | **boolean** | Hot-unplug capable RAM (no reboot required). | [optional] [default to undefined] |
| **size** | **number** | The image size in GB. | [optional] [readonly] [default to undefined] |



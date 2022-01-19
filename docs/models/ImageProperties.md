# ImageProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **description** | **string** | Human-readable description. | [optional] [default to undefined] |
| **location** | **string** | Location of that image/snapshot.  | [optional] [readonly] [default to undefined] |
| **size** | **number** | The size of the image in GB. | [optional] [readonly] [default to undefined] |
| **cpuHotPlug** | **boolean** | Hot-plug capable CPU (no reboot required). | [optional] [default to undefined] |
| **cpuHotUnplug** | **boolean** | Hot-unplug capable CPU (no reboot required). | [optional] [default to undefined] |
| **ramHotPlug** | **boolean** | Hot-plug capable RAM (no reboot required). | [optional] [default to undefined] |
| **ramHotUnplug** | **boolean** | Hot-unplug capable RAM (no reboot required). | [optional] [default to undefined] |
| **nicHotPlug** | **boolean** | Hot-plug capable NIC (no reboot required). | [optional] [default to undefined] |
| **nicHotUnplug** | **boolean** | Hot-unplug capable NIC (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotPlug** | **boolean** | Hot-plug capable Virt-IO drive (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotUnplug** | **boolean** | Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs. | [optional] [default to undefined] |
| **discScsiHotPlug** | **boolean** | Hot-plug capable SCSI drive (no reboot required). | [optional] [default to undefined] |
| **discScsiHotUnplug** | **boolean** | Hot-unplug capable SCSI drive (no reboot required). Not supported with Windows VMs. | [optional] [default to undefined] |
| **licenceType** | **string** | OS type for this image. | [default to undefined] |
| **imageType** | **string** | The image type. | [optional] [readonly] [default to undefined] |
| **_public** | **boolean** | Indicates whether the image is part of a public repository. | [optional] [readonly] [default to undefined] |
| **imageAliases** | **Array&lt;string&gt;** | List of image aliases mapped for this Image | [optional] [readonly] [default to undefined] |
| **cloudInit** | **string** | Cloud init compatibility. | [optional] [default to undefined] |



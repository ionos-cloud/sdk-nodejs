# ImageProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The resource name. | [optional] [default to undefined] |
| **description** | **string** | Human-readable description. | [optional] [default to undefined] |
| **location** | **string** | The location of this image/snapshot. | [optional] [readonly] [default to undefined] |
| **size** | **number** | The image size in GB. | [optional] [readonly] [default to undefined] |
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
| **exposeSerial** | **boolean** | If set to `true` will expose the serial id of the disk attached to the server. If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial  can influence licensed software (e.g. Windows) behavior | [optional] [default to false] |
| **requireLegacyBios** | **boolean** | Indicates if the image requires the legacy BIOS for compatibility or specific needs. | [optional] [default to true] |
| **licenceType** | **string** | The OS type of this image. | [default to undefined] |
| **applicationType** | **string** | The type of application that is hosted on this resource.  Only public images can have an Application type different than UNKNOWN. | [optional] [default to 'UNKNOWN'] |
| **imageType** | **string** | The image type. | [optional] [readonly] [default to undefined] |
| **_public** | **boolean** | Indicates whether the image is part of a public repository. | [optional] [readonly] [default to undefined] |
| **imageAliases** | **Array&lt;string&gt;** | List of image aliases mapped for this image | [optional] [readonly] [default to undefined] |
| **cloudInit** | **string** | Cloud init compatibility. | [optional] [default to undefined] |



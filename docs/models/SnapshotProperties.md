# SnapshotProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **description** | **string** | Human-readable description. | [optional] [default to undefined] |
| **location** | **string** | Location of that image/snapshot.  | [optional] [readonly] [default to undefined] |
| **size** | **number** | The size of the image in GB. | [optional] [readonly] [default to undefined] |
| **secAuthProtection** | **boolean** | Boolean value representing if the snapshot requires extra protection, such as two-step verification. | [optional] [default to undefined] |
| **cpuHotPlug** | **boolean** | Hot-plug capable CPU (no reboot required). | [optional] [default to undefined] |
| **cpuHotUnplug** | **boolean** | Hot-unplug capable CPU (no reboot required). | [optional] [default to undefined] |
| **ramHotPlug** | **boolean** | Hot-plug capable RAM (no reboot required). | [optional] [default to undefined] |
| **ramHotUnplug** | **boolean** | Hot-unplug capable RAM (no reboot required). | [optional] [default to undefined] |
| **nicHotPlug** | **boolean** | Hot-plug capable NIC (no reboot required). | [optional] [default to undefined] |
| **nicHotUnplug** | **boolean** | Hot-unplug capable NIC (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotPlug** | **boolean** | Hot-plug capable Virt-IO drive (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotUnplug** | **boolean** | Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs. | [optional] [default to undefined] |
| **discScsiHotPlug** | **boolean** | Hot-plug capable SCSI drive (no reboot required). | [optional] [default to undefined] |
| **exposeSerial** | **boolean** | If set to `true` will expose the serial id of the disk attached to the server. If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial  can influence licensed software (e.g. Windows) behavior | [optional] [default to false] |
| **requireLegacyBios** | **boolean** | Indicates if the image requires the legacy BIOS for compatibility or specific needs. | [optional] [default to true] |
| **discScsiHotUnplug** | **boolean** | Is capable of SCSI drive hot unplug (no reboot required). This works only for non-Windows virtual Machines. | [optional] [default to undefined] |
| **licenceType** | **string** | OS type of this snapshot | [optional] [default to undefined] |
| **applicationType** | **string** | The type of application that is hosted on this resource.  Only public images can have an Application type different than UNKNOWN. | [optional] [default to 'UNKNOWN'] |



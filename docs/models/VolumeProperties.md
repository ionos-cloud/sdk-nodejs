# VolumeProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the  resource. | [optional] [default to undefined] |
| **type** | **string** | Hardware type of the volume. DAS (Direct Attached Storage) could be used only in a composite call with a Cube server. | [optional] [default to undefined] |
| **size** | **number** | The size of the volume in GB. | [optional] [default to undefined] |
| **availabilityZone** | **string** | The availability zone in which the volume should be provisioned. The storage volume will be provisioned on as few physical storage devices as possible, but this cannot be guaranteed upfront. This is uavailable for DAS (Direct Attached Storage), and subject to availability for SSD. | [optional] [default to undefined] |
| **image** | **string** | Image or snapshot ID to be used as template for this volume. MSSQL Enterprise Images can be used only if the feature toggle for MSSQL Enterprise is enabled on the contract. | [optional] [default to undefined] |
| **imagePassword** | **string** | Initial password to be set for installed OS. Works with public images only. Not modifiable, forbidden in update requests. Password rules allows all characters from a-z, A-Z, 0-9. | [optional] [default to undefined] |
| **imageAlias** | **string** | Image alias of an image to be used as template for this volume. MSSQL Enterprise Images can be used only if the feature toggle for MSSQL Enterprise is enabled on the contract. | [optional] [default to undefined] |
| **sshKeys** | **Array&lt;string&gt;** | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. | [optional] [default to undefined] |
| **bus** | **string** | The bus type for this volume; default is VIRTIO. | [optional] [default to undefined] |
| **licenceType** | **string** | OS type for this volume. | [optional] [default to undefined] |
| **applicationType** | **string** | The type of application that is hosted on this resource.  Only public images can have an Application type different than UNKNOWN. | [optional] [default to 'UNKNOWN'] |
| **cpuHotPlug** | **boolean** | Hot-plug capable CPU (no reboot required). | [optional] [default to undefined] |
| **ramHotPlug** | **boolean** | Hot-plug capable RAM (no reboot required). | [optional] [default to undefined] |
| **nicHotPlug** | **boolean** | Hot-plug capable NIC (no reboot required). | [optional] [default to undefined] |
| **nicHotUnplug** | **boolean** | Hot-unplug capable NIC (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotPlug** | **boolean** | Hot-plug capable Virt-IO drive (no reboot required). | [optional] [default to undefined] |
| **discVirtioHotUnplug** | **boolean** | Hot-unplug capable Virt-IO drive (no reboot required). Not supported with Windows VMs. | [optional] [default to undefined] |
| **exposeSerial** | **boolean** | If set to `true` will expose the serial id of the disk attached to the server. If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial  can influence licensed software (e.g. Windows) behavior | [optional] [default to false] |
| **requireLegacyBios** | **boolean** | Indicates if the image requires the legacy BIOS for compatibility or specific needs. | [optional] [default to true] |
| **deviceNumber** | **number** | The Logical Unit Number of the storage volume. Null for volumes, not mounted to a VM. | [optional] [readonly] [default to undefined] |
| **pciSlot** | **number** | The PCI slot number of the storage volume. Null for volumes, not mounted to a VM. | [optional] [readonly] [default to undefined] |
| **backupunitId** | **string** | The ID of the backup unit that the user has access to. The property is immutable and is only allowed to be set on creation of a new a volume. It is mandatory to provide either \'public image\' or \'imageAlias\' in conjunction with this property. | [optional] [default to undefined] |
| **userData** | **string** | The cloud-init configuration for the volume as base64 encoded string. The property is immutable and is only allowed to be set on creation of a new a volume. It is mandatory to provide either \'public image\' or \'imageAlias\' that has cloud-init compatibility in conjunction with this property. | [optional] [default to undefined] |
| **bootServer** | **string** | The UUID of the attached server. | [optional] [readonly] [default to undefined] |
| **bootOrder** | **string** | Determines whether the volume will be used as a boot volume. Set to `NONE`, the volume will not be used as boot volume. Set to `PRIMARY`, the volume will be used as boot volume and all other volumes must be set to `NONE`. Set to `AUTO` or `null` requires all volumes to be set to `AUTO` or `null`; this will use the legacy behavior, which is to use the volume as a boot volume only if there are no other volumes or cdrom devices. | [optional] [default to BootOrderEnum_Auto] |



# VolumeProperties

## Properties

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **name** | **string** | A name of that resource | \[optional\] \[default to undefined\] |
| **type** | **string** | Hardware type of the volume. | \[optional\] \[default to undefined\] |
| **size** | **number** | The size of the volume in GB | \[default to undefined\] |
| **availabilityZone** | **string** | The availability zone in which the volume should exist. The storage volume will be provisioned on as less physical storages as possible but cannot guarantee upfront | \[optional\] \[default to undefined\] |
| **image** | **string** | Image or snapshot ID to be used as template for this volume | \[optional\] \[default to undefined\] |
| **imagePassword** | **string** | Initial password to be set for installed OS. Works with public images only. Not modifiable, forbidden in update requests. Password rules allows all characters from a-z, A-Z, 0-9 | \[optional\] \[default to undefined\] |
| **imageAlias** | **string** |  | \[optional\] \[default to undefined\] |
| **sshKeys** | **Array&lt;string&gt;** | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. | \[optional\] \[default to undefined\] |
| **bus** | **string** | The bus type of the volume. Default is VIRTIO | \[optional\] \[default to undefined\] |
| **licenceType** | **string** | OS type of this volume | \[optional\] \[readonly\] \[default to undefined\] |
| **cpuHotPlug** | **boolean** | Is capable of CPU hot plug \(no reboot required\) | \[optional\] \[default to undefined\] |
| **ramHotPlug** | **boolean** | Is capable of memory hot plug \(no reboot required\) | \[optional\] \[default to undefined\] |
| **nicHotPlug** | **boolean** | Is capable of nic hot plug \(no reboot required\) | \[optional\] \[default to undefined\] |
| **nicHotUnplug** | **boolean** | Is capable of nic hot unplug \(no reboot required\) | \[optional\] \[default to undefined\] |
| **discVirtioHotPlug** | **boolean** | Is capable of Virt-IO drive hot plug \(no reboot required\) | \[optional\] \[default to undefined\] |
| **discVirtioHotUnplug** | **boolean** | Is capable of Virt-IO drive hot unplug \(no reboot required\). This works only for non-Windows virtual Machines. | \[optional\] \[default to undefined\] |
| **deviceNumber** | **number** | The LUN ID of the storage volume. Null for volumes not mounted to any VM | \[optional\] \[readonly\] \[default to undefined\] |
| **backupunitId** | **string** | The uuid of the Backup Unit that user has access to. The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either \'public image\' or \'imageAlias\' in conjunction with this property. | \[optional\] \[default to undefined\] |
| **userData** | **string** | The cloud-init configuration for the volume as base64 encoded string. The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either \'public image\' or \'imageAlias\' that has cloud-init compatibility in conjunction with this property. | \[optional\] \[default to undefined\] |


# ResourceLimits

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **coresPerServer** | **number** | The maximum number of CPU cores per server. | [default to undefined] |
| **coresPerContract** | **number** | The maximum number of CPU cores per contract. | [default to undefined] |
| **coresProvisioned** | **number** | The number of CPU cores provisioned. | [default to undefined] |
| **ramPerServer** | **number** | The maximum amount of RAM (in MB) that can be provisioned for a particular server under this contract. | [default to undefined] |
| **ramPerContract** | **number** | The maximum amount of RAM (in MB) that can be provisioned under this contract. | [default to undefined] |
| **ramProvisioned** | **number** | The amount of RAM (in MB) provisioned under this contract. | [default to undefined] |
| **hddLimitPerVolume** | **number** | The maximum size (in MB) of an idividual hard disk volume. | [default to undefined] |
| **hddLimitPerContract** | **number** | The maximum amount of disk space (in MB) that can be provided under this contract. | [default to undefined] |
| **hddVolumeProvisioned** | **number** | The amount of hard disk space (in MB) that is currently provisioned. | [default to undefined] |
| **ssdLimitPerVolume** | **number** | The maximum size (in MB) of an individual solid state disk volume. | [default to undefined] |
| **ssdLimitPerContract** | **number** | The maximum amount of solid state disk space (in MB) that can be provisioned under this contract. | [default to undefined] |
| **ssdVolumeProvisioned** | **number** | The amount of solid state disk space (in MB) that is currently provisioned. | [default to undefined] |
| **dasVolumeProvisioned** | **number** | The amount of DAS disk space (in MB) in a Cube server that is currently provisioned. | [default to undefined] |
| **reservableIps** | **number** | The maximum number of static public IP addresses that can be reserved by this customer across contracts. | [default to undefined] |
| **reservedIpsOnContract** | **number** | The maximum number of static public IP addresses that can be reserved for this contract. | [default to undefined] |
| **reservedIpsInUse** | **number** | The number of static public IP addresses in use. | [default to undefined] |
| **k8sClusterLimitTotal** | **number** | The maximum number of Kubernetes clusters that can be created under this contract. | [default to undefined] |
| **k8sClustersProvisioned** | **number** | The amount of Kubernetes clusters that is currently provisioned. | [default to undefined] |
| **nlbLimitTotal** | **number** | The NLB total limit. | [default to undefined] |
| **nlbProvisioned** | **number** | The NLBs provisioned. | [default to undefined] |
| **natGatewayLimitTotal** | **number** | The NAT Gateway total limit. | [default to undefined] |
| **natGatewayProvisioned** | **number** | The NAT Gateways provisioned. | [default to undefined] |
| **securityGroupsPerVdc** | **number** | The maximum number of security groups per VDC. | [default to undefined] |
| **securityGroupsPerResource** | **number** | The maximum number of security groups that can be attached to a NIC or a VM individually. For example, a user can have maximum 10 security groups per NIC and 10 per VM. | [default to undefined] |
| **rulesPerSecurityGroup** | **number** | The maximum number of rules per security group. | [default to undefined] |



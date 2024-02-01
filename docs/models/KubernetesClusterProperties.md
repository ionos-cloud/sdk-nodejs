# KubernetesClusterProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **apiSubnetAllowList** | **Array&lt;string&gt;** | Access to the K8s API server is restricted to these CIDRs. Traffic, internal to the cluster, is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value is used: 32 for IPv4 and 128 for IPv6. | [optional] [default to undefined] |
| **availableUpgradeVersions** | **Array&lt;string&gt;** | List of available versions for upgrading the cluster | [optional] [default to undefined] |
| **k8sVersion** | **string** | The Kubernetes version the cluster is running. This imposes restrictions on what Kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all Kubernetes versions are viable upgrade targets for all prior versions. | [optional] [default to undefined] |
| **location** | **string** | The location of the cluster if the cluster is private. This property is immutable. The location must be enabled for your contract or you must have a Datacenter within that location. This attribute is mandatory if the cluster is private. | [optional] [default to undefined] |
| **maintenanceWindow** | [**KubernetesMaintenanceWindow**](KubernetesMaintenanceWindow.md) |  | [optional] [default to undefined] |
| **name** | **string** | A Kubernetes cluster name. Valid Kubernetes cluster name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [default to undefined] |
| **natGatewayIp** | **string** | The nat gateway IP of the cluster if the cluster is private. This property is immutable. Must be a reserved IP in the same location as the cluster\'s location. This attribute is mandatory if the cluster is private. | [optional] [default to undefined] |
| **nodeSubnet** | **string** | The node subnet of the cluster, if the cluster is private. This property is optional and immutable. Must be a valid CIDR notation for an IPv4 network prefix of 16 bits length. | [optional] [default to undefined] |
| **_public** | **boolean** | The indicator if the cluster is public or private. Be aware that setting it to false is currently in beta phase. | [optional] [default to true] |
| **s3Buckets** | [**Array&lt;S3Bucket&gt;**](S3Bucket.md) | List of S3 bucket configured for K8s usage. For now it contains only an S3 bucket used to store K8s API audit logs | [optional] [default to undefined] |
| **viableNodePoolVersions** | **Array&lt;string&gt;** | List of versions that may be used for node pools under this cluster | [optional] [default to undefined] |



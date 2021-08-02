# KubernetesClusterProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A Kubernetes Cluster Name. Valid Kubernetes Cluster name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. | [default to undefined] |
| **k8sVersion** | **string** | The kubernetes version in which a cluster is running. This imposes restrictions on what kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all kubernetes versions are viable upgrade targets for all prior versions. | [optional] [default to undefined] |
| **maintenanceWindow** | [**KubernetesMaintenanceWindow**](KubernetesMaintenanceWindow.md) |  | [optional] [default to undefined] |
| **availableUpgradeVersions** | **Array&lt;string&gt;** | List of available versions for upgrading the cluster | [optional] [default to undefined] |
| **viableNodePoolVersions** | **Array&lt;string&gt;** | List of versions that may be used for node pools under this cluster | [optional] [default to undefined] |
| **_public** | **boolean** | The indicator if the cluster is public or private. Be aware that setting it to false is currently in beta phase. | [optional] [default to true] |
| **gatewayIp** | **string** | The IP address of the gateway used by the cluster. This is mandatory when `public` is set to `false` and should not be provided otherwise. | [optional] [default to undefined] |
| **apiSubnetAllowList** | **Array&lt;string&gt;** | Access to the K8s API server is restricted to these CIDRs. Cluster-internal traffic is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value will be used: 32 for IPv4 and 128 for IPv6. | [optional] [default to undefined] |
| **s3Buckets** | [**Array&lt;S3Bucket&gt;**](S3Bucket.md) | List of S3 bucket configured for K8s usage. For now it contains only one S3 bucket used to store K8s API audit logs | [optional] [default to undefined] |



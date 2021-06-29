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



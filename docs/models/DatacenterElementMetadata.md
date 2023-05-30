# DatacenterElementMetadata

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **createdBy** | **string** | The user who created the resource. | [optional] [readonly] [default to undefined] |
| **createdByUserId** | **string** | The unique ID of the user who created the resource. | [optional] [readonly] [default to undefined] |
| **createdDate** | **string** | The last time the resource was created. | [optional] [readonly] [default to undefined] |
| **etag** | **string** | Resource\'s Entity Tag as defined in http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.11  Entity Tag is also added as an \'ETag response header to requests which don\'t use \'depth\' parameter.  | [optional] [readonly] [default to undefined] |
| **lastModifiedBy** | **string** | The user who last modified the resource. | [optional] [readonly] [default to undefined] |
| **lastModifiedByUserId** | **string** | The unique ID of the user who last modified the resource. | [optional] [readonly] [default to undefined] |
| **lastModifiedDate** | **string** | The last time the resource was modified. | [optional] [readonly] [default to undefined] |
| **state** | **string** | State of the resource. *AVAILABLE* There are no pending modification requests for this item; *BUSY* There is at least one modification request pending and all following requests will be queued; *INACTIVE* Resource has been de-provisioned; *DEPLOYING* Resource state DEPLOYING - relevant for Kubernetes cluster/nodepool; *ACTIVE* Resource state ACTIVE - relevant for Kubernetes cluster/nodepool; *FAILED* Resource state FAILED - relevant for Kubernetes cluster/nodepool; *SUSPENDED* Resource state SUSPENDED - relevant for Kubernetes cluster/nodepool; *FAILED_SUSPENDED* Resource state FAILED_SUSPENDED - relevant for Kubernetes cluster; *UPDATING* Resource state UPDATING - relevant for Kubernetes cluster/nodepool; *FAILED_UPDATING* Resource state FAILED_UPDATING - relevant for Kubernetes cluster/nodepool; *DESTROYING* Resource state DESTROYING - relevant for Kubernetes cluster; *FAILED_DESTROYING* Resource state FAILED_DESTROYING - relevant for Kubernetes cluster/nodepool; *TERMINATED* Resource state TERMINATED - relevant for Kubernetes cluster/nodepool; *HIBERNATING* Resource state HIBERNATING - relevant for Kubernetes cluster/nodepool; *FAILED_HIBERNATING* Resource state FAILED_HIBERNATING - relevant for Kubernetes cluster/nodepool; *MAINTENANCE* Resource state MAINTENANCE - relevant for Kubernetes cluster/nodepool; *FAILED_HIBERNATING* Resource state FAILED_HIBERNATING - relevant for Kubernetes cluster/nodepool. | [optional] [readonly] [default to undefined] |



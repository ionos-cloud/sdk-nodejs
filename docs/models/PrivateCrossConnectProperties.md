# PrivateCrossConnectProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | A name of that resource | [optional] [default to undefined] |
| **description** | **string** | Human readable description | [optional] [default to undefined] |
| **peers** | [**Array&lt;Peer&gt;**](Peer.md) | Read-Only attribute. Lists LAN\'s joined to this private cross connect | [optional] [readonly] [default to undefined] |
| **connectableDatacenters** | [**Array&lt;ConnectableDatacenter&gt;**](ConnectableDatacenter.md) | Read-Only attribute. Lists data centers that can be joined to this private cross connect | [optional] [readonly] [default to undefined] |



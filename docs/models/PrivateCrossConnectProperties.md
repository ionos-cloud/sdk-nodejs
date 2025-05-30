# PrivateCrossConnectProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the Cross Connect. | [optional] [default to undefined] |
| **description** | **string** | Human-readable description of the Cross Connect. | [optional] [default to undefined] |
| **peers** | [**Array&lt;Peer&gt;**](Peer.md) | Read-Only attribute. Lists LAN\'s connected to this Cross Connect. | [optional] [readonly] [default to undefined] |
| **connectableDatacenters** | [**Array&lt;ConnectableDatacenter&gt;**](ConnectableDatacenter.md) | Read-Only attribute. Lists data centers that can be connected to this Cross Connect. If the Cross Connect is not connected to any LANs it lists all VDCs the user has access to. If the Cross Connect is connected to at least 1 LAN it lists all VDCs the user has access to in the location of the connected LAN. | [optional] [readonly] [default to undefined] |



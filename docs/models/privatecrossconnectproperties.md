# PrivateCrossConnectProperties

## Properties

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **name** | **string** | A name of that resource | \[optional\] \[default to undefined\] |
| **description** | **string** | Human readable description | \[optional\] \[default to undefined\] |
| **peers** | [**Array&lt;Peer&gt;**](peer.md) | Read-Only attribute. Lists LAN\'s joined to this private cross connect | \[optional\] \[readonly\] \[default to undefined\] |
| **connectableDatacenters** | [**Array&lt;ConnectableDatacenter&gt;**](connectabledatacenter.md) | Read-Only attribute. Lists datacenters that can be joined to this private cross connect | \[optional\] \[readonly\] \[default to undefined\] |


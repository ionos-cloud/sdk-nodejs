# Requests

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **string** | The resource\'s unique identifier. | [optional] [readonly] [default to undefined] |
| **type** | [**Type**](Type.md) | The type of object that has been created. | [optional] [default to undefined] |
| **href** | **string** | URL to the object representation (absolute path). | [optional] [readonly] [default to undefined] |
| **items** | [**Array&lt;Request&gt;**](Request.md) | Array of items in that collection. | [optional] [readonly] [default to undefined] |
| **offset** | **number** | The offset specified in the request (or, if none was specified, the default offset of 0) | [default to undefined] |
| **limit** | **number** | The limit specified in the request (if none was specified, use the endpoint\'s default pagination limit). | [default to undefined] |
| **_links** | [**PaginationLinks**](PaginationLinks.md) |  | [default to undefined] |



# LabelResources

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **id** | **string** | A unique representation of the label as a resource collection. | [optional] [readonly] [default to undefined] |
| **type** | **string** | The type of resource within a collection. | [optional] [readonly] [default to undefined] |
| **href** | **string** | URL to the collection representation (absolute path). | [optional] [readonly] [default to undefined] |
| **items** | [**Array&lt;LabelResource&gt;**](LabelResource.md) | Array of items in that collection. | [optional] [readonly] [default to undefined] |
| **offset** | **number** | The offset (if specified in the request). | [optional] [default to undefined] |
| **limit** | **number** | The limit (if specified in the request). | [optional] [default to undefined] |
| **_links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] [default to undefined] |



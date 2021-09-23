# LabelResources

## Properties

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **id** | **string** | Unique representation for Label as a collection on a resource. | \[optional\] \[readonly\] \[default to undefined\] |
| **type** | **string** | The type of resource within a collection | \[optional\] \[readonly\] \[default to undefined\] |
| **href** | **string** | URL to the collection representation \(absolute path\) | \[optional\] \[readonly\] \[default to undefined\] |
| **items** | [**Array&lt;LabelResource&gt;**](labelresource.md) | Array of items in that collection | \[optional\] \[readonly\] \[default to undefined\] |
| **offset** | **number** | the offset \(if specified in the request\) | \[optional\] \[default to undefined\] |
| **limit** | **number** | the limit \(if specified in the request\) | \[optional\] \[default to undefined\] |
| **\_links** | [**PaginationLinks**](paginationlinks.md) |  | \[optional\] \[default to undefined\] |


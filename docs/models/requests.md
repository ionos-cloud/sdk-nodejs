# Requests

## Properties

| Name | Type | Description | Notes |
| :--- | :--- | :--- | :--- |
| **id** | **string** | The resource\'s unique identifier | \[optional\] \[readonly\] \[default to undefined\] |
| **type** | [**Type**](type.md) | The type of object that has been created | \[optional\] \[default to undefined\] |
| **href** | **string** | URL to the object representation \(absolute path\) | \[optional\] \[readonly\] \[default to undefined\] |
| **items** | [**Array&lt;Request&gt;**](request.md) | Array of items in that collection | \[optional\] \[readonly\] \[default to undefined\] |
| **offset** | **number** | the offset specified in the request \(or, if none was specified, the default offset of 0\) | \[default to undefined\] |
| **limit** | **number** | the limit specified in the request \(or, if none was specified, the default limit of 0\) | \[default to undefined\] |
| **\_links** | [**PaginationLinks**](paginationlinks.md) |  | \[default to undefined\] |


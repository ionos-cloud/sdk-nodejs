# PaginationLinks

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **next** | **string** | URL (with offset and limit parameters) of the next page; only present if offset + limit is less than the total number of elements. | [optional] [readonly] [default to undefined] |
| **prev** | **string** | URL (with offset and limit parameters) of the previous page; only present if offset is greater than 0. | [optional] [readonly] [default to undefined] |
| **self** | **string** | URL (with offset and limit parameters) of the current page. | [optional] [readonly] [default to undefined] |



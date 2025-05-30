# TargetGroupHttpHealthCheck

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **path** | **string** | The destination URL for HTTP the health check; the default is \'/\'. | [optional] [default to undefined] |
| **method** | **string** | The method used for the health check request. | [optional] [default to undefined] |
| **matchType** | **string** | Specify the target\'s response type to match ALB\'s request. | [default to undefined] |
| **response** | **string** | The response returned by the request. It can be a status code or a response body depending on the definition of \'matchType\'. | [default to undefined] |
| **regex** | **boolean** | Specifies whether to use a regular expression to parse the response body; the default value is \'FALSE\'.  By using regular expressions, you can flexibly customize the expected response from a healthy server. | [optional] [default to undefined] |
| **negate** | **boolean** | Specifies whether to negate an individual entry; the default value is \'FALSE\'. | [optional] [default to undefined] |



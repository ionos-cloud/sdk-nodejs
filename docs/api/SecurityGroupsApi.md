# SecurityGroupsApi

All URIs are relative to *https://api.ionos.com/cloudapi/v6*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**datacentersSecuritygroupsDelete**](SecurityGroupsApi.md#datacenterssecuritygroupsdelete) | **DELETE** /datacenters/{datacenterId}/securitygroups/{securityGroupId} | Delete a Security Group |
| [**datacentersSecuritygroupsFindById**](SecurityGroupsApi.md#datacenterssecuritygroupsfindbyid) | **GET** /datacenters/{datacenterId}/securitygroups/{securityGroupId} | Retrieve a Security Group |
| [**datacentersSecuritygroupsFirewallrulesDelete**](SecurityGroupsApi.md#datacenterssecuritygroupsfirewallrulesdelete) | **DELETE** /datacenters/{datacenterId}/securitygroups/{securityGroupId}/rules/{ruleId} | Remove a Firewall Rule from a Security Group |
| [**datacentersSecuritygroupsFirewallrulesPost**](SecurityGroupsApi.md#datacenterssecuritygroupsfirewallrulespost) | **POST** /datacenters/{datacenterId}/securitygroups/{securityGroupId}/rules | Create Firewall rule to a Security Group |
| [**datacentersSecuritygroupsGet**](SecurityGroupsApi.md#datacenterssecuritygroupsget) | **GET** /datacenters/{datacenterId}/securitygroups | List Security Groups |
| [**datacentersSecuritygroupsPatch**](SecurityGroupsApi.md#datacenterssecuritygroupspatch) | **PATCH** /datacenters/{datacenterId}/securitygroups/{securityGroupId} | Partially modify Security Group |
| [**datacentersSecuritygroupsPost**](SecurityGroupsApi.md#datacenterssecuritygroupspost) | **POST** /datacenters/{datacenterId}/securitygroups | Create a Security Group |
| [**datacentersSecuritygroupsPut**](SecurityGroupsApi.md#datacenterssecuritygroupsput) | **PUT** /datacenters/{datacenterId}/securitygroups/{securityGroupId} | Modify Security Group |
| [**datacentersSecuritygroupsRulesFindById**](SecurityGroupsApi.md#datacenterssecuritygroupsrulesfindbyid) | **GET** /datacenters/{datacenterId}/securitygroups/{securityGroupId}/rules/{ruleId} | Retrieve security group rule by id |
| [**datacentersSecuritygroupsRulesGet**](SecurityGroupsApi.md#datacenterssecuritygroupsrulesget) | **GET** /datacenters/{datacenterId}/securitygroups/{securityGroupId}/rules | List Security Group rules |
| [**datacentersSecuritygroupsRulesPatch**](SecurityGroupsApi.md#datacenterssecuritygroupsrulespatch) | **PATCH** /datacenters/{datacenterId}/securitygroups/{securityGroupId}/rules/{ruleId} | Partially modify Security Group Rules |
| [**datacentersSecuritygroupsRulesPut**](SecurityGroupsApi.md#datacenterssecuritygroupsrulesput) | **PUT** /datacenters/{datacenterId}/securitygroups/{securityGroupId}/rules/{ruleId} | Modify a Security Group Rule |
| [**datacentersServersNicsSecuritygroupsPut**](SecurityGroupsApi.md#datacentersserversnicssecuritygroupsput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/nics/{nicId}/securitygroups | Attach a list of Security Groups to a NIC |
| [**datacentersServersSecuritygroupsPut**](SecurityGroupsApi.md#datacentersserverssecuritygroupsput) | **PUT** /datacenters/{datacenterId}/servers/{serverId}/securitygroups | Attach a list of Security Groups to a Server |


## datacentersSecuritygroupsDelete

> datacentersSecuritygroupsDelete(datacenterId, securityGroupId, opts)

Delete a Security Group

Deletes the specified Security Group.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Delete a Security Group
api_instance
  .datacentersSecuritygroupsDelete({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    pretty: true, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the Security Group. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |

### Return type

nil (empty response body)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersSecuritygroupsFindById

> <SecurityGroup> datacentersSecuritygroupsFindById(datacenterId, securityGroupId, opts)

Retrieve a Security Group

Retrieves the attributes of a given Security Group.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Retrieve a Security Group
api_instance
  .datacentersSecuritygroupsFindById({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the security group. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**SecurityGroup**](../models/SecurityGroup.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersSecuritygroupsFirewallrulesDelete

> datacentersSecuritygroupsFirewallrulesDelete(datacenterId, securityGroupId, ruleId)

Remove a Firewall Rule from a Security Group

Removes the specific Firewall Rule from the Security Group and delete the Firewall rule

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Remove a Firewall Rule from a Security Group
api_instance
  .datacentersSecuritygroupsFirewallrulesDelete({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    ruleId: ruleId_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the security group. | [default to undefined] |
| **ruleId** | **string** | The unique ID of the firewall rule. | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersSecuritygroupsFirewallrulesPost

> <FirewallRule> datacentersSecuritygroupsFirewallrulesPost(datacenterId, securityGroupId, firewallRule)

Create Firewall rule to a Security Group

Create one firewall rule and attach it to the existing security group

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Create Firewall rule to a Security Group
api_instance
  .datacentersSecuritygroupsFirewallrulesPost({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    firewallRule: firewallRule_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the security group. | [default to undefined] |
| **firewallRule** | [**FirewallRule**](../models/FirewallRule.md) | The firewall to be attached (or created and attached). |  |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersSecuritygroupsGet

> <SecurityGroups> datacentersSecuritygroupsGet(datacenterId, opts)

List Security Groups

Retrieve a list of available security groups.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Security Groups
api_instance
  .datacentersSecuritygroupsGet({
    datacenterId: datacenterId_example,
    pretty: true,
    depth: 56,
    offset: 56,
    limit: 56, 
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**SecurityGroups**](../models/SecurityGroups.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersSecuritygroupsPatch

> <SecurityGroup> datacentersSecuritygroupsPatch(datacenterId, securityGroupId, securityGroup, opts)

Partially modify Security Group

Modify the properties of the specified Security Group within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Partially modify Security Group
api_instance
  .datacentersSecuritygroupsPatch({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    securityGroup: securityGroup_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the Security Group. | [default to undefined] |
| **securityGroup** | [**SecurityGroupProperties**](../models/SecurityGroupProperties.md) | The modified Security Group |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**SecurityGroup**](../models/SecurityGroup.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersSecuritygroupsPost

> <SecurityGroup> datacentersSecuritygroupsPost(datacenterId, securityGroup, opts)

Create a Security Group

Creates a security group within the data center. This will allow you to define which IP addresses and networks have access to your servers.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Create a Security Group
api_instance
  .datacentersSecuritygroupsPost({
    datacenterId: datacenterId_example,
    securityGroup: securityGroup_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroup** | [**SecurityGroupRequest**](../models/SecurityGroupRequest.md) | The security group to be created |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**SecurityGroup**](../models/SecurityGroup.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersSecuritygroupsPut

> <SecurityGroup> datacentersSecuritygroupsPut(datacenterId, securityGroupId, securityGroup, opts)

Modify Security Group

Modify the properties of the specified Security Group within the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Modify Security Group
api_instance
  .datacentersSecuritygroupsPut({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    securityGroup: securityGroup_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the Security Group. | [default to undefined] |
| **securityGroup** | [**SecurityGroupRequest**](../models/SecurityGroupRequest.md) | The modified Security Group |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**SecurityGroup**](../models/SecurityGroup.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersSecuritygroupsRulesFindById

> <FirewallRule> datacentersSecuritygroupsRulesFindById(datacenterId, securityGroupId, ruleId, opts)

Retrieve security group rule by id

Retrieve the properties of the specified Security Group rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Retrieve security group rule by id
api_instance
  .datacentersSecuritygroupsRulesFindById({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    ruleId: ruleId_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the Security Group. | [default to undefined] |
| **ruleId** | **string** | The unique ID of the Security Group rule. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersSecuritygroupsRulesGet

> <FirewallRules> datacentersSecuritygroupsRulesGet(datacenterId, securityGroupId, opts)

List Security Group rules

List all rules for the specified Security Group.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List Security Group rules
api_instance
  .datacentersSecuritygroupsRulesGet({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    pretty: true,
    depth: 56,
    offset: 56,
    limit: 56, 
    orderBy: "<property_name>"
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the security group. | [default to undefined] |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |
| **offset** | **number** | The first element (from the complete list of the elements) to include in the response (used together with &lt;b&gt;&lt;i&gt;limit&lt;/i&gt;&lt;/b&gt; for pagination). | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return (use together with offset for pagination). | [optional][default to 1000] |

### Return type

[**FirewallRules**](../models/FirewallRules.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## datacentersSecuritygroupsRulesPatch

> <FirewallRule> datacentersSecuritygroupsRulesPatch(datacenterId, securityGroupId, ruleId, rule, opts)

Partially modify Security Group Rules

Update the properties of the specified Security Group rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Partially modify Security Group Rules
api_instance
  .datacentersSecuritygroupsRulesPatch({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    ruleId: ruleId_example,
    rule: rule_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the security group. | [default to undefined] |
| **ruleId** | **string** | The unique ID of the Security Group Rule. | [default to undefined] |
| **rule** | [**FirewallruleProperties**](../models/FirewallruleProperties.md) | The properties of the Security Group Rule to be updated. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersSecuritygroupsRulesPut

> <FirewallRule> datacentersSecuritygroupsRulesPut(datacenterId, securityGroupId, ruleId, rule, opts)

Modify a Security Group Rule

Modifies the properties of the specified Security Group Rule.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Modify a Security Group Rule
api_instance
  .datacentersSecuritygroupsRulesPut({
    datacenterId: datacenterId_example,
    securityGroupId: securityGroupId_example,
    ruleId: ruleId_example,
    rule: rule_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **securityGroupId** | **string** | The unique ID of the security group. | [default to undefined] |
| **ruleId** | **string** | The unique ID of the Security Group Rule. | [default to undefined] |
| **rule** | [**FirewallRule**](../models/FirewallRule.md) | The modified Security Group Rule. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**FirewallRule**](../models/FirewallRule.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersNicsSecuritygroupsPut

> <SecurityGroups> datacentersServersNicsSecuritygroupsPut(datacenterId, serverId, nicId, securitygroups, opts)

Attach a list of Security Groups to a NIC

Updating the list of Security Groups attached to an existing NIC specified by its ID.  Security Groups should already exist as part of the datacenter.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Attach a list of Security Groups to a NIC
api_instance
  .datacentersServersNicsSecuritygroupsPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    nicId: nicId_example,
    securitygroups: securitygroups_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **nicId** | **string** | The unique ID of the server. | [default to undefined] |
| **securitygroups** | [**ListOfIds**](../models/ListOfIds.md) | The list of NIC attached Security Groups IDs. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**SecurityGroups**](../models/SecurityGroups.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## datacentersServersSecuritygroupsPut

> <SecurityGroups> datacentersServersSecuritygroupsPut(datacenterId, serverId, securitygroups, opts)

Attach a list of Security Groups to a Server

Updating the list of Security Groups attached to an existing server specified by its ID.  Security Groups should already exist as part of the datacenter.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.SecurityGroupsApi(config);
// Attach a list of Security Groups to a Server
api_instance
  .datacentersServersSecuritygroupsPut({
    datacenterId: datacenterId_example,
    serverId: serverId_example,
    securitygroups: securitygroups_example,
    pretty: true,
    depth: 56, 
        options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **datacenterId** | **string** | The unique ID of the data center. | [default to undefined] |
| **serverId** | **string** | The unique ID of the server. | [default to undefined] |
| **securitygroups** | [**ListOfIds**](../models/ListOfIds.md) | The list of server attached Security Groups IDs. |  |
| **pretty** | **boolean** | Controls whether the response is pretty-printed (with indentations and new lines). | [optional][default to true] |
| **depth** | **number** | Controls the detail depth of the response objects. GET /datacenters/[ID]   - depth&#x3D;0: Only direct properties are included;              children (servers and other elements) are not included.   - depth&#x3D;1: Direct properties and children references are included.   - depth&#x3D;2: Direct properties and children properties are included.   - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.   - depth&#x3D;... and so on | [optional][default to 0] |

### Return type

[**SecurityGroups**](../models/SecurityGroups.md)

### Authorization

BasicAuthentication, TokenAuthentication

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


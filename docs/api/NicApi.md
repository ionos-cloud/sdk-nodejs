# Class: NicApi

## NicApi

#### new NicApi()

NicApi - object-oriented interface

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1539](/../../api/nic-api.ts#L1539)

---------------

### Extends

- BaseAPI

### Methods

#### datacentersServersNicsDelete(requestParameters, options)

Delete a Nic
Deletes the specified NIC.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsDeleteRequest](global.md#NicApiDatacentersServersNicsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1554](/../../api/nic-api.ts#L1554)

##### Throws:

*RequiredError*

#### datacentersServersNicsFindById(requestParameters, options)

Retrieve a Nic
Retrieves the attributes of a given NIC

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFindByIdRequest](global.md#NicApiDatacentersServersNicsFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1565](/../../api/nic-api.ts#L1565)

##### Throws:

*RequiredError*

#### datacentersServersNicsFirewallrulesDelete(requestParameters, options)

Delete a Firewall Rule
Removes the specific Firewall Rule

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFirewallrulesDeleteRequest](global.md#NicApiDatacentersServersNicsFirewallrulesDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1576](/../../api/nic-api.ts#L1576)

##### Throws:

*RequiredError*

#### datacentersServersNicsFirewallrulesFindById(requestParameters, options)

Retrieve a Firewall Rule
Retrieves the attributes of a given Firewall Rule.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFirewallrulesFindByIdRequest](global.md#NicApiDatacentersServersNicsFirewallrulesFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1587](/../../api/nic-api.ts#L1587)

##### Throws:

*RequiredError*

#### datacentersServersNicsFirewallrulesGet(requestParameters, options)

List Firewall Rules
Retrieves a list of firewall rules associated with a particular NIC

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFirewallrulesGetRequest](global.md#NicApiDatacentersServersNicsFirewallrulesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1598](/../../api/nic-api.ts#L1598)

##### Throws:

*RequiredError*

#### datacentersServersNicsFirewallrulesPatch(requestParameters, options)

Partially modify a Firewall Rule
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFirewallrulesPatchRequest](global.md#NicApiDatacentersServersNicsFirewallrulesPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1609](/../../api/nic-api.ts#L1609)

##### Throws:

*RequiredError*

#### datacentersServersNicsFirewallrulesPost(requestParameters, options)

Create a Firewall Rule
This will add a Firewall Rule to the NIC

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFirewallrulesPostRequest](global.md#NicApiDatacentersServersNicsFirewallrulesPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1620](/../../api/nic-api.ts#L1620)

##### Throws:

*RequiredError*

#### datacentersServersNicsFirewallrulesPut(requestParameters, options)

Modify a Firewall Rule
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsFirewallrulesPutRequest](global.md#NicApiDatacentersServersNicsFirewallrulesPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1631](/../../api/nic-api.ts#L1631)

##### Throws:

*RequiredError*

#### datacentersServersNicsGet(requestParameters, options)

List Nics
Retrieves a list of NICs.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsGetRequest](global.md#NicApiDatacentersServersNicsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1642](/../../api/nic-api.ts#L1642)

##### Throws:

*RequiredError*

#### datacentersServersNicsPatch(requestParameters, options)

Partially modify a Nic
You can use update attributes of a Nic

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsPatchRequest](global.md#NicApiDatacentersServersNicsPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1653](/../../api/nic-api.ts#L1653)

##### Throws:

*RequiredError*

#### datacentersServersNicsPost(requestParameters, options)

Create a Nic
Adds a NIC to the target server. Combine count of Nics and volumes attached to the server should not exceed size 24.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsPostRequest](global.md#NicApiDatacentersServersNicsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1664](/../../api/nic-api.ts#L1664)

##### Throws:

*RequiredError*

#### datacentersServersNicsPut(requestParameters, options)

Modify a Nic
You can use update attributes of a Nic

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[NicApiDatacentersServersNicsPutRequest](global.md#NicApiDatacentersServersNicsPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[api/nic-api.ts](/../../api/nic-api.ts), [line 1675](/../../api/nic-api.ts#L1675)

##### Throws:

*RequiredError*
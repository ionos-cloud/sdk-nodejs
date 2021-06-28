# Class: LoadBalancerApi

## LoadBalancerApi

#### new LoadBalancerApi()

LoadBalancerApi - object-oriented interface

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1185](/../../api/load-balancer-api.ts#L1185)

---------------

### Extends

- BaseAPI

### Methods

#### datacentersLoadbalancersBalancednicsDelete(requestParameters, options)

Detach a nic from loadbalancer
This will remove a nic from Load Balancer

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersBalancednicsDeleteRequest](global.md#LoadBalancerApiDatacentersLoadbalancersBalancednicsDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1200](/../../api/load-balancer-api.ts#L1200)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersBalancednicsFindByNicId(requestParameters, options)

Retrieve a nic attached to Load Balancer
This will retrieve the properties of an attached nic.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersBalancednicsFindByNicIdRequest](global.md#LoadBalancerApiDatacentersLoadbalancersBalancednicsFindByNicIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1211](/../../api/load-balancer-api.ts#L1211)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersBalancednicsGet(requestParameters, options)

List Load Balancer Members
You can retrieve a list of nics attached to a Load Balancer

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersBalancednicsGetRequest](global.md#LoadBalancerApiDatacentersLoadbalancersBalancednicsGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1222](/../../api/load-balancer-api.ts#L1222)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersBalancednicsPost(requestParameters, options)

Attach a nic to Load Balancer
This will attach a pre-existing nic to a Load Balancer.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersBalancednicsPostRequest](global.md#LoadBalancerApiDatacentersLoadbalancersBalancednicsPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1233](/../../api/load-balancer-api.ts#L1233)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersDelete(requestParameters, options)

Delete a Loadbalancer.
Removes the specific Loadbalancer

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersDeleteRequest](global.md#LoadBalancerApiDatacentersLoadbalancersDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1244](/../../api/load-balancer-api.ts#L1244)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersFindById(requestParameters, options)

Retrieve a loadbalancer
Retrieves the attributes of a given Loadbalancer

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersFindByIdRequest](global.md#LoadBalancerApiDatacentersLoadbalancersFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1255](/../../api/load-balancer-api.ts#L1255)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersGet(requestParameters, options)

List Load Balancers
Retrieve a list of Load Balancers within the datacenter

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersGetRequest](global.md#LoadBalancerApiDatacentersLoadbalancersGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1266](/../../api/load-balancer-api.ts#L1266)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersPatch(requestParameters, options)

Partially modify a Loadbalancer
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersPatchRequest](global.md#LoadBalancerApiDatacentersLoadbalancersPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1277](/../../api/load-balancer-api.ts#L1277)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersPost(requestParameters, options)

Create a Load Balancer
Creates a Loadbalancer within the datacenter

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersPostRequest](global.md#LoadBalancerApiDatacentersLoadbalancersPostRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1288](/../../api/load-balancer-api.ts#L1288)

##### Throws:

*RequiredError*

#### datacentersLoadbalancersPut(requestParameters, options)

Modify a Load Balancer
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[LoadBalancerApiDatacentersLoadbalancersPutRequest](global.md#LoadBalancerApiDatacentersLoadbalancersPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/load-balancer-api.ts](/../../api/load-balancer-api.ts), [line 1299](/../../api/load-balancer-api.ts#L1299)

##### Throws:

*RequiredError*
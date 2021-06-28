# Class: ImageApi

## ImageApi

#### new ImageApi()

ImageApi - object-oriented interface

*Source:*
[/../../api/image-api.ts](/../../api/image-api.ts), [line 541](/../../api/image-api.ts#L541)

---------------

### Extends

- BaseAPI

### Methods

#### imagesDelete(requestParameters, options)

Delete an Image
Deletes the specified image. This operation is permitted on private image only.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ImageApiImagesDeleteRequest](global.md#ImageApiImagesDeleteRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/image-api.ts](/../../api/image-api.ts), [line 556](/../../api/image-api.ts#L556)

##### Throws:

*RequiredError*

#### imagesFindById(requestParameters, options)

Retrieve an Image
Retrieves the attributes of a given image.

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ImageApiImagesFindByIdRequest](global.md#ImageApiImagesFindByIdRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/image-api.ts](/../../api/image-api.ts), [line 567](/../../api/image-api.ts#L567)

##### Throws:

*RequiredError*

#### imagesGet(requestParameters, options)

List Images
Retrieve a list of images within the datacenter

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ImageApiImagesGetRequest](global.md#ImageApiImagesGetRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/image-api.ts](/../../api/image-api.ts), [line 578](/../../api/image-api.ts#L578)

##### Throws:

*RequiredError*

#### imagesPatch(requestParameters, options)

Partially modify an Image
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ImageApiImagesPatchRequest](global.md#ImageApiImagesPatchRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/image-api.ts](/../../api/image-api.ts), [line 589](/../../api/image-api.ts#L589)

##### Throws:

*RequiredError*

#### imagesPut(requestParameters, options)

Modify an Image
You can use update attributes of a resource

##### Parameters:

|Name|Type|Argument|Description|
|----|----|--------|-----------|
|`requestParameters`|*[ImageApiImagesPutRequest](global.md#ImageApiImagesPutRequest)*|  |Request parameters.|
|`options`|***|*optional*  |Override http request option.|

*Source:*
[/../../api/image-api.ts](/../../api/image-api.ts), [line 600](/../../api/image-api.ts#L600)

##### Throws:

*RequiredError*
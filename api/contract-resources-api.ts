/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * IONOS Enterprise-grade Infrastructure as a Service (IaaS) solutions can be managed through the Cloud API, in addition or as an alternative to the \"Data Center Designer\" (DCD) browser-based tool.    Both methods employ consistent concepts and features, deliver similar power and flexibility, and can be used to perform a multitude of management tasks, including adding servers, volumes, configuring networks, and so on.
 *
 * The version of the OpenAPI document: 6.0-SDK.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration, DEFAULT_MAX_RETRIES, DEFAULT_MAX_WAIT_TIME } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, backOff, runRequest } from '../base';
// @ts-ignore
import { Contracts } from '../model';
/**
 * ContractResourcesApi - axios parameter creator
 * @export
 */
export const ContractResourcesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the attributes of user\'s contract. In this version, the resource became a collection.
         * @summary Retrieve a Contract
         * @param {boolean} [pretty] Controls whether the response is pretty-printed (with indentations and new lines).
         * @param {number} [depth] Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on
         * @param {number} [xContractNumber] Users with multiple contracts must provide the contract number, against which all API requests are to be executed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsGet: async (pretty?: boolean, depth?: number, xContractNumber?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/contracts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic Authentication required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            // authentication Token Authentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if ((pretty === undefined) && (configuration !== undefined)) {
                pretty = configuration.getDefaultParamValue('pretty');
            }
            if (pretty !== undefined) {
                localVarQueryParameter['pretty'] = pretty;
            }

            if ((depth === undefined) && (configuration !== undefined)) {
                depth = configuration.getDefaultParamValue('depth');
            }
            if (depth !== undefined) {
                localVarQueryParameter['depth'] = depth;
            }

            if ((xContractNumber === undefined) && (configuration !== undefined)) {
                xContractNumber = configuration.getDefaultParamValue('xContractNumber');
            }
            if (xContractNumber !== undefined && xContractNumber !== null) {
                localVarHeaderParameter['X-Contract-Number'] = String(JSON.stringify(xContractNumber));
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContractResourcesApi - functional programming interface
 * @export
 */
export const ContractResourcesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves the attributes of user\'s contract. In this version, the resource became a collection.
         * @summary Retrieve a Contract
         * @param {boolean} [pretty] Controls whether the response is pretty-printed (with indentations and new lines).
         * @param {number} [depth] Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on
         * @param {number} [xContractNumber] Users with multiple contracts must provide the contract number, against which all API requests are to be executed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contractsGet(pretty?: boolean, depth?: number, xContractNumber?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contracts>> {
            const axiosArgs = await ContractResourcesApiAxiosParamCreator(configuration).contractsGet(pretty, depth, xContractNumber, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * ContractResourcesApi - factory interface
 * @export
 */
export const ContractResourcesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves the attributes of user\'s contract. In this version, the resource became a collection.
         * @summary Retrieve a Contract
         * @param {boolean} [pretty] Controls whether the response is pretty-printed (with indentations and new lines).
         * @param {number} [depth] Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on
         * @param {number} [xContractNumber] Users with multiple contracts must provide the contract number, against which all API requests are to be executed.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsGet(pretty?: boolean, depth?: number, xContractNumber?: number, options?: any): AxiosPromise<Contracts> {
            return ContractResourcesApiFp(configuration).contractsGet(pretty, depth, xContractNumber, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for contractsGet operation in ContractResourcesApi.
 * @export
 * @interface ContractResourcesApiContractsGetRequest
 */
export interface ContractResourcesApiContractsGetRequest {
    /**
     * Controls whether the response is pretty-printed (with indentations and new lines).
     * @type {boolean}
     * @memberof ContractResourcesApiContractsGet
     */
    readonly pretty?: boolean

    /**
     * Controls the detail depth of the response objects.  GET /datacenters/[ID]  - depth&#x3D;0: Only direct properties are included; children (servers and other elements) are not included.  - depth&#x3D;1: Direct properties and children references are included.  - depth&#x3D;2: Direct properties and children properties are included.  - depth&#x3D;3: Direct properties and children properties and children\&#39;s children are included.  - depth&#x3D;... and so on
     * @type {number}
     * @memberof ContractResourcesApiContractsGet
     */
    readonly depth?: number

    /**
     * Users with multiple contracts must provide the contract number, against which all API requests are to be executed.
     * @type {number}
     * @memberof ContractResourcesApiContractsGet
     */
    readonly xContractNumber?: number
}

/**
 * ContractResourcesApi - object-oriented interface
 * @export
 * @class ContractResourcesApi
 * @extends {BaseAPI}
 */
export class ContractResourcesApi extends BaseAPI {
    /**
     * Retrieves the attributes of user\'s contract. In this version, the resource became a collection.
     * @summary Retrieve a Contract
     * @param {ContractResourcesApiContractsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractResourcesApi
     */
    public contractsGet(requestParameters: ContractResourcesApiContractsGetRequest = {}, options?: any) {
        return ContractResourcesApiFp(this.configuration).contractsGet(requestParameters.pretty, requestParameters.depth, requestParameters.xContractNumber, options).then((request) => request(this.axios, this.basePath));
    }
}
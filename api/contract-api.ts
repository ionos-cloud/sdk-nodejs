/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * An enterprise-grade Infrastructure is provided as a Service (IaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.   The API allows you to perform a variety of management tasks such as spinning up additional servers, adding volumes, adjusting networking, and so forth. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive.
 *
 * The version of the OpenAPI document: 5.0
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
import { Contract } from '../model';
/**
 * ContractApi - axios parameter creator
 * @export
 */
export const ContractApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the attributes of user\'s contract.
         * @summary Retrieve a Contract
         * @param {boolean} [pretty] Controls whether response is pretty-printed (with indentation and new lines)
         * @param {number} [depth] Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on
         * @param {number} [xContractNumber] Users having more than 1 contract need to provide contract number, against which all API requests should be executed
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
 * ContractApi - functional programming interface
 * @export
 */
export const ContractApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves the attributes of user\'s contract.
         * @summary Retrieve a Contract
         * @param {boolean} [pretty] Controls whether response is pretty-printed (with indentation and new lines)
         * @param {number} [depth] Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on
         * @param {number} [xContractNumber] Users having more than 1 contract need to provide contract number, against which all API requests should be executed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contractsGet(pretty?: boolean, depth?: number, xContractNumber?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contract>> {
            const axiosArgs = await ContractApiAxiosParamCreator(configuration).contractsGet(pretty, depth, xContractNumber, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * ContractApi - factory interface
 * @export
 */
export const ContractApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves the attributes of user\'s contract.
         * @summary Retrieve a Contract
         * @param {boolean} [pretty] Controls whether response is pretty-printed (with indentation and new lines)
         * @param {number} [depth] Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on
         * @param {number} [xContractNumber] Users having more than 1 contract need to provide contract number, against which all API requests should be executed
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contractsGet(pretty?: boolean, depth?: number, xContractNumber?: number, options?: any): AxiosPromise<Contract> {
            return ContractApiFp(configuration).contractsGet(pretty, depth, xContractNumber, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for contractsGet operation in ContractApi.
 * @export
 * @interface ContractApiContractsGetRequest
 */
export interface ContractApiContractsGetRequest {
    /**
     * Controls whether response is pretty-printed (with indentation and new lines)
     * @type {boolean}
     * @memberof ContractApiContractsGet
     */
    readonly pretty?: boolean

    /**
     * Controls the details depth of response objects.  Eg. GET /datacenters/[ID]  - depth&#x3D;0: only direct properties are included. Children (servers etc.) are not included  - depth&#x3D;1: direct properties and children references are included  - depth&#x3D;2: direct properties and children properties are included  - depth&#x3D;3: direct properties and children properties and children\&#39;s children are included  - depth&#x3D;... and so on
     * @type {number}
     * @memberof ContractApiContractsGet
     */
    readonly depth?: number

    /**
     * Users having more than 1 contract need to provide contract number, against which all API requests should be executed
     * @type {number}
     * @memberof ContractApiContractsGet
     */
    readonly xContractNumber?: number
}

/**
 * ContractApi - object-oriented interface
 * @export
 * @class ContractApi
 * @extends {BaseAPI}
 */
export class ContractApi extends BaseAPI {
    /**
     * Retrieves the attributes of user\'s contract.
     * @summary Retrieve a Contract
     * @param {ContractApiContractsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractApi
     */
    public contractsGet(requestParameters: ContractApiContractsGetRequest = {}, options?: any) {
        return ContractApiFp(this.configuration).contractsGet(requestParameters.pretty, requestParameters.depth, requestParameters.xContractNumber, options).then((request) => request(this.axios, this.basePath));
    }
}

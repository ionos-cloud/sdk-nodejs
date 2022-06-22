/* tslint:disable */
/* eslint-disable */
/**
 * CLOUD API
 * IONOS Enterprise-grade Infrastructure as a Service (IaaS) solutions can be managed through the Cloud API, in addition or as an alternative to the \"Data Center Designer\" (DCD) browser-based tool.    Both methods employ consistent concepts and features, deliver similar power and flexibility, and can be used to perform a multitude of management tasks, including adding servers, volumes, configuring networks, and so on.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ApplicationLoadBalancerHttpRuleCondition
 */
export interface ApplicationLoadBalancerHttpRuleCondition {

    /**
     * Type of the HTTP rule condition.
     * @type {string}
     * @memberof ApplicationLoadBalancerHttpRuleCondition
     */
    type: ApplicationLoadBalancerHttpRuleConditionTypeEnum;

    /**
     * Matching rule for the HTTP rule condition attribute; mandatory for HEADER, PATH, QUERY, METHOD, HOST, and COOKIE types; must be null when type is SOURCE_IP.
     * @type {string}
     * @memberof ApplicationLoadBalancerHttpRuleCondition
     */
    condition: ApplicationLoadBalancerHttpRuleConditionConditionEnum;

    /**
     * Specifies whether the condition is negated or not; the default is False.
     * @type {boolean}
     * @memberof ApplicationLoadBalancerHttpRuleCondition
     */
    negate?: boolean;

    /**
     * Must be null when type is PATH, METHOD, HOST, or SOURCE_IP. Key can only be set when type is COOKIES, HEADER, or QUERY.
     * @type {string}
     * @memberof ApplicationLoadBalancerHttpRuleCondition
     */
    key?: string;

    /**
     * Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH; must be null when condition is EXISTS; should be a valid CIDR if provided and if type is SOURCE_IP.
     * @type {string}
     * @memberof ApplicationLoadBalancerHttpRuleCondition
     */
    value?: string;
}


/**
    * @export
    * @enum {string}
    */
export enum ApplicationLoadBalancerHttpRuleConditionTypeEnum {
    Header = 'HEADER',
    Path = 'PATH',
    Query = 'QUERY',
    Method = 'METHOD',
    Host = 'HOST',
    Cookie = 'COOKIE',
    SourceIp = 'SOURCE_IP'
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationLoadBalancerHttpRuleConditionConditionEnum {
    Exists = 'EXISTS',
    Contains = 'CONTAINS',
    Equals = 'EQUALS',
    Matches = 'MATCHES',
    StartsWith = 'STARTS_WITH',
    EndsWith = 'ENDS_WITH'
}






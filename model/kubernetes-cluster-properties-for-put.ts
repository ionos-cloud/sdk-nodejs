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


import { KubernetesMaintenanceWindow } from './kubernetes-maintenance-window';
import { S3Bucket } from './s3-bucket';

/**
 * 
 * @export
 * @interface KubernetesClusterPropertiesForPut
 */
export interface KubernetesClusterPropertiesForPut {

    /**
     * A Kubernetes Cluster Name. Valid Kubernetes Cluster name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     * @type {string}
     * @memberof KubernetesClusterPropertiesForPut
     */
    name: string;

    /**
     * The kubernetes version in which a cluster is running. This imposes restrictions on what kubernetes versions can be run in a cluster\'s nodepools. Additionally, not all kubernetes versions are viable upgrade targets for all prior versions.
     * @type {string}
     * @memberof KubernetesClusterPropertiesForPut
     */
    k8sVersion?: string;

    /**
     * 
     * @type {KubernetesMaintenanceWindow}
     * @memberof KubernetesClusterPropertiesForPut
     */
    maintenanceWindow?: KubernetesMaintenanceWindow;

    /**
     * Access to the K8s API server is restricted to these CIDRs. Cluster-internal traffic is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value will be used: 32 for IPv4 and 128 for IPv6.
     * @type {Array<string>}
     * @memberof KubernetesClusterPropertiesForPut
     */
    apiSubnetAllowList?: Array<string>;

    /**
     * List of S3 bucket configured for K8s usage. For now it contains only one S3 bucket used to store K8s API audit logs
     * @type {Array<S3Bucket>}
     * @memberof KubernetesClusterPropertiesForPut
     */
    s3Buckets?: Array<S3Bucket>;
}



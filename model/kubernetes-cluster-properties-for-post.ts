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


import { KubernetesMaintenanceWindow } from './kubernetes-maintenance-window';
import { S3Bucket } from './s3-bucket';

/**
 * 
 * @export
 * @interface KubernetesClusterPropertiesForPost
 */
export interface KubernetesClusterPropertiesForPost {

    /**
     * Access to the K8s API server is restricted to these CIDRs. Intra-cluster traffic is not affected by this restriction. If no AllowList is specified, access is not limited. If an IP is specified without a subnet mask, the default value is 32 for IPv4 and 128 for IPv6.
     * @type {Array<string>}
     * @memberof KubernetesClusterPropertiesForPost
     */
    apiSubnetAllowList?: Array<string>;

    /**
     * The Kubernetes version that the cluster is running. This limits which Kubernetes versions can run in a cluster\'s node pools. Also, not all Kubernetes versions are suitable upgrade targets for all earlier versions.
     * @type {string}
     * @memberof KubernetesClusterPropertiesForPost
     */
    k8sVersion?: string;

    /**
     * 
     * @type {KubernetesMaintenanceWindow}
     * @memberof KubernetesClusterPropertiesForPost
     */
    maintenanceWindow?: KubernetesMaintenanceWindow;

    /**
     * A Kubernetes cluster name. Valid Kubernetes cluster name must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     * @type {string}
     * @memberof KubernetesClusterPropertiesForPost
     */
    name: string;

    /**
     * List of S3 buckets configured for K8s usage. At the moment, it contains only one S3 bucket that is used to store K8s API audit logs.
     * @type {Array<S3Bucket>}
     * @memberof KubernetesClusterPropertiesForPost
     */
    s3Buckets?: Array<S3Bucket>;
}



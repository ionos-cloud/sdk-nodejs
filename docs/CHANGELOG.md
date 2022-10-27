# Changelog

## 6.1.0 \(June 15th, 2022\)

### Enhancements:

* added Application Load Balancer and Target Group, 18 new models and 2 new APIs

### Fixes:

* convert filters to map if they come as an object, 
* removed parameter for `KubernetesClusterProperties`, `KubernetesClusterPropertiesForPost` models: `public`
* removed parameter for `KubernetesNodePoolProperties` model: `gatewayIp`

## 6.1.1 \(Jul 14th, 2022\)

### Features
- Added `manageDbaas` field in `group-properties.ts` : provides privilege for a group to manage DBaaS related functionality. Admin users already here this enabled by default.
- Added `deleteVolumes` to `datacentersServersDelete`: If true, all attached storage volumes will also be deleted.
- Added `boot_order` to `volume-properties.ts` : Determines whether the volume will be used as a boot volume. Set to `NONE`, the volume will not be used as boot volume. Set to `PRIMARY`, the volume will be used as boot volume and all other volumes must be set to `NONE`. Set to `AUTO` or `null` requires all volumes to be set to &#x60;AUTO&#x60; or &#x60;null&#x60;; this will use the legacy behavior, which is to use the volume as a boot volume only if there are no other volumes or cdrom devices. Defaults to `AUTO`.

## 6.1.2 \(Oct 27th, 2022\)

### Fixes

- Fixed `IONOS_TOKEN` authentication bug. Now, the authentication using `IONOS_TOKEN` works properly.
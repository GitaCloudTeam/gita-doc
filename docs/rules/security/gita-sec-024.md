---
sidebar_position: 26
---

# Not allowed volume type used

Kubernetes Volumes are a native solution providing persistent and shared
storage for containers. In simple terms, Volumes are directories which
are known by Kubernetes and can be plugged into containers for reading,
writing or executing. There are many types of Volumes, each one of them
providing the directory in question in their own way, but all are usable
through the same mechanism provided by Volumes.

However, some volumes depend on network connectivity or other fragile
medium to be provisioned to Kubernetes, what could potentially expose
persisted information in case the traffic isn't properly secured or the
medium in question fails.

For this reason, it is discouraged to use volume types besides the ones
listed below:

- `configMap`
- `csi`
- `downwardAPI`
- `emptyDir`
- `ephemeral`
- `persistentVolumeClaim`
- `projected`
- `secret`

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/storage/volumes)


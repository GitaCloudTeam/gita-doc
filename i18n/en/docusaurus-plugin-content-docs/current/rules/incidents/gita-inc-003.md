---
sidebar_position: 3
---

# Kubelet has insufficient disk space available (GITA-INC-003)

The Kubelet component from Kubernetes proactively checks nodes' disk
space and inode count from the cluster in order to take action whenever
either one of those are running out, according to a measurement called
eviction threshold. This phenomenon is known as _DiskPressure_.

When a node enters the _DiskPressure_ state, some of its Pods are
selected for termination regardless of the `PodDisruptionBudget` and
`terminationGracePeriodSeconds` values.

If a Pod must have a graceful termination period, a custom eviction
threshold can be set through the `eviction-max-pod-grace-period` Kubelet
configuration. This is only possible for _soft_ thresholds, specified
through the flag `--eviction-soft`. _Hard_ thresholds, specified through
the flag `--eviction-hard`, do not allow grace periods and terminate
Pods immediately.

Acceptable eviction configuration parameters are:

- `nodefs.available`
- `nodefs.inodesFree`
- `imagefs.available`
- `imagefs.inodesFree`

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction)

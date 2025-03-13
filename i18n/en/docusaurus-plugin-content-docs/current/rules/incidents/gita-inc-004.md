---
sidebar_position: 4
---

# Kubelet has insufficient memory available (GITA-INC-004)

The Kubelet component from Kubernetes proactively checks nodes'
available memory in order to take action whenever such resource is
running out, according to a measurement called eviction threshold. This
phenomenon is known as _MemoryPressure_.

When a node enters the _MemoryPressure_ state, some of its Pods are
selected for termination regardless of the `PodDisruptionBudget` and
`terminationGracePeriodSeconds` values.

If the presence of a Pod termination period is crucial, a custom
eviction threshold can be set through the
`eviction-max-pod-grace-period` Kubelet configuration. This is only
possible for _soft_ thresholds, specified through the flag
`--eviction-soft`. _Hard_ thresholds, specified through the flag
`--eviction-hard`, do not allow grace periods and terminates Pods
immediately.

Eviction configuration for memory can be customized through the
`memory.available` parameter.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction)


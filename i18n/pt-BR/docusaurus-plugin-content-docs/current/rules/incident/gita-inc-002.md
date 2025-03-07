---
sidebar_position: 1
---
# Node status is not ready

The Kubelet component from Kubernetes proactively checks nodes'
available resources such as disk space, memory and PID count, in order
to take action whenever any of these resources are running out,
according to a measurement called eviction threshold.

In case the threshold is reached, the node is marked as being
_NotReady_, whereby new Pods will not be accepted in the node, and
current Pods may be terminated in an attempt to mitigate the issue.
Network issues can also cause a node to become _NotReady_, be it from
lack of connectivity or a misbehaving _kube-proxy_, since Kubernetes
treats unreachable nodes as unhealthy.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/architecture/nodes)


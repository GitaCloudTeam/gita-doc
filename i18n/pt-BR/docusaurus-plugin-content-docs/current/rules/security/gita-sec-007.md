---
sidebar_position: 26
---

# HostPath volumep

Kubernetes Volumes are a native solution providing persistent and shared
storage for containers. In simple terms, Volumes are directories which
are known by Kubernetes and can be plugged into containers for reading,
writing or executing. There are many types of Volumes, each one of them
providing the directory in question in their own way, but all are usable
through the same mechanism.

HostPath Volumes mount host directories into the container, what can
expose sensitive information about the node, or be used to escalate
privileges in case the directory in question contains system
configuration files or sockets.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/storage/volumes)


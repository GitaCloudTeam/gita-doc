---
sidebar_position: 7
---

# Namespace status is not active (GITA-INC-007)

Kubernetes enables the organization of workloads and resources by scope
through namespaces. These ensure all objects created have a unique name
in their scope, preventing name clashes and allowing separation of concerns.

Namespaces like other Kubernetes resources are represented as objects
and have phases. A namespace is marked as _Active_ when it's being used
throughout the cluster, and _Terminating_ when being deleted.
Furthermore, network issues which may hinder a namespace from coming
online can also lead it to be marked as _Not Active_.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces)


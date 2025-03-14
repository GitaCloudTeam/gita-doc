---
sidebar_position: 2
---
# Pod status is unhealthy (GITA-INC-002)

Kubernetes has built in mechanisms to detect whether a container is
behaving properly, such as Liveness and Readiness Probes, also known as
Health Checks.

This mechanism is implemented in the Kubelet component to detect when
programs start to misbehave but have not yet crashed, as through
deadlocks and other issues which make the program unresponsive.

If one of the Health Checks fails, the container is considered
unhealthy, and whenever a Pod has at least one unhealthy container, its
status will be set to unhealthy as well.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle).

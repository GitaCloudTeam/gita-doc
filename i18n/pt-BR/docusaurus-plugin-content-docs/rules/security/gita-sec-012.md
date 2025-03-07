---
sidebar_position: 26
---

# Container should not be privileged

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

When a container is executed in privileged mode, it has permissions
equivalent to the host's root user, allowing it to access any connected
device, path or resource reachable through the computer it's running on.

Privileged mode is disabled by default, however, one can also explicitly
disable this option through Kubernetes manifests. To do this, set the
security context option `privileged` to `false` as the example below:

```
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      securityContext:
        privileged: false
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)


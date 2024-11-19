---
sidebar_position: 26
---
# Forbidden proc mount type

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

By default, specific paths within the `/proc` directory are masked by
the container runtime in order to prevent host data related to devices
and other critical components from leaking to the container. However,
this can be overridden through Kubernetes manifests by setting the value
`Unmasked` to the security context option `procMount`.

To ensure `/proc` paths are not revealed to containers, omit the
`procMount` option or set it explicitly to `Default`, as the example
below:

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
        procMount: Default
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)


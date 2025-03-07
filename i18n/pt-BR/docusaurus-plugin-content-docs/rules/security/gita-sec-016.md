---
sidebar_position: 26
---
# Container running as root (Pod)

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

This means that side effects of processes running within containers
shouldn't affect outside processes. However, given how far reaching
within the kernel are the intricacies of Cgroups, some subsystems have
not yet been entirely adapted to it, or may have corner cases where a
containerized process can end up bypassing its kernel namespace.

This creates a serious attack surface for Cgroups, given a container
process running as root may be able to act as root on the host if a
particular subsystem does not properly differentiates between the origin
of the user the process runs as.

In order to mitigate such threat, Kubernetes provides an option to
prevent any container process from executing as the root user. To enable
this, set the `runAsNonRoot` security context option to `true`, as the
example below:

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
    runAsNonRoot: true
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards)

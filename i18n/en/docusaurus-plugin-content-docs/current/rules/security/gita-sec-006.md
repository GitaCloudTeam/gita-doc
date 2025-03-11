---
sidebar_position: 26
---

# Host namespaces not isolated

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

The namespace in which a container executes is controlled by the
container runtime, which also enables the usage of the host's
namespaces. When this is done, the isolating properties of the container
are pretty much set aside, as its process tree will be running in
conjunction with the host's.

Kubernetes can configure the container runtime in order to prevent usage
of the host's IPC, Network and PID namespaces. Following is an example
on how to do this through a manifest:

```
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
  hostNetwork: false
  hostIPC: false
  hostPID: false
```

Other namespaces such as Mount and UTS are not yet natively configurable
through Kubernetes and must be managed directly through the container
runtime.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards)


---
sidebar_position: 17
---

# Container running not as user (GITA-SEC-017)

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

This means that side effects of processes running within containers
shouldn't affect outside processes. However, given how far reaching
within the kernel are the intricacies of Cgroups, some subsystems have
not yet been entirely adapted to it, or it may happen that a
containerized process can end up bypassing the kernel namespace.

When using Docker as container runtime and not specifying a user for the
containerized process, it will execute as root by default. If the group
is also omitted, it defaults to root as well.

This creates a serious attack surface for Cgroups, given a container
process running as root may be able to act as root on the host if a
particular subsystem does not properly differentiates between the origin
of the user the process runs as.

In order to mitigate such threat, Kubernetes provides an option to
enforce a user and group for the containerized process. To configure
this, set the security context options `runAsUser` and `runAsGroup` with ids other than 0, as shown in the example below:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        fsGroup: 1000
```

It's also helpful to set the `fsGroup` option, which will make all files
created within the container volume to be owned by the specified group.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)

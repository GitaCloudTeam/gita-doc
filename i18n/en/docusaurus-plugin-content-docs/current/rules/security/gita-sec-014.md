---
sidebar_position: 26
---
# Read only root filesystem

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

Another design trait of containers is that of statelessness, i.e.,
programs are not expected to persist data within the container, but
rather use an external storage mechanism such as a database, volume or
network persistency backend.

Since the container filesystem is not to be relied upon for storage,
it's recommended to disable writing operations on it in order to
decrease the attack surface of the container, given that malicious
programs may be able to leverage the filesystem in order to advance an
attack.

By default, the filesystem is mounted in read-write mode, but Kubernetes
allows this configuration to be changed through the security context
option `readOnlyRootFilesystem`. Following is an example on how to do
it:

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
        readOnlyRootFilesystem: true
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)


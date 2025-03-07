---
sidebar_position: 4
---

# Memory limits should be set

The memory of a computer is one of its limited resources and ought to be
used consciously. This is even more relevant in terms of containers, as
the host memory will be shared among multiple complex processes.

In order to avoid a particular container from using too much memory from
the host, Linux's Cgroups enable the configuration of hard limits on
memory allocation, which can be informed directly through Kubernetes
manifests.

To set this limit, add a `resources` field to the manifest as the
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
      resources:
        limits:
          memory: 200M
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource).

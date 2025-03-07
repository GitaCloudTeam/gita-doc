---
sidebar_position: 1
---
# CPU limits should be set

The CPU processing capacity of a computer is one of its limited
resources and ought to be used consciously. This is even more relevant
in terms of containers, as the host CPU will be shared among multiple
complex processes.

In order to avoid a particular container from using too much processing
power from the host, Linux's Cgroups enable the configuration of hard
limits on CPU consumption, which can be informed directly through
Kubernetes manifests.

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
          cpu: 2
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource).

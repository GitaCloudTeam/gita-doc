---
sidebar_position: 6
---

# Memory requests should be set

The memory of a computer is one of its limited resources. On clustered
Linux systems, complex processes in the form of containers are
constantly competing for such resource. Furthermore, given that these
processes may perform tasks which require distinct amounts of resources,
there exists a necessity of ensuring such amount will be available.

This is what memory requests are used for. By specifying how much memory
a container may need, the process scheduler can ensure the container
only starts if that exact quantity is available. In a similar manner,
the scheduler also uses the request value to select a node where the
container will execute, matching against the available memory of each
node.

Such value can be specified directly through Kubernetes manifests. To do
this, add a `resources` field to the manifest as the example below:

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
        requests:
          memory: 50M
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource).


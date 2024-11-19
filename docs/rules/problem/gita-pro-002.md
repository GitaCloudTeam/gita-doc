---
sidebar_position: 2
---

# CPU requests should be set

The CPU processing capacity of a computer is one of its limited
resources. On clustered Linux systems, complex processes in the form
of containers are constantly competing for such resource. Furthermore,
given that these processes may perform tasks of distinctive importance,
there exists a necessity of prioritizing their execution.

This is what CPU requests are used for. By placing weights on the
running containers, the process scheduler will allow containers with
the highest value to consume more processing power, and vice versa.

Such value can be specified directly through Kubernetes manifests. To do
this, add a `resources` field to the manifest as the example below:

```
apiversion: v1
kind: pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      resources:
        requests:
          cpu: 3.0
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource).


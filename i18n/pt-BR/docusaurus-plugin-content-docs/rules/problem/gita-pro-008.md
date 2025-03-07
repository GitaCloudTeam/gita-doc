---
sidebar_position: 8
---

# Readiness probe must be present

Kubernetes has a built in mechanism to detect whether a container has
started correctly and is ready to begin interacting with the cluster.
This is called Readiness Probe.

This mechanism is implemented in the Kubelet component to detect when
programs are not able to service requests, be it from bugs,
misconfiguration or external events which are interfering with the
program.

When the Kubelet detects a container in such a state, it removes its Pod
from the Service load balancer, preventing traffic from reaching it. If
this is not set, Kubernetes will have no way to detect unavailable
programs.

How to perform a Readiness Probe depends greatly on the program in
question, but an example is given below:

```
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      livenessProbe:
        exec:
          command:
            - redis-cli
            - ping
        initialDelaySeconds: 30
        timeoutSeconds: 5
        failureThreshold: 5
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes).


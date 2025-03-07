---
sidebar_position: 4
---

# Liveness probe must be present

Kubernetes has a built in mechanism to detect whether a container is
behaving accordingly, called Liveness Probe. This mechanism is
implemented in the Kubelet component to detect when programs start to
misbehave but have not yet crashed, as through deadlocks and other
issues which make the program unresponsive.

When the Kubelet detects a container in such a state, it restarts the
container in an attempt to temporarily bring back its functionality by
starting a fresh execution. If this is not set, Kubernetes will have no
way to detect and remedy unresponsive containers.

How to perform a Liveness Probe depends greatly on the program in
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
        failureThreshold: 10
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes).

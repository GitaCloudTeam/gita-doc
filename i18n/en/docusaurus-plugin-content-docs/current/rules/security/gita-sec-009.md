---
sidebar_position: 26
---
# Privileged access to the Windows node

On nodes running Microsoft Windows, Kubernetes provides a mechanism for
running containerized processes with direct access to the host's
network, filesystem and devices. This may increase the attack surface of
the processes in question, given that if the process gets compromised,
it will have less layers separating it from the host.

In order to disable this mechanism, set the security context option
`hostProcess` to `false`, as in the example below:

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
    windowsOptions
      hostProcess: false
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/create-hostprocess-pod)


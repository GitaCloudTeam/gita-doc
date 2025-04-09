---
sidebar_position: 23
---

# Problem drop capabilities (GITA-SEC-023)

Capabilities are a Linux specific set of permissions traditionally
reserved for the root user, which have been stratified into separate
privileges, thus allowing a more fine grained control of what each
process can do.

Kubernetes has a built-in mechanism for removing Capabilities to a
containerized process through its security context configuration.
However, if Capabilities are left behind they can become a vector for
future attacks and exploits.

In order to ensure all Capabilities are removed from a container
process, use the `ALL` value in the drop list. Following is an example
manifest demonstrating how to do this:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: cowsay
spec:
  restartPolicy: Never
  containers:
    - name: cowsay
      image: rancher/cowsay:latest
      args: ["Security First!!"]
      securityContext:
        capabilities:
          drop: ["ALL"]
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container)

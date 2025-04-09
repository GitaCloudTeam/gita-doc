---
sidebar_position: 4
---

# Unauthorized AppArmor profile (GITA-SEC-004)

AppArmor is a Linux kernel module developed to harden one's system
against unintended process behavior. The module monitors a given process'
activity and compares it with a list of access control directives for
paths and capabilities, killing the process in case any of them is
violated. This arrangement of directives is called _profile_.

Kubernetes is in the process of integrating AppArmor, but right now the
feature is still in beta stage. For this reason, configuration is done
through Pod annotations. Moreover, the annotation will only take effect
in case the host has enabled the AppArmor feature.

By setting the AppArmor annotation value to `unconfined`, the
Kubernetes engine is instructed to disable AppArmor for the process in question,
which completely renders the functionality enabled on the host useless. Furthermore, the container runtime may still apply its default AppArmor profile
despite the Kubernetes request.

In case your nodes do not carry specific profiles for the containerized
processes running on them, use the value `runtime/default` for their
AppArmor profile, as in the example below:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
  annotations:
    container.apparmor.security.beta.kubernetes.io/redis: runtime/default
spec:
  containers:
    - name: redis
      image: redis:latest
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tutorials/security/apparmor)

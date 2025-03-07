---
sidebar_position: 26
---

# Unauthorized seccomp profile (Pod)

Seccomp is a Linux kernel feature developed to minimize kernel exposure
to userland processes in such a way as to constrain them to four basic
syscalls, only permitting reading, writing, returning and exiting
operations. Recently, an extension of this feature was developed in
order to enable more control over which syscalls to permit and to block,
leveraging the Evolved Berkley Packet Filter (EBPF) to achieve this. The
extension is called Seccomp BPF.

With Seccomp BPF, syscalls from a process can be matched against a
specified filtering list, and in case it tries to invoke a blacklisted
entry, a violation signal can be raised or the process terminated. This
filtering list is commonly denominated Seccomp profile.

Kubernetes can enable Seccomp BPF for containerized processes as long as
the host's kernel supports it. But when using the `Unconfined` option,
it will completely disable Seccomp. In case a specific profile has not
been written for the process in question, Kubernetes carries a
built-in filter list which suits well most use cases. To enable it, set

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
    seccompProfile:
      type: RuntimeDefault
```

Moreover, it's possible to make every container execute with the default
Seccomp filter list. To do this, start the Kubelet component with the
flag `--seccomp-default`, or set the equivalent option on its
configuration file.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tutorials/security/seccomp)


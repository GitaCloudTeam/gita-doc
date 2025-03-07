---
sidebar_position: 26
---

# Pod with not allowed SELinux options

SELinux is a kernel module providing Mandatory Access Control (MAC)
mechanisms, thus enabling administrators to control how a process access
resources such as files and devices. At its core lies the label based
policy engine, where every system resource, including the processes
themselves, have a identifying label. This allows the creation of
policies either enabling or disabling access to any labelled resource,
which will be enforced once passed to SELinux.

Labels are composed of three parts, a type, a user and a role. However,
if any of those isn't set properly, SELinux may not be able to enforce
its access control.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#assign-selinux-labels-to-a-container)


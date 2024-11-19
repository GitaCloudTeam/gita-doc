---
sidebar_position: 26
---

# Insecure Sysctls

Sysctl is an utility created to configure the Linux kernel at runtime,
overriding values passed to the kernel as parameters through its
command line, and from the `/etc/sysctl.conf` configuration
file as well.

Kubernetes has a built-in mechanism to configure the Linux kernel by
leveraging the sysctl interface. However, most configurations will not
be isolated with the container's namespace, causing kernel-wide side
effects. This creates a big attack surface that could be used to tanker
with the host or other containers as well.

For this reason, any sysctl besides the ones listed below are
discouraged to be applied:

- `kernel.shm_rmid_forced`
- `net.ipv4.ip_local_port_range`
- `net.ipv4.ip_unprivileged_port_start`
- `net.ipv4.tcp_syncookies`
- `net.ipv4.ping_group_range`

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster)

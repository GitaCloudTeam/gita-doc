---
sidebar_position: 26
---
# SSH exposed

The Secure Shell (SSH) is a protocol for secure communication across a
network, leveraging asymmetric encryption to prevent outsiders from
observing what is being communicated. The protocol is widely used as a
means to remotely access machines through an interactive shell, in some
cases permitting full access to the system when logged in as the root
user. SSH uses the port 22 by default. The port 2222 is also commonly
used as an alternative when the former is blocked.

Exposing a SSH connection to a container in order to get a remote shell
will bypass the Kubelet authentication, as Kubernetes has no way to
differentiate between SSH and other network traffic. Thus making futile
Kubernetes' access control mechanisms.

If the goal is to get a remote shell to a container, consider using the
Kubectl tool.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container)


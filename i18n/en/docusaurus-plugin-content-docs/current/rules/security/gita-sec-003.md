---
sidebar_position: 8
---

# Application credentials stored in configuration files

Setting credentials on arbitrarily accessible locations such as
configuration files may expose sensitive data, or at worst, completely
hinder their access control mechanism.

There are multiple alternatives to storing credentials on a Kubernetes
cluster, but the native solution is through Secrets. As Kubernetes
objects, one can create a simple manifest with key-value pair data and
later make it accessible to Pods through a built-in type of
volume specifically for Secret mounts.

There are multiple types of Kubernetes Secrets, but below is an example
of the _Opaque_ variant:

```
apiVersion: v1
kind: Secret
metadata:
  name: secret-example
data:
  credentials.json: ewogICJsb2dpbiI6ICJleGFtcGxlQGs4cy5pbyIsCiAgInBhc3N3b3JkIjogImV4YW1wbGUiCn0K
```

The data field contains the Base64 encoded string of the file
`credentials.json`, whose contents are:

```
{
  "login": "example@k8s.io",
  "password": "example"
}
```

It's important to notice that Kubernetes Secrets are stored unencrypted
on the API server storage provider, so ensure to encrypt it before
persisting the information to Kubernetes.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/configuration/secret)


---
sidebar_position: 26
---
# Not allowed hostPort

Linux containers are primarily made possible by two features. Cgroups, a
feature whose purpose is to control process resource usage such as CPU
and memory. And Namespaces, another kernel feature used to isolate
process trees from each other. Containers are designed to target tasks
specifically running in userspace, being a lightweight virtualization
method.

When the `hostPort` option is set, Kubernetes attempts to use the exact
port number on the host, decreasing the amount of nodes that Pod can be
scheduled. This occurs because every address within a network must be
unique, and since the `hostIP` and `protocol` options default to
`0.0.0.0` and `TCP` respectively, when not set, all nodes would end up
with the same address in case these options were left with their default
values. Furthermore, using the host's port directly also increases the
chances of clashes between host and containerized processes as they will
be constrained to the same port numbers.

When exposing a container process to the internet through a specific
port, use the `nodePort` option in conjunction with a Service instead of
`hostPort`. Beware the `nodePort` option only accepts values in the
range `[30000, 32767]` by default.

Following is an example of a NodePort Service:

```
apiVersion: v1
kind: Service
metadata:
  name: redis-svc
spec:
  selector:
    app: redis
  type: NodePort
  ports:
    - name: redis-svc-port
      protocol: TCP
      port: 6379
      nodePort: 30000

```

To let Kubernetes know whereto direct the incoming Service traffic, use
the `app` label in the Pod manifest as follows:

```
apiVersion: v1
kind: Pod
metadata:
  name: redis
  labels:
    app: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      ports:
        - containerPort: 6379
          name: redis-port
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/configuration/overview)


---
sidebar_position: 7
---

# Ports must be named

Kubernetes allows container ports to have identifiers on the Pod level.
These identifiers can later be used to reference the port through the
Service field `targetPort`. This ensures port references won't have to
be changed in case the program starts using a different port, be it due
to internal changes to the program or changes to the network where it
executes.

A port name can be specified through the `name` sub-field within the
`ports` section of a manifest as follows:

```
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      ports:
        - containerPort: 6379
          name: redis-port
```

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/services-networking/service/#field-spec-ports)


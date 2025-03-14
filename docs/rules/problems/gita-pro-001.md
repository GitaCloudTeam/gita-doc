---
sidebar_position: 1
---
# Limite de CPU deve ser definido (GITA-PRO-001)

A capacidade de processamento do CPU de um computador é um de seus
recursos limitados e deve ser utilizado de maneira consciente. Isto é
ainda mais relevante quando se trata de containers, uma vez que nesse
caso o CPU do host é compartilhado entre diversos processos complexos.

Para evitar que um container específico use uma quantia excessiva de
processamento do host, os Cgroups Linux permitem a configuração de
limites de consumo de CPU, podendo ser informados através de manifestos
Kubernetes.

Para definir esse limite, adicione um campo `resources` ao manifesto
como no exemplo abaixo:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      resources:
        limits:
          cpu: 2
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource)
do Kubernetes.

---
sidebar_position: 2
---
# Requisição para CPU deve ser definida (GITA-PRO-002)

A capacidade de processamento do CPU de um computador é um de seus
recursos limitados e deve ser utilizado de maneira consciente. Isto é
ainda mais relevante quando se trata de containers, uma vez que nesse
caso o CPU do host é compartilhado entre diversos processos complexos.

Para isso, utiliza-se das requisições de CPU. Ao se colocar pesos no
containers em execução, o scheduler de processos permitirá que
containers com peso maior consumam mais poder de processamento, e
vice-versa.

Tal peso pode ser especificado diretamente por meio de manifestos
Kubernetes. Para tal, adicione um campo `resources` ao manifesto
conforme o exemplo abaixo:

```yaml
apiVersion: v1
kind: pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      resources:
        requests:
          cpu: 3.0
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource)
do Kubernetes.

---
sidebar_position: 5
---
# Limites de memória devem ser definidos (GITA-PRO-005)

A memória de um computador é um dos seus recursos limitados e deve ser
utilizada de maneira consciente. Isto é ainda mais relevante em termos
de containers, uma vez que a memória do host será compartilhada entre
diversos processos complexos.

Para evitar que um container específico consuma uma quantia demasiada de
memória do host, os Cgroups Linux permitem a configuração de limites
rígidos para alocação de memória, que podem ser informados diretamente
por manifestos Kubernetes.

Para definir tal limite, adicione um campo `resources` ao manifesto
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
          memory: 200M
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource)
do Kubernetes.

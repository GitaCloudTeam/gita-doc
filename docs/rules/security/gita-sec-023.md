---
sidebar_position: 23
---
# Problema na remoção de Capabilities (GITA-SEC-023)

Capabilities são um conjunto específico de permissões do Linux
tradicionalmente reservadas ao usuário root, que foram estratificados em
privilégios separados, permitindo assim um controle mais refinado do que
cada processo pode fazer.

O Kubernetes possui um mecanismo interno para remover Capabilities de um
processo containerizado por meio de uma opção do security context.
Contudo, se Capabilities forem deixadas para trás, podem se tornar um
vetor para futuros ataques e exploits.

Para garantir que todas Capabilities sejam removidos de um processo
containerizado, utilize o valor `ALL` na lista de remoção. A seguir está
um manifesto de exemplo demonstrando como fazer isso:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: cowsay
spec:
  restartPolicy: Never
  containers:
    - name: cowsay
      image: rancher/cowsay:latest
      args: ["Security First!!"]
      securityContext:
        capabilities:
          drop: ["ALL"]
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container)
do Kubernetes.

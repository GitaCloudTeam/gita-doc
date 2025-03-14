---
sidebar_position: 4
---
# Probe de Liveness probe deve ser definida (GITA-PRO-004)

O Kubernetes possui um mecanismo interno para detectar se um container
está se comportando adequadamente, chamado Liveness Probe. Tal
mecanismo é implementado no componente Kubelet para detectar quando
programas começam a se comportam de maneira inapropriada, mas sem que
tenham travado, como ocorre em deadlocks e outros entraves que fazem com
que o programa se torne irresponsivo.

Quando o Kubelet detecta um container nesse estado, ele o reinicia em
uma tentativa de temporariamente restaurar sua funcionalidade por meio
de uma nova execução. Caso este mecanismo não seja habilitado, o
Kubernetes não terá como detectar containers irresponsivos.

Como realizar uma Liveness Probe depende muito do programa em
questão, mas um exemplo é disponibilizado abaixo:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      livenessProbe:
        exec:
          command:
            - redis-cli
            - ping
        initialDelaySeconds: 30
        timeoutSeconds: 5
        failureThreshold: 10
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes)
do Kubernetes.

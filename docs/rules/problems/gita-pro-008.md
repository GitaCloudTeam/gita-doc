---
sidebar_position: 8
---
# Probe de Readiness deve ser definida (GITA-PRO-008)

O Kubernetes possui um mecanismo interno para detectar se um container
foi iniciado corretamente e está pronto para começar a interagir com o
cluster. Este é denominado Readiness Probe.

Tal mecanismo é implementado no componente Kubelet para detectar caso
programas se tornem incapazes de atender requisições, seja por bugs,
configurações incorretas ou eventos externos que venham a interferir na
execução do programa.

Quando o Kubelet detecta um container nesse estado, ele remove seu Pod
do load balancer de Services, evitando assim que o tráfego chegue até o
mesmo. Caso este mecanismo não esteja habilitado, o Kubernetes não terá
como detectar programas indisponíveis.

Como realizar uma Readiness Probe depende muito do programa em questão,
mas um exemplo é dado abaixo:

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
        failureThreshold: 5
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes)
do Kubernetes.

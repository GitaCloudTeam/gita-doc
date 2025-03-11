---
sidebar_position: 6
---
# Requisição de memória deve ser definida (GITA-PRO-006)

A memória de um computador é um de seus recursos limitados. Em sistemas
clusterzidos Linux, processos complexos na forma de containers estão
constantemente competindo por este recurso. Além disso, dado que tais
processos podem executar tarefas que requerem quantidades distintas de
recursos, existe a necessidade de garantir que tal quantia estará
disponível.

Para isso se utiliza da requisição de memória. Ao se especificar quanta
memória um container pode precisar, o scheduler de processos pode
garantir que o container só inicialize caso a exata quantia esteja
disponível. De mesmo modo, o scheduler também utiliza o valor da
requisição para selecionar um node onde o container será executado,
o comparando com a memória disponível em cada um dos node.

Tal valor pode ser especificado diretamente em manifestos Kubernetes.
Para isso, adicione um campo `resources` ao manifesto conforme o exemplo
abaixo:

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
        requests:
          memory: 50M
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource)
do Kubernetes.

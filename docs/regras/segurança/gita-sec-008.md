---
sidebar_position: 8
---
# HostPort não permitido (GITA-SEC-008)

Containers Linux se tornam possíveis principalmente por duas
funcionalidades. Cgroups, funcionalidade cujo objetivo é controlar o uso
de recursos por processos, como CPU e memória. E Namespaces, outra
funcionalidade do kernel empregada para isolar árvores de processos umas
das outras. Containers foram desenvolvidos com foco em tarefas rodando
especificamente em userspace, sendo um método leve de virtualização.

Quando a opção `hostPort` é configurada, o Kubernetes tenta utilizar o
exato número de porta no host, diminuindo a quantidade de nodes em que o
Pod pode ser executado. Isso ocorre pois todo endereço dentro de uma
rede deve ser único, e como as opções `hostIP` e `protocol` tem os
valores padrão `0.0.0.0` e `TCP` respectivamente, quando não definidos,
todos nodes acabam com o mesmo endereço caso tais opções tenham
sido deixadas com o valores padrão. Além disso, utilizar-se
diretamente da porta do host também aumenta as chances de
conflito entre processos do host e dos containers, uma vez que
estes estariam restritos aos mesmos números de porta.

Para se expor um processo containerizado à internet em uma porta
específica , prefira a opção `nodePort` em conjunto com um Service em
vez da `hostPort`. Note que a opção `nodePort` só aceita valores no
intervalo `[30000, 32767]` por padrão.

A seguir está um exemplo de Service NodePort:

```yaml
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

Para que o Kubernetes saiba onde direcionar o tráfego recebido no
Service, use o label `app` no manifesto do Pod da seguinte maneira:

```yaml
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

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/configuration/overview)
do Kubernetes.

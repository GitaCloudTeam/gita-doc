---
sidebar_position: 14
---
# Filesystem root apenas com leitura (GITA-SEC-014)

Containers Linux se tornam possíveis principalmente por duas
funcionalidades. Cgroups, funcionalidade cujo objetivo é controlar o uso
de recursos por processos, como CPU e memória. E Namespaces, outra
funcionalidade do kernel empregada para isolar árvores de processos umas
das outras. Containers foram desenvolvidos com foco em tarefas rodando
especificamente em userspace, sendo um método leve de virtualização.

Outra característica dos containers é a de ausência de estado, ou seja,
não se espera que programas persistam dados dentro do container,
mas em vez disso, utilizem um mecanismo de armazenamento externo
como um banco de dados, volume ou backend de persistência de rede.

Uma vez que o filesystem de um container não é utilizável para
armazenamento, é se recomendado desativar operações de escrita no mesmo
para diminuir a superfície de ataque do container, já que programas
podem tirar proveito do filesystem para avançar um ataque.

Por padrão, o filesystem é criado no modo read-write, porém o Kubernetes
permite que esta configuração seja alterada através da opção do security
context `readOnlyRootFilesystem`. A seguir está um exemplo de como
utilizá-la:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      securityContext:
        readOnlyRootFilesystem: true
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)
do Kubernetes.

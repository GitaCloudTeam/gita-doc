---
sidebar_position: 6
---
# Namespaces do host não estão isolados (GITA-SEC-006)

Containers Linux se tornam possíveis principalmente por duas
funcionalidades. Cgroups, funcionalidade cujo objetivo é controlar o uso
de recursos por processos, como CPU e memória. E Namespaces, outra
funcionalidade do kernel empregada para isolar árvores de processos umas
das outras. Containers foram desenvolvidos com foco em tarefas rodando
especificamente em userspace, sendo um método leve de virtualização.

O namespace no qual um container é executado é controlado pela
runtime do container, que também permite o uso do namespace do host.
Quando isso ocorre, as propriedades de isolamento do container são
inutilizadas, uma vez que sua árvore de processos estará rodando
em conjunto com a do host.

O Kubernetes pode configurar a runtime do container para evitar o uso
dos namespaces de IPC, Rede e PID do host. A seguir está um exemplo
de como fazer isso por meio de um manifesto:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
  hostNetwork: false
  hostIPC: false
  hostPID: false
```

Outros namespaces como o de Mount e UTS ainda não são configuráveis
nativamente por meio do Kubernetes e devem ser gerenciados diretamente
pela runtime do container.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/security/pod-security-standards)
do Kubernetes.

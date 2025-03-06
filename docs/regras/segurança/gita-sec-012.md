---
sidebar_position: 12
---
# Container não deve ser privilegiado (GITA-SEC-012)

Containers Linux se tornam possíveis principalmente por duas
funcionalidades. Cgroups, funcionalidade cujo objetivo é controlar o uso
de recursos por processos, como CPU e memória. E Namespaces, outra
funcionalidade do kernel empregada para isolar árvores de processos umas
das outras. Containers foram desenvolvidos com foco em tarefas rodando
especificamente em userspace, sendo um método leve de virtualização.

Quando um container é executado em modo privilegiado, o mesmo possui
permissões equivalente ao usuário root do host, permitindo a este
acessar qualquer dispositivo, path ou recurso acessível através do
computador em que está sendo executado.

O modo privilegiado está desabilitado por padrão, no entanto, também é
possível desativá-lo explicitamente por meio de uma opção de manifestos
Kubernetes. Para tal, defina a opção de security context `privileged`
para `false` como no exemplo abaixo:

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
        privileged: false
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)
do Kubernetes.

---
sidebar_position: 13
---
# Tipo de mount proc proibido (GITA-SEC-013)

Containers Linux se tornam possíveis principalmente por duas
funcionalidades. Cgroups, funcionalidade cujo objetivo é controlar o uso
de recursos por processos, como CPU e memória. E Namespaces, outra
funcionalidade do kernel empregada para isolar árvores de processos umas
das outras. Containers foram desenvolvidos com foco em tarefas rodando
especificamente em userspace, sendo um método leve de virtualização.

Por padrão, paths específicos dentro do diretório `/proc` são mascarados
pela runtime do container de modo a evitar que dados do host
relacionados a dispositivos e outros componentes críticos sejam expostos
aos containers. No entanto, isso pode ser alterado por meio de
manifestos Kubernetes, definindo o valor `Unmasked` na opção de
security context `procMount`.

Para garantir que subdiretórios do `/proc` não sejam expostos aos
containers, omita a opção `procMount` ou defina-a explicitamente como
`Default`, assim como no exemplo abaixo:

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
        procMount: Default
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)
do Kubernetes.

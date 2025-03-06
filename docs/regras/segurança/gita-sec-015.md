---
sidebar_position: 15
---
# Container executando como root (GITA-SEC-015)

Containers Linux se tornam possíveis principalmente por duas
funcionalidades. Cgroups, funcionalidade cujo objetivo é controlar o uso
de recursos por processos, como CPU e memória. E Namespaces, outra
funcionalidade do kernel empregada para isolar árvores de processos umas
das outras. Containers foram desenvolvidos com foco em tarefas rodando
especificamente em userspace, sendo um método leve de virtualização.

Isso significa que efeitos colaterais de processos executados em
containers não devem atingir processos externos. No entanto, dado a
abrangência da funcionalidade Cgroups dentro do kernel, alguns
subsystems ainda não foram totalmente adaptados a este, ou podem conter
casos em que um processo containerizado pode acabar ignorando o
namespace de kernel.

Isso cria uma séria superfície de ataque para Cgroups, uma vez que um
processo containerizado executado como root pode acabar atuando como
root no host se um subsystem específico não diferenciar adequadamente a
origem do usuário do processo executado.

Para mitigar tal ameaça, o Kubernetes oferece uma opção para impedir que
qualquer processo de container seja executado com o usuário root. Para
habilitá-la, defina a opção do security context `runAsNonRoot` como
`true`, assim como o exemplo abaixo:

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
        runAsNonRoot: true
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/security/pod-security-standards)
do Kubernetes.

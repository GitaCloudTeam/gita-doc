---
sidebar_position: 17
---
# Container sem usuário especificado (GITA-SEC-017)

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

Utilizando-se do Docker como runtime do contêiner e não especificando um
usuário para o processo containerizado, fará com que este seja executado
como root por padrão. Se o grupo também for omitido, o mesmo também
será root.

Isso cria uma séria superfície de ataque para Cgroups, uma vez que um
processo containerizado executado como root pode acabar atuando como
root no host se um subsystem específico não diferenciar adequadamente a
origem do usuário do processo executado.

Para mitigar tal ameaça, o Kubernetes oferece uma opção para
impor um usuário e um grupo no processo containerizado. Para tal, defina
as opções do security context `runAsUser` e `runAsGroup` com ids
diferentes de 0, conforme o exemplo abaixo:

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
        runAsUser: 1000
        runAsGroup: 1000
        fsGroup: 1000
```

Também é útil definir a opção `fsGroup`, que fará com que todos os arquivos
criado no volume do container pertençam ao grupo especificado.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#set-the-security-context-for-a-pod)
do Kubernetes.

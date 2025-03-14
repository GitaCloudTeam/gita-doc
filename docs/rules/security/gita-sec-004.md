---
sidebar_position: 4
---
# Perfil AppArmor não autorizado (GITA-SEC-004)

AppArmor é um módulo do kernel Linux desenvolvido para harderning do
sistema contra o comportamento inadequado de processos. O módulo
monitora a atividade de um determinado processo e a compara com uma
lista de diretrizes de controle de acesso para paths e recursos, matando
o processo caso qualquer um destes seja violado. Tal conjunto de
diretrizes é denominado perfil.

O Kubernetes está no processo de integrar o AppArmor, mas no momento a
funcionalidade ainda está em estágio beta. Por este motivo, sua
configuração é feita através de anotações de Pod. Além disso, a anotação
só será utilizada caso o host tenha habilitado o AppArmor.

Ao se definir a anotação AppArmor como `unconfined`, o Kubernetes é
instruído a desativar o AppArmor para o processo em questão, o que
totalmente inutiliza a funcionalidade habilitada no host. Além disso, a
runtime do container ainda pode aplicar seu perfil AppArmor padrão,
mesmo com a anotação de desativação.

Caso seus nodes não carreguem perfis específicos para os processos
containerizados em execução neles, utilize o valor `runtime/default`
para o perfil AppArmor, como no exemplo abaixo:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
  annotations:
    container.apparmor.security.beta.kubernetes.io/redis: runtime/default
spec:
  containers:
    - name: redis
      image: redis:latest
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tutorials/security/apparmor)
do Kubernetes.

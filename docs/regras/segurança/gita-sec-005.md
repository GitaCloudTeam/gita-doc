---
sidebar_position: 5
---
# ServiceAccount token com mount automático (GITA-SEC-005)

Service Accounts são uma solução nativa do Kubernetes para controlar
autenticação, e quando utilizadas em conjunto com roles também permitem
o controle de acesso a recursos. Este faz uso de um JWT assinado para se
autenticar com o API Server, sendo normalmente gerado pelo Admission
controller.

Cada Pod tem uma Service Account, utilizando a padrão do namespace
quando não definida explicitamente. Uma vez que o container do Pod tenha
acesso ao token da Service Account, este ganha acesso total ao API do
Kubernetes, umas vez que pode se autenticar com o API Server. No
entanto, o único caso de uso onde um container exige acesso ao API do
Kubernetes é quando o mesmo irá interagir diretamente com o cluster e
seus recursos. Para programas que não se enquadram nesse caso de uso,
acesso ao token da Service Account apenas aumenta a superfície de
ataque do cluster.

Por esse motivo, os tokens de Service Account não são disponibilizados
para o container por padrão, mas podem ser configurados para tal
automaticamente através da opção `AutomountServiceAcCountToken`. Para
desativar explicitamente esta funcionalidade, defina a opção como
`false` da seguinte forma:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: example-sa
automountServiceAccountToken: false
```

A mesma opção também pode ser definida em manifestos de Pod, como pode
ser visto no exemplo abaixo:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
  automountServiceAccountToken: false
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account)
do Kubernetes.

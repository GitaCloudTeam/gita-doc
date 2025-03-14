---
sidebar_position: 9
---
# Acesso privilegiado ao node Windows (GITA-SEC-009)

Em nodes que executam Microsoft Windows, o Kubernetes fornece um
mecanismo para executar processos de containers com acesso direto à
rede, o filesystem e aos dispositivos do host. Isto pode aumentar a
superfície de ataque dos processos em questão, uma vez que se o processo
for comprometido, terá menos camadas separando-o do host.

Para desabilitar este mecanismo, defina a opção do security context
`hostProcess` para `false`, como no exemplo abaixo:

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
        windowsOptions
          hostProcess: false
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/create-hostprocess-pod)
do Kubernetes.

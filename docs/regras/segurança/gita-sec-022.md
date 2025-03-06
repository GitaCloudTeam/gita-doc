---
sidebar_position: 22
---
# SSH exposto (GITA-SEC-022)

O Secure Shell (SSH) é um protocolo para comunicação segura através de
uma rede, utilizando criptografia assimétrica para evitar que pessoas de
fora observem o que está sendo comunicado. O protocolo é amplamente
utilizado para acessar máquinas remotamente por meio de um shell
interativo, em alguns casos, permitindo acesso total ao sistema quando
logado como root. O SSH usa a porta 22 por padrão. A porta 2222 também é
comumente utilizada como alternativa quando a primeira está bloqueado.

Expor uma conexão SSH a um container para obter um shell remoto
inutilizará a autenticação do Kubelet, pois o Kubernetes não tem como
diferenciar entre trafego SSH dos demais. Assim inutilizando os
mecanismos de controle de acesso do Kubernetes.

Para se obter um shell remoto em um container, considere a ferramenta
Kubectl.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container)
do Kubernetes.

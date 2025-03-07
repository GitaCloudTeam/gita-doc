---
sidebar_position: 20
---
# Container com opções SELinux não permitidas (GITA-SEC-020)

SELinux é um módulo do kernel Linux que fornece mecanismos de Mandatory
Access Control (MAC), permitindo assim que administradores controlem
como um processo acessa recursos como arquivos e dispositivos. Em sua
essência está o mecanismo de políticas baseado em labels, de modo que
todos recursos do sistema, incluindo processos, possuam um label de
identificação. Isso permite a criação de políticas que habilitam ou
desabilitam o acesso a qualquer recurso com label, estas que serão
impostas uma vez passadas ao SELinux.

Labels são compostos por três partes: um tipo, um usuário e uma regra.
No entanto, se algum destes não estiver configurado corretamente, o
SELinux não conseguirá impor o controle de acesso.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context#assign-selinux-labels-to-a-container)
do Kubernetes.

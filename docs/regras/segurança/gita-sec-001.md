---
sidebar_position: 1
---
# Capabilities problemáticas (GITA-SEC-001)

Capabilities são um conjunto específico de permissões do Linux
tradicionalmente reservadas ao usuário root, que foram estratificados em
privilégios separados, permitindo assim um controle mais refinado do que
cada processo pode fazer.

Por padrão, a runtime do Docker adiciona algumas Capabilities aos
containers por ela criados. A seguir está uma lista das mesmas
juntamente aos privilégios que concedem:

- *AUDIT_WRITE:* escrever ao log de auditoria do kernel;
- *CHOWN:* alterar UIDs e GIDs de arquivos;
- *DAC_OVERRIDE:* ignorar verificações de Discretionary Access Control (DAC) para leitura, escrita e execução;
- *FDOWNER:*
  - ignorar verificações de posse de arquivos;
  - definir flags inode;
  - definir Access Control Lists (ACLs) para qualquer arquivo;
  - ignorar Sticky Bits de arquivos;
  - modificar Extended Attributes para qualquer usuário;
  - abrir arquivos sem alterar seu horário de último acesso;
- *FSETID:*
  - evitar que os bits SUID e SGID sejam apagados quando um arquivo é modificado;
  - definir SGID para arquivos com GIDs incompatíveis com o filesystem e o processo;
- *KILL:* ignorar verificações de envio de sinais;
- *MKNOD:* criar arquivos especiais;
- *NET_BIND_SERVICE:* vincular um socket a uma porta menor que 1024;
- *SETFCAP:* definir Capabilities de um arquivo;
- *SETGID:*
  - manipular GIDs de processos;
  - criar GIDs ao autenticar com sockets de domínio Unix;
  - escrever mapeamentos GID em namespaces de usuários;
- *SETPCAP:* conceder ou revogar qualquer Capability;
- *SETUID:*
  - manipular UIDs de processos;
  - criar UIDs ao autenticar com sockets de domínio Unix;
  - escrever mapeamentos UID em namespaces de usuários;
- *SYS_CHROOT:*
  - usar chroots;
  - manipular namespaces de mount;

O Kubernetes possui um mecanismo interno para integrar Capabilities a um
processo conteinerizado, através de suas configurações de security
context. Entretanto, é importante ressaltar que qualquer Capability
adicionada a um processo aumenta sua superfície de ataque juntamente com
seu potencial para escalada de privilégios.

A menos que o caso de uso de seu programa os exija, é recomendado
abandonar todas Capabilities adicionadas por padrão. Isto também pode
ser feito através do security context, que é exibido no manifesto
abaixo:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: cowsay
spec:
  restartPolicy: Never
  containers:
    - name: cowsay
      image: rancher/cowsay:latest
      args: ["Security First!!!"]
      securityContext:
        capabilities:
          drop: ["ALL"]
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container)
do Kubernetes.

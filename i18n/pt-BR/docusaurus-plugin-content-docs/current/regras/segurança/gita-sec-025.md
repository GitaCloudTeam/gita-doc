---
sidebar_position: 25
---
# Opção de sysctls inseguras (GITA-SEC-025)

Sysctl é uma ferramenta criada para configurar o kernel Linux em tempo
de execução, sobrepondo valores passados ao kernel como parâmetros
através de sua linha de comando, tal como pelo arquivo de configuração
`/etc/sysctl.conf`.

O Kubernetes possui um mecanismo interno para configurar o kernel Linux
por aproveitando da interface do sysctl. No entanto, a maioria das
configurações não seram isoladas ao namespace do container, criando
efeitos colaterais em todo o kernel. Isso cria uma grande superfície de
ataque que poderia ser usada para atacar o host tal como outros
containers .

Por este motivo, qualquer configuração além das listadas abaixo é
desencorajado de ser aplicada:

- `kernel.shm_rmid_forced`
- `net.ipv4.ip_local_port_range`
- `net.ipv4.ip_unprivileged_port_start`
- `net.ipv4.tcp_syncookies`
- `net.ipv4.ping_group_range`

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster)
do Kubernetes.

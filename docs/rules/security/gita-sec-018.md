---
sidebar_position: 18
---
# Perfil seccomp não autorizado (GITA-SEC-018)

Seccomp é uma funcionalidade do kernel Linux desenvolvida para minimizar
a exposição do kernel a processos de userland, de forma a restringi-los
a quatro syscalls, permitindo apenas operações de leitura, escrita,
retorno e saída. Recentemente, uma extensão desta funcionalidade foi
desenvolvida para possibilitar mais controle sobre quais syscalls
permitir ou bloquear, tirando proveito do Evolved Berkley Packet Filter
(EBPF) para tal. A extensão é denominada Seccomp BPF.

Com o Seccomp BPF, syscalls de um processo são comparados a uma lista de
filtragem, e caso tente invocar um item proibido, um sinal de violação
pode ser gerado ou o processo eliminado. Tal lista de filtragem é
denominada perfil Seccomp.

O Kubernetes permite habilitar o Seccomp BPF para processos
containerizados, desde que o kernel do host suporte a funcionalidade.
Porém, ao se usar a opção `Unconfined`, O Seccomp será completamente
desativado. Caso um perfil específico não tenha sido escrito para o
processo em questão, o Kubernetes carrega um lista de filtros que se
adequam bem à maioria dos casos de uso. Para habilitá-lo, defina a opção
`seccompProfile` para `RuntimeDefault` como no exemplo abaixo:

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
        seccompProfile:
          type: RuntimeDefault
```

Além disso, é possível fazer com que cada container seja executado com a
lista padrão de filtros. Para tal, inicie o componente Kubelet com a
flag `--seccomp-default` ou defina a opção equivalente em seu arquivo de
configuração.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/tutorials/security/seccomp)
do Kubernetes.

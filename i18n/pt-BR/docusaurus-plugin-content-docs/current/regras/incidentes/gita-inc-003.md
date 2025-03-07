---
sidebar_position: 3
---
# Kubelet não tem espaço em disco suficiente (GITA-INC-003)

O componente Kubelet do Kubernetes verifica proativamente o espaço em
disco e contagem de inodes dos nodes do cluster para agir assim que
qualquer um destes esteja acabando, de acordo com um limite chamado
eviction threshold. Este fenômeno é denominado _DiskPressure_.

Quando um node entra no estado de _DiskPressure_, alguns de seus Pods
são selecionado para serem eliminados, independentemente das
configurações `PodDisruptionBudget` e `terminationGracePeriodSeconds`.

Se um Pod necessitar de um período de desligamento graceful, o valor de
eviction threshold pode ser customizado através da configuração do
Kubelet `eviction-max-pod-grace-period`. Isto apenas é possível para
limites _soft_, especificados por meio da flag `--eviction-soft`.
Limites _hard_, especificados por meio da flag `--eviction-hard`, não
permitem desligamentos graceful, eliminando Pods imediatamente.

Parâmetros de configuração validos para o eviction threshold são:

- `nodefs.available`
- `nodefs.inodesFree`
- `imagefs.available`
- `imagefs.inodesFree`

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction)
do Kubernetes.

---
sidebar_position: 6
---
# Kubelet não tem PID disponível suficiente (GITA-INC-006)

O componente Kubelet do Kubernetes verifica proativamente os Process IDs
(PIDs) disponíveis nos nodes para agir assim que tal recurso esteja
acabando, de acordo com um limite chamado eviction threshold. Tal 
fenômeno é denominado _PIDPressure_.

Quando um node entra no estado de _PIDPressure_, alguns de seus Pods são
selecionado para serem eliminados, independentemente das configurações
`PodDisruptionBudget` e `terminationGracePeriodSeconds`.

Se um Pod necessitar de um período de desligamento graceful, o valor de
eviction threshold pode ser customizado através da configuração do
Kubelet `eviction-max-pod-grace-period`. Isto apenas é possível para
limites _soft_, especificados por meio da flag `--eviction-soft`.
Limites _hard_, especificados por meio da flag `--eviction-hard`, não
permitem desligamentos graceful, eliminando Pods imediatamente.

Valores de eviction threshold para PID podem ser customizados
através do parâmetro `pid.available`.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction)
do Kubernetes.

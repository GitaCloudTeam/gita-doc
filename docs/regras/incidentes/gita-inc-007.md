---
sidebar_position: 7
---
# Status do namespace é não active (GITA-INC-007)

O Kubernetes permite a organização de workloads e recursos por escopo
através de namespaces. Isso garante que objetos criados tenham um nome
único em seu escopo, assim evitando conflitos de nome e permitindo a
divisão de responsabilidades.

Namespaces assim como outros recursos do Kubernetes são representados
por objetos e possuem fases. Um namespace é marcado como _Active_
quando está sendo utilizado em todo o cluster e _Terminating_ ao ser
excluído. Além disso, problemas de rede que impeçam a chegada de um
namespace online também pode fazer com que este seja marcado não
_Active_.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces)
do Kubernetes.

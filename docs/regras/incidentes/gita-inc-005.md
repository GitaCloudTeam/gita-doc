---
sidebar_position: 5
---
# Status do Node é não ready (GITA-INC-005)

O componente Kubelet do Kubernetes verifica proativamente recursos
disponíveis nos nodes, como espaço em disco, memória e contagem de PID,
para agir assim que tais recursos estejam acabando, de
acordo com um limite chamado eviction threshold. 

Caso tais limites sejam atingidos, o node é marcado como _NotReady_, de
modo que novos Pods não serão aceitos no mesmo, e Pods atuais podem ser
eliminados em uma tentativa de mitigar o problema. Problemas de rede
também podem fazer com que um node se torne _NotReady_, seja por falta
de conectividade ou por comportamento inadequado do _kube-proxy_, uma
vez que o Kubernetes trata nodes inacessíveis como `unhealthy`.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/architecture/nodes)
do Kubernetes.

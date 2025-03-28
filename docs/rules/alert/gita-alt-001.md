---
sidebar_position: 1
---

# Pressão no disco de um Node Kubernetes

Nodes Kubernetes opera com espaço finito de disco, o qual é essencial para armazenar logs, arquivos temporários e outros dados do sistema. Quando esse espaço se torna criticamente baixo, o node entre em condição de "Disk Pressure", afetando potencialmente a performance e estabilidade do cluster como um todo.

Pressão no disco é tipicamente causada por falha no gerenciamento de recursos, logs excessivos ou uso não monitorado do armazenamento. Abordar esse problema com rapidez garante operações suaves e reduz riscos de interrupções nos serviços do cluster.

Para identificar e resolver *Disk pressure*, monitore o estado do node e certifique-se de que haja espaço suficiente no disco disponível.

Para mais informações, visite a documentação do Kubernetes.

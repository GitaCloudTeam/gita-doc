---
sidebar_position: 1
---
# Status do Container é unhealthy (GITA-INC-001)

Containers Docker possuem um mecanismo interno para detectar se um
programa está se comportando conforme esperado ou não. Este mecanismo é
denominado Health Check.

O Health Check deve ser especificado quando o container é construído,
através de um comando para atestar a integridade do programa em tempo
de execução. Isso faz com que o container carregue consigo um estado
de health, estando `healthy` quando passa na verificação e `unhealthy`
caso contrário.

Para mais informações, visite a
[documentação](https://docs.docker.com/engine/reference/builder/#healthcheck)
do Kubernetes.

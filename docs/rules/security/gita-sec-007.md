---
sidebar_position: 7
---
# Volume HostPath (GITA-SEC-007)

Volumes Kubernetes são uma solução nativa que fornece armazenamento
persistente e compartilhado para containers. Em termos simples, Volumes
são diretórios que são conhecidos pelo Kubernetes e podem ser conectados
a containers para leitura, escrita ou execução. Existem diversos tipos
de Volumes, cada um fornecendo o diretório em questão de sua maneira,
porém todos são utilizáveis através do mesmo mecanismo.

Volumes do tipo HostPath fazem mount de diretórios do host no
container, o que pode expor informações confidenciais sobre o node ou
servir como ponte para escalar privilégios caso o diretório em
questão contenha arquivos de configuração de sistema ou sockets.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/storage/volumes)
do Kubernetes.

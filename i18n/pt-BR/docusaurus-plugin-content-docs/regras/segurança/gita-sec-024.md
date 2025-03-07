---
sidebar_position: 24
---
# Tipo de Volume não permitido em uso (GITA-SEC-024)

Volumes Kubernetes são uma solução nativa que fornece armazenamento
persistente e compartilhado para containers. Em termos simples, Volumes
são diretórios que são conhecidos pelo Kubernetes e podem ser conectados
a containers para leitura, escrita ou execução. Existem diversos tipos
de Volumes, cada um fornecendo o diretório em questão de sua maneira,
porem todos são utilizáveis através do mesmo mecanismo.

No entanto, alguns Volumes dependem de conectividade a uma rede ou de
outros recursos frágeis, para serem provisionados ao Kubernetes, o que
poderia expor informações persistidas caso o tráfego não esteja
devidamente protegido ou o meio em questão falhe.

Por este motivo, é desencorajado utilizar tipos de Volume além daqueles
listados a seguir:

- `configMap`
- `csi`
- `downwardAPI`
- `emptyDir`
- `ephemeral`
- `persistentVolumeClaim`
- `projected`
- `secret`

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/storage/volumes)
do Kubernetes.

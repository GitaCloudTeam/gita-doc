---
sidebar_position: 10
---
# Impedir snippets em anotação do Ingress-Nginx contendo código LUA. Consulte CVE-2021-25742 (GITA-SEC-010)

Ingress é uma solução nativa do Kubernetes para rotear tráfego recebido
no cluster para serviços específicos de acordo com um conjunto de regras
de roteamento baseadas no path da solicitação. Existem diversas
implementações de controllers Ingress, onde o Ingress-Nginx é um dos
mais populares devido a sua compatibilidade com o Nginx, proxy robusto e
testado.

O controller Ingress-Nginx faz uso do _lua-nginx-module_ para incorporar
um interpretador Lua no proxy, permitindo assim que scripts configurem
regras de roteamento. Tal característica, no entanto, foi a porta de
entrada para a _CVE-2021-25742_, uma vulnerabilidade do Ingress-Nginx na
qual um usuário que possa criar ou atualizar objetos Ingress também é
capaz de utilizar scripts Lua por meio de anotações para obter todos os
Secrets de um cluster.

Para mitigar isso, remova quaisquer anotações com script Lua, atualize
para uma versão superior a v0.49.1 ou v1.0.1 e defina a opção de
configuração Nginx `allow-snippet-annotations` como `false`.

Para mais informações, visite a
[documentação](https://github.com/kubernetes/ingress-nginx/issues/7837)
do Kubernetes.

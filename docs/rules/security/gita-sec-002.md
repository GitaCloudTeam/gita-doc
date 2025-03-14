---
sidebar_position: 2
---
# *Registry* de imagem proibido

O Kubernetes aplica políticas rígidas sobre quais contêiner *registries* são permitidos no cluster. Usar imagens de *registries* não confiáveis ​​ou não verificados pode representar riscos de segurança significativos, como introduzir vulnerabilidades, código malicioso ou software sem manutenção no ambiente.

Por padrão, muitos clusters do Kubernetes são configurados com uma lista de permissões de *registries* confiáveis. Imagens de *registries* não incluídos nesta lista serão bloqueadas para serem removidas pelo *container runtime*.

## Motivos comuns para proibição de *registry* de imagem

1. ***Registry* não verificado:** O *registry* não está listado nas fontes confiáveis ​​da organização.
2. **Política desatualizada:** O *registry* foi removido da lista de permissões devido a atualizações de política.
3. **Potenciais ameaças:** O *registry* tem um histórico de hospedar imagens vulneráveis ​​ou maliciosas.

Para mais informações, visite a documentação do Kubernetes
[https://kubernetes.io/docs/concepts/containers/images)

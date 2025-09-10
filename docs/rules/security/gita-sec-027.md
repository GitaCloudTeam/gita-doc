---
sidebar_position: 27
---

# Image registries bloqueados (GITA-SEC-027)

Determinados registries ou caminhos de repositórios de imagens podem ser explicitamente bloqueados por política. Isso evita o uso de imagens provenientes de fontes com histórico de vulnerabilidades, conteúdo malicioso ou fora dos padrões de compliance da organização. 
 
A checagem extrai o registry/caminho da imagem (ex.: `docker.io/bitnami`, `quay.io`) e, se constar na lista de bloqueio, a imagem é sinalizada conforme a severidade configurada.

## Motivos para bloquear registries

1. **Histórico de risco**: registries/repositórios associados a malware, supply-chain attacks ou alta taxa de CVEs.
2. **Conformidade**: atendimento a requisitos internos, legais ou contratuais que proíbem certas origens.
3. **Padronização**: uso exclusivo de fontes curadas/espelhadas pela organização para garantir rastreabilidade e verificação.
4. **Redução de superfície de ataque**: menor probabilidade de introduzir imagens adulteradas ou não verificadas no cluster.

Para mais informações sobre imagens em Kubernetes, consulte a
[documentação](https://kubernetes.io/docs/concepts/containers/images).

---
sidebar_position: 6
---

# Uso do armazenamento do node excede o limite

Nodes Kubernetes requerem um determinado nível de disponibilidade de armazenamento para garantir a operação tranquila de processos do sistema e de cargas de trabalho. Quando a disponibilidade de armazenamento cai abaixo de um percentual definido (padrão sendo 20%) da capacidade total pode acarretar na degradação da performance ou falhas no sistema.

## Causas comuns

- Rápido crescimento em arquivos temporários e/ou logs
- - Estratégias de alocação ineficientes
- Uso de disco ao longo do tempo não monitorado.

Para mais informações sobre gerenciamento do armazenamento nos nodes, visite a [documentação do Kubernetes para armazenamento nos nodes](https://kubernetes.io/docs/concepts/storage/).

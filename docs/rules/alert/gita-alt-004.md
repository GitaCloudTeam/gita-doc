---
sidebar_position: 4
---

# Uso de PVC excede o limite

*Persistent Volume Claims* (PVCs) fornecem recursos de armazenamento para cargas de trabalho Kubernetes. Eficiência na utilização do armazenamento é crucial para manter a performance do sistema e evitar interrupções nos serviços.

Esse alerta identifica PVCs cujo armazenamento disponível esteja abaixo de um percentual definido (padrão sendo 20%) da capacidade total. Essa condições indicam que que os recursos de armazenamento estão próximos da exaustão, o que pode afetar a performance da aplicação ou até mesmo a interrupções.

## Causas comuns

- Aumento não-monitorado do uso de armazenamento
- Alocação de armazenamento ineficiente ou ausência de estratégia de monitoramento
- Cargas de trabalho de longa duração sem monitoramento suficiente dos recursos

Para mais informações sobre gerenciamento de cargas de trabalho, visite a [documentação do Kubernetes para armazenamento](https://kubernetes.io/docs/concepts/storage/)

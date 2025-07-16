---
sidebar_position: 31
---
# Como obter recomendações de recursos para workloads no GITA?

## A funcionalidade Recommendation do GITA permite que usuários obtenham recomendações de requests e limits de CPU e memória para workloads Kubernetes (como Deployments), baseando-se no consumo real observado em um determinado período. Isso ajuda a otimizar a alocação de recursos, evitando tanto o desperdício quanto a falta de recursos.

1. Acesse a Interface do seu Cluster no Gita:
    > ![image](/images/image206.png)
    >
    > ***Imagem 01: Painel - Seleção de Cluster***
    >
    > ![image](/images/image207.png)
    >
    > ***Imagem 02: Interface do Cluster***

2. Clique na seção **Health** na parte esquerda da tela de Interface:
    > ![image](/images/image208.png)
    >
    > ***Imagem 03: Seção Health***

3. Dentro da seção Health, clique na aba **Recommendations**:
    > ![image](/images/image210.png)
    >
    > ***Imagem 04: Aba Recommendations***

4. Na aba Recommendations, selecione o tipo de workload desejado para análise:
    > ![image](/images/image211.png)
    >
    > ***Imagem 05: Seleção do Workload***

5. Após a seleção do tipo de workload, selecione o namespace:
    > ![image](/images/image212.png)
    >
    > ***Imagem 06: Seleção do Namespace***

6. Agora escolha o nome do recurso para o qual deseja obter as recomendações:
    > ![image](/images/image213.png)
    >
    > ***Imagem 07: Seleção do Recurso***

7. Escolha o período de análise das recomendações (7, 14, 21 ou 28 dias):
    > ![image](/images/image214.png)
    >
    > ***Imagem 08: Seleção do Período de Análise - Period***

8. Por fim, clique no botão **Get Recommendation** para gerar a recomendação com base nos critérios já selecionados:
    > ![image](/images/image215.png)
    >
    > ***Imagem 09: Visualização - Botão Get Recommendation***

9. Após todos os passos, a recomendação será gerada:
    > ![image](/images/image216.png)
    >
    > ***Imagem 10: Visualização - Carregamento da Recomendação***
    >
    > Dependendo da recomendação, isso pode levar alguns minutos. Sendo assim, o usuário pode optar por sair da aba **Recommendations** e será notificado com uma mensagem assim que a recomendação for gerada. Então, basta clicar no botão **Go** para ser direcionado para a recomendação gerada:
    >
    > ![image](/images/image217.png)
    >
    > ***Imagem 11: Visualização - Alerta de Recomendação Gerada e Botão Go***
    >
    > ![image](/images/image218.png)
    >
    > ***Imagem 12: Visualização - Recomendação Gerada***

#### Legenda da Recomendação Gerada:

- **Current Request / Limit:** Valores atuais configurados para request e limit de CPU e memória no workload.
- **Recommended Request / Limit:** Valores sugeridos pelo GITA para request e limit, baseados no consumo real observado no período selecionado.
- **Usage Max / Mean:** Consumo máximo e médio observado de CPU (em millicores) e memória (em MiB) durante o período analisado.
- **Usage P95 / P99:** Percentis 95 e 99 do consumo, indicando que 95% ou 99% do tempo o consumo ficou abaixo desses valores.

Essas informações ajudam a ajustar os recursos do seu workload para evitar desperdício ou falta de recursos, tornando o uso do cluster mais eficiente.


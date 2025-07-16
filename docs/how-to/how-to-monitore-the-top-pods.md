---
sidebar_position: 32
---
# Como monitorar o uso de recursos dos pods de um cluster?

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

3. Dentro da seção Health, clique na seção **Top Pods**:
    > ![image](/images/image209.png)
    >
    > ***Imagem 04: Seção Top Pods***

4. Na aba Top Pods é possível visualizar o uso de memória e CPU dos pods do seu cluster com base em um "treemap" (mapa de árvore). Basta clicar na aba de **Memory** ou **CPU** dentro da seção Top Pods:
    > **O que é um treemap?**  
    > Um treemap é um tipo de visualização gráfica que utiliza retângulos proporcionais para representar dados hierárquicos ou quantitativos. No contexto do Gita, cada retângulo representa um pod, e o tamanho de cada retângulo indica o consumo de memória ou CPU daquele pod em relação aos demais. Assim, é possível identificar rapidamente quais pods estão consumindo mais recursos no cluster.
    >
    > ![image](/images/image219.png)
    >
    > ***Imagem 05: Visualização do "Treemap" - Consumo Memória***

    #### Legenda do Treemap de Uso de Memória
    No treemap **Memory**, cada retângulo representa o uso de memória de um pod do cluster. Ao passar o mouse sobre um pod, você verá informações detalhadas, como:
    - **Nome do Pod:** Identificação única do pod.
    - **Namespace:** Espaço lógico onde o pod está alocado.
    - **Memory Util:** Memória utilizada pelo pod (em MiB e em porcentagem).
    - **Memory Request:** Memória solicitada pelo pod.
    - **Memory Limit:** Limite máximo de memória permitido para o pod.

    > ![image](/images/image220.png)
    >
    > ***Imagem 06: Visualização do "Treemap" - Consumo CPU***

    #### Legenda do Treemap de Uso de CPU
    No treemap **CPU**, cada retângulo representa o uso de CPU de um pod do cluster. Ao passar o mouse sobre um pod, você verá informações detalhadas, como:
    - **Nome do Pod:** Identificação única do pod.
    - **Namespace:** Espaço lógico onde o pod está alocado.
    - **CPU Util:** CPU utilizada pelo pod (em millicores e em porcentagem).
    - **CPU Request:** CPU solicitada pelo pod.
    - **CPU Limit:** Limite máximo de CPU permitido para o pod.

#### Esquema de Cores dos Treemaps
Os treemaps utilizam um esquema de cores para indicar o nível de uso de memória (ou CPU) de cada pod, facilitando a identificação visual de pods que estão consumindo mais recursos:

- **Verde**:  
  O uso de recurso está baixo (menos de 40%). Indica que o pod está utilizando pouca memória/CPU e está dentro de uma faixa segura.

- **Amarelo**:  
  O uso de recurso está moderado (entre 40% e 59%). Indica atenção, pois o consumo está aumentando, mas ainda não é crítico.

- **Laranja**:  
  O uso de recurso está alto (entre 60% e 79%). Indica alerta, pois o pod está consumindo uma quantidade significativa de memória/CPU e pode se aproximar do limite.

- **Vermelho**:  
  O uso de recurso está muito alto (80% ou mais). Indica risco, pois o pod está próximo do limite de memória/CPU e pode sofrer throttling ou ser reiniciado pelo cluster.

5. Na aba Top Pods, além da visualização dos treemaps, logo abaixo é possível analisar o uso de Memória ou CPU dos pods do cluster por meio de uma tabela detalhada. Essa tabela permite filtrar os pods de acordo com alguns parâmetros e ordená-los de forma crescente (**Asc**) ou decrescente (**Desc**), facilitando a identificação dos pods que mais consomem recursos:
    > ![image](/images/image221.png)
    >
    > ***Imagem 07: Visualização - Filtros de Consumo de Memória e CPU***
    >
    > ![image](/images/image222.png)
    >
    > ***Imagem 08: Visualização - Botão de Ordenação do Pods com Base nos Filtros***
    >
    > ![image](/images/image223.png)
    >
    > ***Imagem 09: Visualização - Seleção de Ordenação Asc e Desc***


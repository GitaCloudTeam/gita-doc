---
sidebar_position: 35
---
# Como inspecionar eventos de auditoria no GITA? 

A aba Audit do GITA permite visualizar e rastrear todas as ações relevantes realizadas dentro do cluster, como alterações de configurações, criação ou remoção de recursos e eventos administrativos. Ela funciona como um registro histórico que facilita auditorias, investigação de problemas e verificação de conformidade. Com esses dados, é possível entender quem fez o quê, quando, e qual foi o impacto no ambiente, garantindo maior transparência e segurança operacional.

1. A partir da [página inicial](https://app.gita.cloud/home), selecione o cluster da organização no qual deseja consultar os eventos de auditoria:  
   > ![image](/images/image252.png)  
   >
   > ***Imagem 01: Painel principal – Seleção de cluster***

2. No menu lateral esquerdo, acesse a aba **Audit**:  
   > ![image](/images/image253.png)  
   >
   > ***Imagem 02: Menu lateral – Acesso ao Audit***

3. Ao acessar o módulo Audit, será possível ver a área principal de exibição dos eventos de auditoria do cluster.  
   Na parte superior da tela, estão disponíveis os filtros a seguir:  
   - **Namespace**  
   - **Kind** (tipo do recurso, como Pod, Deployment, Job etc.)  
   - **Verb** (ação executada: CONNECT, CREATE, DELETE ou UPDATE)  
   - **User** (usuário ou service account responsável)  
   - **Intervalo de datas**  
   - **Search** (busca textual livre)  
   - **Botão de Refresh** (atualiza os resultados da pesquisa)  
   > ![image](/images/image254.png)  
   >
   > ***Imagem 03: Filtros no módulo Audit***

   Utilize a busca, ajuste e combinação dos filtros para localizar eventos específicos.

4. Quando houver eventos registrados no cluster, eles aparecerão em forma de lista na área central da tela.  
   Cada item de evento inclui:  
   - Data e hora da ação  
   - Tipo de ação (Verb) 
   - Usuário ou service account  
   - Recurso afetado  
   - Name
   - Namespace  
   > ![image](/images/image255.png)  
   >
   > ***Imagem 04: Visualização de eventos com filtros aplicados***

5. Caso nenhum dado esteja disponível conforme os filtros aplicados, o Audit exibirá a mensagem:  
   **“There is no content to show”**  
   > ![image](/images/image256.png)  
   >
   > ***Imagem 05: Lista de eventos vazia***

6. No rodapé da tela, é possível visualizar:  
   - Total de registros retornados  
   - Controle de quantidade de linhas por página (**Rows per page**)  
   - Navegação entre páginas para visualizar mais eventos
   > ![image](/images/image257.png)  
   >
   > ***Imagem 06: Controles de paginação***




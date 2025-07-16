---
sidebar_position: 30
---
# Como adicionar permissionamento de acesso por CIDR a um Cluster no GITA?

O permissionamento por CIDR (Classless Inter-Domain Routing) é uma forma de controle de acesso baseada em uma faixa de endereços IP pertencentes a uma rede. Essa funcionalidade permite definir blocos CIDR, sendo possível autorizar o acesso a um Cluster no GITA apenas a endereços IP desejados. 

## Como adicionar um CIDR?

1. Acesse a sua Home do GITA:
    > ![image](/images/image187.png)
    >
    > ***Imagem 01: Home - Visualização das Organizações***

2. Clique em **Configurações** (engrenagem) à direita da organização em que deseja adicionar o permissionamento:
    > ![image](/images/image188.png)
    >
    > ***Imagem 02: Home - Conifigurações da Organização***

3. Será direcionado para a seção **Settings** da Organização:
    > ![image](/images/image189.png)
    >
    > ***Imagem 03: Seção Settings***

4. Na aba Settings, selecione a opção **Security** para visualizar os CIDR's já adicionados para cada Cluster (caso existam):
    > ![image](/images/image190.png)
    >
    > ***Imagem 04: Seção Security***

5. Para adicionar um novo CIDR, clique em **Add CIDR** no Cluster desejado:
    > ![image](/images/image191.png)
    >
    > ***Imagem 05: Visualização - Allowed CIDR***

6. Na aba ***Add CIDR***, preencha a lacuna **IP Address** com o CIDR escolhido e clique em ***Add***:
    > ![image](/images/image192.png)
    >
    > ***Imagem 06: Painel Add CIDR - Ip Address***
    >
    > ![image](/images/image193.png)
    >
    > ***Imagem 07: Painel Add CIDR - Botão Add***


7. Adicione um descrição em **Description** se julgar necessário:
    > ![image](/images/image194.png)
    >
    > ***Imagem 08: Painel Add CIDR - Description***

8. Clique em **Save** para salvar as especificações do CIDR adicionado:
    > ![image](/images/image195.png)
    >
    > ***Imagem 09: Opção - Save***

9. Ao ser adicionado, será exibida uma mensagem na tela - *Success* - indicando que a operação foi bem sucedida, e será possível visualizar o CIDR adicionado no respectivo Cluster: 
    > ![image](/images/image196.png)
    >
    > ***Imagem 10: Visualização - CIDR Adicionado***

10. O usuário que tentar entrar com um endereço IP fora da faixa do CIDR adicionado, vai ter o IP bloqueado e não conseguirá acessar o Cluster em questão:
    > ![image](/images/image197.png)
    >
    > ***Imagem 11: Home - Visualização IP bloqueado***


## Como atualizar CIDR adicionado?

1. Acesse a sua Home do GITA:
    > ![image](/images/image187.png)
    >
    > ***Imagem 01: Home - Visualização das Organizações***

2. Clique em **Configurações** (engrenagem) à direita da organização em que deseja atualizar o permissionamento:
    > ![image](/images/image188.png)
    >
    > ***Imagem 02: Home - Conifigurações da Organização***

3. Será direcionado para a seção **Settings** da Organização:
    > ![image](/images/image189.png)
    >
    > ***Imagem 03: Seção Settings***

4. Na aba Settings, selecione a opção **Security** para visualizar os CIDR's já adicionados para cada Cluster:
    > ![image](/images/image190.png)
    >
    > ***Imagem 04: Seção Security***

5. Para atualizar um CIDR, clique no símbolo de edição ao lado do CIDR que deseja alterar:
    > ![image](/images/image198.png)
    >
    > ***Imagem 05: Visualização - Edição***

6. Na aba ***Update CIDR***, preencha a lacuna **IP Address** com o CIDR atualizado:
    > ![image](/images/image199.png)
    >
    > ***Imagem 06: Painel Update CIDR - Ip Address***

7. Atualize também a descrição em **Description** se julgar necessário:
    > ![image](/images/image200.png)
    >
    > ***Imagem 07: Painel Update CIDR - Description***

8. Clique em **Save** para salvar as especificações do CIDR atualizado:
    > ![image](/images/image201.png)
    >
    > ***Imagem 08: Opção - Save***

9. Após a atualização, será exibida uma mensagem na tela - *Success* - indicando que a operação foi bem sucedida, e será possível visualizar o CIDR atualizado no respectivo Cluster: 
    > ![image](/images/image202.png)
    >
    > ***Imagem 09: Visualização - CIDR Atualizado***


## Como excluir CIDR adicionado?

1. Acesse a sua Home do GITA:
    > ![image](/images/image187.png)
    >
    > ***Imagem 01: Home - Visualização das Organizações***

2. Clique em **Configurações** (engrenagem) à direita da organização em que deseja adicionar o permissionamento:
    > ![image](/images/image188.png)
    >
    > ***Imagem 02: Home - Conifigurações da Organização***

3. Será direcionado para a seção **Settings** da Organização:
    > ![image](/images/image189.png)
    >
    > ***Imagem 03: Seção Settings***

4. Na aba Settings, selecione a opção **Security** para visualizar os CIDR's já adicionados para cada Cluster (caso existam):
    > ![image](/images/image190.png)
    >
    > ***Imagem 04: Seção Security***

5. Para excluir um CIDR adicionado, clique no símbolo de exclusão (lixeira) ao lado do CIDR escolhido:
    > ![image](/images/image203.png)
    >
    > ***Imagem 05: Visualização - Exclusão***

6. Clique em ***Remove*** para confirmar a remoção do CIDR escolhido:
    > ![image](/images/image204.png)
    >
    > ***Imagem 06: Painel de Confirmação - Botão Remove***
    >

7. Ao ser excluído, o CIDR será removido da tela de exibição: 
    > ![image](/images/image205.png)
    >
    > ***Imagem 07: Visualização - Allowed CIDR***

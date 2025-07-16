---
sidebar_position: 30
---
# Como personalizar uma imagem do cluster no GITA?

## Personalizar uma imagem do cluster no GITA permite escolher a versão das probes utilizadas, usar imagens do seu próprio registry (privado, interno ou com permissões específicas do cluster) e ter total controle sobre configurações e versões dos containers, garantindo compatibilidade e segurança conforme suas necessidades.

1. Acesse a Interface do seu Cluster no Gita:
    > ![image](/images/image206.png)
    >
    > ***Imagem 01: Painel - Seleção de Cluster***
    >
    > ![image](/images/image207.png)
    >
    > ***Imagem 02: Interface do Cluster***

2. Clique na seção **Configuration** na parte esquerda da tela de Interface:
    > ![image](/images/image230.png)
    >
    > ***Imagem 03: Seção Configuration***

3. Dentro da seção Configuration, clique na aba **Installation**:
    > ![image](/images/image231.png)
    >
    > ***Imagem 04: Aba Installation***

4. Na aba Installation, é possível visualizar as versões das imagens do cluster:
    > ![image](/images/image232.png)
    >
    > ***Imagem 05: Visualização - Versionamento***

    **Explicação sobre as versões exibidas:**
    
    Para cada componente do cluster, são exibidas duas informações de versão:
    
    - **Current Version:** Indica a versão da imagem atualmente em uso no seu cluster.
    - **Latest Version:** Indica a versão mais recente disponível para aquele componente.
    
    Se a versão atual estiver diferente da mais recente, normalmente será destacado em vermelho, indicando que há uma atualização disponível. Manter as imagens atualizadas é importante para garantir acesso a correções de bugs, melhorias de segurança e novas funcionalidades.

5. Para adicionar uma imagem personalizada, clique na aba **Advanced**:
    > ![image](/images/image233.png)
    >
    > ***Imagem 06: Aba Advanced***

6. Na aba Advanced, é possível visualizar as imagens atualmente utilizadas pelo cluster:
    > ![image](/images/image234.png)
    >
    > ***Imagem 07: Visualização - Imagens do Cluster***

7. Identifique o local onde deseja adicionar a nova imagem personalizada no cluster. Para isso, remova a imagem atual clicando no botão de exclusão (**X**):
    > ![image](/images/image235.png)
    >
    > ***Imagem 08: Visualização - Botão de Exclusão***

8. Após remover a imagem, caso mude de ideia, é possível restaurá-la clicando no botão de retroceder. Para continuar com a adição de uma nova imagem personalizada, digite o endereço da imagem desejada no campo apropriado e clique em **Create** para salvar a alteração:
    > ![image](/images/image236.png)
    >
    > ***Imagem 09: Visualização - Botão de Retroceder***
    >
    > ![image](/images/image237.png)
    >
    > ***Imagem 10: Visualização - Adição de Nova Imagem***
    >
    > ![image](/images/image238.png)
    >
    > ***Imagem 11: Visualização - Create***

9. Clique no botão **Save** para salvar a alteração da imagem e aguarde a finalização do processo:
    > ![image](/images/image239.png)
    >
    > ***Imagem 12: Visualização - Botão de Salvamento***
    >
    >  ![image](/images/image240.png)
    >
    > ***Imagem 13: Visualização - Confirmação de Salvamento***

9. Para que as alterações de imagem sejam efetivamente aplicadas ao cluster, é necessário executar, no terminal, os comandos exibidos na tela, seguindo a ordem apresentada. Utilize o botão de cópia ao lado de cada comando para facilitar o processo: copie, cole e execute cada comando no terminal, um de cada vez, até concluir os passos indicados. Após a conclusão desses passos, as novas imagens serão aplicadas ao cluster:
    > ![image](/images/image241.png)
    >
    > ***Imagem 14: Visualização - Comandos***
    >
    > ![image](/images/image242.png)
    >
    > ***Imagem 15: Visualização - Botão de Cópia***


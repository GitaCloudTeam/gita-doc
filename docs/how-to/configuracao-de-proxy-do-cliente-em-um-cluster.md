---
sidebar_position: 14
---

# Configuração de Proxy do Cliente em um Cluster

Este documento descreve o procedimento para configurar um proxy do cliente em um cluster, seja durante a adição do cluster ou posteriormente, via configurações.

## Opção 1: Durante a Adição do Cluster

1. Escolha sua organização.
2. Acesse o painel inicial da organização e clique em **Add Cluster**.
   ![imagem](/images/image033.png)
3. Insira o nome do cluster e clique em **Next**.
   ![imagem](/images/image034.png)
4. Para configurar o proxy, clique em **Add Proxy**.
   ![imagem](/images/image035.png)
5. Preencha os campos obrigatórios do proxy que são essenciais para definir como a comunicação será roteada através do proxy.
   ![imagem](/images/image036.png)
   - **Proxy Host** Http/Https (Indicativo se a conexão terá criptografia ou não)
   - **Proxy Host** (Campo para definir o hostname ou IP proxy)
   - **Proxy Port** (Define o canal de comunicação com o proxy.)
   - **Proxy User** (campo armazena o nome de usuário necessário para se autenticar no proxy.)
   - **Proxy Password**(Senha correspondente ao nome de usuário)
6. Revise as configurações inseridas e clique em **Next**.
   ![Revisão da Configuração](/images/image038.png)
7. Caso queira habilitar logs e execução remota, ative as opções:
   - **Enable Logs**: Permite visualizar logs de aplicações no cluster.
   - **Enable Exec**: Permite executar comandos remotamente no cluster.

   ![Habilitação de Logs e Execução Remota](/images/image037.png)
8. No canto inferior esquerdo, clique em **Create** para concluir a configuração.
   ![Criação do Cluster](/images/image040.png)

---

## Opção 2: Após Adicionar o Cluster

1. Acesse o menu no canto superior esquerdo e abra a navbar.
   ![Criação da Configuração do Proxy](/images/image046.png)
2. Navegue até **Configuration → Settings**.
   ![Criação da Configuração do Proxy](/images/image041.png)
3. Clique na aba **Proxy**.
   ![Criação da Configuração do Proxy](/images/image042.png)
4. Preencha os detalhes do proxy conforme os requisitos.
   Podendo consultar detalhes do preenchimento dos campos na sessão [1.5](#detalhamento).
5. Clique em **Create Configuration**.
   ![Criação da Configuração do Proxy](/images/image043.png)
6. Aguarde a mensagem de sucesso confirmando a configuração.
   ![Confirmação de Configuração](/images/image044.png)

---

## Remover Proxy

1. Acesse **Configuration → Settings**.
   ![Remoção do Proxy](/images/image041.png)
2. Selecione a aba **Remover Proxy**.
   ![Remoção do Proxy](/images/image045.png)
3. Clique na opção **Remover Proxy**.
   ![Remoção do Proxy](/images/image047.png)
4. Confirme a remoção e aguarde a notificação de sucesso.
   ![Remoção do Proxy](/images/image049.png)

---

### Recomendações

- Certifique-se de que as credenciais do proxy estejam corretas antes de aplicá-las.
- Caso o proxy exija autenticação, valide se o método de autenticação está compatível com a sua infraestrutura.
- Após a configuração, teste a conectividade para garantir que o proxy foi corretamente implementado.

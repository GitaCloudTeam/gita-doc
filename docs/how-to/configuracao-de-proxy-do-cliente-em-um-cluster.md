# Configuração de Proxy do Cliente em um Cluster

Este documento descreve o procedimento para configurar um proxy do cliente em um cluster, seja durante a adição do cluster ou posteriormente, via configurações.

## Opção 1: Durante a Adição do Cluster

1. Escolha sua organização.
2. Acesse o painel inicial da organização e clique em **Add Cluster**.
   >![](./img/1.1.1.png)
   >
   >Imagem 01: Botão Add Cluster
3. Insira o nome do cluster e clique em **Next**.
   >![](./img/1.2.2.png)
   >
   >Imagem 02: Botão Next
4. Para configurar o proxy, clique em **Add Proxy**.
   >![](./img/1.3.3.png)
   >
   >Imagem 03: Tela - Configuração Proxy



5. <a id="detalhamento"></a> Preencha os campos obrigatórios do proxy que são essenciais para definir como a comunicação será roteada através do proxy.

   >![](./img/1.4.4.png)
   >
   >Imagem 04: Formulário de configuração

   - **Proxy Host** Http/Https (Indicativo se a conexão terá criptografia ou não)- **Proxy Host** (Campo para definir o hostname ou IP proxy)
   - **Proxy Port** (Define o canal de comunicação com o proxy.)
   - **Proxy User** (campo armazena o nome de usuário necessário para se autenticar no proxy.)
   - **Proxy Password**(Senha correspondente ao nome de usuário)

6.  Revise as configurações inseridas e clique em **Next**.

      >![Revisão da Configuração](./img/1.6.6.png)
      >
      >Imagem 05: Botão para avançar
   

7. Caso queira habilitar logs e execução remota, ative as opções:
   - **Enable Logs**: Permite visualizar logs de aplicações no cluster.
   - **Enable Exec**: Permite executar comandos remotamente no cluster.

   >![Habilitação de Logs e Execução Remota](./img/1.5.5.png)
   >
   >Imagem 06: Habilitação de Logs e Execução Remota

8. No canto inferior esquerdo, clique em **Create** para concluir a configuração.

   >![Criação do Cluster](./img/1.8.8.png)
   >
   >Imagem 07: Criação do Cluster

---

## Opção 2: Após Adicionar o Cluster

1. Acesse o menu no canto superior esquerdo e abra a navbar.
   >![Criação da Configuração do Proxy](./img/3.1.png)
   >
   >Imagem 01: Botão canto superior esquerdo, aba menu lateral

2. Navegue até **Configuration → Settings**.
   >![Criação da Configuração do Proxy](./img/2.2.2.png)
   >
   >Imagem 02: Tela - Indicação de seleção
3. Clique na aba **Proxy**.
   >![Criação da Configuração do Proxy](./img/2.3.3.png)
   >
   >Imagem 03: Opção de configuração Proxy
4. Preencha os detalhes do proxy conforme os requisitos.
   Podendo consultar detalhes do preenchimento dos campos na sessão [1.5](#detalhamento).
5. Clique em **Create Configuration**.
   >![Criação da Configuração do Proxy](./img/2.4.4.png)
   >
   >Imagem 04: Indicação de botão para criação do Proxy

1. Aguarde a mensagem de sucesso confirmando a configuração.

   >![Confirmação de Configuração](./img/2.5.5.png)
   >
   >Imagem 05: Imagem representando sucesso na configuração

---

## Remover Proxy

1. Acesse **Configuration → Settings**.
   >![Remoção do Proxy](./img/2.2.2.png)
   >
   >Imagem 01:  Indicação de seleção
2. Selecione a aba **Remover Proxy**.
   >![Remoção do Proxy](./img/3.1.1.png)
   >
   >Imagem 02: Botão de remoção da configuração Proxy
3. Clique na opção **Remover Proxy**.
   >![Remoção do Proxy](./img/3.2.2.png)
   >
   >Imagem 03: Tela - confirmação de delete da configuração
4. Confirme a remoção e aguarde a notificação de sucesso.

   >![Remoção do Proxy](./img/3.3.3.png)
   >
   >Imagem XX: Imagem representando sucesso na remoção

---

### Recomendações

- Certifique-se de que as credenciais do proxy estejam corretas antes de aplicá-las.
- Caso o proxy exija autenticação, valide se o método de autenticação está compatível com a sua infraestrutura.
- Após a configuração, teste a conectividade para garantir que o proxy foi corretamente implementado.

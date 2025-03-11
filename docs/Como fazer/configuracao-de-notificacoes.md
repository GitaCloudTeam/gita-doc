# Configuração de Notificações

Este documento descreve como criar um canal de notificação no Gita que permite que o sistema envie alertas automáticos de acordo com as regras definidas para o cluster. Isso garante que eventos críticos, avisos ou informações importantes sejam entregues aos responsáveis no momento certo. A configuração do canal envolve a seleção de eventos, períodos de recebimento e o meio pelo qual a notificação será enviada (ex.: Mattermost, Slack, Webhook, etc.).

---

## Habilitando Notificações

1. Acesse a Interface do Sistema  
2. Escolha a Organização. Selecione a organização onde deseja criar o canal.
3. Selecione o Cluster Correspondente Escolha o cluster que receberá as notificações.  
   > ![Configuração de Notificações](/images/image072.png)
   >
   > ***Imagem 01: Painel principal - Organização***

### 4. Acesse o Menu Lateral

No canto superior esquerdo, abra o menu lateral.  
   > ![Configuração de Notificações](/images/image073.png)
   >
   > ***Imagem 02: Painel principal - Destaque barra lateral***

### 5. Vá para Configuration → Notifications

Acesse as configurações de notificação do sistema.  
   > ![Configuração de Notificações](/images/image074.png)
   >
   > ***Imagem 03: Configurações - Destaque 'Notificações'***

### 6. Clique em "Create Channel"

Inicie a criação do canal de notificação.  
   > ![Configuração de Notificações](/images/image075.png)  
   >
   > ***Imagem 04: Configurações - Destaque 'Create Channel'***

### 7. Escolha os Eventos a Serem Monitorados

- Selecione os eventos que deseja associar ao canal com base na criticidade.  
- Utilize os filtros disponíveis na interface para refinar a seleção.  
   > ![Configuração de Notificações](/images/image076.png)
   >
   > ***Imagem 05: Configurações - Seleção de filtros***

   > ![Configuração de Notificações](/images/image077.png)  
   >
   > ***Imagem 06: Configurações - Destaque 'Alertas'***

### 8. Confirme as Regras e Prossiga

- Após definir as regras desejadas, clique em "Next" no canto superior direito.  
   > ![Configuração de Notificações](/images/image078.png)
   >
   > ***Imagem 07: Configurações - Destaque botão 'Next'***

### 9. Configure o Período de Recebimento das Notificações

- Defina os dias da semana e os horários em que deseja receber notificações.  
   > ![Configuração de Notificações](/images/image079.png)  
   >
   > ***Imagem 08: Configurações - Definição de intervalo***

### 10. Ajuste os Intervalos de Notificação

- Configure horários específicos dentro dos dias selecionados.  
- Caso precise excluir um intervalo, clique no ícone da lixeira.  
- Após definir os horários corretamente, clique em "Next".  
   > ![Configuração de Notificações](/images/image080.png)
   >
   > ***Imagem 09: Configurações - Intervalo da notificação***

### 11. Configure o Canal de Notificação  

- Escolha o canal para o qual as notificações serão enviadas (E-mail, Webhook, etc.).

### Preencha os seguintes campos

- Nome da Notificação: Nome descritivo para identificação do canal.  
- Destino: E-mail, URL do Webhook ou outro meio de recebimento.  
- Grace Period (seconds): Tempo de persistência do evento antes do envio da notificação.  

Após preencher os campos, clique em "Save" para concluir.  
   > ![Configuração de Notificações](/images/image081.png)
   >
   > ***Imagem 10: Configurações - Destaque botão 'Save'***

### 12. Confirme a Ativação das Notificações

Aguarde a mensagem de sucesso confirmando que as notificações estão ativas.  
   > ![Confirmação de Configuração](/images/image082.png)
   >
   > ***Imagem 11: Configurações - Destaque 'Mensagem de sucesso'***

---

## Editando Notificações

1. Acesse o painel de gerenciamento de notificações.
2. Localize a notificação que deseja editar.
3. Clique no ícone de três pontos ao lado da notificação desejada.
   > ![Localizar Notificação](/images/image086.png)
   >
   > ***Imagem 12: Configurações - Notificações***

4. Escolha a opção Edit.
   > ![Localizar Notificação](/images/image091.png)
   >
   > ***Imagem 13: Painel principal - Destaque 'Cluster'***
5. Modifique os parâmetros desejados, como:
   - Tipos de eventos monitorados.
   - Canais de comunicação.
   - Regras de período de disparo da notificação.
6. Salve as alterações e aguarde a notificação de edição bem sucedida.
   > ![Teste de Notificação](/images/image090.png)
   >
   > ***Imagem 14: Configurações - Destaque 'Mensagem indicando sucesso'***

---

## Excluindo Notificações

1. Acesse o painel de gerenciamento de notificações.
2. Localize a notificação que deseja excluir.
3. Clique no ícone de três pontos ao lado da notificação desejada.
   > ![Localizar Notificação](/images/image086.png)
   >
   > ***Imagem 15: Configurações - Notificações***
4. Escolha a opção Delete e confirme a ação.
   > ![Excluir Notificação](/images/image087.png)
   >
   > ***Imagem 16: Configurações - Ações para notificações***
5. Confirme a exclusão e a notificação será excluída imediatamente.
   > ![Confirmação de Exclusão](/images/image088.png)
   >
   > ***Imagem 17: Caixa de Diálogo - Confirmar deleção do canal***

---

## Boas Práticas

- Ative notificações apenas para eventos críticos para evitar sobrecarga de alertas.
- Revise periodicamente as configurações para garantir que apenas eventos relevantes sejam notificados.
- Utilize canais de comunicação distintos para diferentes tipos de alertas.
- Teste a configuração após qualquer alteração para garantir que as notificações estão sendo entregues corretamente.
- Documente quais eventos estão sendo monitorados, garantindo que a equipe esteja alinhada.
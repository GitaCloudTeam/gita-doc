---
sidebar_position: 23
---
# Criando uma Regra Customizada

Este Procedimento descreve como criar uma regra customizada.

As regras são políticas configuradas no cluster para garantir boas práticas de configuração, segurança e alocação de recursos. Elas ajudam a manter o ambiente estável, seguro e conforme as recomendações do Kubernetes.

---

## Criar uma Regra Customizada

1. **Acesse a interface do sistema.**
2. **Escolha a organização** onde deseja criar a regra.
3. **Selecione o cluster** correspondente.
   > ![Acessando Configuration Rules](/images/image053.png)
   >
   > ***Imagem 01: Painel principal - Cluster***
4. No menu do canto superior esquerdo, vá para **Configuration → Rules**.
   > ![Acessando Configuration Rules](/images/image054.png)
   >
   > ***Imagem 02: Painel principal - Destaque 'Acesso Barra Lateral'***
   > ![Criando nova regra](/images/image055.png)
   >
   > ***Imagem 03: Painel principal - Configurações***
5. Clique em **Create Rule**.
   > ![Escolha de Template](/images/image056.png)
   >
   > ***Imagem 04: Configurações - Destaque 'Rules'***
6. Escolha o **template** customizável(**generic check**) no motor de busca ou filtro de criticidade para criar a regra.
   > ![Escolha de Template](/images/image057.png)
   >
   > ***Imagem 05: Configurações - Templates para Regras***
7. É mostrada as opções de configurações do template, clique em **Select** para continuar ou em **Previous** para retornar ao menu anterior de escolha do template.
   > ![Opções de edição](/images/image069.png)
   >
   > ***Imagem 06: Configurações - Informações sobre a regra***
8. Se precisar trocar o template após a escolha, clique em **Change Template**.
   > ![Trocar template](/images/image059.png)
   >
   > ***Imagem 07 Configurações - Destaque 'Change Template':***
9. Preencha os campos:
   - **Enable**: Define se a regra estará ativa ou não.
   - **Severity**:Representa o nível de criticidade da regra, que pode variar de **LOW (Baixa) a CRITICAL (Crítica).**
   - **Namespace Allow List**: Define quais namespaces podem ser afetados por essa regra.
   - **Exclude Pattern Name**: Permite excluir recursos específicos da aplicação da regra.
   - **Exclude Pattern Namespace**: Permite excluir namespaces específicos da aplicação da regra.
   - **Name**: Nome descritivo para a regra.
   - **Custom Message**: Mensagem que será exibida quando a regra for violada.
   - **Kind**: O tipo de recurso Kubernetes ao qual a regra será aplicada (ex.: Pod, Deployment, Service).
   - **Path**: Caminho específico no manifesto do recurso onde a regra será aplicada
   - **Operator**: Operador lógico usado para avaliar a regra
   - **Expected Value**: O valor esperado no campo definido pelo Path.

10. Após revisar, clique em **Save**
   > ![Confirmação de criação](/images/image071.png)
   >
   > ***Imagem 08: Configurações - Destaque 'Save'***
11. Aguarde a mensagem **Item Created**, confirmando a criação da regra.
   > ![Confirmação de criação](/images/image061.png)
   >
   > ***Imagem 09: Configurações - Mensagem indicando sucesso***

---

## Excluir Regra

1. Acesse **Configuration → Rules**.
   > ![Acessando Regras](/images/image064.png)
   >
   > ***Imagem 10: Painel principal - Cluster***
2. Localize a regra que deseja excluir.
3. Clique no ícone **três pontos** ao lado da regra.
   > ![Localizar Regra](/images/image065.png)
   >
   > ***Imagem 11: Configurações - Lista de regras***
4. Escolha a opção **Delete**.
   > ![Excluir Regra](/images/image066.png)
   >
   > ***Imagem 12: Configurações - Destaque 'Delete rule'***
5. Apos a confirmação "**Delete** regra será **excluída imediatamente**, sem confirmação adicional.
   > ![Confirmação de exclusão](/images/image068.png)
   >
   > ***Imagem 13: Caixa de diálogo - Delete rule***

---

### Boas Práticas

- **Nomeie as regras** de maneira clara e padronizada.
- **Defina severidade** corretamente para evitar alertas irrelevantes.
- **Revise as regras antes de salvar** para garantir que todas as configurações estão corretas.
- **Utilize templates** adequados para facilitar a configuração.
- **Tenha cuidado ao excluir regras**, pois a ação é irreversível.
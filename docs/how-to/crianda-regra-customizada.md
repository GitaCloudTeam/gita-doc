# Criando uma Regra Customizada

Este Procedimento descreve como criar uma regra customizada.
As regras são políticas configuradas no cluster para garantir boas práticas de configuração, segurança e alocação de recursos. Elas ajudam a manter o ambiente estável, seguro e conforme as recomendações do Kubernetes.
---

## Criar uma Regra Customizada

1. **Acesse a interface do sistema.**
2. **Escolha a organização** onde deseja criar a regra.
3. **Selecione o cluster** correspondente.
   >![Acessando Configuration Rules](./img/1.1.1.png)
   >
   >Imagem 01: Tela - Escolha do cluster
4. No menu do canto superior esquerdo, vá para **Configuration → Rules**.

   >![Acessando Configuration Rules](./img/1.3.3.png)
   >
   >Imagem 02: Acesso as configurações de rules

5. Clique em **Create Rule**.

   >![Criando nova regra](./img/1.4.4.png)
   >
   >Imagem 03: Botão de criação de rule

6. Escolha o **template** customizável(**generic check**) no motor de busca ou filtro de criticidade para criar a regra.

   >![Escolha de Template](./img/1.5.5.png)
   >
   >Imagem 04: Tela - escolha de template para regra

7. É mostrada as opções de configurações do template, clique em **Select** para continuar ou em **Previous** para retornar ao menu anterior de escolha do template.

   >![Opções de edição](./img/3-correção-.png)
   >
   >Imagem 05: Tela - seleção de template

8. Se precisar trocar o template após a escolha, clique em **Change Template**.

   >![Trocar template](./img/1.7.7.png)
   >
   >Imagem 06: Botão de troca de template

9.  Preencha os campos:
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

10. Após revisar, clique em **Save**.

      >![Confirmação de criação](./img/3.1-correcao.png)
      >
      >Imagem 07: Botão de confirmação para salvar a rule
11.  Aguarde a mensagem **Item Created**, confirmando a criação da regra.

      >![Confirmação de criação](./img/1.9.9.png)
      >
      >Imagem 08: Mensagem de criação de rule

---

## Excluir Regra

1. Acesse **Configuration → Rules**.

   >![Acessando Regras](./img/2.3.3.png)
   >
   >Imagem 01: Acesso as configurações de rules

2. Localize a regra que deseja excluir.
3. Clique no ícone **três pontos** ao lado da regra.

   >![Localizar Regra](./img/2.4.4.png)
   >
   >Imagem 02: Indicativo de botão para interação com a rule

4. Escolha a opção **Delete**.

   >![Excluir Regra](./img/2.5.5.png)
   >
   >Imagem 03: Indicativo de botão para deletar a rule

5. Apos a confirmação "**Delete** regra será **excluída imediatamente**, sem confirmação adicional.

   >![Confirmação de exclusão](./img/2.7.7.png)
   >
   >Imagem 04: Tela - confirmação para deletar rule

---

### Boas Práticas

- **Nomeie as regras** de maneira clara e padronizada.
- **Defina severidade** corretamente para evitar alertas irrelevantes.
- **Revise as regras antes de salvar** para garantir que todas as configurações estão corretas.
- **Utilize templates** adequados para facilitar a configuração.
- **Tenha cuidado ao excluir regras**, pois a ação é irreversível.

---
sidebar_position: 1
---
# GITA - Visão Geral

## Sumário

- [GITA - Visão Geral](#gita---visão-geral)
  - [Sumário](#sumário)
  - [O que é o GITA?](#o-que-é-o-gita)
  - [Como é organizado?](#como-é-organizado)
  - [Quais as principais funcionalidades?](#quais-as-principais-funcionalidades)
  - [Recursos interessantes no GITA que você irá gostar!](#recursos-interessantes-no-gita-que-você-irá-gostar)
  - [Quais são os componentes do GITA no cluster cliente?](#quais-são-os-componentes-do-gita-no-cluster-cliente)
  - [Quais as formas de uso do GITA?](#quais-as-formas-de-uso-do-gita)
  - [Como funcionam os papéis e as permissões?](#como-funcionam-os-papéis-e-as-permissões)
  - [Organização Permissões](#organização-permissões)
  - [Organização Ações](#organização-ações)
  - [Cluster Permissões](#cluster-permissões)
  - [Clusters Ações](#clusters-ações)

## O que é o GITA?

GITA é um gerenciador de Kubernetes, baseado em boas práticas. Com ele, você consegue ver quais melhorias podem ser feitas nas suas cargas de trabalho (workloads).
Ele também acompanha os eventos do cluster, bem como alertas e incidentes.

## Como é organizado?

Existem duas entidades no GITA, que são: Organização e Cluster. Uma Organização é um conjunto de um ou mais clusters. E um Cluster é um cluster Kubernetes. Importante salientar que o ente financeiro é a Organização.

Este é um exemplo de visão de Organização:

![organização](/images/00.png)

Este é um exemplo de visão de dashboard de um Cluster:

![dashboard](/images/01.png)

## Quais as principais funcionalidades?

O GITA possui:

- **Saúde**: São verificações que indicam como está a saúde do cluster e das cargas de trabalho (workloads). São divididos em Evento, Alertas e Incidentes.
- **Eventos**: Os eventos de um cluster Kubernetes são notificações automáticas geradas pelo sistema Kubernetes para descrever algo que aconteceu ou está acontecendo no cluster. Eles são uma forma de monitorar o comportamento dos recursos e ações dentro do cluster, ajudando os administradores e operadores a diagnosticar problemas e entender o que está acontecendo.
- **Alertas**: São gerados em situações que merecem atenção, mas não está impactando (ainda) o cluster, Por exemplo: Uso de disco acima de 90%. Existem regras pré-definidas de alertas no Gita. Acesse [Alertas](https://doc.GITA.cloud/docs/category/alert) para ver maiores detalhes.
- **Incidentes**: Indicam indisponibilidade ou problemas críticos no cluster kubernetes. Exemplo: Um workload indisponível. Exemplos de regras de incidentes podem ser vistas na [documentação](https://doc.GITA.cloud/docs/category/incident).
- **Misconfigurations**: São configurações incorretas, inadequadas ou inseguras que podem levar a falhas operacionais, vulnerabilidades de segurança, ou problemas de desempenho no cluster. Elas são geralmente causadas por erros humanos, falta de conhecimento ou negligência na configuração de recursos e políticas do Kubernetes. Essas falhas podem impactar a segurança, a estabilidade e a confiabilidade do cluster e das aplicações executadas nele.
- **Segurança**: São configurações incorretas que impactam a segurança do cluster, podendo abrir vulnerabilidades. Exemplo são cargas de trabalho com Recursos Excessivos ou Privilegiados. Exemplos de regras podem ser vistos na [documentação oficial](https://doc.GITA.cloud/docs/category/security)
- **Conformidade**: São configurações incorretas nos recursos Falta de Limites de Recursos (Resource Limits): Pods sem limites de CPU e memória podem consumir todos os recursos disponíveis do Node. Outro exemplo comum é Deployments Sem Readiness ou Liveness Probes: Aplicações que falham não são reiniciadas ou removidas adequadamente. Exemplos de regras de conformidade podem ser vistos na [documentação oficial](https://doc.GITA.cloud/docs/category/problem).
- **Linha do tempo**: Na nossa experiência notamos que, em média, 87% dos incidentes de um cluster são oriundos de alguma alteração - importantíssimo encontrar o que foi alterado! A timeline possibilita a visualização de tudo que foi alterado no cluster em determinado período de tempo. Função especialmente criada para você ter a visibilidade de causa e efeito.
- **Notificações**: ##### TODO ######
- **Inventário**: No inventário você tem acesso aos Workloads, Storage e Services do Kubernetes. Você pode editar (YAML) os objetos. No caso de PODS, você pode acessar a console e os logs.

## Recursos interessantes no GITA que você irá gostar!

Vamos lá, temos alguns recursos bem legais que serão muito úteis para você no seu dia a dia. Seguem os recursos:

- Árvore gráfica de recursos;
- Gerenciamento de workload, services, etc…;
- Acesso a console de pod;
- Acesso a console de cluster;
- Acesso a logs de pod em tempo real;
- Comparação de recursos do cluster(entre clusters e dentro do mesmo cluster);
- Visão de recursos computacionais (cpu e RAM);
- Acompanhamento de Eventos do Cluster;
- Importação de YAML;
- ACK (acompanhamento da equipe);
- Visualizar e editar qualquer recurso do Kubernetes;
- IA generativa para insights de eventos do cluster;
- Eventos e notificações para saúde e misconfigurations (segurança e geral).
  
## Quais são os componentes do GITA no cluster cliente?

Os seguintes deployments são implantados no cluster cliente:

- `gita-api-manager` (opcional) - Permite o gerenciamento do cluster, deletar pod, editar, importar yml.
- `gita-probe` - Captura eventos, workloads, services, ingress e storage (pv, pvc, storage class, configmap, secret, etc..)
- `gita-probe-logs` (opcional) - Visualização de logs de pods.
- `gita-probe-resources` - Possibilita o gerenciamento dos recursos do cluster
- `gita-probe-shell-stream` (opcional) - Permite instanciar console nos pods

## Quais as formas de uso do GITA?

Existem duas possibilidades: Você pode usar no modelo SaaS ou no modelo On Premises. No caso de modelo On Premises, entre em contato para realizar o orçamento. Nosso email é contato@jackexperts.com.br.

## Como funcionam os papéis e as permissões?

Para Organizações

| Permissões                                     | owner | admin | analista | viewer | billing |
|------------------------------------------------|:-----:|:-----:|:--------:|:------:|:-------:|
| Criar organização                              |   X   |   X   |    X     |   X    |    X    |
| Listar organizações em que o usuário está      |   X   |   X   |    X     |   X    |    X    |
| Deletar organização                            |   X   |       |          |        |         |
| Listar usuários da organização                 |   X   |   X   |          |        |         |
| Mudar nome da organização                      |   X   |   X   |          |        |         |
| Adicionar usuário na organização               |   X   |   X   |          |        |         |
| Adicionar usuário como billing ou owner na organização |   X   |       |          |        |         |
| Deletar usuário da organização                 |   X   |   X   |          |        |         |
| Deletar usuário que é billing ou owner da organização |   X   |       |          |        |         |
| Mudar permissão do usuário                     |   X   |   X   |          |        |         |
| Mudar permissões do usuário para billing ou owner |   X   |       |          |        |         |
| Criar cluster                                  |   X   |   X   |          |        |         |
| Lista clusters da organização                  |   X   |   X   |          |       |    x     |
| Ver painel de billing                          |   X   |   X   |          |        |    X    |


Clusters

| Permissões                                        | owner | admin | analista | viewer |
|---------------------------------------------------|:-----:|:-----:|:--------:|:------:|
| Instalar cluster                                  |   X   |   X   |          |        |
| Lista usuários do cluster                         |   X   |   X   |          |        |
| Buscar informações do cluster                     |   X   |   X   |    X     |   X    |
| Deletar cluster                                   |   X   |       |          |        |
| Alterar nome do cluster                           |   X   |   X   |          |        |
| Adicionar usuário ao cluster como admin ou viewer |   X   |   X   |          |        |
| Adicionar usuário ao cluster como owner           |   X   |       |          |        |
| Deletar usuário do cluster se ele for (admin ou viewer) |   X   |   X   |          |        |
| Deletar usuário do cluster se ele for (owner)     |   X   |       |          |        |
| Mudar permissão do usuário se ele for (admin ou viewer) |   X   |   X   |          |        |
| Mudar permissão do usuário se ele for (owner)     |   X   |       |          |        |
| Buscar status do cluster                          |   X   |   X   |    X     |   X    |
| Desabilitar cluster                               |   X   |   X   |          |        |
| Habilitar cluster                                 |   X   |   X   |          |        |
| Console do cluster (terminal)                     |   X   |   X   |    X     |        |
| Acesso ao logs de pods                            |   X   |   X   |    X     |        |
| Console de pod (terminal)                         |   X   |   X   |    X     |        |
| Criar, deletar, alterar objetos do cluster via YAML |   X   |   X   |    X     |        |
| Criar, deletar e alterar notificações             |   X   |   X   |    X     |        |
| Criar, deletar e alterar regras                   |   X   |   X   |    X     |        |

## Organização Permissões

- **owner**: Proprietário da organização com acesso total.
- **admin**: Administrador com acesso quase total, exceto por algumas ações reservadas ao proprietário.
- **analista**: Permissão somente de visualização.
- **viewer**: Permissão somente de visualização.
- **billing**: Acesso relacionado a faturamento.

## Organização Ações

**Owner**:

- Editar e Excluir organização;
- Adicionar, remover, editar e listar usuários da organização;
- Adicionar, remover,editar e listar clusters;
- Visualizar total da organização;
- Acesso ao faturamento;
- Owner de todos os clusters da respectiva organização;

**Admin**:

- Editar organização;
- Adicionar, remover, editar( exceto owner ) e listar usuarios da organizacao;
- Adicionar, remover,editar e listar clusters;
- Visualizar organização;
  
**Billing**:

- Acesso ao faturamento
- Listar clusters da organização
- Visualizar organização

**Viewer**:

- Visualizar organização

## Cluster Permissões

- **owner**: Proprietário do cluster com acesso total.

- **admin**: Administrador com acesso quase total, exceto por algumas ações reservadas ao proprietário.

- **viewer**: Permissão somente de visualização.

## Clusters Ações

**Owner**:

- Instalar cluster
- Adicionar, remover, editar e listar usuários do cluster
- Editar e Deletar cluster
- Habilitar e Desabilitar cluster
- Visualizar cluster
- Acesso ao faturamento

**Admin**:

- Editar cluster
- Instalar cluster
- Adicionar, remover, editar( exceto owner ) e listar usuários do cluster
- Habilitar e Desabilitar cluster
- Visualizar cluster

**Viewer**:

- Visualizar cluster

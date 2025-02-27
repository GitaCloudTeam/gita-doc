---
sidebar_position: 1
---

# Utilização do Gita

## Guia para gerenciamento de incidentes no Kubernetes

Esse guia explica como utilizar o **Gita** para gerenciar incidentes, melhores práticas, e coleta de dados em clusters Kubernetes. O processo todo envolve: configurar um cluster, executar comandos de instalação no terminal e gerenciar os dados de incidentes coletados.

## Sumário

- [Utilização do Gita](#utilização-do-gita)
  - [Guia para gerenciamento de incidentes no Kubernetes](#guia-para-gerenciamento-de-incidentes-no-kubernetes)
  - [Sumário](#sumário)
  - [1. Introdução ao Gita](#1-introdução-ao-gita)
  - [2. Fluxo de configurações](#2-fluxo-de-configurações)
    - [2.1. Adicionar um cluster](#21-adicionar-um-cluster)
    - [2.2. Instalar o Gita em um cluster](#22-instalar-o-gita-em-um-cluster)
  - [3. Boas práticas](#3-boas-práticas)
  - [4. Coleta de incidentes](#4-coleta-de-incidentes)
  - [5. Acessando os dados coletados](#5-acessando-os-dados-coletados)
  - [6. Conclusão](#6-conclusão)

---

## 1. Introdução ao Gita

Gita é uma ferramenta desenhada para auxiliar a gestão de incidentes, rastreio de eventos e coleta de dados de saúde e performance em clusters Kubernetes. Ele facilita a detecção, análise e resolução de incidentes em tempo real enquanto promove boas práticas na administração do cluster.

&nbsp;

## 2. Fluxo de configurações

&nbsp;

### 2.1. Adicionar um cluster

1. Criar um novo usuário:
   - Acesse a [página de cadastro do Gita](https://app.gita.cloud/register) para criar uma nova conta.
   - Preencha os campos requeridos, nome, e-mail, senha, etc.

2. Acessar a página da organização:
   - Conecte-se à plataforma Gita e navegue até a página da sua organização

3. Adicionar um novo cluster:
   - Na página da organização, acione o botão **"Add Cluster"**.
   - Insira as informações requeridas sobre o cluster (nome, URL de acesso, etc.) e clique em "Save".

4. Redirecionar para a página de instalação:
    - Após adicionar o cluster, você será redirecionado para a página de instalação.

&nbsp;

### 2.2. Instalar o Gita em um cluster

1. Acesse a página de instalação:
   - Nessa página, você verá o comando específico de instalação do Gita específico para o seu cluster

    > Nota: Clusters diferentes terão comandos diferentes. Muita atenção na instalação.

2. Execute o comando de instalação:
    - No terminal do seu cluster Kubernetes, execute o comando fornecido pela página de instalação.
    - Esse comando irá automatizar o download e a configuração do Gita no cluster, conectando-o à plataforma e configurando as permissões necessárias para coleta de dados de incidentes.

3. Verifique a instalação:
    - Após executar os comandos, um ícone de **OK** será exibido na página de instalação do cluster, indicando o sucesso na operação.

---

## 3. Boas práticas

- **Gerenciamento de Recursos:** Sempre defina os limits de recursos para pods e contêineres no seu cluster. Isso ajuda a prevenir incidentes causados pelo consumo excessivo de memória e/ou CPU.
- **Atualizações Regulares:** Mantenha atualizados o Gita e os outros componentes do seu cluster Kubernetes. Sempre use a última versão do Gita para assegurar que você tem as mais avançadas funcionalidades para coleta de dados de incidentes.
- **Monitoramento Proativo:** Use o gita para configurar alertas e monitoramento em tempo real. Isso ajuda a identificar problemas antes que se tornem incidentes críticos.
- **Análises pós-incidentes:** Após resolver os incidentes, sempre realize uma análise detalhada usando os relatórios gerados pelo Gita para entender a raiz do problema e prevenir incidentes futuros.

---

## 4. Coleta de incidentes

- **Coleta de logs e métricas automatizadas:** Gita coleta logs e métricas detalhados do seu cluster, includindo:
  - Logs de de sistema e de aplicações,
  - Métricas de uso de CPU e memória,
  - Status de pods e contêineres,
  - Histórico de eventos críticos.
- **Análise armazenamento:** Todos os dados coletados são armazenados em um sistema centralizado, permitindo uma análise profunda para detectar padrões e potenciais incidentes.
- **Notificações de incidentes:** Quando um incidente é detectado, Gita pode enviar automaticamente notificações via email, Slack ou qualquer outro canal de comunicações configurável.

---

## 5. Acessando os dados coletados

1. **Acessando a interface Gita:**
   - Para visualizar os dados coletados e gravar os incidentes, conecte-se à interface web do Gita.
2. **Visualização de incidentes:**
   - Na página principal, você verá o painel contendo todos os incidentes recentes. Incidentes são classificados de acordo com sua severidade (crítica, alta, média ou baixa) e com a categoria (aplicação, rede, infraestrutura)
3. **Análise de dados:** Clique em um incidente específico para ter acesso aos logs, m´tricas e diagnósticos detalhados gerados pelo Gita. O sistema pode sugerir soluções baseadas em aprendizado de máquina para ajudar a solucionar o problema rapidamente.

---

## 6. Conclusão

O Gita é uma ferramente que simplifica o gerenciamento e análise de incidentes em cluster Kubernetes, dando ao usuário uma visão clara da saúde e da performance do ambiente. Ao seguir as boas práticas indicadas para instalação, monitoramento e coleta, você pode melhorar, significantemente, a disponibilidade e performance do seu cluster.

---
sidebar_position: 14
---
# Client Proxy Configuration in a Cluster

This document describes the procedure for configuring a client proxy in a cluster, either during cluster addition or later, via settings.

## Option 1: During Cluster Addition

1. Choose your organization.
2. Access the organization's initial panel and click on **Add Cluster**.
   > ![imagem](/images/image033.png)
   >
   > ***Image 01: Main panel - Highlight 'Add cluster'***
3. Enter the cluster name and click **Next**.
   > ![imagem](/images/image034.png)
   >
   > ***Image 02: Dialog box - Cluster addition***
4. To configure the proxy, click on **Add Proxy**.
   > ![imagem](/images/image035.png)
   >
   > ***Image 03: Dialog box - cluster information***
5. Fill in the required proxy fields that are essential to define how communication will be routed through the proxy.
   > ![imagem](/images/image036.png)
   >
   > ***Image 04: Dialog box - Proxy information***
   - **Proxy Host** Http/Https (Indicates whether the connection will have encryption or not)
   - **Proxy Host** (Field to define the proxy hostname or IP)
   - **Proxy Port** (Defines the communication channel with the proxy.)
   - **Proxy User** (field stores the username needed to authenticate with the proxy.)
   - **Proxy Password** (Password corresponding to the username)
6. Review the inserted settings and click **Next**.
   > ![Revisão da Configuração](/images/image038.png)
   >
   > ***Image 05: Dialog box - proxy information***
7. If you want to enable logs and remote execution, activate the options:
   - **Enable Logs**: Allows viewing application logs in the cluster.
   - **Enable Exec**: Allows executing commands remotely in the cluster.

   > ![Habilitação de Logs e Execução Remota](/images/image037.png)
   >
   > ***Image 06: Cluster addition - permission options***
8. In the bottom left corner, click **Create** to complete the configuration.
   > ![Criação do Cluster](/images/image040.png)
   >
   > ***Image 07: Dialog box - Highlight 'Create' button***

---

## Option 2: After Adding the Cluster

1. Access the menu in the top left corner and open the navbar.
   > ![Criação da Configuração do Proxy](/images/image046.png)
   >
   > ***Image 08: Main panel - Cluster***
2. Navigate to **Configuration → Settings**.
   > ![Criação da Configuração do Proxy](/images/image041.png)
   >
   > ***Image 09: Main panel - Highlight settings***
3. Click on the **Proxy** tab.
   > ![Criação da Configuração do Proxy](/images/image042.png)
   >
   > ***Image 10: Settings - Highlight 'Proxy'***
4. Fill in the proxy details according to the requirements.
   You can check the details of filling in the fields in section [1.5](#detalhamento).
5. Click on **Create Configuration**.
   > ![Criação da Configuração do Proxy](/images/image043.png)
   >
   > ***Image 11: Settings - Proxy Information***
6. Wait for the success message confirming the configuration.
   > ![Confirmação de Configuração](/images/image044.png)
   >
   > ***Image 12: Settings - Message indicating success***

---

## Remove Proxy

1. Access **Configuration → Settings**.
   > ![Remoção do Proxy](/images/image041.png)
   >
   > ***Image 13: Panel - Highlight 'Settings'***
2. Select the **Remove Proxy** tab.
   > ![Remoção do Proxy](/images/image045.png)
   >
   > ***Image 14: Settings - Highlight 'Remove Proxy'***
3. Click on the **Remove Proxy** option.
   > ![Remoção do Proxy](/images/image047.png)
   >
   > ***Image 15: Dialog box - Confirm proxy removal***
4. Confirm the removal and wait for the success notification.
   > ![Remoção do Proxy](/images/image049.png)
   >
   > ***Image 16: Panel - Highlight 'Message indicating success'***

---

### Recommendations

- Make sure the proxy credentials are correct before applying them.
- If the proxy requires authentication, validate if the authentication method is compatible with your infrastructure.
- After configuration, test connectivity to ensure the proxy was properly implemented. 
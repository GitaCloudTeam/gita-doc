---
sidebar_position: 23
---
# Creating a Custom Rule

This Procedure describes how to create a custom rule.

Rules are policies configured in the cluster to ensure good practices for configuration, security and resource allocation. They help maintain a stable, secure environment in accordance with Kubernetes recommendations.

---

## Creating a Custom Rule

1. **Access the system interface.**
2. **Choose the organization** where you want to create the rule.
3. **Select the corresponding cluster**.
   > ![Acessando Configuration Rules](/images/image053.png)
   >
   > ***Image 01: Main panel - Cluster***
4. In the top left menu, go to **Configuration → Rules**.
   > ![Acessando Configuration Rules](/images/image054.png)
   >
   > ***Image 02: Main panel - Highlight 'Sidebar Access'***
   > ![Criando nova regra](/images/image055.png)
   >
   > ***Image 03: Main panel - Settings***
5. Click on **Create Rule**.
   > ![Escolha de Template](/images/image056.png)
   >
   > ***Image 04: Settings - Highlight 'Rules'***
6. Choose the customizable **template** (**generic check**) in the search engine or the filter to create the rule.
   > ![Escolha de Template](/images/image057.png)
   >
   > ***Image 05: Settings - Rule Templates***
7. The template configuration options are shown, click **Select** to continue or **Previous** to return to the previous template selection menu.
   > ![Opções de edição](/images/image069.png)
   >
   > ***Image 06: Settings - Rule information***
8. If you need to change the template after selection, click on **Change Template**.
   > ![Trocar template](/images/image059.png)
   >
   > ***Image 07 Settings - Highlight 'Change Template':***
9. Fill in the fields:
   - **Enable**: Defines whether the rule will be active or not.
   - **Severity**: Represents the severity level of the rule, which can range from **LOW (Low) to CRITICAL (Critical).**
   - **Namespace Allow List**: Defines which namespaces can be affected by this rule.
   - **Exclude Pattern Name**: Allows excluding specific resources from rule application.
   - **Exclude Pattern Namespace**: Allows excluding specific namespaces from rule application.
   - **Name**: Descriptive name for the rule.
   - **Custom Message**: Message that will be displayed when the rule is violated.
   - **Kind**: The type of Kubernetes resource to which the rule will be applied (e.g., Pod, Deployment, Service).
   - **Path**: Specific path in the resource manifest where the rule will be applied
   - **Operator**: Logical operator used to evaluate the rule
   - **Expected Value**: The expected value in the field defined by Path.

10. After reviewing, click on **Save**
   > ![Confirmação de criação](/images/image071.png)
   >
   > ***Image 08: Settings - Highlight 'Save'***
11. Wait for the **Item Created** message, confirming the rule creation.
   > ![Confirmação de criação](/images/image061.png)
   >
   > ***Image 09: Settings - Message indicating success***

---

## Deleting a Rule

1. Access **Configuration → Rules**.
   > ![Acessando Regras](/images/image064.png)
   >
   > ***Image 10: Main panel - Cluster***
2. Locate the rule you want to delete.
3. Click on the **three dots** icon next to the rule.
   > ![Localizar Regra](/images/image065.png)
   >
   > ***Image 11: Settings - Rule list***
4. Choose the **Delete** option.
   > ![Excluir Regra](/images/image066.png)
   >
   > ***Image 12: Settings - Highlight 'Delete rule'***
5. After confirmation the rule will be **deleted immediately**, without additional confirmation.
   > ![Confirmação de exclusão](/images/image068.png)
   >
   > ***Image 13: Dialog box - Delete rule***

---

### Best Practices

- **Name the rules** clearly and consistently.
- **Define severity** correctly to avoid irrelevant alerts.
- **Review rules before saving** to ensure all settings are correct.
- **Use appropriate templates** to facilitate configuration.
- **Be careful when deleting rules**, as the action is irreversible.
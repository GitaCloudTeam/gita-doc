---
sidebar_position: 31
---
# How to get resource recommendations for workloads in GITA?

## The Recommendation feature in GITA allows users to obtain CPU and memory requests and limits recommendations for Kubernetes workloads (such as Deployments), based on the actual consumption observed over a given period. This helps optimize resource allocation, avoiding both waste and resource shortages.

1. Access your Cluster Interface in Gita:
    > ![image](/images/image206.png)
    >
    > ***Image 01: Cluster Selection Panel***
    >
    > ![image](/images/image207.png)
    >
    > ***Image 02: Cluster Interface***

2. Click on the **Health** section on the left side of the Interface screen:
    > ![image](/images/image208.png)
    >
    > ***Image 03: Health Section***

3. Inside the Health section, click on the **Recommendations** tab:
    > ![image](/images/image210.png)
    >
    > ***Image 04: Recommendations Tab***

4. In the Recommendations tab, select the desired workload type for analysis:
    > ![image](/images/image211.png)
    >
    > ***Image 05: Workload Selection***

5. After selecting the workload type, select the namespace:
    > ![image](/images/image212.png)
    >
    > ***Image 06: Namespace Selection***

6. Now choose the resource name for which you want to get recommendations:
    > ![image](/images/image213.png)
    >
    > ***Image 07: Resource Selection***

7. Then choose the analysis period for the recommendations (7, 14, 21, or 28 days):
    > ![image](/images/image214.png)
    >
    > ***Image 08: Analysis Period Selection***

8. Finally, click the **Get Recommendation** button to generate the recommendation based on the selected criteria:
    > ![image](/images/image215.png)
    >
    > ***Image 09: Get Recommendation Button View***

9. After all steps, the recommendation will be generated:
    > ![image](/images/image216.png)
    >
    > ***Image 10: Recommendation Loading View***
    >
    > Depending on the recommendation, this may take a few minutes. Thus, the user can choose to leave the **Recommendations** tab and will be notified with a message as soon as the recommendation is generated. Then, just click the **Go** button to be directed to the generated recommendation:
    >
    > ![image](/images/image217.png)
    >
    > ***Image 11: Recommendation Alert and Go Button***
    >
    > ![image](/images/image218.png)
    >
    > ***Image 12: Generated Recommendation View***

#### Legend of the Generated Recommendation:

- **Current Request / Limit:** Current values configured for CPU and memory request and limit in the workload.
- **Recommended Request / Limit:** Values suggested by GITA for request and limit, based on the actual consumption observed in the selected period.
- **Usage Max / Mean:** Maximum and average CPU (in millicores) and memory (in MiB) usage observed during the analyzed period.
- **Usage P95 / P99:** 95th and 99th percentiles of usage, indicating that 95% or 99% of the time the usage was below these values.

This information helps you adjust your workload's resources to avoid waste or shortages, making cluster usage more efficient. 
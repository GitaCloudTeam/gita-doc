---
sidebar_position: 12
---
# How to Open a Cluster Console Session in Gita?

This Standard Operating Procedure (SOP) aims to guide users on how to access a cluster's console within the Gita platform, allowing direct manipulation of the environment via command line.

---

## 1. Objective

The cluster console allows the execution of administrative and monitoring commands directly on the platform, facilitating the management of cluster resources.

---

## 2. Accessing the Console

1. **Access the Gita platform** and log in with your credentials.
2. **Choose the organization** where the desired cluster is located.
3. **Select the cluster** you want to connect to.
   > ![Selecting the Cluster](/images/image097.png)
   >
   > ***Figure 01: Panel - Organization's main page***
4. **In the top right corner of the interface**, locate the console icon (represented by a terminal).
5. **Click on the console icon** to open a new tab at the bottom of the screen.
   > ![Opening the Console](/images/image098.png)
   >
   > ***Figure 02: Highlight - Console button***
6. Now, the console tab will be available for cluster management.
   > ![Console Open](/images/image099.png)
   > ***Figure 03: Panel - Cluster console***

---

## 3. Executing Commands in the Console

1. **After opening the console**, use commands to interact with the cluster.
2. For example, to list pods in the default namespace, use the following command:

   ```sh
   kubectl get pods
   ```

   > ![Executing Command](/images/image100.png)
   >
   > ***Figure 04: Console - Command execution***
3. To exit the console, simply close the tab in the interface by clicking the **X**
   > ![Executing Command](/images/image101.png)
   >
   > ***Figure 05: Console***

## 4. Important Notes

- **Make sure you have the appropriate permissions** to access the console and execute commands in the cluster.
- **Check your network connectivity**, as connection issues may prevent the console from opening.
- **Use commands with caution**, as actions such as deleting pods can impact cluster operation.
- **For more information about available commands**, consult the official Kubernetes documentation or use `kubectl --help`. 
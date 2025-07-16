---
sidebar_position: 31
---
# How to customize a cluster image in GITA?

## Customizing a cluster image in GITA allows you to choose the version of the probes used, use images from your own registry (private, internal, or with specific cluster permissions), and have full control over the configurations and versions used in your containers, ensuring compatibility and security according to your needs.

1. Access your Cluster Interface in Gita:
    > ![image](/images/image206.png)
    >
    > ***Image 01: Cluster Selection Panel***
    >
    > ![image](/images/image207.png)
    >
    > ***Image 02: Cluster Interface***

2. Click on the **Configuration** section on the left side of the Interface screen:
    > ![image](/images/image230.png)
    >
    > ***Image 03: Configuration Section***

3. Inside the Configuration section, click on the **Installation** tab:
    > ![image](/images/image231.png)
    >
    > ***Image 04: Installation Tab***

4. In the Installation tab, you can view the versions of the cluster images:
    > ![image](/images/image232.png)
    >
    > ***Image 05: Versioning View***

    **Explanation about the displayed versions:**
    
    For each cluster component, two version pieces of information are displayed:
    
    - **Current Version:** Indicates the image version currently in use in your cluster.
    - **Latest Version:** Indicates the latest version available for that component.
    
    If the current version is different from the latest, it will usually be highlighted in red, indicating that an update is available. Keeping images up to date is important to ensure access to bug fixes, security improvements, and new features.

5. To add a custom image, click on the **Advanced** tab:
    > ![image](/images/image233.png)
    >
    > ***Image 06: Advanced Tab***

6. In the Advanced tab, you can view the images currently used by the cluster:
    > ![image](/images/image234.png)
    >
    > ***Image 07: Cluster Images View***

7. Identify where you want to add the new custom image in the cluster. To do this, remove the current image by clicking the delete (**X**) button:
    > ![image](/images/image235.png)
    >
    > ***Image 08: Delete Button View***

8. After removing the image, if you change your mind, you can restore it by clicking the undo button. To proceed with adding a new custom image, enter the desired image address in the appropriate field and click **Create** to save the change:
    > ![image](/images/image236.png)
    >
    > ***Image 09: Undo Button View***
    >
    > ![image](/images/image237.png)
    >
    > ***Image 10: Add New Image View***
    >
    > ![image](/images/image238.png)
    >
    > ***Image 11: Create View***

9. Click the **Save** button to save the image change and wait for the process to finish:
    > ![image](/images/image239.png)
    >
    > ***Image 12: Save Button View***
    >
    >  ![image](/images/image240.png)
    >
    > ***Image 13: Save Confirmation View***

9. For the image changes to be effectively applied to the cluster, you need to run, in the terminal, the commands shown on the screen, following the presented order. Use the copy button next to each command to make the process easier: copy, paste, and run each command in the terminal, one at a time, until you complete the indicated steps. After completing these steps, the new images will be applied to the cluster:
    > ![image](/images/image241.png)
    >
    > ***Image 14: Commands View***
    >
    > ![image](/images/image242.png)
    >
    > ***Image 15: Copy Button View*** 
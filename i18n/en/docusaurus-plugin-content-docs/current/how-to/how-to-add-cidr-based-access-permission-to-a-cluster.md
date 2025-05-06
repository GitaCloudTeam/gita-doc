---
sidebar_position: #to_complete_joao
---
# How to add CIDR-based access permission to a Cluster in GITA?

CIDR (Classless Inter-Domain Routing) permissioning is a form of access control based on a range of IP addresses belonging to a network. This functionality allows you to define CIDR blocks, making it possible to authorize access to a GITA Cluster only to desired IP addresses.

## How to add a CIDR?

1. Access your GITA Home:
    > ![image](/images/image187.png)
    >
    > ***Image 01: Home - Organizations View***

2. Click on **Settings** (gear) to the right of the organization where you want to add the permission:
    > ![image](/images/image188.png)
    >
    > ***Image 02: Home - Organization Settings***

3. You will be directed to the **Settings** section of the Organization:
    > ![image](/images/image189.png)
    >
    > ***Image 03: Settings Section***

4. In the Settings tab, select the **Security** option to view the CIDRs already added for each Cluster (if any):
    > ![image](/images/image190.png)
    >
    > ***Image 04: Security Section***

5. To add a new CIDR, click on **Add CIDR** in the desired Cluster:
    > ![image](/images/image191.png)
    >
    > ***Image 05: View - Allowed CIDR***

6. In the ***Add CIDR*** tab, fill in the **IP Address** field with the chosen CIDR and click on ***Add***:
    > ![image](/images/image192.png)
    >
    > ***Image 06: Add CIDR Panel - IP Address***
    >
    > ![image](/images/image193.png)
    >
    > ***Image 07: Add CIDR Panel - Add Button***

7. Add a description in **Description** if you deem it necessary:
    > ![image](/images/image194.png)
    >
    > ***Image 08: Add CIDR Panel - Description***

8. Click on **Save** to save the specifications of the added CIDR:
    > ![image](/images/image195.png)
    >
    > ***Image 09: Option - Save***

9. When added, a message will be displayed on the screen - *Success* - indicating that the operation was successful, and you will be able to view the added CIDR in the respective Cluster:
    > ![image](/images/image196.png)
    >
    > ***Image 10: View - Added CIDR***

10. The user who tries to enter with an IP address within the range of the added CIDR will have their IP blocked and will not be able to access the Cluster in question:
    > ![image](/images/image197.png)
    >
    > ***Image 11: Home - Blocked IP View***

## How to update an added CIDR?

1. Access your GITA Home:
    > ![image](/images/image187.png)
    >
    > ***Image 01: Home - Organizations View***

2. Click on **Settings** (gear) to the right of the organization where you want to update the permission:
    > ![image](/images/image188.png)
    >
    > ***Image 02: Home - Organization Settings***

3. You will be directed to the **Settings** section of the Organization:
    > ![image](/images/image189.png)
    >
    > ***Image 03: Settings Section***

4. In the Settings tab, select the **Security** option to view the CIDRs already added for each Cluster:
    > ![image](/images/image190.png)
    >
    > ***Image 04: Security Section***

5. To update a CIDR, click on the edit symbol next to the CIDR you want to change:
    > ![image](/images/image198.png)
    >
    > ***Image 05: View - Edit***

6. In the ***Update CIDR*** tab, fill in the **IP Address** field with the updated CIDR:
    > ![image](/images/image199.png)
    >
    > ***Image 06: Update CIDR Panel - IP Address***

7. Also update the description in **Description** if you deem it necessary:
    > ![image](/images/image200.png)
    >
    > ***Image 07: Update CIDR Panel - Description***

8. Click on **Save** to save the specifications of the updated CIDR:
    > ![image](/images/image201.png)
    >
    > ***Image 08: Option - Save***

9. After the update, a message will be displayed on the screen - *Success* - indicating that the operation was successful, and you will be able to view the updated CIDR in the respective Cluster:
    > ![image](/images/image202.png)
    >
    > ***Image 09: View - Updated CIDR***

## How to delete an added CIDR?

1. Access your GITA Home:
    > ![image](/images/image187.png)
    >
    > ***Image 01: Home - Organizations View***

2. Click on **Settings** (gear) to the right of the organization where you want to add the permission:
    > ![image](/images/image188.png)
    >
    > ***Image 02: Home - Organization Settings***

3. You will be directed to the **Settings** section of the Organization:
    > ![image](/images/image189.png)
    >
    > ***Image 03: Settings Section***

4. In the Settings tab, select the **Security** option to view the CIDRs already added for each Cluster (if any):
    > ![image](/images/image190.png)
    >
    > ***Image 04: Security Section***

5. To delete an added CIDR, click on the delete symbol (trash) next to the chosen CIDR:
    > ![image](/images/image203.png)
    >
    > ***Image 05: View - Delete***

6. Click on ***Remove*** to confirm the removal of the chosen CIDR:
    > ![image](/images/image204.png)
    >
    > ***Image 06: Confirmation Panel - Remove Button***

7. When deleted, the CIDR will be removed from the display screen:
    > ![image](/images/image205.png)
    >
    > ***Image 07: View - Allowed CIDR*** 
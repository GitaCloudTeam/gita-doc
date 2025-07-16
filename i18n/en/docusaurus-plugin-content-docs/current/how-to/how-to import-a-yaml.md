---
sidebar_position: 19
---
# How to Import a YAML?

This Procedure shows the import of a YAML (Yet Another Markup Language) which is a format used to define configurations and infrastructure as code, facilitating the standardization and automation of resources in a cluster. Importing a YAML allows applying configurations such as deploys, services, and permissions efficiently. During import, adjustments may be necessary, such as modifying names, updating container images, and defining environment variables. This ensures that the configuration is suitable for the environment before application.

---

## 1. Accessing the Platform

1. **Log in** to the platform with your credentials.
2. **Access the Organizations section** and select the desired organization.
3. **Choose the Cluster** where the file will be imported.

   > ![Selecting the Cluster](/images/image091.png)
   >
   > ***Image 01: Panel - Organization's main page***

---

## 2. Starting the Import

1. **Locate the import icon** (represented by an **arrow pointing out of a box**) at the top of the interface.
2. **Click on the icon** to start the import process.

   > ![Starting the Import](/images/image092.png)
   >
   > ***Image 02: Button - Highlight 'Import YAML'***

---

## 3. Import Methods

On the import screen, there are two options available:

- **File Import:** Select an existing YAML file from your computer.
- **Manual Editing:** Enter and edit the YAML code directly in the platform's editing interface.

   > ![Import Method Choice](/images/image093.png)
   >
   > ***Image 03: Panel - Highlight - 'Read from file'***

If you choose an already created file, when selecting it, the code will be loaded into the platform's editor for review and possible adjustments.

---

## 4. Review and Confirmation

1. **Check if all information is correct.**
2. **If necessary, edit directly in the platform's editor.**
   > ![YAML Review](/images/image094.png)
   >
   > ***Image 04: Import YAML - Imported information***
3. **After reviewing, click Save to confirm the import.**
   > ![YAML Review](/images/image095.png)
   >
   > ***Image 05: Import YAML - Highlight 'Save'***
4. Wait for the **"Success"** message, which confirms that the import was successful.
5. **If an error occurs**, review the YAML code and try again.
   > ![Import Confirmation](/images/image096.png)
   >
   > ***Image 06: Main panel - Message indicating success***

---

## 5. General Notes

- **Make sure the YAML file is properly formatted** before importing.
- **If the import fails, check the error messages** and adjust the code as needed.
- **The interface allows edits before import**, ensuring that the configurations are correct.
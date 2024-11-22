---
sidebar_position: 1
---

# Gita Usage
## Guide for Incident Management in Kubernetes
This guide explains how to use **Gita** for incident management, best practices, and data collection in Kubernetes clusters. The process involves setting up a cluster, running an installation command in the terminal, and managing the collected incident data.

## Table of Contents

1. [Introduction to Gita](#introduction-to-gita)
2. [Setup Flow](#setup-flow)
   - [Add a Cluster](#add-a-cluster)
   - [Install Gita on the Cluster](#install-gita-on-the-cluster)
3. [Best Practices](#best-practices)
4. [Incident Collection](#incident-collection)
5. [Accessing Collected Data](#accessing-collected-data)

---

## Introduction to Gita

**Gita** is a tool designed to help with incident management, event tracking, and collecting health and performance data in Kubernetes clusters. It facilitates real-time incident detection, analysis, and resolution, while also promoting best practices in cluster administration.

## Setup Flow

### Add a Cluster

1. **Create a New User**
   - Go to the [Gita registration page](https://app.gita.cloud/register) to create a new account.
   - Fill in the required fields such as name, email, and password.

2. **Access the Organization Page**:
   - Log into the Gita platform and navigate to your organization's page.

3. **Add a New Cluster**:
   - On the organization page, click the **"Add Cluster"** button.
   - Enter the required information about the cluster (name, access URL, etc.) and click **"Save"**.

4. **Redirect to the Installation Page**:
   - After adding the cluster, you will be redirected to the installation page.

### Install Gita on the Cluster

1. **Access the Installation Page**:
   - On this page, you will see the specific installation command for your Kubernetes cluster.

2. **Run the Installation Command**:
   - In the terminal of your Kubernetes cluster, run the installation command provided on the installation page.

   - This command will automatically download and configure Gita on your cluster, connecting to it and setting up the necessary permissions to collect incident data.

3. **Verify Installation**:
   - After executing the command, an **OK** icon will be displayed on the cluster's installation page, indicating that the installation was successful.

---

## Best Practices

- **Resource Management**: Always define resource limits for pods and containers in your cluster. This helps prevent incidents due to excessive CPU or memory consumption.

- **Regular Updates**: Keep Gita and other components of your Kubernetes cluster up-to-date. Always use the latest version of Gita to ensure you have the most advanced incident collection features.

- **Proactive Monitoring**: Use Gita to configure real-time alerts and monitoring. This helps you identify issues before they turn into critical incidents.

- **Post-Incident Analysis**: After resolving incidents, always perform a detailed analysis using Gita's reports to understand the root cause and prevent future problems.

---

## Incident Collection

- **Automatic Log and Metric Collection**: Gita collects detailed logs and metrics from your cluster, including:
  - Application and system logs.
  - CPU and memory usage metrics.
  - Pod and container status.
  - Historical critical events.

- **Storage and Analysis**: All collected data is stored in a centralized system, allowing for in-depth analysis to detect patterns and potential incidents.

- **Incident Notifications**: When an incident is detected, Gita can send automatic notifications via email, Slack, or other configurable channels.

---

## Accessing Collected Data

1. **Access the Gita Interface**:
   - To view the collected data and recorded incidents, log into the Gita web interface.

2. **View Incidents**:
   - On the main page, you will see a dashboard with all recent incidents. Incidents are classified by severity (critical, high, medium, low) and category (application, network, infrastructure).

3. **Data Analysis**:
   - Click on a specific incident to access detailed logs, metrics, and diagnostics provided by Gita. The system may suggest machine-learning-based solutions to help resolve the issue quickly.

---

## Conclusion

Gita simplifies incident management and analysis in Kubernetes clusters, giving you a clear view of the health and performance of your environment. By following best practices for installation, monitoring, and incident collection, you can significantly improve the availability and performance of your cluster.
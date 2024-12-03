---
sidebar_position: 1
---

# PVC Usage Exceeds Threshold

Persistent Volume Claims (PVCs) provide storage resources for Kubernetes workloads. Efficient storage utilization is critical to maintaining system performance and avoiding disruptions.

This alert identifies PVCs whose available storage falls below a defined percentage (default: 20%) of their total capacity. Such conditions indicate that storage resources are nearing exhaustion, which could affect application performance or lead to outages.

## Common Causes
Unmonitored growth in data usage.
Inefficient storage allocation or lack of scaling strategies.
Long-running workloads without sufficient resource monitoring.

For more information on managing persistent volumes, visit the Kubernetes documentation on storage.
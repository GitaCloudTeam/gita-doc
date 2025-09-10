---
sidebar_position: 27
---

# Blocked image registries (GITA-SEC-027)

Certain image registries or image repository paths may be explicitly blocked by policy. This prevents the use of images from sources with a history of vulnerabilities, malicious content, or that are outside the organization’s compliance standards.  

The check extracts the image registry/path (e.g., `docker.io/bitnami`, `quay.io`) and, if it appears on the blocklist, the image is flagged according to the configured severity.

## Reasons to block registries

1. **Risk history**: registries/repositories associated with malware, supply-chain attacks, or a high rate of CVEs.
2. **Compliance**: meeting internal, legal, or contractual requirements that prohibit certain origins.
3. **Standardization**: exclusive use of sources curated/mirrored by the organization to ensure traceability and verification.
4. **Reduced attack surface**: lower likelihood of introducing tampered or unverified images into the cluster.

For more information about images in Kubernetes, see the
[documentation](https://kubernetes.io/docs/concepts/containers/images).
---
sidebar_position: 8
---
# Image registry prohibited

Kubernetes enforces strict policies regarding which container registries are allowed in the cluster. Using images from untrusted or unverified registries can pose significant security risks, such as introducing vulnerabilities, malicious code, or unmaintained software into the environment.

By default, many Kubernetes clusters are configured with an allowlist of trusted registries. Images from registries not included in this list will be blocked from being pulled by the container runtime.

### Common reasons for prohibited image registries

1. **Unverified Registry:** The registry is not listed in the organization's trusted sources.
2. **Outdated Policy:** The registry was removed from the allowlist due to policy updates.
3. **Potential Threats:** The registry has a history of hosting vulnerable or malicious images.

### Resolving the issue

Ensure the image's source registry is included in the allowlist. Below is an example of a Kubernetes policy snippet to block unauthorized registries:

```yaml
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sAllowedRegistries
metadata:
  name: allowed-registries
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
  parameters:
    allowed:
      - "registry1.example.com"
      - "registry2.example.com"

```


For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/containers/images)


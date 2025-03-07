---
sidebar_position: 3
---

# Image Tag should be fixed. not latest or blank

Container images are packaged programs alongside the basic structural
requirements for running them, such as a filesystem hierarchy, a package
manager and other userland tools. As the program evolves, its behavior
and requirements change, making it essential to track which version of
it is being shipped in the image.

Image tagging is the standard method to track these versions, where a
meaningful identifier is placed after the container image. However, if
ambiguous terms like `latest` are used, the tag looses its identifying
property.

To fix this, locate the manifest field `image`, and add a tag which
briefly describes the software and tooling shipped in the container.

For more information, visit the Kubernetes
[documentation](https://kubernetes.io/docs/concepts/containers/images).


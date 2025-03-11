---
sidebar_position: 2
---
# Status do Pod é unhealthy (GITA-INC-002)

O Kubernetes possui mecanismos internos para detectar se um container
está se comportando adequadamente, como as Probes de Readiness e
Liveness, também conhecidas como Health Checks.

Tais mecanismos são implementados no componente Kubelet para detectar
quando programas comecem a se comportar de maneira inadequada, mas sem
impedimento em sua execução, assim como ocorre em deadlocks e outros
problemas que façam com que o programa se torne irresponsivo.

Se uma das verificações de integridade falhar, o container será
considerado `unhealthy`, e sempre que um Pod tiver pelo menos um
container `unhealthy`, seu o status também será definido dessa forma.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle)
do Kubernetes.

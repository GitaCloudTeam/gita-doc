---
sidebar_position: 7
---
# Portas devem ser nomeadas (GITA-PRO-007)

O Kubernetes permite que portas de containers tenham identificadores a
nível de Pod. Tais identificadores podem ser utilizados posteriormente
para referenciar a porta em questão por meio do campo `targetPort` dos
Services. Isso garante que referências à portas não precisem ser
alteradas caso o programa comece a utilizar uma porta diferente, seja
por alterações internas ou alterações na rede onde o mesmo executa.

Um nome de porta pode ser especificado através do subcampo `name` dentro
do campo `ports` de um manifesto, assim como no exemplo a seguir:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
    - name: redis
      image: redis:latest
      ports:
        - containerPort: 6379
          name: redis-port
```

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/services-networking/service/#field-spec-ports)
do Kubernetes.

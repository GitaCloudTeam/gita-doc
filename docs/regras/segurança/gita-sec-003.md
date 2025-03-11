---
sidebar_position: 3
---
# Credenciais da aplicação armazenadas em arquivos de configuração (GITA-SEC-003)

Definir credenciais em locais de acesso arbitrário, como arquivos de
configuração, pode expor dados confidenciais ou na pior das hipóteses,
inutilizar completamente seu mecanismo de controle de acesso.

Existem várias alternativas para se armazenar credenciais em um cluster
Kubernetes, mas a solução nativa é por meio de Secrets. Sendo estes
objetos Kubernetes, pode-se criar um simples manifesto com dados em
pares de chave-valor e posteriormente torná-los acessíveis a Pods por
meio de um tipo especifico de volume para mount de Secrets.

Existem diversos tipos de Secrets Kubernetes, mas abaixo está um exemplo
do variante _Opaque_:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: secret-example
data:
  credentials.json: ewogICJsb2dpbiI6ICJleGFtcGxlQGs4cy5pbyIsCiAgInBhc3N3b3JkIjogImV4YW1wbGUiCn0K
```

O campo `data` contém a string codificada em Base64 do arquivo
`credentials.json`, cujo conteúdo é:

```yaml
{
  "login": "example@k8s.io",
  "password": "example"
}
```

É importante observar que Secrets Kubernetes são armazenados sem
criptografia no provedor de armazenamento do API Server, portanto
certifique-se de criptografar informações antes de persisti-as em um
Secret.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/configuration/secret)
do Kubernetes.

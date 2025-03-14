---
sidebar_position: 3
---
# Tag da imagem deve ser corrigida. Sem uso do texto `latest`, e nem vazia (GITA-PRO-003)

Imagens de container são programas empacotados junto á estrutura básica
necessária para executá-los, como a hierarquia do filesystem, um package
manager e outras ferramentas de userland. À medida com que o programa
evolui, seu comportamento e requisitos mudam, tornando-se essencial a
identificação da versão do programa que está presente na imagem.

O tagueamento de imagens é o método padrão para se identificar tais
versões, onde um identificador significativo é colocado após o nome
da imagem do container. No entanto, se termos ambíguos como `latest`
forem utilizados, a tag perde sua propriedade de identificação.

Para corrigir isso, localize o campo `image` no manifesto e adicione uma
tag que descreva resumidamente o software tal como as ferramentas
presentes no container.

Para mais informações, visite a
[documentação](https://kubernetes.io/docs/concepts/containers/images)
do Kubernetes.

<img src="https://github.com/Grupo-G03-4SOAT-FIAP/rms-backend/raw/main/docs/img/bope-faca-na-carveira-knife-skull-logo.png" alt="BOPE" title="BOPE" align="right" height="60" />

# Restaurant Management System

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-backend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-backend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-backend)

Sistema de Gestão de Restaurantes (RMS) desenvolvido pelo grupo *"BOPE"* G03 da turma 4SOAT para o Tech Challenge da [Pós Tech em Software Architecture da FIAP](https://postech.fiap.com.br/curso/software-architecture/).

### O PROBLEMA

*Há uma lanchonete de bairro que está expandindo devido seu grande sucesso. Porém, com a expansão e sem um sistema de controle de pedidos, o atendimento aos clientes pode ser caótico e confuso. Por exemplo, imagine que um cliente faça um pedido complexo, como um hambúrguer personalizado com ingredientes específicos, acompanhado de batatas fritas e uma bebida. O atendente pode anotar o pedido em um papel e entregá-lo à cozinha, mas não há garantia de que o pedido será preparado corretamente.*

*Sem um sistema de controle de pedidos, pode haver confusão entre os atendentes e a cozinha, resultando em atrasos na preparação e entrega dos pedidos. Os pedidos podem ser perdidos, mal interpretados ou esquecidos, levando à insatisfação dos clientes e a perda de negócios.*

*Em resumo, um sistema de controle de pedidos é essencial para garantir que a lanchonete possa atender os clientes de maneira eficiente, gerenciando seus pedidos e estoques de forma adequada. Sem ele, expandir a lanchonete pode acabar não dando certo, resultando em clientes insatisfeitos e impactando os negócios de forma negativa.*

*Para solucionar o problema, a lanchonete irá investir em um sistema de autoatendimento de fast food, que é composto por uma série de dispositivos e interfaces que permitem aos clientes selecionar e fazer pedidos sem precisar interagir com um atendente.*

*— Fonte: [FIAP](https://www.fiap.com.br/)*

#### Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

## Executar a aplicação usando o Docker Compose

1. Clonar este repositório;
2. Navegar até a pasta raiz do projeto;
3. Usar o comando `docker-compose up --build --force-recreate --renew-anon-volumes`
4. Acessar o Swagger em http://localhost:3000/swagger/

> Se preferir você também pode executar a aplicação através do [Makefile](Makefile).

> DICA: Não esqueça de remover imagens e volumes antigos antes de executar a imagem Docker do projeto através do Docker Compose.

## Executar a aplicação usando o Kubernetes do Docker Desktop

1. Clonar este repositório;
2. Navegar até a pasta raiz do projeto;
3. Usar o comando `docker build -t rms-bff:latest .` para gerar a imagem de container da aplicação;
4. Usar o comando `kubectl apply -f k8s/namespace.yaml -f k8s/bff/config.yaml -f k8s/bff/deployment.yaml -f k8s/bff/service.yaml -f k8s/bff/hpa.yaml -f k8s/postgres/pvc-pv.yaml -f k8s/postgres/config.yaml -f k8s/postgres/deployment.yaml -f k8s/postgres/service.yaml`
5. Acessar o Swagger em http://localhost:3000/swagger/

> Se preferir você também pode gerenciar o cluster Kubernetes [através do Lens](https://www.mirantis.com/blog/getting-started-with-the-mirantis-lens-kubernetes-extension-in-docker-desktop/).

## Banco de Dados

Você pode conectar-se a instância de banco de dados PostgreSQL usando o [pgAdmin](https://www.pgadmin.org/download/).

> Host: localhost\
> Porta: 5432 (padrão)\
> Usuário: pguser\
> Senha: pgpwd\
> DB name: rms

## Documentação

A documentação do projeto está disponível no [GitHub Wiki](https://github.com/Grupo-G03-4SOAT-FIAP/rms-backend/wiki).

## Arquitetura

Architectural Pattern: *Arquitetura Hexagonal / Ports and Adapters*.

<br>

![Ports and Adapters](https://github.com/Grupo-G03-4SOAT-FIAP/rms-backend-fase01/assets/5115895/5a7d9588-a222-4e8b-acdf-3cb71076e65b)

<br>

## Como contribuir

Para contribuir com o projeto consulte o guia em [CONTRIBUTING.md](CONTRIBUTING.md)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Requisitos

*Node.js v18.18.0 (LTS), Docker Engine 24.0.6 e Kubernetes v1.28*

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-backend)

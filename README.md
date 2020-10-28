# CRUD de Veículos
![infosistemas front](https://github.com/jvbraganca/infosistemas/workflows/infosistemas%20front/badge.svg?branch=master)

### Tecnologias
O projeto foi dividido em duas partes, a parte do front-end foi feita em 
Angular@10.2, Node@14.11 e Express@4.17.1. Para o banco de dados, foi utilizado 
o MongoDB e a conexão foi feita com Mongoose@5.10.11.
### Scaffolding


```
Projeto
│   README.md
│   .gitignore   
│
└─── api
│   │...
│   
│   
└─── web
    │...
```

### Instalação

Também foi separado em dois `package.json` para que o front e back sejam 
totalmente independentes. Para rodar o sistema execute:

```
$ git clone https://github.com/jvbraganca/infosistemas.git
$ cd infosistemas
# Instala dependencias do front-end
$ cd web
$ npm install
# Instala dependencias do back-end
$ cd ../api
$ npm install
```

Assim, estará instalada todas as depêndecias do sistema.

### Executando

Para executar o front-end e back-end será necessário duas instâncias do terminal,
uma vez que estes são indenpendentes.

Execute os seguintes comandos para iniciar o sistema:

```
# No primeiro terminal será rodado o back-end
$ npm run start
```

A API estará funcionando em `http://localhost:3000/api/v1/`.

```
# No segundo terminal será rodado o front-end
$ cd ../web
$ ng serve
```

Caso a porta do backend seja alterada, mude o valor da variável de ambiente 
`API_URL` setada em `web/src/environments/environment.ts`

### Testes Back-end

Para os testes foram utilizados o Mocha@8.2 junto ao should@13.2.3 e 
supertest@5.0.0. A descrição de todos os testes podem ser visualizadas ao rodá-los.

Para executar os testes em seu terminal na pasta da **api** execute:

````
$ npm run test
````

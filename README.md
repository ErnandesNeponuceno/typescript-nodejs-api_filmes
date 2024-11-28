
# 🎬 Projeto Cadastro de Filmes

Este projeto é uma **API REST** para o cadastro, atualização, exclusão e busca de filmes. A API foi construída em **Node.js** e utiliza um arquivo JSON como banco de dados para armazenar as informações dos filmes.

## 🎯 Funcionalidades

- **Cadastro de Filmes:**
  - Criação de novos filmes com título, diretor, ano de lançamento, gênero, duração, classificação etária, sinopse, elenco, orçamento e bilheteira.
  - Geração automática de ID para cada filme.
- **Consulta de Filmes:**
  - Busca de filmes por ID ou título.
- **Atualização de Filmes:**
  - Edição das informações de um filme existente.
- **Exclusão de Filmes:**
  - Remoção de filmes do banco de dados.

## 🗂️ Estrutura do Projeto

- **src/**
  - **controllers/**: Contém as controllers de cada endpoint.
    - `filmes-controller.ts`: Controla a lógica de cada endpoint da API de filmes.
  - **data/**: Contém os dados de filmes armazenados em formato JSON.
    - `filmes-data.json`: Arquivo JSON onde os filmes são armazenados.
  - **model/**: Contém os modelos de dados para filmes.
    - `filmes-model.ts`: Define a estrutura do filme.
    - `filmes-update-model.ts`: Define a estrutura para atualização de filmes.
  - **repository/**: Contém a lógica de acesso aos dados (CRUD).
    - `filmes-repository.ts`: Funções para manipulação dos dados de filmes (CRUD).
  - **services/**: Contém a lógica de negócios ou processamento adicional.
    - `filmes-service.ts`: Encapsula a lógica de negócios (ex: validações, regras adicionais) e delega as operações de dados para a repository.
  - **routes/**: Contém as definições das rotas da API.
    - `filmes-routes.ts`: Define as rotas e conecta as controllers.
  - **server.ts**: Arquivo principal do servidor.

## 🚀 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
</div>

## 📄 Como Funciona

A API permite realizar operações CRUD para filmes:

- **GET /filmes**: Retorna todos os filmes cadastrados.
- **GET /filmes/:id**: Retorna um filme específico pelo ID.
- **POST /filmes**: Cria um novo filme. O filme deve ser enviado no corpo da requisição, sem a necessidade de fornecer um ID, que será gerado automaticamente.
- **PUT /filmes/:id**: Atualiza as informações de um filme existente.
- **DELETE /filmes/:id**: Exclui um filme do banco de dados.

### Exemplo de requisição `POST /filmes`:

```json
{ 
  "id": null,
  "titulo": "O Senhor dos Anéis",
  "diretor": "Peter Jackson",
  "anoLancamento": 2001,
  "genero": "Fantasia",
  "duracao": 178,
  "classificacaoEtaria": "12",
  "sinopse": "Um hobbit parte em uma jornada para destruir um anel maligno.",
  "elenco": ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
  "orcamento": 93000000,
  "bilheteira": 871530000
}
```

## 📌 Como Executar o Projeto

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

Execute o app:

```bash
npm start
```

Teste o aplicativo utilizando uma ferramenta como o Postman ou qualquer outra ferramenta de sua escolha para testar APIs RESTful.



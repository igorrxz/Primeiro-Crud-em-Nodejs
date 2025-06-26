# Crud Node (Fullstack)

Este projeto é um CRUD completo de usuários, com backend em Node.js (Express + MySQL) e frontend em Next.js + React + TypeScript + TailwindCSS.

## Funcionalidades
- Cadastro, listagem, edição e remoção de usuários
- Integração total entre frontend e backend
- Interface moderna, responsiva e animada
- Teste de API diretamente pela interface (seção TestApi)

## Estrutura do Projeto
```
├── api/              # Backend Node.js (Express, MySQL)
├── frontend-next/    # Frontend Next.js (React, TypeScript, TailwindCSS)
├── package.json      # Scripts para rodar tudo junto
```

## Como rodar o projeto

### 1. Pré-requisitos
- Node.js 18+
- MySQL rodando localmente (usuário: root, senha: root, banco: crud)

### 2. Configuração do banco de dados
Crie o banco e a tabela:
```sql
CREATE DATABASE crud;
USE crud;
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  fone VARCHAR(20),
  data_nascimento DATE
);
```

### 3. Variáveis de ambiente
- No backend (`api/.env`):
  ```
  PORT=3000
  ```
- No frontend (`frontend-next/.env.local`):
  ```
  NEXT_PUBLIC_API_URL=http://localhost:3000
  ```

### 4. Instale as dependências
Na raiz do projeto:
```bash
npm install
```

### 5. Rode tudo junto
Na raiz do projeto:
```bash
npm run dev
```
- O backend ficará em http://localhost:3000
- O frontend ficará em http://localhost:3001

## Scripts úteis
- `npm run dev` — Roda backend e frontend juntos
- `npm start --prefix api` — Roda só o backend
- `npm run dev --prefix frontend-next` — Roda só o frontend

## Teste rápido da API
Acesse a seção "TestApi" no menu do frontend para testar todas as operações do CRUD diretamente pela interface.

---

Se tiver dúvidas ou quiser contribuir, fique à vontade para abrir issues ou pull requests!

---

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução para o JavaScript no lado do servidor.
- **Express**: Framework web para facilitar o desenvolvimento do backend.
- **MySQL**: Banco de dados relacional utilizado para armazenar os dados.
- **Cors**: Middleware para permitir requisições entre diferentes origens.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente quando houver mudanças.

### Frontend
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Toastify**: Biblioteca para exibir notificações na tela.

---

## Estrutura do Projeto

O projeto está organizado em duas pastas principais:

1. **api**: Contém o servidor Node.js e todos os arquivos do backend.
2. **frontend**: Contém a aplicação React que comunica com a API.

---

# React Books

![React](https://img.shields.io/badge/React-19.2.6-61dafb?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=flat-square&logo=express)
![Vite](https://img.shields.io/badge/Vite-8.0.16-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)

---

## 📖 Descrição

**React Books** é uma aplicação web fullstack para gerenciamento de livros. Desenvolvida como projeto prático durante um dos cursos da Alura, a aplicação foi significativamente expandida com funcionalidades adicionais implementadas de forma autônoma.

O projeto combina uma interface moderna em React com um backend robusto em Express, permitindo aos usuários explorar livros, gerenciar favoritos, buscar por títulos, adiconar e atualizar livros existentes.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.6 | Biblioteca UI |
| **Vite** | 8.0.16 | Build tool e dev server |
| **React Router DOM** | 7.17.0 | Roteamento de páginas |
| **Styled Components** | 6.4.2 | Estilização CSS-in-JS |
| **Axios** | 1.17.0 | HTTP client |

### Backend
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Node.js** | LTS | Runtime JavaScript |
| **Express** | 5.2.1 | Framework web |
| **CORS** | 2.8.6 | Controle de origem compartilhada |
| **Nodemon** | 3.1.14 | Dev: Auto-restart |

---

## 📁 Estrutura do Projeto

```
react-books/
├── frontend/                          # Aplicação React
│   ├── src/
│   │   ├── components/                # Componentes reutilizáveis
│   │   │   ├── BotoesForm/
│   │   │   ├── CardRecomendacao/
│   │   │   ├── FormLivros/
│   │   │   ├── Header/
│   │   │   ├── IconesHeader/
│   │   │   ├── InputForm/
│   │   │   ├── InputSearch/
│   │   │   ├── Interesses/
│   │   │   ├── Logo/
│   │   │   ├── OpcoesHeader/
│   │   │   ├── Search/
│   │   │   └── Titulo/
│   │   ├── imagens/
│   │   ├── routes/                    # Páginas/Rotas
│   │   │   ├── Home.jsx
│   │   │   ├── Livros.jsx
│   │   │   └── Favoritos.jsx
│   │   ├── services/                  # Integração com API
│   │   │   ├── livrosService.js
│   │   │   └── favoritosService.js
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── eslint.config.mjs
│   └── vite.config.js
│
├── backend/                           # API Express
│   ├── src/
│   │   ├── controllers/               # Lógica de negócio
│   │   │   ├── LivrosController.js
│   │   │   └── FavoritosController.js
│   │   ├── repositories/              # Acesso a dados
│   │   │   ├── livroRepository.js
│   │   │   └── favoritosRepository.js
│   │   ├── services/                  # Serviços de domínio
│   │   │   ├── livroService.js
│   │   │   └── favoritosService.js
│   │   ├── routes/                    # Definição de rotas
│   │   │   ├── index.js
│   │   │   ├── livrosRoutes.js
│   │   │   └── favoritosRoutes.js
│   │   ├── middlewares/
│   │   │   └── manipuladorErros.js
│   │   ├── errors/                    # Classes de erro customizadas
│   │   │   ├── ErroBase.js
│   │   │   ├── Erro404.js
│   │   │   └── RequisicaoIncorreta.js
│   │   ├── helpers/
│   │   │   └── gerarId.js
│   │   └── app.js
│   ├── server.js
│   ├── livros.json
│   ├── package.json
│   └── eslint.config.js
│
├── .gitignore
└── node_modules/

```

### Arquitetura MVC Estendida (Backend)
O backend segue um padrão de camadas bem definido:
- **Routes** → definem endpoints
- **Controllers** → orquestram requisições
- **Services** → contêm lógica de negócio
- **Repositories** → abstraem acesso a dados
- **Middlewares** → tratamento de erros centralizado

---

## ✨ Funcionalidades

### Funcionalidades Principais
- ✅ **Exploração de Livros** — Catálogo dinâmico de livros
- ✅ **Sistema de Favoritos** — Adicionar/remover livros da lista pessoal
- ✅ **Busca em Tempo Real** — Filtrar livros por título
- ✅ **Formulário de Adição** — Criar novos registros de livros
- ✅ **Formulário de Atualização** — Atualizar registros de livros

### Funcionalidades e Diferenciais Adicionais ⭐
- 📱 **Componentes Estilizados** — Styled Components para CSS modular e dinâmico
- 🔀 **Roteamento Avançado** — React Router DOM 7 com navegação de múltiplas páginas
- 💾 **Persistência de Dados** — Sistema completo de favoritos sincronizado com backend
- ⚠️ **Alerts/Notificações** — Mensagens amigáveis do backend exibidas ao usuário
- 🎭 **Ícones Dinâmicos** — Header com ícones contextuais (`IconesHeader`)
- 🧩 **Componentes Reutilizáveis** — Inputs genéricos e botões padronizados

Implementadas além do currículo base:
- 🎨 **Migração para Vite** — Substituição completa de Create React App por Vite para melhor performance
- 📝 **Formulário de Edição/Criação** — `FormLivros` com validação integrada
- 🔍 **Search Inteligente** — Buscas otimizadas em tempo real
- 🛡️ **Tratamento de Erros Robusto** — Classes de erro customizadas e middleware centralizado
- 📦 **Service Layer** — Separação clara entre lógica de API e componentes

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** v18+ instalado
- **npm** ou **yarn** como gerenciador de pacotes
- Porta `3000` (frontend) e `8000` (backend) disponíveis

### Instalação e Execução

#### 1. **Clone o repositório**
```bash
git clone https://github.com/ygorzz/react-books.git
cd react-books
```

#### 2. **Instale dependências do Backend**
```bash
cd backend
npm install
```

#### 3. **Inicie o servidor Backend**
```bash
npm run dev
```

O backend estará disponível em `http://localhost:8000`

#### 4. **Em outro terminal, instale dependências do Frontend**
```bash
cd frontend
npm install
```

#### 5. **Inicie o servidor de desenvolvimento Frontend**
```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173` (ou outra porta conforme exibido)

### Scripts Disponíveis

#### Frontend
```bash
npm run dev      # Inicia servidor de desenvolvimento (Vite)
npm run build    # Build otimizado para produção
npm run preview  # Preview local da build
```

#### Backend
```bash
npm run dev      # Inicia servidor com nodemon (hot-reload)
npm test         # Executa testes (não configurado)
```

---

## 📝 Observações Importantes

### Contextualização do Projeto
Este projeto foi desenvolvido durante um dos cursos da Alura, onde inicialmente abordava conceitos fundamentais da React. Porém, **grande parte das funcionalidades foram expandidas e aprimoradas de forma autônoma**, incluindo:

- Migração voluntária de Create React App para Vite
- Estrutura de camadas (Controllers → Services → Repositories)
- Tratamento de erros com middlewares
- Busca em tempo real no input de pesquisa

---

## 📄 Licença

Este projeto está licenciado sob a **Licença ISC**.

```
ISC License (ISC)

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.
```

---

*Desenvolvido por **Ygor Santos** — [LinkedIn](https://www.linkedin.com/in/ygor-santos-869152325/) | [GitHub](https://github.com/ygorzz)*

<div align="center">

[⬆ Voltar ao Topo](#react-books)

</div>

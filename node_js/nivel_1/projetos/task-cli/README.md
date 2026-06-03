# Task-cli

![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![Commander](https://img.shields.io/badge/commander-CLI-blue)
![JSON](https://img.shields.io/badge/storage-JSON-orange)
![ESModules](https://img.shields.io/badge/modules-ESM-yellow)
![License](https://img.shields.io/badge/license-MIT-informational)

## Descrição

O **task-cli** é uma aplicação de linha de comando desenvolvida em Node.js para gerenciamento simples de tarefas utilizando persistência local em arquivos JSON.

O projeto permite criar, listar, atualizar, remover e alterar o status de tarefas diretamente pelo terminal através de comandos implementados com Commander.

A aplicação foi desenvolvida com foco em prática de conceitos fundamentais de Node.js moderno, manipulação de arquivos, arquitetura modular, tratamento de erros e construção de aplicações CLI.

---

## Tecnologias utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| [Node.js](https://nodejs.org/) | >= 18 | Ambiente de execução JavaScript |
| [Commander](https://github.com/tj/commander.js) | — | Criação e gerenciamento da CLI |
| `fs/promises` | Nativo | Manipulação assíncrona de arquivos |
| JSON | Nativo | Persistência local de dados |
| ES Modules | Nativo | Sistema moderno de módulos (`import/export`) |
| ESLint | — | Padronização e análise estática de código |

A aplicação utiliza **ES Modules** (`import/export`) nativamente e persistência local através do arquivo `tasks.json`.

---

## Estrutura do projeto

```bash
task-cli/
├── package.json                 # Configurações e dependências do projeto
├── src/
│   ├── cli.js                   # Ponto de entrada e definição dos comandos
│   ├── storage.js               # Leitura e escrita do arquivo tasks.json
│   ├── helpers.js               # Funções auxiliares
│   ├── commands/                # Operações CRUD e atualização de status
│   └── erro/                    # Tratamento de erros customizados
├── tasks.json                   # Persistência local das tarefas
└── README.md
```

---

## Funcionalidades

| Comando | Descrição |
|---|---|
| `add` | Adiciona uma nova tarefa |
| `list` | Lista todas as tarefas |
| `list-todo` | Lista tarefas pendentes |
| `list-in-progress` | Lista tarefas em andamento |
| `list-done` | Lista tarefas concluídas |
| `update` | Atualiza a descrição de uma tarefa |
| `delete` | Remove uma tarefa |
| `mark-*` | Atualiza o status de uma tarefa |

### Adicionar tarefa

```bash
task-cli add "Estudar Node.js"
```

Cria uma nova tarefa contendo descrição, status e datas automáticas.

### Listar tarefas

```bash
task-cli list
```

Exibe todas as tarefas cadastradas.

### Atualizar tarefa

```bash
task-cli update 1 "Nova descrição"
```

Atualiza a descrição de uma tarefa existente.

### Alterar status

```bash
task-cli mark-in-progress 1
```

Atualiza o status da tarefa para:

- `todo`
- `in progress`
- `done`

### Remover tarefa

```bash
task-cli delete 1
```

Remove permanentemente uma tarefa cadastrada.

---

## Funcionalidades e diferenciais

- **CLI com Commander** — Estruturação profissional de comandos e argumentos.
- **Persistência local** — Armazenamento das tarefas em arquivo JSON.
- **CRUD completo** — Operações completas de criação, leitura, atualização e remoção.
- **Sistema de status** — Gerenciamento do ciclo de vida das tarefas.
- **Criação automática de arquivos** — `tasks.json` é criado automaticamente quando necessário.
- **Tratamento de erros** — Validação de IDs inválidos e arquivos inexistentes.
- **Arquitetura modular** — Separação clara entre comandos, helpers e persistência.
- **Programação assíncrona** — Manipulação de arquivos utilizando `async/await`.
- **ES Modules** — Uso do sistema moderno de módulos do Node.js.
- **Padronização de código** — Configuração utilizando ESLint.

---

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior

### Passo a passo

**1. Clone o repositório e acesse a pasta do projeto:**

```bash
git clone <url-do-repositorio>
cd task-cli
```

---

**2. Instale as dependências:**

```bash
npm install
```

---

**3. Instale a CLI globalmente (opcional):**

```bash
npm link
```

---

**4. Execute comandos da aplicação:**

Adicionar tarefa:

```bash
task-cli add "Estudar Node.js"
```

Listar tarefas:

```bash
task-cli list
```

Marcar tarefa como concluída:

```bash
task-cli mark-done 1
```

---

## Observações

- O projeto utiliza o Commander para criação da interface de linha de comando.
- As tarefas são armazenadas localmente em `tasks.json`.
- O arquivo de persistência é criado automaticamente quando necessário.
- O projeto utiliza arquitetura modular para separação de responsabilidades.
- Cada tarefa contém ID, descrição, status e timestamps automáticos.
- Atualmente o projeto não possui testes automatizados configurados.

---

## Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).

---

*Desenvolvido por **Ygor Santos** — [LinkedIn](https://www.linkedin.com/in/ygor-santos-869152325/) | [GitHub](https://github.com/ygorzz)*
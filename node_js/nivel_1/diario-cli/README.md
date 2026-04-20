# diario-cli

CLI para salvar anotações de estudo num arquivo `diario.txt`, registrando automaticamente a data e hora de cada entrada.

Projeto desenvolvido como exercício prático do curso **Backend Node.js - Nível 1** da Alura.

---

## O que foi praticado

### ES Modules
- `import` / `export` / `export default`

### Funções assíncronas
- `async` / `await`

### Tratamento de erros
- `try` / `catch` / `throw` / `new Error()`
- Código de erro `ENOENT` — arquivo ou caminho inexistente

### Módulo `fs` (filesystem)
- `fs.promises.mkdir` — criar pasta (`recursive: true` para não errar se já existir)
- `fs.promises.appendFile` — adicionar conteúdo ao arquivo (cria se não existir)
- `fs.promises.readFile` — ler arquivo
- `fs.promises.writeFile` — sobrescrever arquivo

### Módulo `path`
- `path.resolve` — normalizar caminhos entre sistemas operacionais

### Date
- `new Date().toLocaleString('pt-BR')` — formatar data em português

### Commander
- `.command()` / `.argument()` / `.action()` — definir subcomandos CLI
- `.parseAsync()` — necessário quando os handlers são `async`

### npm
- `"bin"` no `package.json` — registrar o comando CLI
- `npm link` — instalar o comando globalmente no terminal
- Shebang `#!/usr/bin/env node` — indicar ao SO que o arquivo roda com Node.js

---

## Uso

```bash
diario add "Aprendi sobre async/await"
diario list
diario clear
```

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
npm link
```

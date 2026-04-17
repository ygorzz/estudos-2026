# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js learning project from the Alura "Backend Node.js - Nível 1" course. It contains:
- `nodejs-lib/` — completed CLI project that counts word frequencies in text files
- `diario-cli/` — completed CLI diary app (personal journal with add/list/clear commands)
- `task-cli/` — advanced practice exercise (not yet started)
- `notes_conceitos/` — concept notes taken during the course

## Running nodejs-lib

All commands should be run from `nodejs-lib/`:

```bash
# Install dependencies
npm install

# Run the CLI tool (requires -t for input file path and -d for output directory)
node src/cli.js -t arquivos/texto-aprendizado.txt -d resultados

# View available options
node src/cli.js --help
```

## Running diario-cli

All commands should be run from `diario-cli/`:

```bash
# Install dependencies
npm install

# Run directly via node
node src/cli.js add "Minha anotação aqui"
node src/cli.js list
node src/cli.js clear

# Or install globally via npm link and use as a standalone command
npm link
diario add "Minha anotação aqui"
diario list
diario clear
```

Data is persisted in `diario/diario.txt` (created automatically on first `add`).

## Architecture (nodejs-lib)

The data flow is: CLI args → read file → `contaPalavras()` → `montaSaidaArquivo()` → write result file.

- **`src/cli.js`** — Entry point. Uses `commander` to parse `-t` (text path) and `-d` (destination path) flags. Reads the file with `fs.readFile`, delegates processing, and writes results with `fs.promises.writeFile`.
- **`src/index.js`** — Core logic. `contaPalavras(texto)` splits text by `\n` into paragraphs, then counts word occurrences (only words ≥ 3 chars, stripped of punctuation via regex). Returns an array of objects `[{word: count}]`.
- **`src/helpers.js`** — `montaSaidaArquivo(listaPalavras)` formats the count array into a human-readable string, filtering to only words that appear more than once per paragraph.
- **`src/erros/tratamentoErros.js`** — Handles `ENOENT` (file not found) errors from `fs`.

## Architecture (diario-cli)

The data flow is: CLI command → command handler → `storage.js` → `diario/diario.txt`.

- **`src/cli.js`** — Entry point. Uses `commander` with `parseAsync()` to define three commands: `add <texto>`, `list`, and `clear`. Uses a shebang (`#!/usr/bin/env node`) to support `npm link` global usage.
- **`src/commands/add.js`** — `criaOuAdicionaAnotacao(texto)` prepends a `pt-BR` formatted timestamp `[dd/mm/yyyy HH:MM:SS]` to the text before persisting.
- **`src/commands/list.js`** — `listaAnotacoes()` delegates directly to `storage.list()` and returns the raw file content.
- **`src/commands/clear.js`** — `removeAnotacoes()` delegates to `storage.clear()` to wipe the diary file.
- **`src/storage.js`** — Persistence layer using `fs.promises`. `add()` creates the `diario/` folder if needed (recursive mkdir) and appends to the file. `list()` reads the file, returning `''` on `ENOENT`. `clear()` overwrites the file with an empty string.
- **`src/erros/trataErros.js`** — Maps `ENOENT` to a user-friendly `chalk.red` error message.

## Key Details

- Both projects use ES modules (`"type": "module"`) — all imports use `import`/`export` syntax.
- Dependencies: `chalk` for colored terminal output, `commander` for CLI argument parsing.
- `diario-cli` is registered as a bin (`"diario": "./src/cli.js"`) enabling use as a global command via `npm link`.
- No test framework is configured in any project.

## Repository Structure

```
nodejs-lib/                    # Completed CLI project (word frequency counter)
  src/
    cli.js                     # CLI entry point
    index.js                   # Word counting logic
    helpers.js                 # Output formatting
    erros/tratamentoErros.js   # Error handling
  arquivos/                    # Sample input .txt files
  resultados/                  # Output directory
diario-cli/                    # Completed CLI diary app
  src/
    cli.js                     # CLI entry point (add/list/clear commands)
    commands/
      add.js                   # Adds timestamped entry
      list.js                  # Lists all entries
      clear.js                 # Clears all entries
    storage.js                 # File persistence layer (fs.promises)
    erros/trataErros.js        # Error handling
  diario/
    diario.txt                 # Diary data file (auto-created)
task-cli/                      # Advanced practice exercise (not yet started)
notes_conceitos/               # Concept notes (async, promises, exports, npm, errors, npm-link)
```

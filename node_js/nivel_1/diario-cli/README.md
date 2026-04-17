# diario-cli

CLI para salvar anotações de estudo num arquivo `diario.txt`, registrando automaticamente a data e hora de cada entrada.

Projeto desenvolvido como exercício prático do curso **Backend Node.js - Nível 1** da Alura.

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
npm link
```

O `npm link` registra o comando `diario` globalmente no terminal.

## Uso

```bash
# Adicionar uma anotação
diario add "Aprendi sobre async/await"

# Listar todas as anotações
diario list

# Apagar todas as anotações
diario clear
```

## Exemplo de saída do diario.txt

```
[15/04/2026 14:32:00] Aprendi sobre async/await
[15/04/2026 15:10:45] Entendi a diferença entre callbacks e promises
[16/04/2026 09:05:12] Pratiquei tratamento de erros com try/catch
```

## Estrutura do projeto

```
diario-cli/
├── package.json
└── src/
    ├── cli.js           # Subcomandos do Commander (add, list, clear)
    ├── storage.js       # Leitura e escrita do diario.txt
    ├── erros/
    │   └── trataErros.js
    └── commands/
        ├── add.js       # Formata e adiciona a anotação
        ├── list.js      # Exibe as anotações
        └── clear.js     # Remove todas as anotações
```

## Tecnologias

- [Commander](https://github.com/tj/commander.js) — parsing de subcomandos CLI
- [Chalk](https://github.com/chalk/chalk) — output colorido no terminal

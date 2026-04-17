#!/usr/bin/env node
// shebang para mostrar ao programa onde executá-lo. Nesse caso, no node. Dessa forma, junto com o "npm link", não precisaremos digitar "node" no terminal.

import { Command } from 'commander';
import criaOuAdicionaAnotacao from "./commands/add.js";
import trataErros from "./erros/trataErros.js";
import listaAnotacoes from "./commands/list.js";
import removeAnotacoes from "./commands/clear.js";
import chalk from 'chalk';
import path from 'path';

const program = new Command();

program.version('0.0.1');

program
    .command('add')
    .argument('<texto>')
    .description('Anotação a ser incluída no diário.')
    .action(async (texto) => {
        try {
            // Como a função abaixo é assíncrona, retorna uma promise.
            // E essa promise deve ser capturada e guardada com await para que o catch capture o erro que foi lançado com throw.
            await criaOuAdicionaAnotacao(texto);
        } catch (erro) {
            trataErros(erro);
        }
    });

program
    .command('list')
    .description('Lista todas as anotações.')
    .action(async () => {
        try {
            const data = await listaAnotacoes();
            if (data.trim() === '') {
                console.log(chalk.yellow('O diário está vazio.'));
            } else {
                console.log(data);
            }
        } catch (erro) {
            trataErros(erro);
        }
    });

program
    .command('clear')
    .description('Remove todas as anotações.')
    .action(async () => {
        try {
            await removeAnotacoes();
        } catch (erro) {
            trataErros(erro);
        }
    });

// parseAsync pois o programa usa funções assíncronas.
program.parseAsync();
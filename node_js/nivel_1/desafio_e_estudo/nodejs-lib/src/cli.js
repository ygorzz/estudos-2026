import fs from 'fs';
// Biblioteca para manipular e normnalizar os caminhos do arquivo para garantir compatibilidade entre sistemas operacionais.
import path from 'path';
// Biblioteca para decorar as saídas no terminal
import chalk from 'chalk'
import trataErros from './erros/tratamentoErros.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
// Biblioteca para auxiliar a organização dos comandos da linha de comando da nossa própria biblioteca
import { Command } from 'commander';

// Cria nova instância da classe Command. Intancia toda a funcionalidade da lib e armazena em program
const program = new Command();

// Configuração da nossa própria Biblioteca;
program
     // Versão da nossa lib
    .version('0.0.1')
    // Opções da nossa lib. Comandos de entrada do usuário para que a lib funcione
    // - e -- são as flags que identificam o comando no terminal
    .option('-t --texto <string>', 'Caminho do texto a ser processado')
    .option('-d --destino <string>', 'Caminho da pasta onde salvar o resultado')
    // Recebe automaticamente as option como parâmetro e definimos o que fazer com elas
    .action(options => {
        // Desestrutura de options as option que definimos  
        const {texto, destino} = options;

        if(!texto || !destino){
            console.error(chalk.red('erro: por favor inserir o caminho de origem e destino.'));
            // program.help() -< exibir os comando possíveis da nossa lib
            program.help();
            return;
        } 

        // Normaliza o caminho e transforma no caminho absoluto do arquivo com resolve()
        const caminhoTexto = path.resolve(texto)
        const caminhoDestino = path.resolve(destino)

        try{
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('texto processado com sucesso!'))
        } catch (erro){
            console.log(chalk.red('ocorreu um erro no processamento:'), erro)
        }
    })

// Pega toda a configuração feita e converte para que possamos utilizar no terminal
program.parse()


// SUBSTITUÍDO PELA LIB COMMANDER:
// process.arg -> array com os argumentos da linha de comando
// const caminhoArquivo = process.argv;
// const link = caminhoArquivo[2];
// const endereco = caminhoArquivo[3];

function processaArquivo(texto, destino){
    // readFile(arquivo, encode, arrow function(erro para tratar, conteudo do arquivo lido))
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try{
            // Se houver erro com o readFile, o throw interrompe o programa, catch captura e trata o erro
            // Se houver erro com a execução de contaPalavras(), o catch captura e trata o erro
            if(erro) throw erro;
            const resultado = contaPalavras(texto);
            const textoFinal = montaSaidaArquivo(resultado);
            criarEsalvarSaida(destino, textoFinal);
        // catch -> trata um erro por vez
        } catch (erro){
            trataErros(erro);
        }
    })
}

// Cria o arquivo com o resultado
// writeFile(onde salvar, dados a serem salvos)
async function criarEsalvarSaida(enderecoArquivo, textoFinal){
    const arquivo = `${enderecoArquivo}/resultado.txt`; // cria o arquivo onde será salvo
    try {
        // writeFile não retorna nada, apenas realiza uma ação
        await fs.promises.writeFile(arquivo, textoFinal);
        console.log('Arquivo criado');
    } catch (erro) {
        throw erro;
    }
}
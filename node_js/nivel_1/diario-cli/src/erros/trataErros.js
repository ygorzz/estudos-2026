import chalk from 'chalk';

// Tratamento para erros específicos
export default function trataErros(erro) {
    if (erro.code == 'ENOENT') {
        throw new Error(chalk.red('Caminho do arquivo inválido. Verifique se o caminho está correto ou existe.'))
    } else {
        throw erro;
    }
}
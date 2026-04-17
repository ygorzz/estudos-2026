// Arquivo que possui a responsabilidade de manipular os arquivos com fs e path.
// Possui a responsabilidade exclusiva de persistir os dados

import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

// path.resolve -> Normaliza o caminho para ser compatível com diferentes sistemas operacionais.
const caminhoPasta = path.resolve('./diario')
const caminhoArquivo = path.resolve('./diario/diario.txt');

export async function add(anotacao) {
    try {
        // Cria uma pasta
        // {recursive: true} -> cria se não existe ou então não faz nada. 
        await fs.promises.mkdir(caminhoPasta, { recursive: true });
    } catch (erro) {
        throw erro;
    }

    try {
        let prefixo = '';
        // Lógica para pular uma linha a partir da segunda anotação
        try {
            const data = await list();

            if (data.length > 0) {
                prefixo = '\n';
            }
        } catch {
            // Aqui está vazio, pois se for identificado que o arquivo não existe quero apenas ignroar. Logo abaixo o arquivo é criado.
        }
        // Add anotação e cria arquivo
        await fs.promises.appendFile(caminhoArquivo, `${prefixo} ${anotacao}`);
        console.log(chalk.green('Anotação adicionada com sucesso!'));

    } catch (erro) {
        throw erro;
    }
}

export async function list(){
    try {        
        const anotacoes = await fs.promises.readFile(caminhoArquivo, 'utf-8');
        return anotacoes;
    } catch (erro) {
        if (erro.code === 'ENOENT') return '';
        throw erro;
    }
}

export async function clear(){
    try {
        const arquivoLimpo = '';
        await fs.promises.writeFile(caminhoArquivo, arquivoLimpo);
        console.log(chalk.green('Anotações removidas com sucesso!'));
    } catch (erro) {
        throw erro;
    }
}
// Arquivo para manipular a lib fs
import fs from 'fs';
import path from 'path';

// path.resolve -> normaliza o caminho para ser compatível com diferentes SOs 
export const filePath = path.resolve('./tasks.json');

export async function add(tarefa, id){
    try{
        await fs.promises.writeFile(filePath, JSON.stringify(tarefa, null, 2));   
    } catch (e){
        throw new Error('Erro ao adicionar tarefa');
    }
}

export async function list(){
    try{
        const listaTarefas = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(listaTarefas);
    } catch (e){
        throw e;
    }
}

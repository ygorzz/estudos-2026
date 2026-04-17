import { add } from '../storage.js';

export default async function criaOuAdicionaAnotacao(anotacao) {

    const data = new Date().toLocaleString('pt-BR');
    const dataTratada = data.replace(',', '');

    const textoFinal = `[${dataTratada}] ${anotacao}`;

    try{
        await add(textoFinal);
    } catch (erro){
        throw erro;
    }
    
}

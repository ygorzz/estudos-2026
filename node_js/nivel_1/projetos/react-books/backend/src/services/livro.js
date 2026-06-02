import fs from "fs";

const filePath = "./livros.json";

async function getTodosLivros() {
    const lista = await fs.promises.readFile(filePath);
    if (lista.length === 0) return false; // retornar array vazio ao invés de false
    return JSON.parse(lista);
}

async function getLivroPorId(id){
    const listaLivros = await getTodosLivros();
    const index = listaLivros.findIndex(livro => livro.id === id);
    if(index === -1) return {message: "Livro não encontrado"};
    return listaLivros[index]; 
}

async function addLivros(dados) {
    let dadosFinais = [];
    const dadosAtuais = await getTodosLivros();
    if (!dadosAtuais) {
        dadosFinais.push(...dados);
    } else {
        dadosFinais.push(...dadosAtuais, ...dados)
    }
    await fs.promises.writeFile(filePath, JSON.stringify(dadosFinais, null, 2));
}

async function patchLivros(id, atualizacao) {
    const listaLivros = await getTodosLivros();
    const index = listaLivros.findIndex(livro => livro.id === id);
    const livroAtualizado = {...listaLivros[index], ...atualizacao[0]};
    listaLivros[index] = livroAtualizado;
    await fs.promises.writeFile(filePath, JSON.stringify(listaLivros, null, 2));
}

async function deleteLivros(id) {
    const listaLivros = await getTodosLivros();
    const index = listaLivros.findIndex(livro => livro.id === id);
    const novaLista = listaLivros.filter(livro => livro.id !== id); 

    await fs.promises.writeFile(filePath, JSON.stringify(novaLista, null, 2));
} 

export {getTodosLivros, getLivroPorId, addLivros, patchLivros, deleteLivros};
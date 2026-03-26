export function adicionarLivro(titulo, autor, categoria, lido, arrayParaAdd){
    const livro = criarLivro(titulo, autor, categoria, lido)
    arrayParaAdd.push(livro)
}

function criarLivro(titulo, autor, categoria, lido) {

    if (lido.toLowerCase() === 'sim') {
        lido = true
    } else {
        lido = false
    }

    const livro = {
        titulo,
        autor,
        categoria,
        lido
    }

    return livro
}

export function filtrarLivroPorTitulo(arrayParaFiltrar, tituloLivro) {

    const livroDesejado = arrayParaFiltrar.filter(item => {
        return item.titulo.toLowerCase() === tituloLivro
    })

    return livroDesejado

}

export function marcarComoNaoLido(answer, livro) {
    if (answer.toLowerCase().trim() === 'sim') {
        livro.lido = false
        return true
    } else {
        return false
    }
}

export function marcarComoLido(answer, livro) {
    if (answer.toLowerCase().trim() === 'sim') {
        livro.lido = true
        return true
    } else {
        return false
    }
}

export function removerLivro(arrayParaRemover, tituloLivro){
    // findIndex -> retorna -1 se não encontra no array
    const indexLivroDesejado = arrayParaRemover.findIndex(item => {
        return item.titulo.toLowerCase() == tituloLivro
    })

    return indexLivroDesejado
}
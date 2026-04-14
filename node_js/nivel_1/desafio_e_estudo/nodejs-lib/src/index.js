export function contaPalavras(texto){
    const paragrafos = extraiParagafos(texto)
    // flatMap -> achata estruturas mais complexas/aninhadas em uma única maior com todos os dados
    // Então, um [], quando achatado, apenas some(é desconsiderado) na estrutura maior 
    // Isso é mais eficiente e performático que usar filter e map e percorrer duas vezes o array
    const contagem = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return []; // se for um array vazio, o flatmap apenas desconsidera no final da operação
        return exibeQuantidadeDeCadaPalavra(paragrafo)
    })

    // retorna um array de objetos
    return contagem
}

function extraiParagafos(texto){
    // split -> adiciona em um array o que está antes e depois de cada ocorrência do argumento passado 
    return texto.toLowerCase().split('\n');
}

function exibeQuantidadeDeCadaPalavra(paragrafo) {
    // split(' ') -> a cada repetição do parâmetro o conteúdo lido e o a ser lido é adicionado no array
    const listaPalavras = paragrafo.split(' ');
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            // Incrementa ou inicia a contagem da palavra no objeto
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    })

    // retorna um objeto
    return resultado;
}

function limpaPalavras(palavra) {
    // replace -> método para substituir caracteres em strings
    // substitui qualquer um dos caracteres da regex por string vazia
    const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    return palavra.replace(regex, '');
}


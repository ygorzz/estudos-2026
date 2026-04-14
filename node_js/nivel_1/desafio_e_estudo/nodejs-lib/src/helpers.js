function filtraOcorrencias(paragrafo) {
    // retorna uma lista de arrays
    return Object.entries(paragrafo).filter(([chave, valor]) => valor > 1)
}

// percorre a lista de palavras (array de objeto(paragrafos)) e filtraOcorrencias e adiciona em uma let usando o .join para transformar array e string, o resultado dessa função é entregue para a função de criar o arquivo em cli.js
// join() -> transforma todos os elementos de um array em uma única string permitindo personalizar um separador entre eles como argumento
function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, index) => {
        textoFinal += `Palavras que se repetem no parágrafo ${index + 1}: `;
        const palavrasRepetidas = filtraOcorrencias(paragrafo)
        for(const [palavra, ocorrencia] of palavrasRepetidas){
            textoFinal += `${palavra}(${ocorrencia}) `;
        }

        textoFinal += '\n'
    })

    return textoFinal;
}

export { montaSaidaArquivo }

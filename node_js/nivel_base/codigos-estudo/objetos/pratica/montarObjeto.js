const pares = [
  ['nome', 'João', 'Pedro'],
  ['idade', 30],
  ['cidade', 'Curitiba']
]

console.log(montarObejto(pares))

// Função para montar um objeto a partir de um array de duas posições
function montarObejto(arrayDePares){
    const objeto = {}
    // Para cada item dentro arrayDePares é capturada as duas primeiras posições com os nome satribuídos como 'chave' e 'valor'
    for(const [chave, valor] of arrayDePares){
        objeto[chave] = valor
    }
    return objeto
}

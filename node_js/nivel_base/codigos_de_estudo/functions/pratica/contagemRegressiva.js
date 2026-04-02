// Função recursiva
function contagemRegressiva(num){
    if(num === 0) return console.log('Lançamento!') // Condição de parada
    console.log(num)
    contagemRegressiva(num - 1)
}

contagemRegressiva(5)
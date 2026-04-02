// Acessando posição de um array como prop de um objeto

const receita = {
    nome: 'bolo', 
    igredientes: ['farinha', 'ovo', 'açúcar',  'sal', 'leite'],
    tempoDePreparo: 10 
}

const segundoIgrediente = receita.igredientes[1]
console.log(`Igrediente complementar; ${segundoIgrediente}`)
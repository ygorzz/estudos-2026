// DESTRUCTURING
// -> notação para extrair valores de um objeto ou array e atribuí-los a uma nova variável


const pessoa = {
    nome: 'ygor', 
    idade: 18, 
    feliz: true
}

// Aqui extraímos apenas o nome
const {nome} = pessoa

function saudacao ({nome}) {
    console.log(`Olá, ${nome}`)
}

saudacao(pessoa)


// Mesma ideia para arrays
// const [primeiraPosicao] = numbers
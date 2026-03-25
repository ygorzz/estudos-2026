const pessoa = {
    nome: "álvaro",
    idade: 89,
    pets: ["gato"]
}

// FOR...IN
// -> percorre propriedades de um OBJETO
// Nesse caso, para acessar o valor da chaves, usamos a notação de colchetes.
for (const chave in pessoa) {
    console.log(`Chave: ${chave} / Valor: ${pessoa[chave]}`)
}

// MÉTODOS
// -> todos esses retornam arrays 

// Para pegar todas as chaves de um objeto:
const keys = Object.keys(pessoa)
console.log("Chaves:", keys)

// Pegar todos os valores de um objeto:
const values = Object.values(pessoa)
console.log("Valores:", values)

// Para pegar todas as entradas (chaves e valores):
const entries = Object.entries(pessoa)
console.log("Entradas (chave/valor):", entries)


// EXERCÍCIOS DE FIXAÇÃO:

console.log('\nEXERCÍCIOS DE FIXAÇÃO\n')

// 1 - Lista de pessoas

const pessoas = [
    {
        nome: 'lucas',
        idade: 13
    },

    {
        nome: 'valmir',
        idade: 45
    },

    {
        nome: 'salete',
        idade: 90
    }
]

// 2 - Filtrando maiores de idade
function maiorDeIdade(array) {

    // aqui tbm devemos usar a notação de colchetes
    const nomes = []
    for(const item of array){
        if(item.idade >= 18){
            nomes.push(item.nome)
        }
    }

    return nomes

}

console.log("Exibindo nomes dos maiores de idade:")
console.log(maiorDeIdade(pessoas))

// 3 - Objeto com método
const usuario = {
    nome: 'hugo', 
    saudacao: function () {
        console.log(`Olá, ${this.nome}!`)
    }
}

console.log("\nExibindo uma função como propriedade do objeto:")
usuario.saudacao()


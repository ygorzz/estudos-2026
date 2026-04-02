const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Todos números: ', numeros)

// FILTER -> filtra valores e retorna um novo array:
// -> pode receber o index como parametro
// Passa por cada numero e retorna apenas os ímpares
console.log('Números ímpares filtrados:')
const impares = numeros.filter(numero => {
    return numero % 2 !== 0
})

console.log('Ímpares: ', impares)

// MAP -> transforma os valores e cria um novo array de mesmo tamanho:
// -> pode receber o index como parâmetro
console.log('Números mapeados: ')
const menosUm = numeros.map((numero) => {
    return numero - 1
})
console.log(menosUm)




// EXERCÍCOS DE FIXAÇÃO
console.log('\nEXERCÍCIOS DE FIXAÇÃO:\n')

// 1 - Soma dos números de um array
const nums = [1, 2, 3]
let soma = 0
nums.forEach(num => {
    soma += num
})
console.log('Soma dos nums:', soma)

// 2 - Descontos com map
const precos = [23.45, 78.12, 5.67, 99.01, 12.3, 44.56, 67.89, 3.21, 88.77, 50.0]

const novoPreco = precos.map(preco => {
    return preco - (preco * 10 / 100)
})
console.log("\nValores com descontos: ", novoPreco)

// 3 - Filtrar idades
const idades = [23, 54, 1, 23, 5, 13, 14]
const maioresDeIdade = idades.filter(idade => {
    return idade >= 18
})
console.log("\nMaiores de idade: ", maioresDeIdade)

// 4 - Filtrar tarefas
const tarefas = ['Limpar casa', 'Estudar', 'Ler', 'Trabalhar']
const status = [true, true, false, true]

const tarefasPendentes = tarefas.filter((tarefa, index) => {
    return status[index] === false    
})
console.log("Tarfeas pendentes: ", tarefasPendentes)
const familia = ['filho', 'filha', 'pai', 'mãe']

console.log(familia)

// Acessar o último valor:
ultimoValor = familia[familia.length - 1]
console.log('Último valor:', ultimoValor)

// Add um valor no final do array:
console.log('Add avô - push()')
familia.push('avô')
console.log(familia)

// Remover valores do array:
// splice -> primeiro arg é a posição que deseja remover / segundo arg é quantos valores deseja remover a partir dessa posição
console.log('Remove avô - splice()')
familia.splice(4, 1)
console.log(familia)

// Remover o último valor do array
console.log('Remove último valor do array - pop()')
familia.pop()
console.log(familia)

// Buscar um valor no array 
// indexOf -> retorna o indice do valor ou -1
console.log('Buscando por um valor - indexOf()')
const valor = familia.indexOf('tio')
console.log(valor)

// Pegando uma 'fatia' do array
// silce -> recebe 1 parametro índice (pega os valores a partir dele )
// ou 
// recebe 2 parametros índices (pega o trecho entre eles não incluído o indice final)
console.log('Pegando uma fatia do array - slice()')
const filhos = familia.slice(0, 2)
console.log(filhos)

// forEach -> podemos tanto passar apenas o valor de cada posição como arg, quanto o valor e o indice
console.log('\nforEach:')

// for...of tbm funcionaria para apenas o valor, porém é mais comum o forEach por ser uma função própria dos arrays
console.log('Apenas um parâmetro - valor')
familia.forEach(valor => console.log(valor))

console.log('Dois parâmetros - valor e indice')
familia.forEach((valor, indice) => {
    console.log('índice e valor:', indice, valor)
})


// ! - Quando você insere elementos de tipos variados em um array, o JavaScript não realiza conversões implícitas para uniformizar os dados. Cada elemento retém seu tipo original.
// ! - Uma prática recomendada é utilizar técnicas de verificação de tipos dentro dos laços de iteração. Métodos como typeof ou funcionalidades disponíveis em bibliotecas podem ajudar a garantir que cada elemento seja manipulado de forma adequada.

// Exemplo:

const mistura = [42, 'texto', true, { chave: 'valor' }, () => 'função'];

mistura.forEach(item => {
  if (typeof item === 'function') {
    console.log('Executando função:', item());
  } else {
    console.log('Item:', item);
  }
});

// Além do FOR tradicional, temos:

import { log } from "node:console"

// FOR..OF -> itera sobre objetos iteráveis: arrays, strings, Set, Map, typedArrays
let nome = 'Ygor'
for(let char of nome){
    console.log(char)
}

// WHILE -> verifica e dps executa
let num = 0
while(num < 3){
    console.log(num)
    num++
}

console.log('--------------')

// DO...WHILE -> executa e dps verifica, garante que seja executado pelo menos uma vez
let numero = 0
do{
    console.log(numero)
    numero++
} while (numero < 3)

// -> Se iniciar a variável com valor mais alto que a condição: 
// while -> não roda
// do while -> roda uma vez


// EXERCÍCOS DE FIXAÇÃO
console.log("EXERCÍCOS DE FIXAÇÃO:")

// 1 -  Gerar números e interromper o laço
console.log('1:')
let tentativas = 0
let nums

for(let i = 0; i < 30; i++){
    nums = Math.floor(Math.random() * (50 + 1 - 1) + 1)
    tentativas++
    if(nums === 15){
        console.log(`Número 15 em ${tentativas} tentativas.`)
        break
    }
}

if(nums !== 15){
    console.log("Número 15 não foi gerado.")
}

// 2 - Incrementa se não é divisível por 5
console.log('2:')
let contador = 0
for(let i = 0; i < 50; i++){
    const numero = Math.floor(Math.random() * (50 + 1 - 1) + 1)
    if(numero % 5 === 0){
        continue
    }
    contador++
}

console.log(`${50 - contador} números eram divisíveis por 5`)

// 3 - Tentativa de adivinhação de um núemro com WHILE
console.log('3:')

const numeroSecreto = Math.floor(Math.random() * 100)
let numeroGerado = 0
let count = 0

while(numeroGerado !== numeroSecreto){
    numeroGerado = Math.floor(Math.random() * 100)
    count++
}

console.log(`Número adivinhado (${numeroSecreto}) em ${count} tentativas`)

// Gera numero enquanto diferente de par - while
console.log('4:')

let random = 1
while(random % 2 !== 0){
    random = Math.floor(Math.random() * 50)
}

console.log(random)

// Verifica se é palíndromo
console.log('4:')

let texto = 'ossos'
let palindromo = ''
for(let i = texto.length - 1; i >= 0; i--){
    palindromo += texto[i] 
}
texto === palindromo ? console.log(`${texto} é um palíndromo`) : console.log(`${texto} não é um palíndromo`)
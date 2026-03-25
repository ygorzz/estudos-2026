// Além do FOR tradicional, temos:

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

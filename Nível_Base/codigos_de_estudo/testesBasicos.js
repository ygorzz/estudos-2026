// Teste básico 1 
const city = 'sáo lourenço'
const state = 'MG'
const country = 'brasil'
console.log(`Você etsá em ${city} - ${state}, ${country}`);  


// Teste básico 2
let temCarteira = true
console.log(typeof temCarteira) // retorna 'boolean'


// Teste básico 3
let salario = 3000
let reajuste = salario / 10
let novo_salario = salario+reajuste
console.log('Houve um reajuste de 10%. Seu novo salário é:', novo_salario) 


// Teste básico 4
cliques = 0
for(let i = 0; i < 3; i++){
    cliques++
}
console.log(cliques)


// Teste básico 5

// ao concatenar uma variável string e uma int obtemos uma nova variável string
let mensagem = 'Olá!'
let numero = 151
let mensagem3 = mensagem + numero
console.log(`${mensagem3} / ${typeof mensagem3}`) // typeof retorna 'string'



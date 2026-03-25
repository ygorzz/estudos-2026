// Comparação
let idade1 = 20
let idade2 = '20'
let comparacao = idade1 == idade2 // retorna true ou false
console.log('São iguais? ', comparacao)

// Comparação estrita
let idade3 = 20
let idade4 = '20'

let comparar  = idade3 === idade4 // === ou !==-> compara tbm o tipo da variável
console.log('São estritamente iguais? ', comparar)


// TESTES DE FIXAÇÃO:

// 1 - maioridade
let idade = 18
let maiorDeIdade = idade >= 18
console.log('é maior de idade? ', maiorDeIdade)

// 2 - limite de faltas
let aulas = 100
let faltas = 37  
let ultrapassaOlimite = faltas > aulas * 25 / 100
console.log('Ultrapassou o limite? ', ultrapassaOlimite)

// 3 - verificação de login
let temLogin = true
let temSenha = false
let podeLogar = temLogin && temSenha
console.log('Pode logar? ', podeLogar)
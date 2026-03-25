// Objeto -> chave: valor

// ! - Tbm é possível acessar as chaves com pessoa["chave"]

// Craindo um objeto com propriedades:
const pessoa = {
    nome: 'Lucas', 
    idade: 23, 
    solteiro: false
}
console.log(pessoa)

// Adicionando propriedades:
pessoa.sexo = 'masculino'
pessoa.altura = 1.87
pessoa.irmaos = ['saulo']
console.log("Após add propriedades:\n", pessoa)

// Adicionando e removendo elementos em uma propriedade:
pessoa.irmaos.push('velimar')
pessoa.irmaos.splice('saulo', 1)
console.log('Após add e deletar um valor em irmãos:\n', pessoa)

// Alterando propriedades:
pessoa.nome = 'Paulo'
console.log("Após alterar nome:\n", pessoa)

// Deletando propriedades:
delete pessoa.altura
console.log('Após deletar altura:\n', pessoa)

// Acessando objetos aninhados
const irmao = {
    nome: 'saulo', 
    idade: 24, 
    sexo: 'masculino'
}

// A propriedade irmaos passar a ser um objeto
pessoa.irmaos = irmao
console.log('"Irmãos" agora tbm é um objeto:\n', pessoa)


// ! -  Quando o nome da propriedade não seguir a convenção padrão, ou seja, possuir caracteres especiais, espações ou iniciar com números, use SEMPRE A NOTAÇÃO DE COLCHETES
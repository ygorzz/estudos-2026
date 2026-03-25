// USAR A NOTAÇÃO DE CHAVES {} -> OBJETOS

const user = {
    username: 'jao23',
    password: 'jao1234' 
}

// SPREAD OPERATOR
// -> Espalha/Clona um objeto

console.log('\nSPREAD OPERATOR:')
// clonando
const user2 = {...user}
console.log('User2:', user2)

// alterando/add apenas propriedades específicas e clonando o restante;
const user3 = {
    ...user2, 
    password: 'abobrinha', 
    ePro: true
}
console.log('User3:', user3)


// REST OPERATOR
// -> Separa uma propriedade específica do restante
console.log("\nREST OPERATOR")
const {username, ...rest} = user3 // guarda o username em uma variável separada do array com as outras props
console.log(username)
console.log(rest)

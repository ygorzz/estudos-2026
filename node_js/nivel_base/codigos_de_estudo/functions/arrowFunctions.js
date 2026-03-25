// Além da sintaxe padrão para a criação de uma função, tbm temos a estrutura das arrow functions que simplificam a escrita: 

const saudacao = (nome) => {
    console.log('Olá,', nome)
} 

saudacao('ygor')

// E, para funções mais simples, que possuem apenas um argumento e apenas uma linha no corpo, podemos simplificar ainda mais dessa forma:

const despedida = nome => console.log('Tchau,', nome)
despedida('ygor')
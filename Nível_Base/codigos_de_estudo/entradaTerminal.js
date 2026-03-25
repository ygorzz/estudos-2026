// Para interagir com o user pelo terminal devemos importar a lib 'readline' (com require()), o node não carrega ela por padrão
const readline = require('readline')

// Após importar devemos criar a interface para que o usuário possa interagir:
const leitor = readline.createInterface({
    // vinculamos a entrada e saída de dados ao processo do terminal para que a interação pelo msm seja possível
    input: process.stdin,
    output: process.stdout 
})

// Finalmente podemos interagir:
// question -> recebe a pergunta que será feita e o que serrá feito com a resposta do user
leitor.question('Qual seu nome? ', (nome) => {
    console.log("Olá,", nome)

    leitor.question('Onde vc mora? ', (localizacao) => {
        console.log('Sua localização:', localizacao)

        // Após finalizar a interação, devemos fechar o leitor:
        leitor.close()
    })
})

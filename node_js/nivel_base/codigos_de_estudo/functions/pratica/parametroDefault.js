// Parâmetro recebendo um valor default
function saudacao(nome = ''){
    if(nome){
        console.log(`Olá, ${nome}! Bem vindo!`)
    } else {
        console.log('Olá! Bem vindo!')
    }
}

saudacao('laura')
saudacao()
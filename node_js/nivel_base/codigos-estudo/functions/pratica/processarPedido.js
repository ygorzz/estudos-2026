// Função HOF (Higher-Order Function )
function processarPedido(nomeCliente, tipoCliente, callback){
    console.log(`Porcessando pedido de ${nomeCliente}...`)
    setTimeout(() => callback(nomeCliente, tipoCliente), 2000)
}


// Função Callback
function mensagemPersonalizada(nomeCliente, tipoCliente){
    if(tipoCliente === 'vip'){
        console.log(`Obrigado pela preferência, ${nomeCliente}! Você ganhou frete grátis.`)
    } else if(nomeCliente === 'novo') {
        console.log(`Bem-vindo(a), ${nomeCliente}! Aproveite um cupom de boas-vindas.`)
    } else {
        console.log(`Obrigado pela sua compra, ${nomeCliente}!`)
    }
}

processarPedido('Ygor', 'vip', mensagemPersonalizada)
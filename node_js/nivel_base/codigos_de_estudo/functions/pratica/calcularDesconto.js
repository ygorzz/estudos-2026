import { log } from "node:console"

function calcularDesconto(valor, desconto = 10){ 
    return valor - (valor * desconto) / 100
}

const desconto = calcularDesconto(100, 10)
console.log(`Com desconto você pagará apenas R$${desconto}`)